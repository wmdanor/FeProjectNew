import PropTypes from 'prop-types';
import * as React from 'react';
import './Product.scss';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.addToCartHandler = (product) => (e) => {
      e.preventDefault();
      this.props.incrementProduct(product);
    };

    this.addMoreHandler = (product) => (e) => {
      e.preventDefault();
      this.props.incrementProduct(product);
    };
  }

  // isInCart(product) {
  //   const { cartProducts } = this.props;
  //   return (
  //     cartProducts.findIndex((item) => item.product.id === product.id) !== -1
  //   );
  // }

  getButton(product) {
    if (this.props.isInCart(product)) {
      return (
        <button
          className="button button-green"
          type="button"
          onClick={this.addMoreHandler(product)}
        >
          Add more
        </button>
      );
    }
    return (
      <button
        className="button button-green"
        type="button"
        onClick={this.addToCartHandler(product)}
      >
        Add to cart
      </button>
    );
  }

  render() {
    const { product } = this.props;
    return (
      <div className="product" key={product.id}>
        <img
          className="product-image"
          src={product.imageUrl}
          alt={product.name}
        />
        <h3 className="product-name">{product.name}</h3>
        <div className="product-prices">
          <p>
            <span>{product.price}</span>
            &nbsp;
            <i className="product-prices-currency" />
          </p>
          {this.getButton(product)}
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  // product: PropTypes.object.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  // cartProducts: PropTypes.instanceOf(Immutable.List),
  isInCart: PropTypes.func.isRequired,
  incrementProduct: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   cartProducts: state.cart,
// });
//
// const usedActions = {
//   incrementProduct: CartActions.increase,
// };
//
// export default connect(mapStateToProps, usedActions)(Product);
export default Product;
