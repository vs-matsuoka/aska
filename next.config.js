/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.util = require.resolve("util/");
      config.resolve.fallback.fs = false;
    }
    return config;
  }
}
