import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMounted } from './hooks';

const transitionTriggers = {
  'fade-in': 'visible',
  'fade-out': 'hidden',
  'translate-up': 'hidden',
  'translate-down': 'hidden',
  'translate-left': 'hidden',
  'translate-right': 'hidden',
};

export const withTransition = (
  Component,
  transitionClass,
  transitionProp,
  transitionTrigger
) => {
  const Transition = (props) => {
    const shouldTransition = Boolean(props[transitionProp]);
    const trigger = transitionTrigger || transitionTriggers[transitionClass];
    return (
      <Component
        {...props}
        className={classNames(props.className, 'transition', transitionClass, {
          [trigger]: shouldTransition,
        })}
      />
    );
  };
  Transition.propTypes = {
    className: PropTypes.string,
  };
  return Transition;
};

export const fadeIn = (Component) => {
  const FadeInTransition = (props) => {
    const mounted = useMounted();
    return (
      <Component
        {...props}
        className={classNames(props.className, 'transition', 'fade-in', {
          visible: mounted,
        })}
      />
    );
  };
  FadeInTransition.propTypes = {
    className: PropTypes.string,
  };
  return FadeInTransition;
};
