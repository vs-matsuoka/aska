const withExportImages = require('next-export-optimize-images');

/** @type {import('next').NextConfig} */
module.exports = withExportImages({
  reactStrictMode: true,
  images: {
    // unoptimized: true
  },
  experimental: {
    scrollRestoration: true
  },
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.util = require.resolve('util/');
      config.resolve.fallback.fs = false;
    }
    return config;
  }
});
