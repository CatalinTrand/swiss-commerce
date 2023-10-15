import {FilterState, Product, SortState} from "../common-types";

export const applyFilters = (filter?: FilterState) => (product: Product) => {
    if(!filter) return true;

    return product.price >= filter.minPrice && product.price <= filter.maxPrice;
}

export const applySort = (sortValue: SortState['value']) => (p1: Product, p2: Product) => {
    switch (sortValue) {
        case 'PRICE_ASC':
            return p1.price - p2.price;
        case 'PRICE_DESC':
            return p2.price - p1.price;
        case 'RATING_ASC':
            return p1.rating - p2.rating;
        case 'RATING_DESC':
            return p2.rating - p1.rating;
    }
}