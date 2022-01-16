import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function Container({ children, className, fluid }) {
  return (
    <div
      className={classNames(
        { container: !fluid },
        { [`container-${fluid}`]: fluid && typeof fluid === 'string' },
        { 'container-fluid': fluid && typeof fluid === 'boolean' },
        className
      )}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'fluid']),
  ]),
};

export default Container;
