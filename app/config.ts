let vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL

export const siteURL = vercelUrl ?? 'http://localhost:3000/'
export const siteTitle = 'Next Template'
export const siteStatus = 'BETA'

export const defaultSEO: Metadata = {
	metadataBase: new URL(siteURL),
	title: {
		default: siteTitle,
		template: `%s - ${siteTitle}`,
	},
	openGraph: {
		type: 'website',
		title: {
			default: siteTitle,
			template: `%s - ${siteTitle}`,
		},
		locale: 'en',
	},
	colorScheme: 'light dark',
	icons: {
		icon: '/favicon.ico',
		shortcut: [{ url: '/favicon.ico', sizes: '32' }],
	},
}
