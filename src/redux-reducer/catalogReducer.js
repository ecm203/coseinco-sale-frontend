import { types } from "../const/types";

const initialState = {
    catalogByCategories: [],
    priceByCategories: [],
    sizeByCategories: [],
    colorByCategories: [],
};

export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.catalogCategoriesLoaded:
            return {
                ...state,
                catalogByCategories: [...action.payload],
            };

        case types.filterSizeLoaded: {
            return {
                ...state,
                sizeByCategories: [...action.payload],
            };
        }

        case types.filterColorLoaded: {
            return {
                ...state,
                colorByCategories: [...action.payload],
            };
        }
        default:
            return state;
    }
};
