import { sortStates } from './constants';

export type Product = {
  productId: string,
  name: string,
  price: number,
  imageUrl: string,
  rating: number,
  numberOfReviews: number,
}

export type FilterState = {
  minPrice: number,
  maxPrice: number,
}

export type SortState = typeof sortStates[number]