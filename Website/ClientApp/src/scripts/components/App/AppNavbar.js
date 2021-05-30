import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Navbar,
  NavbarGroup,
  NavbarDropdown,
  NavbarItem,
  NavbarLink,
} from '../Navbar';
import { DropdownItem, DropdownList, DropdownToggle } from '../Dropdown';
import { CartPopupActions } from '../../actions';

function AppNavbar({ isShown, showCart, hideCart }) {
  const showCartHandler = (e) => {
    e.preventDefault();
    showCart();
  };

  const hideCartHandler = (e) => {
    e.preventDefault();
    hideCart();
  };

  return (
    <Navbar>
      <NavbarGroup>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarDropdown>
          <DropdownToggle>Dropdown</DropdownToggle>
          <DropdownList>
            <DropdownItem>One</DropdownItem>
            <DropdownItem>Two</DropdownItem>
          </DropdownList>
        </NavbarDropdown>
      </NavbarGroup>
      <NavbarGroup align={NavbarGroup.alignModes.end}>
        <NavbarItem>
          <button type="button" onClick={showCartHandler}>
            Cart
          </button>
          <button type="button" onClick={hideCartHandler}>
            Hide cart
          </button>
        </NavbarItem>
      </NavbarGroup>
    </Navbar>
  );
}

AppNavbar.propTypes = {
  isShown: PropTypes.bool,
  showCart: PropTypes.func,
  hideCart: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isShown: state.cartPopup.get('shown'),
});

const usedActions = {
  showCart: CartPopupActions.show,
  hideCart: CartPopupActions.hide,
};

export default connect(mapStateToProps, usedActions)(AppNavbar);

// export default AppNavbar;
