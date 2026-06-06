export function AboutSection() {
  return (
    <section
      id="sobre"
      className="bg-slate-50 border-b border-slate-100"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
              🎓 Sobre a ação
            </p>
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4"
            >
              Uma ação extensionista acadêmica
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Este material faz parte de uma{" "}
              <strong>ação extensionista</strong> desenvolvida por estudante do
              curso de <strong>Análise e Desenvolvimento de Sistemas</strong>,
              com o objetivo de levar educação digital e conscientização sobre
              segurança na internet à comunidade.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              A ação está alinhada ao{" "}
              <strong>ODS 4 — Educação de Qualidade</strong>, um dos Objetivos
              de Desenvolvimento Sustentável da ONU, e busca promover o acesso
              ao conhecimento digital de forma gratuita, inclusiva e acessível.
            </p>
            <p className="text-slate-600 leading-relaxed">
              O conteúdo foi elaborado com base em boas práticas de segurança
              digital recomendadas por especialistas e organismos como o{" "}
              <strong>CERT.br</strong> (Centro de Estudos, Resposta e
              Tratamento de Incidentes de Segurança no Brasil).
            </p>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                icon: "🎯",
                label: "Objetivo",
                value: "Promover educação digital e conscientização sobre segurança na internet",
              },
              {
                icon: "👥",
                label: "Público-alvo",
                value: "Familiares, amigos, colegas e pessoas da comunidade que usam internet no cotidiano",
              },
              {
                icon: "🌱",
                label: "ODS relacionado",
                value: "ODS 4 – Educação de Qualidade (Agenda 2030 da ONU)",
              },
              {
                icon: "📚",
                label: "Curso",
                value: "Análise e Desenvolvimento de Sistemas (ADS)",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-slate-200 rounded-xl p-4 flex gap-3"
              >
                <span className="text-xl flex-shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm text-slate-700 leading-snug">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
