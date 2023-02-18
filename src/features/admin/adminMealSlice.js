import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialState = {
  loading: false,
  meals: [],
  error: '',
}

export const fetchAdminMeals = createAsyncThunk('admin/fetchMeals', id => {
    return axios.post("http://localhost:3000/admin_meals", id)
    .then(res => res.data)
})

export const addMeal = createAsyncThunk('admin/addMeal', (data) => {
    return axios.post("http://localhost:3000/meals", data)
    .then(res => res.data)
})

export const editMeal = createAsyncThunk('admin/editMeal', (data) => {
    return axios.patch(`http://localhost:3000/meals/${data.id}`, data)
    .then(res => res.data)
})

export const deleteMeal = createAsyncThunk('admin/deleteMeal', (id) => {
    return axios.delete(`http://localhost:3000/meals/${id}`)
    .then(res => res.data)
})



const adminMealSlice = createSlice({
    name: 'adminMeals',
    initialState,
    reducers: {
        updateRemovedMeal: (state, action) => {
            state.meals = state.meals.filter(item => item.id !== action.payload)
            return state
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchAdminMeals.fulfilled, (state, action) => {
            state.loading = false
            state.meals = action.payload
            state.error = ''
        })

        builder.addCase(addMeal.fulfilled, (state, action) => {
            state.loading = false
            state.meals.push(action.payload)
            state.error = ''
            toast.success(`Your meal "${action.payload.title}" is now live!`);
        })

        builder.addCase(editMeal.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''
            let prevMeal = state.meals.find(item => item.id === action.payload.id)
            prevMeal = action.payload
            return state
        })

        builder.addCase(deleteMeal.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''
            state.meals.filter(item => item.id === action.payload.id)
            toast.error(`Meal deleted!`);
            return state
        })



  
        builder.addCase(addMeal.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchAdminMeals.pending, state => {
            state.loading = true
        })

  
        
  
        builder.addCase(addMeal.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

        builder.addCase(fetchAdminMeals.rejected, (state, action) => {
            state.loading = false
            state.meals = []
            state.error = action.error.message
        })

    }
})

export default adminMealSlice.reducer

export const { updateRemovedMeal } = adminMealSlice.actions