export type FlameWallet = {
  id: string
  user_id: string
  balance: number
  lifetime_earned: number
  lifetime_spent: number
}

export type FlameLimits = {
  ads_per_day: number
  flames_per_ad: number
  daily_flames_limit: number
  cooldown_seconds: number
  ads_watched_today: number
  flames_earned_today: number
  system_active: boolean
}

export type FlameTransaction = {
  id: string
  type: string
  amount: number
  source: string | null
  status: string
  metadata: Record<string, unknown>
  created_at: string
}

export type FlameProductKey =
  | "profile_activation"
  | "premium_highlight"
  | "post_boost"
  | "profile_boost"
  | "clan_highlight"
