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
  { id: "conteudo", label: "Conteúdo vendido", line: "todo dia, sem censura", value: "R$ 2.4M no mês", icon: "star" },
  { id: "lives", label: "Lives ao vivo", line: "rolando agora", value: "1.2k criadores online", icon: "star" },
  { id: "sexshop", label: "Sexshop", line: "produtos enviados", value: "R$ 780k em vendas", icon: "bag" },
  { id: "gifts", label: "Gifts em Flames", line: "direto pra criadora", value: "R$ 1.8M pagos", icon: "wallet" },
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
  { id: "conteudo", kicker: "Conteúdo", desc: "Publique fotos e vídeos sem censura e venda por assinatura, avulso ou PPV. Você manda no preço.", href: LINKS.feed, icon: "star", photo: "/landing/path-conteudo.png" },
  { id: "lives", kicker: "Lives", desc: "Entre ao vivo e receba Flames e presentes em tempo real. Quanto mais quente, mais pinga.", href: LINKS.feed, icon: "star", photo: "/landing/path-lives.png" },
  { id: "sexshop", kicker: "Sexshop", desc: "Abra seu próprio sexshop: lingerie, brinquedos, peças usadas e itens personalizados. Frete integrado.", href: LINKS.cadastro, icon: "bag", photo: "/landing/path-sexshop.png" },
  { id: "cursos", kicker: "Cursos", desc: "Ensine o que você faz de melhor. Crie e venda cursos sensuais com área de membros.", href: LINKS.cursos, icon: "cap", photo: "/landing/path-cursos.png" },
  { id: "afiliado", kicker: "Afiliado", desc: "Indique outras criadoras e produtos e ganhe comissão por cada venda que rolar.", href: LINKS.afiliados, icon: "percent", photo: "/landing/path-afiliado.png" },
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
  { n: 1, img: "/landing/banner-3-1.png", alt: "Crie seu perfil de criadora na E-Views", href: LINKS.cadastro },
  { n: 2, img: "/landing/banner-3-2.png", alt: "Venda seu conteúdo sem censura na E-Views", href: LINKS.feed },
  { n: 3, img: "/landing/banner-3-3.png", alt: "Faça lives e receba gifts na E-Views", href: LINKS.feed },
  { n: 4, img: "/landing/banner-3-4.png", alt: "Abra seu sexshop na E-Views", href: LINKS.cadastro },
  { n: 5, img: "/landing/banner-3-5.png", alt: "Crie e venda cursos na E-Views", href: LINKS.cursos },
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
  { n: 1, title: "Vendas no controle", desc: "Painel completo pra acompanhar conteúdo, sexshop, lives e cursos faturando em tempo real.", cta: "Saiba mais", href: LINKS.afiliados, kind: "photo", span: 3, photo: "/landing/bento-1.png" },
  { n: 2, title: "Sem censura", desc: "Publique e venda do seu jeito, sem patrão e sem vergonha. Você define preço, regras e horário.", cta: "Começar agora", href: LINKS.cadastro, kind: "photo", span: 3, photo: "/landing/bento-2.png" },
  { n: 3, title: "Lives com gifts", desc: "Entre ao vivo e receba Flames e presentes da sua audiência em tempo real.", href: LINKS.feed, kind: "metrics", span: 3, icon: "star" },
  { n: 4, title: "Seu sexshop", desc: "Lingerie, brinquedos, peças usadas e itens personalizados. Venda físico e digital com frete integrado.", cta: "Abrir sexshop", href: LINKS.cadastro, kind: "photo", span: 3, photo: "/landing/bento-4.png" },
  { n: 5, title: "Saque quando quiser", desc: "Converta seus Flames e venda em dinheiro e saque com discrição e segurança.", cta: "Sacar", href: LINKS.afiliados, kind: "saque", span: 4 },
  { n: 6, title: "Assinatura, avulso e PPV", desc: "Assinatura mensal, conteúdo avulso, pay-per-view, VIP e cupons. As ferramentas completas pra faturar.", cta: "Saiba mais", href: LINKS.cursos, kind: "metrics", span: 4, icon: "blocks" },
  { n: 7, title: "Seja criadora", desc: "Transforme sua sensualidade e seu talento em fonte de renda real, no seu ritmo.", href: LINKS.feed, kind: "avatars", span: 4 },
  { n: 8, title: "Ganhe como afiliado", desc: "Indique criadoras e produtos e ganhe comissões recorrentes.", cta: "Quero ser afiliado", href: LINKS.afiliados, kind: "comissao", span: 4 },
  { n: 9, title: "Cursos sensuais", desc: "Ensine o que você sabe, grave aulas e venda seu conhecimento em vídeo.", cta: "Explorar", href: LINKS.cursos, kind: "video", span: 4, photo: "/landing/bento-9.png" },
  { n: 10, title: "Posts & stories", desc: "Provoque com posts e stories e puxe sua audiência pro conteúdo pago.", cta: "Ver ideias", href: LINKS.feed, kind: "stories", span: 4, photo: "/landing/bento-10.png" },
  { n: 11, title: "Criadoras premiadas", desc: "Reconhecimento e destaque pra quem mais fatura e engaja na plataforma.", cta: "Ver ranking", href: LINKS.ranking, kind: "photo", span: 4, photo: "/landing/bento-11.png" },
  { n: 12, title: "Descubra criadoras", desc: "Encontre, siga e assine quem você curte. E ache parceiras pra crescer junto.", cta: "Buscar", href: LINKS.influenciadores, kind: "search", span: 4 },
  { n: 13, title: "Controle financeiro", desc: "Acompanhe tudo: conteúdo, sexshop, lives, cursos, gifts e saques.", cta: "Ver finanças", href: LINKS.afiliados, kind: "faturamento", span: 4 },
]

/** Cores dos enxames (espelha globals.css [data-machine]). */
export const ENXAME_COLORS: Record<string, string> = {
  marketing: "#f43f5e", tecnologia: "#3b82f6", transporte: "#f59e0b", artistas: "#a855f7",
  influencer: "#ec4899", servicos_residenciais: "#10b981", construcao: "#f97316", saude: "#06b6d4",
  beleza_bem_estar: "#d946ef", veiculos: "#ef4444", pets: "#22c55e", rural: "#84cc16",
  educacao: "#0ea5e9", eventos: "#eab308", justica: "#6366f1",
}
