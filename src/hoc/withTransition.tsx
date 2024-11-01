import classNames from 'classnames';
import React from 'react';
import { useMounted } from '../hooks';
import { getDisplayName } from '../utils';

export function fadeIn<
  P extends object & { className?: string; style?: React.CSSProperties },
>(WrappedComponent: React.ComponentType<P>, duration?: number) {
  const FadeInTransition = (props: P) => {
    const mounted = useMounted();
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
  transition:
    | 'fade-in'
    | 'fade-out'
    | 'translate-in'
    | 'translate-out'
    | string
    | string[],
  duration?: number,
) {
  const Transition = (props: P) => {
    const mounted = useMounted();
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

function getTransitionClasses(transition: string | string[]) {
  if (Array.isArray(transition)) {
    return transition.map(name => `transition-${name}`).join(' ');
  } else {
    return `transition-${transition}`;
  }
}
