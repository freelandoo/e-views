import { proxyFlames } from "../_proxy"

export async function POST(request: Request) {
  return proxyFlames(request, "/flames/spend", "POST")
}
