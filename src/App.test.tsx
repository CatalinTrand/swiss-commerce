import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

const mockedProductListContent = 'some text';
jest.mock('./pages/productListPage', () => () => <div>{mockedProductListContent}</div>);

describe('App', () => {
  it('renders correctly', () => {
    render(<App/>);
    const productList = screen.getByText(mockedProductListContent)
    expect(productList).toBeInTheDocument();
  })
});
