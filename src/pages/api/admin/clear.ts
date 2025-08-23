// src/pages/api/admin/clear.ts
import type { APIRoute } from "astro";
import { db } from "@/server/db";

export const prerender = false;

const ADMIN_TOKEN =
  (import.meta as any).env?.ADMIN_TOKEN ?? process.env.ADMIN_TOKEN;

export const POST: APIRoute = async ({ request }) => {
  const auth = request.headers.get("authorization") || "";
  if (!ADMIN_TOKEN || auth !== `Bearer ${ADMIN_TOKEN}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  await db.execute("PRAGMA foreign_keys = ON;");
  await db.execute("BEGIN;");
  try {
    await db.execute("DELETE FROM competition_entries;");
    await db.execute("DELETE FROM truco_entries;");
    await db.execute("DELETE FROM people;");
    await db.execute("DELETE FROM competitions;");

    await db.execute(
      "DELETE FROM sqlite_sequence WHERE name IN ('people','competition_entries','truco_entries');"
    );

    await db.execute(`INSERT OR IGNORE INTO competitions (id, name) VALUES
      ('degustacion','Degustación a ciegas'),
      ('choripan','Cagao’ de hambre (choripán)'),
      ('fotografia','Mejor fotografía'),
      ('trivia','Trivia argenta'),
      ('fuego_rapido','Encender el fuego más rápido'),
      ('truco','Campeonato de Truco (parejas)');`);

    await db.execute("COMMIT;");
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    await db.execute("ROLLBACK;");
    return new Response(JSON.stringify({ ok: false, error: String(e) }), {
      status: 500,
    });
  }
};
