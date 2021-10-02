import React, { useEffect } from "react";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import CardProduct from "../card/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import { getNovelties } from "../../redux-action/homeAction";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);


const ProductSlider = () => {
    const dispatch = useDispatch();
    const { novelties } = useSelector((state) => state.home);
    useEffect(() => {
        dispatch(getNovelties());
    }, [dispatch]);

    return (
        <Swiper
            navigation
            slidesPerView={2}
            spaceBetween={16}
            className="product-slider s-pb-3"
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            pagination={{
                el: ".product-slider__pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + ' s-mx-05 "></span>';
                },
            }}
            breakpoints={{
                640: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 16,
                },
            }}
        >
            {novelties.map((product,index) => (
                <SwiperSlide key={index}>
                    <CardProduct
                        sku={product._id}
                        img={product.imagenes[0]}
                        title={product.nombre}
                        price={product.precio}
                        stock={product.stock}
                    />
                </SwiperSlide>
            ))}
            <div className="product-slider__pagination s-pt-1 lg-d-none"></div>
        </Swiper>
    );
};

export default ProductSlider;
