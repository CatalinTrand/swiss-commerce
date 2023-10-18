import { FilterState, Product, SortState } from '../../common-types';
import { applyFilters, applySort } from '../../components/helpers';
import React from 'react';
import { defaultSortState } from '../../constants';

export type ProductsContextType = {
  possiblePrices: {
    min: number,
    max: number,
  }
  productList?: Product[],
  sort: SortState['value'],
  setSort: (sortStateValue: SortState['value']) => void,
  filters?: FilterState,
  setFilters: (filterState: FilterState) => void,
}

const ProductsContext = React.createContext<ProductsContextType | undefined>(undefined);

export const ProductsContextProvider = ({ initialProductList, children }: {
  initialProductList: Product[],
  children: React.ReactNode,
}) => {
  const [sortState, setSortState] = React.useState<SortState['value']>(defaultSortState.value);
  const [fitlerState, setFilterState] = React.useState<FilterState>();

  // compute the list of prices for all products as it will be needed for setting the min/max possible price
  // saving as a separate variable to not compute it twice for each min/max
  const priceList = React.useMemo(
    () => initialProductList?.map(({ price }) => price),
    [initialProductList]
  );

  const minPossiblePrice = React.useMemo(
    () => priceList?.reduce((acc, curr) => Math.min(acc, curr), 10000) ?? 0,
    [priceList]
  );

  const maxPossiblePrice = React.useMemo(
    () => priceList?.reduce((acc, curr) => Math.max(acc, curr), 0) ?? 0,
    [priceList]
  );

  // initialise the filterState with the min/max price as default
  React.useEffect(() => {
    setFilterState({
      maxPrice: maxPossiblePrice,
      minPrice: minPossiblePrice,
    });
  }, [setFilterState, minPossiblePrice, maxPossiblePrice]);

  // compute currently rendered products, applying the filters and selected sorting order
  const renderedProductList = React.useMemo(
    () => initialProductList?.filter(applyFilters(fitlerState)).sort(applySort(sortState)),
    [initialProductList, fitlerState, sortState])

  const contextValue = React.useMemo(() => ({
    filters: fitlerState,
    possiblePrices: {
      max: maxPossiblePrice,
      min: minPossiblePrice,
    },
    productList: renderedProductList,
    setFilters: setFilterState,
    setSort: setSortState,
    sort: sortState,
  }), [
    minPossiblePrice,
    maxPossiblePrice,
    renderedProductList,
    fitlerState,
    setFilterState,
    sortState,
    setSortState
  ]);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => {
  const context = React.useContext(ProductsContext);

  if (!context) {
    throw new Error('useProducts can only be used in the ProductsContextProvider!');
  }

  return context;
}

export default useProducts;