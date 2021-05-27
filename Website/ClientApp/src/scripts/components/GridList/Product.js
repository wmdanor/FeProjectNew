﻿import PropTypes from 'prop-types';
import * as React from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { CartActions } from '../../actions';

const productStyle = {
  padding: '5px',
  border: '1px solid black',
};

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  addToCartHandler(product) {
    return (e) => {
      e.preventDefault();
      this.props.incrementProduct(product);
    };
  }

  addMoreHandler(product) {
    return (e) => {
      e.preventDefault();
      this.props.incrementProduct(product);
    };
  }

  isInCart(product) {
    const { cartProducts } = this.props;
    return (
      cartProducts.findIndex((item) => item.product.id === product.id) !== -1
    );
  }

  getButton(product) {
    if (this.isInCart(product)) {
      return (
        <button type="button" onClick={this.addMoreHandler(product)}>
          Add more
        </button>
      );
    }
    return (
      <button type="button" onClick={this.addToCartHandler(product)}>
        Add to cart
      </button>
    );
  }

  render() {
    const { product } = this.props;
    return (
      <div key={product.id} style={productStyle}>
        <p>Id - {product.id}</p>
        <p>Name - {product.name}</p>
        <p>Price - {product.price}</p>
        {this.getButton(product)}
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  cartProducts: PropTypes.instanceOf(Immutable.List),
  incrementProduct: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cartProducts: state.cart,
});

const usedActions = {
  incrementProduct: CartActions.increase,
};

export default connect(mapStateToProps, usedActions)(Product);