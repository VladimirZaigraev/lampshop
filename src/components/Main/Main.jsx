import React from 'react'
import './Main.sass'
import { Header } from '../Header/Header';
import { Preloader } from '../Preloader/Preloader';
import Lamp from '../../img/lamp.png'
export const Main = () => {
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
                      <p className="characteristics__paragraph">Metal
                      </p>
                    </li>
                    <li className="characteristics__item item">
                      <span className="characteristics__span"> Dimensions (cm): </span>
                      <p className="characteristics__paragraph">H 45 x W 12 x D 12</p>
                    </li>
                    <li className="characteristics__item item">
                      <span className="characteristics__span">Net Weight:</span>
                      <p className="characteristics__paragraph">2,4 kg</p>
                    </li>
                    <li className="characteristics__item item">
                      <span className="characteristics__span">Electrification:</span>
                      <p className="characteristics__paragraph">LED 10W | G9 |  220-240V | 50 Hz</p>
                    </li>
                  </ul>
                  <img className="product__image" src={Lamp} alt="Изображение товара" />
                </div>
                <div className="product__menu menu">
                  <ul className="menu__navbar navbar list">
                    <li className="navbar__item item">
                      <button className="navbar__button button"></button>
                    </li>
                    <li className="navbar__item item">
                      <button className="navbar__button button"></button>
                    </li>
                    <li className="navbar__item item">
                      <button className="navbar__button button"></button>
                    </li>
                  </ul>
                  <div className="menu__switch switch">
                    <button className="switch__button button switch__day"></button>
                    <button className="switch__button button switch__night"></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__image image">
              <img src={Lamp} alt="#" className="image__lamp" />
            </div>
          </div>
        </div>
      </main>
    </>


  )
}
