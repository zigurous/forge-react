import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import ClickableDiv from './ClickableDiv';
import ReactPortal from './ReactPortal';
import { useModalOverlay } from '../hooks';
import type { Theme } from '../types';

export interface SideDrawerProps {
  animated?: boolean;
  className?: string;
  children?: React.ReactNode;
  hideOverlay?: boolean;
  location?: Location;
  rootElement?: string;
  theme?: Theme | string;
}

export default function SideDrawer({
  animated = true,
  children,
  className,
  hideOverlay = false,
  location,
  rootElement = 'body',
  theme,
}: SideDrawerProps) {
  const [open, setOpen] = useState(false);
  useModalOverlay(open, true);
  useEffect(() => {
    setOpen(false);
  }, [location]);
  return (
    <>
      <Button
        aria-label={open ? 'Close' : 'Open'}
        className="sidedrawer__button"
        icon={open ? 'close' : 'menu'}
        iconAlignment="only"
        onClick={() => setOpen(!open)}
        size="sm"
      />
      <ReactPortal rootElement={rootElement}>
        <div
          className={classNames(
            'sidedrawer',
            { 'sidedrawer--open': open, 'sidedrawer--closed': !open },
            { 'sidedrawer--animated': animated },
            className,
          )}
          data-theme={theme}
        >
          {!hideOverlay && (
            <ClickableDiv
              className="sidedrawer__overlay"
              onClick={() => setOpen(false)}
            />
          )}
          <div className="sidedrawer__container">{children}</div>
        </div>
      </ReactPortal>
    </>
  );
}
