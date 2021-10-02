import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

import { ReactComponent as Grid } from "../../assets/icons/Grid.svg";
import { ReactComponent as Filter } from "../../assets/icons/Filter.svg";
import { ReactComponent as List } from "../../assets/icons/List.svg";
import { useWindowDimensions } from "../../const/hooks/useWindowDimensions";
const options = [
    { value: 1, label: "Menor a mayor precio" },
    { value: 2, label: "Mayor a menor precio" },
    { value: 3, label: "Más recomendados" },
];

const TopPanel = ({ className }) => {
    const { width } = useWindowDimensions();
    return (
        <section
            className={`top-panel s-px-2 lg-px-3 ui-bg d-flex s-row s-cross-center s-main-distribute lg-main-justify ${className}`}
        >
            {width < 1024 && (
                <div className="top-panel__filter s-d-flex s-cross-center">
                    <Filter className="s-mr-05" style={{ width: "18px" }} />
                    <span className="t--body-2 t--medium s-mr-1">Filtro</span>
                </div>
            )}
            <div className="top-panel__order-by s-d-none lg-d-flex s-cross-center">
                <span className="t--body-2 t--medium s-mr-1">
                    {" "}
                    Ordenar por:{" "}
                </span>
                <Select
                    defaultValue={options[0]}
                    classNamePrefix="input-select"
                    className="t--body-2"
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary: "#c6c6c6",
                            primary25: "#e5e5e5",
                            primary50: "#e0e0e0",
                            neutral0: "#161616",
                        },
                    })}
                    options={options}
                />
            </div>
            <div className="top-panel__view-for s-d-flex s-cross-center">
                <span className="t--body-2 t--medium s-mr-1">
                    {" "}
                    Vista por:{" "}
                </span>
                <button className="btn btn--large btn--ghost btn--icon-only">
                    <Grid className="btn__icon" />
                </button>
                <button className="btn btn--large btn--ghost btn--icon-only">
                    <List className="btn__icon" />
                </button>
            </div>
        </section>
    );
};

TopPanel.propType = {
    className: PropTypes.string,
};

TopPanel.defaultProps = {
    className: "",
};

export default TopPanel;
