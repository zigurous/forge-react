import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import getDisplayName from './displayName';
import { useMounted } from '../hooks';

const transitionTriggers = {
  'fade-in': 'visible',
  'fade-out': 'hidden',
  'translate-up': 'hidden',
  'translate-down': 'hidden',
  'translate-left': 'hidden',
  'translate-right': 'hidden',
};

export const fadeIn = (WrappedComponent) => {
  const FadeInTransition = (props) => {
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
  FadeInTransition.propTypes = {
    className: PropTypes.string,
  };
  return FadeInTransition;
};

const withTransition = (
  WrappedComponent,
  transitionClass,
  transitionProp,
  transitionTrigger
) => {
  const Transition = (props) => {
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
  Transition.propTypes = {
    className: PropTypes.string,
  };
  return Transition;
};

export default withTransition;