export type TeamMember = {
  name: string;
  role: string;
  iconSrc: string;
  twitterLink?: string;
  youtubeLink?: string;
  niconicoLink?: string;
  hasLongName?: boolean; // PC版で使用する
  hasTooLongName?: boolean; // SP版で使用する
};

const team: {
  unnei: TeamMember[];
  seisaku: TeamMember[];
  tachie: TeamMember[];
  kokuchi: TeamMember[];
  tokuban: TeamMember[];
  housou: TeamMember[];
} = {
  unnei: [
    {
      name: '那須ピーマン',
      role: '主催',
      iconSrc: '/Icon/運営/運営_icon_那須ピーマン.jpg',
      twitterLink: 'https://twitter.com/nasu_pmen',
      youtubeLink: undefined,
      niconicoLink: 'https://www.nicovideo.jp/user/57979076'
    },
    {
      name: '1時',
      role: '制作進行',
      iconSrc: '/Icon/運営/運営_icon_1時.jpg',
      twitterLink: 'https://twitter.com/AlarmOneOclock',
      youtubeLink: undefined,
      niconicoLink: 'https://www.nicovideo.jp/user/7375756'
    },
    {
      name: 'きっかん',
      role: '制作進行',
      iconSrc: '/Icon/運営/運営_icon_きっかん.jpg',
      twitterLink: 'https://twitter.com/ktzkn_',
      youtubeLink: undefined,
      niconicoLink: 'https://www.nicovideo.jp/user/12224942'
    },
    {
      name: 'たいうお',
      role: '制作進行',
      iconSrc: '/Icon/運営/運営_icon_たいうお.jpg',
      twitterLink: 'https://twitter.com/taiuo',
      youtubeLink: undefined,
      niconicoLink: 'https://www.nicovideo.jp/user/17924481'
    },
    {
      name: 'ともしげ',
      role: '制作進行',
      iconSrc: '/Icon/運営/運営_icon_ともしげ.jpg',
      twitterLink: 'https://twitter.com/Tomoshigeii',
      youtubeLink: undefined,
      niconicoLink: 'https://www.nicovideo.jp/user/169655'
    },
    {
      name: '埜村武',
      role: '放送ディレクター',
      iconSrc: '/Icon/運営/運営_icon_埜村武.jpg',
      twitterLink: 'https://twitter.com/nomuratakeshi2',
      youtubeLink: 'https://www.youtube.com/@nomuratakeshi',
      niconicoLink: 'https://www.nicovideo.jp/user/14019936'
    },
    {
      name: 'ゴムーン',
      role: '特番ディレクター',
      iconSrc: '/Icon/運営/運営_icon_ゴムーン.jpg',
      twitterLink: 'https://twitter.com/hayami5121',
      youtubeLink: undefined,
      niconicoLink: 'https://www.nicovideo.jp/user/93583784'
    },
    {
      name: 'ふーふー',
      role: '特番ディレクター',
      iconSrc: '/Icon/運営/運営_icon_ふーふー.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/20600830',
      youtubeLink: 'https://www.youtube.com/@nanana_555',
      twitterLink: 'https://twitter.com/nanana555'
    },
    {
      name: '単三型',
      role: 'アートディレクター',
      iconSrc: '/Icon/運営/運営_icon_単三型.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/148815',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/tomimasu'
    },
    {
      name: 'こまり',
      role: '制作補佐',
      iconSrc: '/Icon/運営/運営_icon_こまり.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/2064123',
      youtubeLink: 'https://www.youtube.com/channel/UCF7VYxdjeqFCr83BS97NNVw',
      twitterLink: 'https://twitter.com/co_ma41'
    },
    {
      name: '咲崎(♂)',
      role: '制作補佐',
      iconSrc: '/Icon/運営/運営_icon_咲崎(♂).jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/4560337',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/5k2k3'
    }
  ],
  seisaku: [
    {
      name: '-32℃',
      role: 'キービジュアル制作',
      iconSrc: '/Icon/実行委員会/制作/キービジュアル_icon_-32℃.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/21283777',
      youtubeLink: 'https://www.youtube.com/@user-jy2hx1rn5q',
      twitterLink: 'https://twitter.com/Minus32Cels'
    },
    {
      name: '名残雪',
      role: 'ロゴ制作',
      iconSrc: '/Icon/実行委員会/制作/ロゴ_icon_名残雪.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/15912157',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/niveous_yuzuko'
    },
    {
      name: 'ごぼう',
      role: 'WEBサイト制作',
      iconSrc: '/Icon/実行委員会/制作/Web_icon_ごぼう.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/33056247',
      youtubeLink: 'https://www.youtube.com/@gobou0516',
      twitterLink: 'https://twitter.com/gobou0516'
    },
    {
      name: '名有り',
      role: 'WEBサイト制作',
      iconSrc: '/Icon/実行委員会/制作/Web_icon_名有り.png',
      niconicoLink: 'https://www.nicovideo.jp/user/8786995/',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/_naari_'
    },
    {
      name: 'イケダ',
      role: 'WEBサイト制作補佐',
      iconSrc: '/Icon/実行委員会/制作/Web_icon_池田.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/59152228',
      youtubeLink: 'https://www.youtube.com/@Bymnet1845',
      twitterLink: 'https://twitter.com/komeijiikeda'
    },
    {
      name: 'dedeen',
      role: '集合絵',
      iconSrc: '/Icon/実行委員会/制作/集合絵_icon_dedeen.png',
      niconicoLink: 'https://www.nicovideo.jp/user/124361135',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/DE_DE_EN'
    },
    {
      name: 'R.M.',
      role: 'メインテーマ制作',
      iconSrc: '/Icon/実行委員会/制作/作曲_icon_R.M..jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/24971920',
      youtubeLink: 'https://www.youtube.com/@R_M___',
      twitterLink: 'https://twitter.com/R_M___'
    }
  ],
  tachie: [
    {
      name: 'おこじょ',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_おこじょ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/27392744',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/okojyo_237'
    },
    {
      name: '岩鉄ハガネール',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_岩鉄ハガネール.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/45111275',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/gantetuiwaku',
      hasLongName: true
    },
    {
      name: '微生物',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_微生物.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/31942706',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/Bseibutsu'
    },
    {
      name: 'マアム',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_マアム.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/4536010',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/Nyoaaaaaaaa'
    },
    {
      name: 'ミーナさん',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_ミーナさん.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/31284786',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/normal_Mina_xxx'
    },
    {
      name: 'my0nruri',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_my0nruri.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/71976201',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/my0nruri'
    },
    {
      name: '四文字',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_四文字.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/93208976',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/_yonmoji_'
    },
    {
      name: 'れでぃば',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_れでぃば.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/84600796',
      youtubeLink: 'https://www.youtube.com/@Readybug_',
      twitterLink: 'https://twitter.com/Readybug_'
    }
  ],
  kokuchi: [
    {
      name: '冬眠します',
      role: '出場者告知',
      iconSrc: '/Icon/実行委員会/告知/告知_icon_冬眠します.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/1018080/',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/toumin_z'
    },
    {
      name: '餡砂糖',
      role: 'コンビ告知',
      iconSrc: '/Icon/実行委員会/告知/告知映像_icon_餡砂糖.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/56560368',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/Anzato10'
    },
    {
      name: 'ちょのゆし',
      role: 'コンビ告知',
      iconSrc: '/Icon/実行委員会/告知/告知映像_icon_ちょのゆし.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/78688100',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/chonoyushi'
    },
    {
      name: 'めがっちP',
      role: 'コンビ告知',
      iconSrc: '/Icon/実行委員会/告知/告知映像_icon_めがっちP.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/32781937',
      youtubeLink: 'https://youtube.com/playlist?list=PLAPCxD_cd1F50vJit_nk3fuXOzpNgzHIc',
      twitterLink: 'https://twitter.com/megatti016'
    },
    {
      name: 'オールカラー',
      role: '中間告知A',
      iconSrc: '/Icon/実行委員会/告知/告知映像_icon_オールカラー.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/79698528',
      youtubeLink: 'https://www.youtube.com/@allcolor568',
      twitterLink: 'https://twitter.com/ALLCOLOR_grhc'
    },
    {
      name: 'とととと',
      role: '中間告知A サポート',
      iconSrc: '/Icon/実行委員会/告知/告知映像_icon_とととと.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/44355080',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/totototo0507'
    },
    {
      name: '零',
      role: '特殊告知「流行」',
      iconSrc: '/Icon/実行委員会/告知/告知映像_icon_零.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/8420196',
      youtubeLink: 'https://www.youtube.com/@zeromission2nd',
      twitterLink: 'https://twitter.com/zeromission'
    },
    {
      name: 'コベルト',
      role: '中間告知B',
      iconSrc: '/Icon/実行委員会/告知/告知映像_icon_コベルト.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/44120556',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/covelto'
    },
    {
      name: 'miル',
      role: '中間告知B サポート',
      iconSrc: '/Icon/実行委員会/告知/告知映像_icon_miル.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/40378416',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/mirukudesuno'
    },
    {
      name: '紅ばめ',
      role: '特殊告知「アナログ」',
      iconSrc: '/Icon/実行委員会/告知/告知映像_icon_紅ばめ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/10016012',
      youtubeLink: 'https://www.youtube.com/channel/UCW7DN3dNgpU2x3yW6H8l9XQ',
      twitterLink: 'https://twitter.com/benibame10'
    }
  ],
  tokuban: [
    {
      name: '仲邑飛鳥',
      role: '特番制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_仲邑飛鳥.png',
      niconicoLink: undefined,
      youtubeLink: 'https://www.youtube.com/@worldknik',
      twitterLink: 'https://twitter.com/N_Asuka'
    },
    {
      name: '大内乙打',
      role: '特番制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_大内乙打.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/6641990',
      youtubeLink: 'https://www.youtube.com/@user-gk6gv2bq4x',
      twitterLink: 'https://twitter.com/OZd_oouc2'
    },
    {
      name: 'namacream_',
      role: '音MAD史 制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_namacream_.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/23328012',
      youtubeLink: undefined,
      twitterLink: undefined
    },
    {
      name: '葉月味',
      role: '音MAD史 制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_葉月味.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/96226560',
      youtubeLink: 'https://www.youtube.com/@hadkimi',
      twitterLink: 'https://twitter.com/hadkimi_'
    },
    {
      name: 'ピンクの象',
      role: '音MAD史 制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_ピンクの象.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/47463792',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/pink_elephant_g'
    },
    {
      name: 'ユビュちんちら',
      role: '音MAD史 制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_ユビュちんちら.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/14090495',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/Ub2_chilla'
    },
    {
      name: 'Lixy',
      role: '音MAD史 制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_Lixy.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/90820019',
      youtubeLink: 'https://www.youtube.com/@Lixy2item',
      twitterLink: 'https://twitter.com/YesoftenmeansNo'
    },
    {
      name: 'ゴムーン',
      role: '音リビア 出演者',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_出演者_icon_ゴムーン.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/93583784',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/hayami5121'
    },
    {
      name: 'ゆうしゃアシスタント',
      role: '音リビア 出演者',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_出演者_icon_ゆうしゃアシスタント.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/38502114',
      youtubeLink: 'https://www.youtube.com/@yuusyaasisutanto',
      twitterLink: 'https://twitter.com/yuusyaasisutant',
      hasLongName: true
    },
    {
      name: 'bobineKS',
      role: '音リビア 出演者',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_出演者_icon_bobineKS.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/2751542',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/bobine_ks'
    },
    {
      name: 'こち横',
      role: '音リビア 出演者',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_出演者_icon_こち横.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/89667233',
      youtubeLink: 'https://www.youtube.com/@kochi_z',
      twitterLink: 'https://twitter.com/tatetatenaname'
    },
    {
      name: 'パペロン',
      role: '音リビア 出演者',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_出演者_icon_パペロン.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/60786626',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/_PPLN'
    },
    {
      name: 'ムノ',
      role: '音リビア 出演者',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_出演者_icon_ムノ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/33843024',
      youtubeLink: 'https://www.youtube.com/muno3',
      twitterLink: 'https://twitter.com/3n2nd'
    },
    {
      name: 'モツ',
      role: '音リビア 出演者',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_出演者_icon_モツ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/69602427',
      youtubeLink: 'https://www.youtube.com/@dmp_motsunabe',
      twitterLink: 'https://twitter.com/dmp_motsunabe'
    },
    {
      name: 'OmegaZero',
      role: '音リビア 検証班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_検証班_icon_OmegaZero.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/38506640',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/omz14658248'
    },
    {
      name: '片知',
      role: '音リビア 検証班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_検証班_icon_片知.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/118353037',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/shorthair_hutao'
    },
    {
      name: '大腸菌デリバリーサービス',
      role: '音リビア 検証班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_検証班_icon_大腸菌デリバリーサービス.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/39376970',
      youtubeLink: 'https://www.youtube.com/@TakafujiKakoHaOrenoYome',
      twitterLink: 'https://twitter.com/EColiDelvSvc',
      hasLongName: true,
      hasTooLongName: true
    },
    {
      name: 'とじーら',
      role: '音リビア 検証班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_検証班_icon_とじーら.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/95061946',
      youtubeLink: 'https://www.youtube.com/@Tojirra',
      twitterLink: 'https://twitter.com/ToJiRuclose'
    },
    {
      name: 'はっきー',
      role: '音リビア 検証班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_検証班_icon_はっきー.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/50591080',
      youtubeLink: 'https://www.youtube.com/@hakky2391',
      twitterLink: 'https://twitter.com/hakky_kai_z'
    },
    {
      name: 'ばなならーめん',
      role: '音リビア 検証班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_検証班_icon_ばなならーめん.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/33255780',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/BananaRamenYuno',
      hasLongName: true
    },
    {
      name: 'HYOUTAN',
      role: '音リビア 検証班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_検証班_icon_HYOUTAN.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/1389685',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/hyoutan250'
    },
    {
      name: 'FEAR',
      role: '音リビア 検証班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_検証班_icon_FEAR_ЯAR.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/1509143',
      youtubeLink: 'https://www.youtube.com/@archannel8442',
      twitterLink: 'https://twitter.com/FEAR443'
    },
    {
      name: 'ホーリィ',
      role: '音リビア 検証班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_検証班_icon_ホーリィ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/71900220',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/HORY_nico'
    },
    {
      name: 'やりぎりみかん',
      role: '音リビア 検証班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_検証班_icon_やりぎりみかん.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/3310989',
      youtubeLink: 'https://www.youtube.com/@user-os9xm3mx7e',
      twitterLink: 'https://twitter.com/nakimirigiray'
    },
    {
      name: 'ガ病',
      role: '音リビア 美術班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_美術班_icon_ガ病.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/58970902',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/negitoro_soba'
    },
    {
      name: 'カンザキリョウマ',
      role: '音リビア 美術班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_美術班_icon_カンザキリョウマ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/35044611',
      youtubeLink: 'https://www.youtube.com/@user-hq2mb9us3q',
      twitterLink: 'https://twitter.com/Yume_Utsu2',
      hasLongName: true
    },
    {
      name: '岩鉄ハガネール',
      role: '音リビア 美術班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_美術班_icon_岩鉄ハガネール.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/45111275',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/gantetuiwaku',
      hasLongName: true
    },
    {
      name: '絹松',
      role: '音リビア 美術班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_美術班_icon_絹松.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/33251257',
      youtubeLink: 'https://www.youtube.com/@KinuMatsu',
      twitterLink: 'https://twitter.com/SilkPine_movie'
    },
    {
      name: '鮭醤油',
      role: '音リビア 美術班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_美術班_icon_鮭醤油.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/67503481',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/osakana_max'
    },
    {
      name: 'ちん',
      role: '音リビア 美術班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_美術班_icon_ちん.png',
      niconicoLink: 'https://www.nicovideo.jp/user/31837529',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/Sn50Tin'
    },
    {
      name: '猫背',
      role: '音リビア 美術班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_美術班_icon_猫背.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/64420321',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/nekoze_xxxx'
    },
    {
      name: '谷幽零',
      role: '音リビア 美術班',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_美術班_icon_谷幽零.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/116138056',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/ya_yu_rei'
    },
    {
      name: 'エルフィン',
      role: '音リビア 制作協力',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_制作協力_icon_エルフィン.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/27176777',
      youtubeLink: 'https://www.youtube.com/@Lfin_Mad',
      twitterLink: 'https://twitter.com/Lfin_Mad'
    },
    {
      name: 'キャベツ',
      role: '音リビア 制作協力',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_制作協力_icon_キャベツ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/11862287',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/kyabetsu23'
    },
    {
      name: 'コツ連打ら',
      role: '音リビア 制作協力',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_制作協力_icon_コツ連打ら.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/13089286',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/noikanatira'
    },
    {
      name: '零～ゼロ～',
      role: '音リビア 制作協力',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_制作協力_icon_零～ゼロ～.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/8420196',
      youtubeLink: 'https://www.youtube.com/@zeromission2nd',
      twitterLink: 'https://twitter.com/zeromission'
    },
    {
      name: 'youtt6',
      role: '音リビア 制作協力',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_制作協力_icon_youtt6.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/26209564',
      youtubeLink: 'https://www.youtube.com/@youtt6450',
      twitterLink: 'https://twitter.com/OngakuYoutt6'
    },
    {
      name: 'きっかん',
      role: '音リビア 制作協力',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_制作協力_icon_きっかん.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/12224942',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/ktzkn_'
    },
    {
      name: 'とととと',
      role: '音リビア 制作協力',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_制作協力_icon_とととと.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/44355080',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/totototo0507'
    },
    {
      name: 'ふーふー',
      role: '音リビア 制作協力',
      iconSrc: '/Icon/実行委員会/放送_特番/特番02_制作協力_icon_ふーふー.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/20600830',
      youtubeLink: 'https://www.youtube.com/@nanana_555',
      twitterLink: 'https://twitter.com/nanana555'
    }
  ],
  housou: [
    {
      name: '大内乙打',
      role: '出演者',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_大内乙打.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/6641990',
      youtubeLink: 'https://www.youtube.com/@user-gk6gv2bq4x',
      twitterLink: 'https://twitter.com/OZd_oouc2'
    },
    {
      name: 'かっぱ',
      role: '出演者',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_かっぱ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/28794844',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/Klunakapa'
    },
    {
      name: 'BaN長',
      role: '出演者',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_BaN長.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/39234097',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/banfuture'
    },
    {
      name: '26K',
      role: 'BGMディレクター',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_26K.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/23542987',
      youtubeLink: 'https://www.youtube.com/channel/UCa0NaAtqVJu7yVqHobWkV9Q',
      twitterLink: 'https://twitter.com/26K_'
    },
    {
      name: 'うせ',
      role: 'BGM',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_うせ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/58228001',
      youtubeLink: 'https://www.youtube.com/@UCEch777/videos',
      twitterLink: 'https://twitter.com/UCEch777/media'
    },
    {
      name: 'おちんぽきまじめ',
      role: 'BGM',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_おちんぽきまじめ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/30846190',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/Sr20detNissan',
      hasLongName: true
    },
    {
      name: 'owatax',
      role: 'BGM',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_owatax.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/1033213',
      youtubeLink: 'https://www.youtube.com/channel/UCzNTlDGQUjsmzeiTYSOmguQ',
      twitterLink: 'https://twitter.com/owatax00'
    },
    {
      name: 'ご学友',
      role: 'BGM',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_ご学友.jpg',
      niconicoLink: undefined,
      youtubeLink: undefined,
      twitterLink: undefined
    },
    {
      name: '権太夫',
      role: 'BGM',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_権太夫.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/1571412',
      youtubeLink: 'https://www.youtube.com/channel/UCf-ZOn9_psQ-kvRb1EavcTQ',
      twitterLink: 'https://twitter.com/gondayu'
    },
    {
      name: '2÷す',
      role: 'BGM',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_2÷す.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/21133029',
      youtubeLink: undefined,
      twitterLink: undefined
    },
    {
      name: 'ふるの',
      role: 'BGM',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_ふるの.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/42060207',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/furuno_2'
    },
    {
      name: '麻痺',
      role: 'BGM',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_麻痺.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/320294',
      youtubeLink: undefined,
      twitterLink: undefined
    },
    {
      name: 'りゅん',
      role: 'BGM',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_りゅん.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/44819558',
      youtubeLink: 'https://www.youtube.com/@28ryn',
      twitterLink: 'https://twitter.com/rynryn1203'
    },
    {
      name: 'ジャカス',
      role: '出演者立ち絵',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_ジャカス.png',
      niconicoLink: 'http://nicovideo.jp/user/42145641',
      youtubeLink: 'https://www.youtube.com/@kawaiijacchus',
      twitterLink: 'https://twitter.com/kawaiijacchus'
    },
    {
      name: '地他',
      role: '出演者立ち絵',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_地他.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/128351566',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/chitatihc'
    },
    {
      name: 'オンモコスブ',
      role: 'トランジション',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_オンモコスブ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/97199955',
      youtubeLink: 'https://www.youtube.com/channel/UCZvm0JcwBEOG9qeJ2leuk9A',
      twitterLink: 'https://twitter.com/onmokosub'
    },
    {
      name: 'リイゴカワイラ',
      role: 'トランジション',
      iconSrc: '/Icon/実行委員会/本放送/本放送_icon_リイゴカワイラ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/118622321',
      youtubeLink: 'https://www.youtube.com/@riigokawaira7071',
      twitterLink: 'https://twitter.com/riigorira_mad'
    },
    {
      name: 'さはら',
      role: 'OPディレクター',
      iconSrc: '/Icon/実行委員会/本放送/本放送OP_icon_さはら.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/25683331',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/yattawane'
    },
    {
      name: 'いけがみ',
      role: 'OP',
      iconSrc: '/Icon/実行委員会/本放送/本放送OP_icon_いけがみ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/16344169',
      youtubeLink: undefined,
      twitterLink: undefined
    },
    {
      name: '咲崎(♂)',
      role: 'OP',
      iconSrc: '/Icon/実行委員会/本放送/本放送OP_icon_咲崎(♂).jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/4560337',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/5k2k3'
    },
    {
      name: '鮭醤油',
      role: 'OP',
      iconSrc: '/Icon/実行委員会/本放送/本放送OP_icon_鮭醤油.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/67503481',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/osakana_max'
    },
    {
      name: 'ちょのゆし',
      role: 'OP',
      iconSrc: '/Icon/実行委員会/本放送/本放送OP_icon_ちょのゆし.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/78688100',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/chonoyushi'
    },
    {
      name: '冬眠します',
      role: 'OP',
      iconSrc: '/Icon/実行委員会/本放送/本放送OP_icon_冬眠します.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/1018080/',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/toumin_z'
    },
    {
      name: 'とりのえさ',
      role: 'OP',
      iconSrc: '/Icon/実行委員会/本放送/本放送OP_icon_とりのえさ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/88221441',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/torinoesa36'
    },
    {
      name: '埜村武',
      role: 'OP',
      iconSrc: '/Icon/実行委員会/本放送/本放送OP_icon_埜村武.jpg',
      twitterLink: 'https://twitter.com/nomuratakeshi2',
      youtubeLink: 'https://www.youtube.com/@nomuratakeshi',
      niconicoLink: 'https://www.nicovideo.jp/user/14019936'
    },
    {
      name: 'MizkoKT',
      role: 'OP',
      iconSrc: '/Icon/実行委員会/本放送/本放送OP_icon_MizkoKT.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/12686166',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/KT_Madko'
    },
    {
      name: 'miyota',
      role: 'OP',
      iconSrc: '/Icon/実行委員会/本放送/本放送OP_icon_miyota.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/17678878',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/miyota_wt'
    }
  ]
};

export default team;
