import { TIPS } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export function Summary() {
  return (
    <section
      id="resumo"
      className="bg-white border-b border-slate-100"
      aria-labelledby="summary-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <SectionHeading
          id="summary-heading"
          eyebrow="Revisão rápida"
          title="Resumo dos principais cuidados"
          subtitle="Guarde esta lista e compartilhe com quem você se importa."
          centered
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TIPS.map((tip) => (
            <div
              key={tip.number}
              className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3"
            >
              <span
                className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                aria-hidden="true"
              >
                {tip.number}
              </span>
              <span className="text-sm font-medium text-slate-700">
                {tip.icon} {tip.title}
              </span>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white text-center">
          <p className="text-lg sm:text-xl font-semibold mb-3">
            ✅ Você chegou ao final do material!
          </p>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Segurança digital não exige que você seja especialista em
            tecnologia — exige apenas atenção e bons hábitos. Ao aplicar esses
            7 cuidados, você reduz enormemente as chances de ser vítima de
            golpes e fraudes online.
          </p>
          <p className="mt-4 text-blue-200 text-sm">
            Compartilhe este material com sua família e amigos. Conhecimento
            protege! 🛡️
          </p>
        </div>
      </div>
    </section>
  );
}
