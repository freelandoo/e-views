import type { Metadata } from "next"
import { AnunciarServicosContent } from "./content"

export const metadata: Metadata = {
  title: "Anunciar Serviços — E-Views",
  description:
    "Crie seu perfil profissional na E-Views, apareça nos enxames e receba contatos diretos de clientes interessados no seu trabalho.",
}

export default function AnunciarServicosPage() {
  return (
    <>
      <AnunciarServicosContent />
    </>
  )
}
