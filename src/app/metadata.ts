import type { Metadata, Viewport } from 'next';
import { SITE_TITLE, SITE_URL } from '@/app/config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s - ${SITE_TITLE}` },
  openGraph: {
    type: 'website',
    title: { default: SITE_TITLE, template: `%s - ${SITE_TITLE}` },
    locale: 'en',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: [{ url: '/favicon.ico', sizes: '32' }],
  },
};

export const viewport: Viewport = {
  viewportFit: 'cover',
  colorScheme: 'light dark',
};
