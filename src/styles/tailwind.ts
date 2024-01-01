import tailwindAnimate from 'tailwindcss-animate';
import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  darkMode: ['class', 'data-theme="dark"'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      padding: 'clamp(1.5rem,4vw,3rem)',
      center: true,
      screens: { xl: '80rem' },
    },
    extend: {
      colors: {
        gray: colors.neutral,
      },
      zIndex: Array.from('123456789').reduce((acc, e) => {
        return Object.assign(acc, { [e]: e });
      }, {}),
      fontFamily: {
        raleway: 'var(--font-raleway, Raleway)',
        inter: 'var(--font-inter, Inter)',
      },
    },
  },
  plugins: [tailwindAnimate],
};

export default tailwindConfig;
