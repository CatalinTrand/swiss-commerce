import React from "react";
import useProducts from "../../contexts/productsContext/useProductsContext";

const Sort = () => {
    const { sort, setSort } = useProducts();

    // TODO
    return (
        <div>
            <span>Sort</span>
        </div>
    );
}

export default Sort;