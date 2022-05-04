import './App.css';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import {userReducer} from './redux/Reducers';

import Users from './Users';

const store = createStore(userReducer, 
   compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()));

function App() {
  return (
    <Provider store={store}>
      <h1> Thunk Example</h1>
      <Users />
    </Provider>
  );
}

export default App;
