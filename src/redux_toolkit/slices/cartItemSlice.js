import { createSlice } from "@reduxjs/toolkit";


const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartItemSlice = createSlice({
    name: "cartItems",
    initialState: defaultCartState,
    reducers: {
        addItemToCartHandler: (state, action) => {
            const updatedTotalAmount =
                state.totalAmount + action.payload.price * action.payload.amount;

            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            const existingCartItem = state.items[existingCartItemIndex];

            let updatedItems;

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.amount
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.payload);
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        },

        removeItemFromCartHandler: (state, action) => {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload
            );
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;
            let updatedItems;
            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.payload);
            } else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        },
    },
});


export const {addItemToCartHandler, removeItemFromCartHandler}  = cartItemSlice.actions;
export default cartItemSlice.reducer;
