import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uiCloseCartP } from "../../redux-action/uiAction";
import { useHistory } from "react-router";

import { getProductsById } from "../../redux-action/cartAction";

const CartProduct = ({ link,img, title, quantity, price, closeCart }) => {
    return (
        <div className="cart-preview__product">
            <Link to={link} className="product__link" onClick={ () => closeCart() }>
                <img src={img} alt={title} className="product__img" />
            </Link>
            <span className="product__title t--body-3 t--primary">{title}</span>
            <span className="t--body-3 t--secundary">Cantidad: {quantity}</span>
            <span className="t--price s-right t--heading-5">{price}</span>
        </div>
    );
};

const CartPreview = () => {
    const [itemsCart, setItemsCart] = useState(null);
    const [productsId, setProductsId] = useState([]);
    const { productsList, subtotal } = useSelector(state => state.cart)
    const history = useHistory();
    const dispatch = useDispatch();

    const handleCloseCartP = () => {
        dispatch(uiCloseCartP());
    };

    useEffect(() => {
        if (itemsCart !== null) {
            setProductsId(...productsId, itemsCart.map((item) => (
                item.idProducto
                )))
        }
    }, [itemsCart])

    useEffect(() => {
        if (productsId.length > 0) {
            dispatch(getProductsById(productsId))
        }
    }, [dispatch, productsId])

    const { openCartP } = useSelector((state) => state.ui);

    useEffect(() => {
        if (openCartP === true) {
            const checkScroll = () => {
                const scrollY = window.pageYOffset;
                if (scrollY >= 50) {
                    dispatch(uiCloseCartP());
                }
            };
            window.addEventListener("scroll", checkScroll);
            return () => {
                window.removeEventListener("scroll", checkScroll);
            };
        }
    }, [openCartP, dispatch]);

    useEffect(() => {
        if (!itemsCart) {
            setItemsCart(
                localStorage.getItem("carrito")
                    ? JSON.parse(localStorage.getItem("carrito"))
                    : []
            );
        }
    }, [itemsCart]);

    const handleGoCart = () => {
        history.push("/carrito");
        dispatch(uiCloseCartP());
    };

    return (
        <div className="cart-preview">
            <div className="cart-preview__content animation__content s-pxy-2">
                {itemsCart !== null && itemsCart.length > 0 ? (
                    <>
                        <h3 className="s-mb-05">Carrito de compras</h3>
                        <p className="t--body-3 s-mb-2">
                            {" "}
                            ({productsList.length}) Productos{" "}
                        </p>
                        <div className="cart-preview__products s-pb-2 s-mb-2">
                            {
                                productsList.map((product, index) => (
                                    <CartProduct
                                        key={index}
                                        link={`/producto/${product._id}/${product.nombre}`}
                                        img={product.imagenes[0]}
                                        title={product.nombre}
                                        quantity={product.cantidadCarrito}
                                        price={product.subtotalProduct}
                                        closeCart= {handleCloseCartP}
                                    />
                                ))
                            }
                        </div>
                        <div className="t--heading-4 d-flex s-main-justify s-mb-2">
                            <span className="cart-preview-content__subtotal">
                                Subtotal({productsList.length})
                            </span>
                            <span className="t--price"> {subtotal} </span>
                        </div>
                        <button
                            onClick={handleGoCart}
                            className="btn btn--primary btn--full"
                        >
                            Ir al carrito
                        </button>
                    </>
                ) : (
                    <div
                        className="s-d-flex s-main-center s-cross-center"
                        style={{ height: "154px  " }}
                    >
                        <p className="t--body-2">
                            {" "}
                            No hay productos en tu carrito{" "}
                        </p>
                        <Link
                            to="/catalogo/Novedades"
                            onClick={handleCloseCartP}
                            className="t--link-1"
                            href="www.google.com"
                        >
                            Vamos a comprar
                        </Link>
                    </div>
                )}
            </div>
            <div
                className="cart-preview__overlay animation__overlay "
                onClick={handleCloseCartP}
            ></div>
        </div>
    );
};

export default CartPreview;
