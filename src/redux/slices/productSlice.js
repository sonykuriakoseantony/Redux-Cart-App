import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//getAllProducts should be called inside home useeffect using dispatch method
export const getAllProducts = createAsyncThunk('products/getAllProducts', async () =>{
    const result = await axios.get('https://dummyjson.com/products')
    return result.data.products
    
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts:[],
        loading:true,
        error:''
    },
    reducers : {
        //only synchronous actions
    },
    extraReducers : (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            state.loading = false;
            state.error = '';
        }),
        builder.addCase(getAllProducts.pending, (state) => {
            state.allProducts = [];
            state.loading = true;
            state.error = '';
        }),
        builder.addCase(getAllProducts.rejected, (state) => {
            state.allProducts = [];
            state.loading = true;
            state.error = 'API Failed! Something went wrong!';
        })
    }
});

export default productSlice.reducer;