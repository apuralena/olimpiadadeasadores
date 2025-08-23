import { createClient } from "@libsql/client";

// Astro/Vite: variables privadas están en import.meta.env (en server)
// Dejo fallback a process.env por si corrés en prod/adapter que las inyecta.
const TURSO_DATABASE_URL =
  (import.meta as any).env?.TURSO_DATABASE_URL ??
  process.env.TURSO_DATABASE_URL;
const TURSO_AUTH_TOKEN =
  (import.meta as any).env?.TURSO_AUTH_TOKEN ?? process.env.TURSO_AUTH_TOKEN;

if (!TURSO_DATABASE_URL) throw new Error("Falta TURSO_DATABASE_URL");
if (!TURSO_AUTH_TOKEN) throw new Error("Falta TURSO_AUTH_TOKEN");

export const db = createClient({
  url: TURSO_DATABASE_URL,
  authToken: TURSO_AUTH_TOKEN,
});
