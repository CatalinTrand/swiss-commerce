import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const mockedProductListContent = 'some text';
jest.mock('./pages/productList', () => () => <div>{mockedProductListContent}</div>);

describe('App', () => {
  it('renders correctly', () => {
    render(<App />);
    const productList = screen.getByText(mockedProductListContent)
    expect(productList).toBeInTheDocument();
  })
});
