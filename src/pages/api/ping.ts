// src/pages/api/ping.ts
export const prerender = false;
export async function GET() {
  return new Response(JSON.stringify({ ok: true, time: Date.now() }), {
    headers: { "Content-Type": "application/json" },
  });
}
