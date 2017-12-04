import React from 'react';

function Product(props) {
  return (
    <li className={`product ${props.descriptionVisible ? 'selected' : ''}`} onClick={() => props.toggleProductVisibility(props.productId)}>
      {props.title}
      {props.descriptionVisible && <p>{props.description}</p>}
    </li>
  );
}

export default Product;