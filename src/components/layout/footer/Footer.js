import React from "react";
import { useWindowDimensions } from "../../../const/hooks/useWindowDimensions";

import { ReactComponent as Chat } from "../../../assets/icons/Chat.svg";
import { ReactComponent as Headset } from "../../../assets/icons/Headset.svg";
import { ReactComponent as Mail } from "../../../assets/icons/Mail.svg";
import { ReactComponent as Store } from "../../../assets/icons/Store.svg";
import { ReactComponent as Visa } from "../../../assets/icons/Visa.svg";
import { ReactComponent as American } from "../../../assets/icons/American-Express.svg";
import { ReactComponent as Dinners } from "../../../assets/icons/Diners-Club.svg";
import { ReactComponent as Master } from "../../../assets/icons/Master-Card.svg";
import { ReactComponent as Facebook } from "../../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/icons/Instagram.svg";

import Collapsible from "../../ui/Collapsible";


const Footer = () => {

    const { width } = useWindowDimensions();
    return (
        <footer className="footer">
            <div className="footer__top grid-container s-grid-3">
                {width >= 991 ? (
                    <>
                        <div className="footer__col md-cols-1">
                            <h3 className="s-mb-4">Contáctanos</h3>
                            <div className="footer__item s-mb-2 s-d-flex">
                                <Chat className="footer__icon s-mr-1" />
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__link"
                                >
                                    <span className="t--heading-5 s-d-block">
                                        Conversa con nosotros
                                    </span>
                                    <span className="t--body-2 s-d-block">
                                        Resolveremos tus dudas
                                    </span>
                                </a>
                            </div>
                            <div className="footer__item s-mb-2 s-d-flex">
                                <Headset className="footer__icon s-mr-1" />
                                <a
                                    href={`tel: 983734000`}
                                    className="footer__link"
                                >
                                    <span className="t--heading-5 s-d-block">
                                        ¿Tienes alguna duda?
                                    </span>
                                    <span className="t--body-2 s-d-block">
                                        Llamanos al{" "}
                                        {983734000}
                                    </span>
                                </a>
                            </div>
                            <div className="footer__item s-mb-2 s-d-flex">
                                <Mail className="footer__icon s-mr-1" />
                                <a
                                    href={`mailto: coseinco@gmail.com`}
                                    className="footer__link"
                                >
                                    <span className="t--heading-5 s-d-block">
                                        Escríbenos
                                    </span>
                                    <span className="footer__text--secundary t--body-2 s-d-block">
                                        coseinco@gmail.com
                                    </span>
                                </a>
                            </div>
                            <div className="footer__item s-d-flex">
                                <Store className="footer__icon s-mr-1" />
                                <div className="footer__contact-method">
                                    <span className="t--heading-5 s-d-block">
                                        Visitanos
                                    </span>
                                    <span className="footer__text--secundary footer__text--wrap t--body-2 s-d-block">
                                        calle las ciruelas 153, 2do piso
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="footer__col md-cols-1">
                            <h3 className="s-mb-4">Servicio al cliente</h3>
                            <nav className="footer__nav t--body-2">
                                <ul className="footer__ul t--body-2">
                                    <li className="footer__li s-mb-2">
                                        <a
                                            href="www.google.com"
                                            className="footer__link"
                                        >
                                            ¿Quiénes somos?
                                        </a>
                                    </li>
                                    <li className="footer__li s-mb-2">
                                        <a
                                            href="www.google.com"
                                            className="footer__link"
                                        >
                                            Preguntas frecuentes
                                        </a>
                                    </li>
                                    <li className="footer__li s-mb-2">
                                        <a
                                            href="www.google.com"
                                            className="footer__link"
                                        >
                                            Seguimiento de pedido
                                        </a>
                                    </li>
                                    <li className="footer__li s-mb-2">
                                        <a
                                            href="www.google.com"
                                            className="footer__link"
                                        >
                                            Términos y condiciones
                                        </a>
                                    </li>
                                    <li className="footer__li s-mb-2">
                                        <a
                                            href="www.google.com"
                                            className="footer__link"
                                        >
                                            Cambios y devoluciones
                                        </a>
                                    </li>
                                    <li className="footer__li s-mb-2">
                                        <a
                                            href="www.google.com"
                                            className="footer__link"
                                        >
                                            Politicas de privacidad
                                        </a>
                                    </li>
                                    <li className="footer__li">
                                        <a
                                            href="www.google.com"
                                            className="footer__link"
                                        >
                                            Comprobante electrónico
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </>
                ) : (
                    <>
                        <Collapsible
                            classNameWrapper="footer__col footer__divider s-cols-3 s-py-2"
                            titleTagName="h3"
                            classNameIcon="footer__icon"
                            tittle="Contáctanos"
                            classNameContent="s-pxy-2"
                        >
                            <div className="footer__item s-mb-2 s-d-flex">
                                <Chat className="footer__icon s-mr-1" />
                                <a
                                    href="google"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__link s-d-block s-w-100"
                                >
                                    <span className="t--heading-5 s-d-block">
                                        Conversa con nosotros
                                    </span>
                                    <span className="t--body-2 s-d-block">
                                        Resolveremos tus dudas
                                    </span>
                                </a>
                            </div>
                            <div className="footer__item s-mb-2 s-d-flex">
                                <Headset className="footer__icon s-mr-1" />
                                <a
                                    href={`tel: 983734000`}
                                    className="footer__link s-d-block s-w-100"
                                >
                                    <span className="t--heading-5 s-d-block">
                                        ¿Tienes alguna duda?
                                    </span>
                                    <span className="t--body-2 s-d-block">
                                        Llamanos al
                                        983734000
                                    </span>
                                </a>
                            </div>
                            <div className="footer__item s-mb-2 s-d-flex">
                                <Mail className="footer__icon s-mr-1" />
                                <a
                                    href={`mailto: coseinco@gmail.com`}
                                    className="footer__link s-d-block s-w-100"
                                >
                                    <span className="t--heading-5 s-d-block">
                                        Escríbenos
                                    </span>
                                    <span className="footer__text--secundary t--body-2 s-d-block">
                                        coseinco@gmail.com
                                    </span>
                                </a>
                            </div>
                            <div className="footer__item s-d-flex">
                                <Store className="footer__icon s-mr-1" />
                                <div className="footer__contact-method">
                                    <span className="t--heading-5 s-d-block">
                                        Visitanos
                                    </span>
                                    <span className="footer__text--secundary footer__text--wrap t--body-2 s-d-block">
                                        De lunes a domingo de 11am a 10pm en
                                        calle los cedros 153 2do. piso
                                    </span>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible
                            classNameWrapper="footer__col footer__divider s-cols-3 s-py-2"
                            classNameIcon="footer__icon"
                            titleTagName="h3"
                            tittle="Servicio al cliente"
                            classNameContent="s-px-1 s-pt-1"
                        >
                            <nav className="footer__nav t--body-2">
                                <ul className="footer__ul">
                                    <li className="footer__li">
                                        <a
                                            href="www.google.com"
                                            className="footer__link s-d-block s-py-1"
                                        >
                                            ¿Quiénes somos?
                                        </a>
                                    </li>
                                    <li className="footer__li">
                                        <a
                                            href="www.google.com"
                                            className="footer__link s-d-block s-py-1"
                                        >
                                            Preguntas frecuentes
                                        </a>
                                    </li>
                                    <li className="footer__li">
                                        <a
                                            href="www.google.com"
                                            className="footer__link s-d-block s-py-1"
                                        >
                                            Seguimiento de pedido
                                        </a>
                                    </li>
                                    <li className="footer__li">
                                        <a
                                            href="www.google.com"
                                            className="footer__link s-d-block s-py-1"
                                        >
                                            Términos y condiciones
                                        </a>
                                    </li>
                                    <li className="footer__li">
                                        <a
                                            href="www.google.com"
                                            className="footer__link s-d-block s-py-1"
                                        >
                                            Cambios y devoluciones
                                        </a>
                                    </li>
                                    <li className="footer__li">
                                        <a
                                            href="www.google.com"
                                            className="footer__link s-d-block s-py-1"
                                        >
                                            Politicas de privacidad
                                        </a>
                                    </li>
                                    <li className="footer__li">
                                        <a
                                            href="www.google.com"
                                            className="footer__link s-d-block s-py-1"
                                        >
                                            Comprobante electrónico
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </Collapsible>
                    </>
                )}
                <div className="footer__col s-cols-3 md-cols-1">
                    <div className="footer__payments  s-py-2 md-py-0 md-mb-4">
                        <h3 className="s-mb-2 md-mb-4">Métodos de pago</h3>
                        <Visa className="footer__icon s-mr-3" />
                        <American className="footer__icon s-mr-3" />
                        <Dinners className="footer__icon s-mr-3" />
                        <Master className="footer__icon" />
                    </div>
                    <div className="footer__social-media  s-py-2 md-py-0">
                        <h3 className="s-mb-2 md-mb-4">Siguenos en:</h3>
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="s-mr-3"
                        >
                            <Facebook className="footer__icon" />
                        </a>
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram className="footer__icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__copyright s-cols-3 s-center  t--body-2 t--tertiary s-py-2">
                Coseinco Copyright ©2021 All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
