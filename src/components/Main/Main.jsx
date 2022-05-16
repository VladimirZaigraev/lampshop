import React, { useState, useEffect } from 'react'
import './Main.sass'
import { Header } from '../Header/Header';
import { Preloader } from '../Preloader/Preloader';
import Lamp from '../../img/lamp.png'
import bacgroundDay from '../../img/img_bg.jpg';
import bacgroundNight from '../../img/img_bg_night.jpg';

import * as api from '../../utils/api.js'
export const Main = () => {
  const [products, setProducts] = useState([]);
  const [productActive, setProductActive] = useState([]);
  const [imgBg, setImgBg] = useState(true)
  console.log(imgBg)
  useEffect(() => {
    api.getProducts()
      .then((product) => {
        setProducts(product)
        console.log(product)
        setProductActive(product.slice(0, 1))
      })
  }, [])
  // console.log(productActive)
  const handlerClickProduct = (event) => {
    const productFind = products.find(elem => elem.id == event.target.id)
    setProductActive(productFind)
  }

  // const handleClickBg = () => {

  // }

  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <div className="main__wrapper">
            <div className="main__description description">
              <div className="description__info ">
                <p className="description__text  ">
                  Collection of lighting is inspired by the geometric works of the great Suprematist artists Kissitzky and Kazimir Malevich.
                </p>
                <p className="description__text">
                  Suprematism is a modernist movement in the art of the early twentieth century, focused on the basic geometric forms, such as circles, squares, lines and rectangles. The geometric structure of the lamps will always look like a small art objects in your house.
                </p>
              </div>
              <div className="description__product product">
                <div className="product__box">
                  <ul className="product__characteristics characteristics list">
                    <li className="characteristics__item item">
                      <span className="characteristics__span">Material:</span>
                      <p className="characteristics__paragraph">{productActive.material}
                      </p>
                    </li>
                    <li className="characteristics__item item">
                      <span className="characteristics__span"> Dimensions (cm): </span>
                      <p className="characteristics__paragraph"> {productActive.width}sm</p>
                    </li>
                    <li className="characteristics__item item">
                      <span className="characteristics__span">Net Weight:</span>
                      <p className="characteristics__paragraph">{productActive.weight} kg</p>
                    </li>
                    <li className="characteristics__item item">
                      <span className="characteristics__span">Electrification:</span>
                      <p className="characteristics__paragraph">{productActive.electrification}</p>
                    </li>
                  </ul>
                  <img className="product__image" src={productActive.image} alt="Изображение товара" />
                </div>
                <div className="product__menu menu">
                  <ul className="menu__navbar navbar list">
                    {
                      products.map((product) => {
                        return (
                          <li className="navbar__item item" key={product.id}>
                            <button style={{ backgroundImage: `url('${product.image}')` }} className="navbar__button button" onClick={handlerClickProduct} id={product.id}></button>
                          </li>
                        )
                      })
                    }
                  </ul>
                  <div className="menu__switch switch">
                    <button className="switch__button button switch__day" onClick={() => setImgBg(!imgBg)}></button>
                    <button className="switch__button button switch__night" onClick={() => setImgBg(!imgBg)}></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__image image" style={{ backgroundImage: `url('${imgBg === true ? bacgroundDay : bacgroundNight}')` }} >
              <img src={productActive.image} alt="#" className="image__lamp" />
            </div>
          </div>
        </div>
      </main>
    </>


  )
}
