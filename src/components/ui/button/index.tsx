"use client";

import { Button as BaseButton } from "baseui/button";
import { Link } from "@/components/ui/link";
import { cn, cva } from "@/lib/utils";

export const buttonVariants = cva({
  base: "focus:highlight icon:pointer-events-none inline-flex icon:not-[[class*='size-']]:size-4 icon:shrink-0 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus:border-ring/50 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: `bg-primary text-primary-fg hover:opacity-90 focus:outline-ring/60`,
      secondary: `bg-secondary text-secondary-fg hover:opacity-90`,
      error: `bg-error text-white hover:opacity-90 focus:outline-error/75`,
      outline: `border bg-card hover:bg-secondary/75`,
      ghost: `hover:bg-accent hover:text-accent-fg dark:hover:bg-accent/50`,
      link: `text-primary hocus:underline underline-offset-3 decoration-current/50`,
    },
    size: {
      default: "h-9 rounded-md px-3 text-sm",
      sm: "h-7 gap-1.5 rounded-sm px-2 text-sm",
      lg: "h-12 rounded-md px-5 text-base",
    },
    icon: {
      true: "p-0",
    },
    rounded: {
      true: "rounded-full",
    },
  },
  compoundVariants: [
    { size: "default", icon: true, class: "size-9" },
    { size: "sm", icon: true, class: "size-7" },
    { size: "lg", icon: true, class: "size-11" },
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export function Button({
  type = "button",
  className,
  variant,
  size,
  icon,
  rounded,
  nonNative = false,
  ...props
}: Button.Props) {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size, icon, rounded }), className)}
      type={type}
      nativeButton={!nonNative}
      data-variant={variant}
      data-slot="button"
      data-size={size}
      {...props}
    />
  );
}
export namespace Button {
  export type Props = Omit<BaseButton.Props, "nativeButton"> & {
    nonNative?: boolean;
  } & cva.Props<typeof buttonVariants>;
}

export function ButtonLink({
  className,
  variant,
  size,
  icon,
  rounded,
  ...props
}: ButtonLink.Props) {
  return (
    <Link className={cn(buttonVariants({ variant, size, icon, rounded }), className)} {...props} />
  );
}
export namespace ButtonLink {
  export type Props = Link.Props & cva.Props<typeof buttonVariants>;
}
