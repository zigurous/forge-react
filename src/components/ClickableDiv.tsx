import classNames from 'classnames';
import React from 'react';
import { enterKeyHandler } from '../utils';

export type ClickableDivProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} & React.ComponentPropsWithRef<'div'>;

export default function ClickableDiv({
  children,
  className,
  onClick,
  ...rest
}: ClickableDivProps) {
  return (
    <div
      className={classNames(className, 'cursor-pointer')}
      onClick={onClick}
      onKeyDown={enterKeyHandler(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (onClick) {
            onClick(e);
          }
        },
      )}
      role="button"
      tabIndex={0}
      {...rest}
    >
      {children}
    </div>
  );
}
