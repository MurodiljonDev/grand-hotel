import React, { useState } from "react";
import logo from "../../assets/Grand_Capital.png";
import { useTranslation } from "react-i18next";
import TemporaryDrawer from "../burgerMenu/burgerMenu";

import "./navbar.scss";

const Navbar = () => {
  const [heightNav, setsHeightNav] = useState(false);

  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const changeHeightNav = () => {
    if (window.scrollY >= 90) {
      setsHeightNav(true);
    } else {
      setsHeightNav(false);
    }
  };
  window.addEventListener("scroll", changeHeightNav);

  return (
    <div className={heightNav ? "nav nav--change" : "nav"}>
      <div className="container">
        <div className="nav-box">
          <div className="nav-left_item">
            <ul
              className={heightNav ? "nav-list nav-list--change" : "nav-list"}
            >
              <li className="nav-list_item">
                <a href="#">{t("main.nav.main-nav")}</a>
              </li>
              <li className="nav-list_item">
                <a href="#aboutUs">{t("main.nav.aboutUs")}</a>
              </li>
              <li className="nav-list_item">
                <a href="#rooms">{t("main.nav.rooms")}</a>
              </li>
            </ul>
          </div>
          <div className={heightNav ? "nav-logo nav-logo--change" : "nav-logo"}>
            <a href="">
              <img src={logo} alt="img-logo" />
            </a>
          </div>
          <div className="nav-select">
            <select className="nav-select_in" onChange={handleChangeLanguage}>
              <option select hidden>
                {localStorage.getItem("i18nextLng") == "ru"
                  ? "Russian"
                  : "Uzbek"}
              </option>
              <option value="uz">Uzbek</option>
              <option value="ru">Russian</option>
            </select>
          </div>
          <div className="nav-burger_menu">
            <TemporaryDrawer />
          </div>
          <div className="nav-right_item">
            <ul
              className={heightNav ? "nav-list nav-list--change" : "nav-list"}
            >
              <li className="nav-list_item">
                <a href="#galery">{t("main.nav.galery")}</a>
              </li>
              <li className="nav-list_item">
                <a href="#contact">{t("main.nav.contact")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
