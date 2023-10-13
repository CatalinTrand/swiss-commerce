import React from 'react';
import LoadingSpinner from "../../components/loadingSpinner";
import ProductCard from "../../components/productCard/ProductCard";
import testIds from "../../componentTestIds";
import {ProductModalContextProvider} from "../../contexts/productModalContext/useProductModalContext";
import ProductModal from "../../components/productModal";
import Filters from "../../components/filters/Filters";
import Sort from "../../components/sort/Sort";
import useProducts from "../../contexts/productsContext/useProductsContext";

const ProductListPage = () => {
    const { productList } = useProducts();

    if(productList === undefined) return <LoadingSpinner />

    // TODO - add classnames
    return (
        <ProductModalContextProvider>
            <ProductModal />
            <div>
                <div>
                    <Filters />
                    <Sort />
                </div>
                <div data-testid={testIds.pages.productList.productGrid}>
                    {productList.map((product) => <ProductCard {...product}/>)}
                </div>
            </div>
        </ProductModalContextProvider>
    )
}

export default ProductListPage;