import { inter, raleway } from '@/app/fonts';
import '@/app/globals.scss';
import { cn } from '@/components/utils';

export { metadata, viewport } from './metadata';

export default function RootLayout({ children }: Props) {
  const fontVariables = [raleway.variable, inter.variable];
  return (
    <html lang='en'>
      <body className={cn(fontVariables, inter.className)}>{children}</body>
    </html>
  );
}
