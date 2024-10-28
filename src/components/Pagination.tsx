import classNames from 'classnames';
import React from 'react';
import Button from './Button';

export interface PaginationProps {
  className?: string;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  totalPages: number;
}

export default function Pagination({
  className,
  currentPage = 0,
  onPageChange = () => {},
  totalPages,
}: PaginationProps) {
  const pageButtons = [];

  for (let i = 0; i < totalPages; i++) {
    pageButtons.push(
      <Button
        className={classNames({ active: currentPage === i })}
        key={i}
        onClick={() => onPageChange(i)}
        size="md"
        variant="outline"
      >
        {i + 1}
      </Button>,
    );
  }

  return (
    <div className={classNames('pagination', className)}>
      <Button
        disabled={currentPage <= 0}
        icon="chevron_left"
        iconAlignment="only"
        onClick={() => onPageChange(currentPage - 1)}
        size="md"
        variant="outline"
      />
      {pageButtons}
      <Button
        disabled={currentPage >= totalPages - 1}
        icon="chevron_right"
        iconAlignment="only"
        onClick={() => onPageChange(currentPage + 1)}
        size="md"
        variant="outline"
      />
    </div>
  );
}
