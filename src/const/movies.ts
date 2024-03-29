export type Movie = {
  index: number;
  title: string;
  youtubeUrl: string;
  thumbnail?: string;
};

const movies: {
  specialNotices: Movie[];
  genericNotices: Movie[];
  specialPrograms: Movie[];
} = {
  // 特別告知
  specialNotices: [
    {
      index: 1,
      title: '出場者告知',
      youtubeUrl: 'https://youtu.be/jb2cFj3wCIA',
      thumbnail: undefined
    },
    {
      index: 2,
      title: '特殊告知「流行」',
      youtubeUrl: 'https://youtu.be/p1cAUzCboN4',
      thumbnail: undefined
    },
    {
      index: 3,
      title: '前半中間告知',
      youtubeUrl: 'https://youtu.be/oWVHp--jqaU',
      thumbnail: undefined
    },
    {
      index: 4,
      title: '後半中間告知',
      youtubeUrl: 'https://youtu.be/TRY8NvI4MFo',
      thumbnail: '/Movie/thumbnails/interimNoticeB.png'
    },
    {
      index: 5,
      title: '特殊告知「アナログ」',
      youtubeUrl: 'https://youtu.be/inL40npy7oA',
      thumbnail: '/Movie/thumbnails/specialNoticeAnalog.png'
    }
  ],
  // コンビ告知
  genericNotices: [
    {
      index: 1,
      title: '第1弾告知',
      youtubeUrl: 'https://youtu.be/D5l2cW4pDk0',
      thumbnail: undefined
    },
    {
      index: 2,
      title: '第2弾告知',
      youtubeUrl: 'https://youtu.be/fc8YRrj6SNk',
      thumbnail: undefined
    },
    {
      index: 3,
      title: '第3弾告知',
      youtubeUrl: 'https://youtu.be/5KuExLMwxUo',
      thumbnail: undefined
    },
    {
      index: 4,
      title: '第4弾告知',
      youtubeUrl: 'https://youtu.be/y8e8RUs2GJs',
      thumbnail: undefined
    },
    {
      index: 5,
      title: '第5弾告知',
      youtubeUrl: 'https://youtu.be/--3dGlwlGT4',
      thumbnail: undefined
    },
    {
      index: 6,
      title: '第6弾告知',
      youtubeUrl: 'https://youtu.be/DP57HMEp5TE',
      thumbnail: undefined
    },
    {
      index: 7,
      title: '第7弾告知',
      youtubeUrl: 'https://youtu.be/ZSrPxxw_m6M',
      thumbnail: undefined
    },
    {
      index: 8,
      title: '第8弾告知',
      youtubeUrl: 'https://youtu.be/O1iZ01-9K4s',
      thumbnail: undefined
    },
    {
      index: 9,
      title: '第9弾告知',
      youtubeUrl: 'https://youtu.be/Dkr0JMeGtqA',
      thumbnail: undefined
    },
    {
      index: 10,
      title: '第10弾告知',
      youtubeUrl: 'https://youtu.be/hAT73Oi3ZXE',
      thumbnail: undefined
    },
    {
      index: 11,
      title: '第11弾告知',
      youtubeUrl: 'https://youtu.be/Ma7zHBKMPB4',
      thumbnail: undefined
    },
    {
      index: 12,
      title: '第12弾告知',
      youtubeUrl: 'https://youtu.be/Bs_T5RL0vaI',
      thumbnail: undefined
    },
    {
      index: 13,
      title: '第13弾告知',
      youtubeUrl: 'https://youtu.be/qEfHogQDrjQ',
      thumbnail: undefined
    },
    {
      index: 14,
      title: '第14弾告知',
      youtubeUrl: 'https://youtu.be/PGISH8019XM',
      thumbnail: '/Movie/thumbnails/pair14.png'
    },
    {
      index: 15,
      title: '第15弾告知',
      youtubeUrl: 'https://youtu.be/khfXQCZoDHo',
      thumbnail: '/Movie/thumbnails/pair15.png'
    },
    {
      index: 16,
      title: '第16弾告知',
      youtubeUrl: 'https://youtu.be/O5R79zTKgfI',
      thumbnail: '/Movie/thumbnails/pair16.png'
    },
    {
      index: 17,
      title: '第17弾告知',
      youtubeUrl: 'https://youtu.be/6uZ6hL7J8DE',
      thumbnail: '/Movie/thumbnails/pair17.png'
    },
    {
      index: 18,
      title: '第18弾告知',
      youtubeUrl: 'https://youtu.be/zMDb9lUScfU',
      thumbnail: '/Movie/thumbnails/pair18.png'
    },
    {
      index: 19,
      title: '第19弾告知',
      youtubeUrl: 'https://youtu.be/jJ9KwC-NeQw',
      thumbnail: '/Movie/thumbnails/pair19.png'
    },
    {
      index: 20,
      title: '第20弾告知',
      youtubeUrl: 'https://youtu.be/GR3V88L_2LU',
      thumbnail: '/Movie/thumbnails/pair20.png'
    }
  ],
  // 事前番組
  specialPrograms: [
    {
      index: 1,
      title: '音MDM Direct 01',
      youtubeUrl: 'https://youtu.be/q65tyDWSCgw',
      thumbnail: undefined
    }
  ]
};

export default movies;
