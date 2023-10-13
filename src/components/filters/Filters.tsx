import React from "react";
import useProducts from "../../contexts/productsContext/useProductsContext";

const Filters = () => {
    const { filters, setFilters } = useProducts();

    // TODO
    return (
        <div>
            <span>Filter</span>
        </div>
    );
}

export default Filters;