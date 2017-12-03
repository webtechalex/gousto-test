import React, {Component} from 'react';

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
        <ul>{
          this.props.categoriesResponse &&
          this.props.categoriesResponse.map(category =>
            <li className="category" key={category.id}>{category.title}</li>
          )
        }</ul>
      </div>
    );
  }
}

export default Categories;