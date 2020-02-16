import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TableDisplay = (props) => {
  const { columns, data } = props;
  console.log('--== TableDisplay --= ', columns, data);
  return (
    <div className="tbl">Display Table</div>
  );
};

TableDisplay.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape).isRequired
};
