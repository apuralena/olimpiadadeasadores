import type { APIRoute } from "astro";
import { db } from "@/server/db";
import fs from "node:fs";
import path from "node:path";

export const POST: APIRoute = async ({ request }) => {
  const auth = request.headers.get("authorization") || "";
  const token = auth.replace("Bearer ", "").trim();
  if (!process.env.ADMIN_TOKEN || token !== process.env.ADMIN_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }

  const schemaPath = path.join(process.cwd(), "src/server/schema.sql");
  const sql = fs.readFileSync(schemaPath, "utf8");

  // Ejecutar statements; Turso no soporta múltiples ; en una sola ejecución,
  // así que dividimos en bloques simples.
  const statements = sql
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);

  for (const stmt of statements) {
    await db.execute({ sql: stmt });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
