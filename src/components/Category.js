import React from 'react';

function Category(props) {
  return (
    <li className={`category ${props.selected ? 'selected' : ''}`} onClick={() => props.selectCategory(props.categoryId)}>
      {props.title}
    </li>
  );
}

export default Category;