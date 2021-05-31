import PropTypes from 'prop-types';
import * as React from 'react';

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">{props.children}</div>
    </nav>
  );
}

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
