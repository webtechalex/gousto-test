import React, {Component} from 'react';

import Product from './Product';
import {filterProductsBySelection} from '../helpers';

class Products extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div>
        {this.props.productsAreLoading && <p>Loading products...</p>}
        {this.props.productsHaveErrored && <p>{this.props.productsHaveErrored}</p>}
        <ul>
          {this.props.productsResponse &&
            filterProductsBySelection(this.props.productsResponse, this.props.category, this.props.productSearchInput).map(product =>
              <Product
                key={product.id}
                productId={product.id}
                title={product.title}
                toggleProductVisibility={this.props.toggleProductVisibility}
                description={product.description}
                descriptionVisible={product.descriptionVisible}
              />
            )
          }
        </ul>
      </div>
    );
  }
}

export default Products;