import { configureStore } from '@reduxjs/toolkit'
import mealReducer from '../features/meals/mealSlice'

export const store = configureStore({
  reducer: {
    meals: mealReducer
  },
})