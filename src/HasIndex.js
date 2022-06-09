import React, { useState } from 'react';
import PropTypes from 'prop-types';

const capitalize = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

const ComponentWithIndex = (Component, indexPropName) => {
  const defaultIndexPropName = `default${capitalize(indexPropName)}`;

  const WithIndex = (props) => {
    const [index, setIndex] = useState(0);

    WithIndex.propTypes = {
      [indexPropName]: PropTypes.number,
      [defaultIndexPropName]: PropTypes.number,
      onIndexChange: PropTypes.func,
    };

    WithIndex.defaultProps = {
      [defaultIndexPropName]: 0,
    };

    if (props[indexPropName] != null && props[indexPropName] !== index) {
      return setIndex(props[indexPropName]);
    }

    const handleDecrement = (upperBound) => {
      const { onIndexChange } = props;
      setIndex((index) => {
        const newIndex = upperBound
          ? (index + upperBound - 1) % upperBound
          : index - 1;

        if (onIndexChange) {
          onIndexChange({ target: { value: newIndex } });
        }
        return newIndex;
      });
    };

    const handleIncrement = (upperBound) => {
      const { onIndexChange } = props;
      setIndex((index) => {
        const newIndex = upperBound ? (index + 1) % upperBound : index + 1;

        if (onIndexChange) {
          onIndexChange({ target: { value: newIndex } });
        }
        return newIndex;
      });
    };

    const { [defaultIndexPropName]: _defaultIndexProp } = props;

    const indexProps = {
      [indexPropName]: index,
      [`${indexPropName}Decrement`]: handleDecrement,
      [`${indexPropName}Increment`]: handleIncrement,
    };

    return <Component {...props} {...indexProps} />;
  };

  WithIndex.displayName = `HasIndex(${
    Component.displayName || Component.name
  })`;

  return WithIndex;
};

export { ComponentWithIndex };
