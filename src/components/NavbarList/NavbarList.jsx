import React from 'react';
import './NavbarList.sass';

export const NavbarList = ({ products, handlerClickProduct }) => {
  return (
    <ul className="menu__navbar navbar list">
      {products.map((product) => {
        return (
          <li className="navbar__item item" key={product.id}>
            <button
              style={{ backgroundImage: `url('${product.image}')` }}
              className="navbar__button button"
              onClick={handlerClickProduct}
              id={product.id}></button>
          </li>
        );
      })}
    </ul>
  );
};
