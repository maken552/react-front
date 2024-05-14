import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchRentalsDataFromAPI } from '@/api/slices/Rentals.api'
import { IDevice } from '@/types/devices-data.types'

const initialState: IDevice[] = []

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IDevice[]>) => {
      return action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRentalsDataFromAPI.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = marketSlice.actions

export default marketSlice.reducer
