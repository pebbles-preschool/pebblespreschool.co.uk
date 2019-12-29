import React from 'react';
import { Link } from 'gatsby';

const NavItem = ({ to, children }) => (
  <Link to={to} mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Link>
);

export default NavItem;
