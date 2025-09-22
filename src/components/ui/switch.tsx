import * as React from 'react';
import { Switch as SwitchPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';

const SWITCH_SIZES = {
  default: '16px',
  lg: '20px',
  xl: '24px',
} as const;

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: keyof typeof SWITCH_SIZES;
};

function Switch({ className, size = 'default', style, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer inline-flex h-(--switch-height) w-(--switch-width) shrink-0 cursor-pointer items-center rounded-full border border-transparent p-px focus-ring transition-all outline-none focus-visible:border-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80',
        className,
      )}
      style={{
        ...style,
        '--switch-thumb-size': SWITCH_SIZES[size] ?? '16px',
        '--switch-height': 'calc(var(--switch-thumb-size) * 1 + 4px)',
        '--switch-width': 'calc(var(--switch-thumb-size) * 2 + 2px)',
      }}
      {...props}>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'pointer-events-none block size-(--switch-thumb-size) rounded-full border border-ring/25 bg-background shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-px dark:data-[state=checked]:bg-primary-fg dark:data-[state=unchecked]:bg-foreground',
        )}
      />
    </SwitchPrimitive.Root>
  );
}

namespace Switch {
  export type Props = SwitchProps;
}

export { Switch };
