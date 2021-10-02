import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Checkmark } from "../assets/icons/Checkmark.svg";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { saveOrder } from "../redux-action/cartAction";

const ProductCart = ({ imgUrl, name, sku, cantidad, precioUnit, subtotal }) => {
  return (
    <div className="ui-bg s-mb-2 s-d-flex">
      <div className="s-20">
        <img src={imgUrl} alt="" />
      </div>
      <div className="s-80 s-pl-2">
        <div className="t--body-2 s-main-justify s-cross-center s-mb-1">
          <span> {name} </span>
        </div>
        <div className="t--secundary t--body-3 s-column s-left">
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

const Order = () => {
  const { productsList, shipment, order } = useSelector((state) => state.cart);
  const [orderData, setOrderData] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    productsList !== undefined &&
      shipment !== undefined &&
      setOrderData({
        productos: productsList.map((product) => ({
          _id: product._id,
          cantidad: product.cantidadCarrito,
        })),
        datos: shipment,
      });
  }, []);

  useEffect(() => {
    orderData !== null && dispatch(saveOrder(orderData));
  }, [orderData, dispatch]);

  return (
    <div className="s-60 ui-bg s-pxy-3 s-to-center l-section">
      <Checkmark className="order__icon" />
      <div className="s-center">
        {order !== undefined && order.pedido !== undefined && (
          <>
            <h2 className="s-mb-3">Su compra fue registrada exitosamente</h2>
            <h3 className="s-mb-4">
              Número de pedido: <b>{order?.pedido.codigoPedido}</b>
            </h3>
            <div className="s-50 s-to-center t--secundary s-left">
              <h4 className="s-mb-2">Resumen del pedido</h4>
              <ul className="s-mb-2">
                <li className="t--body-2 s-mb-1">
                  - Nombre y apellidos: {order?.pedido.datos.name + ' '}
                  {order?.pedido.datos.lastName}
                </li>
                <li className="t--body-2 s-mb-1">
                  - Nro. Documento: {order?.pedido.datos.numberDoc}
                </li>
                <li className="t--body-2 s-mb-1">
                  - Nro. Celular: {order?.pedido.datos.phoneNumber}
                </li>
                <li className="t--body-2 s-mb-1">
                  - Email: {order?.pedido.datos.email}
                </li>
                <li className="t--body-2 s-mb-1">
                  - Direccion: {order?.pedido.datos.address}
                </li>
              </ul>
              <h5 className="s-mb-3">Productos</h5>
              <div className="s-mb-3">
                {order?.productosped.map((e) => (
                  <ProductCart
                    imgUrl={e.imagen}
                    name={e.nombre}
                    sku={"1516516"}
                    cantidad={e.cantidad}
                    precioUnit={e.preciounitario}
                    subtotal={e.subtotal}
                  />
                ))}
              </div>
              <h4 className="s-right t--primary s-mb-3">
                Importe total:
                <span className="t--price s-pl-3">
                  {order?.pedido.precioVenta}
                </span>
              </h4>
              <button
                className="btn btn--primary btn--large btn--full"
                onClick={() => history.push("/")}
              >
                Volver al inicio
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Order;
