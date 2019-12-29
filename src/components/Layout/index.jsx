import React, { useState } from 'react';
import { Box, Grommet } from 'grommet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import GlobalStyles from '../GlobalStyles';
import Header from '../Header';
import Sidebar from '../Sidebar';
import theme from '../../theme';

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Grommet theme={theme} full>
          <GlobalStyles />
          <Sidebar isOpen={isSidebarOpen} closeHandler={() => setSidebarOpen(false)} />
          <Box pad={{ top: '60px' }} style={{ minHeight: '100vh' }}>
            <Header
              siteTitle={data.site.siteMetadata.title}
              openSidebarHandler={() => setSidebarOpen(true)}
            />
            <Box
              background="light-3"
              flex
              pad={{ vertical: 'small', horizontal: 'medium' }}
              tag="main"
            >
              {children}
            </Box>
            <Box
              align="center"
              background="light-2"
              direction="row"
              justify="between"
              pad={{ vertical: 'small', horizontal: 'medium' }}
              tag="footer"
            >
              © {new Date().getFullYear()} {data.site.siteMetadata.title}
            </Box>
          </Box>
        </Grommet>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
