/* eslint-disable no-unused-vars */
import React from 'react';
import CounterProvider from './CounterProvider';
import '../../App.css';

const LikeImageRender= () => {
  return (
    <CounterProvider>
      {({ count, handleCount }) => (
        <div>
          <button onClick={handleCount}>Like Image {count}</button>
        </div>
      )}
    </CounterProvider>
  );
};

export default LikeImageRender;

