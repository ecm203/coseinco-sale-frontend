import React from "react";
import DetailProduct from "../components/product/DetailProduct";
import RelatedProducts from "../components/product/RelatedProducts";

const Product = () => {
    return (
        <>
            <DetailProduct />
            <div className="grid-container ui-bg s-pxy-3 b-radious l-section">
                <h2 className="s-mb-05">Productos destacados</h2>
                <p className="s-mb-3 t--secundary">
                    Tendencias y productos mejor valorados
                </p>
                <RelatedProducts />
            </div>
        </>
    );
};

export default Product;
