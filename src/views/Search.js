import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchProduct } from "../redux-action/layoutAction";
import LeftPanel from "../components/catalog/LeftPanel";
import TopPanel from "../components/catalog/TopPanel";
import ProductsPanel from "../components/catalog/ProductsPanel";

const Search = () => {
    const dispatch = useDispatch();
    const { SearchParam } = useParams();
    const {search} = useSelector(state => state.layout)
    useEffect(() => {
        dispatch(searchProduct(SearchParam));
    }, [dispatch, SearchParam]);
    return(
    <div className="catalog grid-container s-grid-12">
        <LeftPanel
            className="lg-cols-3 s-d-none lg-d-block s-rows-2"
            title={SearchParam}
            results={search.length}
        />
        <TopPanel className="lg-cols-9 s-cols-12" />
        <ProductsPanel productsCatalog={search} className="lg-cols-9 s-cols-12" />
    </div>);
};

export default Search;
