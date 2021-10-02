import React from "react";
import PropTypes from "prop-types";

const CardInfo = ({ className, title, text, icon, link }) => {
    return (
        <div className={`card-info s-d-flex s-pxy-2 ${className}`}>
            <img src={icon} alt="icon" className="card-info__icon s-mr-3" />
            <div className="card-info__text">
                <h4 className="s-mb-1">{title}</h4>
                <p className="t--body-2 t--secundary s-mb-1">{text}</p>
                <a
                    href="www.google.com"
                    className="t--link-2 t--secundary s-mb-1"
                >
                    {link}
                </a>
            </div>
        </div>
    );
};

CardInfo.prototype = {
    className: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.node,
    link: PropTypes.string,
};

CardInfo.defaultProps = {
    className: "",
    title: "title",
    text: "text",
    link: "link",
};

export default CardInfo;
