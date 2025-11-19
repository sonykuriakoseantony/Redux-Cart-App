import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//getAllProducts should be called inside home useeffect using dispatch method
export const getAllProducts = createAsyncThunk('products/getAllProducts', async () =>{
    const result = await axios.get('https://dummyjson.com/products')
   
    // save all products to session storage - data will be kept inside the seeion only
    sessionStorage.setItem('products', JSON.stringify(result.data.products));
    return result.data.products
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts:[],
        backupAllProducts : [], // for search backup
        loading:true,
        error:''
    },
    reducers : {
        //only synchronous actions
        searchProduct : (state, action) => {
            // state.allProducts = state.backupAllProducts.filter(item=>item.title.toLowerCase().includes(action.payload))
            return {...state, allProducts : state.backupAllProducts.filter(item=>item.title.toLowerCase().includes(action.payload))}
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            state.backupAllProducts = action.payload;
            state.loading = false;
            state.error = '';
        }),
        builder.addCase(getAllProducts.pending, (state) => {
            state.allProducts = [];
            state.backupAllProducts = [];
            state.loading = true;
            state.error = '';
        }),
        builder.addCase(getAllProducts.rejected, (state) => {
            state.allProducts = [];
            state.backupAllProducts = [];
            state.loading = true;
            state.error = 'API Failed! Something went wrong!';
        })
    }
});

export const { searchProduct } = productSlice.actions
export default productSlice.reducer;