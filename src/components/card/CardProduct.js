import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { replaceBlanksSpace } from "../../const/data/replaceBlanksSpace";


const CardProduct = ({ sku, className, img, title, stock, price }) => {
    return (
        <Link
            to={`/producto/${sku}/${replaceBlanksSpace(title)}`}
            className={`card-product ${className}`}
        >
            <div className="card-product__box">
                <img className="card-product__img" src={img} alt={title} />
            </div>
            <div className="card-product__info s-pxy-2">
                <h4 className="card-product__info--title t--body-2 s-mb-1">
                    {title}
                </h4>
                <div className="input-group__helper s-mb-1">
                            {stock}und. Disponibles
                </div>
                <span className="t--price t--heading-3">{price}</span>
            </div>
        </Link>
    );
};

CardProduct.protoTypes = {
    sku: PropTypes.number,
    className: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.array,
    offert: PropTypes.string,
    price: PropTypes.number,
};

CardProduct.defaultProps = {
    sku: 0,
    className: "",
    img: "",
    title: "card-product",
    offert: "",
    price: 0,
};

export default CardProduct;
