import React, { FC, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/image/logo.png';

export const Nav: FC = () => {
  const location = useLocation();
  const pathname = window.location.pathname;
  useEffect(() => {}, [location.pathname]);

  return (
    <>
      <img className="header__logo" src={logo} alt="logo" />
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__link">
            <Link
              to="/home"
              className={
                pathname.match('/home') ? 'nav__item-active' : 'nav__item'
              }
            >
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to="/about"
              className={
                pathname.match('/about') ? 'nav__item-active' : 'nav__item'
              }
            >
              About
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to="/invention"
              className={
                pathname.match('/invention') ? 'nav__item-active' : 'nav__item'
              }
            >
              Invention
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to="/faq"
              className={
                pathname.match('/faq') ? 'nav__item-active' : 'nav__item'
              }
            >
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
