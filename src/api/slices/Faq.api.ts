import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { DOMAIN } from '@/app/appRoutePath'
import { createFAQEntry } from '@/store/features/faqSlice/faqSlice'
import { IFaqData } from '@/types/faq-data.types'

export const fetchFAQDataFromAPI = createAsyncThunk(
  'faq/fetchFAQData',
  async (thunkAPI) => {
    const response = await axios.get(`${DOMAIN}/api/faqs`)

    console.log('faq response', response)

    const faqs: IFaqData[] = []

    response.data.data.forEach(
      ({ id, question, answer, created_at, updated_at }: IFaqData) => {
        faqs.push(
          createFAQEntry({ id, question, answer, created_at, updated_at })
        )
      }
    )

    return faqs
  }
)
