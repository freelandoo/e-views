import type { Metadata } from "next"
import { ContratarProfissionaisContent } from "./content"

export const metadata: Metadata = {
  title: "Contratar Profissionais — E-Views",
  description:
    "Encontre profissionais, freelancers e prestadores de serviço na E-Views. Filtre por enxame, localização e profissão. Contato direto pelo WhatsApp.",
}

export default function ContratarProfissionaisPage() {
  return (
    <>
      <ContratarProfissionaisContent />
    </>
  )
}
