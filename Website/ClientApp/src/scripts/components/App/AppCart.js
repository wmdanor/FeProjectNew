import PropTypes from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { CartActions } from '../../actions';
import Cart from '../Cart/Cart';

function AppCart({
  cartProducts,
  clearCart,
  removeProduct,
  setProductQuantity,
}) {
  return (
    <Cart
      cartProducts={cartProducts}
      setProductQuantity={setProductQuantity}
      removeProduct={removeProduct}
      clearCart={clearCart}
    />
  );
}

AppCart.propTypes = {
  cartProducts: PropTypes.instanceOf(Immutable.List),
  setProductQuantity: PropTypes.func,
  removeProduct: PropTypes.func,
  clearCart: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cartProducts: state.cart,
});

const usedActions = {
  setProductQuantity: CartActions.setQuantity,
  removeProduct: CartActions.removeItem,
  clearCart: CartActions.clear,
};

export default connect(mapStateToProps, usedActions)(AppCart);
