import React from "react";
import { ReactComponent as Delivery } from "../../../assets/icons/Delivery.svg";
import { ReactComponent as Tag } from "../../../assets/icons/Tag.svg";
import { ReactComponent as Timer } from "../../../assets/icons/Timer.svg";
const TopBanner = () => {
    return (
        <div className="top-banner s-mb-4">
            <div className="grid-container">
                <div className="flex-container s-d-none lg-d-flex s-py-2 s-main-justify">
                    <div className="top-banner__item d-flex s-cross-center">
                        <Tag className="top-banner__icon s-mr-05" />
                        <span className="t--body-2">
                            80% Descuento en primera compra
                        </span>
                    </div>
                    <div className="top-banner__item d-flex s-cross-center">
                        <Delivery className="top-banner__icon s-mr-05" />
                        <span className="t--body-2">
                            Envio gratis por compras mayores a S/.500
                        </span>
                    </div>
                    <div className="top-banner__item d-flex s-cross-center">
                        <Timer className="top-banner__icon s-mr-05" />
                        <span className="t--body-2">
                            Envío express en productos seleccionados
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
