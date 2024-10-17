export type PropsOf<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>;

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];

export type PolymorphicProps<
  T extends React.ElementType = React.ElementType,
  TProps = {},
> = {
  as?: T;
} & TProps &
  Omit<PropsOf<T>, keyof TProps | 'as' | 'ref'> & { ref?: PolymorphicRef<T> };
