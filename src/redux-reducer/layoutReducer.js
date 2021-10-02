import { types } from "../const/types";

const initialState = {
    categories: [],
    info: {},
    search: []
};

export const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.categoriesLoaded:
            return {
                ...state,
                categories: [...action.payload],
            };

        case types.infoLoaded:
            return {
                ...state,
                info: action.payload,
            };  
        case types.searchProductLoaded:
            return{
                ...state,
                search: [...action.payload]
            }
        default:
            return state;
    }
};
