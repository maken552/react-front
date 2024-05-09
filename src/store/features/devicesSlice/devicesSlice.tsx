import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchDevicesDataFromAPI } from '@/api/slices/Devices.api'
import { IDevice } from '@/types/devices-data.types'

const initialState: IDevice[] = []

export const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IDevice[]>) => {
      return action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDevicesDataFromAPI.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = deviceSlice.actions

export default deviceSlice.reducer
