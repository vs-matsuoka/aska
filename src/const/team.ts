export type TeamMember = {
  name: string;
  role: string;
  iconSrc: string;
  twitterLink: string | null;
  youtubeLink: string | null;
  niconicoLink: string | null;
  hasLongName?: boolean;
};

const team: {
  unnei: TeamMember[];
  seisaku: TeamMember[];
  tachie: TeamMember[];
  kokuchi: TeamMember[];
  housou: TeamMember[];
} = {
  unnei: [
    {
      name: '那須ピーマン',
      role: '主催',
      iconSrc: '/Icon/運営/運営_icon_那須ピーマン.jpg',
      twitterLink: 'https://twitter.com/nasu_pmen',
      youtubeLink: null,
      niconicoLink: 'https://www.nicovideo.jp/user/57979076'
    },
    {
      name: '1時',
      role: '制作進行',
      iconSrc: '/Icon/運営/運営_icon_1時.jpg',
      twitterLink: 'https://twitter.com/AlarmOneOclock',
      youtubeLink: null,
      niconicoLink: 'https://www.nicovideo.jp/user/7375756'
    },
    {
      name: 'きっかん',
      role: '制作進行',
      iconSrc: '/Icon/運営/運営_icon_きっかん.jpg',
      twitterLink: 'https://twitter.com/ktzkn_',
      youtubeLink: null,
      niconicoLink: 'https://www.nicovideo.jp/user/12224942'
    },
    {
      name: 'たいうお',
      role: '制作進行',
      iconSrc: '/Icon/運営/運営_icon_たいうお.jpg',
      twitterLink: 'https://twitter.com/taiuo',
      youtubeLink: null,
      niconicoLink: 'https://www.nicovideo.jp/user/17924481'
    },
    {
      name: 'ともしげ',
      role: '制作進行',
      iconSrc: '/Icon/運営/運営_icon_ともしげ.jpg',
      twitterLink: 'https://twitter.com/Tomoshigeii',
      youtubeLink: null,
      niconicoLink: 'https://www.nicovideo.jp/user/169655'
    },
    {
      name: '埜村武',
      role: '放送ディレクター',
      iconSrc: '/Icon/運営/運営_icon_埜村武.jpg',
      twitterLink: 'https://twitter.com/hayami5121',
      youtubeLink: null,
      niconicoLink: 'https://www.nicovideo.jp/user/93583784'
    },
    {
      name: 'ゴムーン',
      role: '特番ディレクター',
      iconSrc: '/Icon/運営/運営_icon_ゴムーン.jpg',
      twitterLink: 'https://twitter.com/gomuun',
      youtubeLink: null,
      niconicoLink: 'https://www.nicovideo.jp/user/14019936'
    },
    {
      name: 'ふーふー',
      role: '特番ディレクター',
      iconSrc: '/Icon/運営/運営_icon_ふーふー.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/20600830',
      youtubeLink: null,
      twitterLink: 'https://twitter.com/nanana555'
    },
    {
      name: '単三型',
      role: 'アートディレクター',
      iconSrc: '/Icon/運営/運営_icon_単三型.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/148815',
      youtubeLink: null,
      twitterLink: 'https://twitter.com/tomimasu'
    },
    {
      name: 'こまり',
      role: '制作補佐',
      iconSrc: '/Icon/運営/運営_icon_こまり.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/2064123',
      youtubeLink: 'https://www.youtube.com/channel/UCF7VYxdjeqFCr83BS97NNVw',
      twitterLink: 'https://twitter.com/Crabgot_'
    },
    {
      name: '咲崎(♂)',
      role: '制作補佐',
      iconSrc: '/Icon/運営/運営_icon_咲崎(♂).jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/4560337',
      youtubeLink: null,
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
      youtubeLink: null,
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
      youtubeLink: null,
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
      name: 'R.M.',
      role: '作曲',
      iconSrc: '/Icon/実行委員会/制作/作曲_icon_R.M..jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/24971920',
      youtubeLink: 'https://www.youtube.com/@R_M___',
      twitterLink: 'https://twitter.com/R_M___'
    },
    {
      name: 'dedeen',
      role: '集合絵',
      iconSrc: '/Icon/実行委員会/制作/集合絵_icon_dedeen.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/124361135',
      youtubeLink: null,
      twitterLink: 'https://twitter.com/DE_DE_EN'
    }
  ],
  tachie: [
    {
      name: 'おこじょ',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_おこじょ.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/27392744',
      youtubeLink: null,
      twitterLink: 'https://twitter.com/okojyo_237'
    },
    {
      name: '岩鉄ハガネール',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_岩鉄ハガネール.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/45111275',
      youtubeLink: null,
      twitterLink: 'https://twitter.com/gantetuiwaku',
      hasLongName: true
    },
    {
      name: '微生物',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_微生物.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/31942706',
      youtubeLink: null,
      twitterLink: 'https://twitter.com/Bseibutsu'
    },
    {
      name: 'マアム',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_マアム.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/4536010',
      youtubeLink: null,
      twitterLink: 'https://twitter.com/Nyoaaaaaaaa'
    },
    {
      name: 'ミーナさん',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_ミーナさん.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/31284786',
      youtubeLink: null,
      twitterLink: 'https://twitter.com/normal_Mina_xxx'
    },
    {
      name: 'my0nruri',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_my0nruri.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/71976201',
      youtubeLink: null,
      twitterLink: 'https://twitter.com/my0nruri'
    },
    {
      name: '四文字',
      role: '立ち絵',
      iconSrc: '/Icon/実行委員会/立ち絵/立ち絵_icon_四文字.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/93208976',
      youtubeLink: null,
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
      youtubeLink: null,
      twitterLink: 'https://twitter.com/toumin_z'
    },
    {
      name: '餡砂糖',
      role: '汎用告知',
      iconSrc: '/Icon/実行委員会/告知/告知映像_icon_餡砂糖.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/56560368',
      youtubeLink: null,
      twitterLink: 'https://twitter.com/Anzato10'
    },
    {
      name: 'ちょのゆし',
      role: '汎用告知',
      iconSrc: '/Icon/実行委員会/告知/告知映像_icon_ちょのゆし.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/78688100',
      youtubeLink: null,
      twitterLink: 'https://twitter.com/chonoyushi'
    },
    {
      name: 'めがっちP',
      role: '汎用告知',
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
      youtubeLink: null,
      twitterLink: 'https://twitter.com/totototo0507'
    },
    {
      name: '零',
      role: '特殊告知A',
      iconSrc: '/Icon/実行委員会/告知/告知映像_icon_零.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/8420196',
      youtubeLink: 'https://www.youtube.com/@zeromission2nd',
      twitterLink: 'https://twitter.com/zeromission'
    }
  ],
  housou: [
    {
      name: '仲邑飛鳥',
      role: '特番制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_仲邑飛鳥.png',
      niconicoLink: null,
      youtubeLink: 'https://www.youtube.com/@worldknik',
      twitterLink: 'https://twitter.com/N_Asuka'
    },
    {
      name: 'namacream_',
      role: '特番制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_namacream_.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/23328012',
      youtubeLink: null,
      twitterLink: null
    },
    {
      name: '葉月味',
      role: '特番制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_葉月味.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/96226560',
      youtubeLink: 'https://www.youtube.com/@hadkimi',
      twitterLink: 'https://twitter.com/hadkimi_'
    },
    {
      name: 'ピンクの象',
      role: '特番制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_ピンクの象.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/47463792',
      youtubeLink: null,
      twitterLink: 'https://twitter.com/pink_elephant_g'
    },
    {
      name: 'Lixy',
      role: '特番制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_Lixy.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/90820019',
      youtubeLink: 'https://www.youtube.com/@Lixy2item',
      twitterLink: 'https://twitter.com/YesoftenmeansNo'
    }
  ]
};

export default team;
