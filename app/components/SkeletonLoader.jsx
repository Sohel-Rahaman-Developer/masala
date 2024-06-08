// app/common/SkeletonLoader.jsx

import React from 'react';

const SkeletonLoader = ({ type }) => {
  const classes = type === 'image' ? 'w-full h-full bg-gray-300' : 'w-full h-0 pb-[56.25%] bg-gray-300 relative';

  return (
    <div className={classes}></div>
  );
};

export default SkeletonLoader;
