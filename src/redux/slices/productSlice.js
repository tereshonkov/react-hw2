import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setProductsToLocalStorage } from "../utils/productsLS";
import { getProductsFromLocalStorage } from "../utils/productsLS";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const productsFromLs = getProductsFromLocalStorage();
        
        if (productsFromLs) {
            return productsFromLs
        }
        const products = await fetch('/data.json').then(res => res.json());
        return products;
    }
)

    const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        selectedProductId: null,
    },
    reducers: {
        toogleIsFavorite: (state,action) => {
            const id = action.payload;
            const index = state.data.findIndex(el => el.id === id);
            state.data[index].isFavorite = !state.data[index].isFavorite;
            setProductsToLocalStorage(state.data);
        },
        addToCart: (state, action) => {
            const id = action.payload;
            const product = state.data.find(el => el.id === id);
            product.quantity += 1;
            setProductsToLocalStorage(state.data);
        },
        deleteCart: (state, action) => {
            const id = action.payload;
            const elemCart = state.data.find(el => el.id === id);
            elemCart.quantity = 0;
            setProductsToLocalStorage(state.data);
        },
        setSelectedProductId: (state, action) => {
            state.selectedProductId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, actions) => {
            state.data = actions.payload;
            setProductsToLocalStorage(state.data);
        })
    }
});

export const { toogleIsFavorite, addToCart, deleteCart, setSelectedProductId } = productsSlice.actions;
export default productsSlice.reducer;