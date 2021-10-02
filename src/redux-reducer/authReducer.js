import { types } from "../const/types";

const initialState = {
    catalogByCategories: [],
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.catalogCategoriesLoaded:
            return {
                ...state,
                catalogByCategories: [...action.payload],
            };

        default:
            return state;
    }
};
