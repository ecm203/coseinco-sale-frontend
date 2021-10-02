import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

import {
    getProductById
} from "../../redux-action/productDetailAction";

import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/Whatsapp.svg";

SwiperCore.use([Navigation, Thumbs]);

const DetailProductSlider = ({ productsImg }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <div className="lg-cols-1 lg-d-block s-d-none">
                <Swiper
                    allowTouchMove={false}
                    className="detail-product__slider-thumbs"
                    onSwiper={setThumbsSwiper}
                    watchSlidesVisibility
                    watchSlidesProgress
                >
                    {productsImg &&
                        productsImg.map((product, index) => (
                            <SwiperSlide className="s-mb-1" key={index}>
                                <img className="s-100" src={product} alt="" />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <div className="lg-cols-5 s-cols-12">
                <Swiper
                    className="detail-product__slider-main"
                    navigation
                    thumbs={{ swiper: thumbsSwiper }}
                    loop
                >
                    {productsImg &&
                        productsImg.map((product, index) => (
                            <SwiperSlide className="s-mb-1" key={index}>
                                <img className="s-100" src={product} alt="" />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </>
    );
};

const DetailProduct = () => {
    const { SKU } = useParams();
    const dispatch = useDispatch();
    const { product, colorSelected } = useSelector(
        (state) => state.product
    );
    const [optionsSelected, setOptionsSelected] = useState({
        detalleproductocodigo: undefined,
        tallacodigo: undefined,
        detallecarritocantidad: 1,
    });
    const [activeColor, setActiveColor] = useState(null);

    useEffect(() => {
        activeColor === null &&
            colorSelected[0] !== undefined &&
            setActiveColor(colorSelected[0].colornombre);
    }, [activeColor, colorSelected]);
    useEffect(() => {
        dispatch(getProductById(SKU));
    }, [dispatch, SKU]);

    const handleSelectQuantity = ({ target }) => {
        setOptionsSelected({
            ...optionsSelected,
            detallecarritocantidad: target.value,
        });
    };

    const handleAddToCart = () => {
        const arrayCarrito = localStorage.getItem("carrito")
            ? JSON.parse(localStorage.getItem("carrito"))
            : [];
        let objCarrito = {
            idProducto: product._id,
            cantidad: optionsSelected.detallecarritocantidad,
        };

        arrayCarrito.push(objCarrito);
        localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
        window.location.reload();
    };

    return (
        <div className="grid-container ui-bg s-pxy-3 b-radious s-grid-12 l-section">
            <DetailProductSlider productsImg={product.imagenes} />
            <div className="lg-cols-6 s-cols-12 s-pxy-3">
                <div className="s-d-flex s-mb-1 s-main-justify s-to-column">
                    <span className="t--link-2">Asus</span>
                    <div className="input-group__helper">
                            SKU: {product.codigoInterno}
                        </div>
                </div>
                <h2 className="s-mb-3"> {product.nombre} </h2>
                <span className="s-d-block s-mb-3 t--price t--alert t--heading-1">
                    {product.precio}
                </span>
                <hr className="detail-product__separator s-mb-3" />
                <div className="s-d-flex s-mb-3 s-main-justify">
                    <div className="s-25">
                        <span className="s-d-block s-mb-1 t--medium">
                            Cantidad
                        </span>
                        <div className="input-group s-mr-2">
                            <div className="input-group__box">
                                <input
                                    min={1}
                                    max={product.stock}
                                    value={
                                        optionsSelected.detallecarritocantidad
                                    }
                                    name="quantity"
                                    onChange={handleSelectQuantity}
                                    className="box__text box__text--large"
                                    type="number"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-group__helper">
                        {" "}
                        {product.stock}und. disponibles{" "}
                    </div>
                </div>
                <hr className="detail-product__separator s-mb-3" />
                <div className="s-d-flex s-mb-3">
                    <button
                        style={{ alignSelf: "flex-end" }}
                        className="btn btn--full btn--primary btn--large s-75"
                        disabled={product.stock === 0}
                        onClick={handleAddToCart}
                    >
                        Añadir al carrito
                    </button>
                </div>
                <hr className="detail-product__separator s-mb-3" />
                <div className="s-mb-3">
                    <span className="s-d-block s-mb-2 t--medium">
                        Descripcción
                    </span>
                    <p className="t--secundary">{product.caracteristica}</p>
                </div>
                <hr className="detail-product__separator s-mb-3" />
                <div>
                    <span className="s-d-block s-mb-2 t--medium">
                        Compartir con:
                    </span>
                    <div className="s-d-flex">
                        <a
                            href={`//www.facebook.com/sharer.php?u=${window.location.href}`}
                            target="_blank"
                            without="true"
                            rel="noreferrer"
                            className="detail-product__link-fb btn s-mr-2"
                        >
                            <Facebook className="btn__icon btn__icon--start" />
                            Facebook
                        </a>
                        <a
                            href={`whatsapp://send?text=${window.location.href}`}
                            data-action="share/whatsapp/share"
                            className="detail-product__link-wh btn"
                        >
                            <Whatsapp className="btn__icon btn__icon--start" />
                            Whatsapp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
