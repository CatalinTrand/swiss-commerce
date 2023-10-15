import React from 'react';
import ProductListPage from "./pages/productListPage";
import {ProductsContextProvider} from "./contexts/productsContext/useProductsContext";

function App() {
  return (
    <div className="App">
        <ProductsContextProvider>
            <ProductListPage/>
        </ProductsContextProvider>
    </div>
  );
}

export default App;
