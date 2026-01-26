import { Providers } from "@/components/layout/providers";
import { fontClassNames } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export { metadata, viewport } from "./meta";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontClassNames)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
