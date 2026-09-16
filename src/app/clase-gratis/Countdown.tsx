"use client";

import { useEffect, useState } from "react";

// Cuenta atrás fija de 30 días desde el lanzamiento (16 sept 2026 → 16 oct 2026).
const DEADLINE = new Date("2026-10-16T23:59:59").getTime();

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export default function Countdown() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, DEADLINE - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (left === null) return null;

  const days = Math.floor(left / 86400000);
  const hours = Math.floor((left % 86400000) / 3600000);
  const mins = Math.floor((left % 3600000) / 60000);
  const secs = Math.floor((left % 60000) / 1000);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-red-400">
        {left > 0 ? "Esta clase gratuita se retira en:" : "¡Últimas horas!"}
      </p>
      <div className="flex items-center gap-2 sm:gap-3">
        {[
          [days, "días"],
          [hours, "h"],
          [mins, "min"],
          [secs, "seg"],
        ].map(([v, label]) => (
          <div key={label as string} className="bg-white/10 rounded-lg px-3 py-2 min-w-[56px] text-center">
            <div className="text-xl sm:text-2xl font-black text-white tabular-nums">{pad(v as number)}</div>
            <div className="text-[9px] uppercase tracking-wide text-white/60">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
