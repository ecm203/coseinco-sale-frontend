import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux-action/layoutAction";
import { capitalizeString } from "../../const/data/capitalizeString";

const MenuMen = () => {
    const dispatch = useDispatch();

    const { categories } = useSelector((state) => state.layout);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div className="menu-men s-py-05">
            {categories.map((category) => (
                <Link
                    key={category.categoriacodigo}
                    to={`/catalogo/${capitalizeString(category.categorianombre)}`}
                    className="list-item"
                >
                    <span className="t--body-2">
                        {capitalizeString(category.categorianombre)}{" "}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default MenuMen;
