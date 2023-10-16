import { Container, Grid, Typography } from '@mui/material';
import Filters from '../../components/filters';
import LoadingSpinner from '../../components/loadingSpinner';
import ProductCard from '../../components/productCard/ProductCard';
import ProductModal from '../../components/productModal';
import { ProductModalContextProvider } from '../../contexts/productModalContext/useProductModalContext';
import React from 'react';
import Sort from '../../components/sort';
import testIds from '../../componentTestIds';
import useProducts from '../../contexts/productsContext/useProductsContext';

const ProductListPage = () => {
  const { productList } = useProducts();

  if (productList === undefined) return <LoadingSpinner/>

  return (
    <ProductModalContextProvider>
      <Container data-testid={testIds.pages.productList.wrapper}>
        <ProductModal/>
        <Grid container spacing={3} margin={3}>
          <Grid item xs={10} md={6} container spacing={4} data-testid={testIds.pages.productList.filterArea}
                alignItems='center'>
            <Sort/>
            <Filters/>
          </Grid>
          <Grid item xs={10} xl={12} container spacing={3} data-testid={testIds.pages.productList.productGrid}>
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