export const FORM_LINK: string = "https://forms.gle/8iavv76xbcDdtaLK8";
export const FORM_LINK_PLACEHOLDER = "https://forms.gle/INSERIR-LINK-AQUI";
export const IS_FORM_LINK_CONFIGURED = FORM_LINK !== FORM_LINK_PLACEHOLDER;

export const TIPS = [
  {
    number: 1,
    icon: "🔑",
    title: "Use senhas fortes",
    color: "blue",
    content:
      "Crie senhas com pelo menos 12 caracteres, combinando letras maiúsculas, minúsculas, números e símbolos (como !, @, #, $). Evite usar datas de aniversário, nomes próprios ou sequências óbvias como '123456' ou 'senha123'.",
    tip: "Dica prática: use uma frase que só você conhece e transforme em senha. Ex: 'Eu@mo2cafézpordía!' é muito mais segura que 'cafe123'.",
  },
  {
    number: 2,
    icon: "🔐",
    title: "Não reutilize a mesma senha em várias contas",
    color: "indigo",
    content:
      "Se você usa a mesma senha no e-mail, banco digital e redes sociais, um único vazamento compromete tudo ao mesmo tempo. Cada conta importante deve ter uma senha exclusiva.",
    tip: "Dica prática: use um gerenciador de senhas gratuito como Bitwarden ou Google Password Manager para criar e guardar senhas diferentes com segurança.",
  },
  {
    number: 3,
    icon: "🛡️",
    title: "Ative a autenticação em duas etapas",
    color: "violet",
    content:
      "A autenticação em duas etapas (2FA) adiciona uma camada extra de proteção. Mesmo que alguém descubra sua senha, ainda precisará de um código temporário enviado ao seu celular para acessar sua conta.",
    tip: "Dica prática: ative o 2FA no WhatsApp em: Configurações → Conta → Verificação em duas etapas. Faça o mesmo no Gmail, Instagram, Facebook e banco digital.",
  },
  {
    number: 4,
    icon: "🔗",
    title: "Desconfie de links suspeitos",
    color: "cyan",
    content:
      "Links falsos são a principal porta de entrada para golpes digitais. Antes de clicar em qualquer link recebido por mensagem, e-mail ou redes sociais, verifique se o endereço é legítimo e se faz sentido naquele contexto.",
    tip: "Dica prática: passe o mouse sobre o link antes de clicar (no computador) para ver o endereço real. Endereços com erros de grafia, como 'bradescoo.com' ou 'itaú-seguro.net', são sinais de golpe.",
  },
  {
    number: 5,
    icon: "📱",
    title: "Cuidado com golpes no WhatsApp, SMS e e-mail",
    color: "emerald",
    content:
      "Golpistas fingem ser bancos, Correios, operadoras de telefone, Receita Federal ou até familiares em apuros para induzir você a passar dados ou clicar em links perigosos. Esse tipo de ataque se chama phishing.",
    tip: "Dica prática: nunca forneça senhas, códigos SMS ou dados bancários por mensagem — nem para quem diz ser seu banco. Instituições sérias jamais pedem isso por WhatsApp ou SMS.",
  },
  {
    number: 6,
    icon: "🆔",
    title: "Proteja seus dados pessoais",
    color: "teal",
    content:
      "Tenha cuidado com o que você compartilha nas redes sociais: CPF, RG, endereço, data de nascimento completa e número de telefone são informações que golpistas usam para criar fraudes em seu nome.",
    tip: "Dica prática: revise as configurações de privacidade do Instagram, Facebook e WhatsApp. Limite quem pode ver suas informações pessoais. Menos exposição = menos risco.",
  },
  {
    number: 7,
    icon: "📶",
    title: "Evite acessar contas importantes em Wi-Fi público",
    color: "orange",
    content:
      "Redes Wi-Fi abertas em shoppings, aeroportos, cafés e praças públicas podem ser interceptadas por terceiros. Evite acessar banco digital, e-mail ou qualquer conta sensível nessas redes.",
    tip: "Dica prática: se precisar usar a internet nesses locais, prefira os dados móveis do seu celular (4G/5G). Eles são muito mais seguros do que o Wi-Fi público.",
  },
];
