"use client";
import * as React from "react";
import { COMPETITIONS, type CompetitionId } from "@/lib/competitions";
import { SignupSchema } from "@/lib/schemas";

export default function SignupDynamic() {
  const [competitionId, setCompetitionId] = React.useState<CompetitionId | "">(
    ""
  );
  const [loading, setLoading] = React.useState(false);
  const [msg, setMsg] = React.useState<string | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  const isTruco = competitionId === "truco";
  const isIndividual = !!competitionId && !isTruco;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    const d = new FormData(e.currentTarget);
    const payload: any = {
      competitionId,
      hp: String(d.get("company") || ""), // honeypot
      consent: d.get("consent") === "on",
    };

    if (isTruco) {
      Object.assign(payload, {
        team: String(d.get("team") || ""),
        p1Full: String(d.get("p1Full") || ""),
        p2Full: String(d.get("p2Full") || ""),
        phone: String(d.get("phone") || "").replace(/\s+/g, ""),
      });
    } else if (isIndividual) {
      Object.assign(payload, {
        fullName: String(d.get("fullName") || ""),
        phone: String(d.get("phone") || "").replace(/\s+/g, ""),
      });
    } else {
      setLoading(false);
      return setMsg("Elegí una competencia.");
    }

    const parsed = SignupSchema.safeParse(payload);
    if (!parsed.success) {
      setLoading(false);
      const issue = parsed.error.issues[0];
      return setMsg(issue?.message ?? "Datos inválidos");
    }

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    const data = await res.json();
    setLoading(false);

    if (data.ok) {
      formRef.current?.reset();
      setCompetitionId("");
      setMsg(
        isTruco
          ? "¡Pareja de truco registrada! Les contactamos por WhatsApp."
          : "¡Inscripción registrada! Te vamos a contactar por WhatsApp."
      );
    } else {
      setMsg(data.error ?? "Hubo un problema.");
    }
  }

  return (
    <div className='max-w-lg mx-auto'>
      {/* Contenedor del formulario con diseño integrado al papel vintage */}
      <div className='bg-[--color-parchment]/80 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-[--color-wood-light]/40 p-8 relative overflow-hidden'>
        {/* Decoración de fondo que simula papel envejecido */}
        <div className='absolute inset-0 bg-gradient-to-br from-[--color-wood-dark]/5 via-transparent to-[--color-wood-light]/8 pointer-events-none'></div>
        <div className='absolute -top-20 -right-20 w-40 h-40 bg-[--color-primary]/8 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-20 -left-20 w-40 h-40 bg-[--color-wood-dark]/10 rounded-full blur-3xl'></div>

        {/* Textura de papel adicional */}
        <div className='absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-[--color-wood-light]/10 to-transparent'></div>
        <div className='absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_200px_150px_at_20%_10%,rgba(139,108,67,0.1),transparent),radial-gradient(ellipse_150px_100px_at_80%_80%,rgba(160,134,91,0.08),transparent)]'></div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className='space-y-6 relative z-10'
        >
          {/* Selección de competencia */}
          <div className='space-y-3'>
            <h2 className='text-2xl font-bold text-[--color-ink] text-center mb-2 font-ui'>
              🔥 Elegí tu competencia
            </h2>
            <p className='text-center text-[--color-ink]/70 text-sm mb-4 font-ui'>
              Seleccioná en qué categoría querés participar
            </p>
            <select
              name='competitionId'
              value={competitionId}
              onChange={(e) =>
                setCompetitionId(e.target.value as CompetitionId)
              }
              className='w-full p-4 rounded-xl border-2 border-[--color-wood-light]/50 bg-[--color-parchment]/90 backdrop-blur-sm text-[--color-ink] font-medium shadow-lg transition-all duration-300 hover:border-[--color-primary]/60 focus:border-[--color-primary] focus:ring-4 focus:ring-[--color-primary]/20 focus:outline-none font-ui'
              required
            >
              <option value='' disabled>
                🏆 Seleccionar competencia...
              </option>
              {COMPETITIONS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* INDIVIDUAL */}
          {isIndividual && (
            <div className='space-y-4 animate-fade-in-up'>
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-[--color-ink]/80 font-ui'>
                  👤 Nombre completo
                </label>
                <input
                  name='fullName'
                  placeholder='Ingresá tu nombre y apellido'
                  className='w-full p-4 rounded-xl border-2 border-[--color-wood-light]/50 bg-[--color-parchment]/90 backdrop-blur-sm text-[--color-ink] shadow-lg transition-all duration-300 hover:border-[--color-primary]/60 focus:border-[--color-primary] focus:ring-4 focus:ring-[--color-primary]/20 focus:outline-none placeholder:text-[--color-ink]/50 font-ui'
                  required
                />
              </div>
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-[--color-ink]/80 font-ui'>
                  📱 Teléfono de contacto
                </label>
                <input
                  name='phone'
                  placeholder='+54 911 1234 5678'
                  className='w-full p-4 rounded-xl border-2 border-[--color-wood-light]/50 bg-[--color-parchment]/90 backdrop-blur-sm text-[--color-ink] shadow-lg transition-all duration-300 hover:border-[--color-primary]/60 focus:border-[--color-primary] focus:ring-4 focus:ring-[--color-primary]/20 focus:outline-none placeholder:text-[--color-ink]/50 font-ui'
                  required
                />
              </div>
            </div>
          )}

          {/* TRUCO */}
          {isTruco && (
            <div className='space-y-4 animate-fade-in-up'>
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-[--color-ink]/80 font-ui'>
                  🏆 Nombre del equipo (opcional)
                </label>
                <input
                  name='team'
                  placeholder='Los Ases del Asado'
                  className='w-full p-4 rounded-xl border-2 border-[--color-wood-light]/50 bg-[--color-parchment]/90 backdrop-blur-sm text-[--color-ink] shadow-lg transition-all duration-300 hover:border-[--color-primary]/60 focus:border-[--color-primary] focus:ring-4 focus:ring-[--color-primary]/20 focus:outline-none placeholder:text-[--color-ink]/50 font-ui'
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='block text-sm font-semibold text-[--color-ink]/80 font-ui'>
                    👤 Jugador 1
                  </label>
                  <input
                    name='p1Full'
                    placeholder='Nombre completo'
                    className='w-full p-4 rounded-xl border-2 border-[--color-wood-light]/50 bg-[--color-parchment]/90 backdrop-blur-sm text-[--color-ink] shadow-lg transition-all duration-300 hover:border-[--color-primary]/60 focus:border-[--color-primary] focus:ring-4 focus:ring-[--color-primary]/20 focus:outline-none placeholder:text-[--color-ink]/50 font-ui'
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <label className='block text-sm font-semibold text-[--color-ink]/80 font-ui'>
                    👤 Jugador 2
                  </label>
                  <input
                    name='p2Full'
                    placeholder='Nombre completo'
                    className='w-full p-4 rounded-xl border-2 border-[--color-wood-light]/50 bg-[--color-parchment]/90 backdrop-blur-sm text-[--color-ink] shadow-lg transition-all duration-300 hover:border-[--color-primary]/60 focus:border-[--color-primary] focus:ring-4 focus:ring-[--color-primary]/20 focus:outline-none placeholder:text-[--color-ink]/50 font-ui'
                    required
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-[--color-ink]/80 font-ui'>
                  📱 Teléfono de contacto
                </label>
                <input
                  name='phone'
                  placeholder='+54 911 1234 5678'
                  className='w-full p-4 rounded-xl border-2 border-[--color-wood-light]/50 bg-[--color-parchment]/90 backdrop-blur-sm text-[--color-ink] shadow-lg transition-all duration-300 hover:border-[--color-primary]/60 focus:border-[--color-primary] focus:ring-4 focus:ring-[--color-primary]/20 focus:outline-none placeholder:text-[--color-ink]/50 font-ui'
                  required
                />
              </div>
            </div>
          )}

          {/* Honeypot */}
          <input
            type='text'
            name='company'
            tabIndex={-1}
            autoComplete='off'
            className='hidden'
          />

          {!!competitionId && (
            <div className='animate-fade-in-up'>
              <label className='flex items-start gap-3 p-4 bg-[--color-wood-light]/20 rounded-xl border-2 border-[--color-wood-light]/40 cursor-pointer hover:bg-[--color-wood-light]/30 transition-all duration-300 backdrop-blur-sm'>
                <input
                  type='checkbox'
                  name='consent'
                  className='mt-1 w-4 h-4 accent-[--color-primary]'
                  required
                />
                <span className='text-sm text-[--color-ink] leading-relaxed font-ui'>
                  ✅ Acepto ser contactado/a por WhatsApp.
                </span>
              </label>
            </div>
          )}

          <button
            disabled={loading || !competitionId}
            className='w-full py-4 px-6 bg-gradient-to-r from-[--color-primary] to-[--color-primary-600] text-black font-bold text-lg rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(228,87,46,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg  font-ui'
          >
            {loading ? (
              <span className='flex items-center justify-center gap-2'>
                <svg className='animate-spin h-5 w-5' viewBox='0 0 24 24'>
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                    fill='none'
                  />
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  />
                </svg>
                Enviando...
              </span>
            ) : (
              "🔥 Enviar inscripción"
            )}
          </button>

          {msg && (
            <div
              className={`text-center p-4 rounded-xl font-medium font-ui ${
                msg.includes("registrada") || msg.includes("registrado")
                  ? "bg-green-100/80 text-green-800 border-2 border-green-200/60 backdrop-blur-sm"
                  : "bg-red-100/80 text-red-800 border-2 border-red-200/60 backdrop-blur-sm"
              }`}
            >
              {msg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
