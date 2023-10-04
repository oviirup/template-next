/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	compiler: {
		removeConsole: { exclude: ['warn', 'error'] },
	},
	cleanDistDir: true,
}
