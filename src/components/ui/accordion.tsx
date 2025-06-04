import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

function AccordionRoot({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex py-2">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'group -mx-1 flex flex-1 items-start justify-between gap-4 rounded-md border border-transparent px-1 py-2 text-left text-sm font-medium focus-ring transition-all outline-none hover:underline focus-visible:border-ring disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
        {...props}>
        {children}
        <svg
          viewBox="0 0 24 24"
          className="size-4 fill-none stroke-current stroke-2 *:origin-center *:transition-transform *:duration-250"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M12 5v14" className="group-data-[state=open]:rotate-90" />
          <path d="M5 12h14" className="group-data-[state=open]:rotate-180" />
        </svg>{' '}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm text-muted-fg data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}>
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
