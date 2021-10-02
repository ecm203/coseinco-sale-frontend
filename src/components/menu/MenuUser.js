import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Delivery } from "../../assets/icons/Delivery.svg";
import { ReactComponent as Location } from "../../assets/icons/Location.svg";
import { ReactComponent as User } from "../../assets/icons/User.svg";
import { uiCloseLogin, uiIsLogin } from "../../redux-action/uiAction";

const MenuUser = () => {
  const [userStorage, setUserStorage] = useState(null);

  const dispatch = useDispatch();
  const handleCloseLogin = () => {
    dispatch(uiCloseLogin());
  };

  useEffect(() => {
    userStorage === null
    ?
    setUserStorage(JSON.parse(localStorage.getItem("user")))
    : 
    setUserStorage(null)
  }, [])
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(uiCloseLogin());
    dispatch(uiIsLogin(false));
  }
  return (
    <div className="login">
      <div className="login__content animation__content s-pxy-2" style={{width: "15.0625rem"}}>
        <h3 className="s-mb-2"> Hola {userStorage?.givenName} </h3>
        <div className="menu-user__options s-mb-2">
          <a href="google.com" className="list-item s-mb-1 ">
            <Delivery className="list-item__icon s-mr-1" />
            <span className="t--body-2"> Mis órdenes </span>
          </a>
          <a href="google.com" className="list-item s-mb-1 ">
            <Location className="list-item__icon s-mr-1" />
            <span className="t--body-2"> Mis direcciones </span>
          </a>
          <a href="google.com" className="list-item s-mb-1 ">
            <User className="list-item__icon s-mr-1" />
            <span className="t--body-2"> Mis perfil </span>
          </a>
        </div>
        <button className="btn btn--primary btn--full" onClick={handleLogout}> Cerrar sesión </button>
      </div>
      <div
        className="login__overlay animation__overlay"
        onClick={handleCloseLogin}
      ></div>
    </div>
  );
};

export default MenuUser;
