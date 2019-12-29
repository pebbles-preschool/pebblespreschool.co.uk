import React from 'react';
import NavItem from './NavItem';
import logo from '../img/logo.svg';

const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <div
      as="header"
      height="16"
      background="white"
      width="full"
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      position="fixed"
      top="0"
      pl="6"
      pr="6"
    >
      <div align="center" flexGrow={1}>
        <div src={logo} alt="Pebbles Pre-school" height="10" mr={12} />
        <div as="nav" display="flex" flexGrow={1}>
          <NavItem to="/about">About us</NavItem>
          <NavItem to="/staff">Staff</NavItem>
          <NavItem to="/policies">Policies</NavItem>
          <NavItem to="/news">News</NavItem>
        </div>
      </div>
      <div align="center">
        <div mr={6}>01787 880675</div>
        <div bg="transparent" border="1px">
          Contact us
        </div>
      </div>
    </div>
  );
};

export default Header;
