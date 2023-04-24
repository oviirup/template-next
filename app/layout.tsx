import '@/styles/global.sass'
import { defaultSEO } from '@/app/config'

export const metadata: Metadata = defaultSEO

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
