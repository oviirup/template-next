const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
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
		zIndex: ['auto', 0, 1, 2, 3, 4, 5, 10, 20, 30, 40, 50].reduce(
			(obj, value) => {
				obj[value] = String(value)
				return obj
			},
			{},
		),
		extend: {
			colors: {
				primary: colors.indigo,
				gray: colors.neutral,
				neutral: null,
			},
			fontFamily: {
				raleway: 'var(--font-raleway, Raleway)',
				inter: 'var(--font-inter, Inter)',
			},
		},
	},
}

 
