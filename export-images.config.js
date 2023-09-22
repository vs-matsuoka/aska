const tsImport = require('ts-import');
const result = tsImport.loadSync('./src/const/movies.ts').default;
const remoteImages = Object.values(result)
  .map((movies) => movies.map((movie) => movie.youtubeUrl))
  .flat()
  .filter(Boolean)
  .map((url) => `https://img.youtube.com/vi/${url.slice(17)}/sddefault.jpg`);

/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  convertFormat: [
    ['png', 'webp'],
    ['jpg', 'webp']
  ],
  quality: 90,
  remoteImages
};

module.exports = config;
