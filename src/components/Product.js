import React from 'react';

function Product(props) {
  return (
    <li onClick={() => props.toggleProductVisibility(props.productId)}>
      {props.title}
      {props.descriptionVisible && <p>{props.description}</p>}
    </li>
  );
}

export default Product;