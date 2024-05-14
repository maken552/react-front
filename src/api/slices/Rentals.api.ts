import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { DOMAIN } from '@/app/appRoutePath'
import { IRental } from '@/types/devices-data.types'
// import { createFAQEntry } from '@/store/faqSlice/faqSlice'
// import { IFaqData } from '@/types/faq-data.types'

const createRentalEntry = ({
  active,
  duration,
  id,
  per_day,
  price,
  relationships
}: IRental) => {
  return {
    active,
    duration,
    id,
    per_day,
    price,
    relationships
  }
}

export const fetchRentalsDataFromAPI = createAsyncThunk(
  'rentals/fetchRentalsData',
  async (thunkAPI) => {
    const response = await axios.get(`${DOMAIN}/api/device/rent/packages`)

    console.log('rentals', response)

    const rentals: IRental[] = []

    response.data.data.forEach(
      ({ active, duration, id, per_day, price, relationships }: IRental) => {
        rentals.push(
          createRentalEntry({
            active,
            duration,
            id,
            per_day,
            price,
            relationships
          })
        )
      }
    )

    return rentals
  }
)
