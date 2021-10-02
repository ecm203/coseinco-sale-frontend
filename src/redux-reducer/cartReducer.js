import { types } from "../const/types";

const initialState = {
    productsList: [],
    subtotal: 0,
    shipment: {},
    order: {}
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.cartProductLoaded:
            return {
                ...state,
                productsList: [...action.payload],
            };
        case types.cartSubtotalLoaded:
            return {
                ...state,
                subtotal: action.payload
            }
        case types.cartShipmentInserted:
            return {
                ...state,
                shipment: action.payload
            }
        case types.orderLoaded:
            return {
                ...state,
                order: action.payload
            }
        default:
            return state;
    }
}