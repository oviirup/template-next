/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		removeConsole: { exclude: ['warn', 'error'] },
	},
	cleanDistDir: true,
}

export default nextConfig
