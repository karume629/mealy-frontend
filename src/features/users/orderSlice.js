import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const url = "http://localhost:3000"

const initialState ={
    loading: false,
    orderSuccess: false,
    payed: false,
    error: '',
    orderDeleted: false,
    userOrders: [],
    allOrders: [],
    total: null,
    singleOrder: {}
}

export const getAllOrders = createAsyncThunk('orderSlice/getAllOrders', () => {
    return axios.get(`${url}/orders`).then(res => res.data)
})

export const makeOrder = createAsyncThunk('orderSlice/makeOrder', data => {
    return axios.post(`${url}/orders`, data).then(res => res.data)
})

export const getUserOrders = createAsyncThunk('orderSlice/getUserOrders', data => {
    return axios.post(`${url}/user_orders`, data).then(res => res.data)
})

export const editOrder = createAsyncThunk('orderSlice/editOrder', (data) => {
    return axios.patch(`${url}/orders/${data.id}`, data).then(res => res.data)
})

export const getSingleOrder = createAsyncThunk('orderSlice/getSingleOrder', (id) => {
    return axios.get(`${url}/orders/${id}`).then(res => res.data)
})

export const deleteOrder = createAsyncThunk('orderSlice/deleteOrder', id => {
    return axios.delete(`${url}/orders/${id}`).then(res => res.data)
})

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        reset: state => {
            state.orderSuccess = false;
            state.orderDeleted = false;
        },
        incrementQuantity: (state, action) => {
            let index = state.userOrders.find(item => item.id === action.payload.id)
            index.quantity += 1
            
        },
        decrementQuantity: (state, action) => {
            let index = state.userOrders.find(item => item.id === action.payload.id)
            if(index.quantity === 1) return state
            index.quantity -= 1
            
        }
    },

    extraReducers: builder => {
        builder.addCase(makeOrder.pending, state => {
            state.loading = true
        })
        builder.addCase(makeOrder.fulfilled, state => {
            state.loading = false
            state.orderSuccess = true
            state.payed = true
            state.error = ''
        })
        builder.addCase(makeOrder.rejected, (state, action) => {
            state.loading = false
            state.orderSuccess = false
            state.payed = false
            state.error = action.error.message
        })


        builder.addCase(editOrder.pending, state => {
            state.loading = true
        })
        builder.addCase(editOrder.fulfilled, state => {
            state.loading = false
            state.orderSuccess = true
            state.error = ''
            state.payed = true
        })
        builder.addCase(editOrder.rejected, (state, action) => {
            state.loading = false
            state.orderSuccess = false
            state.error = action.error.message
            state.payed = false
        })


        builder.addCase(getUserOrders.fulfilled, (state, action) => {
            state.userOrders = action.payload
        })

        builder.addCase(getAllOrders.fulfilled, (state, action) => {
            state.allOrders = action.payload
        })


        builder.addCase(deleteOrder.fulfilled, state => {
            state.orderDeleted = true
        })


        builder.addCase(getSingleOrder.fulfilled, (state, action) => {
            state.total = action.payload.quantity * action.payload.meal.price
            state.singleOrder = action.payload
        })
    }
})


export default orderSlice.reducer
export const { reset, incrementQuantity, decrementQuantity } = orderSlice.actions