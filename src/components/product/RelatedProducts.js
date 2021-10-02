import React from 'react'
import { useSelector } from 'react-redux'
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import CardProduct from "../card/CardProduct";

SwiperCore.use([ Pagination, A11y, Autoplay]);
const RelatedProducts = () => {

    const { productsRelated } = useSelector(state => state.product);

    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={16}
            className="product-slider s-pb-3"
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
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
                    slidesPerView: 5,
                    spaceBetween: 16,
                },
            }}
        >
            {productsRelated.map((product,index) => (
                <SwiperSlide>
                    <CardProduct
                        key={index}
                        sku={product.productocodigo}
                        img={product.productoimagen1}
                        title={product.productonombre}
                        colors={product.colores}
                        offert={
                            product.productoprecioreal ===
                            product.productopreciodescuentodoble
                                ? ""
                                : `2 x S/.${
                                      product.productopreciodescuentodoble * 2
                                  }`
                        }
                        price={product.productoprecioreal}
                    />
                </SwiperSlide>
            ))}
            <div className="product-slider__pagination s-pt-1"></div>
        </Swiper>
    )
}

export default RelatedProducts
