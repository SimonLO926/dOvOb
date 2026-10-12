var hf=Object.defineProperty;var Vs=(n,e)=>{for(var t in e)hf(n,t,{get:e[t],enumerable:!0})};var il={};Vs(il,{choose:()=>nl,dispose:()=>Jn,id:()=>df,init:()=>ff,input:()=>mf,point:()=>pf,rect:()=>tl,render:()=>_f,update:()=>gf});var rx=Object.freeze({title:Object.freeze([92,113]),status:Object.freeze([114,139]),hint:Object.freeze([462,480]),play:Object.freeze([140,460]),feedback:Object.freeze([475,495]),controls:Object.freeze([505,535])});function yi(n,e,t,{row:i=0,color:r="#fff1cc",size:s=12,plain:a=!1}={}){if(!t)return;let o=a&&["title","status"].includes(e)?e==="title"?43:i?88:68:{title:110,status:i?138:125,hint:474,feedback:490,controls:i?532:514}[e];n.save(),n.textBaseline="alphabetic",n.textAlign="center",n.fillStyle=r,n.font=`${e==="title"||e==="feedback"?"bold ":""}${s}px sans-serif`,n.fillText(t,140,o,264),n.restore()}function th(n,{title:e,status:t,detail:i,hint:r,elapsed:s=0,feedback:a,controls:o,touch:l,encounter:c,plain:h=!1}){yi(n,"title",e,{size:h?20:18,plain:h}),yi(n,"status",t,{size:h?12:11,plain:h});let u=c&&Number.isFinite(c.hp)?`HP ${c.hp}`:"";yi(n,"status",[i,u].filter(Boolean).join(" \xB7 "),{row:1,size:h?10:9,plain:h}),s<3e3&&yi(n,"hint",r),yi(n,"feedback",c?.result||a),yi(n,"controls",o),yi(n,"controls",l,{row:1,size:11})}var ax=Object.freeze({ink:"#140c25",glass:"#372247",gold:"#d6b36e",light:"#fff0c6",heart:"#ff5178"}),ln=null;function Gs(n,{x:e=0,y:t=0,w:i=280,h:r=560,time:s=0,reduced:a=!1,variant:o="palace",bands:l=!0}={}){!ln&&typeof Image<"u"&&(ln=new Image,ln.src=new URL("./assets/pride-palace.webp",import.meta.url).href),n.save(),n.beginPath(),n.rect(e,t,i,r),n.clip();let c=a?0:s,h=n.createLinearGradient(e,t,e+i,t+r);if(h?.addColorStop(0,"#281339"),h?.addColorStop(.55,"#1e122d"),h?.addColorStop(1,"#100c1c"),n.fillStyle=h||"#1e122d",n.fillRect(e,t,i,r),ln?.naturalWidth){let u=Math.max(i/ln.naturalWidth,r/ln.naturalHeight);n.globalAlpha=.32,n.drawImage(ln,e+(i-ln.naturalWidth*u)/2,t+(r-ln.naturalHeight*u)/2,ln.naturalWidth*u,ln.naturalHeight*u),n.globalAlpha=1}for(let u=0;u<5;u++){let d=e+(u+.5)*i/5,p=t+r*.27,g=t+r*.82,y=i*.062;n.fillStyle=u%2?"#3d285433":"#71577722",n.strokeStyle="#c7a56933",n.lineWidth=1,n.beginPath(),n.moveTo(d-y,p+10),n.lineTo(d,p),n.lineTo(d+y,p+10),n.lineTo(d+y,g),n.lineTo(d-y,g),n.closePath(),n.fill(),n.stroke(),n.strokeStyle="#e2baf422",n.beginPath(),n.moveTo(d-y+3,g-18),n.lineTo(d+y-3,p+30),n.stroke()}n.strokeStyle="#b18b5022",n.lineWidth=1;for(let u=0;u<4;u++){let d=t+r*(.82+u*.06);n.beginPath(),n.moveTo(e,d),n.lineTo(e+i,d),n.stroke()}for(let u=0;u<12;u++){let d=e+(17+u*67)%i,p=t+r*.28+(u*47+c*.006)%(r*.5);n.fillStyle=u%3?"#dfc4ff33":"#d6b36e44",n.fillRect(Math.round(d),Math.round(p),2,2)}if(o.includes("nested")||o.includes("maze")){n.strokeStyle="#9874bb22";for(let u=0;u<3;u++)n.strokeRect(e+i*(.1+u*.06),t+r*(.3+u*.05),i*(.8-u*.12),r*(.5-u*.1))}l&&(n.fillStyle="#140c25ee",n.fillRect(e,t,i,Math.min(140,r)),n.fillRect(e,t+r-100,i,100),n.fillStyle="#d6b36e55",n.fillRect(e+12,t+139,i-24,1),n.fillRect(e+12,t+r-100,i-24,1)),n.restore()}function Ws(n,{x:e,y:t,w:i,h:r},s=0,a=!1){n.save(),n.lineWidth=4,n.strokeStyle="#120b24",n.strokeRect(e+1,t+1,i-2,r-2),n.lineWidth=2,n.strokeStyle=a?"#98ffe0":"#fff2c6",n.strokeRect(e+1,t+1,i-2,r-2),n.strokeStyle=a?"#98ffe0":"#f4c771",n.lineWidth=4;let o=Math.min(11,i/4,r/4);for(let[l,c,h,u]of[[e,t,1,1],[e+i,t,-1,1],[e,t+r,1,-1],[e+i,t+r,-1,-1]])n.beginPath(),n.moveTo(l+h*o,c),n.lineTo(l,c),n.lineTo(l,c+u*o),n.stroke();n.fillStyle=a?"#98ffe0":"#ffffff",n.fillRect(e+i/2-4,t-3,8,3),n.restore()}function vt(n,e,t,i){n.beginPath(),e.forEach(([r,s],a)=>a?n.lineTo(r,s):n.moveTo(r,s)),n.closePath(),t&&(n.fillStyle=t,n.fill()),i&&(n.strokeStyle=i,n.stroke())}function Zi(n,e,t,i=3,r="#fff1b0"){n.fillStyle=r,n.fillRect(e-i,t,i*2+1,1),n.fillRect(e,t-i,1,i*2+1)}function Yn(n,e,t,i,r,s="#98e8ff"){vt(n,[[e-i/2,t],[e-i/2+2,t-r/2],[e+i/2-2,t-r/2],[e+i/2,t],[e+i/2-2,t+r/2],[e-i/2+2,t+r/2]],s,"#d9b45e"),vt(n,[[e-i/2+2,t-r/2],[e,t],[e+i/2-2,t-r/2]],"#ffffff99"),vt(n,[[e,t],[e+i/2,t],[e+i/2-2,t+r/2]],"#28305277")}function nh(n,e,t=12){n.save(),n.scale(t/12,t/12);let i=["\u265B","\u25C8","\u2726","\u265C","\u263E","\u2756","\u269C","\u2727"],r=i.indexOf(e);return r===0?vt(n,[[-10,6],[-11,-7],[-5,-2],[0,-11],[5,-2],[11,-7],[10,6]],"#d6b36e","#fff0c6"):r===1||r===5?(Yn(n,0,0,r===1?9:6,12,"#d4a9ef"),r===5&&(Yn(n,-8,0,3,6,"#e5c886"),Yn(n,8,0,3,6,"#e5c886"))):r===2||r===7?(vt(n,[[0,-12],[3,-3],[12,0],[3,3],[0,12],[-3,3],[-12,0],[-3,-3]],r===2?"#e5c886":"#b9a1ee","#fff0c6"),r===7&&Yn(n,0,0,4,4,"#352143")):r===3?(n.fillStyle="#d6b36e",n.fillRect(-8,-9,16,5),n.fillRect(-5,-4,10,12),n.fillRect(-9,8,18,3),n.fillStyle="#261734",n.fillRect(-2,0,4,6)):r===4?(n.fillStyle="#d4a9ef",n.beginPath(),n.arc(0,0,11,0,Math.PI*2),n.fill(),n.fillStyle="#372247",n.beginPath(),n.arc(5,-4,9,0,Math.PI*2),n.fill()):r===6&&vt(n,[[0,-12],[5,-5],[2,2],[10,-3],[8,5],[2,6],[2,11],[-2,11],[-2,6],[-8,5],[-10,-3],[-2,2],[-5,-5]],"#e5c886","#fff0c6"),n.restore(),r>=0}function Qo(n,e,t,i=10,r=0,s=1){n.save(),n.translate(e,t),n.scale(s,s),n.lineWidth=1;let a=[-17,-20,-15,-22][r%4]-Math.floor(r/4),o=[-6,-3,0][Math.floor(r/4)%3];vt(n,[[-24,15],[-28,a],[-15,-6],[0,-25],[15,-6],[28,a],[24,15]],"#ae762e","#ffe898"),vt(n,[[-22,10],[-24,a+6],[-14,-2],[0,-19],[14,-2],[24,a+6],[22,10]],"#ffd700"),vt(n,[[-19,7],[-14,-2],[0,-15],[14,-2],[19,7]],"#6b4d9e");for(let l of[-26,0,26])Yn(n,l,l===0?-25:a,5,6,l===0?"#d7b4ff":"#fff1b0");for(let l=-18;l<=18;l+=6)n.strokeStyle="#e9b84f",n.beginPath(),n.arc(l,8,3,Math.PI,Math.PI*2),n.stroke();n.fillStyle="#8d5429",n.fillRect(-24,10,48,9),n.fillStyle="#edbd59",n.fillRect(-24,10,48,2),n.fillStyle="#ffeab1",n.fillRect(-24,17,48,2);for(let l of[-16,16])Yn(n,l,o,3+r%3,5,r%2?"#a6ddeb":"#d7b4ff");for(let l of[-17,17])Yn(n,l,14,4,5,r%2?"#cab2ff":"#e4a5d6");Yn(n,0,12,i,10),n.fillStyle="#fff0ad";for(let l=-21;l<23;l+=7)n.fillRect(l,20,2,2);n.restore()}function el(n,e,t,i,r,s=0,{theme:a}={}){Gs(n,{x:e,y:t,w:i,h:r,time:s,variant:a||"palace",bands:!1})}var uf=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."];function Ji(n,e,t,i="#ff5178",r=1){n.save(),n.globalAlpha=r,n.fillStyle=i,uf.forEach((s,a)=>[...s].forEach((o,l)=>{o==="X"&&n.fillRect(Math.round(e-7+l*2),Math.round(t-6+a*2),2,2)})),n.restore()}function ih(n,e,t,i,r="#ffd700",s=18){n.save();for(let a=0;a<s;a++){let o=a*2.399,l=5+i%500/500*(12+a%5*5);n.globalAlpha=1-i%500/500,Zi(n,e+Math.cos(o)*l,t+Math.sin(o)*l,1+a%2,r)}n.restore()}var kr=["\u265B","\u25C8","\u2726","\u265C","\u263E","\u2756","\u269C","\u2727"];function xi(n,e){let t=[...n];for(let i=t.length-1;i>0;i--){let r=Math.floor(e()*(i+1));[t[i],t[r]]=[t[r],t[i]]}return t}function Zn(n,e,t){let i=n.difficulty==="hard"?"hard":"normal";return{elapsed:0,difficulty:i,random:n.random||Math.random,timeLeft:i==="hard"?t:e,score:0,hp:100,status:"playing",focus:0,selected:[],feedback:"",lock:0,disposed:!1}}function $i(n,e){n.disposed||n.status!=="playing"||(e=Number.isFinite(e)?Math.max(0,e):0,n.elapsed+=e,n.timeLeft=Math.max(0,n.timeLeft-e),n.lock=Math.max(0,n.lock-e),!n.lock&&n.mismatch&&(n.selected=[],n.mismatch=!1),n.timeLeft||(n.status="lost"))}function Jn(n){n.disposed=!0,n.selected=[]}function $n(n){return!n.disposed&&n.status==="playing"&&!n.lock}function Kn(n,e,t,i,r="mirror",s={}){n.textBaseline="alphabetic",Gs(n,{time:e.elapsed,variant:r}),n.strokeStyle="#d6b36e",n.lineWidth=1,n.strokeRect(6,6,268,548),th(n,{title:t,encounter:s.encounter,status:`${Math.ceil(e.timeLeft/1e3)}\u79D2 \xB7 ${e.score}\u5206${s.encounter?"":` \xB7 HP ${e.hp}`}`,detail:s.status,hint:i,elapsed:e.elapsed,feedback:e.feedback,controls:e.status==="won"?"\u904E\u95DC\uFF01":e.status==="lost"?"\u6311\u6230\u5931\u6557":s.controls||"\u65B9\u5411\u9375\u79FB\u52D5 \xB7 \u7A7A\u767D\u9375\u63C0\u9078",touch:e.status==="playing"?s.touch||"\u89F8\u63A7\u76F4\u63A5\u63C0":""})}function Xs(n,e,t,i,r,s=!1,a="mirror"){let{x:o,y:l,w:c,h}=i,u=e.selected.includes(t),d=e.focus===t,p=a==="links";n.save(),n.shadowColor="#0008",n.shadowBlur=5,n.shadowOffsetY=3;let g=n.createLinearGradient(o,l,o+c,l+h);g?.addColorStop(0,u?"#80633d":"#50335f"),g?.addColorStop(1,u?"#493649":"#24162f"),n.fillStyle=g||"#372247",n.beginPath(),n.roundRect(o,l,c,h,5),n.fill(),n.shadowBlur=0,n.lineWidth=d?2:1,n.strokeStyle=d?"#fff0c6":"#b89863",n.stroke(),p||(n.strokeStyle="#addcff66",n.strokeRect(o+5,l+5,c-10,h-10),n.fillStyle="#d0edff22",n.fillRect(o+9,l+8,5,h-16)),n.save(),n.translate(o+c/2,l+h/2),s&&n.scale(-1,1),n.fillStyle="#fff0c6",n.font=p?"24px serif":"28px serif",n.textAlign="center",n.textBaseline="middle",nh(n,r,p?10:14)||n.fillText(r,0,0),n.restore(),(d||u)&&Ws(n,i,e.elapsed,u),d&&Ji(n,o+c-9,l+9,"#ff5178"),n.restore()}function vi(n,e,t){return e>=n.x&&e<n.x+n.w&&t>=n.y&&t<n.y+n.h}function qs(n,e,t,i,r){if(!$n(n))return;let s={left:-1,right:1,up:-i,down:i}[e];s&&(n.focus=(n.focus+s+t)%t),e==="action"&&r(n,n.focus)}var df="pride-mirror-match";function ff(n={}){let e=Zn(n,22e3,26e3);return e.pairs=e.difficulty==="hard"?6:4,e.items=[...xi(kr.slice(0,e.pairs),e.random),...xi(kr.slice(0,e.pairs),e.random)],e.removed=[],e}function tl(n,e){return{x:e<n.pairs?25:165,y:142+e%n.pairs*52,w:90,h:44}}function nl(n,e){if(!$n(n)||!Number.isInteger(e)||e<0||e>=n.items.length||n.removed.includes(e)||n.selected.includes(e)||(n.focus=e,n.selected.length&&n.selected[0]<n.pairs==e<n.pairs&&(n.selected=[]),n.selected.push(e),n.selected.length<2))return;let[t,i]=n.selected;n.items[t]===n.items[i]?(n.removed.push(t,i),n.score+=100,n.selected=[],n.feedback="\u93E1\u50CF\u914D\u5C0D +100",n.removed.length===n.items.length&&(n.status="won")):(n.timeLeft=Math.max(0,n.timeLeft-2e3),n.lock=650,n.mismatch=!0,n.feedback="\u914D\u932F \u22122\u79D2",n.timeLeft||(n.status="lost"))}function pf(n,e,t){let i=n.items.findIndex((r,s)=>vi(tl(n,s),e,t));nl(n,i)}function mf(n,e){if($n(n)){if((e==="left"||e==="right")&&(n.focus=(n.focus+n.pairs)%n.items.length),e==="up"||e==="down"){let t=n.focus<n.pairs?0:n.pairs;n.focus=t+(n.focus%n.pairs+(e==="up"?-1:1)+n.pairs)%n.pairs}e==="action"&&nl(n,n.focus)}}function gf(n,e){$i(n,e)}function _f(n,e,t){Kn(n,e,"\u93E1\u50CF\u914D\u5C0D","\u5DE6\u53F3\u5404\u7FFB\u4E00\u5F35\uFF0C\u914D\u5C0D\u76F8\u540C\u5716\u6848","mirror",{encounter:t}),n.strokeStyle="#8bbacb",n.beginPath(),n.moveTo(140,140),n.lineTo(140,450),n.stroke(),e.items.forEach((i,r)=>{e.removed.includes(r)||Xs(n,e,r,tl(e,r),e.selected.includes(r)?i:"?",r>=e.pairs)})}var sl={};Vs(sl,{choose:()=>rl,dispose:()=>Jn,id:()=>yf,init:()=>xf,input:()=>Sf,point:()=>vf,rect:()=>Ys,render:()=>bf,update:()=>Mf});var yf="pride-crown-choice";function xf(n={}){let e=Zn(n,12e3,9e3),t=Math.max(0,Math.min(1,n.bossHpRatio??1));return e.phase=t<=1/3?3:t<=2/3?2:1,e.count=(e.difficulty==="hard"?6:3)+(e.phase-1)*3,e.target=Math.floor(e.random()*e.count),e.rejected=[],e.difference=Math.max(1,4-e.phase-(e.difficulty==="hard"?.5:0)),e.gemWidth=[10,8,6][e.phase-1]-(e.difficulty==="hard"?1:0),e}function Ys(n,e){return{x:16+e%3*84,y:188+Math.floor(e/3)*66,w:78,h:58}}function rl(n,e){!$n(n)||!Number.isInteger(e)||e<0||e>=n.count||n.rejected.includes(e)||(n.focus=e,n.visualSelection=0,e===n.target?(n.score=300,n.status="won",n.feedback="\u771F\u6B63\u738B\u51A0 +300"):(n.rejected.push(e),n.hp=Math.max(0,n.hp-(n.difficulty==="hard"?15:10)),n.lock=350,n.feedback="\u5047\u7687\u51A0\uFF0C\u6263\u8840\uFF01",n.hp||(n.status="lost")))}function vf(n,e,t){rl(n,Array.from({length:n.count},(i,r)=>r).find(i=>vi(Ys(n,i),e,t)))}function Sf(n,e){qs(n,e,n.count,3,rl)}function Mf(n,e){$i(n,e),!n.disposed&&Number.isFinite(e)&&(n.visualTime=(n.visualTime||0)+Math.max(0,e),n.visualSelection=(n.visualSelection??500)+Math.max(0,e))}function bf(n,e,t){Kn(n,e,"\u52A0\u5195\u6289\u64C7","\u6BD4\u8F03\u4E2D\u592E\u51B0\u85CD\u5BF6\u77F3\u95CA\u5EA6","crown",{encounter:t});let i=e.visualTime||0;if(n.canvas?.addEventListener&&n.getTransform){let r=n.getTransform();n.canvas._prideCrownHover={s:e,matrix:r},n.canvas._prideCrownListener||(n.canvas._prideCrownListener=!0,n.canvas.addEventListener("pointermove",s=>{let a=n.canvas._prideCrownHover;if(a.s.disposed)return;let o=n.canvas.getBoundingClientRect(),l=new DOMPoint((s.clientX-o.left)*n.canvas.width/o.width,(s.clientY-o.top)*n.canvas.height/o.height).matrixTransform(a.matrix.inverse());a.s.hover=Array.from({length:a.s.count},(c,h)=>h).find(c=>vi(Ys(a.s,c),l.x,l.y))}),n.canvas.addEventListener("pointerleave",()=>{n.canvas._prideCrownHover&&(n.canvas._prideCrownHover.s.hover=void 0)}))}n.save(),el(n,15,142,250,38,i),Qo(n,140,159,e.gemWidth+e.difference,0,.8),n.fillStyle="#dfc78c",n.font="9px sans-serif",n.fillText("\u5FA1\u85CF\u539F\u77F3",65,174),n.fillText("\u8FA8\u8A8D\u95CA\u5EA6",216,174);for(let r=0;r<e.count;r++){let s=Ys(e,r),a=e.focus===r,o=e.hover===r,l=e.status==="won"&&r===e.target;n.globalAlpha=e.rejected.includes(r)?.25:1,el(n,s.x,s.y,s.w,s.h,i),n.fillStyle=o||a?"#6b4d9e66":"#35234299",n.fillRect(s.x+4,s.y+4,s.w-8,s.h-8),n.strokeStyle=l?"#fff4c1":o||a?"#ffd700":"#936f48",n.lineWidth=o||a?2:1,n.strokeRect(s.x+2,s.y+2,s.w-4,s.h-4);let c=l?Math.sin(Math.min(1,(e.visualSelection||0)/350)*Math.PI)*4:0;Qo(n,s.x+s.w/2,s.y+30-c,e.gemWidth+(r===e.target?e.difference:0),r,.8),(o||a||l)&&Ws(n,{x:s.x+2,y:s.y+2,w:s.w-4,h:s.h-4},i,l),a&&Ji(n,s.x+s.w-10,s.y+10,"#ff5178"),(o||a)&&(Zi(n,s.x+8,s.y+8,2),Zi(n,s.x+s.w-9,s.y+s.h-9,2)),l&&ih(n,s.x+s.w/2,s.y+28,i)}n.restore()}var ll={};Vs(ll,{dispose:()=>Jn,id:()=>Ef,init:()=>Af,input:()=>oh,point:()=>Cf,render:()=>Pf,update:()=>Rf});function Tf(n){let e=Math.min(1,n/16),t=Math.sin(n*2.3)*3;return{light:`rgb(${238-e*38+t} ${208-e*47+t} ${155+e*31+t})`,stone:`rgb(${188-e*38+t} ${138-e*40+t} ${82+e*55+t})`,shade:`rgb(${113-e*26+t} ${76-e*21+t} ${51+e*53+t})`,roof:`hsl(${44-e*7} 67% ${82-e*9}%)`,gold:"#e5bb68",mortar:"#503650",window:"#302139"}}function al(n,e,t,i){n.beginPath(),n.rect(e,t,i,22)}function wf(n,e,t,i){vt(n,[[e,t],[e+2.4,t+.7],[e+.7,t+2.5]],i),vt(n,[[e+3.1,t+.2],[e+5.6,t+.8],[e+3.8,t+2]],i),n.strokeStyle=i,n.lineWidth=.5,n.beginPath(),n.moveTo(e+.7,t+1),n.lineTo(e+2,t+3.5),n.stroke()}function rh(n,e,t,i,r,{clock:s=0,stress:a=0,reduced:o=!1}={}){let l=Tf(r);n.save(),n.lineWidth=.8,n.fillStyle=l.stone,n.fillRect(e,t,i,22),n.beginPath(),n.rect(e,t,i,22),n.clip();let c=n.createLinearGradient(e,t,e,t+22);c.addColorStop(0,l.light),c.addColorStop(.38,l.stone),c.addColorStop(.86,l.stone),c.addColorStop(1,l.shade),al(n,e,t,i),n.fillStyle=c,n.fill(),n.save(),al(n,e,t,i),n.clip();let h=o?0:Math.sin(s*.006+r*1.7)*Math.min(.65,Math.abs(a)*.02);for(let u=0;u<3;u++){let d=t+6+u*5,p=(u%2?-1:1)*h;for(let g=-1;g<Math.ceil(i/13);g++){let y=e+g*13+(u%2?6:0)+p;n.fillStyle=(g+u+r)%3?"#fff0c51a":"#39254624",n.fillRect(y+.6,d+.5,12,4),n.strokeStyle="#63415366",n.lineWidth=.5,n.strokeRect(y,d,13,5),n.fillStyle="#fff0c54a",n.fillRect(y+1,d+.5,5+(g+u+4)%4,.5)}}n.restore(),n.fillStyle=l.gold,n.fillRect(e,t,i,1.5),n.fillStyle="#fff0bb",n.fillRect(e+1,t+1.5,i-2,.7),n.fillStyle="#754d4377",n.fillRect(e+2,t+3,i-4,3);for(let u=5;u<i-6;u+=10)wf(n,e+u,t+3.1,"#ffe1a6cc");for(let u=15;u<i-7;u+=25){let d=e+u;n.beginPath(),n.moveTo(d-4,t+18.5),n.lineTo(d-4,t+12),n.arc(d,t+12,4,Math.PI,0),n.lineTo(d+4,t+18.5),n.closePath(),n.fillStyle=l.window,n.fill(),n.strokeStyle=l.roof,n.lineWidth=1.6,n.stroke(),n.fillStyle="#bd8bd166",n.fillRect(d-2.5,t+12,1,5),n.fillStyle="#f2ca76",n.fillRect(d-5,t+19,10,1),n.strokeStyle="#8f664b",n.lineWidth=.6,n.beginPath(),n.moveTo(d,t+7.5),n.lineTo(d,t+9.5),n.stroke()}n.fillStyle="#432d4266",n.fillRect(e+2,t+20,i-4,1),n.fillStyle=l.gold,n.fillRect(e,t+21,i,1),al(n,e,t,i),n.strokeStyle="#6b4b54",n.lineWidth=.7,n.stroke(),n.restore()}function ol(n,e,t,i){n.save(),n.translate(e,t),n.scale(i,i),n.beginPath(),n.moveTo(-42,4),n.bezierCurveTo(-51,-6,-33,-13,-23,-10),n.bezierCurveTo(-22,-30,6,-33,12,-14),n.bezierCurveTo(27,-24,40,-11,38,-4),n.bezierCurveTo(58,-3,53,10,38,11),n.bezierCurveTo(7,15,-20,12,-42,4),n.closePath();let r=n.createLinearGradient(0,-30,0,15);r.addColorStop(0,"#ffe5c7cc"),r.addColorStop(1,"#c1a1db08"),n.fillStyle=r,n.fill(),n.restore()}function sh(n,e,t){n.save();let i=n.createLinearGradient(0,0,0,460);i.addColorStop(0,"#21152f"),i.addColorStop(.33,"#583769"),i.addColorStop(.68,"#9d6d91"),i.addColorStop(1,"#e7bb83"),n.fillStyle=i,n.fillRect(0,0,280,560),vt(n,[[190,155],[280,315],[280,430],[226,228]],"#fff1c20d"),vt(n,[[47,249],[0,345],[0,402],[71,279]],"#f4d6ff0c");let r=t?0:Math.sin(e*16e-5)*5;ol(n,42+r,199,.9),ol(n,226-r,256,1.05),ol(n,80-r*.5,332,.58),n.save(),n.beginPath(),n.rect(0,140,280,320),n.clip();for(let[o,l,c]of[[-9,346,27],[32,380,22],[65,359,25],[211,370,23],[248,327,31]])vt(n,[[o,453],[o,l+13],[o+c/2,l],[o+c,l+13],[o+c,453]],"#65527655","#ebc89666"),vt(n,[[o+2,l+15],[o+c/2,l+4],[o+c/2,450],[o+2,450]],"#f6d9e033"),vt(n,[[o+3,l+48],[o+c-3,l+27],[o+c-3,l+35],[o+3,l+56]],"#fff3d677"),n.strokeStyle="#ffe9bb77",n.lineWidth=.7,n.beginPath(),n.moveTo(o+c/2,l),n.lineTo(o+c/2,452),n.stroke();for(let o=0;o<3;o++)n.fillStyle=["#98778766","#80607c66","#76567366"][o],n.fillRect(12+o*8,448-o*8,68-o*16,8),n.fillRect(205+o*7,450-o*7,64-o*14,7);for(let[o,l]of[[254,349],[44,401],[222,389]])Zi(n,o,l,2,"#fff0c7bb");n.restore();let s=n.createLinearGradient(0,445,0,460);s.addColorStop(0,"#93728600"),s.addColorStop(1,"#5a3e63"),n.fillStyle=s,n.fillRect(0,445,280,15);let a=n.createLinearGradient(0,90,0,140);a.addColorStop(0,"#21152f77"),a.addColorStop(1,"#21152f00"),n.fillStyle=a,n.fillRect(0,0,280,140),n.fillStyle="#24182f",n.fillRect(0,460,280,100),n.fillStyle="#d0a96866",n.fillRect(12,460,256,1),n.restore()}var Ef="pride-doodle",Hr=(n,e,t)=>Math.max(e,Math.min(t,n));function Af(n={}){let e=Zn(n,32e3,26e3);return Object.assign(e,{x:140,y:430,vy:-340,camera:0,height:0,goal:e.difficulty==="hard"?1200:900,held:new Set,platforms:[{x:105,y:460,w:70,landed:!0}],shots:[],fire:0,targetX:null}),ah(e),e}function ah(n){for(;n.platforms.at(-1).y>n.camera-120;){let e=n.platforms.at(-1),t=Hr(e.x+(n.random()-.5)*130,12,198);n.platforms.push({x:t,y:e.y-62,w:70,enemy:n.platforms.length%5===0})}}function oh(n,e){n.disposed||n.status!=="playing"||((e==="left"||e==="right")&&(n.targetX=Hr(n.x+(e==="left"?-42:42),12,268)),e==="action"&&!n.fire&&(n.shots.push({x:n.x,y:n.y}),n.fire=220))}function Cf(n,e,t){n.disposed||n.status!=="playing"||e<0||e>280||t<0||t>560||(n.targetX=Hr(e,12,268),t<220&&oh(n,"action"))}function Rf(n,e){if(n.disposed||n.status!=="playing")return;let t=Number.isFinite(e)?Math.max(0,e):0;for(;t>0&&n.status==="playing";){let i=Math.min(16,t),r=i/1e3;t-=i,n.elapsed+=i,n.timeLeft=Math.max(0,n.timeLeft-i),n.fire=Math.max(0,n.fire-i);let s=Number(n.held.has("right"))-Number(n.held.has("left"));s?n.targetX=null:n.targetX!=null&&(s=Hr((n.targetX-n.x)/(170*r||1),-1,1)),n.x=Hr(n.x+s*170*r,12,268);let a=n.y;n.vy+=700*r,n.y+=n.vy*r;for(let o of n.shots){o.y-=430*r;for(let l of n.platforms)if(l.enemy&&Math.hypot(o.x-(l.x+l.w/2),o.y-(l.y-13))<20){l.enemy=!1,o.dead=!0,n.score+=100,n.feedback="\u53CD\u653B\u547D\u4E2D +100";break}}n.shots=n.shots.filter(o=>!o.dead&&o.y>n.camera-30);for(let o of n.platforms){if(o.enemy&&Math.hypot(n.x-(o.x+o.w/2),n.y-(o.y-13))<18){n.status="lost",n.feedback="\u649E\u5230\u5E7B\u5F71\uFF01\u7A7A\u767D\u9375 \u53EF\u5411\u4E0A\u53CD\u653B";break}if(n.vy>0&&a+8<=o.y&&n.y+8>=o.y&&n.x>=o.x-5&&n.x<=o.x+o.w+5){n.y=o.y-8,n.vy=-340,o.landed||(o.landed=!0,n.score+=100);break}}n.height=Math.max(n.height,430-n.y),n.camera=Math.min(n.camera,n.y-280),ah(n),n.platforms=n.platforms.filter(o=>o.y<n.camera+590),n.status==="playing"&&n.height>=n.goal?(n.status="won",n.feedback="\u767B\u4E0A\u50B2\u6162\u4E4B\u5854\uFF01"):(!n.timeLeft||n.y>n.camera+565)&&(n.status="lost")}}function Pf(n,e,t){n.save(),Kn(n,e,"\u722C\u5854","\u5DE6\u53F3\u79FB\u52D5\u81EA\u52D5\u8DF3 \xB7 \u7A7A\u767D\u9375 \u5411\u4E0A\u53CD\u653B","links",{encounter:t,status:`${Math.floor(e.height)}/${e.goal} \u7C73`,controls:"\u5DE6\u53F3\u79FB\u52D5 \xB7 \u7A7A\u767D\u9375 \u5411\u4E0A\u53CD\u653B",touch:"\u9EDE\u5DE6\u53F3\u79FB\u52D5 \xB7 \u9EDE\u4E0A\u65B9\u5C04\u64CA"}),n.save(),n.beginPath(),n.rect(8,140,264,320),n.clip(),sh(n,e.elapsed,!0);let i=r=>r-e.camera-100;n.strokeStyle="#b8976355",n.lineWidth=1;for(let r=115;r<460;r+=20)n.beginPath(),n.moveTo(8,r),n.lineTo(272,r),n.stroke();for(let r of e.platforms){let s=i(r.y);rh(n,r.x,s,r.w,Math.floor((460-r.y)/62),{reduced:!0}),r.enemy&&vt(n,[[r.x+35,s-27],[r.x+48,s-13],[r.x+35,s-2],[r.x+22,s-13]],"#bd8bea","#fff")}n.fillStyle="#ffdf86";for(let r of e.shots)n.fillRect(r.x-2,i(r.y)-4,4,9);Ji(n,e.x,i(e.y),"#ff5178"),n.restore(),n.restore()}var fl={};Vs(fl,{availablePair:()=>Zs,choose:()=>dl,dispose:()=>Jn,findPath:()=>cl,id:()=>If,init:()=>Lf,input:()=>Uf,point:()=>Df,rect:()=>ul,render:()=>Ff,reshuffle:()=>hl,update:()=>Nf});var If="pride-lianliankan";function cl(n,e,t,i,r){if(i===r||i<0||r<0||i>=n.length||r>=n.length||n[i]==null||n[i]!==n[r])return null;let s={x:i%e+1,y:Math.floor(i/e)+1},a={x:r%e+1,y:Math.floor(r/e)+1},o=[{...s,dir:-1,bends:0,path:[s]}],l=new Map,c=[[1,0],[0,1],[-1,0],[0,-1]];for(let h=0;h<o.length;h++){let u=o[h];for(let d=0;d<4;d++){let p=u.bends+(u.dir!==-1&&u.dir!==d?1:0);if(p>2)continue;let g=u.x+c[d][0],y=u.y+c[d][1];if(g<0||y<0||g>e+1||y>t+1)continue;let m=[...u.path,{x:g,y}];if(g===a.x&&y===a.y)return m;if(g>=1&&g<=e&&y>=1&&y<=t&&n[(y-1)*e+g-1]!=null)continue;let f=`${g},${y},${d}`;(l.get(f)??1/0)<=p||(l.set(f,p),o.push({x:g,y,dir:d,bends:p,path:m}))}}return null}function Zs(n){for(let e=0;e<n.items.length;e++)for(let t=e+1;t<n.items.length;t++)if(cl(n.items,n.cols,n.rows,e,t))return[e,t];return null}function hl(n){let e=n.items.map(s=>s==null?null:0),t=[];for(;e.some(s=>s!=null);){let s=Zs({...n,items:e});if(!s)throw new Error("Invalid even tile geometry");t.push(s),s.forEach(a=>{e[a]=null})}let i=xi(n.items.filter(s=>s!=null),n.random),r=xi([...new Set(i)].flatMap(s=>Array(i.filter(a=>a===s).length/2).fill(s)),n.random);t.forEach(([s,a],o)=>{n.items[s]=n.items[a]=r[o]}),n.selected=[],n.feedback="\u5DF2\u91CD\u65B0\u6392\u5217\uFF0C\u7E7C\u7E8C\u914D\u5C0D"}function Lf(n={}){let e=Zn(n,3e4,3e4);e.cols=6,e.rows=e.difficulty==="hard"?6:4,e.items=Array.from({length:e.cols*e.rows},(t,i)=>kr[Math.floor(i/2)%(e.difficulty==="hard"?8:6)]),e.targetScore=e.items.length/2*100;for(let t=0;t<100;t++){e.items=xi(e.items,e.random);let i={...e,items:[...e.items]},r;for(;r=Zs(i);)r.forEach(s=>{i.items[s]=null});if(i.items.every(s=>s==null))return e}return hl(e),e.feedback="",e}function ul(n,e){return{x:20+e%n.cols*40,y:150+Math.floor(e/n.cols)*46,w:36,h:40}}function dl(n,e){if(!$n(n)||!Number.isInteger(e)||e<0||e>=n.items.length||n.items[e]==null)return;if(n.focus=e,n.selected[0]===e){n.selected=[];return}if(n.selected.push(e),n.selected.length<2)return;let[t,i]=n.selected,r=cl(n.items,n.cols,n.rows,t,i);r?(n.items[t]=n.items[i]=null,n.score+=100,n.path=r,n.pathTime=350,n.feedback="\u9023\u7DDA\u6210\u529F +100",n.score>=n.targetScore?n.status="won":Zs(n)||hl(n)):n.feedback="\u5716\u6848\u9808\u76F8\u540C\uFF0C\u9023\u7DDA\u6700\u591A\u5169\u500B\u5F4E",n.selected=[]}function Df(n,e,t){dl(n,n.items.findIndex((i,r)=>vi(ul(n,r),e,t)))}function Uf(n,e){qs(n,e,n.items.length,n.cols,dl)}function Nf(n,e){n.disposed||n.status!=="playing"||($i(n,e),n.pathTime=Math.max(0,(n.pathTime||0)-Math.max(0,e)))}function Ff(n,e,t){Kn(n,e,"\u5BAE\u6BBF\u9023\u9023\u770B",`\u6700\u591A\u5169\u500B\u5F4E \xB7 \u76EE\u6A19 ${e.targetScore}\u5206`,"links",{encounter:t}),e.items.forEach((i,r)=>{i!=null&&Xs(n,e,r,ul(e,r),i,!1,"links")}),e.pathTime>0&&(n.strokeStyle="#9de8ff",n.lineWidth=3,n.beginPath(),e.path.forEach((i,r)=>n[r?"lineTo":"moveTo"](38+(i.x-1)*40,170+(i.y-1)*46)),n.stroke())}var zf=Object.freeze(Object.fromEntries([il,sl,fl,ll].map(n=>[n.id,n]))),pl=Object.freeze(Object.keys(zf));function lh(n){try{return n.getItem("bridge-greed-cleared")==="1"}catch{return!1}}var Bf="bridge-filming-unlock";function ch(n){try{return(n??globalThis.sessionStorage)?.getItem(Bf)==="1"}catch{return!1}}var Of=Object.freeze([{id:"greed",name:"\u8CAA\u5A6A",icon:"\u{1F4B0}",minigames:["slots","tiger","pachinko","cards","mahjong","breakout","pinball","bbtan","sand","dodge"],attacks:["jump","coins","motion","vortex","roulette"],finisher:"vault",arcadePool:["breakout","pinball","bbtan","sand"],recovery:["cards","mahjong","slots"],label:"crazyGreed",developed:!0},{id:"pride",name:"\u50B2\u6162",icon:"\u{1F451}",minigames:pl,attacks:["pride-gaze","pride-mirror","pride-crown-shock"],finisher:"pride-mirror-duel",arcadePool:["breakout","pinball","bbtan","sand"],recovery:pl,label:"sinPride",developed:!0},{id:"envy",name:"\u5AC9\u5992",icon:"\u{1F441}",entry:"envy.html",minigames:["difference","tarot","rolling","window","pack","territory","pellets","eye-room"],attacks:["laser","steal","gaze","net","breath","pupil","laser-up","steal-up","gaze-up"],finisher:"chase",arcadePool:[],recovery:["tarot","pack","territory","pellets"],label:"sinEnvy",developed:!0},{id:"lust",name:"\u8272\u617E",icon:"\u{1F498}",entry:"lust.html",minigames:["archery","piano","claw","tennis","feeding","cinema","wheel","volley","haunted","dance"],attacks:["wave","bomb","arrows","wave-up","bomb-up","arrows-up","ribbon","echo","shatter"],finisher:"dating",arcadePool:[],recovery:["archery","piano","claw","tennis","feeding","cinema","wheel","volley","haunted","dance"],label:"sinLust",developed:!0},{id:"gluttony",name:"\u66B4\u98DF",icon:"\u{1F354}",minigames:[],attacks:[],finisher:null,arcadePool:[],recovery:[],label:"sinGluttony",developed:!1},{id:"sloth",name:"\u6020\u60F0",icon:"\u{1F634}",minigames:[],attacks:[],finisher:null,arcadePool:[],recovery:[],label:"sinSloth",developed:!1},{id:"wrath",name:"\u61A4\u6012",icon:"\u{1F525}",minigames:[],attacks:[],finisher:null,arcadePool:[],recovery:[],label:"sinWrath",developed:!1}].map(n=>Object.freeze({...n,minigames:Object.freeze(n.minigames),attacks:Object.freeze(n.attacks),arcadePool:Object.freeze(n.arcadePool),recovery:Object.freeze(n.recovery)})));function hh(n,e=Of,{filming:t=ch()}={}){let i=r=>{if(r==="greed")return lh(n);try{return n.getItem(`bridge-crazy-cleared-${r}`)==="1"}catch{return!1}};return e.map((r,s)=>({...r,cleared:i(r.id),unlocked:r.developed&&(t||s===0||i(e[s-1].id))}))}function uh(n="greed",e="hard"){return(n==="greed"?"bridge-best-crazy":`bridge-best-crazy-${n}`)+(e==="normal"?"-normal":"")}var kf="bridge-filming-unlock";function Js(n){try{return(n??globalThis.sessionStorage)?.getItem(kf)==="1"}catch{return!1}}function Hf(n){if(n==null||n==="")return[];let e=n;if(typeof n=="string")try{e=JSON.parse(n)}catch{e=Number(n)}return(Array.isArray(e)?e:[e]).map(Number).filter(i=>Number.isFinite(i)&&i>0)}function Vf(n,{lower:e=!1,limit:t=5}={}){return n.map(Number).filter(i=>Number.isFinite(i)&&i>0).sort((i,r)=>e?i-r:r-i).slice(0,t)}function dh(n,e){let t=n.map(s=>Hf(s)),i=t[0]||[],r=[...i];for(let s of t.slice(1).flat())i.includes(s)||r.push(s);return Vf(r,e)}function fh(n,e){return hh(n,void 0,{filming:Js(e)})}function ph(n,e,t,i="normal"){let r=e.find(a=>a.id===n);if(!r?.developed||!r.unlocked)throw new RangeError("Locked Boss");let s=new URL(r.entry||"index.html",t);return r.entry||s.searchParams.set("campaign",n),s.searchParams.set("difficulty",i==="hard"?"hard":"normal"),s.href}function mh(n){let e=t=>{try{return n?.getItem(t)}catch{return null}};return["greed","pride","envy","lust"].flatMap(t=>["normal","hard"].map(i=>({sin:t,difficulty:i,scores:dh([e(uh(t,i))])})))}var kh=0,$l=1,Hh=2;var Kl=1,Vh=2,bn=3,Bn=0,Nt=1,Tn=2,Hn=0,Ai=1,jl=2,Ql=3,ec=4,Gh=5,ai=100,Wh=101,Xh=102,qh=103,Yh=104,Zh=200,Jh=201,$h=202,Kh=203,ya=204,xa=205,jh=206,Qh=207,eu=208,tu=209,nu=210,iu=211,ru=212,su=213,au=214,Ya=0,Za=1,Ja=2,Ci=3,$a=4,Ka=5,ja=6,Qa=7,tc=0,ou=1,lu=2,Vn=0,cu=1,hu=2,uu=3,eo=4,du=5,fu=6,pu=7;var nc=300,Ui=301,Ni=302,to=303,no=304,Ms=306,va=1e3,si=1001,Sa=1002,en=1003,mu=1004;var bs=1005;var qt=1006,io=1007;var ui=1008;var wn=1009,ic=1010,rc=1011,Tr=1012,ro=1013,di=1014,En=1015,wr=1016,so=1017,ao=1018,Er=1020,sc=35902,ac=35899,oc=1021,lc=1022,nn=1023,ur=1026,Ar=1027,cc=1028,oo=1029,hc=1030,lo=1031;var co=1033,Ts=33776,ws=33777,Es=33778,As=33779,ho=35840,uo=35841,fo=35842,po=35843,mo=36196,go=37492,_o=37496,yo=37808,xo=37809,vo=37810,So=37811,Mo=37812,bo=37813,To=37814,wo=37815,Eo=37816,Ao=37817,Co=37818,Ro=37819,Po=37820,Io=37821,Lo=36492,Do=36494,Uo=36495,No=36283,Fo=36284,zo=36285,Bo=36286;var Kr=2300,Ma=2301,_a=2302,Ol=2400,kl=2401,Hl=2402;var gu=3200,_u=3201;var yu=0,xu=1,Gn="",wt="srgb",Ri="srgb-linear",jr="linear",nt="srgb";var wi=7680;var Vl=519,vu=512,Su=513,Mu=514,uc=515,bu=516,Tu=517,wu=518,Eu=519,Gl=35044;var dc="300 es",dn=2e3,Qr=2001;var On=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gh=1234567,Yr=Math.PI/180,dr=180/Math.PI;function Fi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function fc(n,e){return(n%e+e)%e}function Gf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Wf(n,e,t){return n!==e?(t-n)/(e-n):0}function Zr(n,e,t){return(1-t)*n+t*e}function Xf(n,e,t,i){return Zr(n,e,1-Math.exp(-t*i))}function qf(n,e=1){return e-Math.abs(fc(n,e*2)-e)}function Yf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Zf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Jf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function $f(n,e){return n+Math.random()*(e-n)}function Kf(n){return n*(.5-Math.random())}function jf(n){n!==void 0&&(gh=n);let e=gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qf(n){return n*Yr}function ep(n){return n*dr}function tp(n){return(n&n-1)===0&&n!==0}function np(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ip(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rp(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Cs={DEG2RAD:Yr,RAD2DEG:dr,generateUUID:Fi,clamp:Xe,euclideanModulo:fc,mapLinear:Gf,inverseLerp:Wf,lerp:Zr,damp:Xf,pingpong:qf,smoothstep:Yf,smootherstep:Zf,randInt:Jf,randFloat:$f,randFloatSpread:Kf,seededRandom:jf,degToRad:Qf,radToDeg:ep,isPowerOfTwo:tp,ceilPowerOfTwo:np,floorPowerOfTwo:ip,setQuaternionFromProperEuler:rp,normalize:Dt,denormalize:cr},ge=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*y,A=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){let R=Math.sqrt(T),E=Math.atan2(R,f*A);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}let S=o*A;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+y*S,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_h.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ml=new L,_h=new pn,Ve=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],y=r[0],m=r[3],f=r[6],A=r[1],T=r[4],S=r[7],R=r[2],E=r[5],P=r[8];return s[0]=a*y+o*A+l*R,s[3]=a*m+o*T+l*E,s[6]=a*f+o*S+l*P,s[1]=c*y+h*A+u*R,s[4]=c*m+h*T+u*E,s[7]=c*f+h*S+u*P,s[2]=d*y+p*A+g*R,s[5]=d*m+p*T+g*E,s[8]=d*f+p*S+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,g=t*u+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=d*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gl=new Ve;function pc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function es(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Au(){let n=es("canvas");return n.style.display="block",n}var yh={};function fr(n){n in yh||(yh[n]=!0,console.warn(n))}function Cu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var xh=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sp(){let n={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=zn(r.r),r.g=zn(r.g),r.b=zn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=hr(r.r),r.g=hr(r.g),r.b=hr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gn?jr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ri]:{primaries:e,whitePoint:i,transfer:jr,toXYZ:xh,fromXYZ:vh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:xh,fromXYZ:vh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),n}var Ke=sp();function zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ki,ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ki===void 0&&(Ki=es("canvas")),Ki.width=e.width,Ki.height=e.height;let r=Ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ki}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=es("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zn(t[i]/255)*255):t[i]=zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ap=0,pr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(_l(r[a].image)):s.push(_l(r[a]))}else s=_l(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function _l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ba.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var op=0,yl=new L,Ot=class n extends On{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=si,r=si,s=qt,a=ui,o=nn,l=wn,c=n.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Fi(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yl).x}get height(){return this.source.getSize(yl).y}get depth(){return this.source.getSize(yl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=nc;Ot.DEFAULT_ANISOTROPY=1;var mt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,S=(p+1)/2,R=(f+1)/2,E=(h+d)/4,P=(u+y)/4,U=(g+m)/4;return T>S&&T>R?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=E/i,s=P/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=U/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=P/s,r=U/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-y)/A,this.z=(d-h)/A,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ta=class extends On{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new Ot(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new pr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Ta{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ts=class extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wa=class extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$s.copy(i.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Ks.subVectors(this.max,Vr),ji.subVectors(e.a,Vr),Qi.subVectors(e.b,Vr),er.subVectors(e.c,Vr),jn.subVectors(Qi,ji),Qn.subVectors(er,Qi),Si.subVectors(ji,er);let t=[0,-jn.z,jn.y,0,-Qn.z,Qn.y,0,-Si.z,Si.y,jn.z,0,-jn.x,Qn.z,0,-Qn.x,Si.z,0,-Si.x,-jn.y,jn.x,0,-Qn.y,Qn.x,0,-Si.y,Si.x,0];return!xl(t,ji,Qi,er,Ks)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,ji,Qi,er,Ks))?!1:(js.crossVectors(jn,Qn),t=[js.x,js.y,js.z],xl(t,ji,Qi,er,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ln=[new L,new L,new L,new L,new L,new L,new L,new L],cn=new L,$s=new oi,ji=new L,Qi=new L,er=new L,jn=new L,Qn=new L,Si=new L,Vr=new L,Ks=new L,js=new L,Mi=new L;function xl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Mi.fromArray(n,s);let o=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),h=i.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var lp=new oi,Gr=new L,vl=new L,mr=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):lp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Gr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(vl)),this.expandByPoint(Gr.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dn=new L,Sl=new L,Qs=new L,ei=new L,Ml=new L,ea=new L,bl=new L,ns=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sl.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Sl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=ei.dot(this.direction),l=-ei.dot(Qs),c=ei.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Sl).addScaledVector(Qs,d),p}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);let i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,i,r,s){Ml.subVectors(t,e),ea.subVectors(i,e),bl.crossVectors(Ml,ea);let a=this.direction.dot(bl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,e);let l=o*this.direction.dot(ea.crossVectors(ei,ea));if(l<0)return null;let c=o*this.direction.dot(Ml.cross(ei));if(c<0||l+c>a)return null;let h=-o*ei.dot(bl);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,p,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,p,g,y,m)}set(e,t,i,r,s,a,o,l,c,h,u,d,p,g,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/tr.setFromMatrixColumn(e,0).length(),s=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cp,e,hp)}lookAt(e,t,i){let r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),ti.crossVectors(i,Gt),ti.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),ti.crossVectors(i,Gt)),ti.normalize(),ta.crossVectors(Gt,ti),r[0]=ti.x,r[4]=ta.x,r[8]=Gt.x,r[1]=ti.y,r[5]=ta.y,r[9]=Gt.y,r[2]=ti.z,r[6]=ta.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],A=i[3],T=i[7],S=i[11],R=i[15],E=r[0],P=r[4],U=r[8],M=r[12],v=r[1],C=r[5],z=r[9],k=r[13],W=r[2],q=r[6],G=r[10],ne=r[14],V=r[3],de=r[7],xe=r[11],Me=r[15];return s[0]=a*E+o*v+l*W+c*V,s[4]=a*P+o*C+l*q+c*de,s[8]=a*U+o*z+l*G+c*xe,s[12]=a*M+o*k+l*ne+c*Me,s[1]=h*E+u*v+d*W+p*V,s[5]=h*P+u*C+d*q+p*de,s[9]=h*U+u*z+d*G+p*xe,s[13]=h*M+u*k+d*ne+p*Me,s[2]=g*E+y*v+m*W+f*V,s[6]=g*P+y*C+m*q+f*de,s[10]=g*U+y*z+m*G+f*xe,s[14]=g*M+y*k+m*ne+f*Me,s[3]=A*E+T*v+S*W+R*V,s[7]=A*P+T*C+S*q+R*de,s[11]=A*U+T*z+S*G+R*xe,s[15]=A*M+T*k+S*ne+R*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15];return g*(+s*l*u-r*c*u-s*o*d+i*c*d+r*o*p-i*l*p)+y*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+m*(+t*c*u-t*o*p-s*a*u+i*a*p+s*o*h-i*c*h)+f*(-r*o*h-t*l*u+t*o*d+r*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],A=u*m*c-y*d*c+y*l*p-o*m*p-u*l*f+o*d*f,T=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,S=h*y*c-g*u*c+g*o*p-a*y*p-h*o*f+a*u*f,R=g*u*l-h*y*l-g*o*d+a*y*d+h*o*m-a*u*m,E=t*A+i*T+r*S+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/E;return e[0]=A*P,e[1]=(y*d*s-u*m*s-y*r*p+i*m*p+u*r*f-i*d*f)*P,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*f+i*l*f)*P,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*p-i*l*p)*P,e[4]=T*P,e[5]=(h*m*s-g*d*s+g*r*p-t*m*p-h*r*f+t*d*f)*P,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*f-t*l*f)*P,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*p+t*l*p)*P,e[8]=S*P,e[9]=(g*u*s-h*y*s-g*i*p+t*y*p+h*i*f-t*u*f)*P,e[10]=(a*y*s-g*o*s+g*i*c-t*y*c-a*i*f+t*o*f)*P,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*p-t*o*p)*P,e[12]=R*P,e[13]=(h*y*r-g*u*r+g*i*d-t*y*d-h*i*m+t*u*m)*P,e[14]=(g*o*r-a*y*r-g*i*l+t*y*l+a*i*m-t*o*m)*P,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*d+t*o*d)*P,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,g=s*u,y=a*h,m=a*u,f=o*u,A=l*c,T=l*h,S=l*u,R=i.x,E=i.y,P=i.z;return r[0]=(1-(y+f))*R,r[1]=(p+S)*R,r[2]=(g-T)*R,r[3]=0,r[4]=(p-S)*E,r[5]=(1-(d+f))*E,r[6]=(m+A)*E,r[7]=0,r[8]=(g+T)*P,r[9]=(m-A)*P,r[10]=(1-(d+y))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=tr.set(r[0],r[1],r[2]).length(),a=tr.set(r[4],r[5],r[6]).length(),o=tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hn.copy(this);let c=1/s,h=1/a,u=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=dn,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),g,y;if(l)g=s/(a-s),y=a*s/(a-s);else if(o===dn)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Qr)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=dn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r),g,y;if(l)g=1/(a-s),y=a/(a-s);else if(o===dn)g=-2/(a-s),y=-(a+s)/(a-s);else if(o===Qr)g=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},tr=new L,hn=new gt,cp=new L(0,0,0),hp=new L(1,1,1),ti=new L,ta=new L,Gt=new L,Sh=new gt,Mh=new pn,Sn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},up=0,bh=new L,nr=new pn,Un=new gt,na=new L,Wr=new L,dp=new L,fp=new pn,Th=new L(1,0,0),wh=new L(0,1,0),Eh=new L(0,0,1),Ah={type:"added"},pp={type:"removed"},ir={type:"childadded",child:null},Tl={type:"childremoved",child:null},Yt=class n extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Sn,i=new pn,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ve}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(wh,e)}rotateZ(e){return this.rotateOnAxis(Eh,e)}translateOnAxis(e,t){return bh.copy(e).applyQuaternion(this.quaternion),this.position.add(bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(wh,e)}translateZ(e){return this.translateOnAxis(Eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?na.copy(e):na.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Wr,na,this.up):Un.lookAt(na,Wr,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),nr.setFromRotationMatrix(Un),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ah),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pp),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ah),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Yt.DEFAULT_UP=new L(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new L,Nn=new L,wl=new L,Fn=new L,rr=new L,sr=new L,Ch=new L,El=new L,Al=new L,Cl=new L,Rl=new mt,Pl=new mt,Il=new mt,ri=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),un.subVectors(e,t),r.cross(un);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){un.subVectors(r,t),Nn.subVectors(i,t),wl.subVectors(e,t);let a=un.dot(un),o=un.dot(Nn),l=un.dot(wl),c=Nn.dot(Nn),h=Nn.dot(wl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Rl.setScalar(0),Pl.setScalar(0),Il.setScalar(0),Rl.fromBufferAttribute(e,t),Pl.fromBufferAttribute(e,i),Il.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Rl,s.x),a.addScaledVector(Pl,s.y),a.addScaledVector(Il,s.z),a}static isFrontFacing(e,t,i,r){return un.subVectors(i,t),Nn.subVectors(e,t),un.cross(Nn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),un.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;rr.subVectors(r,i),sr.subVectors(s,i),El.subVectors(e,i);let l=rr.dot(El),c=sr.dot(El);if(l<=0&&c<=0)return t.copy(i);Al.subVectors(e,r);let h=rr.dot(Al),u=sr.dot(Al);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(rr,a);Cl.subVectors(e,s);let p=rr.dot(Cl),g=sr.dot(Cl);if(g>=0&&p<=g)return t.copy(s);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(sr,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ch.subVectors(s,r),o=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(Ch,o);let f=1/(m+y+d);return a=y*f,o=d*f,t.copy(i).addScaledVector(rr,a).addScaledVector(sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=fc(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ll(a,s,e+1/3),this.g=Ll(a,s,e),this.b=Ll(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let i=Ru[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Ke.workingToColorSpace(Rt.copy(this),e),Math.round(Xe(Rt.r*255,0,255))*65536+Math.round(Xe(Rt.g*255,0,255))*256+Math.round(Xe(Rt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Rt.copy(this),t);let i=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=wt){Ke.workingToColorSpace(Rt.copy(this),e);let t=Rt.r,i=Rt.g,r=Rt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(ia);let i=Zr(ni.h,ia.h,t),r=Zr(ni.s,ia.s,t),s=Zr(ni.l,ia.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rt=new qe;qe.NAMES=Ru;var mp=0,Pi=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Ai,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=xa,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ya&&(i.blendSrc=this.blendSrc),this.blendDst!==xa&&(i.blendDst=this.blendDst),this.blendEquation!==ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},kn=class extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xt=new L,ra=new ge,gp=0,Xt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gl,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}};var is=class extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var rs=class extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ut=class extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}},_p=0,jt=new gt,Dl=new Yt,ar=new L,Wt=new oi,Xr=new oi,Tt=new L,Mn=class n extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pc(e)?rs:is)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ut(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Wt.min,Xr.min),Wt.expandByPoint(Tt),Tt.addVectors(Wt.max,Xr.max),Wt.expandByPoint(Tt)):(Wt.expandByPoint(Xr.min),Wt.expandByPoint(Xr.max))}Wt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(ar.fromBufferAttribute(e,c),Tt.add(ar)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new L,l[U]=new L;let c=new L,h=new L,u=new L,d=new ge,p=new ge,g=new ge,y=new L,m=new L;function f(U,M,v){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,v),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,v),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[U].add(y),o[M].add(y),o[v].add(y),l[U].add(m),l[M].add(m),l[v].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,M=A.length;U<M;++U){let v=A[U],C=v.start,z=v.count;for(let k=C,W=C+z;k<W;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let T=new L,S=new L,R=new L,E=new L;function P(U){R.fromBufferAttribute(r,U),E.copy(R);let M=o[U];T.copy(M),T.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(E,M);let C=S.dot(l[U])<0?-1:1;a.setXYZW(U,T.x,T.y,T.z,C)}for(let U=0,M=A.length;U<M;++U){let v=A[U],C=v.start,z=v.count;for(let k=C,W=C+z;k<W;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rh=new gt,bi=new ns,sa=new mr,Ph=new L,aa=new L,oa=new L,la=new L,Ul=new L,ca=new L,Ih=new L,ha=new L,_t=class extends Yt{constructor(e=new Mn,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Ul.fromBufferAttribute(u,e),a?ca.addScaledVector(Ul,h):ca.addScaledVector(Ul.sub(t),h))}t.add(ca)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(s),bi.copy(e.ray).recast(e.near),!(sa.containsPoint(bi.origin)===!1&&(bi.intersectSphere(sa,Ph)===null||bi.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Rh.copy(s).invert(),bi.copy(e.ray).applyMatrix4(Rh),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,R=T;S<R;S+=3){let E=o.getX(S),P=o.getX(S+1),U=o.getX(S+2);r=ua(this,f,e,i,c,h,u,E,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let A=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);r=ua(this,a,e,i,c,h,u,A,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,R=T;S<R;S+=3){let E=S,P=S+1,U=S+2;r=ua(this,f,e,i,c,h,u,E,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let A=m,T=m+1,S=m+2;r=ua(this,a,e,i,c,h,u,A,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function yp(n,e,t,i,r,s,a,o){let l;if(e.side===Nt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Bn,o),l===null)return null;ha.copy(o),ha.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:n}}function ua(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,aa),n.getVertexPosition(l,oa),n.getVertexPosition(c,la);let h=yp(n,e,t,i,aa,oa,la,Ih);if(h){let u=new L;ri.getBarycoord(Ih,aa,oa,la,u),r&&(h.uv=ri.getInterpolatedAttribute(r,o,l,c,u,new ge)),s&&(h.uv1=ri.getInterpolatedAttribute(s,o,l,c,u,new ge)),a&&(h.normal=ri.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};ri.getNormal(aa,oa,la,d.normal),h.face=d,h.barycoord=u}return h}var _r=class n extends Mn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(u,2));function g(y,m,f,A,T,S,R,E,P,U,M){let v=S/P,C=R/U,z=S/2,k=R/2,W=E/2,q=P+1,G=U+1,ne=0,V=0,de=new L;for(let xe=0;xe<G;xe++){let Me=xe*C-k;for(let He=0;He<q;He++){let Je=He*v-z;de[y]=Je*A,de[m]=Me*T,de[f]=W,c.push(de.x,de.y,de.z),de[y]=0,de[m]=0,de[f]=E>0?1:-1,h.push(de.x,de.y,de.z),u.push(He/P),u.push(1-xe/U),ne+=1}}for(let xe=0;xe<U;xe++)for(let Me=0;Me<P;Me++){let He=d+Me+q*xe,Je=d+Me+q*(xe+1),tt=d+(Me+1)+q*(xe+1),$e=d+(Me+1)+q*xe;l.push(He,Je,$e),l.push(Je,tt,$e),V+=6}o.addGroup(p,V,M),p+=V,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){let e={};for(let t=0;t<n.length;t++){let i=zi(n[t]);for(let r in i)e[r]=i[r]}return e}function xp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var Pu={clone:zi,merge:It},vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ii=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ii=new L,Lh=new ge,Dh=new ge,Bt=class extends Ii{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Lh,Dh),t.subVectors(Dh,Lh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},or=-90,lr=1,Ea=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bt(or,lr,e,t);r.layers=this.layers,this.add(r);let s=new Bt(or,lr,e,t);s.layers=this.layers,this.add(s);let a=new Bt(or,lr,e,t);a.layers=this.layers,this.add(a);let o=new Bt(or,lr,e,t);o.layers=this.layers,this.add(o);let l=new Bt(or,lr,e,t);l.layers=this.layers,this.add(l);let c=new Bt(or,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ss=class extends Ot{constructor(e=[],t=Ui,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Aa=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ss(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _r(5,5,5),s=new Pt({name:"CubemapFromEquirect",uniforms:zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:Hn});s.uniforms.tEquirect.value=t;let a=new _t(r,s),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=qt),new Ea(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},fn=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mp={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var xr=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Nl=new L,bp=new L,Tp=new Ve,Qt=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Nl.subVectors(i,t).cross(bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Nl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Tp.getNormalMatrix(e),r=this.coplanarPoint(Nl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new mr,wp=new ge(.5,.5),da=new L,as=class{constructor(e=new Qt,t=new Qt,i=new Qt,r=new Qt,s=new Qt,a=new Qt){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=dn,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],g=s[8],y=s[9],m=s[10],f=s[11],A=s[12],T=s[13],S=s[14],R=s[15];if(r[0].setComponents(c-a,p-h,f-g,R-A).normalize(),r[1].setComponents(c+a,p+h,f+g,R+A).normalize(),r[2].setComponents(c+o,p+u,f+y,R+T).normalize(),r[3].setComponents(c-o,p-u,f-y,R-T).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,p-d,f-m,R-S).normalize();else if(r[4].setComponents(c-l,p-d,f-m,R-S).normalize(),t===dn)r[5].setComponents(c+l,p+d,f+m,R+S).normalize();else if(t===Qr)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);let t=wp.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(da.x=r.normal.x>0?e.max.x:e.min.x,da.y=r.normal.y>0?e.max.y:e.min.y,da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var li=class extends Ot{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},os=class extends Ot{constructor(e,t,i=di,r,s,a,o=en,l=en,c,h=ur,u=1){if(h!==ur&&h!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ls=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var cs=class n extends Mn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],g=0,y=[],m=i/2,f=0;A(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Ut(u,3)),this.setAttribute("normal",new Ut(d,3)),this.setAttribute("uv",new Ut(p,2));function A(){let S=new L,R=new L,E=0,P=(t-e)/i;for(let U=0;U<=s;U++){let M=[],v=U/s,C=v*(t-e)+e;for(let z=0;z<=r;z++){let k=z/r,W=k*l+o,q=Math.sin(W),G=Math.cos(W);R.x=C*q,R.y=-v*i+m,R.z=C*G,u.push(R.x,R.y,R.z),S.set(q,P,G).normalize(),d.push(S.x,S.y,S.z),p.push(k,1-v),M.push(g++)}y.push(M)}for(let U=0;U<r;U++)for(let M=0;M<s;M++){let v=y[M][U],C=y[M+1][U],z=y[M+1][U+1],k=y[M][U+1];(e>0||M!==0)&&(h.push(v,C,k),E+=3),(t>0||M!==s-1)&&(h.push(C,z,k),E+=3)}c.addGroup(f,E,0),f+=E}function T(S){let R=g,E=new ge,P=new L,U=0,M=S===!0?e:t,v=S===!0?1:-1;for(let z=1;z<=r;z++)u.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;let C=g;for(let z=0;z<=r;z++){let W=z/r*l+o,q=Math.cos(W),G=Math.sin(W);P.x=M*G,P.y=m*v,P.z=M*q,u.push(P.x,P.y,P.z),d.push(0,v,0),E.x=q*.5+.5,E.y=G*.5*v+.5,p.push(E.x,E.y),g++}for(let z=0;z<r;z++){let k=R+z,W=C+z;S===!0?h.push(W,W+1,k):h.push(W+1,W,k),U+=3}c.addGroup(f,U,S===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Zt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);let h=i[r],d=i[r+1]-h,p=(a-h)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ge:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,r=[],s=[],a=[],o=new L,l=new gt;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Xe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Xe(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vr=class extends Zt{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ge){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ca=class extends vr{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function gc(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s,o=a*s;return n+e*s+t*a+i*o}}}var fa=new L,Fl=new gc,zl=new gc,Bl=new gc,Ra=class extends Zt{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(fa.subVectors(r[0],r[1]).add(r[0]),c=fa);let u=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(fa.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=fa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Fl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),zl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),Bl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Fl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),zl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Bl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Fl.calc(l),zl.calc(l),Bl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uh(n,e,t,i,r){let s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function Ep(n,e){let t=1-n;return t*t*e}function Ap(n,e){return 2*(1-n)*n*e}function Cp(n,e){return n*n*e}function Jr(n,e,t,i){return Ep(n,e)+Ap(n,t)+Cp(n,i)}function Rp(n,e){let t=1-n;return t*t*t*e}function Pp(n,e){let t=1-n;return 3*t*t*n*e}function Ip(n,e){return 3*(1-n)*n*n*e}function Lp(n,e){return n*n*n*e}function $r(n,e,t,i,r){return Rp(n,e)+Pp(n,t)+Ip(n,i)+Lp(n,r)}var hs=class extends Zt{constructor(e=new ge,t=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ge){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set($r(e,r.x,s.x,a.x,o.x),$r(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pa=class extends Zt{constructor(e=new L,t=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set($r(e,r.x,s.x,a.x,o.x),$r(e,r.y,s.y,a.y,o.y),$r(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},us=class extends Zt{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends Zt{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ds=class extends Zt{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Jr(e,r.x,s.x,a.x),Jr(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends Zt{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Jr(e,r.x,s.x,a.x),Jr(e,r.y,s.y,a.y),Jr(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fs=class extends Zt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(Uh(o,l.x,c.x,h.x,u.x),Uh(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ge().fromArray(r))}return this}},Wl=Object.freeze({__proto__:null,ArcCurve:Ca,CatmullRomCurve3:Ra,CubicBezierCurve:hs,CubicBezierCurve3:Pa,EllipseCurve:vr,LineCurve:us,LineCurve3:Ia,QuadraticBezierCurve:ds,QuadraticBezierCurve3:La,SplineCurve:fs}),Da=class extends Zt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Wl[r.type]().fromJSON(r))}return this}},ps=class extends Da{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new us(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new ds(this.currentPoint.clone(),new ge(e,t),new ge(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new hs(this.currentPoint.clone(),new ge(e,t),new ge(i,r),new ge(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new fs(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new vr(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Sr=class extends ps{constructor(e){super(e),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new ps().fromJSON(r))}return this}};function Dp(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Iu(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=Bp(n,e,s,t)),n.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<r;d+=t){let p=n[d],g=n[d+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ms(s,a,t,o,l,c,0),a}function Iu(n,e,t,i,r){let s;if(r===Jp(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=Nh(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Nh(a/i|0,n[a],n[a+1],s);return s&&Mr(s,s.next)&&(_s(s),s=s.next),s}function Li(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Mr(t,t.next)||ut(t.prev,t,t.next)===0)){if(_s(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ms(n,e,t,i,r,s,a){if(!n)return;!a&&s&&Gp(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?Np(n,i,r,s):Up(n)){e.push(l.i,n.i,c.i),_s(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Fp(Li(n),e),ms(n,e,t,i,r,s,2)):a===2&&zp(n,e,t,i,r,s):ms(Li(n),e,t,i,r,s,1);break}}}function Up(n){let e=n.prev,t=n,i=n.next;if(ut(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),u=Math.min(o,l,c),d=Math.max(r,s,a),p=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&qr(r,o,s,l,a,c,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Np(n,e,t,i){let r=n.prev,s=n,a=n.next;if(ut(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,l,c),g=Math.min(h,u,d),y=Math.max(o,l,c),m=Math.max(h,u,d),f=Xl(p,g,e,t,i),A=Xl(y,m,e,t,i),T=n.prevZ,S=n.nextZ;for(;T&&T.z>=f&&S&&S.z<=A;){if(T.x>=p&&T.x<=y&&T.y>=g&&T.y<=m&&T!==r&&T!==a&&qr(o,h,l,u,c,d,T.x,T.y)&&ut(T.prev,T,T.next)>=0||(T=T.prevZ,S.x>=p&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&qr(o,h,l,u,c,d,S.x,S.y)&&ut(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;T&&T.z>=f;){if(T.x>=p&&T.x<=y&&T.y>=g&&T.y<=m&&T!==r&&T!==a&&qr(o,h,l,u,c,d,T.x,T.y)&&ut(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;S&&S.z<=A;){if(S.x>=p&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&qr(o,h,l,u,c,d,S.x,S.y)&&ut(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Fp(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Mr(i,r)&&Du(i,t,t.next,r)&&gs(i,r)&&gs(r,i)&&(e.push(i.i,t.i,r.i),_s(t),_s(t.next),t=n=r),t=t.next}while(t!==n);return Li(t)}function zp(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qp(a,o)){let l=Uu(a,o);a=Li(a,a.next),l=Li(l,l.next),ms(a,e,t,i,r,s,0),ms(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function Bp(n,e,t,i){let r=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=Iu(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Xp(c))}r.sort(Op);for(let s=0;s<r.length;s++)t=kp(r[s],t);return t}function Op(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function kp(n,e){let t=Hp(n,e);if(!t)return e;let i=Uu(t,n);return Li(i,i.next),Li(t,t.next)}function Hp(n,e){let t=e,i=n.x,r=n.y,s=-1/0,a;if(Mr(n,t))return t;do{if(Mr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Lu(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let u=Math.abs(r-t.y)/(i-t.x);gs(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Vp(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Vp(n,e){return ut(n.prev,n,e.prev)<0&&ut(e.next,n,n.next)<0}function Gp(n,e,t,i){let r=n;do r.z===0&&(r.z=Xl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Wp(r)}function Wp(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function Xl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Xp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Lu(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function qr(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&Lu(n,e,t,i,r,s,a,o)}function qp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Yp(n,e)&&(gs(n,e)&&gs(e,n)&&Zp(n,e)&&(ut(n.prev,n,e.prev)||ut(n,e.prev,e))||Mr(n,e)&&ut(n.prev,n,n.next)>0&&ut(e.prev,e,e.next)>0)}function ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Mr(n,e){return n.x===e.x&&n.y===e.y}function Du(n,e,t,i){let r=ma(ut(n,e,t)),s=ma(ut(n,e,i)),a=ma(ut(t,i,n)),o=ma(ut(t,i,e));return!!(r!==s&&a!==o||r===0&&pa(n,t,e)||s===0&&pa(n,i,e)||a===0&&pa(t,n,i)||o===0&&pa(t,e,i))}function pa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ma(n){return n>0?1:n<0?-1:0}function Yp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Du(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function gs(n,e){return ut(n.prev,n,n.next)<0?ut(n,e,n.next)>=0&&ut(n,n.prev,e)>=0:ut(n,e,n.prev)<0||ut(n,n.next,e)<0}function Zp(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Uu(n,e){let t=ql(n.i,n.x,n.y),i=ql(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Nh(n,e,t,i){let r=ql(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function _s(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ql(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jp(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}var Yl=class{static triangulate(e,t,i=2){return Dp(e,t,i)}},Ei=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Fh(e),zh(i,e);let a=e.length;t.forEach(Fh);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,zh(i,t[l]);let o=Yl.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Fh(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function zh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ys=class n extends Mn{constructor(e=new Sr([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ut(r,3)),this.setAttribute("uv",new Ut(s,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:$p,T,S=!1,R,E,P,U;f&&(T=f.getSpacedPoints(h),S=!0,d=!1,R=f.computeFrenetFrames(h,!1),E=new L,P=new L,U=new L),d||(m=0,p=0,g=0,y=0);let M=o.extractPoints(c),v=M.shape,C=M.holes;if(!Ei.isClockWise(v)){v=v.reverse();for(let Q=0,$=C.length;Q<$;Q++){let J=C[Q];Ei.isClockWise(J)&&(C[Q]=J.reverse())}}function k(Q){let J=10000000000000001e-36,Z=Q[0];for(let he=1;he<=Q.length;he++){let ie=he%Q.length,ue=Q[ie],Oe=ue.x-Z.x,ze=ue.y-Z.y,b=Oe*Oe+ze*ze,_=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(Z.x),Math.abs(Z.y)),F=J*_*_;if(b<=F){Q.splice(ie,1),he--;continue}Z=ue}}k(v),C.forEach(k);let W=C.length,q=v;for(let Q=0;Q<W;Q++){let $=C[Q];v=v.concat($)}function G(Q,$,J){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector($,J)}let ne=v.length;function V(Q,$,J){let Z,he,ie,ue=Q.x-$.x,Oe=Q.y-$.y,ze=J.x-Q.x,b=J.y-Q.y,_=ue*ue+Oe*Oe,F=ue*b-Oe*ze;if(Math.abs(F)>Number.EPSILON){let H=Math.sqrt(_),j=Math.sqrt(ze*ze+b*b),X=$.x-Oe/H,Re=$.y+ue/H,ce=J.x-b/j,Ee=J.y+ze/j,Ae=((ce-X)*b-(Ee-Re)*ze)/(ue*b-Oe*ze);Z=X+ue*Ae-Q.x,he=Re+Oe*Ae-Q.y;let re=Z*Z+he*he;if(re<=2)return new ge(Z,he);ie=Math.sqrt(re/2)}else{let H=!1;ue>Number.EPSILON?ze>Number.EPSILON&&(H=!0):ue<-Number.EPSILON?ze<-Number.EPSILON&&(H=!0):Math.sign(Oe)===Math.sign(b)&&(H=!0),H?(Z=-Oe,he=ue,ie=Math.sqrt(_)):(Z=ue,he=Oe,ie=Math.sqrt(_/2))}return new ge(Z/ie,he/ie)}let de=[];for(let Q=0,$=q.length,J=$-1,Z=Q+1;Q<$;Q++,J++,Z++)J===$&&(J=0),Z===$&&(Z=0),de[Q]=V(q[Q],q[J],q[Z]);let xe=[],Me,He=de.concat();for(let Q=0,$=W;Q<$;Q++){let J=C[Q];Me=[];for(let Z=0,he=J.length,ie=he-1,ue=Z+1;Z<he;Z++,ie++,ue++)ie===he&&(ie=0),ue===he&&(ue=0),Me[Z]=V(J[Z],J[ie],J[ue]);xe.push(Me),He=He.concat(Me)}let Je;if(m===0)Je=Ei.triangulateShape(q,C);else{let Q=[],$=[];for(let J=0;J<m;J++){let Z=J/m,he=p*Math.cos(Z*Math.PI/2),ie=g*Math.sin(Z*Math.PI/2)+y;for(let ue=0,Oe=q.length;ue<Oe;ue++){let ze=G(q[ue],de[ue],ie);Ie(ze.x,ze.y,-he),Z===0&&Q.push(ze)}for(let ue=0,Oe=W;ue<Oe;ue++){let ze=C[ue];Me=xe[ue];let b=[];for(let _=0,F=ze.length;_<F;_++){let H=G(ze[_],Me[_],ie);Ie(H.x,H.y,-he),Z===0&&b.push(H)}Z===0&&$.push(b)}}Je=Ei.triangulateShape(Q,$)}let tt=Je.length,$e=g+y;for(let Q=0;Q<ne;Q++){let $=d?G(v[Q],He[Q],$e):v[Q];S?(P.copy(R.normals[0]).multiplyScalar($.x),E.copy(R.binormals[0]).multiplyScalar($.y),U.copy(T[0]).add(P).add(E),Ie(U.x,U.y,U.z)):Ie($.x,$.y,0)}for(let Q=1;Q<=h;Q++)for(let $=0;$<ne;$++){let J=d?G(v[$],He[$],$e):v[$];S?(P.copy(R.normals[Q]).multiplyScalar(J.x),E.copy(R.binormals[Q]).multiplyScalar(J.y),U.copy(T[Q]).add(P).add(E),Ie(U.x,U.y,U.z)):Ie(J.x,J.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){let $=Q/m,J=p*Math.cos($*Math.PI/2),Z=g*Math.sin($*Math.PI/2)+y;for(let he=0,ie=q.length;he<ie;he++){let ue=G(q[he],de[he],Z);Ie(ue.x,ue.y,u+J)}for(let he=0,ie=C.length;he<ie;he++){let ue=C[he];Me=xe[he];for(let Oe=0,ze=ue.length;Oe<ze;Oe++){let b=G(ue[Oe],Me[Oe],Z);S?Ie(b.x,b.y+T[h-1].y,T[h-1].x+J):Ie(b.x,b.y,u+J)}}}Y(),ee();function Y(){let Q=r.length/3;if(d){let $=0,J=ne*$;for(let Z=0;Z<tt;Z++){let he=Je[Z];we(he[2]+J,he[1]+J,he[0]+J)}$=h+m*2,J=ne*$;for(let Z=0;Z<tt;Z++){let he=Je[Z];we(he[0]+J,he[1]+J,he[2]+J)}}else{for(let $=0;$<tt;$++){let J=Je[$];we(J[2],J[1],J[0])}for(let $=0;$<tt;$++){let J=Je[$];we(J[0]+ne*h,J[1]+ne*h,J[2]+ne*h)}}i.addGroup(Q,r.length/3-Q,0)}function ee(){let Q=r.length/3,$=0;Se(q,$),$+=q.length;for(let J=0,Z=C.length;J<Z;J++){let he=C[J];Se(he,$),$+=he.length}i.addGroup(Q,r.length/3-Q,1)}function Se(Q,$){let J=Q.length;for(;--J>=0;){let Z=J,he=J-1;he<0&&(he=Q.length-1);for(let ie=0,ue=h+m*2;ie<ue;ie++){let Oe=ne*ie,ze=ne*(ie+1),b=$+Z+Oe,_=$+he+Oe,F=$+he+ze,H=$+Z+ze;Ye(b,_,F,H)}}}function Ie(Q,$,J){l.push(Q),l.push($),l.push(J)}function we(Q,$,J){st(Q),st($),st(J);let Z=r.length/3,he=A.generateTopUV(i,r,Z-3,Z-2,Z-1);w(he[0]),w(he[1]),w(he[2])}function Ye(Q,$,J,Z){st(Q),st($),st(Z),st($),st(J),st(Z);let he=r.length/3,ie=A.generateSideWallUV(i,r,he-6,he-3,he-2,he-1);w(ie[0]),w(ie[1]),w(ie[3]),w(ie[1]),w(ie[2]),w(ie[3])}function st(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function w(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Kp(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Wl[r.type]().fromJSON(r)),new n(i,e.options)}},$p={generateTopUV:function(n,e,t,i,r){let s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new ge(s,a),new ge(o,l),new ge(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ge(a,1-l),new ge(c,1-u),new ge(d,1-g),new ge(y,1-f)]:[new ge(o,1-l),new ge(h,1-u),new ge(p,1-g),new ge(m,1-f)]}};function Kp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var tn=class n extends Mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let A=f*d-a;for(let T=0;T<c;T++){let S=T*u-s;g.push(S,-A,0),y.push(0,0,1),m.push(T/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<o;A++){let T=A+c*f,S=A+c*(f+1),R=A+1+c*(f+1),E=A+1+c*f;p.push(T,S,E),p.push(S,R,E)}this.setIndex(p),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(y,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ua=class extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Na=class extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ga(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function jp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Di=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fa=class extends Di{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ol,endingEnd:Ol}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case kl:s=e,o=2*t-i;break;case Hl:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case kl:a=e,l=2*i-t;break;case Hl:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,A=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,T=(-1-p)*m+(1.5+p)*y+.5*g,S=p*m-p*y;for(let R=0;R!==o;++R)s[R]=f*a[h+R]+A*a[c+R]+T*a[l+R]+S*a[u+R];return s}},za=class extends Di{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Ba=class extends Di{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Jt=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ga(t,this.TimeBufferType),this.values=ga(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ga(e.times,Array),values:ga(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case Ma:t=this.InterpolantFactoryMethodLinear;break;case _a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&jp(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===_a,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Jt.prototype.ValueTypeName="";Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Ma;var ci=class extends Jt{constructor(e,t,i){super(e,t,i)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Kr;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends Jt{constructor(e,t,i,r){super(e,t,i,r)}};Oa.prototype.ValueTypeName="color";var ka=class extends Jt{constructor(e,t,i,r){super(e,t,i,r)}};ka.prototype.ValueTypeName="number";var Ha=class extends Di{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)pn.slerpFlat(s,0,a,c-o,a,c,l);return s}},xs=class extends Jt{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Ha(this.times,this.values,this.getValueSize(),e)}};xs.prototype.ValueTypeName="quaternion";xs.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends Jt{constructor(e,t,i){super(e,t,i)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Kr;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends Jt{constructor(e,t,i,r){super(e,t,i,r)}};Va.prototype.ValueTypeName="vector";var Ga=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Nu=new Ga,Wa=class{constructor(e){this.manager=e!==void 0?e:Nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xa=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var br=class extends Ii{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var vs=class extends Xa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var qa=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var _c="\\[\\]\\.:\\/",Qp=new RegExp("["+_c+"]","g"),yc="[^"+_c+"]",em="[^"+_c.replace("\\.","")+"]",tm=/((?:WC+[\/:])*)/.source.replace("WC",yc),nm=/(WCOD+)?/.source.replace("WCOD",em),im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),sm=new RegExp("^"+tm+nm+im+rm+"$"),am=["material","materials","bones","map"],Zl=class{constructor(e,t,i){let r=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qp,"")}static parseTrackName(e){let t=sm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);am.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Zl;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zx=new Float32Array(1);var Bh=new gt,Ss=class{constructor(e,t,i=0,r=1/0){this.ray=new ns(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bh),this}intersectObject(e,t=!0,i=[]){return Jl(e,this,i,t),i.sort(Oh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Jl(e[r],this,i,t);return i.sort(Oh),i}};function Oh(n,e){return n.distance-e.distance}function Jl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let a=0,o=s.length;a<o;a++)Jl(s[a],e,t,!0)}}function xc(n,e,t,i){let r=om(i);switch(t){case oc:return n*e;case cc:return n*e/r.components*r.byteLength;case oo:return n*e/r.components*r.byteLength;case hc:return n*e*2/r.components*r.byteLength;case lo:return n*e*2/r.components*r.byteLength;case lc:return n*e*3/r.components*r.byteLength;case nn:return n*e*4/r.components*r.byteLength;case co:return n*e*4/r.components*r.byteLength;case Ts:case ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Es:case As:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uo:case po:return Math.max(n,16)*Math.max(e,8)/4;case ho:case fo:return Math.max(n,8)*Math.max(e,8)/2;case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case bo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case To:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Co:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Po:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Io:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lo:case Do:case Uo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case No:case Fo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zo:case Bo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function om(n){switch(n){case wn:case ic:return{byteLength:1,components:1};case Tr:case rc:case wr:return{byteLength:2,components:1};case so:case ao:return{byteLength:2,components:4};case di:case ro:case En:return{byteLength:4,components:1};case sc:case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function sd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function cm(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Um=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ng=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,H0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:hm,alphahash_pars_fragment:um,alphamap_fragment:dm,alphamap_pars_fragment:fm,alphatest_fragment:pm,alphatest_pars_fragment:mm,aomap_fragment:gm,aomap_pars_fragment:_m,batching_pars_vertex:ym,batching_vertex:xm,begin_vertex:vm,beginnormal_vertex:Sm,bsdfs:Mm,iridescence_fragment:bm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:Am,clipping_planes_vertex:Cm,color_fragment:Rm,color_pars_fragment:Pm,color_pars_vertex:Im,color_vertex:Lm,common:Dm,cube_uv_reflection_fragment:Um,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Fm,displacementmap_vertex:zm,emissivemap_fragment:Bm,emissivemap_pars_fragment:Om,colorspace_fragment:km,colorspace_pars_fragment:Hm,envmap_fragment:Vm,envmap_common_pars_fragment:Gm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:ng,envmap_vertex:qm,fog_vertex:Ym,fog_pars_vertex:Zm,fog_fragment:Jm,fog_pars_fragment:$m,gradientmap_pars_fragment:Km,lightmap_pars_fragment:jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:eg,lights_pars_begin:tg,lights_toon_fragment:ig,lights_toon_pars_fragment:rg,lights_phong_fragment:sg,lights_phong_pars_fragment:ag,lights_physical_fragment:og,lights_physical_pars_fragment:lg,lights_fragment_begin:cg,lights_fragment_maps:hg,lights_fragment_end:ug,logdepthbuf_fragment:dg,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:pg,logdepthbuf_vertex:mg,map_fragment:gg,map_pars_fragment:_g,map_particle_fragment:yg,map_particle_pars_fragment:xg,metalnessmap_fragment:vg,metalnessmap_pars_fragment:Sg,morphinstance_vertex:Mg,morphcolor_vertex:bg,morphnormal_vertex:Tg,morphtarget_pars_vertex:wg,morphtarget_vertex:Eg,normal_fragment_begin:Ag,normal_fragment_maps:Cg,normal_pars_fragment:Rg,normal_pars_vertex:Pg,normal_vertex:Ig,normalmap_pars_fragment:Lg,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Fg,opaque_fragment:zg,packing:Bg,premultiplied_alpha_fragment:Og,project_vertex:kg,dithering_fragment:Hg,dithering_pars_fragment:Vg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Wg,shadowmap_pars_fragment:Xg,shadowmap_pars_vertex:qg,shadowmap_vertex:Yg,shadowmask_pars_fragment:Zg,skinbase_vertex:Jg,skinning_pars_vertex:$g,skinning_vertex:Kg,skinnormal_vertex:jg,specularmap_fragment:Qg,specularmap_pars_fragment:e0,tonemapping_fragment:t0,tonemapping_pars_fragment:n0,transmission_fragment:i0,transmission_pars_fragment:r0,uv_pars_fragment:s0,uv_pars_vertex:a0,uv_vertex:o0,worldpos_vertex:l0,background_vert:c0,background_frag:h0,backgroundCube_vert:u0,backgroundCube_frag:d0,cube_vert:f0,cube_frag:p0,depth_vert:m0,depth_frag:g0,distanceRGBA_vert:_0,distanceRGBA_frag:y0,equirect_vert:x0,equirect_frag:v0,linedashed_vert:S0,linedashed_frag:M0,meshbasic_vert:b0,meshbasic_frag:T0,meshlambert_vert:w0,meshlambert_frag:E0,meshmatcap_vert:A0,meshmatcap_frag:C0,meshnormal_vert:R0,meshnormal_frag:P0,meshphong_vert:I0,meshphong_frag:L0,meshphysical_vert:D0,meshphysical_frag:U0,meshtoon_vert:N0,meshtoon_frag:F0,points_vert:z0,points_frag:B0,shadow_vert:O0,shadow_frag:k0,sprite_vert:H0,sprite_frag:V0},pe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},An={basic:{uniforms:It([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:It([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:It([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:It([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:It([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:It([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:It([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:It([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:It([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:It([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:It([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:It([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:It([pe.lights,pe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};An.physical={uniforms:It([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Oo={r:0,b:0,g:0},Bi=new Sn,G0=new gt;function W0(n,e,t,i,r,s,a){let o=new qe(0),l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function y(T){let S=!1,R=g(T);R===null?f(o,l):R&&R.isColor&&(f(R,1),S=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,S){let R=g(S);R&&(R.isCubeTexture||R.mapping===Ms)?(h===void 0&&(h=new _t(new _r(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:zi(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Bi.copy(S.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(Bi)),h.material.toneMapped=Ke.getTransfer(R.colorSpace)!==nt,(u!==R||d!==R.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new _t(new tn(2,2),new Pt({name:"BackgroundMaterial",uniforms:zi(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(R.colorSpace)!==nt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,S){T.getRGB(Oo,mc(n)),i.buffers.color.setClear(Oo.r,Oo.g,Oo.b,S,a)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(o,l)},render:y,addToRenderList:m,dispose:A}}function X0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,a=!1;function o(v,C,z,k,W){let q=!1,G=u(k,z,C);s!==G&&(s=G,c(s.object)),q=p(v,k,z,W),q&&g(v,k,z,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(v,C,z,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,C,z){let k=z.wireframe===!0,W=i[v.id];W===void 0&&(W={},i[v.id]=W);let q=W[C.id];q===void 0&&(q={},W[C.id]=q);let G=q[k];return G===void 0&&(G=d(l()),q[k]=G),G}function d(v){let C=[],z=[],k=[];for(let W=0;W<t;W++)C[W]=0,z[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:k,object:v,attributes:{},index:null}}function p(v,C,z,k){let W=s.attributes,q=C.attributes,G=0,ne=z.getAttributes();for(let V in ne)if(ne[V].location>=0){let xe=W[V],Me=q[V];if(Me===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Me=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Me=v.instanceColor)),xe===void 0||xe.attribute!==Me||Me&&xe.data!==Me.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function g(v,C,z,k){let W={},q=C.attributes,G=0,ne=z.getAttributes();for(let V in ne)if(ne[V].location>=0){let xe=q[V];xe===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(xe=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(xe=v.instanceColor));let Me={};Me.attribute=xe,xe&&xe.data&&(Me.data=xe.data),W[V]=Me,G++}s.attributes=W,s.attributesNum=G,s.index=k}function y(){let v=s.newAttributes;for(let C=0,z=v.length;C<z;C++)v[C]=0}function m(v){f(v,0)}function f(v,C){let z=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;z[v]=1,k[v]===0&&(n.enableVertexAttribArray(v),k[v]=1),W[v]!==C&&(n.vertexAttribDivisor(v,C),W[v]=C)}function A(){let v=s.newAttributes,C=s.enabledAttributes;for(let z=0,k=C.length;z<k;z++)C[z]!==v[z]&&(n.disableVertexAttribArray(z),C[z]=0)}function T(v,C,z,k,W,q,G){G===!0?n.vertexAttribIPointer(v,C,z,W,q):n.vertexAttribPointer(v,C,z,k,W,q)}function S(v,C,z,k){y();let W=k.attributes,q=z.getAttributes(),G=C.defaultAttributeValues;for(let ne in q){let V=q[ne];if(V.location>=0){let de=W[ne];if(de===void 0&&(ne==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),ne==="instanceColor"&&v.instanceColor&&(de=v.instanceColor)),de!==void 0){let xe=de.normalized,Me=de.itemSize,He=e.get(de);if(He===void 0)continue;let Je=He.buffer,tt=He.type,$e=He.bytesPerElement,Y=tt===n.INT||tt===n.UNSIGNED_INT||de.gpuType===ro;if(de.isInterleavedBufferAttribute){let ee=de.data,Se=ee.stride,Ie=de.offset;if(ee.isInstancedInterleavedBuffer){for(let we=0;we<V.locationSize;we++)f(V.location+we,ee.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let we=0;we<V.locationSize;we++)m(V.location+we);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let we=0;we<V.locationSize;we++)T(V.location+we,Me/V.locationSize,tt,xe,Se*$e,(Ie+Me/V.locationSize*we)*$e,Y)}else{if(de.isInstancedBufferAttribute){for(let ee=0;ee<V.locationSize;ee++)f(V.location+ee,de.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ee=0;ee<V.locationSize;ee++)m(V.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ee=0;ee<V.locationSize;ee++)T(V.location+ee,Me/V.locationSize,tt,xe,Me*$e,Me/V.locationSize*ee*$e,Y)}}else if(G!==void 0){let xe=G[ne];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(V.location,xe);break;case 3:n.vertexAttrib3fv(V.location,xe);break;case 4:n.vertexAttrib4fv(V.location,xe);break;default:n.vertexAttrib1fv(V.location,xe)}}}}A()}function R(){U();for(let v in i){let C=i[v];for(let z in C){let k=C[z];for(let W in k)h(k[W].object),delete k[W];delete C[z]}delete i[v]}}function E(v){if(i[v.id]===void 0)return;let C=i[v.id];for(let z in C){let k=C[z];for(let W in k)h(k[W].object),delete k[W];delete C[z]}delete i[v.id]}function P(v){for(let C in i){let z=i[C];if(z[v.id]===void 0)continue;let k=z[v.id];for(let W in k)h(k[W].object),delete k[W];delete z[v.id]}}function U(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function q0(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Y0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==nn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let U=P===wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==wn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==En&&!U)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:R,maxSamples:E}}function Z0(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Qt,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let A=s?0:i,T=A*4,S=f.clippingState||null;l.value=S,S=h(g,d,T,p);for(let R=0;R!==T;++R)S[R]=t[R];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,S=p;T!==y;++T,S+=4)a.copy(u[T]).applyMatrix4(A,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function J0(n){let e=new WeakMap;function t(a,o){return o===to?a.mapping=Ui:o===no&&(a.mapping=Ni),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===to||o===no)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Aa(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Rr=4,Fu=[.125,.215,.35,.446,.526,.582],Hi=20,vc=new br,zu=new qe,Sc=null,Mc=0,bc=0,Tc=!1,ki=(1+Math.sqrt(5))/2,Cr=1/ki,Bu=[new L(-ki,Cr,0),new L(ki,Cr,0),new L(-Cr,0,ki),new L(Cr,0,ki),new L(0,ki,-Cr),new L(0,ki,Cr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],$0=new L,Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=$0}=s;Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Mc,bc),this._renderer.xr.enabled=Tc,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:wr,format:nn,colorSpace:Ri,depthBuffer:!1},r=Ou(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K0(s)),this._blurMaterial=j0(s,e,t)}return r}_compileMaterial(e){let t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,vc)}_sceneToCubeUV(e,t,i,r,s){let l=new Bt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(zu),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let y=new kn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),m=new _t(new _r,y),f=!1,A=e.background;A?A.isColor&&(y.color.copy(A),e.background=null,f=!0):(y.color.copy(zu),f=!0);for(let T=0;T<6;T++){let S=T%3;S===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[T],s.y,s.z)):S===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[T]));let R=this._cubeSize;ko(r,S*R,T>2?R:0,R,R),u.setRenderTarget(r),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=A}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ui||e.mapping===Ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;ko(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,vc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bu[(r-s-1)%Bu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new _t(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),y=s/g,m=isFinite(s)?1+Math.floor(h*y):Hi;m>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);let f=[],A=0;for(let P=0;P<Hi;++P){let U=P/y,M=Math.exp(-U*U/2);f.push(M),P===0?A+=M:P<m&&(A+=2*M)}for(let P=0;P<f.length;P++)f[P]=f[P]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;let S=this._sizeLods[r],R=3*S*(r>T-Rr?r-T+Rr:0),E=4*(this._cubeSize-S);ko(t,R,E,3*S,2*S),l.setRenderTarget(t),l.render(u,vc)}};function K0(n){let e=[],t=[],i=[],r=n,s=n-Rr+1+Fu.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Rr?l=Fu[a-n+Rr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,A=new Float32Array(y*g*p),T=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let E=0;E<p;E++){let P=E%3*2/3-1,U=E>2?0:-1,M=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];A.set(M,y*g*E),T.set(d,m*g*E);let v=[E,E,E,E,E,E];S.set(v,f*g*E)}let R=new Mn;R.setAttribute("position",new Xt(A,y)),R.setAttribute("uv",new Xt(T,m)),R.setAttribute("faceIndex",new Xt(S,f)),e.push(R),r>Rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ou(n,e,t){let i=new vn(n,e,t);return i.texture.mapping=Ms,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function j0(n,e,t){let i=new Float32Array(Hi),r=new L(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ku(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Hu(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Q0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===to||l===no,h=l===Ui||l===Ni;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Vo(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Vo(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function e_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function t_(n,e,t,i){let r={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let A=p.array;y=p.version;for(let T=0,S=A.length;T<S;T+=3){let R=A[T+0],E=A[T+1],P=A[T+2];d.push(R,E,E,P,P,R)}}else if(g!==void 0){let A=g.array;y=g.version;for(let T=0,S=A.length/3-1;T<S;T+=3){let R=T+0,E=T+1,P=T+2;d.push(R,E,E,P,P,R)}}else return;let m=new(pc(d)?rs:is)(d,1);m.version=y;let f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){let d=s.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function n_(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*a,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function u(d,p,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,g);let f=0;for(let A=0;A<g;A++)f+=p[A]*y[A];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function i_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function r_(n,e,t){let i=new WeakMap,r=new mt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let M=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],T=0;p===!0&&(T=1),g===!0&&(T=2),y===!0&&(T=3);let S=o.attributes.position.count*T,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let E=new Float32Array(S*R*4*u),P=new ts(E,S,R,u);P.type=En,P.needsUpdate=!0;let U=T*4;for(let v=0;v<u;v++){let C=m[v],z=f[v],k=A[v],W=S*R*4*v;for(let q=0;q<C.count;q++){let G=q*U;p===!0&&(r.fromBufferAttribute(C,q),E[W+G+0]=r.x,E[W+G+1]=r.y,E[W+G+2]=r.z,E[W+G+3]=0),g===!0&&(r.fromBufferAttribute(z,q),E[W+G+4]=r.x,E[W+G+5]=r.y,E[W+G+6]=r.z,E[W+G+7]=0),y===!0&&(r.fromBufferAttribute(k,q),E[W+G+8]=r.x,E[W+G+9]=r.y,E[W+G+10]=r.z,E[W+G+11]=k.itemSize===4?r.w:1)}}d={count:u,texture:P,size:new ge(S,R)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function s_(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var ad=new Ot,Vu=new os(1,1),od=new ts,ld=new wa,cd=new ss,Gu=[],Wu=[],Xu=new Float32Array(16),qu=new Float32Array(9),Yu=new Float32Array(4);function Ir(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Gu[r];if(s===void 0&&(s=new Float32Array(r),Gu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Go(n,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function a_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function o_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function l_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function c_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function h_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Yu.set(i),n.uniformMatrix2fv(this.addr,!1,Yu),Mt(t,i)}}function u_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;qu.set(i),n.uniformMatrix3fv(this.addr,!1,qu),Mt(t,i)}}function d_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Xu.set(i),n.uniformMatrix4fv(this.addr,!1,Xu),Mt(t,i)}}function f_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function p_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function m_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function g_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function __(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function x_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function v_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function S_(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Vu.compareFunction=uc,s=Vu):s=ad,t.setTexture2D(e||s,r)}function M_(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ld,r)}function b_(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||cd,r)}function T_(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||od,r)}function w_(n){switch(n){case 5126:return a_;case 35664:return o_;case 35665:return l_;case 35666:return c_;case 35674:return h_;case 35675:return u_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return __;case 36294:return y_;case 36295:return x_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return T_}}function E_(n,e){n.uniform1fv(this.addr,e)}function A_(n,e){let t=Ir(e,this.size,2);n.uniform2fv(this.addr,t)}function C_(n,e){let t=Ir(e,this.size,3);n.uniform3fv(this.addr,t)}function R_(n,e){let t=Ir(e,this.size,4);n.uniform4fv(this.addr,t)}function P_(n,e){let t=Ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function I_(n,e){let t=Ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function L_(n,e){let t=Ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function D_(n,e){n.uniform1iv(this.addr,e)}function U_(n,e){n.uniform2iv(this.addr,e)}function N_(n,e){n.uniform3iv(this.addr,e)}function F_(n,e){n.uniform4iv(this.addr,e)}function z_(n,e){n.uniform1uiv(this.addr,e)}function B_(n,e){n.uniform2uiv(this.addr,e)}function O_(n,e){n.uniform3uiv(this.addr,e)}function k_(n,e){n.uniform4uiv(this.addr,e)}function H_(n,e,t){let i=this.cache,r=e.length,s=Go(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ad,s[a])}function V_(n,e,t){let i=this.cache,r=e.length,s=Go(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ld,s[a])}function G_(n,e,t){let i=this.cache,r=e.length,s=Go(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||cd,s[a])}function W_(n,e,t){let i=this.cache,r=e.length,s=Go(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||od,s[a])}function X_(n){switch(n){case 5126:return E_;case 35664:return A_;case 35665:return C_;case 35666:return R_;case 35674:return P_;case 35675:return I_;case 35676:return L_;case 5124:case 35670:return D_;case 35667:case 35671:return U_;case 35668:case 35672:return N_;case 35669:case 35673:return F_;case 5125:return z_;case 36294:return B_;case 36295:return O_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return W_}}var Ec=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=w_(t.type)}},Ac=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X_(t.type)}},Cc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},wc=/(\w+)(\])?(\[|\.)?/g;function Zu(n,e){n.seq.push(e),n.map[e.id]=e}function q_(n,e,t){let i=n.name,r=i.length;for(wc.lastIndex=0;;){let s=wc.exec(i),a=wc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Zu(t,c===void 0?new Ec(o,n,e):new Ac(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Cc(o),Zu(t,u)),t=u}}}var Pr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);q_(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Ju(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Y_=37297,Z_=0;function J_(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var $u=new Ve;function $_(n){Ke._getMatrix($u,Ke.workingColorSpace,n);let e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case jr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ku(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+J_(n.getShaderSource(e),o)}else return s}function K_(n,e){let t=$_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j_(n,e){let t;switch(e){case cu:t="Linear";break;case hu:t="Reinhard";break;case uu:t="Cineon";break;case eo:t="ACESFilmic";break;case fu:t="AgX";break;case pu:t="Neutral";break;case du:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ho=new L;function Q_(){Ke.getLuminanceCoefficients(Ho);let n=Ho.x.toFixed(4),e=Ho.y.toFixed(4),t=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ey(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function ty(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ny(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Rs(n){return n!==""}function ju(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(iy,sy)}var ry=new Map;function sy(n,e){let t=We[e];if(t===void 0){let i=ry.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}var ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(n){return n.replace(ay,oy)}function oy(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function td(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ly(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function cy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ui:case Ni:e="ENVMAP_TYPE_CUBE";break;case Ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function uy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tc:e="ENVMAP_BLENDING_MULTIPLY";break;case ou:e="ENVMAP_BLENDING_MIX";break;case lu:e="ENVMAP_BLENDING_ADD";break}return e}function dy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fy(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ly(t),c=cy(t),h=hy(t),u=uy(t),d=dy(t),p=ey(t),g=ty(s),y=r.createProgram(),m,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),f.length>0&&(f+=`
`)):(m=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),f=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?We.tonemapping_pars_fragment:"",t.toneMapping!==Vn?j_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,K_("linearToOutputTexel",t.outputColorSpace),Q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),a=Rc(a),a=ju(a,t),a=Qu(a,t),o=Rc(o),o=ju(o,t),o=Qu(o,t),a=ed(a),o=ed(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=A+m+a,S=A+f+o,R=Ju(r,r.VERTEX_SHADER,T),E=Ju(r,r.FRAGMENT_SHADER,S);r.attachShader(y,R),r.attachShader(y,E),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function P(C){if(n.debug.checkShaderErrors){let z=r.getProgramInfoLog(y)||"",k=r.getShaderInfoLog(R)||"",W=r.getShaderInfoLog(E)||"",q=z.trim(),G=k.trim(),ne=W.trim(),V=!0,de=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,R,E);else{let xe=Ku(r,R,"vertex"),Me=Ku(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+xe+`
`+Me)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||ne==="")&&(de=!1);de&&(C.diagnostics={runnable:V,programLog:q,vertexShader:{log:G,prefix:m},fragmentShader:{log:ne,prefix:f}})}r.deleteShader(R),r.deleteShader(E),U=new Pr(r,y),M=ny(r,y)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(y,Y_)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=E,this}var py=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ic(e),t.set(e,i)),i}},Ic=class{constructor(e){this.id=py++,this.code=e,this.usedTimes=0}};function my(n,e,t,i,r,s,a){let o=new gr,l=new Pc,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,C,z,k){let W=z.fog,q=k.geometry,G=M.isMeshStandardMaterial?z.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),V=ne&&ne.mapping===Ms?ne.image.height:null,de=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let xe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Me=xe!==void 0?xe.length:0,He=0;q.morphAttributes.position!==void 0&&(He=1),q.morphAttributes.normal!==void 0&&(He=2),q.morphAttributes.color!==void 0&&(He=3);let Je,tt,$e,Y;if(de){let et=An[de];Je=et.vertexShader,tt=et.fragmentShader}else Je=M.vertexShader,tt=M.fragmentShader,l.update(M),$e=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);let ee=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,we=k.isBatchedMesh===!0,Ye=!!M.map,st=!!M.matcap,w=!!ne,Q=!!M.aoMap,$=!!M.lightMap,J=!!M.bumpMap,Z=!!M.normalMap,he=!!M.displacementMap,ie=!!M.emissiveMap,ue=!!M.metalnessMap,Oe=!!M.roughnessMap,ze=M.anisotropy>0,b=M.clearcoat>0,_=M.dispersion>0,F=M.iridescence>0,H=M.sheen>0,j=M.transmission>0,X=ze&&!!M.anisotropyMap,Re=b&&!!M.clearcoatMap,ce=b&&!!M.clearcoatNormalMap,Ee=b&&!!M.clearcoatRoughnessMap,Ae=F&&!!M.iridescenceMap,re=F&&!!M.iridescenceThicknessMap,ye=H&&!!M.sheenColorMap,Ne=H&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,me=!!M.specularColorMap,Ge=!!M.specularIntensityMap,I=j&&!!M.transmissionMap,le=j&&!!M.thicknessMap,fe=!!M.gradientMap,be=!!M.alphaMap,se=M.alphaTest>0,K=!!M.alphaHash,Ce=!!M.extensions,ke=Vn;M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ke=n.toneMapping);let at={shaderID:de,shaderType:M.type,shaderName:M.name,vertexShader:Je,fragmentShader:tt,defines:M.defines,customVertexShaderID:$e,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:we,batchingColor:we&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ri,alphaToCoverage:!!M.alphaToCoverage,map:Ye,matcap:st,envMap:w,envMapMode:w&&ne.mapping,envMapCubeUVHeight:V,aoMap:Q,lightMap:$,bumpMap:J,normalMap:Z,displacementMap:d&&he,emissiveMap:ie,normalMapObjectSpace:Z&&M.normalMapType===xu,normalMapTangentSpace:Z&&M.normalMapType===yu,metalnessMap:ue,roughnessMap:Oe,anisotropy:ze,anisotropyMap:X,clearcoat:b,clearcoatMap:Re,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ee,dispersion:_,iridescence:F,iridescenceMap:Ae,iridescenceThicknessMap:re,sheen:H,sheenColorMap:ye,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:me,specularIntensityMap:Ge,transmission:j,transmissionMap:I,thicknessMap:le,gradientMap:fe,opaque:M.transparent===!1&&M.blending===Ai&&M.alphaToCoverage===!1,alphaMap:be,alphaTest:se,alphaHash:K,combine:M.combine,mapUv:Ye&&y(M.map.channel),aoMapUv:Q&&y(M.aoMap.channel),lightMapUv:$&&y(M.lightMap.channel),bumpMapUv:J&&y(M.bumpMap.channel),normalMapUv:Z&&y(M.normalMap.channel),displacementMapUv:he&&y(M.displacementMap.channel),emissiveMapUv:ie&&y(M.emissiveMap.channel),metalnessMapUv:ue&&y(M.metalnessMap.channel),roughnessMapUv:Oe&&y(M.roughnessMap.channel),anisotropyMapUv:X&&y(M.anisotropyMap.channel),clearcoatMapUv:Re&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&y(M.sheenRoughnessMap.channel),specularMapUv:Pe&&y(M.specularMap.channel),specularColorMapUv:me&&y(M.specularColorMap.channel),specularIntensityMapUv:Ge&&y(M.specularIntensityMap.channel),transmissionMapUv:I&&y(M.transmissionMap.channel),thicknessMapUv:le&&y(M.thicknessMap.channel),alphaMapUv:be&&y(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Z||ze),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Ye||be),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:He,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ye&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:ie&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Tn,flipSided:M.side===Nt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ce&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&M.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function f(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)v.push(C),v.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(A(v,M),T(v,M),v.push(n.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function A(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function T(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){let v=g[M.type],C;if(v){let z=An[v];C=Pu.clone(z.uniforms)}else C=M.uniforms;return C}function R(M,v){let C;for(let z=0,k=h.length;z<k;z++){let W=h[z];if(W.cacheKey===v){C=W,++C.usedTimes;break}}return C===void 0&&(C=new fy(n,v,M,s),h.push(C)),C}function E(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function P(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:U}}function gy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function _y(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function id(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,d,p,g,y,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),e++,f}function o(u,d,p,g,y,m){let f=a(u,d,p,g,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(u,d,p,g,y,m){let f=a(u,d,p,g,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||_y),i.length>1&&i.sort(d||nd),r.length>1&&r.sort(d||nd)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function yy(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new id,n.set(i,[a])):r>=s.length?(a=new id,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new qe};break;case"SpotLight":t={position:new L,direction:new L,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function vy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Sy=0;function My(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function by(n){let e=new xy,t=vy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let r=new L,s=new gt,a=new gt;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,A=0,T=0,S=0,R=0,E=0,P=0;c.sort(My);for(let M=0,v=c.length;M<v;M++){let C=c[M],z=C.color,k=C.intensity,W=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],k);P++}else if(C.isDirectionalLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ne=C.shadow,V=t.get(C);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=C.shadow.matrix,A++}i.directional[p]=G,p++}else if(C.isSpotLight){let G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(z).multiplyScalar(k),G.distance=W,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[y]=G;let ne=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,ne.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[y]=ne.matrix,C.castShadow){let V=t.get(C);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=q,S++}y++}else if(C.isRectAreaLight){let G=e.get(C);G.color.copy(z).multiplyScalar(k),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=G,m++}else if(C.isPointLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let ne=C.shadow,V=t.get(C);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=C.shadow.matrix,T++}i.point[g]=G,g++}else if(C.isHemisphereLight){let G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(k),G.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[f]=G,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==R||U.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+R-E,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,U.directionalLength=p,U.pointLength=g,U.spotLength=y,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=R,U.numLightProbes=P,i.version=Sy++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){let T=c[f];if(T.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(T.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){let S=i.hemi[y];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function rd(n){let e=new by(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ty(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new rd(n),e.set(r,[o])):s>=a.length?(o=new rd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ey=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ay(n,e,t){let i=new as,r=new ge,s=new ge,a=new mt,o=new Ua({depthPacking:_u}),l=new Na,c={},h=t.maxTextureSize,u={[Bn]:Nt,[Nt]:Bn,[Tn]:Tn},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:wy,fragmentShader:Ey}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Mn;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let f=this.type;this.render=function(E,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=n.getRenderTarget(),v=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Hn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=f!==bn&&this.type===bn,W=f===bn&&this.type!==bn;for(let q=0,G=E.length;q<G;q++){let ne=E[q],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let de=V.getFrameExtents();if(r.multiply(de),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/de.x),r.x=s.x*de.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/de.y),r.y=s.y*de.y,V.mapSize.y=s.y)),V.map===null||k===!0||W===!0){let Me=this.type!==bn?{minFilter:en,magFilter:en}:{};V.map!==null&&V.map.dispose(),V.map=new vn(r.x,r.y,Me),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let xe=V.getViewportCount();for(let Me=0;Me<xe;Me++){let He=V.getViewport(Me);a.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),z.viewport(a),V.updateMatrices(ne,Me),i=V.getFrustum(),S(P,U,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===bn&&A(V,U),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,v,C)};function A(E,P){let U=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new vn(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(P,null,U,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(P,null,U,p,y,null)}function T(E,P,U,M){let v=null,C=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)v=C;else if(v=U.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=v.uuid,k=P.uuid,W=c[z];W===void 0&&(W={},c[z]=W);let q=W[k];q===void 0&&(q=v.clone(),W[k]=q,P.addEventListener("dispose",R)),v=q}if(v.visible=P.visible,v.wireframe=P.wireframe,M===bn?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:u[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let z=n.properties.get(v);z.light=U}return v}function S(E,P,U,M,v){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===bn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);let k=e.update(E),W=E.material;if(Array.isArray(W)){let q=k.groups;for(let G=0,ne=q.length;G<ne;G++){let V=q[G],de=W[V.materialIndex];if(de&&de.visible){let xe=T(E,de,M,v);E.onBeforeShadow(n,E,P,U,k,xe,V),n.renderBufferDirect(U,null,k,xe,E,V),E.onAfterShadow(n,E,P,U,k,xe,V)}}}else if(W.visible){let q=T(E,W,M,v);E.onBeforeShadow(n,E,P,U,k,q,null),n.renderBufferDirect(U,null,k,q,E,null),E.onAfterShadow(n,E,P,U,k,q,null)}}let z=E.children;for(let k=0,W=z.length;k<W;k++)S(z[k],P,U,M,v)}function R(E){E.target.removeEventListener("dispose",R);for(let U in c){let M=c[U],v=E.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var Cy={[Ya]:Za,[Ja]:ja,[$a]:Qa,[Ci]:Ka,[Za]:Ya,[ja]:Ja,[Qa]:$a,[Ka]:Ci};function Ry(n,e){function t(){let I=!1,le=new mt,fe=null,be=new mt(0,0,0,0);return{setMask:function(se){fe!==se&&!I&&(n.colorMask(se,se,se,se),fe=se)},setLocked:function(se){I=se},setClear:function(se,K,Ce,ke,at){at===!0&&(se*=ke,K*=ke,Ce*=ke),le.set(se,K,Ce,ke),be.equals(le)===!1&&(n.clearColor(se,K,Ce,ke),be.copy(le))},reset:function(){I=!1,fe=null,be.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,fe=null,be=null,se=null;return{setReversed:function(K){if(le!==K){let Ce=e.get("EXT_clip_control");K?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),le=K;let ke=se;se=null,this.setClear(ke)}},getReversed:function(){return le},setTest:function(K){K?ee(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(K){fe!==K&&!I&&(n.depthMask(K),fe=K)},setFunc:function(K){if(le&&(K=Cy[K]),be!==K){switch(K){case Ya:n.depthFunc(n.NEVER);break;case Za:n.depthFunc(n.ALWAYS);break;case Ja:n.depthFunc(n.LESS);break;case Ci:n.depthFunc(n.LEQUAL);break;case $a:n.depthFunc(n.EQUAL);break;case Ka:n.depthFunc(n.GEQUAL);break;case ja:n.depthFunc(n.GREATER);break;case Qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=K}},setLocked:function(K){I=K},setClear:function(K){se!==K&&(le&&(K=1-K),n.clearDepth(K),se=K)},reset:function(){I=!1,fe=null,be=null,se=null,le=!1}}}function r(){let I=!1,le=null,fe=null,be=null,se=null,K=null,Ce=null,ke=null,at=null;return{setTest:function(et){I||(et?ee(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(et){le!==et&&!I&&(n.stencilMask(et),le=et)},setFunc:function(et,In,xn){(fe!==et||be!==In||se!==xn)&&(n.stencilFunc(et,In,xn),fe=et,be=In,se=xn)},setOp:function(et,In,xn){(K!==et||Ce!==In||ke!==xn)&&(n.stencilOp(et,In,xn),K=et,Ce=In,ke=xn)},setLocked:function(et){I=et},setClear:function(et){at!==et&&(n.clearStencil(et),at=et)},reset:function(){I=!1,le=null,fe=null,be=null,se=null,K=null,Ce=null,ke=null,at=null}}}let s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,A=null,T=null,S=null,R=null,E=null,P=new qe(0,0,0),U=0,M=!1,v=null,C=null,z=null,k=null,W=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ne=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=ne>=2);let de=null,xe={},Me=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),Je=new mt().fromArray(Me),tt=new mt().fromArray(He);function $e(I,le,fe,be){let se=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<fe;Ce++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(le+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return K}let Y={};Y[n.TEXTURE_2D]=$e(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=$e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=$e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=$e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(Ci),J(!1),Z($l),ee(n.CULL_FACE),Q(Hn);function ee(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Se(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ie(I,le){return u[I]!==le?(n.bindFramebuffer(I,le),u[I]=le,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=le),!0):!1}function we(I,le){let fe=p,be=!1;if(I){fe=d.get(le),fe===void 0&&(fe=[],d.set(le,fe));let se=I.textures;if(fe.length!==se.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let K=0,Ce=se.length;K<Ce;K++)fe[K]=n.COLOR_ATTACHMENT0+K;fe.length=se.length,be=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,be=!0);be&&n.drawBuffers(fe)}function Ye(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let st={[ai]:n.FUNC_ADD,[Wh]:n.FUNC_SUBTRACT,[Xh]:n.FUNC_REVERSE_SUBTRACT};st[qh]=n.MIN,st[Yh]=n.MAX;let w={[Zh]:n.ZERO,[Jh]:n.ONE,[$h]:n.SRC_COLOR,[ya]:n.SRC_ALPHA,[nu]:n.SRC_ALPHA_SATURATE,[eu]:n.DST_COLOR,[jh]:n.DST_ALPHA,[Kh]:n.ONE_MINUS_SRC_COLOR,[xa]:n.ONE_MINUS_SRC_ALPHA,[tu]:n.ONE_MINUS_DST_COLOR,[Qh]:n.ONE_MINUS_DST_ALPHA,[iu]:n.CONSTANT_COLOR,[ru]:n.ONE_MINUS_CONSTANT_COLOR,[su]:n.CONSTANT_ALPHA,[au]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(I,le,fe,be,se,K,Ce,ke,at,et){if(I===Hn){y===!0&&(Se(n.BLEND),y=!1);return}if(y===!1&&(ee(n.BLEND),y=!0),I!==Gh){if(I!==m||et!==M){if((f!==ai||S!==ai)&&(n.blendEquation(n.FUNC_ADD),f=ai,S=ai),et)switch(I){case Ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFunc(n.ONE,n.ONE);break;case Ql:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ec:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ql:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ec:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,T=null,R=null,E=null,P.set(0,0,0),U=0,m=I,M=et}return}se=se||le,K=K||fe,Ce=Ce||be,(le!==f||se!==S)&&(n.blendEquationSeparate(st[le],st[se]),f=le,S=se),(fe!==A||be!==T||K!==R||Ce!==E)&&(n.blendFuncSeparate(w[fe],w[be],w[K],w[Ce]),A=fe,T=be,R=K,E=Ce),(ke.equals(P)===!1||at!==U)&&(n.blendColor(ke.r,ke.g,ke.b,at),P.copy(ke),U=at),m=I,M=!1}function $(I,le){I.side===Tn?Se(n.CULL_FACE):ee(n.CULL_FACE);let fe=I.side===Nt;le&&(fe=!fe),J(fe),I.blending===Ai&&I.transparent===!1?Q(Hn):Q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);let be=I.stencilWrite;o.setTest(be),be&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(I){v!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),v=I)}function Z(I){I!==kh?(ee(n.CULL_FACE),I!==C&&(I===$l?n.cullFace(n.BACK):I===Hh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),C=I}function he(I){I!==z&&(G&&n.lineWidth(I),z=I)}function ie(I,le,fe){I?(ee(n.POLYGON_OFFSET_FILL),(k!==le||W!==fe)&&(n.polygonOffset(le,fe),k=le,W=fe)):Se(n.POLYGON_OFFSET_FILL)}function ue(I){I?ee(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Oe(I){I===void 0&&(I=n.TEXTURE0+q-1),de!==I&&(n.activeTexture(I),de=I)}function ze(I,le,fe){fe===void 0&&(de===null?fe=n.TEXTURE0+q-1:fe=de);let be=xe[fe];be===void 0&&(be={type:void 0,texture:void 0},xe[fe]=be),(be.type!==I||be.texture!==le)&&(de!==fe&&(n.activeTexture(fe),de=fe),n.bindTexture(I,le||Y[I]),be.type=I,be.texture=le)}function b(){let I=xe[de];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(I){Je.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function Ne(I){tt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),tt.copy(I))}function Pe(I,le){let fe=c.get(le);fe===void 0&&(fe=new WeakMap,c.set(le,fe));let be=fe.get(I);be===void 0&&(be=n.getUniformBlockIndex(le,I.name),fe.set(I,be))}function me(I,le){let be=c.get(le).get(I);l.get(le)!==be&&(n.uniformBlockBinding(le,be,I.__bindingPointIndex),l.set(le,be))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},de=null,xe={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,A=null,T=null,S=null,R=null,E=null,P=new qe(0,0,0),U=0,M=!1,v=null,C=null,z=null,k=null,W=null,Je.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:Se,bindFramebuffer:Ie,drawBuffers:we,useProgram:Ye,setBlending:Q,setMaterial:$,setFlipSided:J,setCullFace:Z,setLineWidth:he,setPolygonOffset:ie,setScissorTest:ue,activeTexture:Oe,bindTexture:ze,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Ae,texImage3D:re,updateUBOMapping:Pe,uniformBlockBinding:me,texStorage2D:ce,texStorage3D:Ee,texSubImage2D:H,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:Re,scissor:ye,viewport:Ne,reset:Ge}}function Py(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):es("canvas")}function y(b,_,F){let H=1,j=ze(b);if((j.width>F||j.height>F)&&(H=F/Math.max(j.width,j.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let X=Math.floor(H*j.width),Re=Math.floor(H*j.height);u===void 0&&(u=g(X,Re));let ce=_?g(X,Re):u;return ce.width=X,ce.height=Re,ce.getContext("2d").drawImage(b,0,0,X,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+Re+")."),ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){n.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(b,_,F,H,j=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=_;if(_===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),_===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RG8UI),F===n.UNSIGNED_SHORT&&(X=n.RG16UI),F===n.UNSIGNED_INT&&(X=n.RG32UI),F===n.BYTE&&(X=n.RG8I),F===n.SHORT&&(X=n.RG16I),F===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGB8UI),F===n.UNSIGNED_SHORT&&(X=n.RGB16UI),F===n.UNSIGNED_INT&&(X=n.RGB32UI),F===n.BYTE&&(X=n.RGB8I),F===n.SHORT&&(X=n.RGB16I),F===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),F===n.UNSIGNED_INT&&(X=n.RGBA32UI),F===n.BYTE&&(X=n.RGBA8I),F===n.SHORT&&(X=n.RGBA16I),F===n.INT&&(X=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),_===n.RGBA){let Re=j?jr:Ke.getTransfer(H);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=Re===nt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(b,_){let F;return b?_===null||_===di||_===Er?F=n.DEPTH24_STENCIL8:_===En?F=n.DEPTH32F_STENCIL8:_===Tr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===di||_===Er?F=n.DEPTH_COMPONENT24:_===En?F=n.DEPTH_COMPONENT32F:_===Tr&&(F=n.DEPTH_COMPONENT16),F}function R(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==en&&b.minFilter!==qt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function E(b){let _=b.target;_.removeEventListener("dispose",E),U(_),_.isVideoTexture&&h.delete(_)}function P(b){let _=b.target;_.removeEventListener("dispose",P),v(_)}function U(b){let _=i.get(b);if(_.__webglInit===void 0)return;let F=b.source,H=d.get(F);if(H){let j=H[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(b),Object.keys(H).length===0&&d.delete(F)}i.remove(b)}function M(b){let _=i.get(b);n.deleteTexture(_.__webglTexture);let F=b.source,H=d.get(F);delete H[_.__cacheKey],a.memory.textures--}function v(b){let _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let j=0;j<_.__webglFramebuffer[H].length;j++)n.deleteFramebuffer(_.__webglFramebuffer[H][j]);else n.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)n.deleteFramebuffer(_.__webglFramebuffer[H]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=b.textures;for(let H=0,j=F.length;H<j;H++){let X=i.get(F[H]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(F[H])}i.remove(b)}let C=0;function z(){C=0}function k(){let b=C;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),C+=1,b}function W(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function q(b,_){let F=i.get(b);if(b.isVideoTexture&&ue(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){let H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,b,_);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function G(b,_){let F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Y(F,b,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function ne(b,_){let F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Y(F,b,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function V(b,_){let F=i.get(b);if(b.version>0&&F.__version!==b.version){ee(F,b,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}let de={[va]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[Sa]:n.MIRRORED_REPEAT},xe={[en]:n.NEAREST,[mu]:n.NEAREST_MIPMAP_NEAREST,[bs]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[io]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},Me={[vu]:n.NEVER,[Eu]:n.ALWAYS,[Su]:n.LESS,[uc]:n.LEQUAL,[Mu]:n.EQUAL,[wu]:n.GEQUAL,[bu]:n.GREATER,[Tu]:n.NOTEQUAL};function He(b,_){if(_.type===En&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===qt||_.magFilter===io||_.magFilter===bs||_.magFilter===ui||_.minFilter===qt||_.minFilter===io||_.minFilter===bs||_.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,de[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,de[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,de[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,xe[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,xe[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===en||_.minFilter!==bs&&_.minFilter!==ui||_.type===En&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Je(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",E));let H=_.source,j=d.get(H);j===void 0&&(j={},d.set(H,j));let X=W(_);if(X!==b.__cacheKey){j[X]===void 0&&(j[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[X].usedTimes++;let Re=j[b.__cacheKey];Re!==void 0&&(j[b.__cacheKey].usedTimes--,Re.usedTimes===0&&M(_)),b.__cacheKey=X,b.__webglTexture=j[X].texture}return F}function tt(b,_,F){return Math.floor(Math.floor(b/F)/_)}function $e(b,_,F,H){let X=b.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,H,_.data);else{X.sort((re,ye)=>re.start-ye.start);let Re=0;for(let re=1;re<X.length;re++){let ye=X[Re],Ne=X[re],Pe=ye.start+ye.count,me=tt(Ne.start,_.width,4),Ge=tt(ye.start,_.width,4);Ne.start<=Pe+1&&me===Ge&&tt(Ne.start+Ne.count-1,_.width,4)===me?ye.count=Math.max(ye.count,Ne.start+Ne.count-ye.start):(++Re,X[Re]=Ne)}X.length=Re+1;let ce=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let re=0,ye=X.length;re<ye;re++){let Ne=X[re],Pe=Math.floor(Ne.start/4),me=Math.ceil(Ne.count/4),Ge=Pe%_.width,I=Math.floor(Pe/_.width),le=me,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ge,I,le,fe,F,H,_.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function Y(b,_,F){let H=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=n.TEXTURE_3D);let j=Je(b,_),X=_.source;t.bindTexture(H,b.__webglTexture,n.TEXTURE0+F);let Re=i.get(X);if(X.version!==Re.__version||j===!0){t.activeTexture(n.TEXTURE0+F);let ce=Ke.getPrimaries(Ke.workingColorSpace),Ee=_.colorSpace===Gn?null:Ke.getPrimaries(_.colorSpace),Ae=_.colorSpace===Gn||ce===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let re=y(_.image,!1,r.maxTextureSize);re=Oe(_,re);let ye=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type),Pe=T(_.internalFormat,ye,Ne,_.colorSpace,_.isVideoTexture);He(H,_);let me,Ge=_.mipmaps,I=_.isVideoTexture!==!0,le=Re.__version===void 0||j===!0,fe=X.dataReady,be=R(_,re);if(_.isDepthTexture)Pe=S(_.format===Ar,_.type),le&&(I?t.texStorage2D(n.TEXTURE_2D,1,Pe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Pe,re.width,re.height,0,ye,Ne,null));else if(_.isDataTexture)if(Ge.length>0){I&&le&&t.texStorage2D(n.TEXTURE_2D,be,Pe,Ge[0].width,Ge[0].height);for(let se=0,K=Ge.length;se<K;se++)me=Ge[se],I?fe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,ye,Ne,me.data):t.texImage2D(n.TEXTURE_2D,se,Pe,me.width,me.height,0,ye,Ne,me.data);_.generateMipmaps=!1}else I?(le&&t.texStorage2D(n.TEXTURE_2D,be,Pe,re.width,re.height),fe&&$e(_,re,ye,Ne)):t.texImage2D(n.TEXTURE_2D,0,Pe,re.width,re.height,0,ye,Ne,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Pe,Ge[0].width,Ge[0].height,re.depth);for(let se=0,K=Ge.length;se<K;se++)if(me=Ge[se],_.format!==nn)if(ye!==null)if(I){if(fe)if(_.layerUpdates.size>0){let Ce=xc(me.width,me.height,_.format,_.type);for(let ke of _.layerUpdates){let at=me.data.subarray(ke*Ce/me.data.BYTES_PER_ELEMENT,(ke+1)*Ce/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,ke,me.width,me.height,1,ye,at)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,re.depth,ye,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Pe,me.width,me.height,re.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,re.depth,ye,Ne,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Pe,me.width,me.height,re.depth,0,ye,Ne,me.data)}else{I&&le&&t.texStorage2D(n.TEXTURE_2D,be,Pe,Ge[0].width,Ge[0].height);for(let se=0,K=Ge.length;se<K;se++)me=Ge[se],_.format!==nn?ye!==null?I?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,ye,me.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?fe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,ye,Ne,me.data):t.texImage2D(n.TEXTURE_2D,se,Pe,me.width,me.height,0,ye,Ne,me.data)}else if(_.isDataArrayTexture)if(I){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Pe,re.width,re.height,re.depth),fe)if(_.layerUpdates.size>0){let se=xc(re.width,re.height,_.format,_.type);for(let K of _.layerUpdates){let Ce=re.data.subarray(K*se/re.data.BYTES_PER_ELEMENT,(K+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,re.width,re.height,1,ye,Ne,Ce)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ye,Ne,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,ye,Ne,re.data);else if(_.isData3DTexture)I?(le&&t.texStorage3D(n.TEXTURE_3D,be,Pe,re.width,re.height,re.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ye,Ne,re.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,ye,Ne,re.data);else if(_.isFramebufferTexture){if(le)if(I)t.texStorage2D(n.TEXTURE_2D,be,Pe,re.width,re.height);else{let se=re.width,K=re.height;for(let Ce=0;Ce<be;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Pe,se,K,0,ye,Ne,null),se>>=1,K>>=1}}else if(Ge.length>0){if(I&&le){let se=ze(Ge[0]);t.texStorage2D(n.TEXTURE_2D,be,Pe,se.width,se.height)}for(let se=0,K=Ge.length;se<K;se++)me=Ge[se],I?fe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ye,Ne,me):t.texImage2D(n.TEXTURE_2D,se,Pe,ye,Ne,me);_.generateMipmaps=!1}else if(I){if(le){let se=ze(re);t.texStorage2D(n.TEXTURE_2D,be,Pe,se.width,se.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ne,re)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ye,Ne,re);m(_)&&f(H),Re.__version=X.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ee(b,_,F){if(_.image.length!==6)return;let H=Je(b,_),j=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);let X=i.get(j);if(j.version!==X.__version||H===!0){t.activeTexture(n.TEXTURE0+F);let Re=Ke.getPrimaries(Ke.workingColorSpace),ce=_.colorSpace===Gn?null:Ke.getPrimaries(_.colorSpace),Ee=_.colorSpace===Gn||Re===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,ye=[];for(let K=0;K<6;K++)!Ae&&!re?ye[K]=y(_.image[K],!0,r.maxCubemapSize):ye[K]=re?_.image[K].image:_.image[K],ye[K]=Oe(_,ye[K]);let Ne=ye[0],Pe=s.convert(_.format,_.colorSpace),me=s.convert(_.type),Ge=T(_.internalFormat,Pe,me,_.colorSpace),I=_.isVideoTexture!==!0,le=X.__version===void 0||H===!0,fe=j.dataReady,be=R(_,Ne);He(n.TEXTURE_CUBE_MAP,_);let se;if(Ae){I&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ge,Ne.width,Ne.height);for(let K=0;K<6;K++){se=ye[K].mipmaps;for(let Ce=0;Ce<se.length;Ce++){let ke=se[Ce];_.format!==nn?Pe!==null?I?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,0,0,ke.width,ke.height,Pe,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,Ge,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,0,0,ke.width,ke.height,Pe,me,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce,Ge,ke.width,ke.height,0,Pe,me,ke.data)}}}else{if(se=_.mipmaps,I&&le){se.length>0&&be++;let K=ze(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ge,K.width,K.height)}for(let K=0;K<6;K++)if(re){I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye[K].width,ye[K].height,Pe,me,ye[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,ye[K].width,ye[K].height,0,Pe,me,ye[K].data);for(let Ce=0;Ce<se.length;Ce++){let at=se[Ce].image[K].image;I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,0,0,at.width,at.height,Pe,me,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,Ge,at.width,at.height,0,Pe,me,at.data)}}else{I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pe,me,ye[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,Pe,me,ye[K]);for(let Ce=0;Ce<se.length;Ce++){let ke=se[Ce];I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,0,0,Pe,me,ke.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce+1,Ge,Pe,me,ke.image[K])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),X.__version=j.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Se(b,_,F,H,j,X){let Re=s.convert(F.format,F.colorSpace),ce=s.convert(F.type),Ee=T(F.internalFormat,Re,ce,F.colorSpace),Ae=i.get(_),re=i.get(F);if(re.__renderTarget=_,!Ae.__hasExternalTextures){let ye=Math.max(1,_.width>>X),Ne=Math.max(1,_.height>>X);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,X,Ee,ye,Ne,_.depth,0,Re,ce,null):t.texImage2D(j,X,Ee,ye,Ne,0,Re,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ie(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,j,re.__webglTexture,0,he(_)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,j,re.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(b,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){let H=_.depthTexture,j=H&&H.isDepthTexture?H.type:null,X=S(_.stencilBuffer,j),Re=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=he(_);ie(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,X,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,X,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,X,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,b)}else{let H=_.textures;for(let j=0;j<H.length;j++){let X=H[j],Re=s.convert(X.format,X.colorSpace),ce=s.convert(X.type),Ee=T(X.internalFormat,Re,ce,X.colorSpace),Ae=he(_);F&&ie(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Ee,_.width,_.height):ie(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,Ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=i.get(_.depthTexture);H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);let j=H.__webglTexture,X=he(_);if(_.depthTexture.format===ur)ie(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(_.depthTexture.format===Ar)ie(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ye(b){let _=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let H=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",j)};H.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=H}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let H=b.texture.mipmaps;H&&H.length>0?we(_.__webglFramebuffer[0],b):we(_.__webglFramebuffer,b)}else if(F){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=n.createRenderbuffer(),Ie(_.__webglDepthbuffer[H],b,!1);else{let j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}else{let H=b.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ie(_.__webglDepthbuffer,b,!1);else{let j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(b,_,F){let H=i.get(b);_!==void 0&&Se(H.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ye(b)}function w(b){let _=b.texture,F=i.get(b),H=i.get(_);b.addEventListener("dispose",P);let j=b.textures,X=b.isWebGLCubeRenderTarget===!0,Re=j.length>1;if(Re||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=_.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let Ee=0;Ee<_.mipmaps.length;Ee++)F.__webglFramebuffer[ce][Ee]=n.createFramebuffer()}else F.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)F.__webglFramebuffer[ce]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Re)for(let ce=0,Ee=j.length;ce<Ee;ce++){let Ae=i.get(j[ce]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&ie(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<j.length;ce++){let Ee=j[ce];F.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);let Ae=s.convert(Ee.format,Ee.colorSpace),re=s.convert(Ee.type),ye=T(Ee.internalFormat,Ae,re,Ee.colorSpace,b.isXRRenderTarget===!0),Ne=he(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ye,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),He(n.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)Se(F.__webglFramebuffer[ce][Ee],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee);else Se(F.__webglFramebuffer[ce],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ce=0,Ee=j.length;ce<Ee;ce++){let Ae=j[ce],re=i.get(Ae),ye=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ye=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,re.__webglTexture),He(ye,Ae),Se(F.__webglFramebuffer,b,Ae,n.COLOR_ATTACHMENT0+ce,ye,0),m(Ae)&&f(ye)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,H.__webglTexture),He(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)Se(F.__webglFramebuffer[Ee],b,_,n.COLOR_ATTACHMENT0,ce,Ee);else Se(F.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,ce,0);m(_)&&f(ce),t.unbindTexture()}b.depthBuffer&&Ye(b)}function Q(b){let _=b.textures;for(let F=0,H=_.length;F<H;F++){let j=_[F];if(m(j)){let X=A(b),Re=i.get(j).__webglTexture;t.bindTexture(X,Re),f(X),t.unbindTexture()}}}let $=[],J=[];function Z(b){if(b.samples>0){if(ie(b)===!1){let _=b.textures,F=b.width,H=b.height,j=n.COLOR_BUFFER_BIT,X=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(b),ce=_.length>1;if(ce)for(let Ae=0;Ae<_.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Ee=b.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);let re=i.get(_[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,F,H,0,0,F,H,j,n.NEAREST),l===!0&&($.length=0,J.length=0,$.push(n.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&b.resolveDepthBuffer===!1&&($.push(X),J.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,J)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Ae=0;Ae<_.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);let re=i.get(_[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function he(b){return Math.min(r.maxSamples,b.samples)}function ie(b){let _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ue(b){let _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function Oe(b,_){let F=b.colorSpace,H=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Ri&&F!==Gn&&(Ke.getTransfer(F)===nt?(H!==nn||j!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function ze(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=st,this.setupRenderTarget=w,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ie}function Iy(n,e){function t(i,r=Gn){let s,a=Ke.getTransfer(r);if(i===wn)return n.UNSIGNED_BYTE;if(i===so)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ao)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ac)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ic)return n.BYTE;if(i===rc)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===ro)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===wr)return n.HALF_FLOAT;if(i===oc)return n.ALPHA;if(i===lc)return n.RGB;if(i===nn)return n.RGBA;if(i===ur)return n.DEPTH_COMPONENT;if(i===Ar)return n.DEPTH_STENCIL;if(i===cc)return n.RED;if(i===oo)return n.RED_INTEGER;if(i===hc)return n.RG;if(i===lo)return n.RG_INTEGER;if(i===co)return n.RGBA_INTEGER;if(i===Ts||i===ws||i===Es||i===As)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ts)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ts)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Es)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===As)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ho||i===uo||i===fo||i===po)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ho)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===po)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mo||i===go||i===_o)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===mo||i===go)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_o)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yo||i===xo||i===vo||i===So||i===Mo||i===bo||i===To||i===wo||i===Eo||i===Ao||i===Co||i===Ro||i===Po||i===Io)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===So)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===To)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ao)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Co)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ro)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Po)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Io)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lo||i===Do||i===Uo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lo)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Do)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===No||i===Fo||i===zo||i===Bo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===No)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ls(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Pt({vertexShader:Ly,fragmentShader:Dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends On{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new Lc,f={},A=t.getContextAttributes(),T=null,S=null,R=[],E=[],P=new ge,U=null,M=new Bt;M.viewport=new mt;let v=new Bt;v.viewport=new mt;let C=[M,v],z=new qa,k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=R[Y];return ee===void 0&&(ee=new yr,R[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=R[Y];return ee===void 0&&(ee=new yr,R[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=R[Y];return ee===void 0&&(ee=new yr,R[Y]=ee),ee.getHandSpace()};function q(Y){let ee=E.indexOf(Y.inputSource);if(ee===-1)return;let Se=R[ee];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,c||a),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<R.length;Y++){let ee=E[Y];ee!==null&&(E[Y]=null,R[Y].disconnect(ee))}k=null,W=null,m.reset();for(let Y in f)delete f[Y];e.setRenderTarget(T),p=null,d=null,u=null,r=null,S=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",G),r.addEventListener("inputsourceschange",ne),A.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ie=null,we=null;A.depth&&(we=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=A.stencil?Ar:ur,Ie=A.stencil?Er:di);let Ye={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new vn(d.textureWidth,d.textureHeight,{format:nn,type:wn,depthTexture:new os(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new vn(p.framebufferWidth,p.framebufferHeight,{format:nn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(Y){for(let ee=0;ee<Y.removed.length;ee++){let Se=Y.removed[ee],Ie=E.indexOf(Se);Ie>=0&&(E[Ie]=null,R[Ie].disconnect(Se))}for(let ee=0;ee<Y.added.length;ee++){let Se=Y.added[ee],Ie=E.indexOf(Se);if(Ie===-1){for(let Ye=0;Ye<R.length;Ye++)if(Ye>=E.length){E.push(Se),Ie=Ye;break}else if(E[Ye]===null){E[Ye]=Se,Ie=Ye;break}if(Ie===-1)break}let we=R[Ie];we&&we.connect(Se)}}let V=new L,de=new L;function xe(Y,ee,Se){V.setFromMatrixPosition(ee.matrixWorld),de.setFromMatrixPosition(Se.matrixWorld);let Ie=V.distanceTo(de),we=ee.projectionMatrix.elements,Ye=Se.projectionMatrix.elements,st=we[14]/(we[10]-1),w=we[14]/(we[10]+1),Q=(we[9]+1)/we[5],$=(we[9]-1)/we[5],J=(we[8]-1)/we[0],Z=(Ye[8]+1)/Ye[0],he=st*J,ie=st*Z,ue=Ie/(-J+Z),Oe=ue*-J;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Oe),Y.translateZ(ue),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),we[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let ze=st+ue,b=w+ue,_=he-Oe,F=ie+(Ie-Oe),H=Q*w/b*ze,j=$*w/b*ze;Y.projectionMatrix.makePerspective(_,F,H,j,ze,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Me(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,Se=Y.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),z.near=v.near=M.near=ee,z.far=v.far=M.far=Se,(k!==z.near||W!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),k=z.near,W=z.far),z.layers.mask=Y.layers.mask|6,M.layers.mask=z.layers.mask&3,v.layers.mask=z.layers.mask&5;let Ie=Y.parent,we=z.cameras;Me(z,Ie);for(let Ye=0;Ye<we.length;Ye++)Me(we[Ye],Ie);we.length===2?xe(z,M,v):z.projectionMatrix.copy(M.projectionMatrix),He(Y,z,Ie)};function He(Y,ee,Se){Se===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=dr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Y){return f[Y]};let Je=null;function tt(Y,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){let Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ie=!1;Se.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let w=0;w<Se.length;w++){let Q=Se[w],$=null;if(p!==null)$=p.getViewport(Q);else{let Z=u.getViewSubImage(d,Q);$=Z.viewport,w===0&&(e.setRenderTargetTextures(S,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(S))}let J=C[w];J===void 0&&(J=new Bt,J.layers.enable(w),J.viewport=new mt,C[w]=J),J.matrix.fromArray(Q.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Q.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set($.x,$.y,$.width,$.height),w===0&&(z.matrix.copy(J.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(J)}let we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let w=u.getDepthInformation(Se[0]);w&&w.isValid&&w.texture&&m.init(w,r.renderState)}if(we&&we.includes("camera-access")&&y){e.state.unbindTexture(),u=i.getBinding();for(let w=0;w<Se.length;w++){let Q=Se[w].camera;if(Q){let $=f[Q];$||($=new ls,f[Q]=$);let J=u.getCameraImage(Q);$.sourceTexture=J}}}}for(let Se=0;Se<R.length;Se++){let Ie=E[Se],we=R[Se];Ie!==null&&we!==void 0&&we.update(Ie,ee,c||a)}Je&&Je(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let $e=new sd;$e.setAnimationLoop(tt),this.setAnimationLoop=function(Y){Je=Y},this.dispose=function(){}}},Oi=new Sn,Uy=new gt;function Ny(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,mc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,A,T,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,A,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Nt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Nt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let A=e.get(f),T=A.envMap,S=A.envMapRotation;T&&(m.envMap.value=T,Oi.copy(S),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(Oi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,A,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let A=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fy(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){let S=T.program;i.uniformBlockBinding(A,S)}function c(A,T){let S=r[A.id];S===void 0&&(g(A),S=h(A),r[A.id]=S,A.addEventListener("dispose",m));let R=T.program;i.updateUBOMapping(A,R);let E=e.render.frame;s[A.id]!==E&&(d(A),s[A.id]=E)}function h(A){let T=u();A.__bindingPointIndex=T;let S=n.createBuffer(),R=A.__size,E=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let T=r[A.id],S=A.uniforms,R=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let E=0,P=S.length;E<P;E++){let U=Array.isArray(S[E])?S[E]:[S[E]];for(let M=0,v=U.length;M<v;M++){let C=U[M];if(p(C,E,M,R)===!0){let z=C.__offset,k=Array.isArray(C.value)?C.value:[C.value],W=0;for(let q=0;q<k.length;q++){let G=k[q],ne=y(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,z+W,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,W),W+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,T,S,R){let E=A.value,P=T+"_"+S;if(R[P]===void 0)return typeof E=="number"||typeof E=="boolean"?R[P]=E:R[P]=E.clone(),!0;{let U=R[P];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return R[P]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function g(A){let T=A.uniforms,S=0,R=16;for(let P=0,U=T.length;P<U;P++){let M=Array.isArray(T[P])?T[P]:[T[P]];for(let v=0,C=M.length;v<C;v++){let z=M[v],k=Array.isArray(z.value)?z.value:[z.value];for(let W=0,q=k.length;W<q;W++){let G=k[W],ne=y(G),V=S%R,de=V%ne.boundary,xe=V+de;S+=de,xe!==0&&R-xe<ne.storage&&(S+=R-xe),z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=ne.storage}}}let E=S%R;return E>0&&(S+=R-E),A.__size=S,A.__cache={},this}function y(A){let T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){let T=A.target;T.removeEventListener("dispose",m);let S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(let A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}var Ps=class{constructor(e={}){let{canvas:t=Au(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1;this._outputColorSpace=wt;let E=0,P=0,U=null,M=-1,v=null,C=new mt,z=new mt,k=null,W=new qe(0),q=0,G=t.width,ne=t.height,V=1,de=null,xe=null,Me=new mt(0,0,G,ne),He=new mt(0,0,G,ne),Je=!1,tt=new as,$e=!1,Y=!1,ee=new gt,Se=new L,Ie=new mt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function st(){return U===null?V:1}let w=i;function Q(x,D){return t.getContext(x,D)}try{let x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",se,!1),w===null){let D="webgl2";if(w=Q(D,x),w===null)throw Q(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let $,J,Z,he,ie,ue,Oe,ze,b,_,F,H,j,X,Re,ce,Ee,Ae,re,ye,Ne,Pe,me,Ge;function I(){$=new e_(w),$.init(),Pe=new Iy(w,$),J=new Y0(w,$,e,Pe),Z=new Ry(w,$),J.reversedDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),he=new i_(w),ie=new gy,ue=new Py(w,$,Z,ie,J,Pe,he),Oe=new J0(S),ze=new Q0(S),b=new cm(w),me=new X0(w,b),_=new t_(w,b,he,me),F=new s_(w,_,b,he),re=new r_(w,J,ue),ce=new Z0(ie),H=new my(S,Oe,ze,$,J,me,ce),j=new Ny(S,ie),X=new yy,Re=new Ty($),Ae=new W0(S,Oe,ze,Z,F,p,l),Ee=new Ay(S,F,J),Ge=new Fy(w,he,J,Z),ye=new q0(w,$,he),Ne=new n_(w,$,he),he.programs=H.programs,S.capabilities=J,S.extensions=$,S.properties=ie,S.renderLists=X,S.shadowMap=Ee,S.state=Z,S.info=he}I();let le=new Dc(S,w);this.xr=le,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let x=$.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=$.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(G,ne,!1))},this.getSize=function(x){return x.set(G,ne)},this.setSize=function(x,D,B=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,ne=D,t.width=Math.floor(x*V),t.height=Math.floor(D*V),B===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(G*V,ne*V).floor()},this.setDrawingBufferSize=function(x,D,B){G=x,ne=D,V=B,t.width=Math.floor(x*B),t.height=Math.floor(D*B),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(Me)},this.setViewport=function(x,D,B,O){x.isVector4?Me.set(x.x,x.y,x.z,x.w):Me.set(x,D,B,O),Z.viewport(C.copy(Me).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(He)},this.setScissor=function(x,D,B,O){x.isVector4?He.set(x.x,x.y,x.z,x.w):He.set(x,D,B,O),Z.scissor(z.copy(He).multiplyScalar(V).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(x){Z.setScissorTest(Je=x)},this.setOpaqueSort=function(x){de=x},this.setTransparentSort=function(x){xe=x},this.getClearColor=function(x){return x.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,B=!0){let O=0;if(x){let N=!1;if(U!==null){let oe=U.texture.format;N=oe===co||oe===lo||oe===oo}if(N){let oe=U.texture.type,_e=oe===wn||oe===di||oe===Tr||oe===Er||oe===so||oe===ao,Te=Ae.getClearColor(),ve=Ae.getClearAlpha(),Ue=Te.r,Fe=Te.g,Le=Te.b;_e?(g[0]=Ue,g[1]=Fe,g[2]=Le,g[3]=ve,w.clearBufferuiv(w.COLOR,0,g)):(y[0]=Ue,y[1]=Fe,y[2]=Le,y[3]=ve,w.clearBufferiv(w.COLOR,0,y))}else O|=w.COLOR_BUFFER_BIT}D&&(O|=w.DEPTH_BUFFER_BIT),B&&(O|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Ae.dispose(),X.dispose(),Re.dispose(),ie.dispose(),Oe.dispose(),ze.dispose(),F.dispose(),me.dispose(),Ge.dispose(),H.dispose(),le.dispose(),le.removeEventListener("sessionstart",xn),le.removeEventListener("sessionend",Jc),gi.stop()};function fe(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let x=he.autoReset,D=Ee.enabled,B=Ee.autoUpdate,O=Ee.needsUpdate,N=Ee.type;I(),he.autoReset=x,Ee.enabled=D,Ee.autoUpdate=B,Ee.needsUpdate=O,Ee.type=N}function se(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function K(x){let D=x.target;D.removeEventListener("dispose",K),Ce(D)}function Ce(x){ke(x),ie.remove(x)}function ke(x){let D=ie.get(x).programs;D!==void 0&&(D.forEach(function(B){H.releaseProgram(B)}),x.isShaderMaterial&&H.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,B,O,N,oe){D===null&&(D=we);let _e=N.isMesh&&N.matrixWorld.determinant()<0,Te=rf(x,D,B,O,N);Z.setMaterial(O,_e);let ve=B.index,Ue=1;if(O.wireframe===!0){if(ve=_.getWireframeAttribute(B),ve===void 0)return;Ue=2}let Fe=B.drawRange,Le=B.attributes.position,Ze=Fe.start*Ue,it=(Fe.start+Fe.count)*Ue;oe!==null&&(Ze=Math.max(Ze,oe.start*Ue),it=Math.min(it,(oe.start+oe.count)*Ue)),ve!==null?(Ze=Math.max(Ze,0),it=Math.min(it,ve.count)):Le!=null&&(Ze=Math.max(Ze,0),it=Math.min(it,Le.count));let pt=it-Ze;if(pt<0||pt===1/0)return;me.setup(N,O,Te,B,ve);let ot,rt=ye;if(ve!==null&&(ot=b.get(ve),rt=Ne,rt.setIndex(ot)),N.isMesh)O.wireframe===!0?(Z.setLineWidth(O.wireframeLinewidth*st()),rt.setMode(w.LINES)):rt.setMode(w.TRIANGLES);else if(N.isLine){let De=O.linewidth;De===void 0&&(De=1),Z.setLineWidth(De*st()),N.isLineSegments?rt.setMode(w.LINES):N.isLineLoop?rt.setMode(w.LINE_LOOP):rt.setMode(w.LINE_STRIP)}else N.isPoints?rt.setMode(w.POINTS):N.isSprite&&rt.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($.get("WEBGL_multi_draw"))rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let De=N._multiDrawStarts,ct=N._multiDrawCounts,je=N._multiDrawCount,Ht=ve?b.get(ve).bytesPerElement:1,Yi=ie.get(O).currentProgram.getUniforms();for(let Vt=0;Vt<je;Vt++)Yi.setValue(w,"_gl_DrawID",Vt),rt.render(De[Vt]/Ht,ct[Vt])}else if(N.isInstancedMesh)rt.renderInstances(Ze,pt,N.count);else if(B.isInstancedBufferGeometry){let De=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ct=Math.min(B.instanceCount,De);rt.renderInstances(Ze,pt,ct)}else rt.render(Ze,pt)};function at(x,D,B){x.transparent===!0&&x.side===Tn&&x.forceSinglePass===!1?(x.side=Nt,x.needsUpdate=!0,Hs(x,D,B),x.side=Bn,x.needsUpdate=!0,Hs(x,D,B),x.side=Tn):Hs(x,D,B)}this.compile=function(x,D,B=null){B===null&&(B=x),f=Re.get(B),f.init(D),T.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),x!==B&&x.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let O=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let oe=N.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){let Te=oe[_e];at(Te,B,N),O.add(Te)}else at(oe,B,N),O.add(oe)}),f=T.pop(),O},this.compileAsync=function(x,D,B=null){let O=this.compile(x,D,B);return new Promise(N=>{function oe(){if(O.forEach(function(_e){ie.get(_e).currentProgram.isReady()&&O.delete(_e)}),O.size===0){N(x);return}setTimeout(oe,10)}$.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let et=null;function In(x){et&&et(x)}function xn(){gi.stop()}function Jc(){gi.start()}let gi=new sd;gi.setAnimationLoop(In),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(x){et=x,le.setAnimationLoop(x),x===null?gi.stop():gi.start()},le.addEventListener("sessionstart",xn),le.addEventListener("sessionend",Jc),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(D),D=le.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,D,U),f=Re.get(x,T.length),f.init(D),T.push(f),ee.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),tt.setFromProjectionMatrix(ee,dn,D.reversedDepth),Y=this.localClippingEnabled,$e=ce.init(this.clippingPlanes,Y),m=X.get(x,A.length),m.init(),A.push(m),le.enabled===!0&&le.isPresenting===!0){let oe=S.xr.getDepthSensingMesh();oe!==null&&Ko(oe,D,-1/0,S.sortObjects)}Ko(x,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(de,xe),Ye=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ye&&Ae.addToRenderList(m,x),this.info.render.frame++,$e===!0&&ce.beginShadows();let B=f.state.shadowsArray;Ee.render(B,x,D),$e===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=m.opaque,N=m.transmissive;if(f.setupLights(),D.isArrayCamera){let oe=D.cameras;if(N.length>0)for(let _e=0,Te=oe.length;_e<Te;_e++){let ve=oe[_e];Kc(O,N,x,ve)}Ye&&Ae.render(x);for(let _e=0,Te=oe.length;_e<Te;_e++){let ve=oe[_e];$c(m,x,ve,ve.viewport)}}else N.length>0&&Kc(O,N,x,D),Ye&&Ae.render(x),$c(m,x,D);U!==null&&P===0&&(ue.updateMultisampleRenderTarget(U),ue.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(S,x,D),me.resetDefaultState(),M=-1,v=null,T.pop(),T.length>0?(f=T[T.length-1],$e===!0&&ce.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ko(x,D,B,O){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||tt.intersectsSprite(x)){O&&Ie.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ee);let _e=F.update(x),Te=x.material;Te.visible&&m.push(x,_e,Te,B,Ie.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||tt.intersectsObject(x))){let _e=F.update(x),Te=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ie.copy(x.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ie.copy(_e.boundingSphere.center)),Ie.applyMatrix4(x.matrixWorld).applyMatrix4(ee)),Array.isArray(Te)){let ve=_e.groups;for(let Ue=0,Fe=ve.length;Ue<Fe;Ue++){let Le=ve[Ue],Ze=Te[Le.materialIndex];Ze&&Ze.visible&&m.push(x,_e,Ze,B,Ie.z,Le)}}else Te.visible&&m.push(x,_e,Te,B,Ie.z,null)}}let oe=x.children;for(let _e=0,Te=oe.length;_e<Te;_e++)Ko(oe[_e],D,B,O)}function $c(x,D,B,O){let N=x.opaque,oe=x.transmissive,_e=x.transparent;f.setupLightsView(B),$e===!0&&ce.setGlobalState(S.clippingPlanes,B),O&&Z.viewport(C.copy(O)),N.length>0&&ks(N,D,B),oe.length>0&&ks(oe,D,B),_e.length>0&&ks(_e,D,B),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Kc(x,D,B,O){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[O.id]===void 0&&(f.state.transmissionRenderTarget[O.id]=new vn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?wr:wn,minFilter:ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let oe=f.state.transmissionRenderTarget[O.id],_e=O.viewport||C;oe.setSize(_e.z*S.transmissionResolutionScale,_e.w*S.transmissionResolutionScale);let Te=S.getRenderTarget(),ve=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(oe),S.getClearColor(W),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),Ye&&Ae.render(B);let Fe=S.toneMapping;S.toneMapping=Vn;let Le=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),f.setupLightsView(O),$e===!0&&ce.setGlobalState(S.clippingPlanes,O),ks(x,B,O),ue.updateMultisampleRenderTarget(oe),ue.updateRenderTargetMipmap(oe),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let it=0,pt=D.length;it<pt;it++){let ot=D[it],rt=ot.object,De=ot.geometry,ct=ot.material,je=ot.group;if(ct.side===Tn&&rt.layers.test(O.layers)){let Ht=ct.side;ct.side=Nt,ct.needsUpdate=!0,jc(rt,B,O,De,ct,je),ct.side=Ht,ct.needsUpdate=!0,Ze=!0}}Ze===!0&&(ue.updateMultisampleRenderTarget(oe),ue.updateRenderTargetMipmap(oe))}S.setRenderTarget(Te,ve,Ue),S.setClearColor(W,q),Le!==void 0&&(O.viewport=Le),S.toneMapping=Fe}function ks(x,D,B){let O=D.isScene===!0?D.overrideMaterial:null;for(let N=0,oe=x.length;N<oe;N++){let _e=x[N],Te=_e.object,ve=_e.geometry,Ue=_e.group,Fe=_e.material;Fe.allowOverride===!0&&O!==null&&(Fe=O),Te.layers.test(B.layers)&&jc(Te,D,B,ve,Fe,Ue)}}function jc(x,D,B,O,N,oe){x.onBeforeRender(S,D,B,O,N,oe),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,D,B,O,x,oe),N.transparent===!0&&N.side===Tn&&N.forceSinglePass===!1?(N.side=Nt,N.needsUpdate=!0,S.renderBufferDirect(B,D,O,N,x,oe),N.side=Bn,N.needsUpdate=!0,S.renderBufferDirect(B,D,O,N,x,oe),N.side=Tn):S.renderBufferDirect(B,D,O,N,x,oe),x.onAfterRender(S,D,B,O,N,oe)}function Hs(x,D,B){D.isScene!==!0&&(D=we);let O=ie.get(x),N=f.state.lights,oe=f.state.shadowsArray,_e=N.state.version,Te=H.getParameters(x,N.state,oe,D,B),ve=H.getProgramCacheKey(Te),Ue=O.programs;O.environment=x.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(x.isMeshStandardMaterial?ze:Oe).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Ue===void 0&&(x.addEventListener("dispose",K),Ue=new Map,O.programs=Ue);let Fe=Ue.get(ve);if(Fe!==void 0){if(O.currentProgram===Fe&&O.lightsStateVersion===_e)return eh(x,Te),Fe}else Te.uniforms=H.getUniforms(x),x.onBeforeCompile(Te,S),Fe=H.acquireProgram(Te,ve),Ue.set(ve,Fe),O.uniforms=Te.uniforms;let Le=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Le.clippingPlanes=ce.uniform),eh(x,Te),O.needsLights=af(x),O.lightsStateVersion=_e,O.needsLights&&(Le.ambientLightColor.value=N.state.ambient,Le.lightProbe.value=N.state.probe,Le.directionalLights.value=N.state.directional,Le.directionalLightShadows.value=N.state.directionalShadow,Le.spotLights.value=N.state.spot,Le.spotLightShadows.value=N.state.spotShadow,Le.rectAreaLights.value=N.state.rectArea,Le.ltc_1.value=N.state.rectAreaLTC1,Le.ltc_2.value=N.state.rectAreaLTC2,Le.pointLights.value=N.state.point,Le.pointLightShadows.value=N.state.pointShadow,Le.hemisphereLights.value=N.state.hemi,Le.directionalShadowMap.value=N.state.directionalShadowMap,Le.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Le.spotShadowMap.value=N.state.spotShadowMap,Le.spotLightMatrix.value=N.state.spotLightMatrix,Le.spotLightMap.value=N.state.spotLightMap,Le.pointShadowMap.value=N.state.pointShadowMap,Le.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=Fe,O.uniformsList=null,Fe}function Qc(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=Pr.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function eh(x,D){let B=ie.get(x);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function rf(x,D,B,O,N){D.isScene!==!0&&(D=we),ue.resetTextureUnits();let oe=D.fog,_e=O.isMeshStandardMaterial?D.environment:null,Te=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ri,ve=(O.isMeshStandardMaterial?ze:Oe).get(O.envMap||_e),Ue=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Fe=!!B.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Le=!!B.morphAttributes.position,Ze=!!B.morphAttributes.normal,it=!!B.morphAttributes.color,pt=Vn;O.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(pt=S.toneMapping);let ot=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,rt=ot!==void 0?ot.length:0,De=ie.get(O),ct=f.state.lights;if($e===!0&&(Y===!0||x!==v)){let Lt=x===v&&O.id===M;ce.setState(O,x,Lt)}let je=!1;O.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ct.state.version||De.outputColorSpace!==Te||N.isBatchedMesh&&De.batching===!1||!N.isBatchedMesh&&De.batching===!0||N.isBatchedMesh&&De.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&De.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&De.instancing===!1||!N.isInstancedMesh&&De.instancing===!0||N.isSkinnedMesh&&De.skinning===!1||!N.isSkinnedMesh&&De.skinning===!0||N.isInstancedMesh&&De.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&De.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&De.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&De.instancingMorph===!1&&N.morphTexture!==null||De.envMap!==ve||O.fog===!0&&De.fog!==oe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ce.numPlanes||De.numIntersection!==ce.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==Fe||De.morphTargets!==Le||De.morphNormals!==Ze||De.morphColors!==it||De.toneMapping!==pt||De.morphTargetsCount!==rt)&&(je=!0):(je=!0,De.__version=O.version);let Ht=De.currentProgram;je===!0&&(Ht=Hs(O,D,N));let Yi=!1,Vt=!1,Or=!1,ht=Ht.getUniforms(),$t=De.uniforms;if(Z.useProgram(Ht.program)&&(Yi=!0,Vt=!0,Or=!0),O.id!==M&&(M=O.id,Vt=!0),Yi||v!==x){Z.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ht.setValue(w,"projectionMatrix",x.projectionMatrix),ht.setValue(w,"viewMatrix",x.matrixWorldInverse);let zt=ht.map.cameraPosition;zt!==void 0&&zt.setValue(w,Se.setFromMatrixPosition(x.matrixWorld)),J.logarithmicDepthBuffer&&ht.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ht.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),v!==x&&(v=x,Vt=!0,Or=!0)}if(N.isSkinnedMesh){ht.setOptional(w,N,"bindMatrix"),ht.setOptional(w,N,"bindMatrixInverse");let Lt=N.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ht.setValue(w,"boneTexture",Lt.boneTexture,ue))}N.isBatchedMesh&&(ht.setOptional(w,N,"batchingTexture"),ht.setValue(w,"batchingTexture",N._matricesTexture,ue),ht.setOptional(w,N,"batchingIdTexture"),ht.setValue(w,"batchingIdTexture",N._indirectTexture,ue),ht.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&ht.setValue(w,"batchingColorTexture",N._colorsTexture,ue));let Kt=B.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&re.update(N,B,Ht),(Vt||De.receiveShadow!==N.receiveShadow)&&(De.receiveShadow=N.receiveShadow,ht.setValue(w,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&($t.envMap.value=ve,$t.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&($t.envMapIntensity.value=D.environmentIntensity),Vt&&(ht.setValue(w,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&sf($t,Or),oe&&O.fog===!0&&j.refreshFogUniforms($t,oe),j.refreshMaterialUniforms($t,O,V,ne,f.state.transmissionRenderTarget[x.id]),Pr.upload(w,Qc(De),$t,ue)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Pr.upload(w,Qc(De),$t,ue),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ht.setValue(w,"center",N.center),ht.setValue(w,"modelViewMatrix",N.modelViewMatrix),ht.setValue(w,"normalMatrix",N.normalMatrix),ht.setValue(w,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Lt=O.uniformsGroups;for(let zt=0,jo=Lt.length;zt<jo;zt++){let _i=Lt[zt];Ge.update(_i,Ht),Ge.bind(_i,Ht)}}return Ht}function sf(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function af(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,D,B){let O=ie.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),ie.get(x.texture).__webglTexture=D,ie.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:B,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){let B=ie.get(x);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};let of=w.createFramebuffer();this.setRenderTarget=function(x,D=0,B=0){U=x,E=D,P=B;let O=!0,N=null,oe=!1,_e=!1;if(x){let ve=ie.get(x);if(ve.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(w.FRAMEBUFFER,null),O=!1;else if(ve.__webglFramebuffer===void 0)ue.setupRenderTarget(x);else if(ve.__hasExternalTextures)ue.rebindTextures(x,ie.get(x.texture).__webglTexture,ie.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Le=x.depthTexture;if(ve.__boundDepthTexture!==Le){if(Le!==null&&ie.has(Le)&&(x.width!==Le.image.width||x.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(x)}}let Ue=x.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(_e=!0);let Fe=ie.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Fe[D])?N=Fe[D][B]:N=Fe[D],oe=!0):x.samples>0&&ue.useMultisampledRTT(x)===!1?N=ie.get(x).__webglMultisampledFramebuffer:Array.isArray(Fe)?N=Fe[B]:N=Fe,C.copy(x.viewport),z.copy(x.scissor),k=x.scissorTest}else C.copy(Me).multiplyScalar(V).floor(),z.copy(He).multiplyScalar(V).floor(),k=Je;if(B!==0&&(N=of),Z.bindFramebuffer(w.FRAMEBUFFER,N)&&O&&Z.drawBuffers(x,N),Z.viewport(C),Z.scissor(z),Z.setScissorTest(k),oe){let ve=ie.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+D,ve.__webglTexture,B)}else if(_e){let ve=D;for(let Ue=0;Ue<x.textures.length;Ue++){let Fe=ie.get(x.textures[Ue]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ue,Fe.__webglTexture,B,ve)}}else if(x!==null&&B!==0){let ve=ie.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ve.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(x,D,B,O,N,oe,_e,Te=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){Z.bindFramebuffer(w.FRAMEBUFFER,ve);try{let Ue=x.textures[Te],Fe=Ue.format,Le=Ue.type;if(!J.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-O&&B>=0&&B<=x.height-N&&(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Te),w.readPixels(D,B,O,N,Pe.convert(Fe),Pe.convert(Le),oe))}finally{let Ue=U!==null?ie.get(U).__webglFramebuffer:null;Z.bindFramebuffer(w.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(x,D,B,O,N,oe,_e,Te=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve)if(D>=0&&D<=x.width-O&&B>=0&&B<=x.height-N){Z.bindFramebuffer(w.FRAMEBUFFER,ve);let Ue=x.textures[Te],Fe=Ue.format,Le=Ue.type;if(!J.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ze),w.bufferData(w.PIXEL_PACK_BUFFER,oe.byteLength,w.STREAM_READ),x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Te),w.readPixels(D,B,O,N,Pe.convert(Fe),Pe.convert(Le),0);let it=U!==null?ie.get(U).__webglFramebuffer:null;Z.bindFramebuffer(w.FRAMEBUFFER,it);let pt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Cu(w,pt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ze),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,oe),w.deleteBuffer(Ze),w.deleteSync(pt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,B=0){let O=Math.pow(2,-B),N=Math.floor(x.image.width*O),oe=Math.floor(x.image.height*O),_e=D!==null?D.x:0,Te=D!==null?D.y:0;ue.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,_e,Te,N,oe),Z.unbindTexture()};let lf=w.createFramebuffer(),cf=w.createFramebuffer();this.copyTextureToTexture=function(x,D,B=null,O=null,N=0,oe=null){oe===null&&(N!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=N,N=0):oe=0);let _e,Te,ve,Ue,Fe,Le,Ze,it,pt,ot=x.isCompressedTexture?x.mipmaps[oe]:x.image;if(B!==null)_e=B.max.x-B.min.x,Te=B.max.y-B.min.y,ve=B.isBox3?B.max.z-B.min.z:1,Ue=B.min.x,Fe=B.min.y,Le=B.isBox3?B.min.z:0;else{let Kt=Math.pow(2,-N);_e=Math.floor(ot.width*Kt),Te=Math.floor(ot.height*Kt),x.isDataArrayTexture?ve=ot.depth:x.isData3DTexture?ve=Math.floor(ot.depth*Kt):ve=1,Ue=0,Fe=0,Le=0}O!==null?(Ze=O.x,it=O.y,pt=O.z):(Ze=0,it=0,pt=0);let rt=Pe.convert(D.format),De=Pe.convert(D.type),ct;D.isData3DTexture?(ue.setTexture3D(D,0),ct=w.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(ue.setTexture2DArray(D,0),ct=w.TEXTURE_2D_ARRAY):(ue.setTexture2D(D,0),ct=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);let je=w.getParameter(w.UNPACK_ROW_LENGTH),Ht=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Yi=w.getParameter(w.UNPACK_SKIP_PIXELS),Vt=w.getParameter(w.UNPACK_SKIP_ROWS),Or=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ot.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ot.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ue),w.pixelStorei(w.UNPACK_SKIP_ROWS,Fe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Le);let ht=x.isDataArrayTexture||x.isData3DTexture,$t=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){let Kt=ie.get(x),Lt=ie.get(D),zt=ie.get(Kt.__renderTarget),jo=ie.get(Lt.__renderTarget);Z.bindFramebuffer(w.READ_FRAMEBUFFER,zt.__webglFramebuffer),Z.bindFramebuffer(w.DRAW_FRAMEBUFFER,jo.__webglFramebuffer);for(let _i=0;_i<ve;_i++)ht&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ie.get(x).__webglTexture,N,Le+_i),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ie.get(D).__webglTexture,oe,pt+_i)),w.blitFramebuffer(Ue,Fe,_e,Te,Ze,it,_e,Te,w.DEPTH_BUFFER_BIT,w.NEAREST);Z.bindFramebuffer(w.READ_FRAMEBUFFER,null),Z.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||ie.has(x)){let Kt=ie.get(x),Lt=ie.get(D);Z.bindFramebuffer(w.READ_FRAMEBUFFER,lf),Z.bindFramebuffer(w.DRAW_FRAMEBUFFER,cf);for(let zt=0;zt<ve;zt++)ht?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Kt.__webglTexture,N,Le+zt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Kt.__webglTexture,N),$t?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Lt.__webglTexture,oe,pt+zt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Lt.__webglTexture,oe),N!==0?w.blitFramebuffer(Ue,Fe,_e,Te,Ze,it,_e,Te,w.COLOR_BUFFER_BIT,w.NEAREST):$t?w.copyTexSubImage3D(ct,oe,Ze,it,pt+zt,Ue,Fe,_e,Te):w.copyTexSubImage2D(ct,oe,Ze,it,Ue,Fe,_e,Te);Z.bindFramebuffer(w.READ_FRAMEBUFFER,null),Z.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else $t?x.isDataTexture||x.isData3DTexture?w.texSubImage3D(ct,oe,Ze,it,pt,_e,Te,ve,rt,De,ot.data):D.isCompressedArrayTexture?w.compressedTexSubImage3D(ct,oe,Ze,it,pt,_e,Te,ve,rt,ot.data):w.texSubImage3D(ct,oe,Ze,it,pt,_e,Te,ve,rt,De,ot):x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,oe,Ze,it,_e,Te,rt,De,ot.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,oe,Ze,it,ot.width,ot.height,rt,ot.data):w.texSubImage2D(w.TEXTURE_2D,oe,Ze,it,_e,Te,rt,De,ot);w.pixelStorei(w.UNPACK_ROW_LENGTH,je),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ht),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Yi),w.pixelStorei(w.UNPACK_SKIP_ROWS,Vt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Or),oe===0&&D.generateMipmaps&&w.generateMipmap(ct),Z.unbindTexture()},this.initRenderTarget=function(x){ie.get(x).__webglFramebuffer===void 0&&ue.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?ue.setTextureCube(x,0):x.isData3DTexture?ue.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?ue.setTexture2DArray(x,0):ue.setTexture2D(x,0),Z.unbindTexture()},this.resetState=function(){E=0,P=0,U=null,Z.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var bt=Object.freeze([{id:"greed",title:"\u8CAA\u5A6A",english:"GREED",subtitle:"The Mad Dealer",color:"#b27343",art:"./assets/greed-first.webp",available:!0},{id:"pride",title:"\u50B2\u6162",english:"PRIDE",subtitle:"The Mirror Palace",color:"#8464ae",art:"./assets/pride-first.webp",available:!0},{id:"envy",title:"\u5AC9\u5992",english:"ENVY",subtitle:"The Watching Child",color:"#548c76",art:"./assets/envy-first.webp",available:!0},{id:"lust",title:"\u8272\u617E",english:"LUST",subtitle:"Cupid in the Clouds",color:"#c56b8a",art:"./assets/lust-cupid-r2.webp",available:!0,preview:!0},...[5,6,7].map(n=>({id:"sealed-"+n,title:"\u5C01\u5370 "+n,english:"SEALED "+n,color:"#8a8982",available:!1}))]);function hd(){return{index:0,phase:"browse",elapsed:0,rotate:!1,yaw:0,pitch:0,drop:{x:0,y:0},message:"",available:bt.map(n=>n.available)}}function Nc(n,e){return n.phase!=="browse"||!bt[e]?!1:n.available[e]?(n.index=e,n.drop={x:0,y:0},n.yaw=0,n.pitch=0,n.message="",!0):(n.message="sealed",!1)}function Fc(n,e,t){return n.phase!=="browse"?!1:(n.drop.x=Math.max(-6,Math.min(6,e)),n.drop.y=Math.max(-6,Math.min(6,t)),!0)}function ud(n,e,t){return n.phase!=="browse"?!1:(n.yaw=Math.max(-Math.PI,Math.min(Math.PI,n.yaw+e)),n.pitch=Math.max(-1.1,Math.min(1.1,n.pitch+t)),!0)}function dd(n,{distance:e,aligned:t=!0}){return n.phase!=="browse"?!1:e>.72||!t?(n.drop={x:0,y:0},n.message=t?"returned":"align",!1):zc(n)}function zc(n){return n.phase!=="browse"||!n.available[n.index]?!1:(n.phase="insert",n.elapsed=0,n.rotate=!1,n.message="",!0)}function fd(n,e,{paused:t=!1,reduced:i=!1}={}){t||(n.elapsed+=Math.max(0,Math.min(250,e)),n.phase==="insert"&&n.elapsed>=(i?300:1250)?(n.phase="boot",n.elapsed=0):n.phase==="boot"&&n.elapsed>=(i?250:2100)&&(n.phase="playing",n.elapsed=0))}function pd(n){return n.phase==="browse"?!1:(n.phase="browse",n.elapsed=0,n.drop={x:0,y:0},n.yaw=0,n.pitch=0,n.message="",!0)}var Is=n=>(n=Math.max(0,Math.min(1,n)),n*n*(3-2*n));var md="varying vec3 vNormal;varying vec3 vView;varying vec3 vWorld;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vNormal=normalize(normalMatrix*normal);vView=-mv.xyz;vWorld=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*mv;}",gd=`uniform vec3 uColor;uniform float uGloss;varying vec3 vNormal;varying vec3 vView;varying vec3 vWorld;float grain(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,42.319)))*43758.5453);}void main(){vec3 n=normalize(vNormal),v=normalize(vView),l=normalize(vec3(-.6,.85,1.2));float diffuse=max(dot(n,l),0.);float sheen=pow(max(dot(n,normalize(l+v)),0.),mix(16.,90.,uGloss));float rim=pow(1.-max(dot(n,v),0.),2.5);vec3 col=uColor*(.54+.55*diffuse)+vec3(1.,.95,.88)*sheen*.24+rim*.055;col+=(grain(vWorld*370.)-.5)*.017;gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,Bc="varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;void main(){vUv=uv;vNormal=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vView=-mv.xyz;gl_Position=projectionMatrix*mv;}",_d=`uniform sampler2D uMap;uniform float uTime;uniform float uReduced;varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;void main(){vec4 ink=texture2D(uMap,vUv);float angle=dot(normalize(vNormal),normalize(vView));float strip=pow(max(0.,1.-abs(vUv.x*.8+vUv.y*.35-(1.-angle)*1.2-.53)),26.);vec3 spectrum=.5+.5*cos(vec3(0.,2.,4.)+(vUv.x+vUv.y)*6.+(1.-angle)*15.);vec3 col=ink.rgb+strip*spectrum*.14;col+=pow(1.-angle,3.)*.12;gl_FragColor=vec4(col,ink.a);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,yd=`uniform sampler2D uMap;uniform float uTime;uniform float uBoot;uniform float uReduced;varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;void main(){vec2 uv=vUv;vec3 col=texture2D(uMap,uv).rgb;float scan=.955+.045*cos(uv.y*448.*3.14159);float vignette=1.-.17*length((uv-.5)*1.25);col*=scan*vignette;float glare=pow(max(0.,1.-abs(uv.x*.5+uv.y*.35-.64)),15.);col+=vec3(.08,.09,.06)*glare;col+=vec3(.025,.04,.018)*uBoot;gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,xd="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",vd="uniform float uProgress;uniform float uAspect;uniform vec3 uTone;uniform vec3 uPaper;uniform float uReduced;varying vec2 vUv;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){float p=clamp(uProgress,0.,1.);vec2 uv=(vUv-.5)*vec2(uAspect,1.);vec2 cell=floor(uv*180.);vec2 px=cell/180.;float r=length(px),a=atan(px.y,px.x);float ring=exp(-abs(r-(.04+p*.92))*48.);float trails=pow(max(0.,cos(a*16.+r*24.-p*5.)),28.)*exp(-r*1.6);float stars=step(.995,hash(cell))*smoothstep(0.,.3,p)*(1.-smoothstep(.7,1.,p));float aperture=smoothstep(p*.9-.09,p*.9+.09,r);vec3 color=mix(uPaper*.08,vec3(.055,.025,.10),aperture);color+=uTone*(ring*1.2+trails*.26+stars*.85)*(1.-uReduced);float glow=exp(-r*r*12.)*sin(p*3.14159);color+=vec3(.36,.22,.11)*glow;gl_FragColor=vec4(color,1.);}";var Vi=["zh-Hant","zh-Hans","en","ja","ko","pt","es"],Oc={"zh-Hant":{dangerEffect:"\u5371\u96AA\u63D0\u793A\u6548\u679C",screenShake:"\u6296\u52D5",noScreenShake:"\u4E0D\u6296\u52D5",crazyDifficulty:"\u96E3\u5EA6",gameMenu:"\u904A\u6232\u9078\u55AE",bgmVolume:"BGM \u97F3\u91CF",sfxVolume:"\u8072\u6548\u97F3\u91CF",quitToMenu:"\u9000\u51FA\u56DE\u4E3B\u9078\u55AE",quitConfirm:"\u78BA\u5B9A\u9000\u51FA\uFF1F\u9019\u6B21\u904A\u6232\u5C07\u6703\u7D50\u675F\u3002",cancel:"\u53D6\u6D88",confirmExit:"\u78BA\u5B9A\u9000\u51FA",crazyMenuLive:"\u6230\u9B25\u7E7C\u7E8C\u9032\u884C\uFF0C\u9019\u500B\u9078\u55AE\u4E0D\u6703\u66AB\u505C Boss\u3002",crazyGreed:"\u8CAA\u5A6A",crazyCatPlayerWarning:"\u8C93\u4F38\u722A\uFF01\u5DE6\u53F3\u8EB2\u907F\uFF01",crazyCatBossWarning:"\u8C93\u76EF\u4E0A\u838A\u5BB6\u2026\u2026",crazyCatGiftWarning:"\u8C93\u5E36\u4E86\u9B5A\u4E7E\uFF01",crazyCatBlocksWarning:"\u8C93\u76EF\u4E0A\u65B9\u584A\u2026\u2026",crazyCatSmash:"\u8C93\u6253\u788E\u65B9\u584A\uFF01",crazyCatBossScratch:"\u8C93\u6293\u50B7 Boss",crazyCatPlayerScratch:"\u88AB\u8C93\u6293\u50B7",crazyCatDodge:"\u8EB2\u904E\u8C93\u722A\uFF01",crazyCatGift:"\u9B5A\u4E7E\u56DE\u8840",crazySevenSins:"\u4E03\u5927\u7F6A",crazyChooseBoss:"\u4F9D\u5E8F\u6311\u6230\u4E03\u5927\u7F6A \xB7 \u901A\u95DC\u5F8C\u63ED\u958B\u4E0B\u4E00\u95DC",crazyChallenge:"\u6311\u6230",crazyLocked:"\u672A\u89E3\u9396",crazyCleared:"\u5B8C\u6574\u901A\u95DC",sinPride:"\u50B2\u6162",sinEnvy:"\u5AC9\u5992",sinWrath:"\u61A4\u6012",sinLust:"\u8272\u617E",sinGluttony:"\u66B4\u98DF",sinSloth:"\u6020\u60F0",crazyGreedLore:"\u838A\u5BB6\u60F3\u8981\u4E00\u5207\u3002\u6311\u6230\u8CAA\u5A6A\u7684\u8CED\u5C40\u3002",crazyTrueName:"\u566C\u91D1\u838A\u5BB6",crazyTrueForm:"\u8CAA\u5A6A\u771F\u8EAB\u30FB\u566C\u91D1\u838A\u5BB6",crazyTransform:"\u9762\u5177\u788E\u88C2",crazyNeverEnough:"\u300C\u9084\u4E0D\u5920\u2026\u2026\u5168\u90E8\u90FD\u662F\u6211\u7684\u3002\u300D",crazyTransformSub:"\u91D1\u5EAB\u5DF2\u958B\uFF0C\u8FFD\u50B5\u958B\u59CB\u3002",crazyGreedBroken:"\u8CAA\u5A6A\uFF0C\u64CA\u7834\u3002",crazyVictorySub:"\u838A\u5BB6\u7684\u91D1\u5EAB\uFF0C\u7D42\u65BC\u4E0D\u518D\u5C6C\u65BC\u4ED6\u3002",crazySkip:"\u8DF3\u904E",crazyContinue:"\u7E7C\u7E8C",crazyClearUnlock:"\u5DF2\u89E3\u9396\u566C\u91D1\u838A\u5BB6\u526A\u5F71",crazyHealth:"\u5269\u9918\u8840\u91CF",crazyCounters:"\u53CD\u64CA\u6B21\u6578",crazyCoins:"\u6536\u96C6\u786C\u5E63",crazyDamageTaken:"\u627F\u53D7\u50B7\u5BB3",crazyHealed:"\u56DE\u5FA9\u8840\u91CF",crazyMode_jump:"\u8DF3\u8E8D\u8FFD\u50B5",crazyMode_coins:"\u91D1\u5E63\u6D2A\u6D41",crazyMode_motion:"\u52D5\uFF0F\u505C\u5951\u7D04",crazyMode_vortex:"\u8CAA\u5A6A\u5438\u5F15",crazyMode_roulette:"\u8F2A\u76E4\u8FFD\u6BBA",crazyMode_pusher:"\u63A8\u5E63\u734E\u52F5",crazyHint_jump:"\u5DE6\u53F3\u79FB\u52D5\uFF0C\u7A7A\u767D\u9375\uFF0F\u8DF3\u8E8D\u907F\u958B\u8CBC\u5730\u91D1\u689D\uFF1B\u9577\u6309\u8DF3\u5F97\u8F03\u9AD8\u3002\u4E0A\u65B9\u969C\u7919\u5247\u7559\u5728\u5730\u9762\uFF0C\u6BCF\u5B58\u6D3B\u5169\u79D2\u53CD\u64CA\u3002",crazyHint_coins:"\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52D5\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002\u907F\u958B\u91D1\u5E63\u6D2A\u6D41\uFF0C\u7DA0\u5E63\u56DE\u5FA9 3 HP\uFF1B\u7D05\u8272\u7BAD\u982D\u5148\u9810\u544A\u3002",crazyHint_motion:"\u6383\u7DDA\u53EF\u5F9E\u516B\u500B\u65B9\u5411\u4F86\uFF1A\u85CD\u8272\u79FB\u52D5\u3001\u6A59\u8272\u505C\u4F4F\uFF0C\u4E5F\u53EF\u79FB\u51FA\u6383\u7DDA\uFF1B\u7A7A\u767D\u9375\u885D\u523A\u3002",crazyHint_vortex:"\u91D1\u5EAB\u6703\u5438\u5F15\u6838\u5FC3\uFF0C\u53CD\u65B9\u5411\u62B5\u6297\u4E26\u907F\u958B\u91D1\u5E63\u3002\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52D5\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002",crazyHint_roulette:"\u6BCF\u6CE2 1\u20133 \u689D\u9810\u544A\u5C04\u7DDA\uFF0C\u53EF\u80FD\u4F9D\u6B21\u767C\u5C04\u3002\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u907F\u958B\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002",crazyHint_pusher:"\u5DE6\u53F3\uFF0F\u9EDE\u9078\u4F4D\u7F6E\uFF0C\u7A7A\u767D\u9375\u6295\u5E63\u3002\u7DA0\u5E63\u56DE\u8840\u3001\u7D05\u5E63\xD72\u30017\u5E63\u62BD JP\uFF1BC \u6536\u4E0B\uFF0C\u5269 2 \u79D2\u6536\u5C3E\u3002",crazyJump:"\u8DF3\u8E8D",crazyJumpHint:"SPACE \u8DF3\u8E8D \xB7 \u9577\u6309\u8DF3\u9AD8",crazyKeepMoving:"\u2192 \u85CD\u8272\uFF1A\u4FDD\u6301\u79FB\u52D5",crazyStayStill:"\u25A0 \u6A59\u8272\uFF1A\u505C\u4F4F",crazyPusherJackpot:"Jackpot\uFF01",crazyPusherStock:"\u786C\u5E63",crazyPusherSettle:"\u505C\u6B62\u6295\u5E63 \xB7 \u6536\u5C3E\u4E2D",crazyPusherReward:"\u53CD\u64CA\u734E\u52F5 \xB7 \u672C\u56DE\u5408\u4E0D\u53D7\u50B7",crazyPusherAgain:"\u518D\u63A8\u4E00\u6B21",crazyInsertCoin:"\u6295\u5E63",crazyPusherRisk:"\u518D\u63A8\u6311\u6230\uFF1A60% \u4FDD\u7559\uFF0C\u5426\u5247\u672A\u6536\u734E\u52F5\u6E1B\u534A",crazyPusherSettled:"\u63A8\u5E63\u6311\u6230\u5DF2\u7D50\u7B97",crazyPusherBank:"\u63A8\u5E63\u734E\u52F5\u5DF2\u6536\u4E0B",crazyDashSound:"\u885D\u523A",crazyLaserSound:"\u8F2A\u76E4\u958B\u706B",crazyVictorySound:"\u91D1\u5E63\u7051\u843D",crazyCoinSound:"\u786C\u5E63",crazyPusherInsertSound:"\u6295\u5E63",crazyPusherDropSound:"\u786C\u5E63\u843D\u4E0B",crazyPusherStepSound:"\u843D\u5230\u4E0B\u5C64",crazyCardSound:"\u9078\u724C",crazyTileSound:"\u9078\u724C",crazyReelStop:"\u8F49\u8F2A\u505C\u4E0B",crazyLaunchSound:"\u767C\u5C04",crazyPegSound:"\u91D8\u677F\u53CD\u5F48",crazyFlipperSound:"\u5F48\u677F",crazyBossBattle:"Boss \u6230",crazyPreviewHint:"\u518D\u6309 Crazy \u9032\u5834\u3002100 HP \xB7 \u4E09\u968E\u6BB5 \xB7 \u7121\u5012\u6578\u7B49\u5F85\u3002",crazyDealer:"\u72C2\u5BB4\u838A\u5BB6",crazyOpening:"\u838A\u5BB6\u958B\u5C40\uFF0C\u6E96\u5099\u53CD\u64CA\u3002",crazyPhaseLabel:"\u968E\u6BB5",crazyPhase:"\u65B0\u968E\u6BB5\uFF01\u56DE\u5FA9\u8840\u91CF\u3002",crazySwitch:"\u65B0\u73A9\u6CD5\uFF0C\u63A5\u6230\uFF01",crazyHurt:"\u53D7\u50B7\uFF01",crazyHeal:"\u56DE\u8840",crazyHit:"Boss \u50B7\u5BB3",crazyGuard:"\u838A\u5BB6\u9632\u79A6 \xB7 \u7E7C\u7E8C\u53CD\u64CA",crazyCounter:"\u53CD\u64CA\u6210\u529F\uFF01",crazyAttackWarning:"\u547D\u4E2D\u963B\u6B62\u653B\u64CA\uFF01",crazyBossAttack:"\u838A\u5BB6\u653B\u64CA",crazyWrong:"\u914D\u5C0D\u932F\u8AA4",crazyMiss:"\u5931\u624B",crazyRiskLost:"\u5192\u96AA\u5931\u6557",crazyBankOrRisk:"\u6536\u4E0B\u9084\u662F\u7FFB\u500D\uFF1F",crazyTopout:"\u5835\u9802\uFF1A\u6263 20 HP",crazyBallLost:"\u6F0F\u7403",crazyCatWarning:"\u55B5\u2026\u2026\u8C93\u722A\u4F86\u4E86\uFF01",crazyCatSwipe:"\u8C93\u8C93\u6417\u86CB\uFF01",crazyTimeout:"\u838A\u5BB6\u6536\u684C\uFF0C\u6642\u9593\u8017\u76E1\u3002",crazyTimeoutRound:"\u672C\u56DE\u5408\u672A\u547D\u4E2D",crazyVictory:"\u64CA\u6557\u838A\u5BB6\uFF01",crazyDefeat:"\u8840\u91CF\u8017\u76E1",crazyStop:"\u505C\u8F2A",crazyPending:"\u5F85\u6536\u734E\u52F5",crazyPull:"\u62C9\u687F",crazyBankHint:"C\uFF0F\u6536\u4E0B\uFF1A\u9818\u734E\u4E26\u56DE\u5FA9 4 HP",crazyRiskHint:"\u7A7A\u767D\u9375\uFF0F\u7FFB\u500D\uFF1A\u6210\u529F 55%\uFF0C\u5931\u6557 \u221210 HP",crazyFindPair:"\u627E\u5169\u5F35",crazyPairHint:"\u9EDE\u9078\u724C\uFF0C\u6216\u5DE6\u53F3\u9078\u64C7\uFF0B\u7A7A\u767D\u9375",crazyAction:"\u884C\u52D5",crazyBank:"\u6536\u4E0B",crazyReset:"\u91CD\u9078",crazyMode_bridge:"\u67B6\u584A",crazyMode_sand:"\u6C99\u584A",crazyMode_slots:"\u89D2\u5B50\u6A5F",crazyMode_tiger:"\u8001\u864E\u6A5F",crazyMode_pachinko:"\u62CD\u6E05\u54E5",crazyMode_cards:"\u5564\u724C",crazyMode_mahjong:"\u9EBB\u5C07",crazyMode_breakout:"Brickout",crazyMode_pinball:"\u5F48\u73E0\u53F0",crazyMode_bbtan:"BBTAN",crazyHint_bridge:"\u6D88\u884C\u653B\u64CA\u3002\u5DE6\u53F3\u79FB\u52D5\uFF0CX\uFF0FZ \u65CB\u8F49\uFF0CC \u4FDD\u7559\uFF0C\u7A7A\u767D\u9375\u843D\u4E0B\u3002",crazyHint_sand:"\u540C\u8272\u6C99\u7C92\u9023\u901A\u5DE6\u53F3\u5169\u908A\u5373\u53EF\u653B\u64CA\uFF0C\u64CD\u4F5C\u540C\u67B6\u584A\u3002",crazyHint_slots:"\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u9010\u8F2A\u505C\u8F49\uFF0C\u914D\u6210\u5169\u500B\u6216\u4E09\u500B\u540C\u5716\u6848\u3002",crazyHint_tiger:"\u62C9\u687F\u7B49\u4E09\u8F2A\u505C\u4E0B\u3002\u4E2D\u734E\u5F8C\u300C\u6536\u4E0B\u300D\u9818\u734E\u56DE\u8840\uFF0C\u6216\u300C\u7FFB\u500D\u300D\u5192\u96AA\uFF1A55% \u6210\u529F\uFF0C\u5931\u6557\u5931\u734E\u6263 10 HP\u3002",crazyHint_pachinko:"\u5DE6\u53F3\u6216\u9EDE\u9078\u7784\u6E96\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u767C\u7403\u3002\u69FD\u4F4D\u53CA\u6578\u503C\u6BCF\u56DE\u5408\u96A8\u6A5F\uFF1B\u7DA0\u69FD\u56DE\u8840\u3001\u7D2B\u69FD\u653B\u64CA\u3001\u7D05\u69FD\u6263\u8840\u3002",crazyHint_cards:"\u5012\u6578\u5167\u9078\u6307\u5B9A\u6578\u5B57\u5C0D\u5B50\uFF01\u9EDE\u724C\u6216\u5DE6\u53F3\uFF0B\u9078\u724C\uFF1B\u9023\u7E8C\u7B54\u5C0D\u52A0\u50B7\u5BB3\uFF0C\u8D85\u6642\uFF0F\u932F\u724C\u6263 5 HP\u3002",crazyHint_mahjong:"\u5012\u6578\u5167\u914D\u51FA\u4E0A\u65B9\u6307\u5B9A\u724C\uFF0C\u6BCF\u5C0D\u6539\u8B8A\u76EE\u6A19\uFF01\u9EDE\u724C\u6216\u5DE6\u53F3\uFF0B\u9078\u724C\uFF1B\u9023\u7E8C\u914D\u5C0D\u52A0\u50B7\u5BB3\uFF0CC \u91CD\u9078\u3002",crazyHint_breakout:"\u5DE6\u53F3\u79FB\u52D5\u7403\u677F\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u767C\u7403\u3002\u6253\u788E\u65B9\u584A\u653B\u64CA\u3002",crazyHint_pinball:"\u9577\u6309\u5DE6\u53F3\u6258\u8D77\u5F48\u677F\u3002\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u767C\u7403\u3002",crazyHint_bbtan:"\u5DE6\u53F3\u7784\u6E96\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u767C\u5C04\u7403\u7FA4\u3002",crazyMode_dodge:"\u838A\u5BB6\u8FFD\u6BBA",crazyHint_dodge:"\u65B9\u5411\u9375\uFF0F\u89F8\u63A7\u65B9\u5411\u79FB\u52D5\uFF0C\u6216\u62D6\u66F3\u6838\u5FC3\u3002\u7A7A\u767D\u9375\uFF0F\u885D\u523A\u53EF\u77ED\u66AB\u7121\u6575\uFF1B\u907F\u958B\u7D05\u8272\u9810\u8B66\uFF0C\u627E\u7F3A\u53E3\uFF0C\u6BCF\u5B58\u6D3B\u5169\u79D2\u53CD\u64CA\u3002",crazyDash:"\u885D\u523A",crazyDashReady:"\u885D\u523A\u5C31\u7DD2 \xB7 SPACE",crazyDodgeHit:"\u88AB\u653B\u64CA\u547D\u4E2D",crazyRisk:"\u7FFB\u500D",crazyRolling:"\u8F49\u8F2A\u4E2D\u2026",crazyRiskRolling:"\u7FFB\u500D\u6311\u6230\u4E2D\u2026",crazyLeverPrompt:"\u6309\u300C\u62C9\u687F\u300D\u958B\u59CB\u8F49\u8F2A",crazyOdds:"\u7FFB\u500D\u6210\u529F 55% \xB7 \u5931\u6557\u5931\u53BB\u734E\u52F5 \u221210 HP",crazyPairTimeout:"\u9078\u724C\u8D85\u6642",crazyIncoming:"\u838A\u5BB6\u51FA\u62DB\uFF01",crazySelect:"\u9078\u724C",crazyUp:"\u4E0A",title:"\u67B6\u584A",back:"\u56DE\u4F5C\u54C1\u5217\u8868",marathon:"\u99AC\u62C9\u677E",sprint:"40 \u884C\u7AF6\u901F",settings:"\u8A2D\u5B9A",donate:"\u8D0A\u52A9",language:"\u8A9E\u8A00",volume:"\u97F3\u91CF",theme:"\u80CC\u666F",touch:"\u89F8\u5C4F",touchAuto:"\u81EA\u52D5",touchOn:"\u958B",touchOff:"\u95DC",dark:"\u9ED1\u5E95",light:"\u767D\u5E95",close:"\u8FD4\u56DE",hold:"\u4FDD\u7559",next:"\u4E0B\u4E00\u500B",score:"\u5206\u6578",lines:"\u6D88\u9664",stage:"\u968E\u6BB5",best:"\u6700\u9AD8",time:"\u6642\u9593",holdReady:"\u53EF\u4FDD\u7559",holdUsed:"\u843D\u4E0B\u524D\u4E0D\u80FD\u518D\u63DB",left:"\u5DE6",right:"\u53F3",rotate:"\u8F49",rotateLeft:"\u5DE6\u65CB",rotateRight:"\u53F3\u65CB",warning:"\u8B66\u6212",fever:"Fever",feverStart:"\u9023\u64CA\uFF0B\u7206\u7834 Fever\uFF01",danger:"\u5371\u6025",keep:"\u7559",drop:"\u843D",soft:"\u964D",fire:"\u5C04",start:"\u958B\u59CB",again:"\u518D\u4E00\u5C40",menu:"\u56DE\u9078\u55AE",resume:"\u7E7C\u7E8C",paused:"\u66AB\u505C",pauseHint:"P \u6216 Esc \u7E7C\u7E8C\u3002",teachBreakout:"\u5DE6\u53F3\u9375\u79FB\u52D5\u5E95\u677F\uFF0C\u628A\u7403\u63A5\u4F4F\u3002",arcadeSpeed:"\u7403\u901F \xD72",arcadeDouble:"\u7403 \xD72",arcadeTriple:"\u7403 \xD73",arcadeWide:"\u677F\u653E\u5927",arcadeNarrow:"\u677F\u7E2E\u5C0F",teachBbtan:"\u5DE6\u53F3\u9375\u7784\u6E96\uFF0C\u7A7A\u767D\u9375\u6216\u4E0A\u9375\u767C\u5C04\u3002",teachPinball:"\u5DE6\u9375\u62CD\u5DE6\u64CB\u677F\uFF0C\u53F3\u9375\u62CD\u53F3\u64CB\u677F\u3002",curseReverse:"\u5DE6\u53F3\u76F8\u53CD",curseBlind:"\u9ED1\u5C4F",curseRush:"\u52A0\u901F",curseNorotate:"\u4E0D\u80FD\u8F49",curseNoHold:"\u4E0D\u80FD\u4FDD\u7559",garbageAdded:"\u5783\u573E\u4E0A\u5347",garbageStable:"\u5783\u573E\u7A69\u56FA",topped:"\u5230\u9802\u4E86",cleared:"40 \u884C\u5B8C\u6210",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"\u5F48\u73E0\u53F0",rewardSand:"\u6D41\u6C99",teachSand:"\u4E8C\u5341\u6B21\u843D\u4E0B\u3002\u540C\u4E00\u984F\u8272\u9023\u6EFF\u6574\u500B\u6A6B\u5411\u5C31\u6574\u8272\u6D88\u53BB\u3002",tspin:"T\u65CB",tspinSingle:"T\u65CB\u55AE\u6D88",tspinDouble:"T\u65CB\u96D9\u6D88",tspinTriple:"T\u65CB\u4E09\u6D88",tspinMini:"\u5C0FT\u65CB",tspinMiniSingle:"\u5C0FT\u65CB\u55AE\u6D88",combo:"\u9023\u6D88",comboLines:"\u984D\u5916\u689D\u6578",sand:"\u6D41\u6C99",normal:"\u666E\u901A",hard:"\u56F0\u96E3",custom:"\u81EA\u8A02",pace:"\u901F\u5EA6",boards:"\u6392\u884C\u699C",gameBridge:"\u67B6\u584A",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"\u5F48\u73E0\u53F0",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"\u99AC\u62C9\u677E\u6703\u96A8\u968E\u6BB5\u7FFB\u8F49\uFF0C\u4E26\u5076\u767C Breakout\u3001BBTAN \u8207\u5F48\u73E0\u53F0\u300240 \u884C\u7AF6\u901F\u53EA\u8A08\u6642\u3002",menuHint:"\u65B9\u584A\u53EF\u4EE5\u67B6\u5728\u7A7A\u6D1E\u4E0A\u3002\u6D88\u5230\u9EC3\u9EDE\u624D\u7206\u70B8\uFF0C\u734E\u52F5\u6A21\u5F0F\u88E1\u70B8\u5F48\u6703\u9023\u74B0\u70B8\u3002",keys:"\u65B9\u5411\u9375\u79FB\u52D5\uFF0C\u4E0A / X \u8F49\uFF0CZ \u53CD\u8F49\uFF0C\u7A7A\u767D\u9375\u76F4\u843D\uFF0CC \u4FDD\u7559\uFF0CP \u66AB\u505C\u3002"},"zh-Hans":{dangerEffect:"\u5371\u9669\u63D0\u793A\u6548\u679C",screenShake:"\u6296\u52A8",noScreenShake:"\u4E0D\u6296\u52A8",crazyDifficulty:"\u96BE\u5EA6",gameMenu:"\u6E38\u620F\u83DC\u5355",bgmVolume:"BGM \u97F3\u91CF",sfxVolume:"\u58F0\u6548\u97F3\u91CF",quitToMenu:"\u9000\u51FA\u56DE\u4E3B\u83DC\u5355",quitConfirm:"\u786E\u5B9A\u9000\u51FA\uFF1F\u672C\u6B21\u6E38\u620F\u5C06\u4F1A\u7ED3\u675F\u3002",cancel:"\u53D6\u6D88",confirmExit:"\u786E\u5B9A\u9000\u51FA",crazyMenuLive:"\u6218\u6597\u7EE7\u7EED\u8FDB\u884C\uFF0C\u8FD9\u4E2A\u83DC\u5355\u4E0D\u4F1A\u6682\u505C Boss\u3002",crazyGreed:"\u8D2A\u5A6A",crazyCatPlayerWarning:"\u732B\u4F38\u722A\uFF01\u5DE6\u53F3\u8EB2\u907F\uFF01",crazyCatBossWarning:"\u732B\u76EF\u4E0A\u5E84\u5BB6\u2026\u2026",crazyCatGiftWarning:"\u732B\u5E26\u4E86\u9C7C\u5E72\uFF01",crazyCatBlocksWarning:"\u732B\u76EF\u4E0A\u65B9\u5757\u2026\u2026",crazyCatSmash:"\u732B\u6253\u788E\u65B9\u5757\uFF01",crazyCatBossScratch:"\u732B\u6293\u4F24 Boss",crazyCatPlayerScratch:"\u88AB\u732B\u6293\u4F24",crazyCatDodge:"\u8EB2\u8FC7\u732B\u722A\uFF01",crazyCatGift:"\u9C7C\u5E72\u56DE\u8840",crazySevenSins:"\u4E03\u5927\u7F6A",crazyChooseBoss:"\u4F9D\u5E8F\u6311\u6218\u4E03\u5927\u7F6A \xB7 \u901A\u5173\u540E\u63ED\u5F00\u4E0B\u4E00\u5173",crazyChallenge:"\u6311\u6230",crazyLocked:"\u672A\u89E3\u9501",crazyCleared:"\u5B8C\u6574\u901A\u95DC",sinPride:"\u50B2\u6162",sinEnvy:"\u5AC9\u5992",sinWrath:"\u6124\u6012",sinLust:"\u8272\u6B32",sinGluttony:"\u66B4\u98DF",sinSloth:"\u6020\u60F0",crazyGreedLore:"\u5E84\u5BB6\u60F3\u8981\u4E00\u5207\u3002\u6311\u6218\u8D2A\u5A6A\u7684\u8D4C\u5C40\u3002",crazyTrueName:"\u566C\u91D1\u5E84\u5BB6",crazyTrueForm:"\u8D2A\u5A6A\u771F\u8EAB\u30FB\u566C\u91D1\u5E84\u5BB6",crazyTransform:"\u9762\u5177\u788E\u88C2",crazyNeverEnough:"\u300C\u9084\u4E0D\u5920\u2026\u2026\u5168\u90E8\u90FD\u662F\u6211\u7684\u3002\u300D",crazyTransformSub:"\u91D1\u5E93\u5DF2\u5F00\uFF0C\u8FFD\u503A\u5F00\u59CB\u3002",crazyGreedBroken:"\u8D2A\u5A6A\uFF0C\u51FB\u7834\u3002",crazyVictorySub:"\u5E84\u5BB6\u7684\u91D1\u5E93\uFF0C\u7EC8\u4E8E\u4E0D\u518D\u5C5E\u4E8E\u4ED6\u3002",crazySkip:"\u8DF3\u8FC7",crazyContinue:"\u7EE7\u7EED",crazyClearUnlock:"\u5DF2\u89E3\u9501\u566C\u91D1\u5E84\u5BB6\u526A\u5F71",crazyHealth:"\u5269\u4F59\u8840\u91CF",crazyCounters:"\u53CD\u51FB\u6B21\u6578",crazyCoins:"\u6536\u96C6\u786C\u5E01",crazyDamageTaken:"\u627F\u53D7\u4F24\u5BB3",crazyHealed:"\u56DE\u590D\u8840\u91CF",crazyMode_jump:"\u8DF3\u8DC3\u8FFD\u503A",crazyMode_coins:"\u91D1\u5E01\u6D2A\u6D41",crazyMode_motion:"\u52A8\uFF0F\u505C\u5951\u7D04",crazyMode_vortex:"\u8D2A\u5A6A\u5438\u5F15",crazyMode_roulette:"\u8F2A\u76E4\u8FFD\u6BBA",crazyMode_pusher:"\u63A8\u5E01\u5956\u52B1",crazyHint_jump:"\u5DE6\u53F3\u79FB\u52A8\uFF0C\u7A7A\u767D\u9375\uFF0F\u8DF3\u8DC3\u907F\u5F00\u8CBC\u5730\u91D1\u689D\uFF1B\u957F\u6309\u8DF3\u5F97\u8F83\u9AD8\u3002\u4E0A\u65B9\u969C\u788D\u5219\u7559\u5728\u5730\u9762\uFF0C\u6BCF\u5B58\u6D3B\u4E24\u79D2\u53CD\u51FB\u3002",crazyHint_coins:"\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52A8\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002\u907F\u5F00\u91D1\u5E01\u6D2A\u6D41\uFF0C\u7DA0\u5E01\u56DE\u590D 3 HP\uFF1B\u7D05\u8272\u7BAD\u982D\u5148\u9810\u544A\u3002",crazyHint_motion:"\u626B\u7EBF\u53EF\u4ECE\u516B\u4E2A\u65B9\u5411\u6765\uFF1A\u84DD\u8272\u79FB\u52A8\u3001\u6A59\u8272\u505C\u4F4F\uFF0C\u4E5F\u53EF\u79FB\u51FA\u626B\u7EBF\uFF1B\u7A7A\u683C\u952E\u51B2\u523A\u3002",crazyHint_vortex:"\u91D1\u5E93\u6703\u5438\u5F15\u6838\u5FC3\uFF0C\u53CD\u65B9\u5411\u62B5\u6297\u4E26\u907F\u5F00\u91D1\u5E01\u3002\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52A8\uFF0C\u7A7A\u767D\u9375\u885D\u523A\u3002",crazyHint_roulette:"\u6BCF\u6CE2 1\u20133 \u6761\u9884\u544A\u5C04\u7EBF\uFF0C\u53EF\u80FD\u4F9D\u6B21\u53D1\u5C04\u3002\u65B9\u5411\u952E\uFF0F\u62D6\u66F3\u907F\u5F00\uFF0C\u7A7A\u683C\u952E\u51B2\u523A\u3002",crazyHint_pusher:"\u5DE6\u53F3\uFF0F\u70B9\u9009\u4F4D\u7F6E\uFF0C\u7A7A\u683C\u952E\u6295\u5E01\u3002\u7EFF\u5E01\u56DE\u8840\u3001\u7EA2\u5E01\xD72\u30017\u5E01\u62BD JP\uFF1BC \u6536\u4E0B\uFF0C\u5269 2 \u79D2\u6536\u5C3E\u3002",crazyJump:"\u8DF3\u8DC3",crazyJumpHint:"SPACE \u8DF3\u8DC3 \xB7 \u957F\u6309\u8DF3\u9AD8",crazyKeepMoving:"\u2192 \u84DD\u8272\uFF1A\u4FDD\u6301\u79FB\u52A8",crazyStayStill:"\u25A0 \u6A59\u8272\uFF1A\u505C\u4F4F",crazyPusherJackpot:"Jackpot\uFF01",crazyPusherStock:"\u786C\u5E01",crazyPusherSettle:"\u505C\u6B62\u6295\u5E01 \xB7 \u6536\u5C3E\u4E2D",crazyPusherReward:"\u53CD\u51FB\u5956\u52B1 \xB7 \u672C\u56DE\u5408\u4E0D\u53D7\u4F24",crazyPusherAgain:"\u518D\u63A8\u4E00\u6B21",crazyInsertCoin:"\u6295\u5E01",crazyPusherRisk:"\u518D\u63A8\u6311\u6230\uFF1A60% \u4FDD\u7559\uFF0C\u5426\u5219\u672A\u6536\u5956\u52B1\u51CF\u534A",crazyPusherSettled:"\u63A8\u5E01\u6311\u6230\u5DF2\u7ED3\u7B97",crazyPusherBank:"\u63A8\u5E01\u5956\u52B1\u5DF2\u6536\u4E0B",crazyDashSound:"\u885D\u523A",crazyLaserSound:"\u8F2A\u76E4\u5F00\u706B",crazyVictorySound:"\u91D1\u5E01\u7051\u843D",crazyCoinSound:"\u786C\u5E01",crazyPusherInsertSound:"\u6295\u5E01",crazyPusherDropSound:"\u786C\u5E01\u843D\u4E0B",crazyPusherStepSound:"\u843D\u5230\u4E0B\u5C42",crazyCardSound:"\u9009\u724C",crazyTileSound:"\u9009\u724C",crazyReelStop:"\u8F49\u8F2A\u505C\u4E0B",crazyLaunchSound:"\u53D1\u5C04",crazyPegSound:"\u9489\u677F\u53CD\u5F39",crazyFlipperSound:"\u5F39\u677F",crazyBossBattle:"Boss \u6218",crazyPreviewHint:"\u518D\u6309 Crazy \u9032\u5834\u3002100 HP \xB7 \u4E09\u9636\u6BB5 \xB7 \u65E0\u5012\u6570\u7B49\u5F85\u3002",crazyDealer:"\u72C2\u5BB4\u838A\u5BB6",crazyOpening:"\u838A\u5BB6\u5F00\u5C40\uFF0C\u51C6\u5907\u53CD\u51FB\u3002",crazyPhaseLabel:"\u9636\u6BB5",crazyPhase:"\u65B0\u9636\u6BB5\uFF01\u56DE\u590D\u8840\u91CF\u3002",crazySwitch:"\u65B0\u73A9\u6CD5\uFF0C\u63A5\u6218\uFF01",crazyHurt:"\u53D7\u4F24\uFF01",crazyHeal:"\u56DE\u8840",crazyHit:"Boss \u4F24\u5BB3",crazyCounter:"\u53CD\u51FB\u6210\u529F\uFF01",crazyAttackWarning:"\u547D\u4E2D\u963B\u6B62\u653B\u51FB\uFF01",crazyBossAttack:"\u838A\u5BB6\u653B\u51FB",crazyWrong:"\u914D\u5BF9\u932F\u8BEF",crazyMiss:"\u5931\u624B",crazyRiskLost:"\u5192\u96AA\u5931\u8D25",crazyBankOrRisk:"\u6536\u4E0B\u8FD8\u662F\u7FFB\u500D\uFF1F",crazyTopout:"\u5835\u9802\uFF1A\u6263 20 HP",crazyBallLost:"\u6F0F\u7403",crazyCatWarning:"\u55B5\u2026\u2026\u732B\u722A\u6765\u4E86\uFF01",crazyCatSwipe:"\u732B\u732B\u6417\u86CB\uFF01",crazyTimeout:"\u838A\u5BB6\u6536\u684C\uFF0C\u65F6\u9593\u8017\u5C3D\u3002",crazyTimeoutRound:"\u672C\u56DE\u5408\u672A\u547D\u4E2D",crazyVictory:"\u51FB\u8D25\u838A\u5BB6\uFF01",crazyDefeat:"\u8840\u91CF\u8017\u5C3D",crazyStop:"\u505C\u8F2A",crazyPending:"\u5F85\u6536\u5956\u52F5",crazyPull:"\u62C9\u687F",crazyBankHint:"C\uFF0F\u6536\u4E0B\uFF1A\u9886\u5956\u5E76\u6062\u590D 4 HP",crazyRiskHint:"\u7A7A\u767D\u952E\uFF0F\u7FFB\u500D\uFF1A\u6210\u529F 55%\uFF0C\u5931\u8D25 \u221210 HP",crazyFindPair:"\u627E\u4E24\u5F20",crazyPairHint:"\u70B9\u9009\u724C\uFF0C\u6216\u5DE6\u53F3\u9009\u64C7\uFF0B\u7A7A\u767D\u9375",crazyAction:"\u884C\u52D5",crazyBank:"\u6536\u4E0B",crazyReset:"\u91CD\u9009",crazyMode_bridge:"\u67B6\u5757",crazyMode_sand:"\u6C99\u5757",crazyMode_slots:"\u89D2\u5B50\u673A",crazyMode_tiger:"\u8001\u864E\u673A",crazyMode_pachinko:"\u62CD\u6E05\u54E5",crazyMode_cards:"\u5564\u724C",crazyMode_mahjong:"\u9EBB\u5C06",crazyMode_breakout:"Brickout",crazyMode_pinball:"\u5F39\u73E0\u53F0",crazyMode_bbtan:"BBTAN",crazyHint_bridge:"\u6D88\u884C\u653B\u51FB\u3002\u5DE6\u53F3\u79FB\u52D5\uFF0CX\uFF0FZ \u65CB\u8F6C\uFF0CC \u4FDD\u7559\uFF0C\u7A7A\u767D\u9375\u843D\u4E0B\u3002",crazyHint_sand:"\u540C\u8272\u6C99\u7C92\u9023\u901A\u5DE6\u53F3\u4E24\u8FB9\u5373\u53EF\u653B\u51FB\uFF0C\u64CD\u4F5C\u540C\u67B6\u5757\u3002",crazyHint_slots:"\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u9010\u8F2A\u505C\u8F6C\uFF0C\u914D\u6210\u4E24\u4E2A\u6216\u4E09\u4E2A\u540C\u5716\u6848\u3002",crazyHint_tiger:"\u62C9\u6746\u7B49\u4E09\u8F6E\u505C\u4E0B\u3002\u4E2D\u5956\u540E\u300C\u6536\u4E0B\u300D\u9886\u5956\u56DE\u8840\uFF0C\u6216\u300C\u7FFB\u500D\u300D\u5192\u9669\uFF1A55% \u6210\u529F\uFF0C\u5931\u8D25\u5931\u5956\u6263 10 HP\u3002",crazyHint_pachinko:"\u5DE6\u53F3\u6216\u70B9\u9009\u7784\u51C6\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u53D1\u7403\u3002\u69FD\u4F4D\u53CA\u6570\u503C\u6BCF\u56DE\u5408\u968F\u673A\uFF1B\u7EFF\u69FD\u56DE\u8840\u3001\u7D2B\u69FD\u653B\u51FB\u3001\u7EA2\u69FD\u6263\u8840\u3002",crazyHint_cards:"\u5012\u6570\u5185\u9009\u6307\u5B9A\u6570\u5B57\u5BF9\u5B50\uFF01\u70B9\u724C\u6216\u5DE6\u53F3\uFF0B\u9009\u724C\uFF1B\u8FDE\u7EED\u7B54\u5BF9\u52A0\u4F24\u5BB3\uFF0C\u8D85\u65F6\uFF0F\u9519\u724C\u6263 5 HP\u3002",crazyHint_mahjong:"\u5012\u6570\u5185\u914D\u51FA\u4E0A\u65B9\u6307\u5B9A\u724C\uFF0C\u6BCF\u5BF9\u6539\u53D8\u76EE\u6807\uFF01\u70B9\u724C\u6216\u5DE6\u53F3\uFF0B\u9009\u724C\uFF1B\u8FDE\u7EED\u914D\u5BF9\u52A0\u4F24\u5BB3\uFF0CC \u91CD\u9009\u3002",crazyHint_breakout:"\u5DE6\u53F3\u79FB\u52D5\u7403\u677F\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u53D1\u7403\u3002\u6253\u788E\u65B9\u5757\u653B\u51FB\u3002",crazyHint_pinball:"\u9577\u6309\u5DE6\u53F3\u6258\u8D77\u5F39\u677F\u3002\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u53D1\u7403\u3002",crazyHint_bbtan:"\u5DE6\u53F3\u7784\u51C6\uFF1B\u7A7A\u767D\u9375\uFF0F\u884C\u52D5\u53D1\u5C04\u7403\u7FA4\u3002",crazyMode_dodge:"\u5E84\u5BB6\u8FFD\u6740",crazyHint_dodge:"\u65B9\u5411\u952E\uFF0F\u89E6\u63A7\u65B9\u5411\u79FB\u52A8\uFF0C\u6216\u62D6\u66F3\u6838\u5FC3\u3002\u7A7A\u767D\u952E\uFF0F\u51B2\u523A\u53EF\u77ED\u6682\u65E0\u654C\uFF1B\u907F\u5F00\u7EA2\u8272\u9884\u8B66\uFF0C\u627E\u7F3A\u53E3\uFF0C\u6BCF\u5B58\u6D3B\u4E24\u79D2\u53CD\u51FB\u3002",crazyDash:"\u51B2\u523A",crazyDashReady:"\u51B2\u523A\u5C31\u7EEA \xB7 SPACE",crazyDodgeHit:"\u88AB\u653B\u51FB\u547D\u4E2D",crazyRisk:"\u7FFB\u500D",crazyRolling:"\u8F6C\u8F6E\u4E2D\u2026",crazyRiskRolling:"\u7FFB\u500D\u6311\u6218\u4E2D\u2026",crazyLeverPrompt:"\u6309\u300C\u62C9\u6746\u300D\u5F00\u59CB\u8F6C\u8F6E",crazyOdds:"\u7FFB\u500D\u6210\u529F 55% \xB7 \u5931\u8D25\u5931\u53BB\u5956\u52B1 \u221210 HP",crazyPairTimeout:"\u9009\u724C\u8D85\u65F6",crazyIncoming:"\u5E84\u5BB6\u51FA\u62DB\uFF01",crazySelect:"\u9009\u724C",crazyUp:"\u4E0A",title:"\u67B6\u5757",back:"\u56DE\u4F5C\u54C1\u5217\u8868",marathon:"\u9A6C\u62C9\u677E",sprint:"40 \u884C\u7ADE\u901F",settings:"\u8BBE\u7F6E",donate:"\u8D5E\u52A9",language:"\u8BED\u8A00",volume:"\u97F3\u91CF",theme:"\u80CC\u666F",touch:"\u89E6\u5C4F",touchAuto:"\u81EA\u52A8",touchOn:"\u5F00",touchOff:"\u5173",dark:"\u9ED1\u5E95",light:"\u767D\u5E95",close:"\u8FD4\u56DE",hold:"\u4FDD\u7559",next:"\u4E0B\u4E00\u4E2A",score:"\u5206\u6570",lines:"\u6D88\u9664",stage:"\u9636\u6BB5",best:"\u6700\u9AD8",time:"\u65F6\u95F4",holdReady:"\u53EF\u4FDD\u7559",holdUsed:"\u843D\u4E0B\u524D\u4E0D\u80FD\u518D\u6362",left:"\u5DE6",right:"\u53F3",rotate:"\u8F6C",rotateLeft:"\u5DE6\u65CB",rotateRight:"\u53F3\u65CB",warning:"\u8B66\u6212",fever:"Fever",feverStart:"\u8FDE\u51FB\uFF0B\u7206\u7834 Fever\uFF01",danger:"\u5371\u6025",keep:"\u7559",drop:"\u843D",soft:"\u964D",fire:"\u5C04",start:"\u5F00\u59CB",again:"\u518D\u4E00\u5C40",menu:"\u56DE\u9009\u5355",resume:"\u7EE7\u7EED",paused:"\u6682\u505C",pauseHint:"P \u6216 Esc \u7EE7\u7EED\u3002",teachBreakout:"\u5DE6\u53F3\u952E\u79FB\u52A8\u5E95\u677F\uFF0C\u628A\u7403\u63A5\u4F4F\u3002",arcadeSpeed:"\u7403\u901F \xD72",arcadeDouble:"\u7403 \xD72",arcadeTriple:"\u7403 \xD73",arcadeWide:"\u677F\u653E\u5927",arcadeNarrow:"\u677F\u7F29\u5C0F",teachBbtan:"\u5DE6\u53F3\u952E\u7784\u51C6\uFF0C\u7A7A\u683C\u952E\u6216\u4E0A\u952E\u53D1\u5C04\u3002",teachPinball:"\u5DE6\u952E\u6253\u5DE6\u6321\u677F\uFF0C\u53F3\u952E\u6253\u53F3\u6321\u677F\u3002",curseReverse:"\u5DE6\u53F3\u76F8\u53CD",curseBlind:"\u9ED1\u5C4F",curseRush:"\u52A0\u901F",curseNorotate:"\u4E0D\u80FD\u8F6C",curseNoHold:"\u4E0D\u80FD\u4FDD\u7559",garbageAdded:"\u5783\u573E\u4E0A\u5347",garbageStable:"\u5783\u573E\u7A33\u56FA",topped:"\u5230\u9876\u4E86",cleared:"40 \u884C\u5B8C\u6210",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"\u5F39\u73E0\u53F0",rewardSand:"\u6D41\u6C99",teachSand:"\u843D\u4E0B\u4E8C\u5341\u6B21\u3002\u540C\u4E00\u989C\u8272\u8FDE\u6EE1\u6574\u4E2A\u6A2A\u5411\u5C31\u6574\u8272\u6D88\u53BB\u3002",tspin:"T\u65CB",tspinSingle:"T\u65CB\u5355\u6D88",tspinDouble:"T\u65CB\u53CC\u6D88",tspinTriple:"T\u65CB\u4E09\u6D88",tspinMini:"\u5C0FT\u65CB",tspinMiniSingle:"\u5C0FT\u65CB\u5355\u6D88",combo:"\u8FDE\u6D88",comboLines:"\u989D\u5916\u6761\u6570",sand:"\u6D41\u6C99",normal:"\u666E\u901A",hard:"\u56F0\u96BE",custom:"\u81EA\u5B9A\u4E49",pace:"\u901F\u5EA6",boards:"\u6392\u884C\u699C",gameBridge:"\u67B6\u5757",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"\u5F39\u73E0\u53F0",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"\u9A6C\u62C9\u677E\u4F1A\u968F\u9636\u6BB5\u7FFB\u8F6C\uFF0C\u5E76\u5076\u53D1 Breakout\u3001BBTAN \u4E0E\u5F39\u73E0\u53F0\u300240 \u884C\u7ADE\u901F\u53EA\u8BA1\u65F6\u3002",menuHint:"\u65B9\u5757\u53EF\u4EE5\u67B6\u5728\u7A7A\u6D1E\u4E0A\u3002\u6D88\u5230\u9EC4\u70B9\u624D\u7206\u70B8\uFF0C\u5956\u52B1\u6A21\u5F0F\u91CC\u70B8\u5F39\u4F1A\u8FDE\u73AF\u70B8\u3002",keys:"\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u4E0A / X \u8F6C\uFF0CZ \u53CD\u8F6C\uFF0C\u7A7A\u683C\u76F4\u843D\uFF0CC \u4FDD\u7559\uFF0CP \u6682\u505C\u3002"},en:{dangerEffect:"Danger effect",screenShake:"Shake",noScreenShake:"No shake",crazyDifficulty:"Difficulty",gameMenu:"Game menu",bgmVolume:"BGM volume",sfxVolume:"Sound effects",quitToMenu:"Exit to main menu",quitConfirm:"Exit this game? Your current run will end.",cancel:"Cancel",confirmExit:"Exit",crazyMenuLive:"The battle continues while this menu is open.",crazyGreed:"GREED",crazyCatPlayerWarning:"Cat claw! Move left/right!",crazyCatBossWarning:"Cat eyes the dealer\u2026",crazyCatGiftWarning:"Cat brought a treat!",crazyCatBlocksWarning:"Cat eyes the blocks\u2026",crazyCatSmash:"Cat smashed blocks!",crazyCatBossScratch:"Cat scratched the boss",crazyCatPlayerScratch:"Cat scratched you",crazyCatDodge:"Dodged the cat!",crazyCatGift:"Cat treat \xB7 HP",crazySevenSins:"Seven Deadly Sins",crazyChooseBoss:"Challenge the sins in order \xB7 Clear a boss to reveal the next",crazyChallenge:"Challenge",crazyLocked:"Locked",crazyCleared:"Cleared",sinPride:"Pride",sinEnvy:"Envy",sinWrath:"Wrath",sinLust:"Lust",sinGluttony:"Gluttony",sinSloth:"Sloth",crazyGreedLore:"The house wants everything. Challenge the dealer's greed.",crazyTrueName:"The Gilded Devourer",crazyTrueForm:"GREED \xB7 GILDED DEVOURER",crazyTransform:"THE MASK BREAKS",crazyNeverEnough:"\u201CNot enough\u2026 it is all mine.\u201D",crazyTransformSub:"The vault is open. Your debt is due.",crazyGreedBroken:"GREED DEFEATED",crazyVictorySub:"The vault no longer belongs to the dealer.",crazySkip:"Skip",crazyContinue:"Continue",crazyClearUnlock:"Gilded Devourer silhouette unlocked",crazyHealth:"Health left",crazyCounters:"Counters",crazyCoins:"Coins collected",crazyDamageTaken:"Damage taken",crazyHealed:"Healing",crazyMode_jump:"DEBT RUNNER",crazyMode_coins:"COIN BARRAGE",crazyMode_motion:"MOVE / STOP",crazyMode_vortex:"GREED VORTEX",crazyMode_roulette:"ROULETTE HUNT",crazyMode_pusher:"COIN PUSHER",crazyHint_jump:"Left/Right move; SPACE / Jump clears low gold bars. Hold to jump higher; stay grounded for high bars. Survive two seconds to counter.",crazyHint_coins:"Arrows / drag to move; SPACE dashes. Dodge gold, collect green for 3 HP. Red arrows warn first.",crazyHint_motion:"Sweeps come from eight directions: MOVE for blue, STOP for orange. Leave the line or SPACE to dash.",crazyHint_vortex:"Resist the vault pull and dodge coins. Arrows / drag to move; SPACE dashes.",crazyHint_roulette:"Dodge 1\u20133 preview lines; shots may fire in sequence. Arrows/drag move; SPACE dashes.",crazyHint_pusher:"Move/tap to aim; SPACE drops. Green heals, ruby \xD72, 7 spins JP. C banks; last 2s settle.",crazyJump:"Jump",crazyJumpHint:"SPACE jumps \xB7 Hold for height",crazyKeepMoving:"\u2192 BLUE: KEEP MOVING",crazyStayStill:"\u25A0 ORANGE: STOP",crazyPusherJackpot:"Jackpot\uFF01",crazyPusherStock:"Coins",crazyPusherSettle:"NO MORE COINS \xB7 SETTLING",crazyPusherReward:"EARNED REWARD \xB7 NO DAMAGE",crazyPusherAgain:"Push again",crazyInsertCoin:"Insert coin",crazyPusherRisk:"Extra push: 60% keep; otherwise halve unbanked reward",crazyPusherSettled:"Extra push settled",crazyPusherBank:"Coin reward banked",crazyDashSound:"Dash",crazyLaserSound:"Roulette fires",crazyVictorySound:"Coin shower",crazyCoinSound:"Coin",crazyPusherInsertSound:"Coin inserted",crazyPusherDropSound:"Coins collected",crazyPusherStepSound:"Coin reached lower shelf",crazyCardSound:"Card",crazyTileSound:"Tile",crazyReelStop:"Reel stopped",crazyLaunchSound:"Launch",crazyPegSound:"Peg bounce",crazyFlipperSound:"Flipper",crazyBossBattle:"Boss battle",crazyPreviewHint:"Tap Crazy again to enter. 100 HP \xB7 three phases \xB7 no countdowns.",crazyDealer:"THE MAD DEALER",crazyOpening:"The dealer opens the game.",crazyPhaseLabel:"PHASE",crazyPhase:"New phase! HP restored.",crazySwitch:"New game. Make your move.",crazyHurt:"Hit!",crazyHeal:"HP restored",crazyHit:"Boss damage",crazyGuard:"Guard up \xB7 keep countering",crazyCounter:"Attack interrupted!",crazyAttackWarning:"Hit to interrupt!",crazyBossAttack:"Dealer strike",crazyWrong:"Wrong pair",crazyMiss:"Miss",crazyRiskLost:"Risk lost",crazyBankOrRisk:"Bank or double?",crazyTopout:"Top blocked: \u221220 HP",crazyBallLost:"Ball lost",crazyCatWarning:"Meow\u2026 incoming paw!",crazyCatSwipe:"Cat mischief!",crazyTimeout:"The dealer closes the table.",crazyTimeoutRound:"No hits this round",crazyVictory:"DEALER DEFEATED",crazyDefeat:"OUT OF HP",crazyStop:"STOP REEL",crazyPending:"REWARD",crazyPull:"PULL THE LEVER",crazyBankHint:"C / Bank: collect and heal 4 HP",crazyRiskHint:"SPACE / Risk: 55% win; failure costs 10 HP",crazyFindPair:"MATCH TWO",crazyPairHint:"Tap tiles, or \u2190 \u2192 + SPACE",crazyAction:"Action",crazyBank:"Bank",crazyReset:"Reset",crazyMode_bridge:"BRIDGE",crazyMode_sand:"SANDTRIX",crazyMode_slots:"REEL STOP",crazyMode_tiger:"LUCKY LEVER",crazyMode_pachinko:"PACHINKO",crazyMode_cards:"CARDS",crazyMode_mahjong:"MAHJONG",crazyMode_breakout:"BRICKOUT",crazyMode_pinball:"PINBALL",crazyMode_bbtan:"BBTAN",crazyHint_bridge:"Clear lines to attack. Arrows move; X / Z turn; C holds; SPACE drops.",crazyHint_sand:"Connect one sand color across both edges to attack. Same block controls.",crazyHint_slots:"SPACE / Action stops each reel. Match two or three symbols.",crazyHint_tiger:"Pull, then wait for three reels to stop. Bank collects and heals; Risk doubles at 55% odds, or loses the reward and 10 HP.",crazyHint_pachinko:"Move or tap to aim; SPACE / Action launches. Bins and values vary each round: green heals, purple attacks, red hurts.",crazyHint_cards:"Match the requested rank before time runs out! Tap or Left/Right + Select. Streaks boost damage; wrong / timeout costs 5 HP.",crazyHint_mahjong:"Match the shown tile before time runs out; the target changes each pair! Tap or Left/Right + Select. Streaks boost damage; C resets selection.",crazyHint_breakout:"Move the paddle with \u2190 \u2192; SPACE launches. Breaking bricks attacks.",crazyHint_pinball:"Hold \u2190 \u2192 to lift the flippers. SPACE / Action launches.",crazyHint_bbtan:"Move \u2190 \u2192 to aim; SPACE / Action fires a volley.",crazyMode_dodge:"DEALER ASSAULT",crazyHint_dodge:"Arrows / touch directions move; drag the core to steer. SPACE / Dash grants brief invulnerability. Avoid red warnings, find gaps; survive two seconds to counter.",crazyDash:"Dash",crazyDashReady:"DASH READY \xB7 SPACE",crazyDodgeHit:"Attack hit",crazyRisk:"Risk \xD72",crazyRolling:"Spinning\u2026",crazyRiskRolling:"Double or lose\u2026",crazyLeverPrompt:"Press Pull to spin the reels",crazyOdds:"55% win \xB7 Lose reward & 10 HP on failure",crazyPairTimeout:"Pair deadline missed",crazyIncoming:"DEALER ATTACK!",crazySelect:"Select",crazyUp:"Up",title:"Bridge",back:"Back to works",marathon:"Marathon",sprint:"40-line sprint",settings:"Settings",donate:"Donate",language:"Language",volume:"Volume",theme:"Background",touch:"Touch",touchAuto:"Auto",touchOn:"On",touchOff:"Off",dark:"Black",light:"White",close:"Back",hold:"Hold",next:"Next",score:"Score",lines:"Lines",stage:"Stage",best:"Best",time:"Time",holdReady:"Hold ready",holdUsed:"Hold used",left:"Left",right:"Right",rotate:"Turn",rotateLeft:"Left turn",rotateRight:"Right turn",warning:"WARNING",fever:"Fever",feverStart:"Combo + Blast Fever!",danger:"CRITICAL",keep:"Hold",drop:"Drop",soft:"Down",fire:"Fire",start:"Start",again:"Again",menu:"Menu",resume:"Resume",paused:"Paused",pauseHint:"P or Esc to resume.",teachBreakout:"Left and right move the paddle. Keep the ball up.",arcadeSpeed:"Speed \xD72",arcadeDouble:"Balls \xD72",arcadeTriple:"Balls \xD73",arcadeWide:"Wide paddle",arcadeNarrow:"Narrow paddle",teachBbtan:"Left and right aim. Space or Up fires.",teachPinball:"Left flips the left flipper. Right flips the right one.",curseReverse:"Reversed",curseBlind:"Blackout",curseRush:"Rush",curseNorotate:"No turn",curseNoHold:"No hold",garbageAdded:"Garbage rises",garbageStable:"Stack stable",topped:"Topped out",cleared:"40 lines",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"Pinball",rewardSand:"Sand",teachSand:"Twenty drops. A color spanning the full width clears.",tspin:"T-Spin",tspinSingle:"T-Spin Single",tspinDouble:"T-Spin Double",tspinTriple:"T-Spin Triple",tspinMini:"T-Spin Mini",tspinMiniSingle:"Mini Single",combo:"Combo",comboLines:"Bonus lines",sand:"Sand",normal:"Normal",hard:"Hard",custom:"Custom",pace:"Speed",boards:"Ranks",gameBridge:"Bridge",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"Pinball",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"Marathon flips the well as stages climb, and sometimes opens Breakout, BBTAN, or pinball. Sprint is a 40-line timer.",menuHint:"Pieces can bridge gaps. A yellow dot explodes only when cleared, and bombs chain during bonus modes.",keys:"Arrows move, Up / X rotate, Z reverse, Space drops, C holds, P pauses."},ja:{dangerEffect:"\u5371\u967A\u6642\u306E\u8868\u793A",screenShake:"\u63FA\u3089\u3059",noScreenShake:"\u63FA\u3089\u3055\u306A\u3044",crazyDifficulty:"\u96E3\u6613\u5EA6",title:"\u30D6\u30EA\u30C3\u30B8",back:"\u4F5C\u54C1\u4E00\u89A7\u3078",marathon:"\u30DE\u30E9\u30BD\u30F3",sprint:"40\u30E9\u30A4\u30F3",settings:"\u8A2D\u5B9A",donate:"\u5BC4\u4ED8",language:"\u8A00\u8A9E",volume:"\u97F3\u91CF",theme:"\u80CC\u666F",touch:"\u30BF\u30C3\u30C1",touchAuto:"\u81EA\u52D5",touchOn:"\u30AA\u30F3",touchOff:"\u30AA\u30D5",dark:"\u9ED2",light:"\u767D",close:"\u623B\u308B",hold:"\u30DB\u30FC\u30EB\u30C9",next:"\u6B21",score:"\u30B9\u30B3\u30A2",lines:"\u6D88\u53BB",stage:"\u30B9\u30C6\u30FC\u30B8",best:"\u30D9\u30B9\u30C8",time:"\u30BF\u30A4\u30E0",holdReady:"\u30DB\u30FC\u30EB\u30C9\u53EF",holdUsed:"\u843D\u4E0B\u307E\u3067\u4EA4\u63DB\u4E0D\u53EF",left:"\u5DE6",right:"\u53F3",rotate:"\u56DE\u8EE2",rotateLeft:"\u5DE6\u56DE\u8EE2",rotateRight:"\u53F3\u56DE\u8EE2",warning:"\u8B66\u6212",fever:"Fever",feverStart:"\u30B3\u30F3\u30DC\uFF0B\u7206\u7834 Fever\uFF01",danger:"\u5371\u967A",keep:"\u4FDD",drop:"\u843D",soft:"\u4E0B",fire:"\u5C04",start:"\u30B9\u30BF\u30FC\u30C8",again:"\u3082\u3046\u4E00\u5C40",menu:"\u30E1\u30CB\u30E5\u30FC",resume:"\u7D9A\u3051\u308B",paused:"\u4E00\u6642\u505C\u6B62",pauseHint:"P \u304B Esc \u3067\u518D\u958B\u3002",teachBreakout:"\u5DE6\u53F3\u3067\u30D1\u30C9\u30EB\u3092\u52D5\u304B\u3057\u3001\u30DC\u30FC\u30EB\u3092\u53D7\u3051\u308B\u3002",arcadeSpeed:"\u901F\u5EA6 \xD72",arcadeDouble:"\u30DC\u30FC\u30EB \xD72",arcadeTriple:"\u30DC\u30FC\u30EB \xD73",arcadeWide:"\u30D1\u30C9\u30EB\u62E1\u5927",arcadeNarrow:"\u30D1\u30C9\u30EB\u7E2E\u5C0F",teachBbtan:"\u5DE6\u53F3\u3067\u72D9\u3044\u3001\u30B9\u30DA\u30FC\u30B9\u304B\u4E0A\u3067\u6483\u3064\u3002",teachPinball:"\u5DE6\u3067\u5DE6\u30D5\u30EA\u30C3\u30D1\u30FC\u3001\u53F3\u3067\u53F3\u30D5\u30EA\u30C3\u30D1\u30FC\u3002",curseReverse:"\u5DE6\u53F3\u53CD\u8EE2",curseBlind:"\u6697\u8EE2",curseRush:"\u52A0\u901F",curseNorotate:"\u56DE\u8EE2\u4E0D\u53EF",curseNoHold:"\u30DB\u30FC\u30EB\u30C9\u4E0D\u53EF",garbageAdded:"\u304A\u3058\u3083\u307E\u8FFD\u52A0",garbageStable:"\u843D\u4E0B\u7336\u4E88",topped:"\u4E0A\u307E\u3067\u57CB\u307E\u3063\u305F",cleared:"40\u30E9\u30A4\u30F3\u9054\u6210",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"\u30D4\u30F3\u30DC\u30FC\u30EB",rewardSand:"\u30B5\u30F3\u30C9",teachSand:"20\u56DE\u843D\u3068\u3059\u3002\u540C\u3058\u8272\u304C\u6A2A\u3044\u3063\u3071\u3044\u306B\u7E4B\u304C\u308B\u3068\u305D\u306E\u8272\u304C\u6D88\u3048\u308B\u3002",tspin:"T\u30B9\u30D4\u30F3",tspinSingle:"T\u30B9\u30D4\u30F3\u30B7\u30F3\u30B0\u30EB",tspinDouble:"T\u30B9\u30D4\u30F3\u30C0\u30D6\u30EB",tspinTriple:"T\u30B9\u30D4\u30F3\u30C8\u30EA\u30D7\u30EB",tspinMini:"T\u30B9\u30D4\u30F3\u30DF\u30CB",tspinMiniSingle:"\u30DF\u30CB\u30B7\u30F3\u30B0\u30EB",combo:"\u30B3\u30F3\u30DC",comboLines:"\u30DC\u30FC\u30CA\u30B9\u30E9\u30A4\u30F3",sand:"\u30B5\u30F3\u30C9",normal:"\u30CE\u30FC\u30DE\u30EB",hard:"\u30CF\u30FC\u30C9",custom:"\u30AB\u30B9\u30BF\u30E0",pace:"\u901F\u5EA6",boards:"\u30E9\u30F3\u30AD\u30F3\u30B0",gameBridge:"\u30D6\u30EA\u30C3\u30B8",gameTetris:"\u30C6\u30C8\u30EA\u30B9",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"\u30D4\u30F3\u30DC\u30FC\u30EB",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"\u30DE\u30E9\u30BD\u30F3\u306F\u30B9\u30C6\u30FC\u30B8\u3054\u3068\u306B\u76E4\u9762\u304C\u53CD\u8EE2\u3057\u3001\u3068\u304D\u3069\u304D Breakout\u3001BBTAN\u3001\u30D4\u30F3\u30DC\u30FC\u30EB\u304C\u59CB\u307E\u308B\u300240\u30E9\u30A4\u30F3\u306F\u30BF\u30A4\u30E0\u30A2\u30BF\u30C3\u30AF\u3002",menuHint:"\u30D6\u30ED\u30C3\u30AF\u306F\u7A74\u306E\u4E0A\u306B\u6A4B\u3092\u67B6\u3051\u3089\u308C\u308B\u3002\u9EC4\u70B9\u306F\u6D88\u3057\u305F\u3068\u304D\u3060\u3051\u7206\u767A\u3057\u3001\u30DC\u30FC\u30CA\u30B9\u4E2D\u306F\u7206\u5F3E\u304C\u9023\u9396\u3059\u308B\u3002",keys:"\u77E2\u5370\u3067\u79FB\u52D5\u3001\u4E0A / X \u3067\u56DE\u8EE2\u3001Z \u3067\u9006\u56DE\u8EE2\u3001Space \u3067\u843D\u4E0B\u3001C \u3067\u30DB\u30FC\u30EB\u30C9\u3001P \u3067\u4E00\u6642\u505C\u6B62\u3002"},ko:{dangerEffect:"\uC704\uD5D8 \uC54C\uB9BC \uD6A8\uACFC",screenShake:"\uD754\uB4E4\uB9BC",noScreenShake:"\uD754\uB4E4\uB9BC \uC5C6\uC74C",crazyDifficulty:"\uB09C\uC774\uB3C4",title:"\uBE0C\uB9AC\uC9C0",back:"\uC791\uD488 \uBAA9\uB85D",marathon:"\uB9C8\uB77C\uD1A4",sprint:"40\uC904 \uC2A4\uD53C\uB4DC",settings:"\uC124\uC815",donate:"\uD6C4\uC6D0",language:"\uC5B8\uC5B4",volume:"\uC74C\uB7C9",theme:"\uBC30\uACBD",touch:"\uD130\uCE58",touchAuto:"\uC790\uB3D9",touchOn:"\uCF1C\uAE30",touchOff:"\uB044\uAE30",dark:"\uAC80\uC815",light:"\uD770\uC0C9",close:"\uB3CC\uC544\uAC00\uAE30",hold:"\uD640\uB4DC",next:"\uB2E4\uC74C",score:"\uC810\uC218",lines:"\uC9C0\uC6B4 \uC904",stage:"\uB2E8\uACC4",best:"\uCD5C\uACE0",time:"\uC2DC\uAC04",holdReady:"\uD640\uB4DC \uAC00\uB2A5",holdUsed:"\uCC29\uC9C0 \uC804\uC5D0\uB294 \uB2E4\uC2DC \uBC14\uAFC0 \uC218 \uC5C6\uC74C",left:"\uC67C",right:"\uC624\uB978",rotate:"\uD68C\uC804",rotateLeft:"\uC67C\uCABD \uD68C\uC804",rotateRight:"\uC624\uB978\uCABD \uD68C\uC804",warning:"\uC8FC\uC758",fever:"Fever",feverStart:"\uCF64\uBCF4\uFF0B\uD3ED\uBC1C Fever!",danger:"\uC704\uD5D8",keep:"\uD640\uB4DC",drop:"\uB099\uD558",soft:"\uC544\uB798",fire:"\uBC1C\uC0AC",start:"\uC2DC\uC791",again:"\uD55C \uD310 \uB354",menu:"\uBA54\uB274",resume:"\uACC4\uC18D",paused:"\uC77C\uC2DC\uC815\uC9C0",pauseHint:"P \uB610\uB294 Esc\uB85C \uACC4\uC18D\uD569\uB2C8\uB2E4.",teachBreakout:"\uC88C\uC6B0\uB85C \uD328\uB4E4\uC744 \uC6C0\uC9C1\uC5EC \uACF5\uC744 \uBC1B\uC544 \uC8FC\uC138\uC694.",arcadeSpeed:"\uC18D\uB3C4 \xD72",arcadeDouble:"\uACF5 \xD72",arcadeTriple:"\uACF5 \xD73",arcadeWide:"\uD328\uB4E4 \uD655\uB300",arcadeNarrow:"\uD328\uB4E4 \uCD95\uC18C",teachBbtan:"\uC88C\uC6B0\uB85C \uC870\uC900\uD558\uACE0, \uC2A4\uD398\uC774\uC2A4\uB098 \uC704\uCABD\uC73C\uB85C \uBC1C\uC0AC\uD569\uB2C8\uB2E4.",teachPinball:"\uC67C\uCABD\uC740 \uC67C\uCABD \uD50C\uB9AC\uD37C, \uC624\uB978\uCABD\uC740 \uC624\uB978\uCABD \uD50C\uB9AC\uD37C.",curseReverse:"\uC88C\uC6B0 \uBC18\uC804",curseBlind:"\uC554\uC804",curseRush:"\uAC00\uC18D",curseNorotate:"\uD68C\uC804 \uAE08\uC9C0",curseNoHold:"\uD640\uB4DC \uAE08\uC9C0",garbageAdded:"\uC4F0\uB808\uAE30 \uC0C1\uC2B9",garbageStable:"\uB099\uD558 \uC720\uC608",topped:"\uAF2D\uB300\uAE30\uAE4C\uC9C0 \uCC3C\uC2B5\uB2C8\uB2E4",cleared:"40\uC904 \uC644\uB8CC",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"\uD540\uBCFC",rewardSand:"\uC0CC\uB4DC",teachSand:"20\uBC88 \uB5A8\uC5B4\uC9C4\uB2E4. \uAC19\uC740 \uC0C9\uC774 \uAC00\uB85C \uC804\uCCB4\uB97C \uC787\uBA74 \uADF8 \uC0C9\uC774 \uC0AC\uB77C\uC9C4\uB2E4.",tspin:"T\uC2A4\uD540",tspinSingle:"T\uC2A4\uD540 \uC2F1\uAE00",tspinDouble:"T\uC2A4\uD540 \uB354\uBE14",tspinTriple:"T\uC2A4\uD540 \uD2B8\uB9AC\uD50C",tspinMini:"T\uC2A4\uD540 \uBBF8\uB2C8",tspinMiniSingle:"\uBBF8\uB2C8 \uC2F1\uAE00",combo:"\uCF64\uBCF4",comboLines:"\uBCF4\uB108\uC2A4 \uC904",sand:"\uC0CC\uB4DC",normal:"\uB178\uBA40",hard:"\uD558\uB4DC",custom:"\uCEE4\uC2A4\uD140",pace:"\uC18D\uB3C4",boards:"\uC21C\uC704",gameBridge:"\uBE0C\uB9AC\uC9C0",gameTetris:"\uD14C\uD2B8\uB9AC\uC2A4",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"\uD540\uBCFC",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"\uB9C8\uB77C\uD1A4\uC740 \uB2E8\uACC4\uB9C8\uB2E4 \uD310\uC774 \uB4A4\uC9D1\uD788\uACE0, \uAC00\uB054 Breakout, BBTAN, \uD540\uBCFC\uC774 \uC5F4\uB9BD\uB2C8\uB2E4. 40\uC904\uC740 \uC2DC\uAC04 \uAE30\uB85D\uC785\uB2C8\uB2E4.",menuHint:"\uBE14\uB85D\uC740 \uAD6C\uBA4D \uC704\uC5D0 \uAC78\uCCD0 \uB193\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB178\uB780 \uC810\uC740 \uC9C0\uC6CC\uC57C \uD130\uC9C0\uACE0, \uBCF4\uB108\uC2A4\uC5D0\uC11C\uB294 \uD3ED\uD0C4\uC774 \uC5F0\uC1C4\uD569\uB2C8\uB2E4.",keys:"\uD654\uC0B4\uD45C \uC774\uB3D9, \uC704 / X \uD68C\uC804, Z \uC5ED\uD68C\uC804, Space \uB099\uD558, C \uD640\uB4DC, P \uC77C\uC2DC\uC815\uC9C0."},pt:{dangerEffect:"Efeito de perigo",screenShake:"Vibra\xE7\xE3o",noScreenShake:"Sem vibra\xE7\xE3o",crazyDifficulty:"Dificuldade",title:"Ponte",back:"Voltar aos trabalhos",marathon:"Maratona",sprint:"40 linhas",settings:"Defini\xE7\xF5es",donate:"Doar",language:"Idioma",volume:"Volume",theme:"Fundo",touch:"Toque",touchAuto:"Auto",touchOn:"Ligado",touchOff:"Desligado",dark:"Preto",light:"Branco",close:"Voltar",hold:"Reserva",next:"Seguinte",score:"Pontos",lines:"Linhas",stage:"Fase",best:"Recorde",time:"Tempo",holdReady:"Pode reservar",holdUsed:"J\xE1 reservada",left:"Esq.",right:"Dir.",rotate:"Girar",rotateLeft:"Girar esquerda",rotateRight:"Girar direita",warning:"ATEN\xC7\xC3O",fever:"Fever",feverStart:"Fever de combo e explos\xE3o!",danger:"PERIGO",keep:"Reter",drop:"Cair",soft:"Descer",fire:"Atirar",start:"Come\xE7ar",again:"Outra vez",menu:"Menu",resume:"Continuar",paused:"Pausa",pauseHint:"P ou Esc para continuar.",teachBreakout:"Esquerda e direita movem a raquete. Segura a bola.",arcadeSpeed:"Velocidade \xD72",arcadeDouble:"Bolas \xD72",arcadeTriple:"Bolas \xD73",arcadeWide:"Raquete maior",arcadeNarrow:"Raquete menor",teachBbtan:"Esquerda e direita miram. Espa\xE7o ou cima dispara.",teachPinball:"Esquerda sobe o flipper esquerdo. Direita sobe o direito.",curseReverse:"Invertido",curseBlind:"Apag\xE3o",curseRush:"Pressa",curseNorotate:"Sem girar",curseNoHold:"Sem reservar",garbageAdded:"Lixo sobe",garbageStable:"Pilha est\xE1vel",topped:"Chegou ao topo",cleared:"40 linhas",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"Pinball",rewardSand:"Areia",teachSand:"Vinte quedas. Uma cor ligada na largura toda some.",tspin:"T-Spin",tspinSingle:"T-Spin Single",tspinDouble:"T-Spin Double",tspinTriple:"T-Spin Triple",tspinMini:"T-Spin Mini",tspinMiniSingle:"Mini Single",combo:"Combo",comboLines:"Linhas extras",sand:"Areia",normal:"Normal",hard:"Dif\xEDcil",custom:"Personalizado",pace:"Velocidade",boards:"Ranking",gameBridge:"Bridge",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"Pinball",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"A maratona vira o po\xE7o em cada fase e \xE0s vezes abre Breakout, BBTAN ou pinball. As 40 linhas s\xE3o contra o tempo.",menuHint:"As pe\xE7as podem fazer ponte sobre buracos. O ponto amarelo s\xF3 explode quando \xE9 apagado, e no b\xF3nus as bombas encadeiam.",keys:"Setas movem, Cima / X roda, Z inverte, Espa\xE7o larga, C reserva, P pausa."},es:{dangerEffect:"Efecto de peligro",screenShake:"Temblor",noScreenShake:"Sin temblor",crazyDifficulty:"Dificultad",title:"Puente",back:"Volver a los trabajos",marathon:"Marat\xF3n",sprint:"40 l\xEDneas",settings:"Ajustes",donate:"Donar",language:"Idioma",volume:"Volumen",theme:"Fondo",touch:"T\xE1ctil",touchAuto:"Auto",touchOn:"S\xED",touchOff:"No",dark:"Negro",light:"Blanco",close:"Volver",hold:"Reserva",next:"Siguiente",score:"Puntos",lines:"L\xEDneas",stage:"Fase",best:"Mejor",time:"Tiempo",holdReady:"Puedes reservar",holdUsed:"Ya reservada",left:"Izq.",right:"Der.",rotate:"Girar",rotateLeft:"Giro izquierdo",rotateRight:"Giro derecho",warning:"ALERTA",fever:"Fever",feverStart:"\xA1Fever de combo y explosi\xF3n!",danger:"PELIGRO",keep:"Guardar",drop:"Caer",soft:"Bajar",fire:"Disparar",start:"Empezar",again:"Otra vez",menu:"Men\xFA",resume:"Seguir",paused:"Pausa",pauseHint:"P o Esc para seguir.",teachBreakout:"Izquierda y derecha mueven la pala. No dejes caer la bola.",arcadeSpeed:"Velocidad \xD72",arcadeDouble:"Bolas \xD72",arcadeTriple:"Bolas \xD73",arcadeWide:"Pala grande",arcadeNarrow:"Pala peque\xF1a",teachBbtan:"Izquierda y derecha apuntan. Espacio o arriba dispara.",teachPinball:"Izquierda sube la aleta izquierda. Derecha sube la derecha.",curseReverse:"Invertido",curseBlind:"Oscuro",curseRush:"Prisa",curseNorotate:"Sin girar",curseNoHold:"Sin reserva",garbageAdded:"Sube basura",garbageStable:"Pila estable",topped:"Lleg\xF3 arriba",cleared:"40 l\xEDneas",rewardBreakout:"Breakout",rewardBbtan:"BBTAN",rewardPinball:"Pinball",rewardSand:"Arena",teachSand:"Veinte ca\xEDdas. Un color unido en todo el ancho desaparece.",tspin:"T-Spin",tspinSingle:"T-Spin Single",tspinDouble:"T-Spin Double",tspinTriple:"T-Spin Triple",tspinMini:"T-Spin Mini",tspinMiniSingle:"Mini Single",combo:"Combo",comboLines:"L\xEDneas extra",sand:"Arena",normal:"Normal",hard:"Dif\xEDcil",custom:"Personalizado",pace:"Velocidad",boards:"R\xE9cords",gameBridge:"Bridge",gameTetris:"Tetris",gameBreakout:"Breakout",gameBbtan:"BBTAN",gamePinball:"Pinball",gameSand:"Sandtrix",gameTen:"1010",gameTwenty:"2048",lede:"El marat\xF3n gira el pozo en cada fase y a veces abre Breakout, BBTAN o pinball. Las 40 l\xEDneas son contra el reloj.",menuHint:"Las piezas pueden tender un puente sobre huecos. El punto amarillo explota solo al borrarse, y en los bonus las bombas encadenan.",keys:"Flechas mueven, Arriba / X gira, Z invierte, Espacio suelta, C reserva, P pausa."}},Sd={crazyMode_vault:"\u91D1\u5EAB\u8DD1\u8DF3",crazyVaultStart:"60 \u79D2\uFF1A\u8DD1\u8DF3\u64BF\u5E63\uFF0C\u5E36\u56DE\u9280\u884C\u5B58\u5165 360",crazyVaultCleared:"\u91D1\u5EAB\u7834\u89E3\uFF01Boss \u89E3\u9664\u9396\u8840",crazyVaultFailed:"\u91D1\u5EAB\u5931\u6557 \xB7 \u6263 80 HP",crazyVaultMove:"\u79FB\u52D5"},Md={envyIntro:["\u7ABA\u8996\u4E4B\u5B50","The Watching Child"],envyLore:["\u5E7D\u6797\u88E1\u7684\u5B69\u5B50\uFF0C\u7ABA\u8996\u8457\u4E0D\u5C6C\u65BC\u81EA\u5DF1\u7684\u5E78\u798F\u3002","A child in the dark woods watches happiness that belongs to others."],pridePuzzleFailed:["\u5DF4\u5225\u5854\u5931\u6557","Tower challenge failed"],prideRedFailed:["\u7D05\u93E1\u6311\u6230\u5931\u6557","Red mirror challenge failed"],prideShardHit:["\u788E\u93E1\u547D\u4E2D","Mirror shard hit"],"crazyMode_pride-escape":["\u9003\u96E2\u50B2\u6162\u4E4B\u5854","Escape the Tower of Pride"],"crazyHint_pride-escape":["\u5DE6\u53F3\u627E\u843D\u8173\u9EDE\uFF0C\u7A7A\u767D\u9375\uFF0F\u4E0B\u9375\u4E0B\u964D\uFF0C\u9003\u5230 100 \u5C64","Move left/right to land safely; Space / down drops; reach floor 100"],"crazyHint_pride-doodle":["\u81EA\u52D5\u5F48\u8DF3\uFF1B\u5DE6\u53F3\u79FB\u52D5\uFF0C\u7A7A\u767D\u9375 \u5C04\u64CA\u5E7B\u5F71","Auto-jump; move left/right and shoot phantoms with Space"],"crazyHint_pride-tower":["\u5C0D\u6E96\u9802\u5C64\u518D\u653E\u5C64\uFF1B\u758A\u6EFF\u76EE\u6A19\u624D\u904E\u95DC","Align with the top floor, then drop; reach the target height"],"crazyHint_pride-shard-puzzle":["\u65CB\u8F49\u788E\u7247\u62FC\u56DE\u93E1\u5B50\uFF1BC\uFF0FShift \u63D0\u793A\u6263 1 \u79D2","Rotate the fragments to restore the mirror; C / Shift hints cost 1 second"],"crazyHint_pride-truth-trial":["\u8FFD\u8E64\u771F\u93E1\uFF1BC\uFF0FShift \u91CD\u770B\u6263 2 \u79D2","Track the real mirror; C / Shift replays cost 2 seconds"],"crazyHint_pride-mirror-maze":["\u65CB\u93E1\u5C0E\u5149\uFF0C\u6536\u96C6 3 \u7C92\u6C34\u6676\uFF1BC\uFF0FShift \u9A57\u8B49","Turn mirrors to collect 3 crystals; C / Shift checks the route"],"crazyHint_pride-kaleidoscope":["\u63C0\u76F8\u540C\u91D1\u9EDE\u5716\u6848\uFF0C\u518D\u6309 \u7A7A\u767D\u9375 \u53CD\u653B","Find the matching gold dots, then press Space to counter"],prideRedUnlocked:["\u7D05\u93E1\u9396\u8840\u89E3\u9664\uFF01","The red mirror's health lock is broken!"],"crazyHint_pride-shard-storm":["\u4E09\u8ECC\u5230\u91D1\u7DDA\u6642\u6309 \u5DE6\uFF0F\u7A7A\u767D\u9375\uFF0F\u53F3\uFF1Bbest\uFF0Fgood \u53CD\u653B\uFF0Cdamage \u6263\u8840","Three lanes: Left / Space / Right; best / good reflect, damage hurts"],"crazyHint_pride-nested":["\u9023\u63A5\u5169\u500B\u5C01\u5370\u5230\u51FA\u53E3\uFF1BC\uFF0FShift \u9A57\u8B49\uFF0C\u7A7A\u767D\u9375 \u53CD\u653B","Connect both seals to the exit; C / Shift checks, Space counters"],"crazyHint_pride-gaze-up":["\u4E09\u93E1\u9396\u5B9A\u5F8C\u96E2\u958B\u5C04\u7DDA\uFF1B\u93E1\u4EAE\u6642 \u7A7A\u767D\u9375 \u53CD\u653B","Dodge the locked mirror beams; Space counters glowing mirrors"],"crazyHint_pride-reflect-up":["\u7A7A\u767D\u9375 \u5C04\u6307\u5B9A\u93E1\uFF1B\u79FB\u52D5\u907F\u958B\u53CD\u5C04\u5F48","Space shoots the marked mirror; move to dodge reflections"],"crazyHint_pride-crown-up":["\u907F\u958B\u6CE2\u7D0B\u6216 \u7A7A\u767D\u9375 \u8DF3\uFF1B\u93E1\u4EAE\u6642\u53EF\u53CD\u653B","Dodge shockwaves or jump with Space; counter glowing mirrors"],"crazyHint_pride-red-survival":["\u81EA\u52D5\u5C04\u64CA\u3001\u62FE\u9053\u5177\uFF1B\u7A7A\u767D\u9375 \u96C6\u706B\uFF0CC\uFF0FShift \u7CBE\u6E96","Auto-fire and collect power-ups; Space bursts, C / Shift precision"],prideMirrorName:["\u93E1\u4E4B\u5316\u8EAB","Mirror Incarnation"],sinPride:["\u50B2\u6162","Pride"],prideIntro:["\u93E1\u5BAE\u4E4B\u738B","King of the mirror palace"],prideLore:["\u93E1\u5BAE\u4E4B\u738B\u4FEF\u8996\u4E00\u5207\u3002\u6311\u6230\u4ED6\u7684\u50B2\u6162\u738B\u6B0A\u3002","The king looks down upon all. Challenge his arrogant rule."],prideDefeated:["\u50B2\u6162\u64CA\u7834\uFF01","Pride defeated!"],prideCleared:["\u50B2\u6162\u5DF2\u901A\u95DC","Pride cleared"],prideRetry:["\u93E1\u4E2D\u5C0D\u6C7A\u91CD\u8A66 \xB7 Boss \u9396\u8840","Mirror duel retry \xB7 Boss locked"],prideDuelFailed:["\u93E1\u4E2D\u5C0D\u6C7A\u5931\u6557 \xB7 \u6263 80 HP","Mirror duel failed \xB7 80 HP penalty"],prideWrongCrown:["\u5047\u7687\u51A0\uFF01","False crown!"],prideAttackHit:["\u738B\u6B0A\u653B\u64CA\uFF01","Royal strike!"],"crazyMode_pride-mirror-match":["\u93E1\u50CF\u914D\u5C0D","Mirror match"],"crazyMode_pride-crown-choice":["\u52A0\u5195\u6289\u64C7","Crown choice"],"crazyMode_pride-lianliankan":["\u9023\u9023\u770B","Tile connect"],"crazyMode_pride-gaze":["\u738B\u4E4B\u8511\u8996","Royal contempt"],"crazyMode_pride-mirror":["\u93E1\u50CF\u53CD\u5C04","Mirror reflection"],"crazyMode_pride-crown-shock":["\u52A0\u5195\u885D\u64CA","Coronation shock"],"crazyMode_pride-mirror-duel":["\u93E1\u4E2D\u5C0D\u6C7A","Mirror duel"],"crazyHint_pride-mirror-match":["\u5DE6\u53F3\u5404\u63C0\u4E00\u5F35\uFF0C\u914D\u5C0D\u76F8\u540C\u5716\u6848","Match a card from each side"],"crazyHint_pride-crown-choice":["\u6BD4\u8F03\u539F\u77F3\uFF0C\u63C0\u5BF6\u77F3\u95CA\u5EA6\u76F8\u540C\u7684\u7687\u51A0","Choose the crown whose gem matches the reference"],"crazyHint_pride-lianliankan":["\u9023\u63A5\u76F8\u540C\u5716\u6848\uFF0C\u8DEF\u5F91\u6700\u591A\u5169\u5F4E","Connect matching tiles with at most two turns"],"crazyHint_pride-gaze":["\u907F\u958B\u96D9\u773C\u6383\u5C04\uFF1B\u65B9\u5411\u9375\uFF0F\u62D6\u66F3\u79FB\u52D5","Move with arrows or drag to dodge the gaze"],"crazyHint_pride-mirror":["\u7A7A\u767D\u9375 \u5C04\u64CA\u6307\u5B9A\u93E1\uFF1B\u907F\u958B\u53CD\u5C04\u5F48\u5E55","SPACE shoots the marked mirror; dodge reflected bullets"],"crazyHint_pride-crown-shock":["\u7A7A\u767D\u9375 \u8DF3\u8E8D\uFF1B\u907F\u958B\u843D\u9EDE\u53CA\u885D\u64CA\u6CE2","SPACE jumps; avoid crown landings and shockwaves"],"crazyHint_pride-mirror-duel":["\u8E29\u4EAE\u93E1\u5EA7 \u2192 \u96E2\u958B \u2192 \u7A7A\u767D\u9375\u5C01\u4F4F\u5EF6\u9072\u93E1\u50CF","Charge a seal, leave, then press Space to catch your delayed mirror"]},bd={controlsGuide:["\u63A7\u5236\u6309\u9215\u8AAA\u660E","\u63A7\u5236\u6309\u94AE\u8BF4\u660E","Controls","\u64CD\u4F5C\u8AAC\u660E","\uC870\uC791 \uC548\uB0B4","Controlos","Controles"],controlsMove:["\u79FB\u52D5\uFF0F\u9078\u64C7","\u79FB\u52A8\uFF0F\u9009\u62E9","Move / select","\u79FB\u52D5\uFF0F\u9078\u629E","\uC774\uB3D9 / \uC120\uD0DD","Mover / selecionar","Mover / seleccionar"],controlsUp:["\u65CB\u8F49\uFF0F\u5411\u4E0A","\u65CB\u8F6C\uFF0F\u5411\u4E0A","Rotate / up","\u56DE\u8EE2\uFF0F\u4E0A","\uD68C\uC804 / \uC704","Rodar / cima","Girar / arriba"],controlsRotate:["\u65B9\u584A\u53F3\u65CB\uFF0F\u5DE6\u65CB","\u65B9\u5757\u53F3\u65CB\uFF0F\u5DE6\u65CB","Blocks: rotate right / left","\u30D6\u30ED\u30C3\u30AF\uFF1A\u53F3\u56DE\u8EE2\uFF0F\u5DE6\u56DE\u8EE2","\uBE14\uB85D: \uC624\uB978\uCABD / \uC67C\uCABD \uD68C\uC804","Blocos: rodar \xE0 direita / esquerda","Bloques: girar a la derecha / izquierda"],controlsDown:["\u7DE9\u964D\uFF0F\u5411\u4E0B","\u7F13\u964D\uFF0F\u5411\u4E0B","Soft drop / down","\u30BD\u30D5\u30C8\u30C9\u30ED\u30C3\u30D7\uFF0F\u4E0B","\uC18C\uD504\uD2B8 \uB4DC\uB86D / \uC544\uB798","Descida suave / baixo","Ca\xEDda suave / abajo"],controlsMain:["\u4E0B\u843D\uFF0F\u4E3B\u52D5\u4F5C","\u4E0B\u843D\uFF0F\u4E3B\u52A8\u4F5C","Drop / main action","\u843D\u4E0B\uFF0F\u4E3B\u64CD\u4F5C","\uB099\uD558 / \uC8FC \uB3D9\uC791","Largar / a\xE7\xE3o principal","Caer / acci\xF3n principal"],controlsAlt:["\u4FDD\u7559\uFF0F\u526F\u52D5\u4F5C","\u4FDD\u7559\uFF0F\u526F\u52A8\u4F5C","Hold / secondary action","\u30DB\u30FC\u30EB\u30C9\uFF0F\u526F\u64CD\u4F5C","\uD640\uB4DC / \uBCF4\uC870 \uB3D9\uC791","Reservar / a\xE7\xE3o secund\xE1ria","Reservar / acci\xF3n secundaria"],controlsOpenMenu:["\u958B\u555F\u83DC\u55AE","\u6253\u5F00\u83DC\u5355","Open menu","\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F","\uBA54\uB274 \uC5F4\uAE30","Abrir menu","Abrir men\xFA"],controlsTouch:["\u89F8\u63A7\u6309\u9215\u529F\u80FD\u76F8\u540C\uFF1B\u5C0F\u904A\u6232\u4EE5\u6309\u9215\u7576\u524D\u540D\u7A31\u70BA\u6E96\u3002","\u89E6\u63A7\u6309\u94AE\u529F\u80FD\u76F8\u540C\uFF1B\u5C0F\u6E38\u620F\u4EE5\u6309\u94AE\u5F53\u524D\u540D\u79F0\u4E3A\u51C6\u3002","Touch buttons have the same functions; follow the current labels in minigames.","\u30BF\u30C3\u30C1\u30DC\u30BF\u30F3\u3082\u540C\u3058\u6A5F\u80FD\u3002\u30DF\u30CB\u30B2\u30FC\u30E0\u3067\u306F\u73FE\u5728\u306E\u30DC\u30BF\u30F3\u8868\u793A\u306B\u5F93\u3063\u3066\u304F\u3060\u3055\u3044\u3002","\uD130\uCE58 \uBC84\uD2BC\uB3C4 \uAC19\uC740 \uAE30\uB2A5\uC785\uB2C8\uB2E4. \uBBF8\uB2C8\uAC8C\uC784\uC5D0\uC11C\uB294 \uD604\uC7AC \uBC84\uD2BC \uD45C\uC2DC\uB97C \uB530\uB974\uC138\uC694.","Os bot\xF5es no ecr\xE3 t\xEAm as mesmas fun\xE7\xF5es; nos minijogos, siga as etiquetas atuais.","Los botones t\xE1ctiles tienen las mismas funciones; en minijuegos, sigue las etiquetas actuales."]};function Td(n,e){return bd[e]?bd[e][Math.max(0,Vi.indexOf(n))]:Md[e]?Md[e][n?.startsWith("zh")?0:1]:Sd[e]?Sd[e]:(Oc[n]||Oc["zh-Hant"])[e]??Oc.en[e]??e}var wd=["\u7E41\u9AD4\u4E2D\u6587","\u7B80\u4F53\u4E2D\u6587","English","\u65E5\u672C\u8A9E","\uD55C\uAD6D\uC5B4","Portugu\xEAs","Espa\xF1ol"],By={cleared:["\u5DF2\u901A\u95DC","\u5DF2\u901A\u5173","Cleared","\u30AF\u30EA\u30A2\u6E08\u307F","\uD074\uB9AC\uC5B4","Conclu\xEDdo","Completado"],campaignSettings:["\u8A2D\u5B9A","\u8BBE\u7F6E","Settings","\u8A2D\u5B9A","\uC124\uC815","Defini\xE7\xF5es","Ajustes"],campaignNote:["\u6CBF\u7528\u4E3B\u904A\u6232\u8A2D\u5B9A\uFF0C\u4F9D\u5E8F\u6311\u6230\u4E03\u5927\u7F6A\u3002","\u6CBF\u7528\u4E3B\u6E38\u620F\u8BBE\u7F6E\uFF0C\u4F9D\u5E8F\u6311\u6218\u4E03\u5927\u7F6A\u3002","Use your game settings and challenge the sins in order.","\u672C\u7DE8\u306E\u8A2D\u5B9A\u3092\u4F7F\u3044\u3001\u4E03\u3064\u306E\u5927\u7F6A\u306B\u9806\u306B\u6311\u307F\u307E\u3059\u3002","\uAC8C\uC784 \uC124\uC815\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB300\uC8C4\uC5D0 \uCC28\uB840\uB85C \uB3C4\uC804\uD558\uC138\uC694.","Use as defini\xE7\xF5es do jogo e desafie os pecados por ordem.","Usa los ajustes del juego y desaf\xEDa a los pecados en orden."],mainMenu:["\u8FD4\u56DE\u4E3B\u9078\u55AE","\u8FD4\u56DE\u4E3B\u83DC\u5355","Main menu","\u30E1\u30CB\u30E5\u30FC\u3078","\uBA54\uC778 \uBA54\uB274","Menu principal","Men\xFA principal"],ranks:["\u6392\u884C\u699C","\u6392\u884C\u699C","Rankings","\u30E9\u30F3\u30AD\u30F3\u30B0","\uC21C\uC704","Classifica\xE7\xF5es","Clasificaciones"],quality:["\u6E32\u67D3\u54C1\u8CEA","\u6E32\u67D3\u8D28\u91CF","Rendering quality","\u63CF\u753B\u54C1\u8CEA","\uB80C\uB354\uB9C1 \uD488\uC9C8","Qualidade gr\xE1fica","Calidad gr\xE1fica"],qualityAuto:["\u81EA\u52D5","\u81EA\u52A8","Auto","\u81EA\u52D5","\uC790\uB3D9","Autom\xE1tico","Autom\xE1tico"],qualityStandard:["\u6A19\u6E96","\u6807\u51C6","Standard","\u6A19\u6E96","\uD45C\uC900","Normal","Est\xE1ndar"],qualityLight:["\u8F15\u91CF","\u8F7B\u91CF","Lightweight","\u8EFD\u91CF","\uACBD\uB7C9","Leve","Ligera"],crazyContinue:["\u7E7C\u7E8C","\u7EE7\u7EED","Continue","\u7D9A\u3051\u308B","\uACC4\uC18D","Continuar","Continuar"],crazySevenSins:["\u4E03\u5927\u7F6A","\u4E03\u5927\u7F6A","Seven Deadly Sins","\u4E03\u3064\u306E\u5927\u7F6A","\uC77C\uACF1 \uAC00\uC9C0 \uB300\uC8C4","Sete Pecados Capitais","Siete Pecados Capitales"],crazyDifficulty:["\u96E3\u5EA6","\u96BE\u5EA6","Difficulty","\u96E3\u6613\u5EA6","\uB09C\uC774\uB3C4","Dificuldade","Dificultad"],normal:["Normal","Normal","Normal","Normal","Normal","Normal","Normal"],hard:["Hard","Hard","Hard","Hard","Hard","Hard","Hard"],close:["\u8FD4\u56DE","\u8FD4\u56DE","Back","\u623B\u308B","\uB3CC\uC544\uAC00\uAE30","Voltar","Volver"],crazyLocked:["\u5C01\u5370","\u5C01\u5370","Sealed","\u5C01\u5370","\uBD09\uC778","Selado","Sellado"],crazyGreed:["\u8CAA\u5A6A","\u8D2A\u5A6A","Greed","\u5F37\u6B32","\uD0D0\uC695","Gan\xE2ncia","Codicia"],sinPride:["\u50B2\u6162","\u50B2\u6162","Pride","\u50B2\u6162","\uC624\uB9CC","Orgulho","Soberbia"],sinEnvy:["\u5AC9\u5992","\u5AC9\u5992","Envy","\u5AC9\u59AC","\uC9C8\uD22C","Inveja","Envidia"],sinLust:["\u8272\u617E","\u8272\u6B32","Lust","\u8272\u6B32","\uC0C9\uC695","Lux\xFAria","Lujuria"],sinGluttony:["\u66B4\u98DF","\u66B4\u98DF","Gluttony","\u66B4\u98DF","\uD3ED\uC2DD","Gula","Gula"],sinSloth:["\u6020\u60F0","\u6020\u60F0","Sloth","\u6020\u60F0","\uB098\uD0DC","Pregui\xE7a","Pereza"],sinWrath:["\u61A4\u6012","\u6124\u6012","Wrath","\u61A4\u6012","\uBD84\uB178","Ira","Ira"],crazyDealer:["\u72C2\u5BB4\u838A\u5BB6","\u72C2\u5BB4\u5E84\u5BB6","THE MAD DEALER","\u72C2\u5BB4\u306E\u30C7\u30A3\u30FC\u30E9\u30FC","\uAD11\uB780\uC758 \uB51C\uB7EC","O CROUPIER LOUCO","EL CRUPIER LOCO"],crazyGreedLore:["\u838A\u5BB6\u60F3\u8981\u4E00\u5207\u3002\u6311\u6230\u8CAA\u5A6A\u7684\u8CED\u5C40\u3002","\u5E84\u5BB6\u60F3\u8981\u4E00\u5207\u3002\u6311\u6218\u8D2A\u5A6A\u7684\u8D4C\u5C40\u3002","The house wants everything. Challenge the dealer's greed.","\u80F4\u5143\u306F\u3059\u3079\u3066\u3092\u6B32\u3057\u304C\u308B\u3002\u5F37\u6B32\u306A\u8CED\u3051\u306B\u6311\u3081\u3002","\uB51C\uB7EC\uB294 \uBAA8\uB4E0 \uAC83\uC744 \uC6D0\uD569\uB2C8\uB2E4. \uD0D0\uC695\uC758 \uB3C4\uBC15\uC5D0 \uB3C4\uC804\uD558\uC138\uC694.","A casa quer tudo. Desafie a gan\xE2ncia do croupier.","La banca lo quiere todo. Desaf\xEDa la codicia del crupier."],demo:["\u7368\u7ACB\u8A66\u73A9","\u72EC\u7ACB\u8BD5\u73A9","PREVIEW","\u4F53\u9A13\u7248","\uCCB4\uD5D8\uD310","DEMO","DEMO"],insert:["\u63D2\u5165\u5361\u5E36 \u2197","\u63D2\u5165\u5361\u5E26 \u2197","Insert cartridge \u2197","\u30AB\u30BB\u30C3\u30C8\u3092\u633F\u3059 \u2197","\uCE74\uD2B8\uB9AC\uC9C0 \uC0BD\uC785 \u2197","Inserir cartucho \u2197","Insertar cartucho \u2197"],rotate:["\u65CB\u8F49\u5361\u5E36","\u65CB\u8F6C\u5361\u5E26","Rotate cartridge","\u30AB\u30BB\u30C3\u30C8\u56DE\u8EE2","\uCE74\uD2B8\uB9AC\uC9C0 \uD68C\uC804","Rodar cartucho","Girar cartucho"],reset:["\u64FA\u6B63","\u6446\u6B63","Reset","\u30EA\u30BB\u30C3\u30C8","\uCD08\uAE30\uD654","Repor","Reiniciar"],eject:["\u8FD4\u56DE\u9078\u95DC","\u8FD4\u56DE\u9009\u5173","Back to selection","\u9078\u629E\u306B\u623B\u308B","\uC120\uD0DD\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30","Voltar \xE0 sele\xE7\xE3o","Volver a selecci\xF3n"],zoomIn:["\u653E\u5927","\u653E\u5927","Zoom in","\u62E1\u5927","\uD655\uB300","Ampliar","Acercar"],zoomOut:["\u7E2E\u5C0F","\u7F29\u5C0F","Zoom out","\u7E2E\u5C0F","\uCD95\uC18C","Reduzir","Alejar"],settings:["\u8A66\u73A9\u8A2D\u5B9A","\u8BD5\u73A9\u8BBE\u7F6E","Preview settings","\u4F53\u9A13\u7248\u8A2D\u5B9A","\uCCB4\uD5D8\uD310 \uC124\uC815","Op\xE7\xF5es da demo","Opciones de demo"],reduced:["\u6E1B\u5C11\u52D5\u614B\u6548\u679C","\u51CF\u5C11\u52A8\u6001\u6548\u679C","Reduce motion","\u52D5\u304D\u3092\u6E1B\u3089\u3059","\uB3D9\uC791 \uC904\uC774\uAE30","Reduzir movimento","Reducir movimiento"],sound:["\u63D2\u5361\uFF0F\u958B\u6A5F\u97F3\u6548","\u63D2\u5361\uFF0F\u5F00\u673A\u97F3\u6548","Insert / boot sounds","\u633F\u5165\u30FB\u8D77\u52D5\u97F3","\uC0BD\uC785 / \uC2DC\uC791 \uC18C\uB9AC","Som de inser\xE7\xE3o / arranque","Sonido de inserci\xF3n / inicio"],theme:["\u5916\u89C0","\u5916\u89C2","Appearance","\u5916\u89B3","\uC678\uAD00","Aspeto","Aspecto"],light:["\u767D\u8272\u6A21\u5F0F","\u767D\u8272\u6A21\u5F0F","Light mode","\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9","\uB77C\uC774\uD2B8 \uBAA8\uB4DC","Modo claro","Modo claro"],dark:["\u9ED1\u8272\u6A21\u5F0F","\u9ED1\u8272\u6A21\u5F0F","Dark mode","\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9","\uB2E4\uD06C \uBAA8\uB4DC","Modo escuro","Modo oscuro"],note:["\u7368\u7ACB\u8A66\u73A9\uFF0C\u4E0D\u5BEB\u6B63\u5F0F\u9032\u5EA6\u3002\u5916\u89C0\u53CA\u8A9E\u8A00\u6CBF\u7528\u4E3B\u904A\u6232\uFF1B\u6B64\u8655\u5207\u63DB\u53EA\u5F71\u97FF\u793A\u7BC4\u3002","\u72EC\u7ACB\u8BD5\u73A9\uFF0C\u4E0D\u5199\u6B63\u5F0F\u8FDB\u5EA6\u3002\u5916\u89C2\u53CA\u8BED\u8A00\u6CBF\u7528\u4E3B\u6E38\u620F\uFF1B\u6B64\u5904\u5207\u6362\u53EA\u5F71\u54CD\u793A\u8303\u3002","Independent preview; no saved progress. Theme and language follow the main game; demo changes stay here.","\u4F53\u9A13\u7248\u3002\u9032\u884C\u306F\u4FDD\u5B58\u3055\u308C\u307E\u305B\u3093\u3002\u5916\u89B3\u3068\u8A00\u8A9E\u306F\u672C\u7DE8\u3092\u5F15\u304D\u7D99\u304E\u3001\u5909\u66F4\u306F\u4F53\u9A13\u7248\u306E\u307F\u3067\u3059\u3002","\uB3C5\uB9BD \uCCB4\uD5D8\uD310\uC73C\uB85C \uC9C4\uD589\uC744 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uBCF8 \uAC8C\uC784\uC758 \uD14C\uB9C8\uC640 \uC5B8\uC5B4\uB97C \uB530\uB974\uBA70 \uBCC0\uACBD\uC740 \uB370\uBAA8\uC5D0\uB9CC \uC801\uC6A9\uB429\uB2C8\uB2E4.","Demo independente sem guardar progresso. Tema e idioma seguem o jogo; altera\xE7\xF5es ficam nesta demo.","Demo independiente sin guardar progreso. Tema e idioma siguen el juego; los cambios quedan en esta demo."],help:["\u62D6\u52D5\u5361\u5E36\u81F3\u6A5F\u9802\u653E\u624B\u3002\u53F3\u9375\uFF0FShift \u62D6\u52D5\u6216\u65CB\u8F49\u6A21\u5F0F\u8F49\u52D5\uFF1B\u6EFE\u8F2A\uFF0F\u96D9\u6307\u53CA \xB1 \u7E2E\u653E\u3002\u2190 \u2192 \u63DB\u5361\uFF0C\u7A7A\u767D\u63D2\u5165\u3002","\u62D6\u52A8\u5361\u5E26\u81F3\u673A\u9876\u677E\u624B\u3002\u53F3\u952E\uFF0FShift \u62D6\u52A8\u6216\u65CB\u8F6C\u6A21\u5F0F\u8F6C\u52A8\uFF1B\u6EDA\u8F6E\uFF0F\u53CC\u6307\u53CA \xB1 \u7F29\u653E\u3002\u2190 \u2192 \u6362\u5361\uFF0C\u7A7A\u683C\u63D2\u5165\u3002","Drag to the top slot and release. Right-drag / Shift-drag or rotation mode to turn; wheel / pinch or \xB1 to zoom. \u2190 \u2192 select; Space inserts.","\u4E0A\u306E\u633F\u5165\u53E3\u307E\u3067\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u96E2\u3057\u307E\u3059\u3002\u53F3\u30C9\u30E9\u30C3\u30B0\u30FBShift\u30FB\u56DE\u8EE2\u30E2\u30FC\u30C9\u3067\u56DE\u8EE2\u3002\u30DB\u30A4\u30FC\u30EB\u30FB\u30D4\u30F3\u30C1\u30FB\xB1\u3067\u62E1\u7E2E\u3002\u2190 \u2192 \u9078\u629E\u3001Space \u633F\u5165\u3002","\uC0C1\uB2E8 \uC2AC\uB86F\uC73C\uB85C \uB4DC\uB798\uADF8 \uD6C4 \uB193\uC73C\uC138\uC694. \uC6B0\uD074\uB9AD / Shift \uB4DC\uB798\uADF8 \uB610\uB294 \uD68C\uC804 \uBAA8\uB4DC\uB85C \uD68C\uC804, \uD720 / \uB450 \uC190\uAC00\uB77D / \xB1\uB85C \uD655\uB300\xB7\uCD95\uC18C. \u2190 \u2192 \uC120\uD0DD, Space \uC0BD\uC785.","Arraste at\xE9 \xE0 ranhura superior e solte. Bot\xE3o direito / Shift ou modo de rota\xE7\xE3o para rodar; roda / pin\xE7a / \xB1 para zoom. \u2190 \u2192 escolher; Space inserir.","Arrastra hasta la ranura superior y suelta. Bot\xF3n derecho / Shift o modo de giro para girar; rueda / pellizco / \xB1 para zoom. \u2190 \u2192 elegir; Space insertar."],ready:["\u9078\u4E00\u76D2\u5361\u5E36\uFF0C\u958B\u59CB\u6311\u6230\u3002","\u9009\u4E00\u76D2\u5361\u5E26\uFF0C\u5F00\u59CB\u6311\u6218\u3002","Choose a cartridge and challenge its Boss.","\u30AB\u30BB\u30C3\u30C8\u3092\u9078\u3093\u3067\u6311\u6226\u3002","\uCE74\uD2B8\uB9AC\uC9C0\uB97C \uACE8\uB77C \uB3C4\uC804\uD558\uC138\uC694.","Escolha um cartucho e desafie o Boss.","Elige un cartucho y desaf\xEDa al Boss."],sealed:["\u9019\u76D2\u4ECD\u88AB\u5C01\u5370\u3002","\u8FD9\u76D2\u4ECD\u88AB\u5C01\u5370\u3002","This cartridge is sealed.","\u3053\u306E\u30AB\u30BB\u30C3\u30C8\u306F\u5C01\u5370\u4E2D\u3002","\uC544\uC9C1 \uBD09\uC778\uB41C \uCE74\uD2B8\uB9AC\uC9C0\uC785\uB2C8\uB2E4.","Este cartucho est\xE1 selado.","Este cartucho est\xE1 sellado."],align:["\u8ACB\u5148\u64FA\u6B63\u5361\u5E36\uFF0C\u518D\u5C0D\u6E96\u63D2\u69FD\u3002","\u8BF7\u5148\u6446\u6B63\u5361\u5E26\uFF0C\u518D\u5BF9\u51C6\u63D2\u69FD\u3002","Straighten the cartridge and align it with the slot.","\u30AB\u30BB\u30C3\u30C8\u3092\u6B63\u9762\u306B\u5411\u3051\u3066\u633F\u5165\u53E3\u3078\u3002","\uCE74\uD2B8\uB9AC\uC9C0\uB97C \uBC14\uB974\uAC8C \uC815\uB82C\uD558\uC138\uC694.","Endireite e alinhe com a ranhura.","Endereza y alinea con la ranura."],reading:["\u5361\u5E36\u8B80\u53D6\u4E2D\u2026","\u5361\u5E26\u8BFB\u53D6\u4E2D\u2026","Reading cartridge\u2026","\u30AB\u30BB\u30C3\u30C8\u8AAD\u8FBC\u4E2D\u2026","\uCE74\uD2B8\uB9AC\uC9C0 \uC77D\uB294 \uC911\u2026","A ler o cartucho\u2026","Leyendo cartucho\u2026"],boot:["\u6B63\u5728\u9023\u63A5\u6311\u6230\u2026","\u6B63\u5728\u8FDE\u63A5\u6311\u6218\u2026","Connecting to the challenge\u2026","\u6311\u6226\u3078\u63A5\u7D9A\u4E2D\u2026","\uB3C4\uC804\uC73C\uB85C \uC5F0\uACB0 \uC911\u2026","A entrar no desafio\u2026","Entrando al desaf\xEDo\u2026"],loading:["\u958B\u555F\u5361\u5E36\u4E4B\u5323\u2026","\u6253\u5F00\u5361\u5E26\u4E4B\u5323\u2026","Opening cartridge archive\u2026","\u30AB\u30BB\u30C3\u30C8\u306E\u5323\u3092\u958B\u304F\u2026","\uCE74\uD2B8\uB9AC\uC9C0 \uBCF4\uAD00\uD568 \uC5EC\uB294 \uC911\u2026","A abrir os cartuchos\u2026","Abriendo los cartuchos\u2026"],fallback:["\u6B64\u88DD\u7F6E\u4E0D\u652F\u63F4\u7ACB\u9AD4\u6548\u679C\uFF0C\u4ECD\u53EF\u6309\u63D2\u5361\u9032\u5165 Boss\u3002","\u6B64\u8BBE\u5907\u4E0D\u652F\u6301\u7ACB\u4F53\u6548\u679C\uFF0C\u4ECD\u53EF\u6309\u63D2\u5361\u8FDB\u5165 Boss\u3002","3D is unavailable; the insert button still launches each Boss.","\u7ACB\u4F53\u8868\u793A\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002\u633F\u5165\u30DC\u30BF\u30F3\u3067\u6311\u6226\u3067\u304D\u307E\u3059\u3002","3D\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC9C0\uB9CC \uC0BD\uC785 \uBC84\uD2BC\uC73C\uB85C \uB3C4\uC804\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","3D indispon\xEDvel; o bot\xE3o ainda inicia cada Boss.","3D no disponible; el bot\xF3n inicia cada Boss."],error:["\u672A\u80FD\u8F09\u5165\u95DC\u5361\uFF0C\u8ACB\u8FD4\u56DE\u9078\u95DC\u518D\u8A66\u3002","\u672A\u80FD\u52A0\u8F7D\u5173\u5361\uFF0C\u8BF7\u8FD4\u56DE\u9009\u5173\u91CD\u8BD5\u3002","Could not load the encounter. Return to selection and retry.","\u8AAD\u8FBC\u5931\u6557\u3002\u9078\u629E\u306B\u623B\u3063\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC120\uD0DD\uC73C\uB85C \uB3CC\uC544\uAC00 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.","Falha ao carregar. Volte e tente novamente.","No se pudo cargar. Vuelve y reintenta."],lustIntro:["\u96F2\u4E0A\u4E18\u6BD4\u7279","\u4E91\u4E0A\u4E18\u6BD4\u7279","Cupid in the Clouds","\u96F2\u306E\u4E0A\u306E\u30AD\u30E5\u30FC\u30D4\u30C3\u30C9","\uAD6C\uB984 \uC704\uC758 \uD050\uD53C\uB4DC","Cupido nas Nuvens","Cupido en las Nubes"],lustLore:["\u96F2\u5CF6\u3001\u5F13\u5F26\u6A4B\u8207\u7834\u788E\u91D1\u7BAD\u3002\u9B45\u60D1\u8207\u81EA\u7531\u7684\u9078\u64C7\u3002","\u4E91\u5C9B\u3001\u5F13\u5F26\u6865\u4E0E\u7834\u788E\u91D1\u7BAD\u3002\u9B45\u60D1\u4E0E\u81EA\u7531\u7684\u9009\u62E9\u3002","Cloud islands, bowstring paths, and a choice freely made.","\u96F2\u306E\u5CF6\u3001\u5F13\u5F26\u306E\u6A4B\u3001\u7815\u3051\u305F\u91D1\u306E\u77E2\u3002\u9B45\u60D1\u3068\u81EA\u7531\u306E\u9078\u629E\u3002","\uAD6C\uB984\uC12C, \uD65C\uC2DC\uC704 \uB2E4\uB9AC, \uBD80\uC11C\uC9C4 \uD669\uAE08 \uD654\uC0B4. \uB9E4\uD639\uACFC \uC790\uC720\uC758 \uC120\uD0DD.","Ilhas nas nuvens, pontes de corda e flechas douradas partidas. Encanto e livre escolha.","Islas entre nubes, puentes de cuerda y flechas doradas rotas. Encanto y libre elecci\xF3n."],prideIntro:["\u93E1\u5BAE\u4E4B\u738B","\u955C\u5BAB\u4E4B\u738B","King of the mirror palace","\u93E1\u5BAE\u306E\u738B","\uAC70\uC6B8 \uAD81\uC804\uC758 \uC655","Rei do pal\xE1cio dos espelhos","Rey del palacio de espejos"],prideLore:["\u93E1\u5BAE\u4E4B\u738B\u4FEF\u8996\u4E00\u5207\u3002\u6311\u6230\u4ED6\u7684\u50B2\u6162\u738B\u6B0A\u3002","\u955C\u5BAB\u4E4B\u738B\u4FEF\u89C6\u4E00\u5207\u3002\u6311\u6218\u4ED6\u7684\u50B2\u6162\u738B\u6743\u3002","The king looks down upon all. Challenge his arrogant rule.","\u738B\u306F\u3059\u3079\u3066\u3092\u898B\u4E0B\u3059\u3002\u305D\u306E\u50B2\u6162\u306A\u738B\u6A29\u306B\u6311\u3081\u3002","\uC655\uC740 \uBAA8\uB4E0 \uAC83\uC744 \uB0B4\uB824\uB2E4\uBD05\uB2C8\uB2E4. \uC624\uB9CC\uD55C \uC655\uAD8C\uC5D0 \uB3C4\uC804\uD558\uC138\uC694.","O rei despreza todos. Desafie o seu reinado arrogante.","El rey desprecia a todos. Desaf\xEDa su arrogante dominio."],envyIntro:["\u7ABA\u8996\u4E4B\u5B50","\u7AA5\u89C6\u4E4B\u5B50","The Watching Child","\u8997\u304D\u898B\u308B\u5B50","\uC5FF\uBCF4\uB294 \uC544\uC774","A Crian\xE7a que Espia","El Ni\xF1o que Esp\xEDa"],envyLore:["\u5E7D\u6797\u88E1\u7684\u5B69\u5B50\uFF0C\u7ABA\u8996\u8457\u4E0D\u5C6C\u65BC\u81EA\u5DF1\u7684\u5E78\u798F\u3002","\u5E7D\u6797\u91CC\u7684\u5B69\u5B50\uFF0C\u7AA5\u89C6\u7740\u4E0D\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5E78\u798F\u3002","A child in the dark woods watches happiness that belongs to others.","\u6697\u3044\u68EE\u306E\u5B50\u306F\u3001\u4ED6\u4EBA\u306E\u5E78\u305B\u3092\u8997\u304D\u898B\u308B\u3002","\uC5B4\uB450\uC6B4 \uC232\uC758 \uC544\uC774\uB294 \uB0A8\uC758 \uD589\uBCF5\uC744 \uC5FF\uBD05\uB2C8\uB2E4.","Uma crian\xE7a no bosque escuro espreita a felicidade dos outros.","Un ni\xF1o en el bosque oscuro observa la felicidad ajena."]},Oy=["crazyGreed","sinPride","sinEnvy","sinLust","sinGluttony","sinSloth","sinWrath"];function dt(n,e){let t=By[e];return t?t[Math.max(0,Vi.indexOf(n))]:Td(n,e)}function Wn(n,e){return dt(n,Oy[e])}function Wo(n,e){return dt(n,e==="greed"?"crazyDealer":e+"Intro")}function Ed(n,e){return dt(n,e==="greed"?"crazyGreedLore":e+"Lore")}function Ls(n){return{"zh-Hant":"PixelHant","zh-Hans":"PixelHans",ja:"PixelJa",ko:"PixelKo"}[n]||"PixelLatin"}function kc(n){return{greed:"index.html",pride:"index.html",envy:"envy-preview.html",lust:"lust-preview.html"}[n]||null}var Ad=n=>JSON.stringify(n).replaceAll("<","\\u003c");function ky({settings:n,local:e={},session:t={}}){return`(()=>{const local=${Ad({...e,"bridge-settings":JSON.stringify(n)})},session=${Ad({...t,"bridge-filming-unlock":"1"})};const memory=data=>({get length(){return Object.keys(data).length},key:i=>Object.keys(data)[i]??null,getItem:k=>Object.prototype.hasOwnProperty.call(data,k)?String(data[k]):null,setItem:(k,v)=>{data[String(k)]=String(v)},removeItem:k=>{delete data[k]},clear:()=>{for(const k of Object.keys(data))delete data[k]}});Object.defineProperty(window,'localStorage',{value:memory(local)});Object.defineProperty(window,'sessionStorage',{value:memory(session)});window.__cartridgeReadOnly=true;})();`}function Cd(n,{id:e,base:t,settings:i,local:r,session:s}){if(!kc(e))throw new RangeError("Unavailable Boss");let a=JSON.stringify({lang:i.lang,theme:i.theme,difficulty:i.crazyDifficulty||"normal"}),o=ky({settings:i,local:r,session:s});if(n=n.replace("<head>",`<head><base href="${t.replaceAll("&","&amp;").replaceAll('"',"&quot;")}"><script>${o.replaceAll("<\/script","<\\/script")}<\/script>`),!n.includes("window.__cartridgeReadOnly"))throw new Error("Missing isolated storage bootstrap");if(e==="greed"||e==="pride"){e==="pride"&&(n=n.replace('<body data-theme="light">','<body data-theme="light" data-pride-preview>'));let l=n.lastIndexOf("<\/script>");n=n.slice(0,l)+`
// Local cartridge adapter: normal encounter initialization, no state or score injection.
settings.lang=${JSON.stringify(i.lang)};settings.theme=${JSON.stringify(i.theme)};settings.crazyDifficulty=${JSON.stringify(i.crazyDifficulty||"normal")};applySettings();
${e==="pride"?'previewScenario="full";previewDifficulty=settings.crazyDifficulty;':""}addEventListener('message',e=>{if(e.source===parent&&e.data?.type==='cartridge-start')beginCrazy(${JSON.stringify(e)});});window.__cartridgeEncounter={id:${JSON.stringify(e)},get mode(){return crazy?.mode},get hp(){return crazy?.hp},get over(){return !!crazy?.over},get won(){return !!crazy?.won},get scene(){return crazy?.cutscene},get difficulty(){return crazy?.difficulty},get bridge(){return crazy?.bridge},get preview(){return !!crazy?.preview},get filming(){return !!crazy?.filming}};
`+n.slice(l)}else{let l=`<script>addEventListener('message',e=>{if(e.source!==parent||e.data?.type!=='cartridge-start')return;const config=${a};const scenario=document.getElementById('scenario'),difficulty=document.getElementById('difficulty');scenario.value='full';difficulty.value=config.difficulty;document.getElementById('launch-form').requestSubmit();});<\/script>`;n=n.replace("</body>",l+"</body>")}return n=n.replace("</body>","<script>function cartridgeFocusBoard(){const s=window.lustPreview||window.envyPreview||window.__cartridgeEncounter;if(!s||s.scene||s.over||s.won)return;const board=document.querySelector('#board,#envy-board,#lust-board');if(board){const game=document.getElementById('game');if(game)game.inert=false;board.tabIndex=-1;board.focus({preventScroll:true});}}addEventListener('click',e=>{if(e.target.closest('#cinematic-skip,#scene-continue,#play-menu-close,#resume,#menu-return')){cartridgeFocusBoard();requestAnimationFrame(cartridgeFocusBoard);}if(e.target.closest('#pick,#scene-pick,#result-bosses,#pride-preview-pick,#bosses-back,#play-menu-exit,#veil-menu'))parent.postMessage({type:'cartridge-return'},'*');});<\/script></body>"),n}function Rd({memory:n,cores:e}={}){let t=Number.isFinite(n)&&n<=4||Number.isFinite(e)&&e<=4,i="auto",r=t,s=[];return{get preference(){return i},get quality(){return i==="auto"?r?"light":"standard":i},set(a){["auto","standard","light"].includes(a)&&(i=a,r=t,s=[])},observe(a){i!=="auto"||r||!Number.isFinite(a)||(s.push(a),s.length>24&&s.shift(),s.length===24&&s.filter(o=>o>24).length>=12&&(r=!0))},ratio(a,o,l=1){let c=this.quality==="light";return Math.min(l,c?1:1.5,Math.sqrt((c?24e4:6e5)/Math.max(1,a*o)))},interval({active:a=!1,reduced:o=!1}={}){return 1e3/(a?this.quality==="light"?24:30:o?1:this.quality==="light"?6:12)}}}var te=n=>document.getElementById(n),an=te("stage"),ae=hd(),Pn={};try{Pn=JSON.parse(localStorage.getItem("bridge-settings")||"{}")}catch{}var Et=document.body.dataset.cartridgeCampaign==="true",Br=[];function Yo(){if(!Et)return;let n,e;try{n=localStorage,e=sessionStorage}catch{}Br=fh(n,e),ae.available=Br.map(t=>t.unlocked)}Yo();if(Et){let n=bt.findIndex(e=>e.id===new URLSearchParams(location.search).get("sin"));n>=0&&ae.available[n]&&Nc(ae,n)}var Be=Vi.includes(Pn.lang)?Pn.lang:"en",yn=Pn.theme==="dark"?"dark":"light",Wi=Pn.crazyDifficulty==="hard"?"hard":"normal",_n=1,mn=matchMedia("(prefers-reduced-motion:reduce)").matches,on=!1,Fs=Math.max(0,Math.min(1,Number(Pn.sfxVolume??Pn.volume??.7))),Bs=Fs>0;function qc(){if(!(!Et||Js()))try{let n=JSON.parse(localStorage.getItem("bridge-settings")||"{}");Object.assign(n,{lang:Be,theme:yn,crazyDifficulty:Wi}),localStorage.setItem("bridge-settings",JSON.stringify(n)),Pn=n}catch{}}var Xn=Rd({memory:navigator.deviceMemory,cores:navigator.hardwareConcurrency});if(Et)try{Xn.set(localStorage.getItem("bridge-cartridge-quality")||"auto")}catch{}var Pd=0,Id=0,Rn=!0,Ld="",Wd=0,Dd=0,Hy=null,Ur=[],Ud=performance.now(),Ft,sn,kt,yt,Qe,mi=[],ft=null,Nd="browse",gn=null,Zo=!1,Fd=0,Xi=new L,Xo=new L,qo=new L,zd=new L,Xd=new L,qd=new pn,Us=new Ss,Bd=new ge,Yd=new Qt(new L(0,0,1),-1.6),Ns=new L,Os=document.createElement("canvas");Os.width=512;Os.height=448;var rn=Os.getContext("2d"),Jo=new li(Os);Jo.colorSpace=wt;Jo.minFilter=qt;var Zd=[],Od=[];Object.defineProperty(window,"cartridgeDemo",{get:()=>({state:ae,game:Hy,renderer:Zo?"fallback":"three-webgl",card:Wc(Qe?.position),slot:Wc(Xo),version:"1.2.36",campaign:Et,progress:Br,performance:{quality:Xn.quality,frames:Wd,drawCalls:Ft?.info.render.calls||0,triangles:Ft?.info.render.triangles||0,buffer:Ft?[Ft.domElement.width,Ft.domElement.height]:null},zoom:_n,theme:yn,lang:Be,difficulty:Wi,sound:Bs,sfxLevel:Fs,reduced:mn,slotAbove:Wc(qo),encounter:Nr,loading:Cn})});var Vy={title:"crazySevenSins","demo-badge":"demo","local-label":"demo",insert:"insert",rotate:"rotate",reset:"reset",eject:"eject",resume:"crazyContinue","settings-title":"settings","theme-label":"theme","quality-label":"quality","reduced-label":"reduced","sound-label":"sound","settings-note":"note","help-note":"help","options-return":"close","difficulty-title":"crazyDifficulty",normal:"normal",hard:"hard","loading-title":"loading","fallback-note":"fallback"},Gy=["greed","pride","envy","lust","gluttony","sloth","wrath"],Nr=null,Cn=!1,Lr=0,fi,Hc,kd,Gi,Vc=new Set,pi=new Map,Fr=null;function Wy(){!Et||!Ur.length||ae.available.forEach((n,e)=>{if(!n||Ur[e]||Vc.has(e)||!bt[e].art)return;Vc.add(e);let t=new Image;t.onload=()=>{Ur[e]=t,Vc.delete(e),qn()},t.src=bt[e].art})}function qn(){Rn=!0,document.documentElement.lang=Be,document.body.dataset.theme=yn;for(let[e,t]of Object.entries(Vy))te(e)&&(te(e).textContent=dt(Be,t));te("demo-badge").hidden=Et,Et&&(te("settings-title").textContent=dt(Be,"campaignSettings"),te("settings-note").textContent=dt(Be,"campaignNote"),te("main-menu").ariaLabel=dt(Be,"mainMenu"),te("ranks-toggle").ariaLabel=dt(Be,"ranks"),te("ranks-title").textContent=dt(Be,"ranks"),te("ranks-close").textContent=dt(Be,"close")),te("settings").ariaLabel=dt(Be,"settings"),te("zoom-in").ariaLabel=dt(Be,"zoomIn"),te("zoom-out").ariaLabel=dt(Be,"zoomOut"),te("lang").value=Be,te("rotate").setAttribute("aria-pressed",String(ae.rotate)),te("theme").value=yn,te("quality").value=Xn.preference;for(let e of te("quality").options)e.textContent=dt(Be,"quality"+e.value[0].toUpperCase()+e.value.slice(1));for(let e of["light","dark"])te("theme").querySelector(`[value="${e}"]`).textContent=dt(Be,e);te("description").textContent=dt(Be,"ready"),te("normal").setAttribute("aria-pressed",String(Wi==="normal")),te("hard").setAttribute("aria-pressed",String(Wi==="hard"));let n=bt[ae.index];te("concept").dataset.sin=n.id,te("concept").style.setProperty("--tone",n.color),te("concept-art").src=n.art,te("concept-art").alt=Wo(Be,n.id),te("boss-emblem").setAttribute("href","#sin-icon-"+n.id),te("boss-title").textContent=Wn(Be,ae.index)+" \xB7 "+Wo(Be,n.id),te("boss-lore").textContent=Ed(Be,n.id),te("local-label").hidden=Et||!n.preview,nx(),te("game-label").textContent=Wn(Be,ae.index)+" \xB7 "+dt(Be,"demo"),te("fx-title").textContent=Wn(Be,ae.index),te("shelf").replaceChildren(...bt.map((e,t)=>{let i=document.createElement("button");return i.type="button",i.dataset.index=t,i.style.setProperty("--tone",e.color),i.setAttribute("aria-pressed",String(t===ae.index)),i.setAttribute("aria-label",ae.available[t]?Wn(Be,t):dt(Be,"crazyLocked")),i.innerHTML=`<svg class="sin-emblem" aria-hidden="true"><use href="#sin-icon-${Gy[t]}"/></svg><span><b>${ae.available[t]?Wn(Be,t):"\u25A3"}</b><small>${ae.available[t]?Et&&Br[t]?.cleared?dt(Be,"cleared"):e.preview&&!Et?dt(Be,"demo"):Wo(Be,e.id):dt(Be,"crazyLocked")}</small></span>`,i.onclick=()=>Zc(t),i})),Yc(),Jd(),Ur.length&&mi.forEach((e,t)=>e.traverse(i=>{if(i.material?.uniforms?.uMap){let r=i.material.uniforms.uMap.value;i.material.uniforms.uMap.value=Kd(bt[t],Ur[t]),r?.dispose()}})),Wy(),qi()}function Yc(){te("zoom-value").textContent=Math.round(_n*100)+"%",te("zoom-in").disabled=_n>=1.45,te("zoom-out").disabled=_n<=.7}function $o(n){Rn=!0,ae.phase==="browse"&&(_n=Math.max(.7,Math.min(1.45,n)),Yc())}function Jd(){for(let n of Zd)n.userData.role&&n.uniforms.uColor.value.set(yn==="dark"?n.userData.role==="shell"?"#24252c":"#36383f":n.userData.role==="shell"?"#d0c9b9":"#eee5d4")}function qi(){let n=ae.message==="sealed"?"sealed":ae.message==="align"?"align":ae.phase==="insert"?"reading":ae.phase==="boot"||Cn?"boot":ae.message==="error"?"error":"ready",e=dt(Be,n);te("status").textContent!==e&&(te("status").textContent=e)}function Hd(n){let e={};try{for(let t=0;t<n.length;t++){let i=n.key(t);e[i]=n.getItem(i)}}catch{}return e}var Xc=null;async function Xy(){if(Et){try{Yo(),Xc=ph(bt[ae.index].id,Br,new URL("./",document.baseURI).href,Wi),Nr=bt[ae.index].id,Cn=!1}catch{zr(),ae.message="sealed",qi()}return}let n=bt[ae.index].id,e=++Lr;Cn=!0;try{let t=await fetch(new URL("./"+kc(n),document.baseURI));if(!t.ok)throw new Error("Encounter HTTP "+t.status);let i=await t.text();if(e!==Lr)return;let r={...Pn,lang:["envy","lust"].includes(n)?Be.startsWith("zh")?"zh-Hant":"en":Be,theme:yn,crazyDifficulty:Wi};if(te("game-shell").hidden=!1,te("game-shell").style.visibility="hidden",te("boss-frame").srcdoc=Cd(i,{id:n,base:new URL("./",document.baseURI).href,settings:r,local:Hd(localStorage),session:Hd(sessionStorage)}),Nr=n,await new Promise((s,a)=>{let o=te("boss-frame"),l=setTimeout(()=>a(new Error("Encounter load timeout")),2e4);o.onload=()=>{if(e!==Lr)return clearTimeout(l),s();let c=o.contentWindow;c.__cartridgeReadOnly&&(clearTimeout(l),c.addEventListener("keydown",h=>{h.code==="Escape"&&h.shiftKey&&zr()}),s())}}),e!==Lr)return;Cn=!1}catch(t){if(e!==Lr)return;console.warn(t),Cn=!1,Nr=null,ae.message="error",zr(),ae.message="error",qi()}}function Vd(){if(Et){Xc&&location.assign(Xc);return}Cn||!Nr||(document.body.classList.add("playing"),te("game-shell").hidden=!1,te("game-shell").style.visibility="visible",te("eject").hidden=!0,te("boss-frame").contentWindow.postMessage({type:"cartridge-start"},"*"),te("boss-frame").contentWindow.focus(),te("launch-fx").classList.remove("active"))}function qy(){try{let n=te("boss-frame").contentWindow,e=n?.lustPreview||n?.envyPreview||n?.__cartridgeEncounter;e&&e.hp!==void 0&&(te("eject").hidden=!!e.scene&&!e.over&&!e.won)}catch{}}function Yy(){if(ae.phase!=="boot"||(te("launch-fx").classList.add("active"),on||document.hidden||performance.now()-Dd<1e3/30))return;if(Dd=performance.now(),!fi)try{fi=new Ps({canvas:te("fx-canvas"),antialias:!1,powerPreference:"low-power"}),Hc=new xr,kd=new Ii,Gi=new Pt({vertexShader:xd,fragmentShader:vd,uniforms:{uProgress:{value:0},uAspect:{value:1},uTone:{value:new qe},uPaper:{value:new qe},uReduced:{value:0}}}),Hc.add(new _t(new tn(2,2),Gi))}catch{return}let n=innerWidth,e=innerHeight,t=Xn.ratio(n,e,1);Math.abs(fi.getPixelRatio()-t)>.001&&fi.setPixelRatio(t),(Math.abs(fi.domElement.width-n*t)>1||Math.abs(fi.domElement.height-e*t)>1)&&fi.setSize(n,e,!1),Gi.uniforms.uProgress.value=Math.min(1,ae.elapsed/(mn?250:2100)),Gi.uniforms.uAspect.value=n/e,Gi.uniforms.uTone.value.set(bt[ae.index].color),Gi.uniforms.uPaper.value.set(yn==="dark"?"#000000":"#f5f5f7"),Gi.uniforms.uReduced.value=mn?1:0,fi.render(Hc,kd)}function $d(n){if(Bs)try{gn??=new AudioContext,gn.resume(),(n==="boot"?[262,392,523]:[110,75]).forEach((t,i)=>{let r=gn.createOscillator(),s=gn.createGain(),a=gn.currentTime+i*.09;r.type=n==="boot"?"sine":"triangle",r.frequency.value=t,s.gain.setValueAtTime(.001,a),s.gain.exponentialRampToValueAtTime(.065*Fs,a+.008),s.gain.exponentialRampToValueAtTime(.001,a+.15),r.connect(s),s.connect(gn.destination),r.start(a),r.stop(a+.16)})}catch{}}function Zy(n,e,t){let i=new Sr,r=-n/2,s=-e/2;return i.moveTo(r+t,s),i.lineTo(r+n-t,s),i.quadraticCurveTo(r+n,s,r+n,s+t),i.lineTo(r+n,s+e-t),i.quadraticCurveTo(r+n,s+e,r+n-t,s+e),i.lineTo(r+t,s+e),i.quadraticCurveTo(r,s+e,r,s+e-t),i.lineTo(r,s+t),i.quadraticCurveTo(r,s,r+t,s),i}function zs(n,e=.3){let t=new Pt({vertexShader:md,fragmentShader:gd,uniforms:{uColor:{value:new qe(n)},uGloss:{value:e}}});return Zd.push(t),t}function At(n,e,t,i,r,s=0,a=0,o=0,l=.07){let c=Zy(e,t,l),h=new ys(c,{depth:i,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:l*.35,bevelThickness:l*.3,curveSegments:7});h.translate(0,0,-i/2);let u=new _t(h,typeof r=="string"?zs(r):r);return u.position.set(s,a,o),n.add(u),u}function Gc(n,e,t,i,r,s){let a=new _t(new cs(e,e,.1,40),zs(t,.8));return a.rotation.x=Math.PI/2,a.position.set(i,r,s),n.add(a),a}function Ds(n,e,t,i,r,s,a="#756971",o=null){let l=document.createElement("canvas");l.width=512,l.height=128;let c=l.getContext("2d");o&&(c.fillStyle=o,c.fillRect(0,0,512,128)),c.font="48px PixelLatin,monospace",c.fillStyle=a,c.textAlign="center",c.textBaseline="middle",c.fillText(e,256,64);let h=new li(l);h.colorSpace=wt;let u=new _t(new tn(r,s),new kn({map:h,transparent:!0,depthWrite:!1}));return u.position.set(t,i,.65),n.add(u),u}function Gd(n,e,t,i,r,s){let a=document.createElement("canvas");a.width=256,a.height=128;let o=a.getContext("2d"),l=o.createRadialGradient(128,64,0,128,64,120);l.addColorStop(0,"rgba(76,61,46,.22)"),l.addColorStop(.55,"rgba(76,61,46,.10)"),l.addColorStop(1,"rgba(76,61,46,0)"),o.fillStyle=l,o.fillRect(0,0,256,128);let c=new _t(new tn(e,t),new kn({map:new li(a),transparent:!0,depthWrite:!1}));return c.position.set(i,r,s),n.add(c),c}function Jy(){let n=new fn,e=zs("#d0c9b9");e.userData.role="shell",At(n,3.65,5.6,.64,e,0,0,0,.28);let t=zs("#eee5d4");t.userData.role="face",At(n,3.57,5.43,.05,t,0,.03,.335,.29),At(n,3.12,2.92,.08,"#626069",0,.79,.43,.25),At(n,2.69,2.37,.045,"#252d25",0,.86,.5,.12);let i=new _t(new tn(2.56,2.24),new Pt({vertexShader:Bc,fragmentShader:yd,uniforms:{uMap:{value:Jo},uTime:{value:0},uBoot:{value:0},uReduced:{value:0}}}));i.position.set(0,.86,.58),n.add(i),n.userData.screen=i,At(n,2.9,.12,.34,"#302d32",0,2.78,-.025,.015),At(n,3.1,.04,.12,"#847b70",0,2.84,.26,.01),Gc(n,.042,"#a94d48",-1.49,1.38,.51),Ds(n,"POWER",-1.48,.98,.27,.06,"#c6bcba"),Ds(n,"DOT MATRIX",.08,2.1,1.2,.1,"#e4d8d4"),Ds(n,"BRIDGE / POCKET",-.22,-.88,1.8,.2,"#575168");let r=new fn;r.position.set(-.95,-1.48,.44),At(r,1.02,.34,.16,"#393640",0,0,0,.04),At(r,.34,1.02,.16,"#393640",0,0,.01,.04),Gc(r,.13,"#24212c",0,0,.11),n.add(r);for(let[s,a,o]of[["left",-.34,0],["right",.34,0],["up",0,.34],["down",0,-.34]]){let l=new _t(new tn(.4,.4),new kn({transparent:!0,opacity:0,depthWrite:!1}));l.position.set(a,o,.2),l.userData.action=s,r.add(l),Od.push(l)}for(let[s,a,o]of[["alt",.67,-1.52],["action",1.26,-1.2]]){let l=Gc(n,.29,"#955464",a,o,.49);l.userData.action=s,Od.push(l)}At(n,.51,.16,.085,"#7e797c",-.32,-2.23,.43,.07).rotation.z=.12,At(n,.51,.16,.085,"#7e797c",.35,-2.23,.43,.07).rotation.z=.12,Ds(n,"SELECT     START",0,-2.52,1.35,.1,"#756876");for(let s=0;s<5;s++)At(n,.045,.48,.025,"#a1998c",.89+s*.13,-2.23,.38,.013).rotation.z=.32;return n}function Kd(n,e){let t=document.createElement("canvas");t.width=512,t.height=600;let i=t.getContext("2d");if(i.fillStyle="#eee9dd",i.fillRect(0,0,512,600),i.fillStyle=n.color,i.fillRect(0,0,512,36),i.fillStyle="#efe7db",i.font="bold 15px PixelLatin,monospace",i.fillText("BRIDGE   /   CRAZY COLLECTION",24,24),e){let s=Math.max(488/e.naturalWidth,380/e.naturalHeight),a=e.naturalWidth*s,o=e.naturalHeight*s;i.save(),i.beginPath(),i.rect(12,47,488,380),i.clip(),i.drawImage(e,256-a/2,237-o/2,a,o),i.restore()}else i.fillStyle="#bcb7ab",i.fillRect(12,47,488,380),i.fillStyle="#777267",i.font="90px PixelLatin,monospace",i.fillText("\u25A3",211,268);i.fillStyle="#3f3940",i.font="600 50px PixelLatin,monospace",i.fillText(n.english,24,484),i.fillStyle=n.color,i.font="32px PixelLatin,monospace",i.font="32px "+Ls(Be)+",monospace",i.fillText(Wn(Be,bt.indexOf(n)),26,532),i.fillStyle="#8a8074",i.font="18px PixelLatin,monospace",i.fillText(n.preview&&!Et?"INDEPENDENT PREVIEW":"VOL. 0"+(bt.indexOf(n)+1)+"    /    POCKET EDITION",26,576);let r=new li(t);return r.colorSpace=wt,r}function $y(n,e){let t=new fn,i=zs(n.available?"#bbb9ae":"#898981",.42);At(t,2.15,2.6,.28,i,0,0,0,.1),At(t,1.97,.25,.02,"#929088",0,1.1,.164,.025);for(let a=0;a<4;a++)At(t,.2,.043,.015,"#dbd9cc",-.92,1.06-a*.085,.17,.012),At(t,.2,.043,.015,"#dbd9cc",.92,1.06-a*.085,.17,.012);At(t,1.89,2.07,.026,"#8c897d",0,-.12,.168,.09);let r=new Pt({vertexShader:Bc,fragmentShader:_d,uniforms:{uMap:{value:Kd(n,e)},uTime:{value:0},uReduced:{value:0}}}),s=new _t(new tn(1.74,1.9),r);return s.position.set(0,-.13,.225),t.add(s),t.userData.index=bt.indexOf(n),At(t,1.32,.17,.01,"#777468",0,-1.13,.18,.03),Ds(t,"\u25BC",0,1.11,.12,.1,"#bfbdb2").position.z=.235,t}function Wc(n){if(!n||!kt)return null;let e=n.clone().project(kt),t=an.getBoundingClientRect();return{x:t.left+(e.x+1)*t.width/2,y:t.top+(1-e.y)*t.height/2}}function jd(){let n=an.getBoundingClientRect();if(!n.width||!n.height)return{portrait:!1,short:!1};let e=innerWidth>innerHeight&&innerHeight<540,t=innerWidth<=680&&!e,i=t?7.4:e?7.8:7.4;i=Math.max(i,(t?7:7.7)*n.height/n.width)/_n,kt.left=-i*n.width/n.height/2,kt.right=i*n.width/n.height/2,kt.top=i/2,kt.bottom=-i/2,kt.updateProjectionMatrix();let s=Xn.ratio(n.width,n.height,devicePixelRatio||1);return(n.width!==Pd||n.height!==Id||Math.abs(Ft.getPixelRatio()-s)>.001)&&(Pd=n.width,Id=n.height,Ft.setPixelRatio(s),Ft.setSize(n.width,n.height,!1)),sn.background=new qe(yn==="dark"?"#000000":"#f5f5f7"),{portrait:t,short:e}}function Zc(n){if(!Nc(ae,n)){qi();return}Qe&&(sn.remove(Qe),Qe=mi[n].clone(!0),Qe.position.copy(Xi),Qe.traverse(e=>{e.isMesh&&(e.userData.index=n)}),sn.add(Qe)),qn()}function Qd(){Yo(),zc(ae)&&ef()}function ef(){Qe&&(Xd.copy(Qe.position),qd.copy(Qe.quaternion)),on=!1,$d("insert"),Xy(),qi()}function zr(){pd(ae)&&(Lr++,Nr=null,Cn=!1,te("boss-frame").removeAttribute("srcdoc"),te("game-shell").hidden=!0,te("launch-fx").classList.remove("active"),on=!1,te("pause-banner").hidden=!0,document.body.classList.remove("playing"),yt&&Qe&&(yt.remove(Qe),sn.add(Qe)),qn())}function Ky(){let n=[Be,ae.index,ae.phase].join(":");n!==Ld&&(Ld=n,rn.fillStyle="#a4b081",rn.fillRect(0,0,512,448),rn.textAlign="center",rn.fillStyle="#34443a",rn.font="24px PixelLatin,monospace",rn.fillText("BRIDGE",256,148),rn.font="18px PixelLatin,monospace",rn.fillText("CRAZY",256,195),rn.font="20px "+Ls(Be)+",monospace",rn.fillText(Wn(Be,ae.index),256,254),rn.font="14px PixelLatin,monospace",rn.fillText(ae.phase==="browse"?"01 \u2014 07":ae.phase==="insert"?"READING\u2026":"LINK START",256,325),Jo.needsUpdate=!0,Zo&&te("fallback-lcd").getContext("2d").drawImage(Os,0,0))}function tf(){ae.phase!=="playing"&&(on=!0),gn&&gn.suspend()}function jy(n){if(Zo||!kt||!Qe||(nf(n),ae.phase==="playing")||ae.phase!=="browse")return;if(!Us.intersectObject(Qe,!0)[0]){let t=Us.intersectObjects(mi.filter(i=>i.visible),!0)[0];t&&typeof t.object.userData.index=="number"&&Zc(t.object.userData.index);return}n.preventDefault(),an.setPointerCapture(n.pointerId),Fc(ae,Qe.position.x-Xi.x,Qe.position.y-Xi.y),Us.ray.intersectPlane(Yd,Ns),ft={id:n.pointerId,x:n.clientX,y:n.clientY,world:Ns.clone(),base:{...ae.drop},rot:ae.rotate||n.button===2||n.shiftKey,moved:!1}}function nf(n){let e=an.getBoundingClientRect();Bd.set((n.clientX-e.left)/e.width*2-1,-(n.clientY-e.top)/e.height*2+1),Us.setFromCamera(Bd,kt)}function Qy(n){if(Rn=!0,!ft||ft.id!==n.pointerId)return;n.preventDefault();let e=n.clientX-ft.x,t=n.clientY-ft.y;ft.moved||=Math.abs(e)+Math.abs(t)>5,ft.rot?(ud(ae,e*.004,t*.004),ft.x=n.clientX,ft.y=n.clientY):(nf(n),Us.ray.intersectPlane(Yd,Ns),Fc(ae,ft.base.x+Ns.x-ft.world.x,ft.base.y+Ns.y-ft.world.y))}function ex(n,e=!1){if(!ft||ft.id!==n.pointerId)return;let t=ft;if(ft=null,e){ae.drop={x:0,y:0};return}if(!t.rot&&t.moved){let i=Xi.x+ae.drop.x,r=Xi.y+ae.drop.y,s=Math.max(0,Xo.y-.2-r,r-qo.y-.2),a=Math.hypot(i-Xo.x,s);dd(ae,{distance:a,aligned:Math.abs(ae.yaw)<.6&&Math.abs(ae.pitch)<.6})&&ef(),qi()}}function Dr(n){let e=n-Ud,t=Math.min(50,e);if(Ud=n,document.hidden){requestAnimationFrame(Dr);return}if(fd(ae,e,{paused:on,reduced:mn}),ae.phase!==Nd&&(ae.phase==="boot"&&(Qe&&yt&&(yt.attach(Qe),Qe.position.set(0,2.17,-.27),Qe.quaternion.identity(),Qe.scale.setScalar(1)),$d("boot")),ae.phase==="playing"&&Vd(),Nd=ae.phase),ae.phase==="playing"&&!Cn&&te("game-shell").style.visibility==="hidden"&&Vd(),Yy(),Et&&ae.phase==="playing"){requestAnimationFrame(Dr);return}if(ae.phase==="playing"&&!Cn&&te("game-shell").style.visibility==="visible"){qy(),requestAnimationFrame(Dr);return}if(Ky(),qi(),Ft&&(!on||Rn)&&(!mn||Rn||ae.phase!=="browse"||ft)&&n-Fd>=Xn.interval({active:!!ft||ae.phase!=="browse",reduced:mn})){let i=performance.now();Fd=n,Rn=!1;let{portrait:r,short:s}=jd(),a=ae.phase==="playing",o=a?new L(0,0,0):r?new L(-1.28,-.65,0):new L(-1.65,-.42,0);if(yt.position.lerp(o,mn?1:.1),yt.scale.lerp(new L(1,1,1).multiplyScalar(r&&!a?.97:1.08),.15),yt.rotation.x=Cs.lerp(yt.rotation.x,a?0:-.08,.12),yt.rotation.y=Cs.lerp(yt.rotation.y,a?0:.1,.12),yt.rotation.z=Cs.lerp(yt.rotation.z,a?0:r?-.045:.045,.12),kt.position.set(a?-.2:0,a?.74:0,14),kt.lookAt(a?-.2:0,a?.74:0,0),yt.updateMatrixWorld(!0),Xo.copy(yt.localToWorld(new L(0,2.96,0))),qo.copy(yt.localToWorld(new L(0,4.28,-.27))),zd.copy(yt.localToWorld(new L(0,2.17,-.27))),ae.phase==="browse"){Xi.set(r?1.65:1.92,r?1.45:.8,1.6);let l=Xi.clone().add(new L(ae.drop.x,ae.drop.y,0));!ft&&!mn&&(l.y+=Math.sin(n*.0014)*.045),Qe.position.lerp(l,ft?.6:.12),Qe.rotation.set(ae.pitch-.08,ae.yaw-.23,.055),Qe.scale.setScalar(r?.93:1.07),mi.forEach((c,h)=>{c.visible=h!==ae.index&&ae.available[h],c.position.set(r?1.4+h*.1:1.2+h*.36,r?-2.45:-2.5,-.38-h*.05),c.rotation.set(.08,0,-.27+h*.12),c.scale.setScalar(r?.28:.34)})}else if(ae.phase==="insert"){let l=Is(ae.elapsed/(mn?300:1250)),c=l<.63?Is(l/.63):1;Qe.position.copy(Xd).lerp(qo,c),l>=.63&&Qe.position.lerp(zd,Is((l-.63)/.37)),Qe.quaternion.copy(qd).slerp(yt.quaternion,Is(l/.5)),Qe.scale.setScalar(r?.94:1),mi.forEach(h=>h.visible=!1)}else mi.forEach(l=>l.visible=!1);yt.userData.screen.material.uniforms.uTime.value=n/1e3,yt.userData.screen.material.uniforms.uBoot.value=ae.phase==="boot"?1:0,Ft.render(sn,kt),Wd++,Xn.observe(performance.now()-i)}requestAnimationFrame(Dr)}te("insert").onclick=Qd;te("rotate").onclick=()=>{ae.phase==="browse"&&(ae.rotate=!ae.rotate,te("rotate").setAttribute("aria-pressed",String(ae.rotate)))};te("reset").onclick=()=>{ae.phase==="browse"&&(ae.yaw=0,ae.pitch=0,ae.drop={x:0,y:0},ae.message="",_n=1,Yc())};te("zoom-in").onclick=()=>$o(_n+.1);te("zoom-out").onclick=()=>$o(_n-.1);te("eject").onclick=zr;te("lang").replaceChildren(...Vi.map((n,e)=>{let t=document.createElement("option");return t.value=n,t.textContent=wd[e],t}));te("lang").onchange=async()=>{Be=te("lang").value,qc(),await document.fonts.load("16px "+Ls(Be)),qn()};for(let n of["normal","hard"])te(n).onclick=()=>{ae.phase==="browse"&&(Wi=n,qc(),qn())};te("settings").onclick=()=>{on=!0,te("reduced").checked=mn,te("sound").checked=Bs,te("theme").value=yn,gn?.suspend(),te("options").showModal()};te("theme").onchange=()=>{yn=te("theme").value,qc(),qn()};te("quality").onchange=()=>{if(Xn.set(te("quality").value),Et)try{localStorage.setItem("bridge-cartridge-quality",Xn.preference)}catch{}Rn=!0};addEventListener("resize",()=>{Rn=!0});te("options").onclose=()=>{Rn=!0,mn=te("reduced").checked,Bs=te("sound").checked,on=!1,gn?.resume()};te("resume").onclick=()=>{on=!1,te("pause-banner").hidden=!0,gn?.resume()};addEventListener("storage",n=>{if((n.key?.startsWith("bridge-crazy-cleared-")||n.key==="bridge-greed-cleared")&&(Yo(),qn()),n.key==="bridge-settings")try{let e=JSON.parse(n.newValue||"{}");Pn=e,Fs=Math.max(0,Math.min(1,Number(e.sfxVolume??e.volume??.7))),Bs=Fs>0,yn=e.theme==="dark"?"dark":"light",Vi.includes(e.lang)&&(Be=e.lang),qn()}catch{}});addEventListener("message",n=>{n.source===te("boss-frame").contentWindow&&n.data?.type==="cartridge-return"&&zr()});addEventListener("keydown",n=>{if(!n.target.closest("dialog,input,select")){if(n.code==="Escape"){ae.phase==="browse"?te("reset").click():zr();return}ae.phase!=="browse"||n.repeat||(["Space","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),n.code==="Space"?Qd():(n.code==="ArrowLeft"||n.code==="ArrowRight")&&Zc((ae.index+(n.code==="ArrowLeft"?-1:1)+4)%4))}});addEventListener("blur",tf);addEventListener("focus",()=>{te("options").open||(on=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&tf()});an.addEventListener("pointerdown",n=>{if(ae.phase==="browse"){if(pi.set(n.pointerId,{x:n.clientX,y:n.clientY}),an.setPointerCapture(n.pointerId),pi.size===2){let[e,t]=[...pi.values()];Fr={distance:Math.hypot(e.x-t.x,e.y-t.y),zoom:_n},ft=null,an.setPointerCapture(n.pointerId),n.preventDefault();return}jy(n)}});an.addEventListener("pointermove",n=>{if(pi.has(n.pointerId)&&pi.set(n.pointerId,{x:n.clientX,y:n.clientY}),Fr&&pi.size===2){let[e,t]=[...pi.values()];$o(Fr.zoom*Math.hypot(e.x-t.x,e.y-t.y)/Math.max(1,Fr.distance)),n.preventDefault();return}Qy(n)});for(let n of["pointerup","pointercancel"])an.addEventListener(n,e=>{let t=!!Fr;if(pi.delete(e.pointerId),t){Fr=null,ft=null;return}ex(e,n==="pointercancel")});an.addEventListener("contextmenu",n=>n.preventDefault());an.addEventListener("wheel",n=>{ae.phase==="browse"&&(n.preventDefault(),$o(_n*Math.exp(-n.deltaY*.001)))},{passive:!1});async function tx(){qn();try{await document.fonts.load("16px "+Ls(Be)),await document.fonts.load("16px PixelLatin"),await document.fonts.ready;let n=Ur=await Promise.all(bt.map((e,t)=>e.art&&(!Et||ae.available[t])?new Promise(i=>{let r=new Image;r.onload=()=>i(r),r.onerror=()=>i(null),r.src=e.art}):null));Ft=new Ps({antialias:!1,alpha:!1,powerPreference:"low-power"}),Ft.outputColorSpace=wt,Ft.toneMapping=eo,Ft.toneMappingExposure=1.1,an.prepend(Ft.domElement),sn=new xr,kt=new br(-6,6,4,-4,.1,40),kt.position.set(0,0,14),sn.add(new vs(16777215)),yt=Jy(),sn.add(yt),Gd(sn,5,1.6,-2.1,-3,-.9),Gd(sn,3,1.1,2.6,-3,-.9),mi=bt.map((e,t)=>{let i=$y(e,n[t]);return i.traverse(r=>r.userData.index=t),sn.add(i),i}),Qe=mi[ae.index].clone(!0),sn.add(Qe),jd(),Jd(),te("loading").hidden=!0,requestAnimationFrame(Dr)}catch(n){console.warn("Cartridge WebGL fallback",n.message),Zo=!0,te("loading").hidden=!0,te("fallback").hidden=!1,requestAnimationFrame(Dr)}}tx();function nx(){if(!Et)return;let n=Br[ae.index],e=te("concept"),t=te("clear-shadow");if(e.classList.toggle("cleared",!!n?.cleared),t.hidden=!n?.cleared,!n?.cleared)return;let i=new Image,r=n.id;i.onload=()=>{if(bt[ae.index].id!==r)return;t.width=540,t.height=760;let s=t.getContext("2d");s.clearRect(0,0,540,760);let a=r==="envy"?i.naturalWidth/2:i.naturalWidth,o=r==="envy"?i.naturalHeight/2:i.naturalHeight,l=r==="envy"?a:0,c=Math.min(540/a,760/o);s.drawImage(i,l,0,a,o,(540-a*c)/2,(760-o*c)/2,a*c,o*c)},i.src="./assets/"+{greed:"greed-second.webp",pride:"pride-second.webp",envy:"envy-heads.webp",lust:"lust-vn-shadow-pc98-r4.webp"}[r]}te("main-menu")?.addEventListener("click",()=>location.assign(new URL("./index.html",document.baseURI)));te("ranks-toggle")?.addEventListener("click",()=>{on=!0;let n;try{n=localStorage}catch{}let e=mh(n);te("ranks-content").replaceChildren(...e.map(t=>{let i=document.createElement("section"),r=document.createElement("h3");r.textContent=Wn(Be,["greed","pride","envy","lust"].indexOf(t.sin))+" \xB7 "+t.difficulty,i.append(r);for(let s=0;s<5;s++){let a=document.createElement("p");a.textContent=s+1+". "+(t.scores[s]??"\u2013"),i.append(a)}return i})),te("ranks-dialog").showModal()});te("ranks-dialog")?.addEventListener("close",()=>{on=!1,Rn=!0});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
