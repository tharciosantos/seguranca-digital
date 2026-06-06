import { FormButton } from "@/components/FormButton";

export function Hero() {
  return (
    <header className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white overflow-hidden">
      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        {/* Badge */}
        <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs font-medium backdrop-blur-sm sm:px-4 sm:text-sm mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
          <span>Ação Extensionista · ODS 4 – Educação de Qualidade</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Segurança Digital no Dia a Dia
        </h1>
        <p className="text-xl sm:text-2xl text-blue-100 font-medium mb-6">
          7 cuidados simples para se proteger na internet
        </p>

        {/* Description */}
        <p className="text-blue-50 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Material educativo gratuito sobre segurança digital básica — para
          quem usa WhatsApp, e-mail, redes sociais e bancos digitais no dia a
          dia.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#cuidados"
            id="hero-read-button"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-center font-semibold leading-snug text-blue-700 shadow-md transition-colors duration-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 sm:px-7 sm:py-3.5"
          >
            <span>Ler o material</span>
          </a>
          <FormButton
            id="hero-form-button"
            className="border-2 border-white/50 bg-white/10 text-white hover:bg-white/20 focus:ring-white focus:ring-offset-blue-700"
          />
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center" aria-hidden="true">
          <div className="flex flex-col items-center gap-1 text-blue-200 text-xs">
            <span>Role para ler</span>
            <svg
              className="w-4 h-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
