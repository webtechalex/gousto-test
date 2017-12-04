import React from 'react';

import CategoriesContainer from './CategoriesContainer';
import ProductSearchInputContainer from './ProductSearchInputContainer';
import ProductsContainer from './ProductsContainer';

function App() {
  return (
    <div>
      <CategoriesContainer />
      <ProductSearchInputContainer />
      <ProductsContainer />
    </div>
  );
}

export default App;