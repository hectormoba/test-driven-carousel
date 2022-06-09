import React, { useState } from 'react';

const ComponentWithIndex = (Component, indexPropName) => {
  const WithIndex = (props) => {
    const [index, setIndex] = useState(0);

    const handleDecrement = (upperBound) => {
      setIndex((index) => {
        const newIndex = upperBound
          ? (index + upperBound - 1) % upperBound
          : index - 1;
        return newIndex;
      });
    };

    const handleIncrement = (upperBound) => {
      setIndex((index) => {
        const newIndex = upperBound ? (index + 1) % upperBound : index + 1;
        return newIndex;
      });
    };

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
