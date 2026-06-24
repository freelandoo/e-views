import type { Metadata } from "next"
import { DicasDeSegurancaContent } from "./content"

export const metadata: Metadata = {
  title: "Dicas de Segurança — E-Views",
  description:
    "Orientações para clientes e profissionais sobre cuidados na contratação, negociação e divulgação na E-Views.",
}

export default function DicasDeSegurancaPage() {
  return (
    <>
      <DicasDeSegurancaContent />
    </>
  )
}
