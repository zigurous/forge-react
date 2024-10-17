import classNames from 'classnames';
import React from 'react';
import type { FontSize, Margin, PaletteColor, PolymorphicProps } from '../types'; // prettier-ignore

export type BaseTextProps = {
  bold?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: PaletteColor;
  italic?: boolean;
  marginBottom?: Margin;
  marginTop?: Margin;
  size?: FontSize;
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
        { [`font-${size}`]: size },
        { [`color-${color}`]: color },
        { [`margin-top-${marginTop}`]: marginTop },
        { [`margin-bottom-${marginBottom}`]: marginBottom },
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
