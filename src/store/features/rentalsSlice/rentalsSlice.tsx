import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchRentalsDataFromAPI } from '@/api/slices/Rentals.api'
import { IRental } from '@/types/devices-data.types'

const initialState: IRental[] = []

export const rentalsSlice = createSlice({
  name: 'rentals',
  initialState,
  reducers: {
    setRental: (state, action: PayloadAction<IRental[]>) => {
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
export const { setRental } = rentalsSlice.actions

export default rentalsSlice.reducer
