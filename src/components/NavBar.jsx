import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src="./public/assets/images/logo.svg" alt="logo" />
      </div>

      <ul className="nav__list">
        <li className="nav__list__item">
          <NavLink className="nav__list__item__link" to="/">
            {" "}
            A Propos de moi
          </NavLink>
        </li>
        <li className="nav__list__item">
          <NavLink className="nav__list__item__link" to="/">
            {" "}
            Mes compétences
          </NavLink>
        </li>
        <li className="nav__list__item">
          <NavLink className="nav__list__item__link" to="/">
            {" "}
            Mes projets
          </NavLink>
        </li>
        <li className="nav__list__item">
          <NavLink className="nav__list__item__link" to="/">
            {" "}
            Mes contacts
          </NavLink>
        </li>
      </ul>

      {/* <div class="nav__container" onclick="myFunction(this)">
        <div class="nav__container__bar nav__container__bar1"></div>
        <div class="nav__container__bar nav__container__bar2"></div>
        <div class="nav__container__bar nav__container__bar3"></div>
      </div> */}
    </div>
  );
};

export default NavBar;
