import {types} from '../const/types';

export const uiOpenLogin = () => ({ type: types.openLogin });
export const uiCloseLogin = () => ({ type: types.closeLogin });
export const uiOpenCartP = () => ({ type: types.openCartP });
export const uiCloseCartP = () => ({ type: types.closeCartP });
export const uiOpenSearchH = () => ({ type: types.openSearchH });
export const uiCloseSearchH = () => ({ type: types.closeSearchH });
export const uiActiveLayout = () => ({ type: types.activeLayout });
export const uiInactiveLayout = () => ({ type: types.inactiveLayout });
export const uiIsLogin = (value) => ({ 
  type: types.isLogin,
  payload: value
 });