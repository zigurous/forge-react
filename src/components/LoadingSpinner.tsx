import classNames from 'classnames';
import React from 'react';

export interface LoadingSpinnerProps {
  className?: string;
  loading?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function LoadingSpinner({
  className,
  loading = true,
  size,
}: LoadingSpinnerProps) {
  return (
    <div
      aria-hidden
      className={classNames(
        'loading-spinner',
        { [`loading-spinner--${size}`]: size },
        { hidden: !loading },
        className,
      )}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
