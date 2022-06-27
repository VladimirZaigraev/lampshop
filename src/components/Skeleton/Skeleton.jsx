import React from 'react';
import './Skeleton.sass';

export const Skeleton = ({ sizeClass }) => {
  const SceletonClass = sizeClass ? `skeleton ${sizeClass}` : 'skeleton';
  return <div className={SceletonClass}></div>;
};
