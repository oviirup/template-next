import meta from '@/app/meta'
import { cn } from '@/library/utils'
import { inter, raleway } from '@/styles/font'
import '@/styles/global.sass'

export const metadata = meta

export default function RootLayout({ children }: Props) {
	const fonts = [raleway.variable, inter.variable]
	return (
		<html lang='en'>
			<body className={cn(fonts)}>{children}</body>
		</html>
	)
}
