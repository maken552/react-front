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
