import React, { useState } from "react";
import axios from "axios";
import LayoutAdmin from "../components/layout/LayoutAdmin";
import Modal from "react-modal";
import { useEffect } from "react";
import { ReactComponent as View } from "../assets/icons/View.svg";
import { ReactComponent as Arrow } from "../assets/icons/Chevron-right.svg";
import { ReactComponent as Close } from "../assets/icons/Close.svg";

const Warehouse = () => {
  const [inventario, setInventario] = useState(null);
  const [productInv, setProductInv] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  Modal.setAppElement("#root");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/admin/inventario/getAll`)
      .then((response) => {
        const { data } = response;
        setInventario(data.productosInventario);
      });
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      minWidth: "500px",
      border: "none",
      transform: "translate(-50%, -50%)",
      padding: "0",
      boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
    },
  };

  const openModal = (id) => {
    setProductInv(null);
    setIsOpen(true);
    axios
      .get(`http://localhost:5000/api/admin/inventario/getProductoSeries/${id}`)
      .then((response) => {
        const { data } = response;
        setProductInv(data);
      });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <LayoutAdmin>
        <h2 className="s-mb-4">Inventario</h2>
        <table className="rwd-table s-100">
          <thead>
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Stock disp.</th>
              <th>Precio Venta</th>
            </tr>
          </thead>
          <tbody>
            {inventario !== null &&
              inventario.map((e) => (
                <tr>
                  <td>
                    {" "}
                    <div className="s-d-flex">
                      <button
                        className="btn btn--icon btn--ghost s-mr-1"
                        onClick={() => openModal(e.id)}
                      >
                        {" "}
                        <View className="btn__icon" />
                      </button>
                      <button
                        className="btn btn--icon btn--ghost"
                        onClick={() =>
                          window.open(
                            `http://localhost:3000/producto/${e.id}/${e.nomber}`,
                            "_blank"
                          )
                        }
                      >
                        {" "}
                        <Arrow className="btn__icon" />
                      </button>
                    </div>
                  </td>
                  <td data-th="Movie Title">
                    <img
                      src={e.imagen}
                      alt={e.id}
                      className="s-mr-2"
                      style={{ width: "50px" }}
                    />
                    {e.nombre}
                  </td>
                  <td>{e.stock}</td>
                  <td data-th="Year">
                    <span className="t--price">{e.precioVenta}</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </LayoutAdmin>
      {productInv && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="ui-01 s-px-3 s-py-2 s-d-flex s-main-justify s-cross-center">
            <div className="s-d-flex s-cross-center">
              <img
                className="s-mr-2"
                src={productInv.producto.imagen}
                alt={productInv._id}
                style={{ width: "50px" }}
              />
              <h3>{productInv.producto.nombre}</h3>
            </div>
            <button
              className="btn btn--icon btn--ghost btn--icon-only"
              onClick={closeModal}
            >
              <Close className="btn__icon" />
            </button>
          </div>

          <div className="s-pxy-2">
            <table className="rwd-table s-100">
              <thead>
                <tr>
                  <th>Nro. Serie</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {productInv.seriesProducto.map((e) => (
                  <tr>
                    <th>{e.numero}</th>
                    <th>{e.estado}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Warehouse;
