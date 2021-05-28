import PropTypes from 'prop-types';
import * as React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: this.props.info.quantity,
    };

    this.quantityChangeHandler = (product) => (e) => {
      this.setState({
        quantity: e.target.value,
      });
      this.props.quantityChangeHandler(product)(e);
    };
  }

  render() {
    const { product, quantity } = this.props.info;

    return (
      <div>
        <span>
          {product.name} - {product.price} *
          <input
            type="number"
            value={this.state.quantity}
            min="0"
            onChange={this.quantityChangeHandler(product)}
          />
          = {product.price * quantity}
        </span>
        <button type="button" onClick={this.props.removeHandler(product)}>
          Remove
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  info: PropTypes.object.isRequired,
  removeHandler: PropTypes.func.isRequired,
  quantityChangeHandler: PropTypes.func.isRequired,
};

export default CartItem;
