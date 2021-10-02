import { types } from "../const/types";

const initialState = {
    product: {},
    info: [],
    colorSelected: [],
    productsRelated: []
};

export const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.productDetailLoaded:
            return {
                ...state,
                product: action.payload,
            };
        case types.productDetailInfoLoaded:
            return {
                ...state,
                info: [...action.payload],
                colorSelected: [action.payload[0]]
            };
        case types.productsRelatedLoaded:
            return{
                ...state,
                productsRelated: [...action.payload]
            }
        case types.changeColorSelected:
            return{
                ...state,
                colorSelected: [action.payload]
            }
        default:
            return state;
    }
};
