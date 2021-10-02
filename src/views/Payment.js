import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { ReactComponent as Lock } from "../assets/icons/Locked.svg";
import { ReactComponent as Delivery } from "../assets/icons/Delivery.svg";
import { ReactComponent as Favorite } from "../assets/icons/Favorite.svg";
import { useSelector } from "react-redux";

const ProductCart = ({
    imgUrl,
    name,
    sku,
    cantidad,
    precioUnit,
    subtotal,
}) => {
    return (
        <div className="ui-bg s-mb-2 s-d-flex">
            <div className="s-20">
                <img src={imgUrl} alt="" />
            </div>
            <div className="s-80 s-pl-2">
                <div className="t--body-2 s-main-justify s-cross-center s-mb-1">
                    <span> {name} </span>
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
                    <h6 className="t--secundary t--price"> {subtotal}</h6>
                </div>
            </div>
        </div>
    );
};

const Paypal = ({amount}) => {
    const history = useHistory();
    console.log(amount);
    const paypal = useRef();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [{
                        description: 'Cool looking table',
                        amount: {
                            value: parseFloat(amount),
                            currency: 'USD'
                        }
                    }],

                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                history.push("/pedido");
                console.log("Compra exitosa",order)
            },
            onError: (err) => console.log(err)
        }).render(paypal.current)
    }, [])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
};
const Payment = () => {
    const { productsList, subtotal } = useSelector((state) => state.cart);

    return (
        <div className="l-section">
            <div id="steps">
                <div className="step done" data-desc="Carrito de compras">
                    1
                </div>
                <div className="step done" data-desc="Método de envio">
                    2
                </div>
                <div className="step active" data-desc="Realizar pago">
                    3
                </div>
                <div className="step" data-desc="Pedido confirmado">
                    4
                </div>
            </div>
            <div className="grid-container">
                <div className="ui-bg s-pxy-3 s-mb-4">
                    <h2> Realizar pago </h2>
                </div>
                <div className="flex-container">
                    <div className="flex-item s-70 s-px-0 s-pr-2">
                        <div className="ui-bg s-mb-2 s-pxy-3">
                            <Paypal amount={subtotal}/>
                        </div>
                    </div>
                    <div className="flex-item s-30 s-px-0 s-pl-2">
                        <div className="ui-bg s-pxy-3 s-mb-2">
                            <h3 className="s-mb-3">Resumen de compra</h3>
                            <div className="s-mb-3">
                                {productsList.map((product, index) => (
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
                                ))}
                            </div>
                            <div className="s-main-justify t--secundary s-mb-3">
                                <h5> Subtotal (Inc. IGV) </h5>
                                <h5 className="t--price"> { subtotal }</h5>
                            </div>
                            <div className="s-main-justify t--secundary">
                                <h5> Costo de envío </h5>
                                <h5> Gratis </h5>
                            </div>
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
    );
};

export default Payment;
