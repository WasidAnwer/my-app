import React from "react";
// import { NavLink } from "react-router-dom";
import avtar from "../img/pic.jpg";
import "../css/common.css";
import "../css/header1.css";
function Header() {
  return (
    <main>
      <header>
        <strong className="welcome">Welcom to Admin Panel</strong>

        <div className="icon-list">
          <ul>
            <li className="Profile">
              <figure>
                <img src={avtar} alt="" />
              </figure>
            </li>
            <strong>wasid anwer</strong>
            <li>
              <i class="fa-solid fa-bell"></i>
            </li>
            <li>
              <i class="fa-solid fa-cart-flatbed-suitcase"></i>
            </li>
            <li>
              <i class="fa-solid fa-heart"></i>
            </li>
            <li>
              <i class="fa-solid fa-location-dot"></i>
            </li>
            <li>
              <i class="fa-solid fa-user"></i>
            </li>
          </ul>
        </div>
        {/* <div className="pro-details">
          <div className="dropdown-img"></div>
          <strong>wasid anwer</strong>
          <ul className="drop-down">
            <li></li>
            <li></li>
          </ul>
        </div> */}
        {/* <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value=""
            onChange=""
          />
          <span className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div> */}
      </header>
    </main>
  );
}
export default Header;
