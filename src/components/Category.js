import React from 'react';

function Category(props) {
  return (
    <li className="category">
      {props.title}
    </li>
  );
}

export default Category;