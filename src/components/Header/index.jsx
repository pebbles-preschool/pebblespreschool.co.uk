import PropTypes from 'prop-types';
import React from 'react';
import { Box, Button, Heading, Image } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import logo from '../../img/logo.svg';

const Header = ({ siteTitle, openSidebarHandler }) => (
  <Box
    align="center"
    background="light-2"
    direction="row"
    elevation="medium"
    fill="horizontal"
    height="60px"
    justify="between"
    pad={{ vertical: 'small', horizontal: 'medium' }}
    style={{ position: 'fixed', top: 0 }}
    tag="header"
  >
    <Image src={logo} alt="Pebbles Pre-school" />
    <Button color="primary" onClick={openSidebarHandler}>
      <MenuIcon />
    </Button>
    <Heading level="3" margin="none">
      {siteTitle}
    </Heading>
    <Button color="primary" label="Enquire" />
  </Box>
);

Header.defaultProps = {
  siteTitle: ``,
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  openSidebarHandler: PropTypes.func.isRequired,
};

export default Header;
