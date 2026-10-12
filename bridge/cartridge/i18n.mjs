import {LANGS,translate} from '../i18n.mjs';
export {LANGS};
export const LANGUAGE_NAMES=['繁體中文','简体中文','English','日本語','한국어','Português','Español'];
export const rows={
 quality:['渲染品質','渲染质量','Rendering quality','描画品質','렌더링 품질','Qualidade gráfica','Calidad gráfica'],
 qualityAuto:['自動','自动','Auto','自動','자동','Automático','Automático'],
 qualityStandard:['標準','标准','Standard','標準','표준','Normal','Estándar'],
 qualityLight:['輕量','轻量','Lightweight','軽量','경량','Leve','Ligera'],
 crazyContinue:['繼續','继续','Continue','続ける','계속','Continuar','Continuar'],

 crazySevenSins:['七大罪','七大罪','Seven Deadly Sins','七つの大罪','일곱 가지 대죄','Sete Pecados Capitais','Siete Pecados Capitales'],
 crazyDifficulty:['難度','难度','Difficulty','難易度','난이도','Dificuldade','Dificultad'],
 normal:['Normal','Normal','Normal','Normal','Normal','Normal','Normal'],hard:['Hard','Hard','Hard','Hard','Hard','Hard','Hard'],
 close:['返回','返回','Back','戻る','돌아가기','Voltar','Volver'],crazyLocked:['封印','封印','Sealed','封印','봉인','Selado','Sellado'],
 crazyGreed:['貪婪','贪婪','Greed','強欲','탐욕','Ganância','Codicia'],sinPride:['傲慢','傲慢','Pride','傲慢','오만','Orgulho','Soberbia'],sinEnvy:['嫉妒','嫉妒','Envy','嫉妬','질투','Inveja','Envidia'],sinLust:['色慾','色欲','Lust','色欲','색욕','Luxúria','Lujuria'],sinGluttony:['暴食','暴食','Gluttony','暴食','폭식','Gula','Gula'],sinSloth:['怠惰','怠惰','Sloth','怠惰','나태','Preguiça','Pereza'],sinWrath:['憤怒','愤怒','Wrath','憤怒','분노','Ira','Ira'],
 crazyDealer:['狂宴莊家','狂宴庄家','THE MAD DEALER','狂宴のディーラー','광란의 딜러','O CROUPIER LOUCO','EL CRUPIER LOCO'],
 crazyGreedLore:["莊家想要一切。挑戰貪婪的賭局。","庄家想要一切。挑战贪婪的赌局。","The house wants everything. Challenge the dealer's greed.",'胴元はすべてを欲しがる。強欲な賭けに挑め。','딜러는 모든 것을 원합니다. 탐욕의 도박에 도전하세요.','A casa quer tudo. Desafie a ganância do croupier.','La banca lo quiere todo. Desafía la codicia del crupier.'],

 demo:['獨立試玩','独立试玩','PREVIEW','体験版','체험판','DEMO','DEMO'],
 insert:['插入卡帶 ↗','插入卡带 ↗','Insert cartridge ↗','カセットを挿す ↗','카트리지 삽입 ↗','Inserir cartucho ↗','Insertar cartucho ↗'],
 rotate:['旋轉卡帶','旋转卡带','Rotate cartridge','カセット回転','카트리지 회전','Rodar cartucho','Girar cartucho'],
 reset:['擺正','摆正','Reset','リセット','초기화','Repor','Reiniciar'],
 eject:['返回選關','返回选关','Back to selection','選択に戻る','선택으로 돌아가기','Voltar à seleção','Volver a selección'],
 zoomIn:['放大','放大','Zoom in','拡大','확대','Ampliar','Acercar'],zoomOut:['縮小','缩小','Zoom out','縮小','축소','Reduzir','Alejar'],
 settings:['試玩設定','试玩设置','Preview settings','体験版設定','체험판 설정','Opções da demo','Opciones de demo'],
 reduced:['減少動態效果','减少动态效果','Reduce motion','動きを減らす','동작 줄이기','Reduzir movimento','Reducir movimiento'],
 sound:['插卡／開機音效','插卡／开机音效','Insert / boot sounds','挿入・起動音','삽입 / 시작 소리','Som de inserção / arranque','Sonido de inserción / inicio'],
 theme:['外觀','外观','Appearance','外観','외관','Aspeto','Aspecto'],
 light:['白色模式','白色模式','Light mode','ライトモード','라이트 모드','Modo claro','Modo claro'],dark:['黑色模式','黑色模式','Dark mode','ダークモード','다크 모드','Modo escuro','Modo oscuro'],
 note:['獨立試玩，不寫正式進度。外觀及語言沿用主遊戲；此處切換只影響示範。','独立试玩，不写正式进度。外观及语言沿用主游戏；此处切换只影响示范。','Independent preview; no saved progress. Theme and language follow the main game; demo changes stay here.','体験版。進行は保存されません。外観と言語は本編を引き継ぎ、変更は体験版のみです。','독립 체험판으로 진행을 저장하지 않습니다. 본 게임의 테마와 언어를 따르며 변경은 데모에만 적용됩니다.','Demo independente sem guardar progresso. Tema e idioma seguem o jogo; alterações ficam nesta demo.','Demo independiente sin guardar progreso. Tema e idioma siguen el juego; los cambios quedan en esta demo.'],
 help:['拖動卡帶至機頂放手。右鍵／Shift 拖動或旋轉模式轉動；滾輪／雙指及 ± 縮放。← → 換卡，空白插入。','拖动卡带至机顶松手。右键／Shift 拖动或旋转模式转动；滚轮／双指及 ± 缩放。← → 换卡，空格插入。','Drag to the top slot and release. Right-drag / Shift-drag or rotation mode to turn; wheel / pinch or ± to zoom. ← → select; Space inserts.','上の挿入口までドラッグして離します。右ドラッグ・Shift・回転モードで回転。ホイール・ピンチ・±で拡縮。← → 選択、Space 挿入。','상단 슬롯으로 드래그 후 놓으세요. 우클릭 / Shift 드래그 또는 회전 모드로 회전, 휠 / 두 손가락 / ±로 확대·축소. ← → 선택, Space 삽입.','Arraste até à ranhura superior e solte. Botão direito / Shift ou modo de rotação para rodar; roda / pinça / ± para zoom. ← → escolher; Space inserir.','Arrastra hasta la ranura superior y suelta. Botón derecho / Shift o modo de giro para girar; rueda / pellizco / ± para zoom. ← → elegir; Space insertar.'],
 ready:['選一盒卡帶，開始挑戰。','选一盒卡带，开始挑战。','Choose a cartridge and challenge its Boss.','カセットを選んで挑戦。','카트리지를 골라 도전하세요.','Escolha um cartucho e desafie o Boss.','Elige un cartucho y desafía al Boss.'],
 sealed:['這盒仍被封印。','这盒仍被封印。','This cartridge is sealed.','このカセットは封印中。','아직 봉인된 카트리지입니다.','Este cartucho está selado.','Este cartucho está sellado.'],
 align:['請先擺正卡帶，再對準插槽。','请先摆正卡带，再对准插槽。','Straighten the cartridge and align it with the slot.','カセットを正面に向けて挿入口へ。','카트리지를 바르게 정렬하세요.','Endireite e alinhe com a ranhura.','Endereza y alinea con la ranura.'],
 reading:['卡帶讀取中…','卡带读取中…','Reading cartridge…','カセット読込中…','카트리지 읽는 중…','A ler o cartucho…','Leyendo cartucho…'],
 boot:['正在連接挑戰…','正在连接挑战…','Connecting to the challenge…','挑戦へ接続中…','도전으로 연결 중…','A entrar no desafio…','Entrando al desafío…'],
 loading:['開啟卡帶之匣…','打开卡带之匣…','Opening cartridge archive…','カセットの匣を開く…','카트리지 보관함 여는 중…','A abrir os cartuchos…','Abriendo los cartuchos…'],
 fallback:['此裝置不支援立體效果，仍可按插卡進入 Boss。','此设备不支持立体效果，仍可按插卡进入 Boss。','3D is unavailable; the insert button still launches each Boss.','立体表示は使えません。挿入ボタンで挑戦できます。','3D를 사용할 수 없지만 삽입 버튼으로 도전할 수 있습니다.','3D indisponível; o botão ainda inicia cada Boss.','3D no disponible; el botón inicia cada Boss.'],
 error:['未能載入關卡，請返回選關再試。','未能加载关卡，请返回选关重试。','Could not load the encounter. Return to selection and retry.','読込失敗。選択に戻って再試行してください。','불러오지 못했습니다. 선택으로 돌아가 다시 시도하세요.','Falha ao carregar. Volte e tente novamente.','No se pudo cargar. Vuelve y reintenta.'],
 lustIntro:['雲上丘比特','云上丘比特','Cupid in the Clouds','雲の上のキューピッド','구름 위의 큐피드','Cupido nas Nuvens','Cupido en las Nubes'],
 lustLore:['雲島、弓弦橋與破碎金箭。魅惑與自由的選擇。','云岛、弓弦桥与破碎金箭。魅惑与自由的选择。','Cloud islands, bowstring paths, and a choice freely made.','雲の島、弓弦の橋、砕けた金の矢。魅惑と自由の選択。','구름섬, 활시위 다리, 부서진 황금 화살. 매혹과 자유의 선택.','Ilhas nas nuvens, pontes de corda e flechas douradas partidas. Encanto e livre escolha.','Islas entre nubes, puentes de cuerda y flechas doradas rotas. Encanto y libre elección.'],
 prideIntro:['鏡宮之王','镜宫之王','King of the mirror palace','鏡宮の王','거울 궁전의 왕','Rei do palácio dos espelhos','Rey del palacio de espejos'],
 prideLore:['鏡宮之王俯視一切。挑戰他的傲慢王權。','镜宫之王俯视一切。挑战他的傲慢王权。','The king looks down upon all. Challenge his arrogant rule.','王はすべてを見下す。その傲慢な王権に挑め。','왕은 모든 것을 내려다봅니다. 오만한 왕권에 도전하세요.','O rei despreza todos. Desafie o seu reinado arrogante.','El rey desprecia a todos. Desafía su arrogante dominio.'],
 envyIntro:['窺視之子','窥视之子','The Watching Child','覗き見る子','엿보는 아이','A Criança que Espia','El Niño que Espía'],
 envyLore:['幽林裡的孩子，窺視著不屬於自己的幸福。','幽林里的孩子，窥视着不属于自己的幸福。','A child in the dark woods watches happiness that belongs to others.','暗い森の子は、他人の幸せを覗き見る。','어두운 숲의 아이는 남의 행복을 엿봅니다.','Uma criança no bosque escuro espreita a felicidade dos outros.','Un niño en el bosque oscuro observa la felicidad ajena.'],
};
const nameKeys=['crazyGreed','sinPride','sinEnvy','sinLust','sinGluttony','sinSloth','sinWrath'];
// Existing names stay canonical; the old Pride/Envy two-language fallback gets faithful demo translations.
export function tr(lang,key){const row=rows[key];return row?row[Math.max(0,LANGS.indexOf(lang))]:translate(lang,key);}
export function bossName(lang,index){return tr(lang,nameKeys[index]);}
export function bossIntro(lang,id){return tr(lang,id==='greed'?'crazyDealer':id+'Intro');}
export function bossLore(lang,id){return tr(lang,id==='greed'?'crazyGreedLore':id+'Lore');}
export function pixelFont(lang){return ({'zh-Hant':'PixelHant','zh-Hans':'PixelHans',ja:'PixelJa',ko:'PixelKo'})[lang]||'PixelLatin';}
