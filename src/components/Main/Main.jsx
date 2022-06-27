import React, { useState, useEffect } from 'react';
import './Main.sass';
import { Header } from '../Header/Header';
import { ImageBg } from '../ImageBg/ImageBg';
import { ProductBox } from '../ProductBox/ProductBox';
import { NavbarList } from '../NavbarList/NavbarList';
import { Switch } from '../Switch/Switch';

import * as api from '../../utils/api.js';

import { data } from '../../mokap/mokap';

export const Main = () => {
  const [products, setProducts] = useState(data);

  const [productActive, setProductActive] = useState(products[0] || []);
  const [loading, setLoading] = useState(false);

  const [imgBg, setImgBg] = useState(true);

  // запрос к api и стейт закоментирован тк для коректной работы требуется VPN
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   setLoading(true);
  //   api.getProducts().then((product) => {
  //     setProducts(product);
  //     console.log(product);
  //     setProductActive(product.slice(0, 1));
  //     setLoading(false);
  //   });
  // }, []);

  useEffect(() => {
    setImgBg(true);
  }, [productActive]);

  const handlerClickProduct = (event) => {
    const productFind = products.find((elem) => elem.id == event.target.id);
    setProductActive(productFind);
  };

  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <div className="main__wrapper">
            <div className="main__description description">
              <div className="description__info ">
                <p className="description__text  ">
                  Collection of lighting is inspired by the geometric works of the great Suprematist
                  artists Kissitzky and Kazimir Malevich.
                </p>
                <p className="description__text">
                  Suprematism is a modernist movement in the art of the early twentieth century,
                  focused on the basic geometric forms, such as circles, squares, lines and
                  rectangles. The geometric structure of the lamps will always look like a small art
                  objects in your house.
                </p>
              </div>
              <div className="description__product product">
                <ProductBox
                  material={productActive.material}
                  height={productActive.height}
                  width={productActive.width}
                  weight={productActive.weight}
                  electrification={productActive.electrification}
                  image={productActive.image}
                  name={productActive.name}
                  loading={loading}
                />
                <div className="product__menu menu">
                  <NavbarList
                    products={products}
                    handlerClickProduct={handlerClickProduct}
                    loading={loading}
                  />
                  <Switch setImgBg={setImgBg} imgBg={imgBg} dark={productActive.isDarkMode} />
                </div>
              </div>
            </div>
            <ImageBg imgBg={imgBg} productActive={productActive} loading={loading} />
          </div>
        </div>
      </main>
    </>
  );
};
