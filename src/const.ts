import { env, isDev, isPreview } from '~/env';

export const SITE_DOMAIN = isDev
  ? `localhost:${env.PORT}`
  : isPreview
    ? `${env.VERCEL_URL}`
    : `${env.NEXT_PUBLIC_DOMAIN}`;

const URL_PROTOCOL = isDev ? 'http' : 'https';
export const SITE_URL = `${URL_PROTOCOL}://${SITE_DOMAIN}`;
export const SITE_TITLE = 'Next Template';
export const SITE_STATUS = 'BETA';
