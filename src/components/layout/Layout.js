import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./header/Header";
import TopBanner from "./header/TopBanner";
import Footer from "./footer/Footer";
import FixedButtons from "../ui/FixedButtons";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActiveLayout, uiInactiveLayout } from "../../redux-action/uiAction";
const Layout = ({ children }) => {
    const location = useLocation();
    const { layout } = useSelector((state) => state.ui);
    const dispatch = useDispatch();
    
    useEffect(() => {
        location.pathname === "/inventario" ||
        location.pathname === "/pedidos"
            ? dispatch(uiInactiveLayout())
            : dispatch(uiActiveLayout())
    }, [location, dispatch]);
    return (
        <>
            {layout && (
                <>
                    <Header />
                    <TopBanner />
                </>
            )}
            <main>{children}</main>
            {layout && (
                <>
                    <FixedButtons />
                    <Footer />
                </>
            )}
            
        </>
    );
};

Layout.protoTypes = {
    children: PropTypes.node,
};

Layout.defaultProps = {
    children: null,
};

export default Layout;
