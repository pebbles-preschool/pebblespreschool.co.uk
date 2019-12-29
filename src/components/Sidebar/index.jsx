import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Layer } from 'grommet';
import { Close as CloseIcon } from 'grommet-icons';

const Sidebar = ({ isOpen, closeHandler }) => {
  return (
    <>
      {isOpen && (
        <Layer
          position="left"
          full="vertical"
          modal
          onClickOutside={closeHandler}
          onEsc={closeHandler}
        >
          <Box background="brand" fill="vertical" width="300px">
            <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
              <Button onClick={closeHandler}>
                <CloseIcon />
              </Button>
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
};

Sidebar.defaultProps = {
  isOpen: false,
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  closeHandler: PropTypes.func.isRequired,
};

export default Sidebar;
