import {FETCH_CATEGORIES_SUCCESS, UPDATE_CATEGORY} from '../actions';

const categoriesReducer = (state = [], action) => {
  switch (action && action.type) {
    case FETCH_CATEGORIES_SUCCESS: {
      return action.categories.map(category => {
        return {
          id: category.id,
          title: category.title,
          selected: false
        }
      });
    }
    case UPDATE_CATEGORY: {
      return state.map(category => {
        if (category.id !== action.id) {
          return Object.assign({}, category, {selected: false});
        }
        return Object.assign({}, category, {selected: true});
      });
    }
  }
  return state;
};

export default categoriesReducer;