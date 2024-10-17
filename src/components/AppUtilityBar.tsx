import classNames from 'classnames';
import React from 'react';
import Link from './Link';
import type { LinkType, Theme } from '../types';

export type AppUtilityBarProps = {
  direction?: 'left' | 'right';
  LinkElementType?: React.ElementType;
  links?: LinkType[];
  theme?: Theme | string;
} & React.ComponentPropsWithRef<'div'>;

export default function AppUtilityBar({
  className,
  direction = 'right',
  LinkElementType = 'a',
  links,
  theme,
  ...rest
}: AppUtilityBarProps) {
  return (
    <div
      className={classNames(
        'app-utility-bar',
        { [`app-utility-bar--${direction}`]: direction },
        className,
      )}
      data-theme={theme}
      {...rest}
    >
      <div className="container">
        <div className="row">
          <div className="col font-xs font-weight-500">
            {links &&
              links.length > 0 &&
              links.map(link => {
                return (
                  <Link
                    aria-label={link.name}
                    as={LinkElementType}
                    className="color-inherit margin-left-md margin-right-md"
                    external={link.external}
                    key={link.id || link.name}
                    to={link.to}
                  >
                    {link.name}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
