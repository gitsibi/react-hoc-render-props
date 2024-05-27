// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return children({ count, handleCount });
};

export default CounterProvider;

