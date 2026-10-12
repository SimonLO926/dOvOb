// Build a local-only view of existing encounter pages. The original files stay unchanged.
// Child storage is an in-memory read-through snapshot; writes never reach real storage.
export function encounterPage(id){return ({greed:'index.html',pride:'index.html',envy:'envy-preview.html',lust:'lust-preview.html'})[id]||null;}
const encode=value=>JSON.stringify(value).replaceAll('<','\\u003c');
export function storageBootstrap({settings,local={},session={}}){
 return `(()=>{const local=${encode({...local,'bridge-settings':JSON.stringify(settings)})},session=${encode({...session,'bridge-filming-unlock':'1'})};const memory=data=>({get length(){return Object.keys(data).length},key:i=>Object.keys(data)[i]??null,getItem:k=>Object.prototype.hasOwnProperty.call(data,k)?String(data[k]):null,setItem:(k,v)=>{data[String(k)]=String(v)},removeItem:k=>{delete data[k]},clear:()=>{for(const k of Object.keys(data))delete data[k]}});Object.defineProperty(window,'localStorage',{value:memory(local)});Object.defineProperty(window,'sessionStorage',{value:memory(session)});window.__cartridgeReadOnly=true;})();`;
}
export function buildEncounterHTML(html,{id,base,settings,local,session}){
 if(!encounterPage(id))throw new RangeError('Unavailable Boss');
 const config=JSON.stringify({lang:settings.lang,theme:settings.theme,difficulty:settings.crazyDifficulty||'normal'});
 const bootstrap=storageBootstrap({settings,local,session});
 html=html.replace('<head>',`<head><base href="${base.replaceAll('&','&amp;').replaceAll('"','&quot;')}"><script>${bootstrap.replaceAll('</script','<\\/script')}</script>`);
 // Lust's compact document also has a normal head; reject future unknown markup instead of running writable.
 if(!html.includes('window.__cartridgeReadOnly'))throw new Error('Missing isolated storage bootstrap');
 if(id==='greed'||id==='pride'){
  if(id==='pride')html=html.replace('<body data-theme="light">','<body data-theme="light" data-pride-preview>');
  const end=html.lastIndexOf('</script>');
  html=html.slice(0,end)+`\n// Local cartridge adapter: normal encounter initialization, no state or score injection.\nsettings.lang=${JSON.stringify(settings.lang)};settings.theme=${JSON.stringify(settings.theme)};settings.crazyDifficulty=${JSON.stringify(settings.crazyDifficulty||'normal')};applySettings();\n${id==='pride'?'previewScenario="full";previewDifficulty=settings.crazyDifficulty;':''}addEventListener('message',e=>{if(e.source===parent&&e.data?.type==='cartridge-start')beginCrazy(${JSON.stringify(id)});});window.__cartridgeEncounter={id:${JSON.stringify(id)},get mode(){return crazy?.mode},get hp(){return crazy?.hp},get over(){return !!crazy?.over},get won(){return !!crazy?.won},get scene(){return crazy?.cutscene},get difficulty(){return crazy?.difficulty},get bridge(){return crazy?.bridge},get preview(){return !!crazy?.preview},get filming(){return !!crazy?.filming}};\n`+html.slice(end);
 }else{
  const start=`<script>addEventListener('message',e=>{if(e.source!==parent||e.data?.type!=='cartridge-start')return;const config=${config};const scenario=document.getElementById('scenario'),difficulty=document.getElementById('difficulty');scenario.value='full';difficulty.value=config.difficulty;document.getElementById('launch-form').requestSubmit();});</script>`;
  html=html.replace('</body>',start+'</body>');
 }
 // Parent can receive normal menu/ending return without writing progress.
 html=html.replace('</body>',`<script>function cartridgeFocusBoard(){const s=window.lustPreview||window.envyPreview||window.__cartridgeEncounter;if(!s||s.scene||s.over||s.won)return;const board=document.querySelector('#board,#envy-board,#lust-board');if(board){const game=document.getElementById('game');if(game)game.inert=false;board.tabIndex=-1;board.focus({preventScroll:true});}}addEventListener('click',e=>{if(e.target.closest('#cinematic-skip,#scene-continue,#play-menu-close,#resume,#menu-return')){cartridgeFocusBoard();requestAnimationFrame(cartridgeFocusBoard);}if(e.target.closest('#pick,#scene-pick,#result-bosses,#pride-preview-pick,#bosses-back,#play-menu-exit,#veil-menu'))parent.postMessage({type:'cartridge-return'},'*');});</script></body>`);
 return html;
}
