import {expect} from 'chai';

import {categoriesReducer} from '../src/reducers';
import {fetchCategoriesSuccess, updateCategory} from '../src/actions';
import {mockCategoryData, mockCategoryState, mockUpdatedState} from './mocks';

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
    expect(categoriesReducer(mockCategoryState, updateCategory('529ea59e-bf7e-11e5-840e-02fada0dd3b9'))).to.eql(mockUpdatedState)
  });

  it('should update all other "selected" properties to false when a category is selected', function() {
    const updatedCategoryState = categoriesReducer(mockCategoryState, updateCategory('529ea59e-bf7e-11e5-840e-02fada0dd3b9'))
    const newUpdatedCategoryState = categoriesReducer(mockCategoryState, updateCategory('01b06fa0-bf7e-11e5-9c1e-02fada0dd3b9'))
    expect(categoriesReducer(updatedCategoryState, updateCategory('01b06fa0-bf7e-11e5-9c1e-02fada0dd3b9'))).to.eql(newUpdatedCategoryState);
  });

  it('should return the current state when passed an invalid or undefined action', function() {
    expect(categoriesReducer(mockCategoryState)).to.equal(mockCategoryState);
  });
});
