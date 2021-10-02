import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import { uiCloseSearchH } from "../../../redux-action/uiAction";
import { ReactComponent as Search } from "../../../assets/icons/Search.svg";
import { ReactComponent as Close } from "../../../assets/icons/Close.svg";

const SearchHeader = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleCloseSearch = () => {
        dispatch(uiCloseSearchH());
    };
    const { openSearchH } = useSelector((state) => state.ui);

    const { handleSubmit, register } = useForm();

    const onSubmit = (data) => {
        history.push(`/busqueda/${data.search}`);
        dispatch(uiCloseSearchH());
    };

    useEffect(() => {
        if (openSearchH === true) {
            const checkScroll = () => {
                const scrollY = window.pageYOffset;
                if (scrollY >= 50) {
                    dispatch(uiCloseSearchH());
                }
            };
            window.addEventListener("scroll", checkScroll);
            return () => {
                window.removeEventListener("scroll", checkScroll);
            };
        }
    }, [openSearchH, dispatch]);

    useEffect(() => {
        if (openSearchH === true) {
            document.getElementById("searchInput").focus();
        }
    }, [openSearchH]);

    return (
        <div>
            <div className="search-header animation__content ui-bg">
                <div className="search-header__grid grid-container s-grid-4 s-px-2">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="search-header__form  d-flex s-cross-center  s-cols-4 lg-cols-2 lg-x-2 s-mb-0"
                    >
                        <div className="input-group__box input-group__box--header">
                            <Search className="box__icon box__icon--end box__icon--large" />
                            <input
                                id="searchInput"
                                name="search"
                                placeholder="¿Que estas buscando?"
                                className="box__text box__text--large box__text--icon-end"
                                type="text"
                                ref={register({
                                    required: "Campo obligatorio",
                                })}
                            />
                        </div>
                        <div
                            className="search-header__close"
                            onClick={handleCloseSearch}
                        >
                            <Close className="serch-header__icon-close" />
                        </div>
                    </form>
                </div>
            </div>
            <div
                className="search-header__overlay animation__overlay"
                onClick={handleCloseSearch}
            ></div>
        </div>
    );
};

export default SearchHeader;
