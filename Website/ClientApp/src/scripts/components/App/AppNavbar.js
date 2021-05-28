import * as React from 'react';
import {
  Navbar,
  NavbarGroup,
  NavbarDropdown,
  NavbarItem,
  NavbarLink,
} from '../Navbar';
import { DropdownItem, DropdownList, DropdownToggle } from '../Dropdown';

function AppNavbar() {
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
        <NavbarItem>Fuck you</NavbarItem>
      </NavbarGroup>
    </Navbar>
  );
}

export default AppNavbar;
