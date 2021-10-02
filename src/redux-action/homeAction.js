import { types } from "../const/types";

const baseUrl = "http://localhost:5000"


export const getBanners = () => {
    return async (dispatch) =>{
        try {
            const resp = await fetch(`${baseUrl}/consultarBanners`);
            const data = await resp.json()
            dispatch(bannersLoaded(data));

        } catch (error) {
            console.log(error);
        }
    }
}

const bannersLoaded = (banners) =>({
    type: types.bannersLoaded,
    payload: banners
})


export const getNovelties = () => {
    return async (dispatch) =>{
        try {
            const resp = await fetch(`${baseUrl}/api/productos`);
            const data = await resp.json()
            dispatch(noveltiesLoaded(data.data.data));

        } catch (error) {
            console.log(error);
        }
    }
}

const noveltiesLoaded = (banners) =>({
    type: types.noveltiesLoaded,
    payload: banners
})
