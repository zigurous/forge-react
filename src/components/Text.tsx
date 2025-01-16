import classNames from 'classnames';
import React from 'react';
import type { FontSizeToken, FontTypeToken, FontWeightToken, MarginToken, PolymorphicProps, TextColorToken } from '../types'; // prettier-ignore

export type BaseTextProps = {
  align?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
  bold?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: TextColorToken;
  decoration?: 'underline' | 'overline' | 'line-through';
  italic?: boolean;
  marginBottom?: Omit<MarginToken, 'auto'>;
  marginTop?: Omit<MarginToken, 'auto'>;
  nowrap?: boolean;
  size?: FontSizeToken;
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  type?: FontTypeToken;
  weight?: FontWeightToken;
};

export type TextProps<T extends React.ElementType = 'p'> = PolymorphicProps<
  T,
  BaseTextProps
>;

export default function Text<T extends React.ElementType = 'p'>({
  as,
  align,
  bold,
  children,
  className,
  color,
  decoration,
  italic,
  marginBottom,
  marginTop,
  nowrap,
  size,
  transform,
  type,
  weight,
  ...rest
}: TextProps<T>) {
  const Element = as ?? 'p';
  return (
    <Element
      className={classNames(className, {
        [`${type}`]: type !== undefined,
        [`text-${size}`]: size !== undefined,
        [`text-${color}`]: color !== undefined,
        [`text-${align}`]: align !== undefined,
        [`font-${weight}`]: typeof weight !== 'undefined',
        [`mt-${marginTop}`]: marginTop,
        [`mb-${marginBottom}`]: marginBottom,
        uppercase: transform === 'uppercase',
        lowercase: transform === 'lowercase',
        capitalize: transform === 'capitalize',
        underline: decoration === 'underline',
        overline: decoration === 'overline',
        'line-through': decoration === 'line-through',
      })}
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
