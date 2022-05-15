import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.sass'

const navLink = [
  {
    id: 1,
    name: 'Collections',
    link: '/',
  },
  {
    id: 2,
    name: 'Blog',
    link: '/'
  },
  {
    id: 3,
    name: 'About',
    link: '/'
  },
  {
    id: 4,
    name: 'contacts',
    link: '/'
  },
]

export const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  function updateScreenType() {
    setIsMobile(window.innerWidth <= 768);
  }

  useEffect(() => {
    window.addEventListener('resize', updateScreenType);
    return () => {
      window.removeEventListener('resize', updateScreenType);
    };

  }, []);

  return (
    <>
      {
        !isMobile ? (
          <div className="navigation">
            <ul className="navigation__list list">
              {
                navLink.map(elem => {
                  return (
                    <li className="navigation__item item" key={elem.id}>
                      <NavLink className={({ isActive }) => isActive ? "navigation__link navigation__link_active link" : "navigation__link link font-size-nav"} to={elem.link}>
                        {elem.name}
                      </NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        ) : (
          <div className="navigation-mobile">
            <div className="navigation-mobile__burger-btn burger-btn" onClick={() => setMenuActive(!menuActive)}>
              <span className="burger-btn__span"></span>
              <div className={menuActive ? " mobile-menu__overlay_active mobile-menu__overlay" : "mobile-menu__overlay"} />
              <div className={menuActive ? "navigation-mobile__menu mobile-menu mobile-menu_active" : "navigation-mobile__menu mobile-menu"} onClick={() => setMenuActive(!menuActive)}>
                <div className="mobile-menu__content">
                  <ul className="mobile-menu__list list">
                    {
                      navLink.map(elem => {
                        return (
                          <li className="mobile-menu__item item " key={elem.id}>
                            <NavLink className={({ isActive }) => isActive ? "mobile-menu__link mobile-menu__link_active link" : "mobile-menu__link link"} to={elem.link}> {elem.name}
                            </NavLink>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}