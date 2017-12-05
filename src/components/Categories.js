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
    console.log(this.props.categoriesResponse);
    return (
      <div>
        {this.props.categoriesAreLoading && <p>Loading categories...</p>}
        <ul>
          {this.props.categoriesResponse &&
            this.props.categoriesResponse.map(category =>
              <Category
                key={category.id}
                categoryId={category.id}
                title={category.title}
                selected={category.selected}
              />
            )
          }
        </ul>
      </div>
    );
  }
}

export default Categories;