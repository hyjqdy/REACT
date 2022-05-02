// root reducer
import {combineReducers} from 'redux';

import ContactReducers from './ContactReducer';

export default combineReducers({
    contacts: ContactReducers 
});

//import RootReducer from './redux/reducer' ==> index.js




 