/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  convertFormat: [
    ['png', 'webp'],
    ['jpg', 'webp']
  ]
};

module.exports = config;
