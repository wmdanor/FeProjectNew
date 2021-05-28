import PropTypes from 'prop-types';
import * as React from 'react';

function Navbar(props) {
  return <nav className="navbar">{props.children}</nav>;
}

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
