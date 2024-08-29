import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { getCartTotalAmount } from './cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})

store.dispatch(getCartTotalAmount)