import * as React from 'react';
import { cn } from '@/lib/utils';

export type LabelProps = React.ComponentProps<'label'>;

function Label({ className, ...props }: LabelProps) {
  return (
    <label
      data-slot="label"
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

namespace Label {
  export type Props = LabelProps;
}

export { Label };
