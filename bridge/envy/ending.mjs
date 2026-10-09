// Ending art owns the viewport; battle geometry and controls keep their native layout.
export function endingPresentation(s){
  const kind=s?.scene?.kind;
  const endings={
    'first-defeat':[0,'窺視之子倒下了','眼球深處，有東西正在甦醒。'],
    'dragon-defeat':[1,'擊破嫉妒化身','眾目熄滅，只剩逃跑的身影。'],
    'worm-reveal':[2,'原來，這才是本體','追進幽林，抓住它。'],
    victory:s?.captured?[3,'擊破嫉妒 · 捕獲本體','擊破化身，捕獲嫉妒本體。']:[4,'嫉妒已敗 · 本體逃入幽林','巨瞳散去，本體逃入幽林。'],
    lost:[5,'被嫉妒吞沒','換個節奏，再試一次。'],
    'capture-retry':[4,'本體溜走了','本體仍藏在幽林深處。'],
  };
  const value=endings[kind];return value?{index:value[0],title:value[1],caption:value[2]}:null;
}
export function drawEndingPage(c,image,index,w,h){
  c.clearRect(0,0,w,h);c.fillStyle='#061510';c.fillRect(0,0,w,h);
  if(!image?.complete||!image.naturalWidth)return false;
  const sw=image.naturalWidth/3,sh=image.naturalHeight/2;
  const scale=Math.max(w/sw,h/sh),cw=w/scale,ch=h/scale;
  // Crop within one panel, retaining aspect ratio and never showing adjacent endings.
  c.imageSmoothingEnabled=false;
  c.drawImage(image,(index%3)*sw+(sw-cw)/2,Math.floor(index/3)*sh+(sh-ch)/2,cw,ch,0,0,w,h);
  return true;
}
