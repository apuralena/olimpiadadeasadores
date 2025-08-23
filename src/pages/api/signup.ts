import type { APIRoute } from "astro";
import { db } from "@/server/db";
import { SignupSchema } from "@/lib/schemas";

export const prerender = false;

// 👇 helper aquí
function normalizePhone(raw: string) {
  const cleaned = raw.replace(/[^\d+]/g, "");
  return cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const parsed = SignupSchema.parse(body);

    // honeypot
    if ((parsed as any).hp) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 👇 siempre normalizamos el teléfono
    const phone = normalizePhone(parsed.phone);

    if (parsed.competitionId === "truco") {
      // TRUCO con nombres completos
      await db.execute({
        sql: `INSERT INTO truco_entries
              (team_name, p1_full_name, p2_full_name, contact_phone)
              VALUES (?, ?, ?, ?)
              ON CONFLICT(contact_phone) DO NOTHING`, // 👈 evita error UNIQUE
        args: [parsed.team ?? null, parsed.p1Full, parsed.p2Full, phone],
      });
    } else {
      // INDIVIDUAL con full_name
      const person = await db.execute({
        sql: `INSERT INTO people (full_name, phone)
              VALUES (?, ?)
              ON CONFLICT(phone) DO UPDATE SET full_name=excluded.full_name
              RETURNING id`,
        args: [parsed.fullName, phone],
      });

      const personId = Number((person.rows[0] as any).id);
      await db.execute({
        sql: `INSERT OR IGNORE INTO competition_entries (person_id, competition_id)
              VALUES (?, ?)`,
        args: [personId, parsed.competitionId],
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e: any) {
    return new Response(
      JSON.stringify({ ok: false, error: e?.message ?? "Error" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
