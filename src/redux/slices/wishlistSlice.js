import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name : 'wishlist',
    initialState : [],
    reducers : {
        //add to wishlist
        addToWishList : (state, action) => {
            state.push(action.payload);
        },

        //remove from wishlist
        removeFromWishList : (state, action) => {
            return state.filter(item => item.id != action.payload.id);
        }
    }
})

export const { addToWishList, removeFromWishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;