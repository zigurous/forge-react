import classNames from 'classnames';
import React from 'react';
import DefaultContainer, { type ContainerProps } from '../../src/components/Container'; // prettier-ignore

export default function Container(props: ContainerProps) {
  return (
    <DefaultContainer
      {...props}
      className={classNames('text-xs text-center', props.className)}
    />
  );
}
