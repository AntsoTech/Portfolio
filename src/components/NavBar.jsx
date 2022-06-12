import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import VerticalBar from "./VerticalBar";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={() => setIsOpen(!isOpen)}
      >
        <div
          className={
            isOpen ? "burger__line-1 line-1-animated" : "burger__line-1"
          }
        />
        <div
          className={
            isOpen
              ? "burger__line-2 line-hidden"
              : "burger__line-2 line-visible "
          }
        />
        <div
          className={
            isOpen ? "burger__line-3 line-3-animated" : "burger__line-3"
          }
        />
      </div>
      <div className={isOpen ? "nav nav-open" : "nav nav-hidden"}>
        <div className="nav__line" />
        <div className="nav__logo">
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>
        <div className="nav__container">
          <ul className="nav__container__list">
            <li className="nav__container__list__item">
              <NavLink className="nav__container__list__item__link" to="/">
                {" "}
                Mon histoire
              </NavLink>
            </li>
            <li className="nav__container__list__item">
              <NavLink className="nav__container__list__item__link" to="/">
                {" "}
                Mes technologies
              </NavLink>
            </li>
            <li className="nav__container__list__item">
              <NavLink className="nav__container__list__item__link" to="/">
                {" "}
                Mes valeurs
              </NavLink>
            </li>
            <li className="nav__container__list__item">
              <NavLink className="nav__container__list__item__link" to="/">
                {" "}
                Mes projets
              </NavLink>
            </li>
          </ul>
          <button type="button" className="nav__container__calltoaction">
            {" "}
            Me contacter{" "}
          </button>
        </div>
        <VerticalBar />
      </div>
    </div>
  );
};

export default NavBar;
