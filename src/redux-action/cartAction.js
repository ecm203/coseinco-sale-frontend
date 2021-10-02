import { types } from "../const/types";

const baseUrl = "http://localhost:5000/api";

export const cartProductAdd = (product) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`${baseUrl}/cart/add`, {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(product),
            });
            const data = await resp.json();
            dispatch(cartProductAdded(data));
        } catch (error) {
            console.log(error);
        }
    };
};

const cartProductAdded = (resp) => ({
    type: types.cartProductAdded,
    payload: resp,
});

export const getProductsById = (productsId) => {
    const body = {
        productoid: productsId,
    };
    return async (dispatch) => {
        try {
            const resp = await fetch(`${baseUrl}/productos/productoCarrito`, {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(body),
            });
            const data = await resp.json();
            const {carritoProducto} =  getProductQuantityCart(data);
            const subtotal = getSubtotalCart(carritoProducto);
            dispatch(cartProductsLoaded(carritoProducto));
            dispatch(subtotalLoaded(subtotal));
        } catch (error) {
            console.log(error);
        }
    };
};

export const saveOrder = (orderData) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`${baseUrl}/pedidos`, {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(orderData),
            });
            const data = await resp.json();
            dispatch(orderCreated(data));
        } catch (error) {
            console.log(error);
        }
    };
};

const getProductQuantityCart = (data) => {
    const cartProducts = JSON.parse(localStorage.getItem("carrito"));
    for (let i = 0; i < data.carritoProducto.length; i++) {
        if (cartProducts[i].idProducto === data.carritoProducto[i]._id) {
            data.carritoProducto[i] = {
                ...data.carritoProducto[i],
                cantidadCarrito: cartProducts[i].cantidad,
                subtotalProduct:
                    cartProducts[i].cantidad * data.carritoProducto[i].precio,
            };
        }
    }
    return data;
};

const getSubtotalCart = (data) => {
    let subtotal = 0;
    for (let i = 0; i < data.length; i++) {
        subtotal += data[i].subtotalProduct;
    }
    return subtotal.toFixed(2);
};

const orderCreated = (data) => ({
    type: types.orderLoaded,
    payload: data
})
export const insertShipment = (data) => ({
    type: types.cartShipmentInserted,
    payload: data
})
const subtotalLoaded = (resp) => ({
    type: types.cartSubtotalLoaded,
    payload: resp,
});

const cartProductsLoaded = (resp) => ({
    type: types.cartProductLoaded,
    payload: resp,
});
