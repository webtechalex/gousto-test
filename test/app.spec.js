import {expect} from 'chai';

import {categoriesResponseReducer, productsResponseReducer, categoriesAreLoadingReducer, categoriesHaveErroredReducer, productsAreLoadingReducer, productsHaveErroredReducer} from '../src/reducers';
import {fetchCategoriesSuccess, selectCategory, fetchProductsSuccess, toggleProductVisibility, categoriesAreLoading, categoriesHaveErrored, productsAreLoading, productsHaveErrored} from '../src/actions';
import {mockCategoryData, mockCategoryState, mockUpdatedState, mockProductData, mockProductState, mockUpdatedProducts} from './mocks';

describe('environment', function() {
  it('should run a test', function() {
    expect(true).to.equal(true);
  });
});

describe('categoriesReducer', function() {
  it('should return initial state when called with no arguments', function() {
    const categories = categoriesResponseReducer();
    expect(Array.isArray(categories));
    expect(categories.length).to.equal(0);
  });

  it('should update categoriesAreLoading state when passed categoriesAreLoading action', function() {
    expect(categoriesAreLoadingReducer(false, categoriesAreLoading(true))).to.equal(true);
    expect(categoriesAreLoadingReducer(true, categoriesAreLoading(false))).to.equal(false);
  });

  it('should update categoriesHaveErrored state when passed categoriesHaveErrored action', function() {
    expect(categoriesHaveErroredReducer(false, categoriesHaveErrored(true))).to.equal(true);
    expect(categoriesHaveErroredReducer(true, categoriesHaveErrored(false))).to.equal(false);
  });

  it('should map id, title and selected state to each received category', function() {
    expect(categoriesResponseReducer([], fetchCategoriesSuccess(mockCategoryData))).to.eql(mockCategoryState);
  });

  it('should update the "selected" property when a category is selected', function() {
    expect(categoriesResponseReducer(mockCategoryState, selectCategory('529ea59e-bf7e-11e5-840e-02fada0dd3b9'))).to.eql(mockUpdatedState)
  });

  it('should update all other "selected" properties to false when a category is selected', function() {
    const updatedCategoryState = categoriesResponseReducer(mockCategoryState, selectCategory('529ea59e-bf7e-11e5-840e-02fada0dd3b9'))
    const newUpdatedCategoryState = categoriesResponseReducer(mockCategoryState, selectCategory('01b06fa0-bf7e-11e5-9c1e-02fada0dd3b9'))
    expect(categoriesResponseReducer(updatedCategoryState, selectCategory('01b06fa0-bf7e-11e5-9c1e-02fada0dd3b9'))).to.eql(newUpdatedCategoryState);
  });

  it('should return the current state when passed an invalid or undefined action', function() {
    expect(categoriesResponseReducer(mockCategoryState)).to.equal(mockCategoryState);
  });
});

describe('productsReducer', function() {
  it('should return initial state when called with no arguments', function() {
    const products = productsResponseReducer();
    expect(Array.isArray(products)).to.equal(true);
    expect(products.length).to.equal(0);
  });

  it('should update productsAreLoading state when passed productsAreLoading action', function() {
    expect(productsAreLoadingReducer(false, productsAreLoading(true))).to.equal(true);
    expect(productsAreLoadingReducer(true, productsAreLoading(false))).to.equal(false);
  });

  it('should update productsHaveErrored state when passed productsHaveErrored action', function() {
    expect(productsHaveErroredReducer(false, productsHaveErrored(true))).to.equal(true);
    expect(productsHaveErroredReducer(true, productsHaveErrored(false))).to.equal(false);
  });

  it('should map id, title and description to each received product', function() {
    expect(productsResponseReducer([], fetchProductsSuccess(mockProductData))).to.eql(mockProductState);
  });

  it('should update the "descriptionVisible" property when a product is selected', function() {
    expect(productsResponseReducer(mockProductState, toggleProductVisibility('00a0130e-bfea-11e7-a2c2-0617e74d8914'))).to.eql(mockUpdatedProducts);
  });
});
