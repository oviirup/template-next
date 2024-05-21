/** HTML element props */
type HTMLProps<El extends HTMLElement = HTMLElement> = React.HTMLProps<El>;
/** HTML element attributes */
type HTMLAttr<El extends HTMLElement = HTMLElement> = React.HTMLAttributes<El>;

/** SVG element props */
type SVGProps = React.SVGProps<SVGElement> & { size?: number };
/** SVG element attributes */
type SVGAttr = React.SVGAttributes<SVGElement> & { size?: number };

/** React props with children */
type Props<P = {}> = React.PropsWithChildren<P>;
/** Page props with dynamic params and search params */
type PageProps = {
  params?: Record<string | string[]>;
  searchParams?: Record<string | string[]>;
};
