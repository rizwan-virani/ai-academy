import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Served from https://<user>.github.io/ai-academy/ on GitHub Pages, so the
// build needs a matching base path. Local dev/preview stays at "/".
export default defineConfig({
  base: process.env.GITHUB_PAGES ? "/ai-academy/" : "/",
  plugins: [react(), tailwindcss()],
});
