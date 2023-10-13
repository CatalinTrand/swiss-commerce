import React from 'react';
import {Product} from "../../common-types";
import LoadingSpinner from "../../components/loadingSpinner";
import ProductCard from "../../components/productCard/ProductCard";
import {mockedProducts} from "../../mocks";
import testIds from "../../componentTestIds";
import {ProductModalContextProvider} from "../../contexts/productModalContext/useProductModalContext";
import ProductModal from "../../components/productModal";

const ProductList = () => {
    const [productList, setProductList] = React.useState<Product[]>();

    React.useEffect(() => {
        setProductList(mockedProducts)
    }, []);

    if(productList === undefined) return <LoadingSpinner />

    // TODO - add classnames, sort/filter functionality etc
    return (
        <div>
            <ProductModalContextProvider>
                <ProductModal />
                <div>
                    <div>
                        <span>Filter</span>
                    </div>
                    <div>
                        <span>Sort</span>
                    </div>
                </div>
                <div data-testid={testIds.pages.productList.productGrid}>
                    {productList.map((product) => <ProductCard {...product}/>)}
                </div>
            </ProductModalContextProvider>
        </div>
    )
}

export default ProductList;