import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { enterKeyHandler } from '../utils';

function ClickableDiv({
  children,
  className,
  external,
  history,
  link,
  linkTarget = '_blank',
  onClick,
  ...props
}) {
  return (
    <div
      {...props}
      className={classNames(className, 'cursor-pointer')}
      onClick={(event) => {
        if (history && link && !external) {
          history.push(link);
        } else if (typeof window !== 'undefined' && link && external) {
          window.open(link, linkTarget);
        }
        if (onClick) {
          onClick(event);
        }
      }}
      onKeyDown={enterKeyHandler(onClick)}
      role="button"
      tabIndex="0"
    >
      {children}
    </div>
  );
}

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
