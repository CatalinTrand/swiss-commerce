import React from 'react';
import {Product} from "../../common-types";
import LoadingSpinner from "../../components/loadingSpinner";
import ProductCard from "../../components/productCard/ProductCard";
import {mockedProducts} from "../../mocks";
import testIds from "../../componentTestIds";

const ProductList = () => {
    const [productList, setProductList] = React.useState<Product[]>();

    React.useEffect(() => {
        setProductList(mockedProducts)
    }, []);

    if(productList === undefined) return <LoadingSpinner />

    return (
        <div>
            <div>

            </div>
            <div data-testid={testIds.pages.productList.productGrid}>
                {productList.map((product) => <ProductCard {...product}/>)}
            </div>
        </div>
    )
}

export default ProductList;