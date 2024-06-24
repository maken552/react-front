import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchCartablesDataFromAPI } from '@/api/slices/Cartables.api'
import { IDevice } from '@/types/devices-data.types'

const initialState: IDevice[] = []

export const cartablesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setCartables: (state, action: PayloadAction<IDevice[]>) => {
      return action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartablesDataFromAPI.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { setCartables } = cartablesSlice.actions

export default cartablesSlice.reducer
