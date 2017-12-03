import {UPDATE_PRODUCT_SEARCH_INPUT_VALUE} from '../actions';

const productSearchInputReducer = (state = '', action) => {
  if (action && action.type === UPDATE_PRODUCT_SEARCH_INPUT_VALUE) {
    return action.productSearchInputValue;
  }
  return state;
}

export default productSearchInputReducer;