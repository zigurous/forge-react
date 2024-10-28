import classNames from 'classnames';
import React from 'react';
import type { ColorToken, FontSizeToken, FontWeight, MarginToken, PolymorphicProps } from '../types'; // prettier-ignore

export type BaseTextProps = {
  bold?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: ColorToken;
  italic?: boolean;
  marginBottom?: MarginToken;
  marginTop?: MarginToken;
  size?: FontSizeToken;
};

export type TextProps<T extends React.ElementType = 'p'> = PolymorphicProps<
  T,
  BaseTextProps
>;

export default function Text<T extends React.ElementType = 'p'>({
  as,
  bold,
  children,
  className,
  color,
  italic,
  marginBottom,
  marginTop,
  size,
  ...rest
}: TextProps<T>) {
  const Element = as ?? 'p';
  return (
    <Element
      className={classNames(
        { [`text-${size}`]: size },
        { [`text-${color}`]: color },
        { [`mt-${marginTop}`]: marginTop },
        { [`mb-${marginBottom}`]: marginBottom },
        className,
      )}
      {...rest}
    >
      {bold ? (
        <b>{italic ? <em>{children}</em> : children}</b>
      ) : italic ? (
        <em>{children}</em>
      ) : (
        children
      )}
    </Element>
  );
}
