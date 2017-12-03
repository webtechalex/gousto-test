export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const TOGGLE_PRODUCT_VISIBILITY = 'TOGGLE_PRODUCT_VISIBILITY';
export const CATEGORIES_ARE_LOADING = 'CATEGORIES_ARE_LOADING';
export const CATEGORIES_HAVE_ERRORED = 'CATEGORIES_HAVE_ERRORED';
export const PRODUCTS_ARE_LOADING = 'PRODUCTS_ARE_LOADING';
export const PRODUCTS_HAVE_ERRORED = 'PRODUCTS_HAVE_ERRORED';
export const UPDATE_PRODUCT_SEARCH_INPUT_VALUE = 'UPDATE_PRODUCT_SEARCH_INPUT_VALUE';

export const categoriesAreLoading = (categoriesAreLoading) => {
  return {
    type: CATEGORIES_ARE_LOADING,
    categoriesAreLoading
  };
}

export const categoriesHaveErrored = (categoriesHaveErrored) => {
  return {
    type: CATEGORIES_HAVE_ERRORED,
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

export const productsAreLoading = (productsAreLoading) => {
  return {
    type: PRODUCTS_ARE_LOADING,
    productsAreLoading
  };
};

export const productsHaveErrored = (productsHaveErrored) => {
  return {
    type: PRODUCTS_HAVE_ERRORED,
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