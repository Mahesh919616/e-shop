import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
    value: 0,
    cartTotalAmount: 0,
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state) => {
            state.value += 1
        },
        remove: (state) => {
            state.value -= 1
        },
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => (item.product === action.payload.product && item.id === action.payload.id))
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`Increased product quantity`, {position: 'bottom-right'})
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
                toast.success(`Added new product to cart`, {position: 'bottom-right'})
            }
        },
        removeFromCart: (state, action) => {
            console.log(action.payload)
            state.value -= action.payload.cartQuantity
            const removeItemIndex = state.cartItems.findIndex((item) => (item.product === action.payload.product && item.id === action.payload.id))
            state.cartItems.splice(removeItemIndex, 1)
            toast.error(`Removed product from cart`, {position: 'bottom-right'})
        },
        decreaseCart: (state, action) =>{
            const itemIndex = state.cartItems.findIndex((item) => (item.product === action.payload.product && item.id === action.payload.id))
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1
                state.value -= 1
                toast.error(`Decreased product quantity`, {position: 'bottom-right'})
            } else if(state.cartItems[itemIndex].cartQuantity === 1){
                const removeItemIndex = state.cartItems.findIndex((item) => (item.product === action.payload.product && item.id === action.payload.id))
                state.cartItems.splice(removeItemIndex, 1)
                state.value -= 1
                toast.error(`Removed product from cart`, {position: 'bottom-right'})
            }
        },
        increaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => (item.product === action.payload.product && item.id === action.payload.id))
            state.cartItems[itemIndex].cartQuantity += 1
            state.value += 1
            toast.info(`Increased product quantity`, {position: 'bottom-right'})
        },
        clearCart: (state) => {
            state.cartItems = []
            state.value = 0
            toast.error(`Cart cleared`, {position: 'bottom-right'})
        },
        getCartTotalAmount: (state, action) => {
            let total = state.cartItems.reduce((cartTotal, cartItem) => {
                const {price, cartQuantity} = cartItem
                const itemTotal =  price * cartQuantity

                cartTotal.total += itemTotal

                return cartTotal;
            },
            {
                total: 0
            }
            );
            state.cartTotalAmount = total;
        },
    },
})

export const { add, remove, addToCart, removeFromCart, decreaseCart, increaseCart, clearCart, getCartTotalAmount } = cartSlice.actions;
export default cartSlice.reducer;