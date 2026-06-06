import { FormButton } from "@/components/FormButton";

export function FormSection() {
  return (
    <section
      id="formulario"
      className="bg-blue-700 text-white border-b border-blue-800"
      aria-labelledby="form-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
        {/* Heading */}
        <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs font-medium sm:px-4 sm:text-sm mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
          <span>Avaliação da ação</span>
        </div>
        <h2
          id="form-heading"
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          Sua opinião é muito importante!
        </h2>
        <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Após ler o material, responda ao formulário de avaliação. Leva menos
          de 5 minutos e ajuda a medir o impacto desta ação educativa.
        </p>

        {/* CTA */}
        <FormButton
          id="main-form-button"
          size="lg"
          variant="outline"
          className="border-white bg-white text-blue-700 shadow-lg hover:bg-blue-50 focus:ring-white focus:ring-offset-blue-700"
        />

        {/* Privacy notice */}
        <div className="mt-8 bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-left max-w-xl mx-auto">
          <p className="font-semibold text-sm mb-2 flex items-center gap-2">
            <span>🔒</span> Aviso de privacidade
          </p>
          <p className="text-blue-100 text-sm leading-relaxed">
            O formulário <strong className="text-white">não deve solicitar</strong>{" "}
            dados sensíveis como CPF, RG, endereço, senha ou informações
            bancárias. A participação é{" "}
            <strong className="text-white">voluntária</strong> e as respostas
            serão usadas exclusivamente para fins acadêmicos e avaliação desta
            ação extensionista.
          </p>
        </div>
      </div>
    </section>
  );
}
