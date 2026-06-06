import { SectionHeading } from "@/components/SectionHeading";

export function Introduction() {
  return (
    <section
      id="introducao"
      className="bg-white border-b border-slate-100"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <SectionHeading
          id="intro-heading"
          eyebrow="Por que isso importa?"
          title="Segurança digital é para todo mundo"
        />

        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            Hoje, quase tudo passa pela internet: pagamentos, conversas,
            documentos, fotos e muito mais. Mas junto com essas facilidades,
            surgem riscos reais: golpes, roubo de senhas, vazamentos de dados
            e fraudes financeiras afetam milhões de brasileiros todo ano.
          </p>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            A boa notícia é que a maioria desses problemas pode ser evitada com
            hábitos simples. Você não precisa ser especialista em tecnologia
            para se proteger — basta conhecer as principais armadilhas e adotar
            alguns cuidados básicos no dia a dia.
          </p>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Este material foi criado com linguagem simples, sem termos técnicos,
            para que qualquer pessoa possa entender e aplicar as orientações
            imediatamente.
          </p>
        </div>

        {/* Educational highlights */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: "Golpes comuns",
              label: "Mensagens falsas, links suspeitos e pedidos de senha aparecem no dia a dia.",
            },
            {
              title: "Hábitos simples",
              label: "Pequenas mudanças reduzem riscos em contas, compras e conversas online.",
            },
            {
              title: "Atenção antes do clique",
              label: "Conferir links, remetentes e pedidos urgentes ajuda a evitar armadilhas.",
            },
          ].map((highlight) => (
            <div
              key={highlight.title}
              className="bg-slate-50 rounded-xl p-4 border border-slate-200"
            >
              <div className="mb-2 h-1.5 w-10 rounded-full bg-blue-600" aria-hidden="true" />
              <div className="text-base font-bold text-blue-700">
                {highlight.title}
              </div>
              <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                {highlight.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
