import {CATEGORIES_HAVE_ERRORED} from '../actions';

const categoriesHaveErroredReducer = (state = false, action) => {
  if(action && action.type === CATEGORIES_HAVE_ERRORED) {
    return action.categoriesHaveErrored;
  }
  return state;
}

export default categoriesHaveErroredReducer;