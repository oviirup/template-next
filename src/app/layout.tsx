import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { fontClassNames } from "./fonts";
import "./globals.css";

export { metadata, viewport } from "./metadata";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontClassNames, "flex min-h-svh antialiased")}>
        <ThemeProvider enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
