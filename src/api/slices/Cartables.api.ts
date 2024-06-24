import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { DOMAIN } from '@/app/appRoutePath'
import { IDevice } from '@/types/devices-data.types'

export const fetchCartablesDataFromAPI = createAsyncThunk(
  'cartables/fetchCartablesData',
  async (thunkAPI) => {
    const response = await axios.get(`${DOMAIN}/api/cart/cartables`)

    console.log('cartable', response)

    const device: IDevice[] = []

    return device
  }
)
