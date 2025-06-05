import { Fira_Code, Inter } from 'next/font/google';

export const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  preload: true,
});

export const code = Fira_Code({
  variable: '--font-code',
  subsets: ['greek', 'greek-ext', 'latin', 'latin-ext'],
});
