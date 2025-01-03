import Link, { LinkProps } from 'next/link';
import type { Route } from 'next';
import type { UrlObject } from 'url';

/** Detects if string url is external url */
function isExternal(href: string | UrlObject) {
  if (!href) return false;
  href = href.toString();
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(href);
}

export type AnchorProps = React.HTMLProps<HTMLAnchorElement> & LinkProps<Route> & { text?: React.ReactNode };

function Anchor(props: AnchorProps) {
  const { href, text, ...attr } = props;
  const _href = href.toString();
  const URLstring = _href?.replace(/https?\:\/+(www.)?/, '');

  if (isExternal(href) && !props.target) {
    attr.target = '_blank';
    attr.rel = 'noopener noreferrer';
  }

  return (
    <Link href={_href as Route} {...attr}>
      {props.children ?? text ?? URLstring}
    </Link>
  );
}

namespace Anchor {
  export type Props = AnchorProps;
  export type Ref = HTMLAnchorElement;
}

export { Anchor };
