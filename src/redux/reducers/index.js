import { combineReducers } from "@reduxjs/toolkit";
import { cartItemReducer } from "./cartItemReducer";

const reducers = combineReducers({
    cartItems: cartItemReducer
});

export default reducers;