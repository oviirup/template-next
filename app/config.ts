let vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL

export const siteURL = vercelUrl ?? 'http://localhost:3000/'
export const siteTitle = 'Next Template'
export const siteStatus = 'BETA'

export const defaultSEO: Metadata = {
	title: {
		default: 'Next Template',
		template: '%s - Next Template',
	},
	openGraph: {
		type: 'website',
		title: {
			default: 'Next Template',
			template: '%s - Next Template',
		},
		locale: 'en',
	},
	colorScheme: 'light dark',
	icons: {
		icon: '/favicon.ico',
		shortcut: [{ url: '/favicon.ico', sizes: '32' }],
	},
}
