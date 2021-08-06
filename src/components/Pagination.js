import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import '../styles/pagination.css';

const Pagination = ({
  className,
  currentPage = 0,
  onPageChange = () => {},
  totalPages,
}) => {
  const pageButtons = [];

  for (let i = 0; i < totalPages; i++) {
    pageButtons.push(
      <Button
        className={classNames({ active: currentPage === i })}
        key={i}
        onClick={() => onPageChange(i)}
        size="md"
        style={Button.style.outline}
      >
        {i + 1}
      </Button>
    );
  }

  return (
    <div className={classNames('pagination', className)}>
      <Button
        disabled={currentPage <= 0}
        icon="only"
        iconName="chevron_left"
        onClick={() => onPageChange(currentPage - 1)}
        size="md"
        style={Button.style.outline}
      />
      {pageButtons}
      <Button
        disabled={currentPage >= totalPages - 1}
        icon="only"
        iconName="chevron_right"
        onClick={() => onPageChange(currentPage + 1)}
        size="md"
        style={Button.style.outline}
      />
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
