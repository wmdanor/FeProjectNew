import PropTypes from 'prop-types';
import * as React from 'react';

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

export default Navbar;
