// Authored native pixel sprites for the promenade only. The heroine keeps
// the established navy coat, gold scarf, teal bob and star hair clip.
const rect=(c,x,y,w,h,col)=>{c.fillStyle=col;c.fillRect(x,y,w,h);};
function star(c,x,y,col='#ffe1a1'){for(const [a,b,w,h]of [[2,0,2,7],[0,2,7,2],[1,1,4,4]])rect(c,x+a,y+b,w,h,col);}
export function charmHero(c,x,y,{beam=false,dodge=0,dodgeDir=-1,clock=0,reduced=false}={}){
 c.save();c.translate(Math.round(x),Math.round(y));if(dodge)c.rotate(dodgeDir*.16);
 const b=(x,y,w,h,col)=>rect(c,x,y,w,h,col),ink='#15293e',hair='#173f50',shine='#427b86',skin='#f3cfb5';
 b(-9,-73,18,3,ink);b(-12,-70,24,4,hair);b(-14,-66,28,18,hair);b(-14,-48,5,13,hair);b(9,-48,5,13,hair);b(-8,-63,16,17,skin);b(-6,-46,12,4,skin);b(-3,-42,6,7,skin);
 b(-11,-68,20,5,shine);b(-10,-65,16,5,hair);b(-8,-60,8,3,hair);b(-11,-60,3,9,shine);b(8,-61,3,12,shine);b(-7,-56,5,2,ink);b(3,-56,5,2,ink);b(-8,-57,2,2,ink);b(8,-57,2,2,ink);b(-6,-54,4,3,'#fff1df');b(3,-54,4,3,'#fff1df');b(-4,-54,2,3,'#437c8b');b(4,-54,2,3,'#437c8b');b(-4,-54,1,1,'#ffffff');b(4,-54,1,1,'#ffffff');b(0,-50,2,2,'#e3ad98');b(-8,-49,3,2,'#df9c9c');b(6,-49,3,2,'#df9c9c');b(-2,-45,5,1,'#b86179');star(c,-13,-66);
 b(-10,-35,20,17,ink);b(-8,-34,16,19,'#315678');b(-4,-35,8,15,'#f1e5d0');b(-2,-33,4,14,'#d9c7b4');b(-11,-33,4,18,'#25466c');b(7,-33,4,18,'#25466c');b(-10,-18,20,7,'#25466c');b(-9,-12,18,3,'#90cfda');b(-4,-25,2,2,'#d9b774');b(-4,-18,2,2,'#d9b774');b(-9,-37,18,4,'#e9bc5e');b(4,-33,4,12,'#f2d184');
 const flutter=reduced?0:Math.round(Math.sin(clock/170)*2);b(7,-31,9,3,'#e9bc5e');b(14,-29+flutter,5,3,'#f2d184');star(c,-8,-29,'#a8dcdb');
 b(-8,-9,6,9,'#243b55');b(3,-9,6,9,'#243b55');b(-9,-2,8,5,'#90cfda');b(2,-2,10,5,'#90cfda');b(-9,3,9,2,ink);b(2,3,11,2,ink);
 if(beam){b(-16,-33,6,4,skin);b(-18,-30,4,8,skin);b(11,-33,7,4,skin);b(16,-31,4,7,skin);star(c,18,-58,'#ffd7e8');}
 else{b(-13,-31,4,13,'#25466c');b(-14,-19,4,7,skin);b(10,-31,4,13,'#25466c');b(11,-19,4,7,skin);}
 if(dodge){b(-24,-12,6,2,'#97dfd8');b(-27,-6,9,2,'#ceeeda');}
 c.restore();
}
export function charmBoy(c,x,y,n,scale=1){
 c.save();c.translate(Math.round(x),Math.round(y));c.scale(scale,scale);if(n.kind==='ghost')c.globalAlpha=.78;
 const b=(x,y,w,h,col)=>rect(c,x,y,w,h,col),skin=n.handsome?'#efd0b3':'#d8b191',ink='#253348';
 if(n.handsome){
  b(-8,-68,16,3,ink);b(-11,-65,22,17,'#233d53');b(-8,-61,16,17,skin);b(-6,-44,12,4,skin);b(-4,-40,8,6,skin);b(-11,-64,21,4,'#4c7080');b(-8,-61,10,4,'#233d53');b(-10,-60,4,8,'#233d53');b(7,-62,4,12,'#233d53');b(-7,-56,5,2,ink);b(3,-56,5,2,ink);b(-6,-53,4,2,'#f7eee3');b(3,-53,4,2,'#f7eee3');b(-4,-53,2,2,'#4b8496');b(4,-53,2,2,'#4b8496');b(0,-50,2,3,'#d4a990');b(-2,-45,5,1,'#b57e7a');
  b(-13,-34,26,16,ink);b(-11,-33,22,17,n.kind==='star'?'#5c5785':'#38747e');b(-4,-34,8,18,'#e8e4d3');b(-2,-33,4,15,'#d7bd85');b(-10,-17,20,5,'#264957');b(-9,-12,7,12,'#26384d');b(3,-12,7,12,'#26384d');b(-10,0,9,4,'#e1d1b4');b(2,0,11,4,'#e1d1b4');b(-16,-31,4,17,n.tone);b(12,-31,4,17,n.tone);b(-16,-15,4,5,skin);b(12,-15,4,5,skin);star(c,8,-31,'#f1d08c');
 }else{
  const messy=n.id%3,head=messy===2?10:12;
  b(-head,-63,head*2,6,'#493b3c');b(-head-2,-57,head*2+4,18,skin);b(-head,-39,head*2,5,skin);b(-head-1,-60,head*2+2,6,'#66504a');b(-head-2,-55,3,10,'#493b3c');b(head-1,-55,3,10,'#493b3c');b(-5,-64,4,4,'#493b3c');b(4,-66,3,6,'#493b3c');b(-8,-53,5,2,ink);b(4,-51,5,2,ink);b(-6,-50,2,3,ink);b(5,-48,2,3,ink);b(-1,-49,5,5,'#be8b70');b(-6,-39,12,2,'#8e6965');b(-2,-40,3,2,'#f5e9c8');
  if(messy===1){b(-10,-52,9,7,'#536168');b(2,-52,9,7,'#536168');b(-8,-50,5,3,'#ccdad5');b(4,-50,5,3,'#ccdad5');b(-1,-50,3,2,'#536168');}
  b(-4,-34,8,5,skin);b(-12,-29,24,22,n.tone);b(-14,-20,28,10,n.tone);b(-9,-7,7,7,'#4c4c43');b(3,-7,7,7,'#4c4c43');b(-11,0,11,4,'#b7a98a');b(2,0,11,4,'#b7a98a');b(-17,-25,5,14,skin);b(12,-25,5,14,skin);b(-5,-28,11,3,'#ece0c2');b(-4,-24,4,4,'#975b62');b(2,-24,4,4,'#975b62');
 }
 if(n.kind==='mask'){b(-8,-58,16,11,'#eee5d2');b(-5,-55,3,3,'#964d63');b(3,-55,3,3,'#964d63');}
 c.restore();
}
