import { defineConfig } from "nitro/config";

export default defineConfig({
  preset: "vercel",
  publicAssets: [
    {
      dir: "dist/client",
    },
  ],
  handlers: [
    {
      route: "/**",
      handler: "./dist/server/server.js",
    },
  ],
});
