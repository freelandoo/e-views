import type { Metadata } from "next"
import { ComoFuncionaClient } from "./_components/como-funciona-client"

export const metadata: Metadata = {
  title: "Como funciona | E-Views",
  description:
    "Entenda como a E-Views conecta quem precisa de serviços com profissionais reais. Enxames, perfis, portfólios, serviços, clans, afiliados e ranking — tudo explicado.",
  openGraph: {
    title: "Como funciona a E-Views",
    description:
      "Uma plataforma criada para conectar quem precisa resolver algo com profissionais prontos para aparecer, atender e crescer.",
  },
}

export default function ComoFuncionaPage() {
  return (
    <>
      <ComoFuncionaClient />
    </>
  )
}
