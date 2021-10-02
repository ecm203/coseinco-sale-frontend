import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { ReactComponent as Lock } from "../assets/icons/Locked.svg";
import { ReactComponent as Delivery } from "../assets/icons/Delivery.svg";
import { ReactComponent as Favorite } from "../assets/icons/Favorite.svg";
import { ReactComponent as Trash } from "../assets/icons/Trash.svg";
import { useDispatch, useSelector } from "react-redux";
import { getProductsById } from "../redux-action/cartAction";

const ProductCart = ({
    id,
    imgUrl,
    marca,
    name,
    sku,
    cantidad,
    precioUnit,
    subtotal,
}) => {
    const [itemsCart, setItemsCart] = useState(null);
    useEffect(() => {
        if (!itemsCart) {
            setItemsCart(
                localStorage.getItem("carrito")
                    ? JSON.parse(localStorage.getItem("carrito"))
                    : []
            );
        }
    }, [itemsCart]);

    const handleRemoveProduct = (id) => {
        const indexArray = itemsCart.findIndex((e) => e.idProducto === id);
        console.log(indexArray);
        if (indexArray >= 0) {
            setItemsCart(itemsCart.splice(indexArray, 1));
            console.log(itemsCart);
            localStorage.setItem("carrito", JSON.stringify(itemsCart));
            window.location.reload();
        }
    };

    return (
        <div className="ui-bg s-mb-2 s-d-flex">
            <div className="s-20">
                <img src={imgUrl} alt="" />
            </div>
            <div className="s-80 s-pxy-3">
                <p className="t--link-2"> {marca} </p>
                <div className="s-main-justify s-cross-center s-mb-2">
                    <span> {name} </span>
                    <button
                        className="btn btn--ghost btn--icon"
                        onClick={() => handleRemoveProduct(id)}
                    >
                        {" "}
                        <Trash className="btn__icon" />
                    </button>
                </div>
                <div className="t--secundary t--body-3 s-column">
                    <span className="s-pb-05"> SKU: {sku} </span>
                    <span className="s-pb-05"> Cantidad: {cantidad} </span>
                    <span className="s-pb-05">
                        Precio/u:
                        <span className="t--price">{precioUnit}</span>
                    </span>
                </div>
                <div className="s-right">
                    <h4 className="t--price"> {subtotal}</h4>
                </div>
            </div>
        </div>
    );
};

const Cart = () => {
    const history = useHistory();
    const [itemsCart, setItemsCart] = useState(null);
    const [productsId, setProductsId] = useState([]);
    const { productsList, subtotal } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (itemsCart !== null) {
            setProductsId(
                ...productsId,
                itemsCart.map((item) => item.idProducto)
            );
        }
    }, [itemsCart]);

    useEffect(() => {
        if (productsId.length > 0) {
            dispatch(getProductsById(productsId));
        }
    }, [dispatch, productsId]);

    useEffect(() => {
        if (!itemsCart) {
            setItemsCart(
                localStorage.getItem("carrito")
                    ? JSON.parse(localStorage.getItem("carrito"))
                    : []
            );
        }
    }, [itemsCart]);

    return (
        <div className="l-section">
            <div id="steps">
                <div className="step active" data-desc="Carrito de compras">
                    1
                </div>
                <div className="step" data-desc="Método de envio">
                    2
                </div>
                <div className="step" data-desc="Realizar pago">
                    3
                </div>
                <div className="step" data-desc="Pedido confirmado">
                    4
                </div>
            </div>
            <div className="grid-container">
                <div className="ui-bg s-pxy-3 s-mb-4">
                    <h2> Carrito de compras ({productsList.length} items)</h2>
                </div>
                <div className="flex-container">
                    <div className="flex-item s-70 s-px-0 s-pr-2">
                        {productsList.length > 0 ? (
                            productsList.map((product, index) => (
                                <ProductCart
                                    key={index}
                                    id={product._id}
                                    imgUrl={product.imagenes[0]}
                                    marca={"Marca"}
                                    name={product.nombre}
                                    sku={product.codigoInterno}
                                    cantidad={product.cantidadCarrito}
                                    precioUnit={product.precio}
                                    subtotal={product.subtotalProduct}
                                />
                            ))
                        ) : (
                            <div
                                className="s-d-flex s-column s-main-center s-cross-center ui-bg"
                                style={{ height: "100%" }}
                            >
                                <p className="t--body-2 s-mb-2">
                                    {" "}
                                    No hay productos en tu carrito{" "}
                                </p>
                                <Link
                                    to="/catalogo/Novedades"
                                    className="t--link-1"
                                    href="www.google.com"
                                >
                                    Vamos a comprar
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="flex-item s-30 s-px-0 s-pl-2">
                        <div className="ui-bg s-pxy-3 s-mb-2">
                            <h3 className="s-mb-3">Resumen de compra</h3>
                            <div className="s-main-justify t--secundary s-mb-3">
                                <h5> Subtotal (Inc. IGV) </h5>
                                <h5 className="t--price"> {subtotal}</h5>
                            </div>
                            <div className="s-main-justify t--secundary s-mb-3">
                                <h5> Costo de envío </h5>
                                <h5> Gratis </h5>
                            </div>
                            <button
                                className="btn btn--primary btn--full"
                                onClick={() => history.push("/envio")}
                            >
                                {" "}
                                Vamos a comprar{" "}
                            </button>
                        </div>
                        <div className="ui-bg s-pxy-3 s-d-flex s-main-distribute">
                            <div className="s-d-flex s-column s-cross-center s-1-3 s-px-2">
                                <Lock className="s-mb-2" />
                                <span className="t--body-2 s-center">
                                    Compras 100% seguras
                                </span>
                            </div>
                            <div className="s-d-flex s-column s-cross-center s-1-3 s-px-2">
                                <Delivery className="s-mb-2" />
                                <span className="t--body-2 s-center">
                                    Envios a todo el peru
                                </span>
                            </div>
                            <div className="s-d-flex s-column s-cross-center s-1-3 s-px-2">
                                <Favorite className="s-mb-2" />
                                <span className="t--body-2 s-center">
                                    Clientes satisfechos
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="grid-container s-pxy-4 s-grid-6 ui-bg l-big-section">
        //     <div className="s-cols-3 lg-cols-6">
        //         <div className="t--heading-1 s-mb-4"> Seguimiento del pedido </div>
        //         <div className="input-group__box s-mb-2">
        //             <span className="input-group__label"> Correo electronico </span>
        //             <input
        //                 className="box__text"
        //                 type="text"
        //             />
        //         </div>
        //         <div className="input-group__box s-mb-2">
        //             <span className="input-group__label"> Nro de seguimiento </span>
        //             <input
        //                 className="box__text"
        //                 type="text"
        //             />
        //         </div>
        //         <button className="btn btn--primary btn--full">
        //             Aceptar
        //         </button>
        //     </div>
        // </div>
    );
};

export default Cart;
