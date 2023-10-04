import { cn } from '@/lib/utils'
import { inter, raleway } from './fonts'
import './global.scss'

export { metadata } from './metadata'

export default function RootLayout({ children }: Props) {
	const fonts = [raleway.variable, inter.variable]
	return (
		<html lang='en'>
			<body className={cn(fonts)}>{children}</body>
		</html>
	)
}
