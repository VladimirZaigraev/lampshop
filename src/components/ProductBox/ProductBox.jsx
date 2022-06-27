import React from 'react';
import './ProductBox.sass';
import { Skeleton } from '../Skeleton/Skeleton';

export const ProductBox = ({
  material,
  height,
  width,
  weight,
  electrification,
  image,
  name,
  loading,
}) => {
  const returnResult = (info) => {
    return loading ? <Skeleton sizeClass={'characteristics__skeleton'} /> : info;
  };
  return (
    <div className="product__box">
      <ul className="product__characteristics characteristics list">
        <li className="characteristics__item item">
          <span className="characteristics__span">Material:</span>
          <p className="characteristics__paragraph">{returnResult(material)}</p>
        </li>
        <li className="characteristics__item item">
          <span className="characteristics__span"> Dimensions (cm): </span>
          <p className="characteristics__paragraph">
            {returnResult('H' + height + 'x W' + width + 'x D' + width)}
          </p>
        </li>
        <li className="characteristics__item item">
          <span className="characteristics__span">Net Weight:</span>
          <p className="characteristics__paragraph">{returnResult(weight + 'kg')}</p>
        </li>
        <li className="characteristics__item item">
          <span className="characteristics__span">Electrification:</span>
          <p className="characteristics__paragraph">{returnResult(electrification)}</p>
        </li>
      </ul>
      <div className="product__image image-product">
        {!loading ? (
          <img className="image-product__active" src={image} alt={name} />
        ) : (
          <Skeleton sizeClass={'image-product__active'} />
        )}
      </div>
    </div>
  );
};
