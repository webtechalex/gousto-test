import {PRODUCTS_ARE_LOADING} from '../actions';

const productsAreLoadingReducer = (state = false, action) => {
  if(action && action.type === PRODUCTS_ARE_LOADING) {
    return action.productsAreLoading;
  }
  return state;
}

export default productsAreLoadingReducer;