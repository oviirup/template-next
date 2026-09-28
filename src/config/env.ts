import { createEnv } from "@oviirup/env/next";
import { vercel } from "@oviirup/env/presets";
import { z } from "zod";

export const env = createEnv({
  extends: [vercel()],
  shared: {
    NODE_ENV: z.enum(["development", "production", "test"]),
    PORT: z.string(),
  },
  vars: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ?? "3000",
  },
  skip: !process.env.NEXT_RUNTIME,
});

export const isProd = env.NODE_ENV === "production";
export const isDev = env.NODE_ENV === "development";
export const isPreview = env.VERCEL_ENV === "preview";
