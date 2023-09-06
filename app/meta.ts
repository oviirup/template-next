import { siteTitle, siteURL } from '@/app/config'

const meta: Metadata = {
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

export default meta
