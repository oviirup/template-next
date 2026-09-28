import { withCn } from "cn/next";
import { NextConfig } from "next";

const config: NextConfig = {
  reactCompiler: true,
  typescript: { ignoreBuildErrors: true },
  images: { qualities: [100, 95, 90, 80, 85] },
  allowedDevOrigins: ["192.168.1.*"],
  headers: () => [
    {
      source: "/(.*)",
      headers: [
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Creator", value: "oviirup" },
      ],
    },
  ],
};

export default withCn(config, {
  config: "cn.config.js",
  content: ["src/{apps,components}/**/*.{ts,tsx}"],
  out: "cn.tables.js",
});
