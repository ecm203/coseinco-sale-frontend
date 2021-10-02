import { types } from "../const/types";

const baseUrl = "https://ezzetacompany.com/tienda";

export const getCatalogByCategory = (category) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(
                `${baseUrl}/consultarProductosbyCategoria/${category}`
            );
            const data = await resp.json();
            dispatch(catalogCategoriesLoaded(data));
        } catch (error) {
            console.log(error);
        }
    };
};

const catalogCategoriesLoaded = (catalog) => ({
    type: types.catalogCategoriesLoaded,
    payload: catalog,
});

export const getSizeByCategory = (category) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(
                `${baseUrl}/consultarTallasbyCategoria/${category}`
            );
            const data = await resp.json();
            dispatch(filterSizeLoaded(data));
        } catch (error) {
            console.log(error);
        }
    };
};

const filterSizeLoaded = (size) => ({
    type: types.filterSizeLoaded,
    payload: size,
});

export const getColorByCategory = (category) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(
                `${baseUrl}/consultarColoresbyCategoria/${category}`
            );
            const data = await resp.json();
            dispatch(colorSizeLoaded(data));
        } catch (error) {
            console.log(error);
        }
    };
};

const colorSizeLoaded = (color) => ({
    type: types.filterColorLoaded,
    payload: color,
});
