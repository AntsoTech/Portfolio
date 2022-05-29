import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__burger">
        <div className="nav__burger__line"></div>
        <div className="nav__burger__line-2"></div>
        <div className="nav__burger__line"></div>
      </div>
      <div className="nav__line"></div>
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
      {/* <div class="nav__container" onclick="myFunction(this)">
        <div class="nav__container__bar nav__container__bar1"></div>
        <div class="nav__container__bar nav__container__bar2"></div>
        <div class="nav__container__bar nav__container__bar3"></div>
      </div> */}
    </div>
  );
};

export default NavBar;
