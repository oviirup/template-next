import { cn } from '~/lib/utils'
import { inter } from '~/styles/fonts'
import '~/styles/globals.css'

export { metadata, viewport } from './metadata'

export default function RootLayout({ children }: Props) {
  const fontVariables = [inter.style, inter.variable]
  return (
    <html lang="en" data-theme="light">
      <body className={cn(fontVariables, 'flex min-h-svh antialiased')}>
        {children}
      </body>
    </html>
  )
}
