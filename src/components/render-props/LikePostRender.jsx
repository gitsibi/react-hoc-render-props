/* eslint-disable no-unused-vars */
import React from 'react';
import CounterProvider from './CounterProvider';
import '../../App.css';

const LikePostRender = () => {
  return (
    <CounterProvider>
      {({ count, handleCount }) => (
        <div>
          <button onClick={handleCount}>Like Post {count}</button>
        </div>
      )}
    </CounterProvider>
  );
};

export default LikePostRender;


