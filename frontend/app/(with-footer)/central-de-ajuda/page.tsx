import type { Metadata } from "next"
import { CentralDeAjudaContent } from "./content"

export const metadata: Metadata = {
  title: "Central de Ajuda — E-Views",
  description:
    "Encontre respostas sobre conta, ativação, perfis, enxames, serviços, agenda, cupons e segurança na E-Views.",
}

export default function CentralDeAjudaPage() {
  return (
    <>
      <CentralDeAjudaContent />
    </>
  )
}
