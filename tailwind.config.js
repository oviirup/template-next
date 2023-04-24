import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config}*/
module.exports = {
	darkMode: 'media',
	content: [
		'./app/**/*.{ts,tsx,mdx}',
		'./pages/**/*.{ts,tsx,mdx}',
		'./components/**/*.{ts,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// asign neutral color to gray
				gray: colors.neutral,
				//@ts-ignore removes neutral colors
				neutral: null,
			},
		},
	},
	plugins: [],
}
