import { envalid } from '@oviirup/envalid';
import { vercel } from '@oviirup/envalid/presets';
import { z } from 'zod';

export const env = envalid({
  extends: [vercel()],
  shared: {
    NODE_ENV: z.enum(['development', 'production', 'test']),
    PORT: z.string(),
  },
  // variables only exposed to client
  client: {},
  // variables only exposed to server
  server: {},
  // must specify all variables individually
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ?? '3000', // Next.JS build script dynamically adds the PORT env, so it needs a fallback value
  },
});
