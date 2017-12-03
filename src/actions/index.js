export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const TOGGLE_PRODUCT_VISIBILITY = "TOGGLE_PRODUCT_VISIBILITY";

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories
  };
};

export const selectCategory = (id) => {
  return {
    type: SELECT_CATEGORY,
    id
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products
  }
}

export const toggleProductVisibility = (id) => {
  return {
    type: TOGGLE_PRODUCT_VISIBILITY,
    id
  }
}