import React from 'react';

import CategoriesContainer from './CategoriesContainer';
import ProductSearchInputContainer from './ProductSearchInputContainer';
import ProductsContainer from './ProductsContainer';

import '../styles/index.css';

function App() {
  return (
    <div className="container">
      <CategoriesContainer />
      <ProductSearchInputContainer />
      <ProductsContainer />
    </div>
  );
}

export default App;