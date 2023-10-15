import React from 'react';
import LoadingSpinner from "../../components/loadingSpinner";
import ProductCard from "../../components/productCard/ProductCard";
import testIds from "../../componentTestIds";
import {ProductModalContextProvider} from "../../contexts/productModalContext/useProductModalContext";
import ProductModal from "../../components/productModal";
import Filters from "../../components/filters/Filters";
import Sort from "../../components/sort/Sort";
import useProducts from "../../contexts/productsContext/useProductsContext";
import {Container, Grid } from "@mui/material";

const ProductListPage = () => {
    const { productList } = useProducts();

    if(productList === undefined) return <LoadingSpinner />

    return (
        <ProductModalContextProvider>
            <Container data-testid={testIds.pages.productList.wrapper}>
                <ProductModal />
                <Grid container spacing={3}>
                    <Grid container item spacing={2} data-testid={testIds.pages.productList.filterArea}>
                        <Filters />
                        <Sort />
                    </Grid>
                    <Grid container item spacing={2} data-testid={testIds.pages.productList.productGrid}>
                        {productList.map((product) => <ProductCard {...product} key={product.productId}/>)}
                    </Grid>
                </Grid>
            </Container>
        </ProductModalContextProvider>
    )
}

export default ProductListPage;