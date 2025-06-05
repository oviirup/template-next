import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, MinusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root>;

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer size-5 shrink-0 cursor-pointer rounded-xs border border-input bg-input/30 focus-ring transition-all focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/30 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-fg data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-fg dark:aria-invalid:ring-destructive/40',
        className,
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none">
        {props.checked === 'indeterminate' ? (
          <MinusIcon size={14} strokeWidth={2.5} aria-hidden="true" />
        ) : (
          <CheckIcon size={14} strokeWidth={2.5} aria-hidden="true" />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

namespace Checkbox {
  export type Props = CheckboxProps;
}

export { Checkbox };
