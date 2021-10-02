import React from "react";
import PropTypes from "prop-types";

import CardProduct from "../card/CardProduct";

const ProductsPanel = ({ className, productsCatalog }) => {
    return (
        <section
            className={`grid-container s-grid-12 rows-gap ${className}`}
        >
            {productsCatalog.map((product, index) => (
               <>
                    <div className="lg-cols-3 sm-cols-4 s-cols-6">
                        <CardProduct
                            key={index}
                            className="ui-bg"
                            sku={product._id}
                            img={product.imagenes[0]}
                            title={product.nombre}
                            price={product.precio}
                            stock={product.stock}
                        />
                    </div>
               </>
            ))}
        </section>
    );
};

ProductsPanel.propType = {
    className: PropTypes.string,
    productsCatalog: PropTypes.array
};

ProductsPanel.defaultProps = {
    className: "",
    productsCatalog: []
};

export default ProductsPanel;
