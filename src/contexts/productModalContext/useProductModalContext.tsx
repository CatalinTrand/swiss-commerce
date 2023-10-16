import { Product } from '../../common-types';
import React from 'react';

export type ProductModalContextType = {
  displayedProduct?: Product,
  isProductModalOpen: boolean,
  openProductModal: (product: Product) => void,
  closeProductModal: () => void,
}

const ProductModalContext = React.createContext<ProductModalContextType | undefined>(undefined);

export const ProductModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [displayedProduct, setDisplayedProduct] = React.useState<Product>();

  const openProductModal = React.useCallback((product: Product) => {
    setDisplayedProduct(product);
  }, [setDisplayedProduct]);

  const closeProductModal = React.useCallback(() => {
    setDisplayedProduct(undefined);
  }, [setDisplayedProduct]);

  const contextValue = React.useMemo(() => ({
    closeProductModal,
    displayedProduct,
    isProductModalOpen: !!displayedProduct,
    openProductModal,
  }), [displayedProduct, openProductModal, closeProductModal]);

  return (
    <ProductModalContext.Provider value={contextValue}>
      {children}
    </ProductModalContext.Provider>
  );
}

export const useProductModal = () => {
  const context = React.useContext(ProductModalContext);

  if (!context) {
    throw new Error('useProductModalContext can only be used in the ProductModalContextProvider!');
  }

  return context;
}

export default useProductModal;