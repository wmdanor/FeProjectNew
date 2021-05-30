import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import CartPopupReducer from './CartPopupReducer';

// The key of this object will be the name of the store
const RootReducer = combineReducers({
  cart: CartReducer,
  cartPopup: CartPopupReducer,
});

export default RootReducer;
