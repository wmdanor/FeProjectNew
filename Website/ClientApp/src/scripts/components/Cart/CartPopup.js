import PropTypes from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';
import { CartPopupActions } from '../../actions';
import AppCart from '../App/AppCart';
import './CartPopup.scss';

function CartPopup({ isShown, hidePopup }) {
  const hidePopupHandler = (e) => {
    e.preventDefault();
    hidePopup();
  };

  const shownClass = isShown ? ' shown' : '';

  return (
    <div className={`cart-popup-wrapper${shownClass}`}>
      <div className={`cart-popup${shownClass}`}>
        <div className="cart-popup-header">
          <button type="button" onClick={hidePopupHandler}>
            Close
          </button>
        </div>
        <AppCart hidePopup={hidePopup} />
      </div>
    </div>
  );
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
