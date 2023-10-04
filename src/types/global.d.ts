/** React props with children */
type Props<P = {}> = React.PropsWithChildren<P>
/** HTML element props */
type HTML<El extends HTMLElement = HTMLElement> = React.HTMLProps<El>
/** SVG element props */
type SVG<EL extends SVGElement = SVGElement> = React.SVGAttributes<EL>
