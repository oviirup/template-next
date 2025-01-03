import { isDev } from './src/env';
import type { NextConfig } from 'next';

const config: NextConfig = {
  // disable eslint & typescript during build
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  //enable fetch logging
  logging: {
    fetches: { fullUrl: true, hmrRefreshes: true },
  },
  // remove console in prod
  compiler: {
    removeConsole: isDev ? undefined : { exclude: ['warn', 'error'] },
  },
};

export default config;
