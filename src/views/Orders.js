import React from "react";
import LayoutAdmin from "../components/layout/LayoutAdmin";
import axios from "axios";
import { useState, useEffect } from "react";
import { ReactComponent as View } from "../assets/icons/View.svg";
import { ReactComponent as Delivery } from "../assets/icons/Delivery.svg";
import { ReactComponent as Download } from "../assets/icons/Download.svg";
import { ReactComponent as Close } from "../assets/icons/Close.svg";
import Modal from "react-modal";

const ProductCart = ({ imgUrl, name, sku, cantidad, precioUnit, subtotal }) => {
  return (
    <div className="ui-bg s-mb-2 s-d-flex">
      <img src={imgUrl} alt="" style={{ width: "100px" }} />
      <div className="s-pl-2 s-100">
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

const Orders = () => {
  Modal.setAppElement("#root");
  const [order, setOrder] = useState(null);
  const [orderDetail, setOrderDetail] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/pedidos/admin/getAll`)
      .then((response) => {
        const { data } = response;
        setOrder(data.pedidoslist);
      });
  }, []);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      minWidth: "400px",
      border: "none",
      transform: "translate(-50%, -50%)",
      padding: "0",
      boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
    },
  };

  const openModal = (id) => {
    setOrderDetail(null);
    setIsOpen(true);
    axios
      .get(`http://localhost:5000/api/pedidos/admin/getDetallePedido/${id}`)
      .then((response) => {
        const { data } = response;
        setOrderDetail(data);
      });
  };

  const handleChangeState = (id, codigo) => {
    const data = {
      "id": id
    }
    axios
      .post(`http://localhost:5000/api/admin/guia`, data)
      .then(() => {
        handleDownloadGuia(codigo);
        closeModal();
        axios
          .get(`http://localhost:5000/api/pedidos/admin/getAll`)
          .then((response) => {
            const { data } = response;
            setOrder(data.pedidoslist);
          });
      });
  };

  const handleDownloadGuia = (codigo) => {
    const url = `http://127.0.0.1:8887/guia_${codigo}.pdf`
    const link = document.createElement('a');
    link.href = url;
    // link.setAttribute('download', `guia__${codigo}.pdf`);
    link.setAttribute('target', `_blank`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <LayoutAdmin>
        <h2 className="s-mb-4">Pedidos</h2>
        <table className="rwd-table s-100">
          <thead>
            <tr>
              <th></th>
              <th>Cod.</th>
              <th>Fecha Registro</th>
              <th>Imp Total</th>
              <th>Tipo de pago</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {order !== null &&
              order.map((e) => (
                <tr>
                  <th style={{ width: "200px" }}>
                    <div className="s-d-flex">
                      <button
                        onClick={() => openModal(e.id)}
                        className="btn btn--icon btn--ghost"
                      >
                        <View className="btn__icon" />
                      </button>
                      {
                      (e.estado === "procesado" ) && (
                        <button className="btn btn--icon btn--ghost"
                        >
                          <Delivery className="btn__icon" />
                        </button>
                      )}

                      {(e.estado === "procesado" || e.estado === "enviado") && (
                        <button className="btn btn--icon btn--ghost"
                          onClick={() => handleDownloadGuia(e.codigo)}
                        >
                          <Download className="btn__icon" />
                        </button>
                      )}
                    </div>
                  </th>
                  <th>{e.codigo}</th>
                  <th>{e.fechaRegistro}</th>
                  <th>
                    <span className="t--price">{e.Total}</span>
                  </th>
                  <th>{e.TipoPago}</th>
                  <th>{e.estado}</th>
                </tr>
              ))}
          </tbody>
        </table>
      </LayoutAdmin>
      {orderDetail && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="ui-01 s-px-3 s-py-2 s-d-flex s-main-justify s-cross-center">
            <h3 className="t--bold">Nro. pedido: {orderDetail.nroPedido}</h3>
            <button
              className="btn btn--icon btn--ghost btn--icon-only"
              onClick={closeModal}
            >
              <Close className="btn__icon" />
            </button>
          </div>
          <div className="s-pxy-3">
            <ul className="s-mb-3">
              <li className="t--body-2 s-mb-1">
                <b>- Nombre y apellidos: </b>
                {orderDetail.datos.name + " " + orderDetail.datos.lastName}
              </li>
              <li className="t--body-2 s-mb-1">
                <b>- Nro. Documento: </b> {orderDetail.datos.numberDoc}
              </li>
              <li className="t--body-2 s-mb-1">
                <b>- Nro. Celular: </b> {orderDetail.datos.phoneNumber}
              </li>
              <li className="t--body-2 s-mb-1">
                <b>- Email: </b> {orderDetail.datos.email}
              </li>
              <li className="t--body-2 s-mb-1">
                <b>- Direccion: </b> {orderDetail.datos.address}
              </li>
            </ul>
            <div className="s-mb-3">
              {orderDetail.producto.productosList.map((e) => (
                <ProductCart
                  imgUrl={e.imagen}
                  name={e.nombre}
                  sku={e.SKU}
                  cantidad={e.cantidad}
                  precioUnit={e.precioUnitario}
                  subtotal={e.precioSubTotal}
                />
              ))}
            </div>
            <h4 className="s-right t--primary s-mb-3">
              {" "}
              Importe total:{" "}
              <span className="t--price s-pl-3">
                {orderDetail.producto.precioTotal}
              </span>{" "}
            </h4>
            {orderDetail.estado === "procesado" || orderDetail.estado === "enviado" ? (
              <button className="btn btn--secundary btn--full btn--large">
                <Download className="btn__icon btn__icon--start" />
                Descargar guia
              </button>
            ) : (
              <button
                className="btn btn--primary btn--full btn--large"
                onClick={() => handleChangeState(orderDetail.idPedido, orderDetail.nroPedido)}
              >
                Generar guia
              </button>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Orders;
