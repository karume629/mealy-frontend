import { configureStore } from '@reduxjs/toolkit'
import mealReducer from '../features/meals/mealSlice'
import adminMealReducer from '../features/admin/adminMealSlice'
import calendarReducer from '../features/calendar/calendarSlice'
import orderReducer from '../features/users/orderSlice'

export const store = configureStore({
  reducer: {
    meals: mealReducer,
    adminMeals: adminMealReducer,
    calendar: calendarReducer,
    orders: orderReducer
  },
})