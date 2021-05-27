import { combineReducers } from 'redux';
import CartReducer from './CartReducer';

// The key of this object will be the name of the store
const RootReducer = combineReducers({ cart: CartReducer });

export default RootReducer;
