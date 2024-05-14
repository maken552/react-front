import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchRentalsDataFromAPI } from '@/api/slices/Rentals.api'
import { IBitcoinMiner, IRental } from '@/types/devices-data.types'

interface IState {
  minerRentalList: IRental[]
  bitcoinMinerList: IBitcoinMiner[]
}

const initialState: IState = {
  minerRentalList: [],
  bitcoinMinerList: []
}

export const rentalsSlice = createSlice({
  name: 'rentals',
  initialState,
  reducers: {
    setMinerList: (state, action: PayloadAction<IRental[]>) => {
      state.minerRentalList = action.payload
    },
    setBitcoinList: (state, action: PayloadAction<IBitcoinMiner[]>) => {
      state.bitcoinMinerList = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRentalsDataFromAPI.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { setMinerList, setBitcoinList } = rentalsSlice.actions

export default rentalsSlice.reducer
