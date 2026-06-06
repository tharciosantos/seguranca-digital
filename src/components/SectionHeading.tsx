interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-500 text-base sm:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
