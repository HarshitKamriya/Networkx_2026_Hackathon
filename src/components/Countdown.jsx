import { useEffect, useState } from "react";

const UNITS = ["Days", "Hours", "Min", "Sec"];

function getParts(target) {
  const diff = new Date(target).getTime() - Date.now();
  if (Number.isNaN(diff)) return null;
  if (diff <= 0) return { over: true };
  const s = Math.floor(diff / 1000);
  return {
    values: [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60],
  };
}

export default function Countdown({ target }) {
  const [parts, setParts] = useState(() => (target ? getParts(target) : null));

  useEffect(() => {
    if (!target) return;
    setParts(getParts(target));
    const id = setInterval(() => setParts(getParts(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!target || !parts) {
    return (
      <p className="rounded-lg border border-dashed border-white/20 px-4 py-6 text-center text-sm font-medium text-white/60">
        Dates will be announced soon.
      </p>
    );
  }
  if (parts.over) {
    return <p className="text-lg font-semibold text-accent">NetworkX 2026 is over.</p>;
  }

  return (
    <div role="timer" aria-label="Countdown to NetworkX 2026" className="grid grid-cols-4 gap-2.5">
      {parts.values.map((v, i) => (
        <div key={UNITS[i]} className="rounded-lg bg-white/5 px-1 py-3 text-center ring-1 ring-inset ring-white/10">
          <div className="text-2xl font-extrabold tabular-nums text-accent sm:text-4xl">
            {String(v).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/50 sm:text-xs">
            {UNITS[i]}
          </div>
        </div>
      ))}
    </div>
  );
}