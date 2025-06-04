import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Tooltip } from './tooltip';
import type { VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap focus-ring transition-all disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/40',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-fg hocus:bg-primary/90',
        destructive: `bg-destructive text-white focus-visible:ring-destructive/30 dark:bg-destructive/70 dark:focus-visible:ring-destructive/40 hocus:bg-destructive/90`,
        outline: `border border-input bg-input/30 hocus:bg-accent hocus:text-accent-fg`,
        secondary: `bg-secondary text-secondary-fg hocus:bg-secondary/80`,
        ghost: `hocus:bg-accent hocus:text-accent-fg`,
        link: `text-primary underline-offset-4 hocus:underline`,
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 gap-1.5 rounded-md px-3',
        lg: 'h-11 rounded-md px-7',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    icon?: boolean;
    tooltip?: string;
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
    tooltipOffset?: number;
    asChild?: boolean;
  };

function Button({
  icon,
  variant,
  size,
  asChild = false,
  tooltip,
  tooltipPosition,
  tooltipOffset,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  const base = (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );

  return tooltip ? (
    <Tooltip delayDuration={100}>
      <Tooltip.Trigger asChild>{base}</Tooltip.Trigger>
      <Tooltip.Content side={tooltipPosition} sideOffset={tooltipOffset}>
        {tooltip}
      </Tooltip.Content>
    </Tooltip>
  ) : (
    base
  );
}

namespace Button {
  export type Props = ButtonProps;
}

export { Button, buttonVariants };
