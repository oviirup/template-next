import { defaultSEO } from '@/app/config'
import { Raleway } from 'next/font/google'
import { cn } from '@/components/utils'
import '@/styles/global.sass'

const raleway = Raleway({
	variable: '--font-raleway',
	subsets: ['latin'],
})

export const metadata: Metadata = defaultSEO

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body className={cn(raleway.variable)}>{children}</body>
		</html>
	)
}
