import classNames from 'classnames';
import React from 'react';
import Button from './Button';

export interface PaginationProps {
  className?: string;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  totalPages: number;
}

export default function Pagination({
  className,
  currentPage = 0,
  onPageChange = () => {},
  size,
  totalPages,
}: PaginationProps) {
  const pageButtons = [];

  for (let i = 0; i < totalPages; i++) {
    pageButtons.push(
      <Button
        aria-label={`Page ${i + 1}`}
        className={classNames({ active: currentPage === i })}
        key={i}
        onClick={() => onPageChange(i)}
        variant="outline"
      >
        {i + 1}
      </Button>,
    );
  }

  return (
    <div
      className={classNames(
        'pagination',
        { [`pagination--${size}`]: size },
        className,
      )}
    >
      <Button
        aria-label="Previous Page"
        disabled={currentPage <= 0}
        icon="chevron_left"
        iconAlignment="only"
        onClick={() => onPageChange(currentPage - 1)}
        variant="outline"
      />
      {pageButtons}
      <Button
        aria-label="Next Page"
        disabled={currentPage >= totalPages - 1}
        icon="chevron_right"
        iconAlignment="only"
        onClick={() => onPageChange(currentPage + 1)}
        variant="outline"
      />
    </div>
  );
}
