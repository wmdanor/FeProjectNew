import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as React from 'react';

function DropdownToggle(props) {
  return <span className="dropdown-toggle">{props.children}</span>;
}

DropdownToggle.propTypes = {
  children: PropTypes.node,
};

function DropdownItem(props) {
  return <li className="dropdown-item">{props.children}</li>;
}

DropdownItem.propTypes = {
  children: PropTypes.node,
};

function DropdownLink(props) {
  return (
    <DropdownItem>
      <Link to={props.to}>{props.children}</Link>
    </DropdownItem>
  );
}

DropdownLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

function DropdownList(props) {
  return <ul className="dropdown-list">{props.children}</ul>;
}

DropdownList.propTypes = {
  children: PropTypes.node,
};

function Dropdown(props) {
  return <div className="dropdown">{props.children}</div>;
}

Dropdown.propTypes = {
  children: PropTypes.node,
};

export { DropdownToggle, DropdownItem, DropdownLink, DropdownList, Dropdown };
