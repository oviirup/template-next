'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

function Toaster({ ...props }: ToasterProps) {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      style={{
        '--normal-bg': 'var(--popover)',
        '--normal-text': 'var(--popover-fg)',
        '--normal-border': 'var(--border)',
      }}
      toastOptions={{
        classNames: {
          title: '!text-foreground !font-normal',
          description: 'text-sm !text-muted-fg truncate',
        },
        actionButtonStyle: {
          borderRadius: '9999px',
          paddingInline: '10px',
          display: 'inline-flex',
          gap: '6px',
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
