export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories
  };
};

export const updateCategory = (id) => {
  return {
    type: UPDATE_CATEGORY,
    id
  };
};