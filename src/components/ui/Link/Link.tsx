import Anchor, { LinkProps } from 'next/link';
import { forwardRef } from 'react';
import { isExternal } from '@/lib/assertions';
import type { Route } from 'next';

export type AnchorProps = HTMLProps<HTMLAnchorElement> &
  LinkProps<Route> & { text?: React.ReactNode };

export const Link = forwardRef<HTMLAnchorElement, AnchorProps>(
  (props, refer) => {
    const { href, text, ...attr } = props;
    const _href = href.toString();
    const URLstring = _href?.replace(/https?\:\/+(www.)?/, '');

    if (isExternal(href) && !props.target) {
      attr.target = '_blank';
    }

    return (
      <Anchor href={_href as Route} {...attr} ref={refer}>
        {props.children ?? text ?? URLstring}
      </Anchor>
    );
  },
);
Link.displayName = 'Link';
