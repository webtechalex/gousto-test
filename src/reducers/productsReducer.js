import {FETCH_PRODUCTS_SUCCESS, TOGGLE_PRODUCT_VISIBILITY} from '../actions';

const productsReducer = (state = [], action) => {
  switch (action && action.type) {
    case FETCH_PRODUCTS_SUCCESS: {
      return action.products.map(product => {
        return {
          id: product.id,
          title: product.title,
          description: product.description,
          categories: product.categories,
          descriptionVisible: false
        }
      });
    }
    case TOGGLE_PRODUCT_VISIBILITY: {
      return state.map(product => {
        if (action.id !== product.id) {
          return product;
        }
        return Object.assign({}, product, {descriptionVisible: !product.descriptionVisible})
      });
    }
  }
  return state;
}

export default productsReducer;