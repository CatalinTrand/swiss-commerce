import { Product } from '../common-types';
import { ProductsContextType } from '../contexts/productsContext/useProductsContext';

export const product: Product = {
  imageUrl: 'some-url',
  name: 'Test',
  numberOfReviews: 10,
  price: 100,
  productId: '1',
  rating: 4,
}

export const productList: Product[] = [
  product,
  {
    imageUrl: 'some-url',
    name: 'Test2',
    numberOfReviews: 10,
    price: 100,
    productId: '2',
    rating: 4,
  }
];

export const mockedUseProductsReturnValue: ProductsContextType = {
  filters: undefined,
  possiblePrices: {
    max: 100,
    min: 10,
  },
  productList,
  setFilters: jest.fn(),
  setSort: jest.fn(),
  sort: 'RATING_DESC',
}