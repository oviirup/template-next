import { Metadata, Viewport } from "next";
import { Providers } from "@/components/layout/providers";
import { SITE } from "@/config/app";
import { canonical, cn } from "@/lib/utils";
import { fontClassNames } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s | ${SITE.name}` },
  description: SITE.desc,
  alternates: {
    canonical: canonical("/"),
  },
  openGraph: {
    type: "website",
    title: { default: SITE.name, template: `%s | ${SITE.name}` },
    description: SITE.desc,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: { default: SITE.name, template: `%s | ${SITE.name}` },
    description: SITE.desc,
  },
  robots: { index: true, follow: true },
  icons: [{ url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" }],
};

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className="scrollbar-thin overflow-x-clip scroll-smooth"
      suppressHydrationWarning>
      <body className={cn("overflow-x-clip font-sans", fontClassNames)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
