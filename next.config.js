import { build } from '@oviirup/sprite';
import './src/env.js'; // verify environment variables on build

if (process.env.SPRITE_BUILD !== 'true') {
  // prevents restarting the build
  process.env.SPRITE_BUILD = 'true';
  build();
}

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  // configure eslint for next.js
  eslint: { dirs: ['./src'], ignoreDuringBuilds: true },
};
