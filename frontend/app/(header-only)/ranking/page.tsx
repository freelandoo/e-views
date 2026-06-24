import type { Metadata } from "next"
import { RankingPageClient } from "./_components/ranking-page-client"

export const metadata: Metadata = {
  title: "Ranking | E-Views",
  description:
    "Top 10 da E-Views por ranking geral, enxame, profissão e cidade.",
}

export default function RankingPage() {
  return <div data-tour="ranking-root"><RankingPageClient /></div>
}
