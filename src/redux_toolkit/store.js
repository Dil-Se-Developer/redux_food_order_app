import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from './slices/cartItemSlice';

const store = configureStore({
    reducer: {
        cartItems: cartItemReducer
    },
});

export default store;