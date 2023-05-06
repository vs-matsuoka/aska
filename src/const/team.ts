export type TeamMember = {
  name: string;
  role: string;
  iconSrc: string;
  twitterLink: string | null;
  youtubeLink: string | null;
  niconicoLink: string | null;
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
      iconSrc: '/Team/Unnei/21_Unnei_01.png',
      twitterLink: 'https://twitter.com/nasupiman',
      youtubeLink: '',
      niconicoLink: ''
    }
  ],
  seisaku: [
    {
      name: '-32℃',
      role: 'キービジュアル制作',
      iconSrc: '/Team/Seisaku/21_Seisaku_01.png',
      twitterLink: 'https://twitter.com/minus32c',
      youtubeLink: '',
      niconicoLink: ''
    }
  ],
  tachie: [
    {
      name: 'おこじょ',
      role: '立ち絵',
      iconSrc: '/Team/Tachie/21_Tachie_01.png',
      twitterLink: 'https://twitter.com/okojyo',
      youtubeLink: '',
      niconicoLink: ''
    }
  ],
  kokuchi: [
    {
      name: '冬眠します',
      role: '出場者告知',
      iconSrc: '/Team/Kokuchi/21_Kokuchi_01.png',
      twitterLink: 'https://twitter.com/fuyu_min',
      youtubeLink: '',
      niconicoLink: ''
    }
  ],
  housou: [
    {
      name: '仲邑飛鳥',
      role: '特番制作',
      iconSrc: '/Team/Housou/21_Housou_01.png',
      twitterLink: 'https://twitter.com/nakau_asuka',
      youtubeLink: '',
      niconicoLink: ''
    }
  ]
};

export default team;
