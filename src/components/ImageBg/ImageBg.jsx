import React from 'react';
import './ImageBg.sass';
import { Skeleton } from '../Skeleton/Skeleton';

export const ImageBg = ({ imgBg, productActive, loading }) => {
  return (
    <div
      className={
        'main__image image ' + (imgBg ? 'image__background-day' : 'image__background-night')
      }>
      {!loading ? (
        <img src={productActive.image} alt={productActive.name} className="image__lamp" />
      ) : (
        <Skeleton sizeClass={'image__skeleton'} />
      )}
    </div>
  );
};
