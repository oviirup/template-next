import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { code, sans } from "@/styles/fonts";
import "@/styles/globals.css";

export { metadata, viewport } from "./metadata";

export default function RootLayout({ children }: React.PropsWithChildren) {
  const fontVariables = [sans.className, sans.variable, code.variable];
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontVariables, "flex min-h-svh antialiased")}>
        <ThemeProvider enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
