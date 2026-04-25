// src/pages/api/admin/clear.ts
// clear.ts - Admin endpoint commented out
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
//   await db.execute({ sql: "DELETE FROM competition_entries" });
//   await db.execute({ sql: "DELETE FROM truco_entries" });
//   await db.execute({ sql: "DELETE FROM people" });

//   return new Response(JSON.stringify({ ok: true }), {
//     status: 200,
//     headers: { "Content-Type": "application/json" },
//   });
// };
