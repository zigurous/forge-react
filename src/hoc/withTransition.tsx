'use client';

import classNames from 'classnames';
import React from 'react';
import { useIsMounted } from '../hooks';
import type { Transition } from '../types';
import { getDisplayName } from '../utils';

export function fadeIn<
  P extends object & { className?: string; style?: React.CSSProperties },
>(WrappedComponent: React.ComponentType<P>, duration?: number) {
  const FadeInTransition = (props: P) => {
    const mounted = useIsMounted();
    return (
      <WrappedComponent
        {...props}
        className={classNames(props.className, 'transition-fade-in', {
          'transition-start': !mounted,
          'transition-end': mounted,
        })}
        style={{
          ...props.style,
          transitionDuration: duration ? `${duration}ms` : undefined,
        }}
      />
    );
  };
  FadeInTransition.displayName = getDisplayName('FadeIn', WrappedComponent);
  return FadeInTransition;
}

export function withTransition<
  P extends object & { className?: string; style?: React.CSSProperties },
>(
  WrappedComponent: React.ComponentType<P>,
  transition: Transition | Transition[],
  duration?: number,
) {
  const Transition = (props: P) => {
    const mounted = useIsMounted();
    return (
      <WrappedComponent
        {...props}
        className={classNames(props.className, {
          [getTransitionClasses(transition)]: true,
          'transition-start': !mounted,
          'transition-end': mounted,
        })}
        style={{
          ...props.style,
          transitionDuration: duration ? `${duration}ms` : undefined,
        }}
      />
    );
  };
  Transition.displayName = getDisplayName('Transition', WrappedComponent);
  return Transition;
}

function getTransitionClasses(transition: Transition | Transition[]) {
  if (Array.isArray(transition)) {
    return transition.map(name => `transition-${name}`).join(' ');
  } else {
    return `transition-${transition}`;
  }
}
