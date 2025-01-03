import { cn } from '~/components/utils';
import { inter } from '~/styles/fonts';
import '~/styles/globals.scss';

export { metadata, viewport } from './metadata';

export default function RootLayout({ children }: Props) {
  const fontVariables = [inter.style, inter.variable];
  return (
    <html lang="en" data-theme="dark">
      <body className={cn(fontVariables, 'flex min-h-svh antialiased')}>{children}</body>
    </html>
  );
}
