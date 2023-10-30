import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const tailwindConfig: Config = {
	darkMode: 'media',
	content: [
		'./sec/app/**/*.{js,jsx,ts,tsx,mdx}',
		'./sec/components/**/*.{js,jsx,ts,tsx,mdx}',
	],
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
			fontFamily: {
				raleway: 'var(--font-raleway, Raleway)',
				inter: 'var(--font-inter, Inter)',
			},
		},
	},
}

export default tailwindConfig
