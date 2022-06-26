import React from 'react';
import './ImageBg.sass';

export const ImageBg = ({ imgBg, productActive }) => {
  return (
    <div
      className={
        'main__image image ' + (imgBg ? 'image__background-day' : 'image__background-night')
      }>
      <img src={productActive.image} alt={productActive.name} className="image__lamp" />
    </div>
  );
};
