import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import VerticalBar from "./VerticalBar";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={isOpen ? "burger burger-hidden" : "burger burger-open"}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="burger__line" />
        <div className="burger__line-2" />
        <div className="burger__line" />
      </div>
      <div className={isOpen ? "nav nav-open" : "nav nav-hidden"}>
        <div className="nav__line" />
        <div className="nav__logo">
          <img src="./public/assets/images/logo.svg" alt="logo" />
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
                Mes compétences
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
