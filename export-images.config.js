/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  convertFormat: [
    ['png', 'webp'],
    ['jpg', 'webp']
  ],
  quality: 90,
  remoteImages: async () => {
    // TODO: ts-importのインポート時、エラーが発生する
    //       今サッと解決できそうにないので一旦愚直に再定義してしまう
    //       ref: https://github.com/vs-matsuoka/aska/actions/runs/6270200470/job/17027790937?pr=292
    // IDEA: モノレポにしてしまい、movies のみ別プロジェクトとして管理する？
    // const tsImport = await import('ts-import');
    // const result = (await tsImport.load('./src/const/movies.ts')).default;
    // const remoteImages = Object.values(result)
    //   .map((movies) => movies.map((movie) => movie.youtubeUrl))
    //   .flat()
    //   .filter(Boolean)
    //   .map((url) => `https://img.youtube.com/vi/${url.slice(17)}/sddefault.jpg`);
    // return remoteImages;
    return [
      'https://img.youtube.com/vi/jb2cFj3wCIA/sddefault.jpg',
      'https://img.youtube.com/vi/p1cAUzCboN4/sddefault.jpg',
      'https://img.youtube.com/vi/oWVHp--jqaU/sddefault.jpg',
      'https://img.youtube.com/vi/TRY8NvI4MFo/sddefault.jpg',
      'https://img.youtube.com/vi/inL40npy7oA/sddefault.jpg',
      'https://img.youtube.com/vi/D5l2cW4pDk0/sddefault.jpg',
      'https://img.youtube.com/vi/fc8YRrj6SNk/sddefault.jpg',
      'https://img.youtube.com/vi/5KuExLMwxUo/sddefault.jpg',
      'https://img.youtube.com/vi/y8e8RUs2GJs/sddefault.jpg',
      'https://img.youtube.com/vi/--3dGlwlGT4/sddefault.jpg',
      'https://img.youtube.com/vi/DP57HMEp5TE/sddefault.jpg',
      'https://img.youtube.com/vi/ZSrPxxw_m6M/sddefault.jpg',
      'https://img.youtube.com/vi/O1iZ01-9K4s/sddefault.jpg',
      'https://img.youtube.com/vi/Dkr0JMeGtqA/sddefault.jpg',
      'https://img.youtube.com/vi/hAT73Oi3ZXE/sddefault.jpg',
      'https://img.youtube.com/vi/Ma7zHBKMPB4/sddefault.jpg',
      'https://img.youtube.com/vi/Bs_T5RL0vaI/sddefault.jpg',
      'https://img.youtube.com/vi/qEfHogQDrjQ/sddefault.jpg',
      'https://img.youtube.com/vi/PGISH8019XM/sddefault.jpg',
      'https://img.youtube.com/vi/khfXQCZoDHo/sddefault.jpg',
      'https://img.youtube.com/vi/O5R79zTKgfI/sddefault.jpg',
      'https://img.youtube.com/vi/6uZ6hL7J8DE/sddefault.jpg',
      'https://img.youtube.com/vi/zMDb9lUScfU/sddefault.jpg',
      'https://img.youtube.com/vi/jJ9KwC-NeQw/sddefault.jpg',
      'https://img.youtube.com/vi/GR3V88L_2LU/sddefault.jpg',
      'https://img.youtube.com/vi/q65tyDWSCgw/sddefault.jpg'
    ];
  }
};

module.exports = config;
