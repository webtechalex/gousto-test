import React from 'react';

function ProductSearchInput(props) {
  return (<input value={props.productSearchInput} onChange={(event) => props.updateProductSearchInputValue(event.target.value)} />);
}

export default ProductSearchInput;