import { proxyFlames } from "@/app/api/flames/_proxy"

export async function GET(request: Request) {
  return proxyFlames(request, "/admin/flames/metrics")
}
