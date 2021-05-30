import PropTypes from 'prop-types';
import * as React from 'react';
import Immutable from 'immutable';
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
      const number = parseInt(e.target.value, 10);
      this.props.setProductQuantity(product, Number.isNaN(number) ? 0 : number);
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
  cartProducts: PropTypes.instanceOf(Immutable.List).isRequired,
  setProductQuantity: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   cartProducts: state.cart,
// });
//
// const usedActions = {
//   setProductQuantity: CartActions.setQuantity,
//   removeProduct: CartActions.removeItem,
//   clearCart: CartActions.clear,
// };
//
// export default connect(mapStateToProps, usedActions)(Cart);
export default Cart;
