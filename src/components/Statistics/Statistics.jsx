import React from 'react';
import PropTypes from 'prop-types';

export default function Statistics({ options, total, percentage }) {
  return (
    <ul>
      {Object.entries(options).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
      <li>Total: {total}</li>
      <li>Positive feedback: {total === 0 ? 0 : percentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
