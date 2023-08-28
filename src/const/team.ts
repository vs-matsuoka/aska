export type TeamMember = {
  name: string;
  role: string;
  iconSrc: string;
  twitterLink?: string;
  youtubeLink?: string;
  niconicoLink?: string;
  hasLongName?: boolean;
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
      youtubeLink: 'https://www.youtube.com/channel/UCapOg6vYOn4WVlwyetUPrMw',
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
      twitterLink: 'https://twitter.com/Crabgot_'
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
    }
    // ,{
    //   name: 'R.M.',
    //   role: '作曲',
    //   iconSrc: '/Icon/実行委員会/制作/作曲_icon_R.M..jpg',
    //   niconicoLink: 'https://www.nicovideo.jp/user/24971920',
    //   youtubeLink: 'https://www.youtube.com/@R_M___',
    //   twitterLink: 'https://twitter.com/R_M___'
    // },
    // {
    //   name: 'dedeen',
    //   role: '集合絵',
    //   iconSrc: '/Icon/実行委員会/制作/集合絵_icon_dedeen.jpg',
    //   niconicoLink: 'https://www.nicovideo.jp/user/124361135',
    //   youtubeLink: undefined,
    //   twitterLink: 'https://twitter.com/DE_DE_EN'
    // }
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
      name: 'namacream_',
      role: '特番制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_namacream_.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/23328012',
      youtubeLink: undefined,
      twitterLink: undefined
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
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/pink_elephant_g'
    },
    {
      name: 'ユビュちんちら',
      role: '特番制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_ユビュちんちら.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/14090495',
      youtubeLink: undefined,
      twitterLink: 'https://twitter.com/Ub2_chilla'
    },
    {
      name: 'Lixy',
      role: '特番制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_Lixy.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/90820019',
      youtubeLink: 'https://www.youtube.com/@Lixy2item',
      twitterLink: 'https://twitter.com/YesoftenmeansNo'
    },
    {
      name: '大内乙打',
      role: '特番制作',
      iconSrc: '/Icon/実行委員会/放送_特番/特番01_icon_大内乙打.jpg',
      niconicoLink: 'https://www.nicovideo.jp/user/6641990',
      youtubeLink: 'https://www.youtube.com/@user-gk6gv2bq4x',
      twitterLink: 'https://twitter.com/OZd_oouc2'
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
    }
  ]
};

export default team;
