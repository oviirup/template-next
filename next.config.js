const { version } = require('./package.json');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    optimizePackageImports: ['lucide-react'],
  },
  env: {
    NEXT_PUBLIC_VERSION: version,
  },
  // configure eslint for next.js
  eslint: {
    dirs: ['./src'],
    ignoreDuringBuilds: true,
  },
};
