import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import * as React from 'react';

function NavbarItem(props) {
  return <li className="navbar-item">{props.children}</li>;
}

NavbarItem.propTypes = {
  children: PropTypes.node,
};

function NavbarLink(props) {
  return (
    <NavbarItem>
      <NavLink
        className="navbar-link"
        activeClassName="active"
        exact
        to={props.to}
      >
        {props.children}
      </NavLink>
    </NavbarItem>
  );
}

NavbarLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

// -----------------------------------------------------------------------------

function NavbarDropdown(props) {
  return <NavbarItem className="dropdown">{props.children}</NavbarItem>;
}

NavbarDropdown.propTypes = {
  children: PropTypes.node,
};

function Navbar(props) {
  return (
    <nav className="navbar-wrapper">
      <ul className="navbar">{props.children}</ul>
    </nav>
  );
}

Navbar.propTypes = {
  children: PropTypes.node,
};

// -----------------------------------------------------------------------------

export { NavbarItem, NavbarLink, NavbarDropdown, Navbar };
