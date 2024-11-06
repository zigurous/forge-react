import classNames from 'classnames';
import React from 'react';
import type { FontSizeToken, FontTypeToken, FontWeightToken, MarginToken, PolymorphicProps, TextColorToken } from '../types'; // prettier-ignore

export type BaseTextProps = {
  bold?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: TextColorToken;
  italic?: boolean;
  marginBottom?: Omit<MarginToken, 'auto'>;
  marginTop?: Omit<MarginToken, 'auto'>;
  nowrap?: boolean;
  size?: FontSizeToken;
  type?: FontTypeToken;
  weight?: FontWeightToken;
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
  nowrap,
  size,
  type,
  weight,
  ...rest
}: TextProps<T>) {
  const Element = as ?? 'p';
  return (
    <Element
      className={classNames(
        {
          [`${type}`]: type,
          [`text-${size}`]: size,
          [`text-${color}`]: color,
          [`font-${weight}`]: typeof weight !== 'undefined',
          [`mt-${marginTop}`]: marginTop,
          [`mb-${marginBottom}`]: marginBottom,
          'text-nowrap': nowrap,
        },
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
