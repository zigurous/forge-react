import classNames from 'classnames';
import React from 'react';
import type { ColorToken, FontHeader, FontWeight, MarginToken, PolymorphicProps } from '../types'; // prettier-ignore

export type BaseTitleProps = {
  bold?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: ColorToken;
  display?: boolean;
  eyebrow?: boolean;
  italic?: boolean;
  marginBottom?: MarginToken;
  marginTop?: MarginToken;
  nowrap?: boolean;
  size?: FontHeader;
  subtitle?: boolean;
  weight?: FontWeight;
};

export type TitleProps<T extends React.ElementType = 'div'> = PolymorphicProps<
  T,
  BaseTitleProps
>;

export default function Title<T extends React.ElementType = 'div'>({
  as,
  bold,
  children,
  className,
  color,
  display,
  eyebrow,
  italic,
  marginBottom,
  marginTop,
  nowrap,
  size,
  subtitle,
  weight,
}: TitleProps<T>) {
  const Element = as ?? 'div';
  return (
    <Element
      className={classNames(
        { [`h${size}`]: !display && typeof size !== 'undefined' },
        { [`display-${size}`]: display && typeof size !== 'undefined' },
        { [`font-${weight}`]: typeof weight !== 'undefined' },
        { [`text-${color}`]: color },
        { [`mt-${marginTop}`]: marginTop },
        { [`mb-${marginBottom}`]: marginBottom },
        { 'text-nowrap': nowrap },
        { subtitle: subtitle },
        { eyebrow: eyebrow },
        className,
      )}
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
