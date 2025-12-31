import { Fira_Code, Inter } from "next/font/google";

export const fontSans = Inter({
  variable: "--next-font-sans",
  subsets: ["latin"],
  preload: true,
});

export const fontCode = Fira_Code({
  variable: "--next-font-code",
  subsets: ["greek", "greek-ext", "latin", "latin-ext"],
});

export const fonts = {
  sans: fontSans,
  code: fontCode,
};

export const fontClassNames = [
  fontSans.className,
  fontSans.variable,
  fontCode.variable,
];
