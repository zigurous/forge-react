import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { enterKeyHandler } from '../utils/events';

const ClickableDiv = ({
  children,
  className,
  external,
  history,
  link,
  linkTarget = '_blank',
  onClick,
  ...props
}) => (
  <div
    {...props}
    className={classNames(className, 'cursor-pointer')}
    onClick={(event) => {
      if (onClick) {
        onClick(event);
      } else if (history && link && !external) {
        history.push(link);
      } else if (typeof window !== 'undefined' && link && external) {
        window.open(link, linkTarget);
      }
    }}
    onKeyDown={enterKeyHandler(onClick)}
    role="button"
    tabIndex="0"
  >
    {children}
  </div>
);

ClickableDiv.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  external: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  link: PropTypes.string,
  linkTarget: PropTypes.string,
  onClick: PropTypes.func,
};

export default ClickableDiv;
