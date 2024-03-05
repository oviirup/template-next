import type { Route } from 'next';
import Link, { LinkProps } from 'next/link';
import { forwardRef } from 'react';
import type { UrlObject } from 'node:url';

/** Detects if string url is external url */
export function isExternal(href: string | UrlObject) {
  if (!href) return false;
  href = href.toString();
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(href);
}

export type AnchorProps = HTMLProps<HTMLAnchorElement> &
  LinkProps<Route> & { text?: React.ReactNode };

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  (props, refer) => {
    const { href, text, ...attr } = props;
    const _href = href.toString();
    const URLstring = _href?.replace(/https?\:\/+(www.)?/, '');

    if (isExternal(href) && !props.target) {
      attr.target = '_blank';
    }

    return (
      <Link href={_href as Route} {...attr} ref={refer}>
        {props.children ?? text ?? URLstring}
      </Link>
    );
  },
);
Anchor.displayName = 'Link';
