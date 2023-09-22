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
    const tsImport = await import('ts-import');
    const result = (await tsImport.load('./src/const/movies.ts')).default;
    const remoteImages = Object.values(result)
      .map((movies) => movies.map((movie) => movie.youtubeUrl))
      .flat()
      .filter(Boolean)
      .map((url) => `https://img.youtube.com/vi/${url.slice(17)}/sddefault.jpg`);
    return remoteImages;
  }
};

module.exports = config;
