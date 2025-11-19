import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addToCart : (state, action) => {
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                //increment qunatity and price of existing product
                existingProduct.quantity +=1;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
                const remainingProducts = state.filter(item=>item.id != existingProduct.id);
                state = [...remainingProducts, existingProduct];
            }
            else{
                state.push({...action.payload, quantity:1,totalPrice:action.payload.price})
            }
        },
        removeFromCart : (state, action) => {
            return state.filter(item => item.id != action.payload.id);
        },
        incrementCartItem : (state, action) => {
            const existingCartItem = state.find(item=>item.id==action.payload)
            existingCartItem.quantity++;
            existingCartItem.totalPrice = existingCartItem.quantity * existingCartItem.price;
            const remainingCartItems = state.filter(item=>item.id != existingCartItem.id);
            state = [...remainingCartItems, existingCartItem];
        },
        decrementCartItem : (state, action) => {
            const existingCartItem = state.find(item=>item.id==action.payload)
            existingCartItem.quantity--;
            existingCartItem.totalPrice = existingCartItem.quantity * existingCartItem.price;
            const remainingCartItems = state.filter(item=>item.id != existingCartItem.id);
            state = [...remainingCartItems, existingCartItem];
        },
        emptyCart : () => {
            return []
        }
    }
})

export const { addToCart, removeFromCart, incrementCartItem, decrementCartItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;