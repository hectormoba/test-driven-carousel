import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const AutoAdvance = (Component, propName, upperBoundPropName) => {
  const ComponentWithAutoAdvance = (props) => {
    const { autoAdvanceDelay } = props;
    const startTimer = () => {
      if (!autoAdvanceDelay) return;

      let upperBound;

      if (typeof props[upperBoundPropName] === 'number') {
        upperBound = props[upperBoundPropName];
      } else if (props[upperBoundPropName] != null) {
        upperBound = props[upperBoundPropName].length;
      }
      let timer = setTimeout(() => {
        props[`${propName}Increment`](upperBound);
      }, autoAdvanceDelay);

      return timer;
    };

    useEffect(() => {
      let timer = startTimer();
      return () => clearTimeout(timer);
    }, [props[upperBoundPropName], props[propName]]);

    const { autoAdvanceDelay: _autoAdvanceDelay } = props;

    return <Component {...props} />;
  };

  AutoAdvance.propTypes = {
    [propName]: PropTypes.number.isRequired,
    [`${propName}Increment`]: PropTypes.func.isRequired,
    [upperBoundPropName]: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.array,
    ]).isRequired,
    autoAdvanceDelay: PropTypes.number.isRequired,
  };

  ComponentWithAutoAdvance.propTypes = {
    autoAdvanceDelay: AutoAdvance.propTypes.autoAdvanceDelay,
  };

  ComponentWithAutoAdvance.defaultProps = {
    autoAdvanceDelay: 10e3,
  };

  ComponentWithAutoAdvance.displayName = `AutoAdvances(${
    Component.displayname || Component.name
  })`;
  return ComponentWithAutoAdvance;
};

export default AutoAdvance;
