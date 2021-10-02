import React from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination, A11y, Autoplay]);

const banners = [
    "https://www.aorus.com/image/banner/AORUS%20Gallery-1617163008.jpg",
    "https://dlcdnimgs.asus.com/websites/global/ProductCustomizedTab/368/img/cover/Strix_gaming_video.jpg",
    "https://static.gigabyte.com/Global/Banner/A1/2899.jpg?rnd=4a4e365a5c56ff3a0456ab7faa179b12",
]

const BannerSlider = () => {

    return (
        <Swiper
            className="banner-slider s-mt-4 l-block"
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop
            pagination={{
                el: ".banner-slider__pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + ' s-mx-05 "></span>';
                },
            }}
        >
            {banners.map((banner, index) => (
                <SwiperSlide
                    key={index}
                    className="banner-slider__slide"
                >
                    <Link to='/catalogo/Novedades'>
                        <img
                            className="swiper-lazy"
                            src={banner}
                            alt={index}
                        />
                    </Link>
                </SwiperSlide>
            ))}
            <div className="banner-slider__pagination s-pt-1"></div>
        </Swiper>
    );
};

export default BannerSlider;
