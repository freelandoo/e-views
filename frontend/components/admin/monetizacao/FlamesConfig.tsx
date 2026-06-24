"use client"

import { useCallback, useEffect, useState } from "react"
import { Hexagon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminFlamesSettings } from "@/components/flames/AdminFlamesSettings"
import { AdminFlamesMetrics } from "@/components/flames/AdminFlamesMetrics"
import { AdminFlameProducts } from "@/components/flames/AdminFlameProducts"

function token() {
  return typeof window !== "undefined" ? localStorage.getItem("token") : null
}

export function FlamesConfig() {
  const [metrics, setMetrics] = useState<Record<string, number> | null>(null)

  const loadMetrics = useCallback(async () => {
    const t = token()
    if (!t) return
    const res = await fetch("/api/admin/flames/metrics", { headers: { Authorization: `Bearer ${t}` }, cache: "no-store" })
    const data = await res.json().catch(() => ({}))
    if (res.ok) setMetrics(data.metrics || {})
  }, [])

  useEffect(() => { void loadMetrics() }, [loadMetrics])

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6 flex items-center gap-3">
        <Hexagon className="h-7 w-7 fill-amber-300 text-amber-300" />
        <div>
          <h2 className="text-xl font-bold">Flames</h2>
          <p className="text-sm text-muted-foreground">Configurações, limites e métricas da moeda interna.</p>
        </div>
      </div>
      <div className="grid gap-5">
        <Card>
          <CardHeader>
            <CardTitle>Cadastro de produtos</CardTitle>
            <CardDescription>
              Pacotes de Flames vendidos via Stripe. Aparecem na Loja de Flame do usuário.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AdminFlameProducts />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Métricas</CardTitle>
            <CardDescription>Resumo operacional de hoje no fuso do Brasil.</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminFlamesMetrics metrics={metrics} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Configurações</CardTitle>
            <CardDescription>Valores não são hardcoded: ajuste limites, cooldown e preços.</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminFlamesSettings onSaved={loadMetrics} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
