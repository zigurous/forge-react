import classNames from 'classnames';
import React from 'react';
import ReactPortal from './ReactPortal';
import type { ThemeToken } from '../types';

export interface TooltipProps {
  arrow?: 'down' | 'up' | 'right' | 'left';
  children: React.ReactNode;
  className?: string;
  element: HTMLElement;
  theme?: ThemeToken;
}

export default function Tooltip({
  arrow,
  children,
  className,
  element,
  theme = 'high-contrast',
}: TooltipProps) {
  const rect = element.getBoundingClientRect();
  const position = getPosition(rect, arrow);
  return (
    <ReactPortal>
      <div
        aria-hidden
        className={classNames(
          'caption tooltip',
          {
            [`tooltip--${arrow}`]: arrow,
          },
          className,
        )}
        data-theme={theme}
        role="tooltip"
        style={{
          top: position.top,
          left: position.left,
        }}
      >
        {typeof children === 'string' && children.includes('\n')
          ? children.split('\n').map((line, index, array) => (
              <>
                {line}
                {index != array.length - 1 && <br />}
              </>
            ))
          : children}
      </div>
    </ReactPortal>
  );
}

function getPosition(rect: DOMRect, arrow?: 'down' | 'up' | 'right' | 'left') {
  switch (arrow) {
    case 'left':
      return {
        top: rect.top + rect.height / 2,
        left: rect.right,
      };
    case 'right':
      return {
        top: rect.top + rect.height / 2,
        left: rect.left,
      };
    case 'up':
      return {
        top: rect.bottom,
        left: rect.left + rect.width / 2,
      };
    case 'down':
    default:
      return {
        top: rect.top,
        left: rect.left + rect.width / 2,
      };
  }
}
