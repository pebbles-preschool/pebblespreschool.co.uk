import React from 'react';
import PropTypes from 'prop-types';
import { StaffPageTemplate } from '../../templates/staff-page';

const StaffPagePreview = ({ entry, widgetFor }) => {
  const entryStaff = entry.getIn(['data', 'staff']);
  const staff = entryStaff ? entryStaff.toJS() : [];

  return (
    <StaffPageTemplate
      title={entry.getIn(['data', 'title'])}
      staff={staff}
      content={widgetFor('body')}
    />
  );
};

StaffPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default StaffPagePreview;
