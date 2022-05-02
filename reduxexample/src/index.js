import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';

import {createStore, compose} from 'redux';

import rootReducer from './redux/reducer';

const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
 