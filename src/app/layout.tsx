import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guia-seguranca-digital.vercel.app/"),
  title: "Segurança Digital no Dia a Dia | Ação Extensionista",
  description:
    "Aprenda 7 cuidados simples para se proteger na internet. Material educativo gratuito sobre segurança digital básica para pessoas comuns — ação extensionista acadêmica.",
  keywords: [
    "segurança digital",
    "proteção na internet",
    "senhas fortes",
    "golpes online",
    "WhatsApp seguro",
    "autenticação dois fatores",
    "educação digital",
  ],
  authors: [{ name: "Ação Extensionista – ADS" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Segurança Digital no Dia a Dia",
    description:
      "7 cuidados simples para se proteger na internet — material educativo gratuito.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
