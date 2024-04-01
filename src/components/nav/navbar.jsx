import React, {useState} from "react";
import logo from "../../assets/Grand_Capital.png";

import "./navbar.scss";

const Navbar = () => {
  const [heightNav,setsHeightNav] = useState(false)
  
  const changeHeightNav = () =>{
    if(window.scrollY >= 90){
      setsHeightNav(true)
    }
    else{
      setsHeightNav(false)
    }
  }
  window.addEventListener('scroll', changeHeightNav)

  return (
    <div className={heightNav ? "nav nav--change" : "nav"}>
      <div className="container">
        <div className="nav-box">
          <div className="nav-left_item">
            <ul className={heightNav ? "nav-list nav-list--change": "nav-list"}>
              <li className="nav-list_item">
                <a href="#">Asosiy</a>
              </li>
              <li className="nav-list_item">
                <a href="#">Biz haqimizda</a>
              </li>
              <li className="nav-list_item">
                <a href="#">Xonalarimiz</a>
              </li>
            </ul>
          </div>
          <div className={heightNav ? "nav-logo nav-logo--change": "nav-logo"}>
            <a href="">
              <img src={logo} alt="img-logo" />
            </a>
          </div>
          <div className="nav-select">
            <select className="nav-select_in">
              <option value="uz">Uzbek</option>
              <option value="ru">Russian</option>
            </select>
          </div>
          <div className="nav-right_item">
            <ul className={heightNav ? "nav-list nav-list--change": "nav-list"}>
              <li className="nav-list_item">
                <a href="#">Fotogalireya</a>
              </li>
              <li className="nav-list_item">
                <a href="#">Bog'lanish</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
