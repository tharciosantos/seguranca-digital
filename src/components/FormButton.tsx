import { FORM_LINK, IS_FORM_LINK_CONFIGURED } from "@/lib/constants";

interface FormButtonProps {
  className?: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  id?: string;
}

export function FormButton({
  className = "",
  variant = "primary",
  size = "md",
  id,
}: FormButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 whitespace-normal rounded-xl px-5 py-3 text-center font-semibold leading-snug no-underline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  const sizes = {
    sm: "min-h-10 px-4 py-2 text-sm",
    md: "min-h-12 px-5 py-3 text-base sm:px-6",
    lg: "min-h-14 px-6 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg",
  };

  const variants = {
    primary:
      "bg-blue-700 text-white shadow-md hover:bg-blue-800 hover:shadow-lg active:bg-blue-900",
    outline:
      "border-2 border-blue-700 bg-white text-blue-700 hover:bg-blue-50 active:bg-blue-100",
  };

  const label = IS_FORM_LINK_CONFIGURED
    ? "Responder formulário de avaliação"
    : "Inserir link do formulário";
  const ariaLabel = IS_FORM_LINK_CONFIGURED
    ? "Responder formulário de avaliação da ação extensionista"
    : "Link do Google Forms ainda precisa ser substituído antes da divulgação";

  return (
    <a
      id={id}
      href={IS_FORM_LINK_CONFIGURED ? FORM_LINK : "#formulario"}
      target={IS_FORM_LINK_CONFIGURED ? "_blank" : undefined}
      rel={IS_FORM_LINK_CONFIGURED ? "noopener noreferrer" : undefined}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
      aria-disabled={!IS_FORM_LINK_CONFIGURED}
    >
      <svg
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5h6m-7 4h8m-8 4h5m-7 8h10a2 2 0 002-2V7.5a2 2 0 00-.59-1.41l-2.5-2.5A2 2 0 0013.5 3H6a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
      <span>{label}</span>
      {IS_FORM_LINK_CONFIGURED && (
        <svg
          className="h-4 w-4 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </a>
  );
}
