import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserState {
  created_at: string
  email: string
  id: number
  relationships?: {
    wallets: ICoin[]
  }
  token: string
  updated_at: string
  first_name: string
  last_name: string
  balance_usd: number
}

interface ICoin {
  balance: string
  client_id: number
  coin_id: number
  created_at: string
  id: number
  symbol: string
  to_usd: number
  updated_at: string
  usd_price: {
    USD: number
    percent_change_1h: number
  }
  relationships: {
    coin: {
      logo: string
      name: string
    }
  }
}

const initialState: IUserState = {
  created_at: '',
  email: '',
  id: 0,
  token: '',
  updated_at: '',
  first_name: '',
  last_name: '',
  balance_usd: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      return action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer
