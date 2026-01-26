import { ThemeProvider } from "next-themes";

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider enableSystem disableTransitionOnChange defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
