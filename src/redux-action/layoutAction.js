import { types } from "../const/types";

const baseUrl = "https://ezzetacompany.com/tienda"

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`${baseUrl}/consultarCategorias`);
            const data = await resp.json()
            dispatch(categoriesLoaded(data));

        } catch (error) {
            console.log(error);
        }
    };
};

const categoriesLoaded = (categories) =>({

    type: types.categoriesLoaded,
    payload: categories
})


export const getInfo = () => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`${baseUrl}/consultarEstablecimiento`);
            const data = await resp.json()
            dispatch(infoLoaded(data));

        } catch (error) {
            console.error(error);
        }
    };
};

const infoLoaded = (info) =>({

    type: types.infoLoaded,
    payload: info
})

export const searchProduct = (query) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`${baseUrl}/Search/${query}`)
            const data = await resp.json()
            dispatch(searchProductLoaded(data));
        } catch (error) {
            console.log(error)
        }
    }
}

const searchProductLoaded = (product) => ({
    type: types.searchProductLoaded,
    payload: product
})
