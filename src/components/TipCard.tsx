interface TipCardProps {
  number: number;
  icon: string;
  title: string;
  content: string;
  tip: string;
  color: string;
}

const colorMap: Record<string, { border: string; badge: string; bg: string; tip: string }> = {
  blue: {
    border: "border-blue-400",
    badge: "bg-blue-600 text-white",
    bg: "bg-blue-50",
    tip: "bg-blue-100 border-blue-300 text-blue-800",
  },
  indigo: {
    border: "border-indigo-400",
    badge: "bg-indigo-600 text-white",
    bg: "bg-indigo-50",
    tip: "bg-indigo-100 border-indigo-300 text-indigo-800",
  },
  violet: {
    border: "border-violet-400",
    badge: "bg-violet-600 text-white",
    bg: "bg-violet-50",
    tip: "bg-violet-100 border-violet-300 text-violet-800",
  },
  cyan: {
    border: "border-cyan-500",
    badge: "bg-cyan-600 text-white",
    bg: "bg-cyan-50",
    tip: "bg-cyan-100 border-cyan-300 text-cyan-800",
  },
  emerald: {
    border: "border-emerald-500",
    badge: "bg-emerald-600 text-white",
    bg: "bg-emerald-50",
    tip: "bg-emerald-100 border-emerald-300 text-emerald-800",
  },
  teal: {
    border: "border-teal-500",
    badge: "bg-teal-600 text-white",
    bg: "bg-teal-50",
    tip: "bg-teal-100 border-teal-300 text-teal-800",
  },
  orange: {
    border: "border-orange-400",
    badge: "bg-orange-500 text-white",
    bg: "bg-orange-50",
    tip: "bg-orange-100 border-orange-300 text-orange-800",
  },
};

export function TipCard({ number, icon, title, content, tip, color }: TipCardProps) {
  const c = colorMap[color] ?? colorMap.blue;

  return (
    <article
      id={`cuidado-${number}`}
      className={`bg-white rounded-2xl border-l-4 ${c.border} shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex flex-col gap-4`}
      aria-labelledby={`tip-title-${number}`}
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full ${c.badge} flex items-center justify-center text-sm font-bold`}
          aria-label={`Cuidado número ${number}`}
        >
          {number}
        </div>
        <div>
          <div className="text-2xl mb-1" aria-hidden="true">
            {icon}
          </div>
          <h3
            id={`tip-title-${number}`}
            className="text-lg font-bold text-slate-800 leading-snug"
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <p className="text-slate-600 text-base leading-relaxed">{content}</p>

      {/* Tip */}
      <div
        className={`rounded-xl border ${c.tip} px-4 py-3 text-sm leading-relaxed`}
        role="note"
        aria-label="Dica prática"
      >
        <span className="font-semibold">💡 {tip}</span>
      </div>
    </article>
  );
}
