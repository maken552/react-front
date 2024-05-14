import { combineReducers, configureStore } from '@reduxjs/toolkit'

import devicesSliceReducer from './features/devicesSlice/devicesSlice'
import faqSliceReducer from './features/faqSlice/faqSlice'
import marketSliceReducer from './features/marketSlice/marketSlice'
import rentalsSliceReducer from './features/rentalsSlice/rentalsSlice'
import userSliceReducer from './features/userSlice/userSlice'

const rootReducer = combineReducers({
  user: userSliceReducer,
  faq: faqSliceReducer,
  devices: devicesSliceReducer,
  rentals: rentalsSliceReducer,
  market: marketSliceReducer
})

export const store = configureStore({
  reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
