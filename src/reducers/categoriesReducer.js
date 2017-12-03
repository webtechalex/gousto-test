import {FETCH_CATEGORIES_SUCCESS, SELECT_CATEGORY} from '../actions';

const categoriesResponse = (state = [], action) => {
  switch (action && action.type) {
    case FETCH_CATEGORIES_SUCCESS: {
      return action.categoriesResponse.map(category => {
        return {
          id: category.id,
          title: category.title,
          selected: false
        }
      });
    }
    case SELECT_CATEGORY: {
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

export default categoriesResponse;