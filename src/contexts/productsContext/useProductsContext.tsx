import React from "react";
import {FilterState, Product, SortState} from "../../common-types";
import {mockedFetchProducts} from "../../mocks";
import {defaultSortState} from "../../constants";
import {applyFilters, applySort} from "../../components/helpers";

export type ProductsContextType = {
    productList?: Product[],
    sort: SortState,
    setSort: (sortState: SortState) => void,
    filters?: FilterState,
    setFilters: (filterState: FilterState) => void,
}

const ProductsContext = React.createContext<ProductsContextType | undefined>(undefined);

export const ProductsContextProvider = ({children}: {children: React.ReactNode}) => {
    const [initialProductList, setInitialProductList] = React.useState<Product[]>();
    const [sortState, setSortState] = React.useState<SortState>(defaultSortState);
    const [fitlerState, setFilterState] = React.useState<FilterState>();

    const fetchProducts = React.useCallback(async () => {
        try {
            const products = await mockedFetchProducts();
            setInitialProductList(products);
        } catch (e) {
            console.error('An error occured when fetching the products list', e)
        }
    }, [setInitialProductList]);

    React.useEffect(() => {
        // mock implementation for a server call
        fetchProducts();
    }, [fetchProducts]);

    const renderedProductList = React.useMemo(
        () => initialProductList?.filter(applyFilters(fitlerState)).sort(applySort(sortState)),
        [initialProductList, fitlerState, sortState])

    const contextValue = React.useMemo(() => ({
        productList: renderedProductList,
        filters: fitlerState,
        setFilters: setFilterState,
        sort: sortState,
        setSort: setSortState,
    }), [renderedProductList, fitlerState, setFilterState, sortState, setSortState]);

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