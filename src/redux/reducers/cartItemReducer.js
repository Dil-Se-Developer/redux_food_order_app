import { ActionTypes } from "../constants/action-types";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

export const cartItemReducer = (state = defaultCartState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_ITEM:{ 
            const updatedTotalAmount =
                state.totalAmount + payload.price * payload.amount;

            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === payload.id
            );

            const existingCartItem = state.items[existingCartItemIndex];

            let updatedItems;

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + payload.amount
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(payload);
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        }

        case ActionTypes.REMOVE_ITEM:{
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === payload
            );
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;
            let updatedItems;
            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== payload);
            } else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        }

        default:
            return state;
    }
}




// export const cartRemoveItemReducer = (state = defaultCartState, { type, payload }) => {
//     switch (type) {
        
//         default:
//             return state;
//     }
// }