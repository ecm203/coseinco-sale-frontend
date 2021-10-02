import { combineReducers } from 'redux';
import {uiReducer} from './uiReducer';
import { layoutReducer } from './layoutReducer';
import { homeReducer } from './homeReducer';
import { catalogReducer } from './catalogReducer';
import { productDetailReducer } from './productDetailReducer';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    layout: layoutReducer,
    home: homeReducer,
    catalog: catalogReducer,
    product: productDetailReducer,
    cart: cartReducer
})