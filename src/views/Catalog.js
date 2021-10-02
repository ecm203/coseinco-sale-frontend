import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LeftPanel from "../components/catalog/LeftPanel";
import ProductsPanel from "../components/catalog/ProductsPanel";
import TopPanel from "../components/catalog/TopPanel";
import {
    getCatalogByCategory,
    getSizeByCategory,
    getColorByCategory,
} from "../redux-action/catalogAction";
import { getNovelties } from '../redux-action/homeAction';

const Catalog = () => {
    const { CategoryName } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCatalogByCategory(CategoryName));
    }, [dispatch, CategoryName]);

    useEffect(() => {
        dispatch(getSizeByCategory(CategoryName));
        dispatch(getColorByCategory(CategoryName));
    }, [dispatch, CategoryName]);

    const { sizeByCategories, colorByCategories } = useSelector(
        (state) => state.catalog
    );
    const { novelties } = useSelector((state) => state.home);

    useEffect(() => {
        dispatch(getNovelties());
    }, [dispatch]);

    return (
        <div className="catalog grid-container s-grid-12">
            <LeftPanel
                className="lg-cols-3 s-d-none lg-d-block s-rows-2"
                title={CategoryName}
                results={novelties.length}
                sizeByCategories={sizeByCategories}
                colorByCategories={colorByCategories}
            />
            <TopPanel className="lg-cols-9 s-cols-12" />
            <ProductsPanel
                productsCatalog={novelties}
                className="lg-cols-9 s-cols-12"
            />
        </div>
    );
};

export default Catalog;
