import { TIPS } from "@/lib/constants";
import { TipCard } from "@/components/TipCard";
import { SectionHeading } from "@/components/SectionHeading";

export function TipsSection() {
  return (
    <section
      id="cuidados"
      className="bg-slate-50 border-b border-slate-100"
      aria-labelledby="tips-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <SectionHeading
          id="tips-heading"
          eyebrow="Os 7 cuidados essenciais"
          title="Proteja-se com hábitos simples"
          subtitle="Cada item abaixo traz uma explicação clara e uma dica prática que você pode aplicar hoje mesmo."
        />

        <div className="grid grid-cols-1 gap-5">
          {TIPS.map((tip) => (
            <TipCard key={tip.number} {...tip} />
          ))}
        </div>
      </div>
    </section>
  );
}
