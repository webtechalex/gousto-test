import {FETCH_CATEGORIES_ERROR} from '../actions';

const categoriesHaveErrored = (state = false, action) => {
  if(action && action.type === FETCH_CATEGORIES_ERROR) {
    return action.categoriesHaveErrored;
  }
  return state;
}

export default categoriesHaveErrored;