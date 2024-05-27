/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
      setCount(count + 1);
    };

    return <WrappedComponent handleCount={handleCount} count={count} {...props} />;
  };
};

export default withCounter;

