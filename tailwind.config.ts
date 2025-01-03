import pluggables from 'tailwindcss-pluggables';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { xl: '80rem' },
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          fg: 'hsl(var(--card-fg))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          fg: 'hsl(var(--popover-fg))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          fg: 'hsl(var(--primary-fg))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          fg: 'hsl(var(--secondary-fg))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          fg: 'hsl(var(--muted-fg))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          fg: 'hsl(var(--accent-fg))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          fg: 'hsl(var(--destructive-fg))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar))',
          fg: 'hsl(var(--sidebar-fg))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
          primary: {
            DEFAULT: 'hsl(var(--sidebar-primary))',
            fg: 'hsl(var(--sidebar-primary-fg))',
          },
          accent: {
            DEFAULT: 'hsl(var(--sidebar-accent))',
            fg: 'hsl(var(--sidebar-accent-fg))',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      data: {
        active: 'active="true"',
        selected: 'selected="true"',
      },
    },
  },
  future: {
    disableColorOpacityUtilitiesByDefault: true,
    hoverOnlyWhenSupported: true,
  },
  plugins: pluggables(),
};

export default config;
