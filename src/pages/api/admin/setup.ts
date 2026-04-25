// setup.ts - Admin endpoint commented out
// import type { APIRoute } from "astro";
// import { db } from "@/server/db";

// export const prerender = false;

// const ADMIN_TOKEN = process.env.ADMIN_TOKEN;
// if (!ADMIN_TOKEN) throw new Error("ADMIN_TOKEN no definido");

// export const POST: APIRoute = async ({ request }) => {
//   const auth = request.headers.get("Authorization");
//   if (auth !== `Bearer ${ADMIN_TOKEN}`) {
//     return new Response(JSON.stringify({ error: "Unauthorized" }), {
//       status: 401,
//       headers: { "Content-Type": "application/json" },
//     });
//   }

//   await db.execute({ sql: "PRAGMA foreign_keys = ON" });

//   await db.execute({
//     sql: `CREATE TABLE IF NOT EXISTS people (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       full_name TEXT NOT NULL,
//       phone TEXT UNIQUE NOT NULL,
//       created_at DATETIME DEFAULT CURRENT_TIMESTAMP
//     )`,
//   });

//   await db.execute({
//     sql: `CREATE TABLE IF NOT EXISTS truco_entries (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       team_name TEXT,
//       p1_full_name TEXT NOT NULL,
//       p2_full_name TEXT NOT NULL,
//       contact_phone TEXT UNIQUE NOT NULL,
//       created_at DATETIME DEFAULT CURRENT_TIMESTAMP
//     )`,
//   });

//   await db.execute({
//     sql: `CREATE TABLE IF NOT EXISTS competitions (
//       id TEXT PRIMARY KEY,
//       label TEXT NOT NULL,
//       kind TEXT NOT NULL
//     )`,
//   });

//   await db.execute({
//     sql: `CREATE TABLE IF NOT EXISTS competition_entries (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       person_id INTEGER NOT NULL,
//       competition_id TEXT NOT NULL,
//       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//       FOREIGN KEY(person_id) REFERENCES people(id),
//       UNIQUE(person_id, competition_id)
//     )`,
//   });

//   const competitions = [
//     { id: "choripan", label: "Cagao' de hambre (choripán)", kind: "individual" },
//     { id: "fotografia", label: "Mejor fotografía", kind: "individual" },
//     { id: "trivia", label: "Trivia argenta", kind: "individual" },
//     { id: "fuego_rapido", label: "Encender el fuego más rápido", kind: "individual" },
//     { id: "sapucay", label: "El mejor Sapucay", kind: "individual" },
//     { id: "truco", label: "Campeonato de Truco (parejas)", kind: "truco" },
//     { id: "fondo_blanco_buller", label: "Fondo Blanco Buller", kind: "individual" },
//   ];

//   for (const c of competitions) {
//     await db.execute({
//       sql: `INSERT OR IGNORE INTO competitions (id, label, kind) VALUES (?, ?, ?)`,
//       args: [c.id, c.label, c.kind],
//     });
//   }

//   return new Response(JSON.stringify({ ok: true }), {
//     status: 200,
//     headers: { "Content-Type": "application/json" },
//   });
// };
