import 'react';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_VERSION: string;
    NEXT_PUBLIC_SITE_URL: string;
  }
}
