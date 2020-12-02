import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { enterKeyHandler } from '../utils/eventHandlers';
import '../styles/clickable-div.css';

const ClickableDiv = ({ children, className, onClick, ...props }) => (
  <div
    {...props}
    className={classNames('clickable-div', className)}
    onClick={onClick}
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
  onClick: PropTypes.func,
};

export default ClickableDiv;
