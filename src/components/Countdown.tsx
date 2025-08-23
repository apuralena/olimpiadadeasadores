"use client";
import * as React from "react";

type Props = {
  /** Ej: "2025-09-20T09:00:00-03:00" */
  target: string;
  label?: string;
};

function getRemaining(targetISO: string) {
  const target = new Date(targetISO).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const sec = Math.floor(diff / 1000);
  const days = Math.floor(sec / 86400);
  const hours = Math.floor((sec % 86400) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;

  return { diff, days, hours, minutes, seconds };
}

export default function Countdown({ target, label = "Falta para el evento" }: Props) {
  const [t, setT] = React.useState(() => getRemaining(target));

  React.useEffect(() => {
    const id = setInterval(() => setT(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const ended = t.diff <= 0;

  return (
    <div
      aria-live="polite"
      className="mt-4 inline-flex flex-col items-center gap-2"
    >
      <span className="text-sm opacity-80">{ended ? "¡Arrancó la fiesta!" : label}</span>

      <div className="grid grid-cols-4 gap-2 text-center">
        {[
          { v: t.days, k: "Días" },
          { v: t.hours, k: "Hs" },
          { v: t.minutes, k: "Min" },
          { v: t.seconds, k: "Seg" },
        ].map(({ v, k }) => (
          <div
            key={k}
            className="min-w-[62px] rounded-xl bg-white/70 shadow-sm px-3 py-2"
          >
            <div className="text-2xl font-bold tabular-nums">{String(v).padStart(2, "0")}</div>
            <div className="text-[11px] uppercase tracking-wide opacity-70">{k}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
