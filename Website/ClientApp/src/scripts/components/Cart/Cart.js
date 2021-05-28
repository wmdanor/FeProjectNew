import PropTypes from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { CartActions } from '../../actions';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.clearCartHandler = (e) => {
      e.preventDefault();
      this.props.clearCart();
    };

    this.removeHandler = (product) => (e) => {
      e.preventDefault();
      this.props.removeProduct(product);
    };

    this.quantityChangeHandler = (product) => (e) => {
      this.props.setProductQuantity(product, e.target.value);
    };
  }

  calculateSum() {
    let sum = 0;
    this.props.cartProducts.forEach((productInfo) => {
      sum += productInfo.product.price * productInfo.quantity;
    });
    return sum;
  }

  render() {
    const { cartProducts } = this.props;

    return (
      <div>
        <button type="button" onClick={this.clearCartHandler}>
          Clear cart
        </button>
        <ul>
          {cartProducts.map((productInfo) => (
            <CartItem
              info={productInfo}
              removeHandler={this.removeHandler}
              quantityChangeHandler={this.quantityChangeHandler}
            />
          ))}
        </ul>
        <span>Sum - {this.calculateSum()}</span>
      </div>
    );
  }
}

Cart.propTypes = {
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

export default connect(mapStateToProps, usedActions)(Cart);
