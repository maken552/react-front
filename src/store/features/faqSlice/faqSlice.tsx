import { createSlice } from '@reduxjs/toolkit'

import { fetchFAQDataFromAPI } from '@/api/slices/Faq.api'
import { IFaqData } from '@/types/faq-data.types'

export const createFAQEntry = ({
  id,
  question,
  answer,
  created_at,
  updated_at
}: IFaqData) => ({
  id: id,
  question: question,
  answer: answer,
  created_at: created_at,
  updated_at: updated_at
})

const initialState: IFaqData[] = []

export const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFAQDataFromAPI.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

// Action creators are generated for each case reducer function
// export const {} = faqSlice.actions

export default faqSlice.reducer
