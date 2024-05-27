/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import withCounter from './withCounter';
import '../../App.css';

const LikeImageHoc = ({ handleCount, count }) => {
  return (
    <div>
      <button onClick={handleCount}>Like Image {count}</button>
    </div>
  );
};

export default withCounter(LikeImageHoc);
