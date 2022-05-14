import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function Stack({
  alignItems,
  children,
  direction = 'column',
  justifyContent,
  reversed = false,
  wrap = false,
}) {
  return (
    <div
      className={classNames(
        'display-flex',
        {
          'flex-row': direction === 'row' && !reversed,
          'flex-row-reverse': direction === 'row' && reversed,
          'flex-column': direction === 'column' && !reversed,
          'flex-column-reverse': direction === 'column' && reversed,
          'flex-wrap': wrap,
        },
        {
          [`justify-content-${justifyContent}`]: justifyContent,
          [`align-items-${alignItems}`]: alignItems,
        }
      )}
    >
      {children}
    </div>
  );
}

Stack.direction = Object.freeze({
  row: 'row',
  column: 'column',
});

Stack.alignItems = Object.freeze({
  start: 'start',
  end: 'end',
  center: 'center',
  stretch: 'stretch',
  baseline: 'baseline',
});

Stack.justifyContent = Object.freeze({
  start: 'start',
  end: 'end',
  center: 'center',
  between: 'between',
  around: 'around',
  evenly: 'evenly',
});

Stack.propTypes = {
  alignItems: PropTypes.oneOf(Object.values(Stack.alignItems)),
  children: PropTypes.node,
  direction: PropTypes.oneOf(Object.values(Stack.direction)),
  justifyContent: PropTypes.oneOf(Object.values(Stack.justifyContent)),
  reversed: PropTypes.bool,
  wrap: PropTypes.bool,
};

export default Stack;
