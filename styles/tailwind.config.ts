import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import customPlugin from './tailwind.plugin'

/** Main tailwind config */
const tailwindConfig: Config = {
	darkMode: 'media',
	content: [
		'./app/**/*.{js,jsx,ts,tsx,mdx}',
		'./components/**/*.{js,jsx,ts,tsx,mdx}',
	],
	theme: {
		container: {
			padding: 'clamp(1.5rem,4vw,3rem)',
			center: true,
		},
		extend: {
			colors: {
				// assign neutral color to gray
				gray: colors.neutral,
				//@ts-ignore removes neutral colors
				neutral: null,
			},
			fontFamily: {
				inter: 'var(--font-inter)',
				raleway: 'var(--font-raleway)',
			},
		},
	},
	plugins: [customPlugin],
}

export default tailwindConfig
