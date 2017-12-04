import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchCategories, selectCategory} from '../actions';
import Categories from './Categories';

const mapStateToProps = (state) => ({
  categoriesAreLoading: state.categoriesAreLoading,
  categoriesHaveErrored: state.categoriesHaveErrored,
  categoriesResponse: state.categoriesResponse
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCategories,
    selectCategory
  }, dispatch);
};

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);

export default CategoriesContainer;