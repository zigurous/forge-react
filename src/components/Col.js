import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = (name, obj) => {
  if (typeof obj === 'boolean') {
    return {
      [`col-${name}`]: obj,
    };
  }

  if (typeof obj === 'number' || typeof obj === 'string') {
    return {
      [`col-${name}-${obj}`]: true,
    };
  }

  if (typeof obj === 'object' && obj) {
    const { size, order, offset } = obj;
    return {
      [`col-${name}`]: typeof size === 'undefined',
      [`col-${name}-${size}`]: typeof size !== 'undefined',
      [`order-${name}-${order}`]: typeof order !== 'undefined',
      [`offset-${name}-${offset}`]: typeof offset !== 'undefined',
    };
  }

  return null;
};

const Col = ({ children, className, gutters, sm, md, lg, xl }) => {
  return (
    <div
      className={classNames(
        { col: !sm && !md && !lg && !xl },
        getClassNames('sm', sm),
        getClassNames('md', md),
        getClassNames('lg', lg),
        getClassNames('xl', xl),
        { [`gutters-${gutters}`]: gutters },
        className
      )}
    >
      {children}
    </div>
  );
};

const ColPropTypes = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    order: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
]);

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gutters: PropTypes.oneOf(['sm', 'md', 'lg', 'none']),
  sm: ColPropTypes,
  md: ColPropTypes,
  lg: ColPropTypes,
  xl: ColPropTypes,
};

export default Col;
