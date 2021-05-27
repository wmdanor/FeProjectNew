const CartActions = {
  addItem(item) {
    return {
      type: 'ADD_ITEM',
      item,
    };
  },

  removeItem(item) {
    return {
      type: 'REMOVE_ITEM',
      item,
    };
  },

  increase(item) {
    return {
      type: 'INCREASE',
      item,
    };
  },

  decrease(item) {
    return {
      type: 'DECREASE',
      item,
    };
  },

  clear(item) {
    return {
      type: 'CLEAR',
      item,
    };
  },
};

export default CartActions;
