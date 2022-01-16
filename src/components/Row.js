import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Row = ({ children, className, gutters }) => {
  return (
    <div
      className={classNames(
        'row',
        { [`gutters-${gutters}`]: gutters },
        className
      )}
    >
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gutters: PropTypes.oneOf(['sm', 'md', 'lg', 'none']),
};

export default Row;
