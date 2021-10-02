import React from 'react';
import PropTypes from "prop-types";
// import { ReactComponent as Chevrondown } from '../../assets/icons/Chevron-down.svg';

const CardCategory = ( {className, img, title} ) => {
    return (
        <div className={`card-category ${className}`}>
            <img className="card-category__img" src={img} alt={title}/>
            {/* <div className="card-category__box">
                <span className="t--heading-1 d-inline-block s-mb-2"> { title } </span>
                <button className="btn btn--outline-white">
                    Comprar ahora
                    <Chevrondown className="btn__icon btn__icon--end"/>
                </button>
            </div> */}
        </div>
    )
}

CardCategory.protoTypes ={
    className: PropTypes.string,
    img : PropTypes.string,
    title: PropTypes.string
}

CardCategory.defaultProps = {
    className: '',
    img: '',
    title: 'card-category'
}

export default CardCategory
