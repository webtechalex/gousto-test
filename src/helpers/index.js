function getSelectedCategory(categories) {
  const findSelectedCategory = categories.filter(category => category.selected === true);
  return findSelectedCategory[0] || null;
}

function filterProductsBySelection(products, selectedCategory, inputValue) {
  if (inputValue) {
    return products.filter(product => product.title.indexOf(inputValue) > -1)
  }
  if (selectedCategory) {
    return products.filter(product => product.categories.some(category => category.id === selectedCategory.id))
  }
  return products;
}

export {
  getSelectedCategory,
  filterProductsBySelection
}