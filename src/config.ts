import { env, isDev, isPreview } from '~/env'

export const SITE_NAME = 'Next Template'
export const SITE_DESC = 'Simple Next.js template to get started quickly'

export const PRIMARY_DOMAIN = 'oviirup.vercel.app'

export const SITE_DOMAIN = isDev
  ? `localhost:${env.PORT}`
  : isPreview
    ? env.VERCEL_URL
    : PRIMARY_DOMAIN

export const SITE_URL = isDev
  ? `http://${SITE_DOMAIN}/`
  : `https://${SITE_DOMAIN}/`
