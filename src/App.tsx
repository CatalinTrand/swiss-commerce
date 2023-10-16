import ProductListPage from './pages/productListPage';
import React from 'react';
import ShopLayout from './layouts/ShopLayout';

function App() {
  return (
    <div className="App">
      <ShopLayout>
        <ProductListPage/>
      </ShopLayout>
    </div>
  );
}

export default App;
