import test from 'node:test';
import assert from 'node:assert/strict';
import {createLust,input,point,update} from './engine.mjs';
import {CHARM_POINTS,CHARM_HEAD_OFFSET} from './charm.mjs';
const advance=(s,ms)=>{for(let i=0;i<ms&&!s.scene&&!s.over;i+=20)update(s,Math.min(20,ms-i));};
test('teachers warn early and passing in another lane avoids the real collision',()=>{
 const s=createLust({scenario:'charm'}),m=s.round;m.teachers[0].x=m.worldX+105;update(s,20);assert.equal(m.teacherWarning,true);input(s,'up');advance(s,260);input(s,'up',false);assert.ok(Math.abs(m.y-m.teachers[0].y)>21);input(s,'right');advance(s,800);input(s,'right',false);assert.equal(m.stun,0);assert.equal(m.stamina,60);assert.ok(m.worldX>m.teachers[0].x);
});
test('C and Shift action can sidestep a teacher while an unguarded collision still hurts',()=>{
 const s=createLust({scenario:'charm'}),m=s.round;m.teachers[0].x=m.worldX+5;input(s,'alt');update(s,20);assert.equal(m.stun,0);assert.equal(m.stamina,60);assert.ok(m.dodge>0);const time=m.dodge;input(s,'alt',false);input(s,'alt');assert.equal(m.dodge,time);advance(s,700);assert.ok(Math.abs(m.y-m.teachers[0].y)>21);
 const hit=createLust({scenario:'charm'});hit.round.teachers[0].x=hit.round.worldX;update(hit,20);assert.equal(hit.round.stun,1800);assert.equal(hit.round.stamina,46);
});
test('touch walking changes both coordinates and head tapping selects the actual sprite',()=>{
 const s=createLust({scenario:'charm'}),m=s.round;point(s,150,458);advance(s,500);assert.ok(m.y>450);assert.ok(m.worldX>120);const boy=m.npcs[0];point(s,boy.x-m.camera,boy.y-CHARM_HEAD_OFFSET);assert.equal(m.targetPerson,boy.id);assert.equal(m.pointerX,null);
});
test('holding alone can beat regular and triple rivals in both difficulties',()=>{
 for(const difficulty of ['normal','hard'])for(const id of [1,10]){
  const s=createLust({scenario:'charm',difficulty}),m=s.round,n=m.npcs[id];m.worldX=n.x-40;m.targetPerson=id;input(s,'action');advance(s,4500);assert.equal(n.status,'following');assert.ok(m.followers.includes(id));assert.equal(m.duelTaps,0);assert.ok(m.stamina>0);
 }
});
test('handsome boys actually award ten times ordinary points, with one follower each',()=>{
 const scores=[];
 for(const id of [0,1]){const s=createLust({scenario:'charm'}),m=s.round,n=m.npcs[id];m.worldX=n.x-40;m.targetPerson=id;input(s,'action');advance(s,4200);input(s,'action',false);assert.equal(m.score,1);assert.equal(m.followers.length,1);scores.push(m.promScore);assert.equal(m.lastPrize,n.points);}
 assert.equal(scores[0],CHARM_POINTS.ordinary);assert.equal(scores[1],scores[0]*10);
});
test('teacher stun pauses both duel bars, rather than stealing a win while input is disabled',()=>{
 const s=createLust({scenario:'charm'}),m=s.round,n=m.npcs[1];m.worldX=n.x-40;m.targetPerson=1;input(s,'action');advance(s,1300);input(s,'action',false);m.teachers[0].x=m.worldX;update(s,20);assert.ok(m.stun>0);const own=n.progress,rival=n.rivalProgress;advance(s,600);assert.equal(n.progress,own);assert.equal(n.rivalProgress,rival);input(s,'action');advance(s,4200);assert.equal(n.status,'following');
});
test('masks still block one teacher hit and real ghost loss subtracts that boys prize',()=>{
 const s=createLust({scenario:'charm'}),m=s.round;m.mask=1;m.teachers[0].x=m.worldX;update(s,20);assert.equal(m.mask,0);assert.equal(m.stun,0);
 const boy=m.npcs[6];boy.status='following';m.followers=[boy.id];m.score=1;m.promScore=boy.points;m.ghostPursuer={x:m.worldX,y:m.y,active:true,id:boy.id};update(s,20);assert.equal(m.score,0);assert.equal(m.promScore,0);
});
