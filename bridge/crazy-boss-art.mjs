// Fine pixel polygons and one-pixel highlights echo the concept art; no portrait is used in battle.
const shape = (c, points, color) => {
  c.fillStyle = color; c.beginPath(); points.forEach(([x,y],i) => i ? c.lineTo(x,y) : c.moveTo(x,y)); c.closePath(); c.fill();
};
const mark = (c, rows, x, y, color, size = 1) => {
  c.fillStyle = color; rows.forEach((row,j) => [...row].forEach((v,i) => { if(v === 'X') c.fillRect(x+i*size,y+j*size,size,size); }));
};
const SUITS = [
  ['.XX.XX.','XXXXXXX','XXXXXXX','.XXXXX.','..XXX..','...X...'],
  ['XXXXX','....X','...X.','..X..','..X..','..X..'],
  ['...X...','..XXX..','.XXXXX.','XXXXXXX','XX.X.XX','...X...','..XXX..'],
];
export function drawFineDealer(c, s, reduced) {
  const second = s.form === 2, pulse = reduced ? 0 : Math.round(Math.sin(s.elapsed / 500) * 2);
  c.save(); c.translate(0, pulse); c.imageSmoothingEnabled = false;
  // Collar, cloak and bow: finer steps rather than a large square skull outline.
  shape(c, [[99,79],[83,103],[106,98],[115,106],[165,106],[174,98],[197,103],[181,79]], '#43152e');
  shape(c, [[101,82],[88,101],[107,95],[119,104],[161,104],[173,95],[192,101],[179,82]], '#9b2850');
  shape(c, [[112,89],[120,104],[140,98],[160,104],[168,89]], '#f0ddce');
  shape(c, [[120,98],[120,105],[134,101],[140,106],[146,101],[160,105],[160,98],[145,100],[140,96],[135,100]], '#731e43');
  // Faceted gold crown, ruby and individual casino chips.
  shape(c, [[79,31],[84,44],[94,48],[186,48],[196,44],[201,31],[184,40],[176,31],[168,41],[145,34],[140,27],[135,34],[112,41],[104,31],[96,40]], '#72431f');
  shape(c, [[81,30],[86,42],[98,44],[182,44],[194,42],[199,30],[184,37],[176,29],[167,39],[144,32],[140,25],[136,32],[113,39],[104,29],[96,37]], '#d49b39');
  c.fillStyle='#fff0b0'; c.fillRect(98,42,84,1); c.fillRect(87,36,2,5); c.fillRect(192,34,2,6);
  for(const [x,base,count,tone] of [[108,40,3,'#78348a'],[135,34,4,'#b62d57'],[161,40,3,'#8c459f']]) {
    for(let chip=0;chip<count;chip++) { const y=base-chip*3;
      c.fillStyle='#40142b'; c.fillRect(x-1,y,13,3); c.fillStyle=tone; c.fillRect(x,y,11,2);
      c.fillStyle='#fff0dc'; c.fillRect(x+2,y,2,1); c.fillRect(x+7,y,2,1);
    }
  }
  shape(c,[[140,36],[145,40],[140,45],[135,40]],'#f6449c');c.fillStyle='#ffe0ec';c.fillRect(139,37,1,4);
  // The machine face has three inset reel panels, a bevel and a hinged vault jaw.
  shape(c, [[94,47],[100,44],[180,44],[187,48],[187,79],[180,89],[166,95],[114,95],[100,89],[93,80]], '#291727');
  shape(c, [[97,48],[103,46],[178,46],[184,49],[184,78],[178,86],[164,92],[116,92],[103,86],[96,79]], second?'#ac692a':'#bfaea3');
  c.fillStyle=second?'#ffd67d':'#ffeddd';c.fillRect(101,48,77,2);c.fillRect(97,51,2,24);
  c.fillStyle=second?'#f0b64f':'#857674';c.fillRect(101,78,77,2);c.fillRect(180,52,2,23);
  for(let reel=0;reel<3;reel++) { const x=103+reel*25;
    c.fillStyle='#4c2930';c.fillRect(x-1,52,24,26);c.fillStyle='#f4e8d5';c.fillRect(x,53,22,23);
    c.fillStyle='#cfbba8';c.fillRect(x,53,22,2);c.fillStyle='#fff7e7';c.fillRect(x,56,1,17);
    const glyph=SUITS[reel]; const color=s.attack?'#d42c72':reel===2?'#241d29':'#bd2748';
    mark(c,glyph,x+(22-glyph[0].length*2)/2,59,color,2);
    c.fillStyle='#5b3a30';c.fillRect(x,75,22,1);
  }
  // Corner screws and coin-tooth mouth keep the second form recognisably armoured.
  for(const [x,y] of [[99,50],[180,50],[101,80],[179,80]]) { c.fillStyle='#5b3a30';c.fillRect(x,y,2,2);c.fillStyle='#fff0b0';c.fillRect(x,y,1,1); }
  shape(c, [[112,83],[117,86],[163,86],[169,82],[165,91],[156,97],[125,97],[116,92]], '#1d1021');
  for(let i=0;i<7;i++) {c.fillStyle=second?'#e8b652':'#b9a39e';c.fillRect(119+i*6,86,3,second?5:3);c.fillStyle=second?'#fff0b0':'#fff0dc';c.fillRect(119+i*6,86,2,1);}
  if(second) {shape(c,[[186,52],[191,51],[194,55],[191,59],[186,58]],'#a12573');c.fillStyle='#ff74db';c.fillRect(188,54,3,2);c.fillStyle='#fff0df';c.fillRect(188,54,1,1);}
  c.restore();
}

export function drawFineGauntlet(c, x, y, gold) {
  c.save(); c.translate(x - 26, y);
  // Raised knuckles and tapered, articulated talons, with one-pixel specular seams.
  shape(c, [[2,0],[7,-4],[23,-4],[28,2],[28,48],[23,65],[7,69],[0,59],[0,9]], gold?'#71421e':'#6d5a63');
  shape(c, [[4,1],[9,-2],[23,-2],[26,3],[26,48],[21,62],[8,65],[3,58]], gold?'#d79d47':'#d2bfb9');
  shape(c, [[5,2],[9,0],[13,0],[13,57],[9,62],[5,56]], gold?'#ffe7a0':'#fff0e1');
  c.fillStyle=gold?'#fff6c9':'#fff9ed';c.fillRect(8,4,1,16);c.fillRect(8,27,1,13);
  for(let finger=0;finger<4;finger++) {
    const fy=-8+finger*20;
    shape(c, [[19,fy],[30,fy],[39,fy+5],[44,fy+14],[45,fy+28],[42,fy+39],[38,fy+46],[40,fy+29],[36,fy+17],[29,fy+11],[19,fy+11]], gold?'#75431e':'#847079');
    shape(c, [[20,fy+1],[29,fy+1],[37,fy+6],[41,fy+15],[42,fy+28],[39,fy+38],[39,fy+26],[35,fy+15],[28,fy+9],[20,fy+9]], gold?'#e9b65d':'#eed9cf');
    shape(c, [[21,fy+2],[28,fy+2],[35,fy+7],[38,fy+15],[38,fy+21],[36,fy+15],[32,fy+10],[26,fy+5],[21,fy+5]],gold?'#fff2ba':'#fff7ec');
    c.fillStyle=gold?'#9e6426':'#af959a';c.fillRect(28,fy+2,1,7);c.fillRect(36,fy+10,3,1);c.fillRect(39,fy+21,3,1);
  }
  c.fillStyle=gold?'#8b5421':'#725068';c.fillRect(-1,-10,29,8);c.fillStyle=gold?'#f7cd78':'#d4a1b4';c.fillRect(0,-9,27,2);
  for(let chip=0;chip<5;chip++) {c.fillStyle=chip%2?'#fff0de':'#a83361';c.fillRect(chip*5,-7,4,3);}
  shape(c,[[8,-11],[13,-14],[18,-11],[18,-6],[13,-3],[8,-6]],'#cb3288');c.fillStyle='#ffb6e4';c.fillRect(11,-11,2,3);
  c.restore();
}
