import classNames from 'classnames';
import React from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import type { ColSize, ThemeToken } from '../types';

export type AppFooterProps = {
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
} & Omit<React.ComponentPropsWithRef<'footer'>, 'children'>;

export default function AppFooter({
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
}: AppFooterProps) {
  return (
    <footer
      className={classNames(
        'app-footer',
        {
          'app-footer--bordered': bordered,
          'app-footer--transparent': transparent,
          'app-footer--sticky': sticky,
        },
        className,
      )}
      data-theme={theme}
      {...rest}
    >
      <Container fluid={fluid}>
        <Row className="flex-nowrap">
          <Col
            className={classNames('app-footer__left', {
              'pointer-events-none': !left,
            })}
            size={sizing?.left ?? (left ? undefined : 'none')}
          >
            {left}
          </Col>
          {center && (
            <Col className="app-footer__center" size={sizing?.center}>
              {center}
            </Col>
          )}
          <Col
            className={classNames('app-footer__right', {
              'pointer-events-none': !right,
            })}
            size={sizing?.right ?? (right ? undefined : 'none')}
          >
            {right}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
