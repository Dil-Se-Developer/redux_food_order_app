import { ActionTypes } from "../constants/action-types";

export const addItemToCartHandler = (item) => {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: item,
    };
};

export const removeItemFromCartHandler = (id) => {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: id,
    };
};