/**
 * E-Views Landing — tokens + dados de copy (tema warm-dark, estilo poster).
 *
 * Cores explícitas (o app é dark globalmente). Centraliza paleta, links
 * canônicos e o conteúdo textual para manter os componentes enxutos.
 * Regra de copy (taste skill): proibido travessão (—) em texto visível.
 *
 * NOTA SOBRE FOTOS: os slots de imagem apontam para /landing/*.jpg (ainda não
 * existem). Enquanto o arquivo não estiver em /public/landing, o PhotoFrame
 * mostra um placeholder dourado elegante. Basta soltar as fotos com esses
 * nomes para a página ficar idêntica ao mockup.
 */

export const FL = {
  canvas: "#15120E",
  canvas2: "#1D1914",
  ink: "#F5F1E8",
  gold: "#C8102E",
  goldDeep: "#9B0F24",
  muted: "#9A938A",
} as const

/** Links canônicos — NÃO quebrar rotas existentes. */
export const LINKS = {
  cadastro: "/cadastro",
  login: "/login",
  explorar: "/search",
  marketplace: "/search",
  comoFunciona: "/comofunciona",
  cursos: "/cursos",
  feed: "/feed",
  afiliados: "/account",
  precos: "/precos",
  ranking: "/ranking",
  influenciadores: "/search?enxame=influencer",
} as const

// `k` = chave i18n no namespace "Home" (fallback = label pt).
export const NAV = [
  { label: "Como funciona", href: LINKS.comoFunciona, k: "navComoFunciona" },
  { label: "Recursos", href: "#recursos", k: "navRecursos" },
  { label: "Para quem é", href: "#caminhos", k: "navParaQuemE" },
  { label: "Depoimentos", href: "#caminhos", k: "navDepoimentos" },
  { label: "Preços", href: LINKS.precos, k: "navPrecos" },
] as const

/** Cards de estatística flutuantes do hero (brancos). Números ilustrativos. */
export type HeroStat = { id: string; label: string; line: string; value: string; icon: string }
export const HERO_STATS: HeroStat[] = [
  { id: "conteudo", label: "Conteúdo vendido", line: "todos os dias", value: "R$ 2.4M faturados", icon: "star" },
  { id: "lives", label: "Lives ao vivo", line: "agora mesmo", value: "1.2k criadores online", icon: "star" },
  { id: "cursos", label: "Cursos vendidos", line: "mais de 5k por dia", value: "R$ 1.2M faturados", icon: "cap" },
  { id: "produtos", label: "Produtos vendidos", line: "do digital ao físico", value: "R$ 780k faturados", icon: "bag" },
]

export type MoneyPath = {
  id: string
  kicker: string
  desc: string
  href: string
  icon: string
  photo: string
}

/** Seção "Escolha seu caminho" — 5 caminhos com foto + ícone dourado. */
export const MONEY_PATHS: MoneyPath[] = [
  { id: "conteudo", kicker: "Conteúdo", desc: "Publique fotos e vídeos exclusivos e venda por assinatura ou avulso. Você define o preço.", href: LINKS.feed, icon: "star", photo: "/landing/path-conteudo.png" },
  { id: "lives", kicker: "Lives", desc: "Faça transmissões ao vivo e receba Flames e gifts da sua audiência em tempo real.", href: LINKS.feed, icon: "star", photo: "/landing/path-lives.png" },
  { id: "cursos", kicker: "Cursos", desc: "Crie e venda cursos com área de membros, aulas em vídeo e tudo pronto pra faturar.", href: LINKS.cursos, icon: "cap", photo: "/landing/path-cursos.png" },
  { id: "produtos", kicker: "Produtos", desc: "Venda produtos físicos e digitais, do e-book à sua calcinha autografada. Com frete integrado.", href: LINKS.cadastro, icon: "bag", photo: "/landing/path-produtos.png" },
  { id: "afiliado", kicker: "Afiliado", desc: "Promova criadores e produtos e ganhe comissão por cada venda que você indicar.", href: LINKS.afiliados, icon: "percent", photo: "/landing/path-afiliado.png" },
]

export type CarouselSlide = {
  n: number
  img: string
  alt: string
  href: string
}

/** Carrossel da 3ª seção — só banners (18:7), sem tipografia. Setas + dots.
   Imagens em /public/landing (banner-3-1..5.png), proporção 2011x782 = 18:7. */
export const CAROUSEL_SLIDES: CarouselSlide[] = [
  { n: 1, img: "/landing/banner-3-1.png", alt: "Crie sua conta e seu perfil de criador na E-Views", href: LINKS.cadastro },
  { n: 2, img: "/landing/banner-3-2.png", alt: "Venda seu conteúdo exclusivo na E-Views", href: LINKS.feed },
  { n: 3, img: "/landing/banner-3-3.png", alt: "Faça lives e receba gifts na E-Views", href: LINKS.feed },
  { n: 4, img: "/landing/banner-3-4.png", alt: "Crie e venda cursos na E-Views", href: LINKS.cursos },
  { n: 5, img: "/landing/banner-3-5.png", alt: "Abra sua loja e venda produtos na E-Views", href: LINKS.cadastro },
]

export type BentoKind = "photo" | "saque" | "faturamento" | "comissao" | "video" | "stories" | "avatars" | "search" | "metrics"
export type BentoItem = {
  n: number
  title: string
  desc: string
  cta?: string
  href: string
  kind: BentoKind
  span: number // colunas em lg (grid de 12)
  icon?: string
  photo?: string // imagem real para os visuais photo/video/stories
}

/** Grade numerada 01-13 (bento). `span` = col-span no grid de 12 (lg). */
export const BENTO: BentoItem[] = [
  { n: 1, title: "Vendas no controle", desc: "Painel completo pra acompanhar conteúdo vendido, lives, cursos e produtos em tempo real.", cta: "Saiba mais", href: LINKS.afiliados, kind: "photo", span: 3, photo: "/landing/bento-1.png" },
  { n: 2, title: "Liberdade total", desc: "Publique e venda do seu jeito, sem patrão. Você define preço, regras e horário.", cta: "Começar agora", href: LINKS.cadastro, kind: "photo", span: 3, photo: "/landing/bento-2.png" },
  { n: 3, title: "Lives com gifts", desc: "Faça transmissões ao vivo e receba Flames e presentes da sua audiência em tempo real.", href: LINKS.feed, kind: "metrics", span: 3, icon: "star" },
  { n: 4, title: "Venda produtos", desc: "Do e-book à sua calcinha autografada. Produtos físicos e digitais, com frete integrado.", cta: "Ver produtos", href: LINKS.cadastro, kind: "photo", span: 3, photo: "/landing/bento-4.png" },
  { n: 5, title: "Saque quando quiser", desc: "Receba com transparência e saque seus ganhos com total segurança.", cta: "Sacar", href: LINKS.afiliados, kind: "saque", span: 4 },
  { n: 6, title: "Tudo pra vender", desc: "Assinaturas, conteúdo avulso, cupons e área de membros. As ferramentas completas do criador.", cta: "Saiba mais", href: LINKS.cursos, kind: "metrics", span: 4, icon: "blocks" },
  { n: 7, title: "Seja um criador", desc: "Transforme seu conteúdo, sua presença e seu talento em fonte de renda real.", href: LINKS.feed, kind: "avatars", span: 4 },
  { n: 8, title: "Ganhe como afiliado", desc: "Divulgue criadores e produtos e ganhe comissões recorrentes.", cta: "Quero ser afiliado", href: LINKS.afiliados, kind: "comissao", span: 4 },
  { n: 9, title: "Cursos e vídeos", desc: "Ensine, grave aulas e venda seu conhecimento em vídeo.", cta: "Explorar", href: LINKS.cursos, kind: "video", span: 4, photo: "/landing/bento-9.png" },
  { n: 10, title: "Posts & stories", desc: "Poste, faça stories e aumente seu alcance pra vender mais.", cta: "Ver ideias", href: LINKS.feed, kind: "stories", span: 4, photo: "/landing/bento-10.png" },
  { n: 11, title: "Criadores premiados", desc: "Reconhecimento pra quem mais fatura e engaja na plataforma.", cta: "Ver ranking", href: LINKS.ranking, kind: "photo", span: 4, photo: "/landing/bento-11.png" },
  { n: 12, title: "Descubra criadores", desc: "Encontre e siga criadores, e ache parceiros pra crescer junto.", cta: "Buscar", href: LINKS.influenciadores, kind: "search", span: 4 },
  { n: 13, title: "Controle financeiro", desc: "Acompanhe tudo: conteúdo, lives, cursos, produtos e saques.", cta: "Ver finanças", href: LINKS.afiliados, kind: "faturamento", span: 4 },
]

/** Cores dos enxames (espelha globals.css [data-machine]). */
export const ENXAME_COLORS: Record<string, string> = {
  marketing: "#f43f5e", tecnologia: "#3b82f6", transporte: "#f59e0b", artistas: "#a855f7",
  influencer: "#ec4899", servicos_residenciais: "#10b981", construcao: "#f97316", saude: "#06b6d4",
  beleza_bem_estar: "#d946ef", veiculos: "#ef4444", pets: "#22c55e", rural: "#84cc16",
  educacao: "#0ea5e9", eventos: "#eab308", justica: "#6366f1",
}
