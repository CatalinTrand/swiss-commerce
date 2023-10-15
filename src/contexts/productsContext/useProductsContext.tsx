import React from "react";
import {FilterState, Product, SortState} from "../../common-types";
import {mockedFetchProducts} from "../../mocks";
import {defaultSortState} from "../../constants";
import {applyFilters, applySort} from "../../components/helpers";

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

export const ProductsContextProvider = ({children}: {children: React.ReactNode}) => {
    const [initialProductList, setInitialProductList] = React.useState<Product[]>();
    const [sortState, setSortState] = React.useState<SortState['value']>(defaultSortState.value);
    const [fitlerState, setFilterState] = React.useState<FilterState>();

    // simple handling of a product fetch
    const fetchProducts = React.useCallback(async () => {
        try {
            const products = await mockedFetchProducts();
            setInitialProductList(products);
        } catch (e) {
            console.error('An error occured when fetching the products list', e)
        }
    }, [setInitialProductList]);

    React.useEffect(() => {
        // fetching the products once the component is mounted
        fetchProducts();
    }, [fetchProducts]);

    // compute the list of prices for all products as it will be needed for setting the min/max possible price
    // saving as a separate variable to not compute it twice for each min/max
    const priceList = React.useMemo(
        () => initialProductList?.map(({ price }) => price),
        [initialProductList]
    );

    const minPossiblePrice = React.useMemo(
        () => priceList?.reduce((acc, curr) => Math.min(acc, curr)) ?? 0,
        [priceList]
    );

    const maxPossiblePrice = React.useMemo(
        () => priceList?.reduce((acc, curr) => Math.max(acc, curr)) ?? 0,
        [priceList]
    );

    // initialise the filterState with the min/max price as default
    React.useEffect(() => {
      setFilterState({
          minPrice: minPossiblePrice,
          maxPrice: maxPossiblePrice
      });
    }, [setFilterState, minPossiblePrice, maxPossiblePrice]);

    // compute currently rendered products, applying the filters and selected sorting order
    const renderedProductList = React.useMemo(
        () => initialProductList?.filter(applyFilters(fitlerState)).sort(applySort(sortState)),
        [initialProductList, fitlerState, sortState])

    const contextValue = React.useMemo(() => ({
        possiblePrices: {
            min: minPossiblePrice,
            max: maxPossiblePrice,
        },
        productList: renderedProductList,
        filters: fitlerState,
        setFilters: setFilterState,
        sort: sortState,
        setSort: setSortState,
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

    if(!context) {
        throw new Error('useProducts can only be used in the ProductsContextProvider!');
    }

    return context;
}

export default useProducts;