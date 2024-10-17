import classNames from 'classnames';
import React from 'react';

export interface LoadingSpinnerProps {
  className?: string;
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function LoadingSpinner({
  className,
  loading = true,
  size = 'md',
}: LoadingSpinnerProps) {
  return (
    <div
      aria-hidden
      className={classNames('loading-spinner', { loading }, size, className)}
    >
      <div className="loading-spinner__animation">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
