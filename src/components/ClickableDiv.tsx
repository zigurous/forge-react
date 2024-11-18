'use client';

import classNames from 'classnames';
import React from 'react';
import { keyboardEventHandler } from '../utils';

export type ClickableDivProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} & React.ComponentPropsWithRef<'div'>;

export default function ClickableDiv({
  children,
  className,
  onClick,
  role = 'button',
  tabIndex = 0,
  ...rest
}: ClickableDivProps) {
  return (
    <div
      className={classNames(className, 'cursor-pointer')}
      onClick={onClick}
      onKeyDown={keyboardEventHandler(
        'Enter',
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (onClick) {
            onClick(e);
          }
        },
      )}
      role={role}
      tabIndex={tabIndex}
      {...rest}
    >
      {children}
    </div>
  );
}
