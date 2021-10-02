import { types } from "../const/types";

const initialState = {
    banners: [],
    novelties: [],
};

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.bannersLoaded:
            return {
                ...state,
                banners: [...action.payload],
            };

        case types.noveltiesLoaded:
            return {
                ...state,
                novelties: action.payload,
            };
        default:
            return state;
    }
};
