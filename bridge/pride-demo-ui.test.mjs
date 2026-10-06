import test from 'node:test';
import assert from 'node:assert/strict';
import { setupDemoUI, DEMO_PROFILES } from './pride-demo-ui.mjs';

class Element {
  hidden=true;style={setProperty(){}};classList={toggle(){}};listeners=new Map();attrs=new Map();
  constructor(action){this.dataset={action};}
  addEventListener(type,fn){const a=this.listeners.get(type)||[];a.push(fn);this.listeners.set(type,a);}
  emit(type,props={}){for(const fn of this.listeners.get(type)||[])fn({button:0,preventDefault(){},...props});}
  setAttribute(k,v){this.attrs.set(k,v);}
  setPointerCapture(id){this.captured=id;}
  focus(){this.focused=true;}
}
function fixture(t,touch){
 const old={window:globalThis.window,document:globalThis.document};
 const win=new Element();if(touch)win.ontouchstart=null;
 const nodes=Object.fromEntries(['#tutorial','#skip','#game-title','#tutorial-title','#instructions','#control-hint'].map(id=>[id,new Element()]));
 const controls=new Element(),buttons=['up','left','down','right','action','alt'].map(a=>new Element(a));controls.querySelectorAll=()=>buttons;
 const doc=new Element();doc.documentElement=new Element();doc.body=new Element();doc.querySelector=id=>id==='.touch-controls'?controls:nodes[id];
 globalThis.window=win;globalThis.document=doc;
 t.after(()=>{globalThis.window=old.window;globalThis.document=old.document;});
 t.mock.timers.enable({apis:['setTimeout']});
 const state={difficulty:'normal',held:new Set()},canvas=new Element(),game={value:'pride-truth-trial'},sent=[];let resets=0;
 const ui=setupDemoUI({canvas,context:{},game,getState:()=>state,sendAction:a=>sent.push(a),resetClock:()=>resets++});
 return {ui,win,doc,nodes,controls,buttons,state,canvas,game,sent,resets:()=>resets};
}
test('Tutorial pauses input, starts after exactly three seconds, and skip resets the clock',t=>{
 const f=fixture(t,true);f.ui.present();assert.equal(f.ui.playing(),false);
 f.buttons[3].emit('pointerdown',{pointerId:1});assert.deepEqual(f.sent,[]);
 t.mock.timers.tick(2999);assert.equal(f.ui.playing(),false);t.mock.timers.tick(1);assert.equal(f.ui.playing(),true);assert.equal(f.resets(),1);
 f.ui.present();f.nodes['#skip'].emit('click');assert.equal(f.ui.playing(),true);assert.equal(f.resets(),2);assert.equal(f.canvas.focused,true);
 t.mock.timers.tick(3000);assert.equal(f.resets(),2);
});
test('Touch supports six controls, simultaneous holds, cancellation and blur without stuck movement',t=>{
 const f=fixture(t,true);f.ui.present();f.nodes['#skip'].emit('click');assert.equal(f.controls.hidden,false);assert.equal(f.buttons.length,6);
 f.buttons[3].emit('pointerdown',{pointerId:1});f.buttons[4].emit('pointerdown',{pointerId:2});assert.deepEqual([...f.state.held],['right','action']);assert.deepEqual(f.sent,['right','action']);
 f.buttons[3].emit('pointercancel',{pointerId:1});assert.deepEqual([...f.state.held],['action']);assert.equal(f.buttons[3].attrs.get('aria-pressed'),'false');
 f.win.emit('blur');assert.equal(f.state.held.size,0);assert.equal(f.buttons[4].attrs.get('aria-pressed'),'false');
 f.buttons[0].emit('pointerdown',{pointerId:3});f.doc.hidden=true;f.doc.emit('visibilitychange');assert.equal(f.state.held.size,0);
});
test('Desktop hides virtual controls and every game supplies distinct titles, themes and Chinese instructions',t=>{
 const f=fixture(t,false);assert.equal(f.controls.hidden,true);
 assert.equal(new Set(Object.values(DEMO_PROFILES).map(p=>p[1])).size,Object.keys(DEMO_PROFILES).length);
 for(const id of Object.keys(DEMO_PROFILES)){f.game.value=id;f.ui.present();assert.equal(f.nodes['#game-title'].textContent,DEMO_PROFILES[id][0]);assert.match(f.nodes['#instructions'].textContent,/[\u4e00-\u9fff]/);}
 f.state.difficulty='hard';f.game.value='pride-truth-trial';f.ui.present();assert.ok(f.nodes['#instructions'].textContent.includes('依目標'));
});
