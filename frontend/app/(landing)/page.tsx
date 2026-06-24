import type { Metadata } from "next"
import {
  LandingHeader,
  LandingFooter,
  HeroSection,
  MoneyPathCards,
  FeatureCarousel,
  FeatureBento,
  FinalCTA,
} from "@/components/home/landing"
import { RevealMount } from "@/components/home/landing/RevealMount"

const TITLE = "E-Views — Venda conteúdo adulto, abra seu sexshop, faça lives e cursos"
const DESCRIPTION =
  "A plataforma onde criadores adultos faturam de verdade: venda conteúdo exclusivo, abra seu próprio sexshop, faça lives com gifts e venda cursos. Seu corpo, suas regras, seu lucro. Crie sua conta de graça."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://www.e-views.com" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.e-views.com",
    siteName: "E-Views",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og-image.png", width: 1024, height: 1024, alt: "E-Views" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
}

export default function HomePage() {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "E-Views",
    url: "https://www.e-views.com",
    description: DESCRIPTION,
  }
  const jsonLdSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "E-Views",
    url: "https://www.e-views.com",
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.e-views.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSite) }} />

      <LandingHeader />
      <main className="flex-1 overflow-x-clip">
        {/* 1 · Hero principal */}
        <HeroSection />
        {/* 2 · Escolha seu caminho (5 caminhos de renda) */}
        <MoneyPathCards />
        {/* 3 · Carrossel "tudo que você precisa para ganhar mais" */}
        <FeatureCarousel />
        {/* 4 · Grade numerada de recursos 01-13 */}
        <FeatureBento />
        {/* 5 · CTA final */}
        <FinalCTA />
      </main>
      <LandingFooter />
      <RevealMount />
    </>
  )
}
