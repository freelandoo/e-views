import { Suspense } from "react"
import MensagensClient from "@/components/mensagens/MensagensClient"

export const metadata = {
  title: "Mensagens — E-Views",
  description: "Suas conversas no E-Views.",
}

export const dynamic = "force-dynamic"

export default function MensagensPage() {
  return (
    <main data-tour="messages-root" className="fl-root bg-[#0b0804] text-[#F5F1E8]">
      <Suspense fallback={null}>
        <MensagensClient />
      </Suspense>
    </main>
  )
}
