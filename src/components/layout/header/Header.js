import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { useDispatch, useSelector } from "react-redux";
import Login from "../../auth/Login";
import {
  uiOpenLogin,
  uiOpenCartP,
  uiOpenSearchH,
  uiIsLogin,
} from "../../../redux-action/uiAction";

import CartPreview from "../../cart/CartPreview";
import MenuUser from "../../menu/MenuUser";
import SearchHeader from "./SearchHeader";

import { ReactComponent as SearchIcon } from "../../../assets/icons/Search.svg";
import { ReactComponent as Delivery } from "../../../assets/icons/Delivery.svg";
import { ReactComponent as User } from "../../../assets/icons/User.svg";
import { ReactComponent as ShoppingCart } from "../../../assets/icons/Shopping-cart.svg";
import { ReactComponent as Search } from "../../../assets/icons/Search.svg";
import { ReactComponent as Menu } from "../../../assets/icons/Menu.svg";
import { ReactComponent as Favorite } from "../../../assets/icons/Favorite.svg";
import { useWindowDimensions } from "../../../const/hooks/useWindowDimensions";

const Header = () => {
  const { openLogin, openCartP, openSearchH, isLogin } = useSelector(
    (state) => state.ui
  );
  const [userStorage, setUserStorage] = useState(null);
  const [itemsCart, setItemsCart] = useState(null);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  const handleOpenLogin = () => {
    dispatch(uiOpenLogin());
  };

  const handleOpenCart = () => {
    dispatch(uiOpenCartP());
  };

  const handleOpenSearchH = () => {
    dispatch(uiOpenSearchH());
  };

  useEffect(() => {
    if (!itemsCart) {
      setItemsCart(
        localStorage.getItem("carrito")
          ? JSON.parse(localStorage.getItem("carrito"))
          : []
      );
    }
  }, [itemsCart]);

  useEffect(() => {
    localStorage.getItem("user")
    ?
    setUserStorage(JSON.parse(localStorage.getItem("carrito")))
    : 
    setUserStorage(null)
  }, [])

  useEffect(() => {
    userStorage !== null
    &&
    dispatch(uiIsLogin(true))
  }, [userStorage, dispatch])

  return (
    <header className="header">
      <div className="header__container grid-container s-grid-9">
        <div className="s-cols-4 lg-cols-2 lg-py-3 s-cross-center">
          <Link to="/" className="header__logo s-pl-2 lg-pl-0">
            <h1> COSEINCO </h1>
          </Link>
        </div>
        {width > 1023 && (
          <div className="header__search lg-cols-5">
            <div className="input-group__box input-group__box--header">
              <Search className="box__icon box__icon--end box__icon--large" />
              <input
                id="searchInput"
                name="search"
                placeholder="¿Que estas buscando?"
                className="box__text box__text--large box__text--icon-end"
                type="text"
              />
            </div>
          </div>
        )}

        <div className="header__menu s-cols-4 lg-cols-2 flex-container">
          {width < 1024 && (
            <div className="header__menu-item lg-pxy-1 lg-mr-3">
              <Menu className="header__icon" />
            </div>
          )}
          <div
            className="header__menu-item lg-pxy-1 lg-mr-3 s-d-none"
            onClick={handleOpenSearchH}
          >
            <SearchIcon className="header__icon" />
          </div>
          {width >= 1024 && (
            <div className="header__menu-item lg-pxy-1 lg-mr-3">
              <Favorite className="header__icon" />
            </div>
          )}
          {width >= 1024 && (
            <div className="header__menu-item lg-pxy-1 lg-mr-3">
              <Delivery className="header__icon" />
            </div>
          )}
          <div
            className="header__menu-item lg-pxy-1 lg-mr-3"
            onClick={handleOpenLogin}
          >
            <User className="header__icon" />
          </div>
          <div className="header__menu-item lg-pxy-1" onClick={handleOpenCart}>
            <div className="header__cart">
              <ShoppingCart className="header__icon header__icon--cart" />
              <span className="cart__items">
                {" "}
                {itemsCart ? itemsCart.length : "0"}{" "}
              </span>
            </div>
          </div>
        </div>

        <CSSTransition
          in={openSearchH}
          timeout={400}
          classNames="animation-header"
          unmountOnExit
        >
          <SearchHeader />
        </CSSTransition>

        {isLogin ? (
          <CSSTransition
            in={openLogin}
            timeout={200}
            classNames="animation-header"
            unmountOnExit
          >
            <MenuUser />
          </CSSTransition>
        ) : (
          <CSSTransition
            in={openLogin}
            timeout={200}
            classNames="animation-header"
            unmountOnExit
          >
            <Login />
          </CSSTransition>
        )}

        <CSSTransition
          in={openCartP}
          timeout={200}
          classNames="animation-header"
          unmountOnExit
        >
          <CartPreview />
        </CSSTransition>
      </div>
    </header>
  );
};

export default Header;
