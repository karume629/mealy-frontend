import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const url = process.env.REACT_APP_BACKEND_URL


const initialState = {
  loading: false,
  day_meals: [],
  error: '',
  day_sales: 0
}


export const createCalendar = createAsyncThunk('calendar/createCalendar', data => {
    return axios.post(`${url}/calendars`, data)
    .then(res => res.data)
})

export const singleDayMeal = createAsyncThunk('calendar/singleDayMeal', dataObj => {
    return axios.post(`${url}/meals_per_day`, dataObj)
    .then(res => res.data)
})

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    extraReducers: builder => {
        builder.addCase(createCalendar.fulfilled, (state, action) => {
            return state
        })

        builder.addCase(singleDayMeal.fulfilled, (state, action) => {
            state.loading = false
            state.day_meals = action.payload.meals
            state.error = ''
        })
        
    }
})

export default calendarSlice.reducer
