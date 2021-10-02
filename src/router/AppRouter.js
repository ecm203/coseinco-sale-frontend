import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation,
} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Cart from "../views/Cart";
import Catalog from "../views/Catalog";
import Home from "../views/Home";
import Order from "../views/Order";
import Orders from "../views/Orders";
import Payment from "../views/Payment";
import Product from "../views/Product";
import Search from "../views/Search";
import Shipment from "../views/Shipment";
import Warehouse from "../views/Warehouse";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const AppRouter = () => {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/catalogo/:CategoryName"
                        component={Catalog}
                    />
                    <Route
                        exact
                        path="/busqueda/:SearchParam"
                        component={Search}
                    />
                    <Route exact path="/carrito" component={Cart} />
                    <Route exact path="/envio" component={Shipment} />
                    <Route exact path="/pago" component={Payment} />
                    <Route exact path="/pedido" component={Order} />
                    <Route
                        exact
                        path="/producto/:SKU/:ProductName"
                        component={Product}
                    />
                    <Route exact path="/inventario" component={Warehouse} />
                    <Route exact path="/pedidos" component={Orders} />
                    <Redirect to="/" />
                </Switch>
            </Layout>
        </Router>
    );
};

export default AppRouter;
