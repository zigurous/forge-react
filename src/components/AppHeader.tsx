import classNames from 'classnames';
import React from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import type { ColSize, ThemeToken } from '../types';

export type AppHeaderProps = {
  bordered?: boolean;
  center?: React.ReactNode;
  className?: string;
  fluid?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
  sizing?: { left?: ColSize; center?: ColSize; right?: ColSize };
  sticky?: boolean;
  theme?: ThemeToken;
  transparent?: boolean;
} & Omit<React.ComponentPropsWithRef<'header'>, 'children'>;

export default function AppHeader({
  bordered = false,
  center,
  className,
  fluid = false,
  left,
  right,
  sizing,
  sticky = false,
  theme = 'light',
  transparent = false,
  ...rest
}: AppHeaderProps) {
  return (
    <header
      className={classNames(
        'app-header',
        {
          'app-header--bordered': bordered,
          'app-header--transparent': transparent,
          'app-header--sticky': sticky,
        },
        className,
      )}
      data-theme={theme}
      {...rest}
    >
      <Container fluid={fluid}>
        <Row className="flex-nowrap">
          <Col
            className={classNames('app-header__left', {
              'pointer-events-none': !left,
            })}
            size={sizing?.left}
          >
            {left}
          </Col>
          {center && (
            <Col className="app-header__center" size={sizing?.center}>
              {center}
            </Col>
          )}
          <Col
            className={classNames('app-header__right', {
              'pointer-events-none': !right,
            })}
            size={sizing?.right}
          >
            {right}
          </Col>
        </Row>
      </Container>
    </header>
  );
}
