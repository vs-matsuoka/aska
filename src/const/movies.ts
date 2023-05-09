export type MovieCategory = {
  index: number;
  name: string;
  movieList: Movie[];
};

export type Movie = {
  index: number;
  title: string;
  youtubeUrl: string;
};

const specialNotices: Movie[] = [
  {
    index: 1,
    title: '出場者告知',
    youtubeUrl: 'https://youtu.be/jb2cFj3wCIA'
  },
  {
    index: 2,
    title: '特殊告知「流行」',
    youtubeUrl: 'https://youtu.be/p1cAUzCboN4'
  },
  {
    index: 3,
    title: '前半中間告知',
    youtubeUrl: 'https://youtu.be/oWVHp--jqaU'
  }
];

const genericNotices: Movie[] = [
  {
    index: 1,
    title: '第1弾告知',
    youtubeUrl: 'https://youtu.be/D5l2cW4pDk0'
  },
  {
    index: 2,
    title: '第2弾告知',
    youtubeUrl: 'https://youtu.be/fc8YRrj6SNk'
  },
  {
    index: 3,
    title: '第3弾告知',
    youtubeUrl: 'https://youtu.be/5KuExLMwxUo'
  },
  {
    index: 4,
    title: '第4弾告知',
    youtubeUrl: 'https://youtu.be/y8e8RUs2GJs'
  },
  {
    index: 5,
    title: '第5弾告知',
    youtubeUrl: 'https://youtu.be/--3dGlwlGT4'
  },
  {
    index: 6,
    title: '第6弾告知',
    youtubeUrl: 'https://youtu.be/DP57HMEp5TE'
  },
  {
    index: 7,
    title: '第7弾告知',
    youtubeUrl: 'https://youtu.be/ZSrPxxw_m6M'
  },
  {
    index: 8,
    title: '第8弾告知',
    youtubeUrl: 'https://youtu.be/O1iZ01-9K4s'
  },
  {
    index: 9,
    title: '第9弾告知',
    youtubeUrl: 'https://youtu.be/Dkr0JMeGtqA'
  },
  {
    index: 10,
    title: '第10弾告知',
    youtubeUrl: 'https://youtu.be/hAT73Oi3ZXE'
  },
  {
    index: 11,
    title: '第11弾告知',
    youtubeUrl: 'https://youtu.be/Ma7zHBKMPB4'
  }
];

const specialPrograms: Movie[] = [
  {
    index: 1,
    title: '音MDM Direct 01',
    youtubeUrl: 'https://youtu.be/q65tyDWSCgw'
  }
];

const movieCategoryList: MovieCategory[] = [
  {
    index: 1,
    name: '特別告知',
    movieList: specialNotices
  },
  {
    index: 2,
    name: 'コンビ告知',
    movieList: genericNotices
  },
  {
    index: 1,
    name: '特別番組',
    movieList: specialPrograms
  }
];

export default movieCategoryList;
