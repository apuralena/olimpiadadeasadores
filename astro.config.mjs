// @ts-check
import { defineConfig } from "astro/config"; // 👈 DESCOMENTAR
import tailwind from "@tailwindcss/vite"; // 👈 DESCOMENTAR
import react from "@astrojs/react"; // 👈 DESCOMENTAR

import vercel from "@astrojs/vercel";

export default defineConfig({
  vite: { plugins: [tailwind()] },
  integrations: [react()],

  server: {
    host: true, // accesible por IP local
    port: 4321, // (opcional) fuerza 4321; si está ocupado, cambialo
  },

  // endpoints POST disponibles sin prerender
  output: "server",

  adapter: vercel()
});