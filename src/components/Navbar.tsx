import { FormButton } from "@/components/FormButton";

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
      aria-label="Navegação principal"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-blue-700 font-bold text-sm sm:text-base"
          aria-label="Ir ao topo"
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white"
            aria-hidden="true"
          >
            SD
          </span>
          <span className="hidden sm:inline">Segurança Digital</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#cuidados" className="hover:text-blue-700 transition-colors">
            Os 7 cuidados
          </a>
          <a href="#resumo" className="hover:text-blue-700 transition-colors">
            Resumo
          </a>
          <a href="#sobre" className="hover:text-blue-700 transition-colors">
            Sobre
          </a>
        </div>

        {/* CTA */}
        <FormButton id="nav-form-button" size="sm" />
      </div>
    </nav>
  );
}
