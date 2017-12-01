import {FETCH_CATEGORIES_SUCCESS} from '../actions';

const categoriesReducer = (state = [], action) => {
  if (action && action.type === FETCH_CATEGORIES_SUCCESS) {
    return action.categories.map(category => {
      return {
        id: category.id,
        title: category.title,
        selected: false
      }
    });
  }
  return state;
};

export default categoriesReducer;