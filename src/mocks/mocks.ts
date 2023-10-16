import { Product } from '../common-types';

export const mockedFetchProducts = async (): Promise<Product[]> => {
  const mockedProductsRequest = await fetch('http://localhost:3000/data.json');
  const mockedProducts = await mockedProductsRequest.json() as Product[];

  // wait some extra time so that the loading spinner is visible
  return new Promise((resolve) =>
    setTimeout(() => resolve(mockedProducts), 500)
  );
}