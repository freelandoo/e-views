"use client"

import { Button } from "@/components/ui/button"
import type { FlameProductKey } from "./types"
import { FlameIcon } from "./flame-icon"

export type FlameProduct = {
  key: FlameProductKey
  title: string
  description: string
  price: number
  needsProfile?: boolean
}

export function FlamesProductCard({
  product,
  balance,
  onBuy,
}: {
  product: FlameProduct
  balance: number
  onBuy: (product: FlameProduct) => void
}) {
  const disabled = balance < product.price
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium text-white">{product.title}</h3>
          <p className="mt-1 text-sm text-white/55">{product.description}</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-300/15 px-2 py-1 text-xs font-semibold text-amber-200">
          <FlameIcon className="h-3.5 w-3.5" />
          {product.price}
        </span>
      </div>
      <Button
        size="sm"
        disabled={disabled}
        onClick={() => onBuy(product)}
        className="w-full bg-amber-300 text-zinc-950 hover:bg-amber-200"
      >
        {disabled ? "Saldo insuficiente" : "Comprar"}
      </Button>
    </div>
  )
}
