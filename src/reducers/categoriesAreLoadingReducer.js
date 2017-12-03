import {CATEGORIES_ARE_LOADING} from '../actions';

const categoriesAreLoadingReducer = (state = false, action) => {
  if(action && action.type === CATEGORIES_ARE_LOADING) {
    return action.categoriesAreLoading;
  }
  return state;
}

export default categoriesAreLoadingReducer;