import Header from '../components/header';
import { ProductsContextProvider } from '../contexts/productsContext/useProductsContext';
import React from 'react';
import testIds from '../componentTestIds';

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='shop-layout' data-testid={testIds.layouts.shopLayout.wrapper}>
      <Header/>
      <div className='shop-layout-content' data-testid={testIds.layouts.shopLayout.content}>
        <ProductsContextProvider>
          {children}
        </ProductsContextProvider>
      </div>
    </div>
  )
}

export default ShopLayout;