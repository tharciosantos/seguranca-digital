export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
                aria-hidden="true"
              >
                SD
              </span>
              <span className="text-white font-semibold text-base">
                Segurança Digital
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Material educativo gratuito desenvolvido como ação extensionista
              acadêmica.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navegação do rodapé">
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
              Conteúdo
            </p>
            <ul className="space-y-2">
              {[
                { href: "#introducao", label: "Introdução" },
                { href: "#cuidados", label: "Os 7 Cuidados" },
                { href: "#resumo", label: "Resumo" },
                { href: "#formulario", label: "Formulário" },
                { href: "#sobre", label: "Sobre a ação" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Privacy */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
              Privacidade
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              Este site não coleta dados pessoais, não utiliza cookies de
              rastreamento e não armazena informações dos visitantes. O
              formulário de avaliação é externo (Google Forms) e é{" "}
              <strong className="text-slate-400">voluntário</strong>.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
          © {currentYear} — Ação Extensionista · Análise e Desenvolvimento de
          Sistemas · ODS 4 – Educação de Qualidade
        </div>
      </div>
    </footer>
  );
}
