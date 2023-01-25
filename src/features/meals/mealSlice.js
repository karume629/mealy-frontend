import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  meals: [],
  singleMeal: {},
  error: '',
  cart: [],
  totalPrice: 0,
}

export const fetchMeals = createAsyncThunk('meals/fetchMeals', () => {
    return axios.get("http://localhost:3000/meals")
    .then(res => res.data)
})

export const addMeal = createAsyncThunk('meals/addMeal', (data) => {
    return axios.post("http://localhost:3000/meals", data)
    .then(res => res.data)
})

export const fetchMealById = createAsyncThunk('meals/fetchMealById', (id) => {
    return axios.get(`http://localhost:3000/meals/${id}`)
    .then(res => res.data)
})

const mealSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            if (state.cart.find(item => action.payload.id === item.id)) return state
            let newCartItem = {...action.payload, quantity: 1, subtotal: action.payload.price}
            state.cart.push(newCartItem)

            return state
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
            console.log(action.payload);
            return state
        },

        incrementItem: (state, action) => {
            let index = state.cart.findIndex(item => item.id === action.payload)
            state.cart[index].quantity += 1
            state.cart[index].subtotal +=  state.cart[index].price
        },

        decrementItem: (state, action) => {
            let index = state.cart.findIndex(item => item.id === action.payload)
            if (state.cart[index].quantity === 1) return state
            state.cart[index].quantity -= 1 
            state.cart[index].subtotal -=  state.cart[index].price
        },

        getTotal: (state) => {
            state.totalPrice = state.cart.reduce((acc, item) => {
              return acc + item.price * item.quantity
            }, 0)
          },
    },
    extraReducers: builder => {
      builder.addCase(fetchMeals.pending, state => {
          state.loading = true
      })
  
      builder.addCase(fetchMeals.fulfilled, (state, action) => {
          state.loading = false
          state.meals = action.payload
          state.error = ''
      })
  
      builder.addCase(fetchMeals.rejected, (state, action) => {
          state.loading = false
          state.meals = []
          state.error = action.error.message
      })
  
      builder.addCase(fetchMealById.fulfilled, (state, action) => {
          state.singleMeal = action.payload
      })
  
      builder.addCase(addMeal.pending, (state) => {
          state.loading = true
      })
  
      builder.addCase(addMeal.fulfilled, (state, action) => {
          state.loading = false
          state.meals.push(action.payload)
          state.error = ''
      })
  
      builder.addCase(addMeal.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message
      })

    }
})

export default mealSlice.reducer

export const { addtoCart, removeFromCart, incrementItem, decrementItem, getTotal } = mealSlice.actions