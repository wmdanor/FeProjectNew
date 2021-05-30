import PropTypes from 'prop-types';
import * as React from 'react';

function CartItem({ info, quantityChangeHandler, removeHandler }) {
  const { product, quantity } = info;

  return (
    <div>
      <span>
        {product.name} - {product.price} *
        <input
          type="number"
          value={quantity}
          min="0"
          onChange={quantityChangeHandler(product)}
        />
        = {product.price * quantity}
      </span>
      <button type="button" onClick={removeHandler(product)}>
        Remove
      </button>
    </div>
  );
}

CartItem.propTypes = {
  info: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  removeHandler: PropTypes.func.isRequired,
  quantityChangeHandler: PropTypes.func.isRequired,
};

export default CartItem;
