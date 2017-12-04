import React, {Component} from 'react';

import Product from './Product';

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
        <ul>
          {this.props.productsResponse &&
          this.props.productsResponse.map(product =>
            <Product
              key={product.id}
              productId={product.id}
              title={product.title}
              toggleProductVisibility={this.props.toggleProductVisibility}
              description={product.description}
              descriptionVisible={product.descriptionVisible}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default Products;