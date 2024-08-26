import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productSlice";
import showModalReducer from "./slices/modalSlices";

const store = configureStore({
    reducer: {
        products: productsSlice,
        showModal: showModalReducer,
    }
})

export default store;