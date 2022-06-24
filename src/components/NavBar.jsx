import React, { useState } from "react";
import { Link } from "react-scroll";
import VerticalBar from "./VerticalBar";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="logo__mobile">
        <img src="/assets/images/logo.svg" alt="logo" width={30} />
      </div>
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
              <Link
                className="nav__container__list__item__link"
                activeClass="active"
                spy
                smooth
                offset={-15}
                to="apropos"
                onClick={() => setIsOpen(false)}
              >
                {" "}
                Mon histoire
              </Link>
            </li>
            <li className="nav__container__list__item">
              <Link
                className="nav__container__list__item__link"
                activeClass="active"
                spy
                smooth
                offset={-15}
                to="mestechnologies"
                onClick={() => setIsOpen(false)}
              >
                {" "}
                Mes technologies
              </Link>
            </li>
            <li className="nav__container__list__item">
              <Link
                className="nav__container__list__item__link"
                activeClass="active"
                spy
                smooth
                offset={-15}
                to="mesprojets"
                onClick={() => setIsOpen(false)}
              >
                {" "}
                Mes projets
              </Link>
            </li>
          </ul>
          <button type="button" className="nav__container__calltoaction">
            <Link
              activeClass="active1"
              spy
              smooth
              offset={-5}
              to="contact"
              onClick={() => setIsOpen(false)}
            >
              {" "}
              Me contacter{" "}
            </Link>
          </button>
        </div>
        <VerticalBar />
      </div>
    </div>
  );
};

export default NavBar;
