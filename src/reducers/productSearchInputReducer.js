import {UPDATE_PRODUCT_SEARCH_INPUT_VALUE} from '../actions';

const productSearchInput = (state = '', action) => {
  if (action && action.type === UPDATE_PRODUCT_SEARCH_INPUT_VALUE) {
    console.log(action);
    return action.productSearchInputValue;
  }
  return state;
}

export default productSearchInput;