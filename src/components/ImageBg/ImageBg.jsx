import React from 'react';
import './ImageBg.sass';
import bacgroundDay from '../../img/img_bg.jpg';
import bacgroundNight from '../../img/img_bg_night.jpg';

export const ImageBg = ({ imgBg, productActive }) => {
  return (
    <div
      className="main__image image"
      style={{
        backgroundImage: `url('${imgBg === true ? bacgroundDay : bacgroundNight}')`,
      }}>
      <img src={productActive.image} alt={productActive.name} className="image__lamp" />
    </div>
  );
};
