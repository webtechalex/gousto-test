import {PRODUCTS_HAVE_ERRORED} from '../actions';

const productsHaveErroredReducer = (state = false, action) => {
  if(action && action.type === PRODUCTS_HAVE_ERRORED) {
    return action.productsHaveErrored;
  }
  return state;
}

export default productsHaveErroredReducer;