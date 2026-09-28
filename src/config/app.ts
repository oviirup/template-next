import { env, isDev, isPreview } from "./env";

const BASE_DOMAIN = "acme.com";
const SITE_DOMAIN = isDev ? `localhost:${env.PORT}` : isPreview ? env.VERCEL_URL! : BASE_DOMAIN;

const SITE_URL = isDev ? `http://${SITE_DOMAIN}/` : `https://${SITE_DOMAIN}/`;

export const SITE = {
  name: "Next Template",
  desc: "Simple Next.js template to get started quickly",
  domain: SITE_DOMAIN,
  url: SITE_URL,
};
