import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

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
			screens: { xl: '80rem' },
		},
		// prettier-ignore
		zIndex: ['auto',0,1,2,3,4,5,10,20,30,40,50].reduce((obj, value) => {
			obj[value] = String(value)
			return obj
		}, {} as Record<string, string>),
		extend: {
			colors: {
				primary: colors.indigo,
				gray: colors.neutral,
				//@ts-ignore removes neutral colors
				neutral: null,
			},
			fontFamily: {
				raleway: 'var(--font-raleway, Raleway)',
				inter: 'var(--font-inter, Inter)',
			},
		},
	},
	future: { hoverOnlyWhenSupported: true },
}

export default tailwindConfig
