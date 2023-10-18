import { GetServerSideProps } from 'next';
import { Product } from '../src/common-types';
import ProductListPage from '../src/pages/productListPage';
import { ProductsContextProvider } from '../src/contexts/productsContext/useProductsContext';
import React from 'react';
import ShopLayout from '../src/layouts/ShopLayout';
import { mockedFetchProducts } from '../src/mocks/mockedApi';
import styles from './index.module.scss';

interface PageProps {
  initialProductList: Product[];
}

export const getServerSideProps: GetServerSideProps<PageProps> = (async () => {
  const products = await mockedFetchProducts();
  return { props: { initialProductList: products } };
})

function App({ initialProductList }: PageProps) {
  return (
    <div className={styles.app}>
        <ProductsContextProvider initialProductList={initialProductList}>
          <ShopLayout>
            <ProductListPage/>
          </ShopLayout>
        </ProductsContextProvider>
    </div>
  );
}

export default App;
