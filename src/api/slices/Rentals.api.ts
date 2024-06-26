import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { DOMAIN } from '@/app/appRoutePath'
import { IBitcoinMiner, IRental } from '@/types/devices-data.types'
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

const createBitcoinEntry = ({
  active,
  btc_daily_income,
  created_at,
  duration,
  id,
  name,
  price,
  updated_at,
  ul
}: IBitcoinMiner) => {
  return {
    active,
    btc_daily_income,
    created_at,
    duration,
    id,
    name,
    price,
    updated_at,
    ul
  }
}

export const fetchRentalsDataFromAPI = createAsyncThunk(
  'rentals/fetchRentalsData',
  async (thunkAPI) => {
    const response = await axios.get(`${DOMAIN}/api/device/rent/packages`)
    const response2 = await axios.get(`${DOMAIN}/api/farm/rent/packages`)

    console.log('rentals', response)
    console.log('farms', response2)

    const minerRentals: IRental[] = []
    const bitcoinMiners: IBitcoinMiner[] = []

    response.data.data.forEach(
      ({ active, duration, id, per_day, price, relationships }: IRental) => {
        minerRentals.push(
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

    response2.data.data.forEach(
      ({
        active,
        btc_daily_income,
        created_at,
        duration,
        id,
        name,
        price,
        updated_at,
        ul
      }: IBitcoinMiner) => {
        bitcoinMiners.push(
          createBitcoinEntry({
            active,
            btc_daily_income,
            created_at,
            duration,
            id,
            name,
            price,
            updated_at,
            ul
          })
        )
      }
    )

    return {
      minerRentalList: minerRentals,
      bitcoinMinerList: bitcoinMiners
    }
  }
)
