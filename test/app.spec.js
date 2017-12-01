import {expect} from 'chai';

import {categoriesReducer} from '../src/reducers';
import {fetchCategoriesSuccess} from '../src/actions';
import {mockCategoryData, mockCategoryState} from './mocks';

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
});
