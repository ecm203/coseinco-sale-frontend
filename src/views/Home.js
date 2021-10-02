import React from "react";
import { Link } from 'react-router-dom'
import BannerSlider from "../components/home/BannerSlider";
import CardInfo from "../components/card/CardInfo";
import ProductSlider from "../components/home/ProductSlider";
import CardCategory from "../components/card/CardCategory";

import Delivery from "../assets/icons/Delivery.svg";
import Chat from "../assets/icons/Chat.svg";
import { ReactComponent as ChevronDown } from "../assets/icons/Chevron-down.svg";
import { useWindowDimensions } from "../const/hooks/useWindowDimensions";
import CardInfoSlider from "../components/home/CardInfoSlider";

const Home = () => {
    const { width } = useWindowDimensions();

    return (
        <>
            <BannerSlider />
            <section className="home__section grid-container lg-grid-3 l-block">
                {width >= 1024 ? (
                    <>
                        <CardInfo
                            className="s-cols-1"
                            title="Envíos a domicilio"
                            text="Recibe tus productos en la puerta de tu casa con total seguridad y comodidad"
                            icon={Delivery}
                            link="Consultar Zonas de Cobertura"
                        />
                        <CardInfo
                            className="s-cols-1"
                            title="Atención las 24/7"
                            text="Puedes realizar tus compras en el momento que desees las 24 horas del día"
                            icon={Chat}
                            link="¿Como hacer mi primera compra?"
                        />
                        <CardInfo
                            className="s-cols-1"
                            title="Seguimiento de pedidos"
                            text="Conoce el estado en el que se encuentra tu pedido"
                            icon={Delivery}
                            link="Seguimiento de pedidos"
                        />
                    </>
                ) : (
                    <>
                        <CardInfoSlider/>
                    </>
                )}
            </section>
            <section className="home__section s-py-4 l-section ui-bg">
                <div className="grid-container s-d-block">
                    <h2 className="s-mb-05">Productos destacados</h2>
                    <p className="s-mb-3 t--secundary">
                        Productos recomendados por nuestros clientes
                    </p>
                    <ProductSlider />
                    <div className="s-d-flex">
                        <Link to="/catalogo/Novedades" className="btn btn--secundary btn--large s-block-center">
                            Ver más
                            <ChevronDown className="btn__icon btn__icon--end" />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="home__section grid-container l-section">
                <h2 className="s-mb-05 d-flex s-cross-center">
                    Nuevos productos
                </h2>
                <p className="s-mb-3 t--secundary">
                    Descubre lo que tenemos para ti
                </p>
                <div className="home__grid grid-container s-grid-4 rows-gap">
                    <CardCategory
                        className="s-cols-2 lg-cols-1"
                        img={"https://picsum.photos/308/310"}
                        title="Polos"
                    />
                    <CardCategory
                        className="s-cols-2 lg-cols-1"
                        img={"https://picsum.photos/308/310"}
                        title="Camisas"
                    />
                    <CardCategory
                        className="s-cols-4 lg-cols-2"
                        img={"https://picsum.photos/632/310"}
                        title="Poleras"
                    />
                    <CardCategory
                        className="s-cols-4 lg-cols-2"
                        img={"https://picsum.photos/632/310"}
                        title="Shorts"
                    />
                    <CardCategory
                        className="s-cols-4 lg-cols-2"
                        img={"https://picsum.photos/632/310"}
                        title="Joggers"
                    />
                    <CardCategory
                        className="s-cols-4 lg-cols-2"
                        img={"https://picsum.photos/632/310"}
                        title="Packs"
                    />
                    <CardCategory
                        className="s-cols-2 lg-cols-1"
                        img={"https://picsum.photos/308/310"}
                        title="Zapatillas"
                    />
                    <CardCategory
                        className="s-cols-2 lg-cols-1"
                        img={"https://picsum.photos/308/310"}
                        title="Zapatillas"
                    />
                </div>
            </section>

            <section className="home__section grid-container l-section">
                <h2 className="s-mb-05 d-flex s-cross-center">
                    Ofertas
                </h2>
                <p className="s-mb-3 t--secundary">
                    Los mejores precios del mercado
                </p>
                <div className="grid-container s-grid-4 rows-gap">
                    <CardCategory
                        className="s-cols-4"
                        img={"https://picsum.photos/1280/310"}
                        title="Packs"
                    />
                </div>
            </section>
        </>
    );
};

export default Home;
