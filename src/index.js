import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import productSearchApp from './reducers';

const store = createStore(productSearchApp, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <h1>Hello World!</h1>
  </Provider>,
  document.getElementById('app')
);
