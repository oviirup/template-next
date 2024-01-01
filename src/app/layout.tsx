import { cn } from '@/lib/utils';
import { inter, raleway } from '@/styles/fonts';
import '@/styles/globals.scss';

export { metadata, viewport } from './metadata';

export default function RootLayout({ children }: Props) {
  const fontVariables = [raleway.variable, inter.variable];
  return (
    <html lang='en'>
      <body className={cn(fontVariables, inter.className)}>{children}</body>
    </html>
  );
}
