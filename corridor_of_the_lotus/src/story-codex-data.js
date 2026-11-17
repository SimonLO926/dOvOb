/**
 * Story scripts, interactive lore dialogues, archive codex entries, and Final Choices (A/B/C)
 * for Corridor of the Lotus (蓮島迴廊 / 澳門時空旅人：蓮島三紀).
 *
 * Strict narrative canon compliance enforced per era & secrecy timeline across chapters 1..12,
 * interactive lore entries, codex records, and three final endings (A/B/C).
 */

export const CHAPTER_STORIES = {
  1: {
    intro: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '十七時五十三分。培正 A 座行政樓的薄荷綠走廊泛起銅鏽味，石階頂端雙開木門前的紅黑白綠六角星陣眼正在倒轉微光。',
      },
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '七年前盧辰十歲失蹤那晚，春草堂手記裡只有一句：「當五紀裂隙重疊於蓮島，凡血脈所持之器，將逆時鐘引路。」',
      },
      {
        speakerId: 'narrator',
        speakerName: '鏡海旁白',
        text: '青石廊道在暮色中斷成懸崖。調整你的視角角度，讓斷裂的走廊與紅牆牌樓重新連成一線。',
      },
    ],
    midResonance: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '就是這個角度！虛空中的紅牆牌樓與青石板路完美重疊了——那道古銅短劍的共鳴正指向門廊深處。',
      },
      {
        speakerId: 'narrator',
        speakerName: '鏡海旁白',
        text: '轉角陰影裡忽然閃過半秒冷青色殘影，一名戴面罩的黑影人隔空投下一道電流印記後便消隱無蹤。',
      },
    ],
    outro: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '六角星核心亮起白金色光幕，母親藏在手記裡的銅鑰匙也燙了起來……等我，盧辰，我一定會找到你。',
      },
    ],
  },

  2: {
    intro: [
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '海風鹹澀，媽閣岬外還沒有後世的填海長堤。一四八八年海難那夜，林家兄弟將我從礁石拖上岸，海生更為護我而沉入怒海。',
      },
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '我胸口這串海藍琉璃珠鏈，與腹中已有四個月身孕的阿珍相繫。無論歷經多少風浪，我們這一脈的血必會守住這座海灣。',
      },
    ],
    midResonance: [
      {
        speakerId: 'ajan',
        speakerName: '阿珍',
        text: '阿方索！洋船石前的潮位已經褪開了，你看那尊娘媽廟石壇——鐘擺恰好停在十七時五十三分的光影裡！',
      },
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '第一重奇蹟「媽祖定海珠」在掌心甦醒了！海濤分開一條石路，連同內港魚欄梁師傅提過的醉龍預兆也在礁壁間隱約回響。',
      },
    ],
    outro: [
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '媽閣神火為我照亮通往大三巴山崗的路。阿珍，請在海岸等我凱旋，我會護住我們這一脈延續下去。',
      },
    ],
  },

  3: {
    intro: [
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '一六二二年的聖保祿大教堂依然巍峨聳立，五層巴洛克石雕尚未經歷烈火劫灰。羅雅各神父與鄧玉函正趕抄星圖密卷。',
      },
      {
        speakerId: 'sofia_astral',
        speakerName: '金光虛影',
        text: '別怕，先祖。轉動二十八星宿渾天儀機關，借聖堂階梯的光影切入地下密室——時間只留給我們雙紫金祭壇燭的光陰。',
      },
    ],
    midResonance: [
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '這道跨越四百年的金色女聲為何如此熟悉……星宿橋已經升起，切換角度便能看見通往地宮的隱形石階。',
      },
    ],
    outro: [
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '烏鴉守衛退入暗巷，蓮島星圖密卷已經到手！密卷末頁的指針正定格在「〇五：五三」——下一站是大炮台！',
      },
    ],
  },

  4: {
    intro: [
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '一六二二年六月二十四日。十三艘荷蘭戰艦已逼近海面，大炮台尚未徹底完工，高牆外圍仍架滿木竹棚架。',
      },
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '羅雅各神父說，就算只有一尊紅衣古炮，只要抓準山崖與竹棚交錯的幾何視角，也能讓天火傾瀉敵艦之上！',
      },
    ],
    midResonance: [
      {
        speakerId: 'narrator',
        speakerName: '鏡海旁白',
        text: '炮火震動全城，荷蘭旗艦彈藥艙應聲炸裂，十三艘戰艦潰不成軍，正如《Élie Ripon 傭兵手記》所載的六月廿四神蹟。',
      },
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '第二重奇蹟「聖若翰金斗篷」化作護盾，可樓梯頂端閃過一個戴面具的黑甲劍客！他的刃鋒竟帶著詭異的青藍冷光……',
      },
    ],
    outro: [
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '神秘面具人留下一塊從未來戰甲剝落的合金碎片後躍入時空裂縫。我把這枚殘片妥善封入炮台磚隙，留待未來後裔相認之日。',
      },
    ],
  },

  5: {
    intro: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '一八〇八年的東望洋被濃白海霧吞沒……這裡真的沒有燈塔！只有純樸低矮的石砌砲台與若隱若現的英艦輪廓。',
      },
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '終於實質與妳並肩站在同一個世紀！但霧中棧橋年久斷裂，必須有一人穩住伽思欄重秤機關，另一人借視角交錯穿霧過橋。',
      },
    ],
    midResonance: [
      {
        speakerId: 'old_man',
        speakerName: '白髮老人',
        text: '年輕人別急著沿大道衝上去。看我手裡這塊停在五時五十三分的懷錶——霧最深處的青苔小徑，才是你們真正要走的斜坡。',
      },
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '謝謝老先生指路！可這位自稱路過的白髮老人，為何會在封鎖的軍管霧崖出現？還留下一份被人刻意刪除的炮台拆毀命令……',
      },
    ],
    outro: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '霧梟的煙幕散去，面具劍客又朝一八三五年的火焰裂縫遁逃。阿方索，追上去！',
      },
    ],
  },

  6: {
    intro: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '大火剛吞沒了大三巴木構正殿，如今只餘一片焦黑莊嚴的前壁孤牆矗立在山坡前。正面四十五度看去，前壁徹底堵住了通往崗頂的路。',
      },
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '等一等——若我們換個角度觀看這片牌坊孤壁，它會不會反而成為跨向崗頂教堂的石橋？火光中還有顆星核尚未被焚毀！',
      },
    ],
    midResonance: [
      {
        speakerId: 'old_man',
        speakerName: '白髮老人',
        text: '兩位，這支紫金蠟燭是我剛才拾到的。有些歷史，要親手送回去，才算保存；莫等餘燼冷透才追悔呀。',
      },
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '十九響禮炮為林則徐將軍巡視澳城而鳴！第四重奇蹟「大耶穌聖像復活之力」點亮了崗頂石階！',
      },
    ],
    outro: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '焚卷官退散，但我撿到一張晚發了三分鐘的電報稿……執行者明明一直在暗中手下留情。',
      },
    ],
  },

  7: {
    intro: [
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '一八四九年的蓮花莖仍是一道隨潮汐浮沉的沙堤，遠處矗立著清代中式歇山頂的舊關閘汛營——尚未出現後來那座西式凱旋門。',
      },
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '前方還連著一八九五年柿山大疫的混亂殘影！那尊戴面具的劍客在關閘前竟持槍猶豫，沒有扣下扳機……',
      },
    ],
    midResonance: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '第三重奇蹟「哪吒蓮火降疫之力」驅散了疫霧！在春草堂舊址的娛園密室裡，我竟然看見先人親手埋下的六角星鐵匣！',
      },
      {
        speakerId: 'old_man',
        speakerName: '白髮老人',
        text: '喝口涼茶歇歇腳啦。五時五十三分的潮退得剛好，兩位要把握這片沙堤還沒重新淹沒之前的空隙呢。',
      },
    ],
    outro: [
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '聽風者瓦解，但那名面具人望著孩童時明顯遲疑了半拍——他究竟是誰？為何那雙眼神如此沉痛？',
      },
    ],
  },

  8: {
    intro: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '一九一〇年九澳狂風暴雨夜。海盜古寨堡外礁石險峻，此時還沒有後世所建的聖方濟各教堂與紀念碑，唯有風雨中的斷裂木棧橋。',
      },
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '海盜擄走了十八名學童！我來駐守海崖火把機關照亮礁石路，妳沿著棧橋逼近九澳鯊與那名面具頭目！',
      },
    ],
    midResonance: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '所有十八名學童已經安全轉移到岸邊！我截獲了敵方軍官發出的質詢無線電——有人正暗中阻止他們傷害無辜。',
      },
      {
        speakerId: 'narrator',
        speakerName: '鏡海旁白',
        text: '暴雨如注，面具人立於九澳斷橋盡頭舉刃相向。轉至一百三十五度正對棧橋，為這場宿命對決劃下破曉！',
      },
    ],
    outro: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '鐺——！古銅短劍劈碎了冷鋼面具！這不可能……黑髮頂端那撮金色挑染、還有眉眼間熟悉的輪廓……你是 Zero-7？！你是……盧辰？！',
      },
      {
        speakerId: 'ryan',
        speakerName: '盧辰',
        text: '……家姐？那個名字在我的腦機記憶扇區被鎖死了整整幾十年……原來我一直在守護的，是你一直沒有放棄找回來的家！',
      },
    ],
  },

  9: {
    intro: [
      {
        speakerId: 'ryan',
        speakerName: '盧辰',
        text: '重回二〇二六年的東望洋跑道，風聲還是七年前的模樣。母親在電話另一端泣不成聲，但我還得先助你們打開一九三一年防空洞的三層密封門。',
      },
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '防空洞需要 5.53Hz 的精密頻率共振——絕不是誘餌的 5.00Hz！盧辰，由你守住腦機調頻滑軌，我來沿螺旋拱廊登頂！',
      },
    ],
    midResonance: [
      {
        speakerId: 'old_man',
        speakerName: '和藹老人',
        text: '兩姐弟又在盧廉若公園九曲橋重聚了嗎？……還在找人嗎？有時要找的答案，正安安靜靜躲在五點五十三的餘音裡。',
      },
      {
        speakerId: 'mother',
        speakerName: '盧母',
        text: '阿辰、曉晴……媽媽一直把門口的燈留著。你們姐弟一定要平平安安帶著這段歷史一起回家！',
      },
    ],
    outro: [
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '三層防空洞核心同時共鳴！借著二〇二六年的金色裂隙，我也終於跨越百年來到你們身邊。澳門三紀英雄，正式聚首！',
      },
    ],
  },

  10: {
    intro: [
      {
        speakerId: 'ryan',
        speakerName: '盧辰',
        text: '在內港魚欄從梁氏後人梁九手裡踐約承接第五重奇蹟「醉龍聚氣之力」後，五塊蓮島神蹟徽記終於全部集齊！',
      },
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '盧辰還用阿方索在一六二二年留下的戰甲合金碎片，為我鍛造出能擊穿賽博裝甲的雙槍。現在，穿過內港踏上新城 A 區與港珠澳海底對撞環！',
      },
    ],
    midResonance: [
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '好壯觀的跨海長橋與人工島……儘管我們身處不同年代，可三雙腳步踩同一條石路時的回聲卻完全一致！',
      },
      {
        speakerId: 'ryan',
        speakerName: '盧辰',
        text: '對撞環中控台剛吐出一份高階權限指令，幕後署名的印鑑只有兩個字——「日寺」！究竟誰能同時支配二〇二六與二〇七七的能源網？',
      },
    ],
    outro: [
      {
        speakerId: 'ryan',
        speakerName: '盧辰',
        text: '有人匿名把新城 A 區的精確設防圖透給了我們——那個多次違抗指令的人，一直在替我們留後路。下一個座標是二〇七七！',
      },
    ],
  },

  11: {
    intro: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '這就是二〇七七年的澳門嗎……外港與人工島已化為垂直霓虹天穹樞紐，而整片歷史城區卻像玻璃標本般被金色光學禁飛結界封在原貌裡。',
      },
      {
        speakerId: 'ryan',
        speakerName: '盧辰',
        text: '玻璃幕牆後的系統首腦「日寺」剛下達死命令：必須活捉我，卻嚴禁任何衛隊傷及阿方索與家姐半根汗毛……為什麼要這樣偏執地保護你們？',
      },
    ],
    midResonance: [
      {
        speakerId: 'corvo',
        speakerName: '烏鴉（Corvo）',
        text: '聽著，在長廊第十二天鐘聲敲響前離開這座樞紐。把開始消散的鑰匙放回底座，別讓那位執念太深的首腦親手毀掉全城。',
      },
    ],
    outro: [
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '樞紐玻璃後的身影留下了一個微弱掌印……所有時空正被拖回培正 A 座行政樓的六角星原點！',
      },
    ],
  },

  12: {
    intro: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '一六二二的海風、二〇二六的暮光與二〇七七的賽博霓虹在培正六角星上空徹底重疊！各自守住浮島石印，互相撐開通往中央蓮花祭壇的天橋！',
      },
      {
        speakerId: 'ryan',
        speakerName: '盧辰',
        text: '我破解了剛奪回的羊皮卷最高授權密令——印鑑上完整浮現了三個字：盧日寺！而剛才遞給我的五時五十三分懷錶……竟和霧夜、火災與九曲橋那位老人手裡的完全一樣！',
      },
    ],
    midResonance: [
      {
        speakerId: 'luzhisi',
        speakerName: '盧日寺',
        text: '你們終於三代同台了。沒錯，無論是提燈指路的白髮老人，還是建立金色結界的「日寺」，都是我——盧日寺！來自一個盧辰再也沒有回家、摯愛在時空崩塌中消散的平行末路中的第十一代後人。',
      },
      {
        speakerId: 'corvo',
        speakerName: '烏鴉（Corvo）',
        text: '指揮權我接管了。從松山刪檔、一九響電報延遲、蓮花莖停火、九澳救童到 A 區密圖——我違令五次，只為等這一天告訴你：鎖在標本裡的澳門早已失去靈魂！',
      },
    ],
    outro: [
      {
        speakerId: 'luzhisi',
        speakerName: '盧日寺',
        text: '日相與寺相已然崩解，五重神蹟在十七時五十三分交匯於蓮花壇心。三紀的英雄啊——該由你們親手決定這座城的未來了。',
      },
    ],
  },
};

export const LORE_DIALOGUES = {
  zero7_ch1: {
    title: '培正長廊一閃而逝的黑影',
    codexUnlockId: 'clue_zero7_silhouette',
    postEffect: {
      type: 'flash_zero7_vanish',
      targetNpcId: 'zero7_ch1',
      propType: 'zero7_silhouette',
      spawnProp: 'cyan_arc_mark',
      triggerOnPageIndex: null,
      triggerOnClose: true,
    },
    pages: [
      {
        speakerId: 'zero7',
        speakerName: '戴面罩的黑影',
        text: '（青藍電弧在薄荷綠拱廊一閃即逝）時空共鳴座標已鎖定。此處不是妳該涉足的禁區——在一切尚未倒轉之前停手。',
      },
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '剛才這名黑影身上的氣息……為何竟有種似曾相識的溫度？一眨眼間，他只留下一道青藍色電流殘印便消失在走廊盡頭。',
      },
    ],
  },

  ship_rock_ch2: {
    title: '媽閣洋船石摩崖石刻',
    codexUnlockId: 'clue_ama_ship',
    pages: [
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '岩石上刻著朱紅帆船與「利涉大川」四字。每當海霧濃得看不見歸途，船影總會亮起淡淡金光，指明暗礁之外的活水航道。',
      },
    ],
  },

  ajan_ch2: {
    title: '阿珍的臨別珠鏈',
    codexUnlockId: 'char_ajan',
    pages: [
      {
        speakerId: 'ajan',
        speakerName: '林海珍（阿珍）',
        text: '這串海藍琉璃珠鏈是我一針一線繞好的，你戴在胸前去守城。孩子剛有四個月胎動，你答應過我，打完仗就回媽閣海邊聽潮。',
      },
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '我起誓，阿珍。只要這座海灣一日未安寧，我的長銃與劍便一日不出鞘空回；待風波平定，我們這一脈必在蓮花島安居。',
      },
    ],
  },

  couple_1622: {
    title: '石椅刻痕・一六二二的約定',
    codexUnlockId: 'same_place_people',
    pages: [
      {
        speakerId: 'couple_1622',
        speakerName: '洛維＆施迪（1622）',
        text: '洛維：我用碎石在長椅角刻了一道淺印子。施迪，等紅毛船退了、城太平了，我還想和你站在這塊石頭邊看同一片海呢。',
      },
      {
        speakerId: 'couple_1622',
        speakerName: '施迪（1622）',
        text: '那你刻深一點呀！別讓海水一沖就不見了，以後不管過幾百年，我們就在同一個位置再遇見。',
      },
    ],
  },

  astral_ch3: {
    title: '星圖室裡的金色幻影',
    codexUnlockId: 'clue_astral_resonance',
    postEffect: {
      type: 'astral_dissolve',
      targetNpcId: 'astral_ch3',
      propType: 'sofia_astral',
      spawnProp: null,
      triggerOnPageIndex: null,
      triggerOnClose: true,
    },
    pages: [
      {
        speakerId: 'sofia_astral',
        speakerName: '金光虛影',
        text: '四百年後的血脈聽見您的心跳了，阿方索！星圖密卷右下角標著「05:53」的刻度——請順著二十八宿銅環把燭光傳下去！',
      },
    ],
  },

  corvo_ch3: {
    title: '地宮暗影的初次交鋒',
    codexUnlockId: 'char_corvo',
    postEffect: {
      type: 'shadow_retreat',
      targetNpcId: 'corvo_ch3',
      propType: 'corvo_figure',
      spawnProp: 'raven_feather_ember',
      triggerOnPageIndex: null,
      triggerOnClose: true,
    },
    pages: [
      {
        speakerId: 'corvo',
        speakerName: '烏鴉守衛',
        text: '奉令攔截一切擾動星圖密卷之人。但……為何這名葡萄牙青年手裡的琉璃珠，會出現在司令部核心檔案的禁忌圖片裡？',
      },
    ],
  },

  zero7_ch4: {
    title: '炮台竹棚上的黑甲面具人',
    codexUnlockId: 'clue_zero7_silhouette',
    postEffect: {
      type: 'rift_leap_drop_shard',
      targetNpcId: 'zero7_ch4',
      propType: 'zero7_silhouette',
      spawnProp: 'future_armor_shard',
      triggerOnPageIndex: 1,
      triggerOnClose: false,
    },
    pages: [
      {
        speakerId: 'zero7',
        speakerName: '神秘面具人',
        text: '（冷酷合成音）……時空偏差值超出閾值。執行清場——但為何目標握劍的手勢，讓我的視覺感測器出現 0.5 秒資料紊亂？',
      },
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '這名未來劍客明明有機會直取我心口，劍尖卻偏開了半寸，只留下這塊泛著青藍微光的金屬甲片。',
      },
    ],
  },

  ajan_ch4: {
    title: '砲火中的民居禱聲',
    codexUnlockId: 'char_ajan',
    pages: [
      {
        speakerId: 'ajan',
        speakerName: '林海珍（阿珍）',
        text: '望廈的街坊婦孺都躲進地窖了。你放心去守住大炮台竹棚，紅衣炮響起時，我們在山下聽著聲音就知道你在。',
      },
    ],
  },

  old_man_ch5: {
    title: '霧夜提燈的五時五十三分懷錶',
    codexUnlockId: 'clue_oldman_watch',
    postEffect: {
      type: 'mist_vanish',
      targetNpcId: 'old_man_ch5',
      propType: 'old_man_553',
      spawnProp: null,
      triggerOnPageIndex: 1,
      triggerOnClose: false,
    },
    pages: [
      {
        speakerId: 'old_man',
        speakerName: '白髮老人',
        text: '（撥開銀殼懷錶，指針靜靜停在 5:53）霧這麼大，官道早就塌了。沿著左邊那道青苔小徑上去吧，炮台守軍在等你們。',
      },
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '請問老伯怎麼會有一隻和培正鐘樓停在同一時刻的懷錶？老伯？……霧一散，人竟走得無影無蹤。',
      },
    ],
  },

  corvo_ch5: {
    title: '被刪除的伽思欄拆毀密令',
    codexUnlockId: 'clue_corvo_5disobey',
    pages: [
      {
        speakerId: 'corvo',
        speakerName: '烏鴉內部備忘（1808）',
        text: '【日誌殘頁】原定炸毀東望洋西南砲台以斷後路，但執行官於凌晨五時五十三分手動刪除了爆破序列。備註僅有一行：「城不能塌。」',
      },
    ],
  },

  old_man_ch6: {
    title: '烈焰灰燼前的還燭之言',
    codexUnlockId: 'clue_oldman_watch',
    postEffect: {
      type: 'drop_lit_candle_vanish',
      targetNpcId: 'old_man_ch6',
      propType: 'old_man_553',
      spawnProp: 'lit_altar_candle',
      triggerOnPageIndex: null,
      triggerOnClose: true,
    },
    pages: [
      {
        speakerId: 'old_man',
        speakerName: '白髮老人',
        text: '這支未燃盡的紫金祭壇燭差點被火舌捲走，還給你們。有些歷史，要親手送回去，才算保存；單靠鎖在箱裡，算不上活著。',
      },
    ],
  },

  corvo_ch6: {
    title: '延遲三分鐘發出的電報',
    codexUnlockId: 'clue_corvo_5disobey',
    pages: [
      {
        speakerId: 'corvo',
        speakerName: '烏鴉攔截記錄（1839）',
        text: '【加密抄本】林公巡視的禮炮時刻碼被人為延遲了整整三分鐘，碼頭苦力因此躲過截殺火線。調度簽署代號：C-01。',
      },
    ],
  },

  old_man_ch7: {
    title: '涼茶攤邊的五時五十三分茶客',
    codexUnlockId: 'clue_oldman_watch',
    postEffect: {
      type: 'drop_herbal_tea_vanish',
      targetNpcId: 'old_man_ch7',
      propType: 'old_man_553',
      spawnProp: 'herbal_tea_bowl',
      triggerOnPageIndex: null,
      triggerOnClose: true,
    },
    pages: [
      {
        speakerId: 'old_man',
        speakerName: '白髮老人',
        text: '瘟疫終會退去，就像蓮花莖的潮水一樣。五時五十三分了——你們趁著乾爽快去娛園尋那盒先人留下的鐵匣啦！',
      },
    ],
  },

  corvo_ch7: {
    title: '未落筆的行刑令與猶豫火槍',
    codexUnlockId: 'clue_corvo_5disobey',
    pages: [
      {
        speakerId: 'corvo',
        speakerName: '關閘檔案殘件（1849）',
        text: '【機密批註】奉命清洗關閘周邊目擊者的執行令從未蓋印生效；同時報告記載黑色面具尖兵於民眾撤離時兩度收槍止步。',
      },
    ],
  },

  corvo_ch8: {
    title: '九澳暴雨中的異議電訊',
    codexUnlockId: 'clue_corvo_5disobey',
    pages: [
      {
        speakerId: 'corvo',
        speakerName: '攔截通訊頻道（1910）',
        text: '「指揮部！為何連十八名手無寸鐵的學童也要當作人質籌碼？！我已暗中斷開寨堡東側閘鎖——放人撤離！」',
      },
    ],
  },

  zero7_ch8: {
    title: '暴雨棧橋盡頭的面具殺意',
    codexUnlockId: 'clue_zero7_silhouette',
    postEffect: {
      type: 'unmask_to_ryan',
      targetNpcId: 'zero7_ch8',
      propType: 'zero7_silhouette',
      revealActor: 'ryan',
      spawnProp: 'shattered_mask_shards',
      triggerOnPageIndex: 1,
      triggerOnClose: false,
    },
    pages: [
      {
        speakerId: 'zero7',
        speakerName: '黑甲面具人',
        text: '（刃鋒與青藍電弧交鳴）不要再往前一步！我的記憶核心只寫著清除目標……可為何看見妳舉起古銅短劍的瞬間，指令會自動停擺？！',
      },
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '這招破綻我太熟悉了——當年培正禮堂門前，你小時候拿著木尺也是這樣出手的！看劍！！',
      },
    ],
  },

  couple_2026: {
    title: '長椅貼紙・二〇二六的椰汁西米露',
    codexUnlockId: 'same_place_people',
    pages: [
      {
        speakerId: 'couple_2026',
        speakerName: '西米露＆加利（2026）',
        text: '加利：別老對著海風發呆啦，我這杯椰汁西米露都快被你拍進底片裡八百次了！這張老木椅左腳好像真有幾道奇怪的舊刻痕呢。',
      },
      {
        speakerId: 'couple_2026',
        speakerName: '西米露（2026）',
        text: '好啦！這張相片就叫《同一個位置的人》——不管這座城市翻修幾次，這張椅子的海風永遠留給我們。',
      },
    ],
  },

  old_man_ch9: {
    title: '九曲橋上的低語',
    codexUnlockId: 'clue_oldman_watch',
    postEffect: {
      type: 'drop_pocket_watch_vanish',
      targetNpcId: 'old_man_ch9',
      propType: 'old_man_553',
      spawnProp: 'pocket_watch_553',
      triggerOnPageIndex: 1,
      triggerOnClose: false,
    },
    pages: [
      {
        speakerId: 'old_man',
        speakerName: '和藹老人',
        text: '兩姐弟終於會合啦？還在找人嗎？……不用多謝我，能見你們平平安安站在一起，比什麼黃金時代都要珍貴。',
      },
      {
        speakerId: 'ryan',
        speakerName: '盧辰',
        text: '等等——這位老伯留在九曲橋石欄上的銀殼懷錶，指針怎麼也停在五時五十三分？一轉眼，他人竟已隱入湖畔荷風之中。',
      },
    ],
  },

  liang9_ch10: {
    title: '內港魚欄・梁氏後人梁九與醉龍龍頭木雕',
    codexUnlockId: 'miracle_drunk_dragon',
    pages: [
      {
        speakerId: 'liang9',
        speakerName: '梁氏後人・梁九',
        text: '三位，梁家等你們很久了。先祖梁師傅留下的百年醉龍龍頭木雕，龍頭在，約就在——這份「醉龍聚氣之力」今日替先祖踐約傳予你們，別讓對岸的鐵怪物吞掉內港！',
      },
    ],
  },

  signature_ch10: {
    title: '港珠澳對撞環的「日寺」密印',
    codexUnlockId: 'clue_mystery_signature',
    pages: [
      {
        speakerId: 'ryan',
        speakerName: '盧辰',
        text: '看這組海底粒子加速環的終端授權印章——只有兩個拆開的古體字：「日寺」。系統卻把它列為最深層的最高機密。',
      },
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '日、寺……合起來就是一個「時」字。究竟誰在背後操縱這一切？……不對，現在先搶下對撞核心穩定度再追查真相！',
      },
    ],
  },

  corvo_ch10: {
    title: '匿名送來的 A 區設防藍圖',
    codexUnlockId: 'clue_corvo_5disobey',
    pages: [
      {
        speakerId: 'corvo',
        speakerName: '匿名線人筆記（2026）',
        text: '第五次也是最後一次暗助：隨信附上新城 A 區對撞閘門的所有死角頻段。切勿回頭查明寄件者，二〇七七的天穹閘口很快便會對準你們。',
      },
    ],
  },

  couple_2077: {
    title: '鈦金護欄・二〇七七的銅掛鎖',
    codexUnlockId: 'same_place_people',
    pages: [
      {
        speakerId: 'couple_2077',
        speakerName: 'K＆N（2077）',
        text: 'K：N，這把舊銅掛鎖是我從歷史城區遺檔裡淘來的複製品。金色光學結界外面雖然滿天全息霓虹，但我還是更想和妳看真的夕陽。',
      },
      {
        speakerId: 'couple_2077',
        speakerName: 'N（2077）',
        text: '總有一天這扇結界大門會重新向真實的海風敞開的。不管這地方變成石凳、木椅還是鈦金欄杆，我都會在這裡等你。',
      },
    ],
  },

  corvo_ch11: {
    title: '天穹下層長廊的最後警告',
    codexUnlockId: 'char_corvo',
    pages: [
      {
        speakerId: 'corvo',
        speakerName: '烏鴉（Corvo）',
        text: '把開始消散的鑰匙放回底座吧。在時空崩塌踏入第十二天之前，去培正六角星原點——那位坐在玻璃後面的人，一直都在等你們打破他的執念。',
      },
    ],
  },

  luzhisi_ch12: {
    title: '盧日寺：日相・寺相與五時五十三分',
    codexUnlockId: 'char_luzhisi',
    pages: [
      {
        speakerId: 'luzhisi',
        speakerName: '盧日寺',
        text: '對，我就是盧日寺。那個曾用「日寺」下達冷血封城令的人是我，那個在東望洋濃霧與大三巴烈火前遞出五時五十三分懷錶的白髮老人……也是我。',
      },
      {
        speakerId: 'luzhisi',
        speakerName: '盧日寺',
        text: '我來自原本的未來——在那條沒有修正的時間線上，盧辰永遠失蹤，我心愛的人也在混亂崩壞中化為塵埃。我不願再失去任何一片澳門，才想把五個時代鎖進永不凋零的金色標本裡。',
      },
    ],
  },

  corvo_ch12: {
    title: '烏鴉的五次倒戈誓詞',
    codexUnlockId: 'char_corvo',
    pages: [
      {
        speakerId: 'corvo',
        speakerName: '烏鴉（Corvo）',
        text: '長官，您一直知道是我吧。松山刪爆破令、林公巡城延遲電報、關閘拒絕批印、九澳暗放學童、A 區洩露藍圖——五次違令，今天我站到三代英雄這邊來護城！',
      },
    ],
  },

  couple_ch12_cameo: {
    title: '跨越四百五十年的重影',
    codexUnlockId: 'same_place_people',
    pages: [
      {
        speakerId: 'couple_1622',
        speakerName: '洛維＆施迪 / 西米露＆加利 / K＆N',
        text: '三個世紀的石刻、相片底片與銅掛鎖，在這一刻重合成同一道海岸線——「有些人，每一個時代，都會在同一個地方相遇。」',
      },
    ],
  },
};

export const CODEX_ENTRIES = {
  chapters: [
    { id: 'ch01', chapterId: 1, title: '一紀：培正六角星的召喚', era: '2026', summary: '盧曉晴於培正 A 座行政樓紅黑白綠六角星門廊啟動 17:53 逆時鐘共鳴，追尋失蹤七年的弟弟盧辰。' },
    { id: 'ch02', chapterId: 2, title: '二紀：洋船石與媽祖的呼喚', era: '1488 / 1622', summary: '葡人先祖阿方索被林家兄弟救上岸並與阿珍結下血脈盟約，於媽閣岬覺醒第一重奇蹟「媽祖定海珠」。' },
    { id: 'ch03', chapterId: 3, title: '三紀：聖保祿的星圖密卷', era: '1622', summary: '深入未焚毀之完整聖保祿大教堂，借未來金光虛影與二十八宿渾天儀奪回《蓮島星圖密卷》。' },
    { id: 'ch04', chapterId: 4, title: '四紀：六月廿四・大炮台神蹟之日', era: '1622-06-24', summary: '大炮台竹棚紅衣炮陣擊潰十三艘荷艦，獲第二重奇蹟「聖若翰金斗篷」並拾獲神秘面具人的未來甲片。' },
    { id: 'ch05', chapterId: 5, title: '五紀：霧鎖東望洋與英艦暗影', era: '1808', summary: '阿方索與盧曉晴實質會合於無燈塔之松山古砲台，得白髮老人於 5:53 指引青苔小徑並發現刪檔軍令。' },
    { id: 'ch06', chapterId: 6, title: '六紀：紅蓮業火與十九響禮炮', era: '1835 / 1839', summary: '搶救大三巴火海星核並以牌坊孤壁化作天橋，接過白髮老人送還的祭壇燭覺醒第四重奇蹟「大耶穌聖像復活之力」。' },
    { id: 'ch07', chapterId: 7, title: '七紀：蓮花莖硝煙與春草堂之約', era: '1849 / 1895', summary: '穿過清代歇山頂舊關閘與柿山大疫，覺醒第三重奇蹟「哪吒蓮火降疫之力」，於娛園密室見證血脈鐵匣。' },
    { id: 'ch08', chapterId: 8, title: '八紀：九澳狂瀾與海盜迷城', era: '1910', summary: '暴雨夜救出十八名學童，並於無教堂年代的九澳斷橋劈碎 Zero-7 面具——赫然揭示其真容正是長大後的親弟盧辰！' },
    { id: 'ch09', chapterId: 9, title: '九紀：東望洋極速與松山防空洞', era: '2026', summary: '盧辰回歸並與母親電話涙別，以 5.53Hz 頻率打通 1931 三層防空洞迎來阿方索跨越世紀的聚首。' },
    { id: 'ch10', chapterId: 10, title: '十紀：人工島暗湧與金光大道大劫案', era: '2026', summary: '於內港魚欄由梁氏後人梁九踐約承接第五重奇蹟「醉龍聚氣之力」，重鑄雙槍闖入港珠澳對撞環並查獲「日寺」密印。' },
    { id: 'ch11', chapterId: 11, title: '十一紀：歷史城區最後結界與天穹樞紐港', era: '2077', summary: '踏入金光結界封存的二〇七七古街與天穹樞紐，在烏鴉五度警告下直逼幕後「日寺」主軸。' },
    { id: 'ch12', chapterId: 12, title: '十二紀：蓮島三紀・時間大崩壞的終局', era: '三紀同台', summary: '三代同登培正六角星祭壇，揭曉白髮老人與日寺皆為第十一代後人盧日寺；烏鴉倒戈護陣，共迎終極抉擇。' },
  ],

  miracles: [
    { id: 'miracle_mazu', slot: 1, name: '媽祖定海珠', unlockChapter: 2, description: '1488/1622 媽閣海岸覺醒。平息怒海與時空湧浪，護持海上通行與潮汐定錨。' },
    { id: 'miracle_st_john', slot: 2, name: '聖若翰金斗篷', unlockChapter: 4, description: '1622-06-24 大炮台竹棚神蹟覺醒。化作神聖抗炮火護盾與天火增幅。' },
    { id: 'miracle_natcha', slot: 3, name: '哪吒蓮火降疫之力', unlockChapter: 7, description: '1895 柿山疫潮覺醒。以哪吒三昧蓮火淨化時空瘟瘴與負向迷霧。' },
    { id: 'miracle_great_jesus', slot: 4, name: '大耶穌聖像復活之力', unlockChapter: 6, description: '1835/1839 崗頂聖壇覺醒。令斷裂之古蹟、殘燭與重傷戰線重燃生機。' },
    { id: 'miracle_drunk_dragon', slot: 5, name: '醉龍聚氣之力', unlockChapter: 10, description: '1622 內港魚欄梁師傅伏筆立約、2026 梁氏後人梁九踐約圓滿。匯聚全城煙火生氣，補全五重奇蹟終陣。' },
  ],

  characters: [
    {
      id: 'char_afonso',
      name: '阿方索（Afonso）',
      era: '1622（跨紀先行者）',
      bio: '一四八八年獲林家兄弟搭救的葡人騎士兼銃手，為阿珍腹中骨肉立誓守望澳門海灣，手持火銃、西洋劍與先祖海藍琉璃珠鏈。',
    },
    {
      id: 'char_ajan',
      name: '林海珍（阿珍）',
      era: '1622 媽閣漁村',
      bio: '林家妹妹、阿方索的摯愛，於一六二二年懷胎四月。她是這座海濱城脈真正延續下來的母系源頭。',
    },
    {
      id: 'char_sofia',
      name: '盧曉晴（Sofia）',
      era: '2026 培正中學',
      bio: '身披紅藍滾邊校服外套與左胸六角星徽的姐姐。憑藉古銅短劍與後來由弟鍛造的雙槍，在無數斷崖視角中尋回失落血脈。',
    },
    {
      id: 'char_ryan',
      name: '盧辰（Ryan）',
      era: '2019 失蹤 -> 2077 戰場改造 -> 2026 回歸',
      bio: '二零一九年十歲失蹤的親弟，在未來被植入腦機系統與青藍脈衝迴路，黑髮頂端留有一撮金髮。九澳破面具後找回人性與家姐並肩作戰。',
    },
    {
      id: 'char_corvo',
      name: '烏鴉（Corvo）',
      era: '跨時代近衛指揮官',
      bio: '表面冷峻的精銳執法者，實則在漫長任務中暗自違令五次（松山、林則徐禮炮、蓮花莖、九澳十八學童、A 區藍圖），最終倒戈站在生靈一方。',
    },
    {
      id: 'char_luzhisi',
      name: '盧日寺（白髮老人 / 日寺）',
      era: '遙遠未修正未來（第 11 代後人）',
      bio: '唯一僅在終局才揭曉全名的宿命對手。既是提著 5:53 懷錶暗中照亮青苔小徑的白髮老人，亦是建構金色標本結界的「日寺」。在失去摯愛後試圖永遠定格澳門。',
    },
  ],

  clues: [
    { id: 'clue_ama_ship', title: '媽閣洋船石印記', text: '古帆船摩崖石刻與 17:53 的潮汐共振互相呼應。' },
    { id: 'clue_astral_resonance', title: '紫金祭壇燭與 05:53', text: '聖保祿地宮星圖卷首明示 05:53 為所有跨時空對準時刻。' },
    { id: 'clue_zero7_silhouette', title: '神秘面具劍客之刃', text: '大炮台與九澳雨夜出現的黑甲刺客，數次於關鍵時刻收刃半寸。' },
    { id: 'clue_oldman_watch', title: '永遠停在 5:53 的銀懷錶', text: '一八〇八、一八三五、一八九五與二〇二六皆曾出現的白髮老人，腕錶時刻分毫不差。' },
    { id: 'clue_corvo_5disobey', title: '執行官 C-01 的五次違令', text: '松山刪檔、延誤電報、未批行刑、放生九澳學童與洩露 A 區設防圖。' },
    { id: 'clue_mystery_signature', title: '海底對撞環「日寺」印記', text: '港珠澳對撞環核心調動指令僅留下古體「日寺」雙字。' },
  ],

  hidden: {
    id: 'same_place_people',
    title: '同一個位置的人',
    quote: '有些人，每一個時代，都會在同一個地方相遇。',
    eraRecords: [
      { era: '1622', location: '媽閣海邊石長椅', couple: '施迪（女）＆ 洛維（男）', token: '椅腳碎石深深刻痕' },
      { era: '2026', location: '同一位置木質長椅', couple: '西米露（男）＆ 加利（女）', token: '椰汁西米露杯與底片相機' },
      { era: '2077', location: '同座標鈦金觀景護欄', couple: 'K（男）＆ N（女）', token: '舊式銅掛鎖與真實夕陽之約' },
    ],
    unlockConditionText: '於媽閣礁石、盧廉若公園與二〇七七天穹古街分別與三對情侶交談即可解鎖隱藏圖鑑。',
  },
};

export const FINAL_ENDINGS = {
  A: {
    id: 'A',
    title: '結局 A：王者歸來・澳門靜止的晨昏',
    titleEn: 'Ending A: Return of the Guardians — Macau Eternal Dusk',
    subtitle: '五重奇蹟封死縫隙・各自回到安穩年代重逢之詩',
    subtitleEn: 'Five Miracles seal the temporal rift; each guardian returns gently to their own shore at 5:54.',
    pages: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '我們選擇用五重神蹟封死失控的時空縫隙，讓每一個時代回到它應有的河床。我牽著盧辰推開培正紅門外的夕陽回家，盧母在門廊擁抱我們的那一刻，七年的空缺終於補圓。',
      },
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '我踏回一六二二年的媽閣暖沙，卸下火銃與戰袍。林海珍——我的阿珍仍在椰影和紅帆旁等我，她腹中安然跳動的新生命成為澳門海灣最溫厚的一脈傳承，再也不必承受時空撕裂之苦。',
      },
      {
        speakerId: 'luzhisi',
        speakerName: '盧日寺',
        text: '你們選擇了最難、也最溫柔的歸途。既然盧辰平安歸來，我的末路時間線便已無須存在——看著手裡那枚停了數十年的 5:53 懷錶終於輕輕跳過 5:54，我也能放心微笑消散了。Peace at last—five fifty-four breaks the silent dusk.',
      },
    ],
  },

  B: {
    id: 'B',
    title: '結局 B：霓虹霸主・賭城新教父',
    titleEn: 'Ending B: Neon Sovereigns — Tri-Era Pact',
    subtitle: '拒絕離別・三代同體之永恆夜城',
    subtitleEn: 'Refusing separation, three generations stand united to govern the golden dome.',
    pages: [
      {
        speakerId: 'ryan',
        speakerName: '盧辰',
        text: '既然每一次安靜道別都要把血親隔開四百年，那我們就拒絕這個選項！三紀錨點在此合為一體——阿方索、家姐與我「三代同體」同時接管五時代的金色結界與地下脈衝！',
      },
      {
        speakerId: 'couple_2077',
        speakerName: 'K＆N（2077 結界外）',
        text: '歷史城區外側那道封鎖了半個世紀的金色大門轟然敞開！K 牽著 N 走出銅鎖欄杆，第一次在無阻隔的天穹霓虹與海風裡看清了整座活生生的賭城夜色。烏鴉靜靜立於天台，成為新秩序最忠誠的盾牌。',
      },
      {
        speakerId: 'afonso',
        speakerName: '阿方索',
        text: '就算改寫潮汐，我也要把林海珍留在身邊——在三代共治的平行領域裡，阿珍與我們未出世的孩子被安置在無災無戰的高山青宅，永受這座不夜城的紫金結界庇護，卻也永遠停留在我們交錯的雙重時間裡。',
      },
      {
        speakerId: 'luzhisi',
        speakerName: '盧日寺（對三代人的忠告）',
        text: '你們真的選擇接過我的王座了嗎？聽好這是我盧日寺留給三代同體者的最後忠告：「把整座城收進掌心換取永不別離的代價，就是你們自己從今往後都得替這座城揹負所有因果。若有一天發現繁華變成了金絲籠，莫忘最初你們曾是凡人。」Three eras fused—never parted, never free of weight.',
      },
    ],
  },

  C: {
    id: 'C',
    title: '結局 C：真結局・新世界清晨 5:54',
    titleEn: 'Ending C: True Finale — Dawn of the Reset World (05:54)',
    subtitle: '五重奇蹟突破奇點・宇宙時間加速重啟・五時五十四分無裂縫新晨',
    subtitleEn: 'Time accelerates past the 17:53 singularity; the universe folds into a pristine 05:54 morning where none are lost.',
    pages: [
      {
        speakerId: 'sofia',
        speakerName: '盧曉晴',
        text: '不是修補舊裂痕，也不是佔據永恆的黑夜——把媽祖、聖若翰、哪吒、大耶穌與醉龍五重奇蹟全部推過十七時五十三分的奇點！讓星辰、海潮與鐘擺極速加速至宇宙重啟的臨界點，將一六二二、二〇二六與二〇七七重新編織成沒有斷層與劫灰的新世界清晨！',
      },
      {
        speakerId: 'ryan',
        speakerName: '盧辰＆盧母',
        text: '時間風暴止息的一瞬，天邊正好亮起五時五十四分（5:54）的早春微曦。培正 A 座薄荷綠拱廊傳來清脆晨鐘，盧母微笑著一手挽著安然長大的盧辰、一手挽著盧曉晴，沿著從未發生任何失蹤案的荷蘭園大馬路踏上早市晨光。',
      },
      {
        speakerId: 'afonso',
        speakerName: '阿方索＆林海珍（阿珍）',
        text: '而在這條重寫後的一六二二年無憂晨光裡，媽閣洋船石前的海面平靜如鏡。阿方索緊緊握著林海珍（阿珍）與這一生一世重逢的手，兩人懷抱安然誕生的嬰兒望向清澈碧海——從此海灣只有潮起潮落，沒有戰火離別。',
      },
      {
        speakerId: 'luzhisi',
        speakerName: '盧日寺＆三代情侶＆烏鴉',
        text: '5:54 的鐘聲敲散最後一縷金沙：1622 的施迪與洛維、2026 的西米露與加利、2077 的 K 與 N 各自在無瑕海岸微笑相遇；脫下面甲的烏鴉望著無邊藍天深吸一口氣；那隻停駐多年的 5:53 懷錶終於化作光塵融入晨曦——“In the reset dawn of 5:54, every tide brings our loved ones home.”',
      },
    ],
  },
};

export default {
  CHAPTER_STORIES,
  LORE_DIALOGUES,
  CODEX_ENTRIES,
  FINAL_ENDINGS,
};
