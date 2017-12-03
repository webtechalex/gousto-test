export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const TOGGLE_PRODUCT_VISIBILITY = 'TOGGLE_PRODUCT_VISIBILITY';
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const UPDATE_PRODUCT_SEARCH_INPUT_VALUE = 'UPDATE_PRODUCT_SEARCH_INPUT_VALUE';

export const fetchCategoriesRequest = (categoriesAreLoading) => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
    categoriesAreLoading
  };
}

export const fetchCategoriesError = (categoriesHaveErrored) => {
  return {
    type: FETCH_CATEGORIES_ERROR,
    categoriesHaveErrored
  };
}

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

export const fetchProductsRequest = (productsAreLoading) => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
    productsAreLoading
  };
};

export const fetchProductsError = (productsHaveErrored) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    productsHaveErrored
  };
}

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

export const updateProductSearchInputValue = (productSearchInputValue) => {
  return {
    type: UPDATE_PRODUCT_SEARCH_INPUT_VALUE,
    productSearchInputValue
  }
}