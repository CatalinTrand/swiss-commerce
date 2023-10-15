import React from 'react';
import LoadingSpinner from "../../components/loadingSpinner";
import ProductCard from "../../components/productCard/ProductCard";
import testIds from "../../componentTestIds";
import {ProductModalContextProvider} from "../../contexts/productModalContext/useProductModalContext";
import ProductModal from "../../components/productModal";
import Filters from "../../components/filters/Filters";
import Sort from "../../components/sort/Sort";
import useProducts from "../../contexts/productsContext/useProductsContext";
import {Container, Grid, Typography} from "@mui/material";

const ProductListPage = () => {
    const { productList } = useProducts();

    if(productList === undefined) return <LoadingSpinner />

    return (
        <ProductModalContextProvider>
            <Container data-testid={testIds.pages.productList.wrapper}>
                <ProductModal />
                <Grid container spacing={3} margin={3}>
                    <Grid item xs={12} md={6} container spacing={4} data-testid={testIds.pages.productList.filterArea} alignItems='center'>
                        <Sort />
                        <Filters />
                    </Grid>
                    <Grid item xs={12} container spacing={3} data-testid={testIds.pages.productList.productGrid} justifyContent='space-between'>
                        {
                            productList.length
                                ? productList.map((product) => <ProductCard {...product} key={product.productId}/>)
                                : <Typography variant="subtitle1">No products found using the given filters!</Typography>
                        }
                    </Grid>
                </Grid>
            </Container>
        </ProductModalContextProvider>
    )
}

export default ProductListPage;