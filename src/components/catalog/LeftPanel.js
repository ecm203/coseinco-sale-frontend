import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Collapsible from "../ui/Collapsible";

import { useHistory, useLocation } from "react-router";
import { encodeQuery } from "../../const/data/encodeQuery";

import { ReactComponent as Chevron } from "../../assets/icons/Chevron-right.svg";
import { ReactComponent as Close } from "../../assets/icons/Close.svg";

const prices = [
    "Hasta S/25 (1235)",
    "De S/.25 a S/.50 (1235)",
    "De S/.50 a S/.70(1235)",
    "De S/.200 a más (1235)",
];

const getArrayObjectValueSize = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        array[i].tallanombre !== undefined
            ? newArray.push(array[i].tallanombre)
            : newArray.push(array[i]);
    }
    return newArray;
};

const getArrayObjectValueColor = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        array[i].colornombre !== undefined
            ? newArray.push(array[i].colornombre)
            : newArray.push(array[i]);
    }
    return newArray;
};

const getColorByName = (array, name) => {
    let newArray = [];
    let value = "";
    newArray = array.filter((el) => el.colornombre === name);
    newArray.map((el)=>(
        value = el.colorimagen
    ))
    return value;
};

const LeftPanel = ({
    className,
    results,
    title,
    sizeByCategories,
    colorByCategories,
}) => {
    const history = useHistory();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const size = searchParams.get("size");
    const color = searchParams.get("color");
    const initialState = {
        ...((size !== null) & (size !== "") && { size: size }),
        ...((color !== null) & (color !== "") && { color: color }),
    };

    let sizeArray = size !== null ? size.split(",") : [];
    let colorArray = color !== null ? color.split(",") : [];

    let sizeFilter = sizeByCategories.filter(
        (size) => !sizeArray.includes(size.tallanombre)
    );
    let colorFilter = colorByCategories.filter(
        (color) => !colorArray.includes(color.colornombre)
    );

    const [filters, setFilters] = useState(initialState);


    const handleRemoveFilterSize = (el) => {
        sizeArray = sizeArray.filter((size) => size !== el);
        sizeFilter.push(el);
        sizeArray.length > 0
            ? setFilters({
                  ...filters,
                  size: getArrayObjectValueSize(sizeArray).toString(),
              })
            : setFilters({
                  ...(filters.color !== undefined && { color: filters.color }),
              });
    };

    const handleFilterByColor = (el) => {
        colorArray.push(el);
        colorFilter = colorFilter.filter((color) => color !== el);
        setFilters({
            ...filters,
            color: getArrayObjectValueColor(colorArray).toString(),
        });
    };

    const handleRemoveFilterColor = (el) => {
        colorArray = colorArray.filter((color) => color !== el);
        colorFilter.push(el);
        colorArray.length > 0
            ? setFilters({
                  ...filters,
                  color: getArrayObjectValueColor(colorArray).toString(),
              })
            : setFilters({
                  ...(filters.size !== undefined && { size: filters.size }),
              });
    };

    useEffect(() => {
        Object.entries(filters).length !== 0
            ? history.push(encodeQuery(filters))
            : history.push();
    }, [history, filters]);

    return (
        <section className={`left-panel s-pxy-3 ui-bg ${className}`}>
            <h2 className="s-mb-05"> {title} </h2>
            <span className="t--body-3 t--secundary s-d-block s-mb-3">
                {results} Resultados
            </span>
            {(sizeArray.length > 0 || colorArray.length > 0) && (
                <Collapsible
                    active={true}
                    classNameWrapper="left-panel__filter"
                    classNameTrigger="left-panel__trigger s-px-2 s-py-1 ui-01"
                    tagContent="ul"
                    classNameContent="filter__content s-right s-pxy-2"
                    titleTagName="h4"
                    classNameTitle=""
                    tittle="Filtros aplicados"
                >
                    {sizeArray.map((size) => (
                        <li
                            className="left-panel__filter-applied t--body-3 t--medium"
                            onClick={() => handleRemoveFilterSize(size)}
                        >
                            Talla: {size}
                            <Close className="filter-applied__icon" />
                        </li>
                    ))}
                    {colorArray.map((color) => (
                        <li
                            className="left-panel__filter-applied t--body-3 t--medium"
                            onClick={() => handleRemoveFilterColor(color)}
                        >
                            <div
                                className="filter-applier__box-color s-mr-1"
                                style={{ backgroundColor:  `${getColorByName(colorByCategories,color)}`}}
                            ></div>
                            {color}
                            <Close className="filter-applied__icon" />
                        </li>
                    ))}
                </Collapsible>
            )}
            {/* <Collapsible
                active={true}
                classNameWrapper="left-panel__filter"
                classNameTrigger="left-panel__trigger s-px-2 s-py-1 ui-01"
                classNameContent="grid-container rows-gap s-gap-05  s-grid-5 s-pxy-2 "
                titleTagName="h4"
                classNameTitle=""
                tittle="Talla"
            >
                {sizeFilter.map((size, index) => (
                    <div
                        onClick={() => handleFilterBySize(size)}
                        key={index}
                        role="button"
                        className="btn btn--secundary"
                    >
                        {size.tallanombre}
                    </div>
                ))}
            </Collapsible> */}

            <Collapsible
                active={true}
                classNameWrapper="left-panel__filter"
                classNameTrigger="s-px-2 s-py-1 ui-01"
                classNameContent="left-panel__trigger grid-container rows-gap s-gap-05 s-grid-5 s-pxy-2"
                titleTagName="h4"
                classNameTitle=""
                tittle="Color"
            >
                {colorFilter.map((color, index) => (
                    <div
                        key={index}
                        onClick={() => handleFilterByColor(color)}
                        type="button"
                        className="left-panel__color-box"
                        title={color.colornombre}
                        style={{ backgroundColor: color.colorimagen }}
                    ></div>
                ))}
            </Collapsible>

            <Collapsible
                active={true}
                classNameWrapper="left-panel__filter"
                classNameTrigger="left-panel__trigger s-px-2 s-py-1 ui-01"
                tagContent="ul"
                classNameContent="s-pxy-2"
                titleTagName="h4"
                classNameTitle=""
                tittle="Precio"
            >
                <li className="s-mb-2">
                    <form className="s-d-flex ">
                        <div className="input-group s-mr-1">
                            <label
                                className="input-group__label d-block s-mb-1"
                                htmlFor="input"
                            >
                                Desde
                            </label>
                            <div className="input-group__box">
                                <input
                                    className="box__text"
                                    placeholder="S/."
                                    type="number"
                                    min={0}
                                />
                            </div>
                        </div>
                        <div className="input-group s-mr-05">
                            <label
                                className="input-group__label d-block s-mb-1"
                                htmlFor="input"
                            >
                                Hasta
                            </label>
                            <div className="input-group__box">
                                <input
                                    className="box__text"
                                    placeholder="S/."
                                    type="number"
                                    min={1}
                                />
                            </div>
                        </div>
                        <button className="btn btn--align-center btn--secundary btn--icon-only">
                            <Chevron className="btn__icon" />
                        </button>
                    </form>
                </li>
                {prices.map((price, index) => (
                    <li className="s-mb-2">
                        <label key={index} className="checkbox-wrapper">
                            {price}
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </li>
                ))}
            </Collapsible>
        </section>
    );
};

LeftPanel.propType = {
    className: PropTypes.string,
    title: PropTypes.string,
    results: PropTypes.number,
    sizeByCategories: PropTypes.array,
    colorByCategories: PropTypes.array,
};

LeftPanel.defaultProps = {
    className: "",
    title: "",
    results: 0,
    sizeByCategories: [],
    colorByCategories: [],
};

export default LeftPanel;
