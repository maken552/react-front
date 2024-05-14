export interface IDevice {
  active: number
  daily_mining: string
  description: string
  hashrate: string
  hosting_option: string
  id: number
  image: string
  manufacturer_id: number
  name: string
  price: string
}

export interface IRental {
  active: number
  duration: string
  id: number
  per_day: number
  price: string
  relationships: {
    device?: IDevice
  }
}

export interface IBitcoinMiner {
  active: number
  btc_daily_income: string
  btc_monthly_income: number
  btc_yearly_income: number
  created_at: string
  duration: number
  id: number
  name: string
  price: string
  updated_at: string
  usd_daily_income: number
  usd_monthly_income: number
  usd_yearly_income: number
}
