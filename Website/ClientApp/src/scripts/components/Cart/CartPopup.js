import PropTypes from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';
import { CartPopupActions } from '../../actions';
import AppCart from '../App/AppCart';
import './CartPopup.scss';

class CartPopup extends React.Component {
  constructor(props) {
    super(props);

    this.hidePopupHandler = (e) => {
      e.preventDefault();
      this.props.hidePopup();
    };
  }

  render() {
    if (!this.props.isShown) {
      console.log('no popup')
      return null;
    }

    console.log('popup')

    return (
      <div className="cart-popup-wrapper">
        <div className="cart-popup">
          <button type="button" onClick={this.hidePopupHandler}>
            Close
          </button>
          <AppCart />
        </div>
      </div>
    );
  }
}

CartPopup.propTypes = {
  isShown: PropTypes.bool,
  hidePopup: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isShown: state.cartPopup.get('shown'),
});

const usedActions = {
  hidePopup: CartPopupActions.hide,
};

export default connect(mapStateToProps, usedActions)(CartPopup);
