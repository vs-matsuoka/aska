/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS && "/aska",
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.util = require.resolve("util/");
      config.resolve.fallback.fs = false;
    }
    return config;
  }
}
