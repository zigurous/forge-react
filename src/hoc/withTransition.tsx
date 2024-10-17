import classNames from 'classnames';
import React from 'react';
import { useMounted } from '../hooks';
import { getDisplayName } from '../utils';

const transitionTriggers = Object.freeze({
  'fade-in': 'visible',
  'fade-out': 'hidden',
  'translate-up': 'hidden',
  'translate-down': 'hidden',
  'translate-left': 'hidden',
  'translate-right': 'hidden',
});

export function fadeIn<P extends object & { className?: string }>(
  WrappedComponent: React.ComponentType<P>,
) {
  const FadeInTransition = (props: P) => {
    const mounted = useMounted();
    return (
      <WrappedComponent
        {...props}
        className={classNames(props.className, 'transition', 'fade-in', {
          visible: mounted,
        })}
      />
    );
  };
  FadeInTransition.displayName = getDisplayName('FadeIn', WrappedComponent);
  return FadeInTransition;
}

export function withTransition<P extends object & { className?: string }>(
  WrappedComponent: React.ComponentType<P>,
  transitionClass: keyof typeof transitionTriggers,
  transitionProp: keyof P,
  transitionTrigger: string,
) {
  const Transition = (props: P) => {
    const shouldTransition = Boolean(props[transitionProp]);
    const trigger = transitionTrigger || transitionTriggers[transitionClass];
    return (
      <WrappedComponent
        {...props}
        className={classNames(props.className, 'transition', transitionClass, {
          [trigger]: shouldTransition,
        })}
      />
    );
  };
  Transition.displayName = getDisplayName('Transition', WrappedComponent);
  return Transition;
}
