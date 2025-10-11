import classNames from 'classnames';
import React, { useMemo } from 'react';
import Button from './Button';
import type { SemanticColorToken } from '../types';
import { clamp } from '../utils';

export interface PaginationProps {
  activeColor?: SemanticColorToken;
  adjacentPageCount?: number;
  className?: string;
  currentPage?: number;
  hidePageButtons?: boolean;
  marginPageCount?: number;
  onPageChange?: (page: number) => void;
  pageCount?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'buttons' | 'text';
}

export default function Pagination({
  activeColor = 'default',
  adjacentPageCount = 2,
  className,
  currentPage = 1,
  hidePageButtons = false,
  marginPageCount = 1,
  onPageChange = () => {},
  pageCount = 1,
  size,
  variant = 'buttons',
}: PaginationProps) {
  const pageNumbers = useMemo(
    () =>
      getPageNumbers(
        currentPage,
        pageCount,
        adjacentPageCount,
        marginPageCount,
      ),
    [currentPage, pageCount, adjacentPageCount, marginPageCount],
  );
  return (
    <div
      className={classNames(
        'pagination',
        { [`pagination--${variant}`]: variant },
        className,
      )}
    >
      <Button
        aria-label="Previous Page"
        className="pagination__previous-button"
        disabled={currentPage <= 1}
        icon="chevron_left"
        iconAlignment={variant === 'text' ? 'leading' : 'only'}
        onClick={() => onPageChange(currentPage - 1)}
        size={size}
        variant={variant === 'text' ? 'text' : 'outline'}
      >
        Previous
      </Button>
      {!hidePageButtons &&
        pageNumbers.map((page, index) => {
          const active = currentPage === page;
          const variantType = variant === 'text' ? 'text' : 'outline';
          return isNaN(page) ? (
            <Button
              aria-hidden
              className="pagination__ellipsis"
              disabled
              key={index}
              size={size}
              variant="text"
            >
              ...
            </Button>
          ) : (
            <Button
              aria-label={`Page ${page}`}
              className={classNames('pagination__page-button', { active })}
              color={active ? activeColor : undefined}
              key={index}
              onClick={() => onPageChange(page)}
              size={size}
              variant={active ? 'outline' : variantType}
            >
              {page}
            </Button>
          );
        })}
      <Button
        aria-label="Next Page"
        className="pagination__next-button"
        disabled={currentPage >= pageCount}
        icon="chevron_right"
        iconAlignment={variant === 'text' ? 'trailing' : 'only'}
        onClick={() => onPageChange(currentPage + 1)}
        size={size}
        variant={variant === 'text' ? 'text' : 'outline'}
      >
        Next
      </Button>
    </div>
  );
}

function getPageNumbers(
  currentPage: number,
  pageCount: number,
  adjacentPageCount: number,
  marginPageCount: number,
) {
  const pageNumbers = [];

  // clamp current page to valid range after accounting for margins
  currentPage = clamp(
    currentPage,
    Math.min(1 + marginPageCount + adjacentPageCount, pageCount),
    Math.max(pageCount - marginPageCount - adjacentPageCount, 1),
  );

  // insert current page
  if (currentPage > 0 && currentPage <= pageCount) {
    pageNumbers.push(currentPage);
  }

  // insert adjacent pages
  for (let i = 1; i <= adjacentPageCount; i++) {
    const l = currentPage - i;
    const r = currentPage + i;
    if (l > 0 && l < currentPage) {
      pageNumbers.unshift(l);
    }
    if (r > currentPage && r <= pageCount) {
      pageNumbers.push(r);
    }
  }

  // insert margin pages
  for (let i = marginPageCount; i >= 1; i--) {
    const l = i;
    const r = pageCount - i + 1;
    if (!pageNumbers.includes(l) && l > 0 && l < currentPage) {
      pageNumbers.unshift(l);
    }
    if (!pageNumbers.includes(r) && r > currentPage && r <= pageCount) {
      pageNumbers.push(r);
    }
  }

  // insert intermediate ellipsis
  for (let i = 1; i < pageNumbers.length; i++) {
    if (pageNumbers[i] - pageNumbers[i - 1] > 1) {
      pageNumbers.splice(i, 0, NaN);
      i++;
    }
  }

  // insert margin ellipsis
  if (marginPageCount === 0) {
    if (pageNumbers[0] > 1) {
      pageNumbers.unshift(NaN);
    }
    if (pageNumbers[pageNumbers.length - 1] < pageCount) {
      pageNumbers.push(NaN);
    }
  }

  return pageNumbers;
}
