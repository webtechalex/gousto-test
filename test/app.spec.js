import {expect} from 'chai';

import {categoriesReducer, productsReducer} from '../src/reducers';
import {fetchCategoriesSuccess, selectCategory, fetchProductsSuccess, toggleProductVisibility} from '../src/actions';
import {mockCategoryData, mockCategoryState, mockUpdatedState, mockProductData, mockProductState, mockUpdatedProducts} from './mocks';

describe('environment', function() {
  it('should run a test', function() {
    expect(true).to.equal(true);
  });
});

describe('categoriesReducer', function() {
  it('should return initial state when called with no arguments', function() {
    const categories = categoriesReducer();
    expect(Array.isArray(categories));
    expect(categories.length).to.equal(0);
  });

  it('should map id, title and selected state to each received category', function() {
    expect(categoriesReducer([], fetchCategoriesSuccess(mockCategoryData))).to.eql(mockCategoryState);
  });

  it('should update the "selected" property when a category is selected', function() {
    expect(categoriesReducer(mockCategoryState, selectCategory('529ea59e-bf7e-11e5-840e-02fada0dd3b9'))).to.eql(mockUpdatedState)
  });

  it('should update all other "selected" properties to false when a category is selected', function() {
    const updatedCategoryState = categoriesReducer(mockCategoryState, selectCategory('529ea59e-bf7e-11e5-840e-02fada0dd3b9'))
    const newUpdatedCategoryState = categoriesReducer(mockCategoryState, selectCategory('01b06fa0-bf7e-11e5-9c1e-02fada0dd3b9'))
    expect(categoriesReducer(updatedCategoryState, selectCategory('01b06fa0-bf7e-11e5-9c1e-02fada0dd3b9'))).to.eql(newUpdatedCategoryState);
  });

  it('should return the current state when passed an invalid or undefined action', function() {
    expect(categoriesReducer(mockCategoryState)).to.equal(mockCategoryState);
  });
});

describe('productsReducer', function() {
  it('should return initial state when called with no arguments', function() {
    const products = productsReducer();
    expect(Array.isArray(products)).to.equal(true);
    expect(products.length).to.equal(0);
  });

  it('should map id, title and description to each received product', function() {
    expect(productsReducer([], fetchProductsSuccess(mockProductData))).to.eql(mockProductState);
  });

  it('should update the "descriptionVisible" property when a product is selected', function() {
    expect(productsReducer(mockProductState, toggleProductVisibility('00a0130e-bfea-11e7-a2c2-0617e74d8914'))).to.eql(mockUpdatedProducts);
  });
});
