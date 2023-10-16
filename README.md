# SwissCommerce home assessment

## Description

React application for a simple product list page, with filter/sort functionality, responsiveness - demonstrated both using MaterialUI and SCSS, and unit testing.

The **state management** is distributed as follows:

1. ProductsContext - handles fetching, sorting and filtering of the products and exposes the required variables and functions via the `useProducts()` hook.

   The ProductListPage, Sort component and Filter component live inside this context and consume it accordingly.

2. ProductModalContext - the abstract implementation of the modal; exposes the currently displayed product, as well as open/close functions, via the `useProductModal()` hook; this was used in order to always render a single modal at any given time

   The ProductCard and ProductModal both consume this context accordingly.


**Styling** was done in 2 different ways on purpose: using SCSS files and using MaterialUI.

**Testing** was done using Jest / React-Testing-Library 

_Testing is done only to a couple of components to demonstrate it's usage as per the discussion with Dario_

## Instructions

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
