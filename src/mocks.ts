import {Product} from "./common-types";

// TODO
const mockedProducts: Product[] = [];

export const mockedFetchProducts = (): Promise<Product[]> => new Promise((resolve) =>
        setTimeout(() => resolve(mockedProducts), 500)
);