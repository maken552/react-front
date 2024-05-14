export const DOMAIN = import.meta.env.VITE_DOMAIN

export const AppRoutePath = {
  HOME: () => '/',
  CLOUD: () => '/cloud',
  MINERS: () => '/miners',
  ABOUT: () => '/about',
  SECURITY: () => '/security',
  CONTACT: () => '/contacts',
  SIGNUP: () => '/signup',
  LOGIN: () => '/login',
  LEGAL: () => '/legal',
  PRIVACY: () => '/privacy',
  TERMS: () => '/terms',
  DASHBOARD: () => '/dashboard',
  DASHBOARD_MINING: () => '/dashboard/mining',
  DASHBOARD_MINING_RENT: () => '/dashboard/mining/rent',
  DASHBOARD_MINING_CLOUD: () => '/dashboard/mining/cloud',
  DASHBOARD_MINING_BITCOIN: () => '/dashboard/mining/bitcoin'
}
