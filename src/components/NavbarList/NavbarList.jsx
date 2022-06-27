import React from 'react';
import './NavbarList.sass';
import { Skeleton } from '../Skeleton/Skeleton';

export const NavbarList = ({ products, handlerClickProduct, loading }) => {
  return (
    <ul className="menu__navbar navbar list">
      {!loading ? (
        products.map((product) => {
          return (
            <li className="navbar__item item" key={product.id}>
              <button
                style={{ backgroundImage: `url('${product.image}')` }}
                className="navbar__button button"
                onClick={handlerClickProduct}
                id={product.id}></button>
            </li>
          );
        })
      ) : (
        <>
          <li className="navbar__item item">
            <Skeleton />
          </li>
          <li className="navbar__item item">
            <Skeleton />
          </li>
          <li className="navbar__item item">
            <Skeleton />
          </li>
        </>
      )}
    </ul>
  );
};
