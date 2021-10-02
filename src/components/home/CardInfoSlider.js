import React from "react";
import CardInfo from "../card/CardInfo";
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

import Delivery from "../../assets/icons/Delivery.svg";

SwiperCore.use([Pagination, A11y, Autoplay]);

const CardInfoSlider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={16}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="info-slider"
            pagination={{
                el: ".info-slider__pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + ' s-mx-05 "></span>';
                },
            }}
            breakpoints={{
                992: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
            }}
        >
            <SwiperSlide className="info-slider__slide">
                <CardInfo
                    title="Envíos a domicilio 1"
                    text="Recibe tus productos en la puerta de tu casa con total seguridad y comodidad"
                    icon={Delivery}
                    link="Consultar Zonas de Cobertura"
                />
            </SwiperSlide>
            <SwiperSlide className="info-slider__slide">
                <CardInfo
                    title="Envíos a domicilio 2"
                    text="Recibe tus productos en la puerta de tu casa con total seguridad y comodidad"
                    icon={Delivery}
                    link="Consultar Zonas de Cobertura"
                />
            </SwiperSlide>
            <SwiperSlide className="info-slider__slide">
                <CardInfo
                    title="Envíos a domicilio 3"
                    text="Recibe tus productos en la puerta de tu casa con total seguridad y comodidad"
                    icon={Delivery}
                    link="Consultar Zonas de Cobertura"
                />
            </SwiperSlide>
            <div className="info-slider__pagination s-pt-1"></div>
        </Swiper>
    );
};

export default CardInfoSlider;
