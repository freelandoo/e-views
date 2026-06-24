import { proxyFlames } from "../_proxy"

export async function GET(request: Request) {
  return proxyFlames(request, "/flames/wallet")
}
