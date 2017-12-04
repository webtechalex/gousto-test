import React, {Component} from 'react';

import Category from './Category';

class Categories extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    return (
      <div>
        {this.props.categoriesAreLoading && <p>Loading categories...</p>}
        <ul>
          {this.props.categoriesResponse &&
          this.props.categoriesResponse.map(category =>
            <Category key={category.id} title={category.title} />
          )}
        </ul>
      </div>
    );
  }
}

export default Categories;