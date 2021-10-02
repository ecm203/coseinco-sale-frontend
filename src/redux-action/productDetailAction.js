import { types } from "../const/types";

const baseUrl = "http://localhost:5000"

export const getProductById = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`${baseUrl}/api/productos/${id}`);
            const data = await resp.json();
            dispatch(productDetailLoaded(data.data.doc));
        } catch (error) {
            console.log(error);
        }
    };
};

const productDetailLoaded = (product) => ({
    type: types.productDetailLoaded,
    payload: product,
});


export const getProductInfoById = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(
                `${baseUrl}/findDetalleproductosByCodigo/${id}`
            );
            const data = await resp.json();
            dispatch(productDetailInfoLoaded(data));
        } catch (error) {
            console.log(error);
        }
    };
};

const productDetailInfoLoaded = (info) => ({
    type: types.productDetailInfoLoaded,
    payload: info,
});

export const getProductsRelated = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(
                `${baseUrl}/findListaRecomendadosByCategoria/${id}`
            );
            const data = await resp.json();
            dispatch(productsRelatedLoaded(data));
        } catch (error) {
            console.log(error)
        }
    }
}

const productsRelatedLoaded = (productsRelated) => ({
    type: types.productsRelatedLoaded,
    payload: productsRelated
});


export const changeColorSelected = (product) => ({
    type: types.changeColorSelected,
    payload: product
})