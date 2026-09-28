"use client";

import { Route } from "next";
import Anchor, { LinkProps } from "next/link";
import { useComposeEvent } from "@/hooks/use-compose-event";

const isExternal = (href: string) => /^https?:\/\//.test(href);

export function Link({ external, href, onNavigate: onNavigateProp, ...props }: Link.Props) {
  const _href = href.toString();
  const _hash = _href.split("#")[1];
  const _external = isExternal(_href) || external;

  const onNavigate = useComposeEvent(onNavigateProp, () => {
    if (!_hash) return;
    document.getElementById(_hash)?.scrollIntoView();
  });

  return (
    <Anchor
      target={_external ? "_blank" : undefined}
      href={href}
      onNavigate={onNavigate}
      {...props}
    />
  );
}

export namespace Link {
  export type Props = LinkProps<Route> & {
    external?: boolean;
  } & Omit<React.ComponentProps<"a">, keyof LinkProps<Route>>;
}
