import React from 'react';
import './ProductBox.sass';

export const ProductBox = ({ material, height, width, weight, electrification, image, name }) => {
  return (
    <div className="product__box">
      <ul className="product__characteristics characteristics list">
        <li className="characteristics__item item">
          <span className="characteristics__span">Material:</span>
          <p className="characteristics__paragraph">{material}</p>
        </li>
        <li className="characteristics__item item">
          <span className="characteristics__span"> Dimensions (cm): </span>
          <p className="characteristics__paragraph">
            H {height} x W {width} x D {width}
          </p>
        </li>
        <li className="characteristics__item item">
          <span className="characteristics__span">Net Weight:</span>
          <p className="characteristics__paragraph">{weight} kg</p>
        </li>
        <li className="characteristics__item item">
          <span className="characteristics__span">Electrification:</span>
          <p className="characteristics__paragraph">{electrification}</p>
        </li>
      </ul>
      <div className="product__image image-product">
        <img className="image-product__active" src={image} alt={name} />
      </div>
    </div>
  );
};
