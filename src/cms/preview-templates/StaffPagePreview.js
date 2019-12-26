import React from 'react';
import PropTypes from 'prop-types';
import { StaffPageTemplate } from '../../templates/staff-page';

const StaffPagePreview = ({ entry, widgetFor }) => (
  <StaffPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

StaffPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default StaffPagePreview;
