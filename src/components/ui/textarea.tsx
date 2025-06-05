import * as React from 'react';
import { cn } from '@/lib/utils';

type TextareaProps = React.ComponentProps<'textarea'> & {
  autoHeight?: boolean;
};

function Textarea({ className, autoHeight = false, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex w-full rounded-md border border-input bg-input/30 px-3 py-2.25 text-sm focus-ring transition-[color,box-shadow] scrollbar-thin placeholder:text-muted-fg focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/40',
        autoHeight ? 'field-sizing-content resize-none' : 'min-h-20',
        className,
      )}
      {...props}
    />
  );
}

namespace Textarea {
  export type Props = TextareaProps;
}

export { Textarea };
