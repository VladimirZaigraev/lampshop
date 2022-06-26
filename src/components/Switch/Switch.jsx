import React from 'react';
import './Switch.sass';

export const Switch = ({ setImgBg, imgBg, dark }) => {
  return (
    <div className="menu__switch switch">
      <button className="switch__button button switch__day" onClick={() => setImgBg(true)}></button>
      <button
        className="switch__button button switch__night"
        disabled={!dark}
        onClick={() => setImgBg(false)}></button>
    </div>
  );
};
