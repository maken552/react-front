import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { DOMAIN } from '@/app/appRoutePath'
import { IDevice } from '@/types/devices-data.types'
// import { createFAQEntry } from '@/store/faqSlice/faqSlice'
// import { IFaqData } from '@/types/faq-data.types'

const createDeviceEntry = ({
  active,
  daily_mining,
  description,
  hashrate,
  hosting_option,
  id,
  image,
  manufacturer_id,
  name,
  price
}: IDevice) => {
  return {
    active,
    daily_mining,
    description,
    hashrate,
    hosting_option,
    id,
    image,
    manufacturer_id,
    name,
    price
  }
}

export const fetchDevicesDataFromAPI = createAsyncThunk(
  'devices/fetchDevicesData',
  async (thunkAPI) => {
    const response = await axios.get(`${DOMAIN}/api/devices`)

    console.log(response)

    const devices: IDevice[] = []

    response.data.data.forEach(
      ({
        active,
        daily_mining,
        description,
        hashrate,
        hosting_option,
        id,
        image,
        manufacturer_id,
        name,
        price
      }: IDevice) => {
        devices.push(
          createDeviceEntry({
            active,
            daily_mining,
            description,
            hashrate,
            hosting_option,
            id,
            image,
            manufacturer_id,
            name,
            price
          })
        )
      }
    )

    return devices
  }
)
