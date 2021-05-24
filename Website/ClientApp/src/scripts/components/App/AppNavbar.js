import * as React from 'react';
import { Navbar, NavbarDropdown, NavbarLink } from '../Navbar';
import { DropdownItem, DropdownList, DropdownToggle } from '../Dropdown';

function AppNavbar() {
  return (
    <Navbar>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
      <NavbarDropdown>
        <DropdownToggle>Dropdown</DropdownToggle>
        <DropdownList>
          <DropdownItem>One</DropdownItem>
          <DropdownItem>Two</DropdownItem>
        </DropdownList>
      </NavbarDropdown>
    </Navbar>
  );
}

export default AppNavbar;
