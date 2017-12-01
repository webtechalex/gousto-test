import {expect} from 'chai';

import {categoriesReducer} from '../src/reducers';

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
});
