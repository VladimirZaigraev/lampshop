import React from 'react'
import './Header.sass'
import { Navigation } from '../Navigation/Navigation'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <NavLink to="/" className="logo header__logo link">
          </NavLink>
          <Navigation />
        </div>
      </div>
    </header>
  )
}
