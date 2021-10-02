import { types } from "../const/types";

const initialState = {
    openLogin: false,
    openCartP: false,
    openSearchH: false,
    layout: true,
    isLogin: false
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.openLogin:
            return {
                ...state,
                openLogin: true,
                openCartP: false,
            };

        case types.closeLogin:
            return {
                ...state,
                openLogin: false,
            };

        case types.openCartP:
            return {
                ...state,
                openCartP: true,
                openLogin: false,
            };

        case types.closeCartP:
            return {
                ...state,
                openCartP: false,
            };

        case types.openSearchH: {
            return {
                ...state,
                openSearchH: true,
                openLogin: false,
                openCartP: false,
            };
        }

        case types.closeSearchH: {
            return {
                ...state,
                openSearchH: false,
            };
        }

        case types.activeLayout: {
            return {
                ...state,
                layout: true
            }
        }

        case types.inactiveLayout: {
            return {
                ...state,
                layout: false
            }
        }

        case types.isLogin: {
            return {
                ...state,
                isLogin: action.payload
            }
        }
        default:
            return state;
    }
};
