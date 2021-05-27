import { Map } from 'immutable';

const CartReducer = (state = Map(), action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state;
    default:
      return state;
  }
};

export default CartReducer;
