import React from "react";
import { Link } from "react-router-dom";
const LayoutAdmin = ({ children }) => {
  return (
    <div
      className="flex-container"
      style={{ minHeight: "100vh", minWidth: "100vw", margin: "0" }}
    >
      <nav className="flex-item s-20 s-px-0 ui-dashboard">
        <div className="s-pxy-3">
          <div className="s-main-center s-mb-2">
            <img
              src="https://seekvectors.com/files/download/Admin-01.png"
              alt="img"
              style={{ width: "80px" }}
            />
          </div>
          <h2 className="s-center"> Coseinco </h2>
        </div>
        <ul className="admin-menu">
          <li className="menu-heading">
            <h3>Admin</h3>
          </li>
          <li>
            <Link to="/">
              <span>Ecommerce</span>
            </Link>
          </li>
          <li>
            <Link to="/productos">
              <span>Productos</span>
            </Link>
          </li>
          <li>
            <Link to="/inventario">
              <span>Inventario</span>
            </Link>
          </li>
          <li>
            <Link to="/pedidos">
              <span>Pedidos</span>
            </Link>
          </li>
          <li>
            <Link to="/envios">
              <span>Envios</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Herramientas</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex-item s-80 s-px-0">
        <header
          className="ui-bg s-px-4 s-d-flex s-main-end s-cross-center"
          style={{ height: "60px" }}
        >
          <h4 className="s-mr-2">Hola Edwin</h4>
          <div className="s-main-cente">
            <img
              src="https://image.flaticon.com/icons/png/512/53/53133.png"
              alt="img"
              style={{ width: "30px" }}
            />
          </div>
        </header>
        <main className="s-py-3 s-px-4">{children}</main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
