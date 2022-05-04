import './App.css';

import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './redux/saga'; // index.js

import {Provider} from 'react-redux';

import {userReducer} from './redux/Reducers';

import Users from './Users.js';

// saga config
    const sagaMiddleWare = createSagaMiddleWare();
// end saga config

const store = createStore(userReducer, 
   compose(applyMiddleware(sagaMiddleWare), window.__REDUX_DEVTOOLS_EXTENSION__()));

   // saga config
        sagaMiddleWare.run(rootSaga);
   // end saga config

function App() {
  return (
    <Provider store={store}>
      <h1> Thunk Example</h1>
      <Users />
    </Provider>
  );
}

export default App;
