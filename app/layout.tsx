import { cn } from '@/components/utils'
import { defaultSEO } from '@/public/config'
import { raleway } from '@/styles/font'
import '@/styles/global.sass'

export const metadata: Metadata = defaultSEO

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body className={cn(raleway.variable)}>{children}</body>
		</html>
	)
}
