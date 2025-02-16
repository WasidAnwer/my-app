import React from "react";
import "../css/common.css";
import modeva1 from "../img/marks.png";
import "../css/nav.css";
function Navbar() {
  return (
    <nav className="markup-nav">
      <div className="markup-logo">
        <img src={modeva1} alt="" />
      </div>
      <ul className="marknav">
        <li>
          <i className="fa-solid fa-list"></i>Dashboard
        </li>
        <li>
          <i className="fa-solid fa-shirt"></i>Products
        </li>
        <li>
          <i className="fa-solid fa-notes-medical"></i>Category
        </li>
        <li>
          <i className="fa-solid fa-bag-shopping"></i>Orders
        </li>
        <li>
          <i className="fa-solid fa-cube"></i>Inventery
        </li>
        <li>
          <i className="fa-solid fa-cart-shopping"></i>Purchases
        </li>
        <li>
          <i class="fa-solid fa-people-line"></i>Customers
        </li>
        <li>
          <i className="fa-solid fa-gear"></i>Setting
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
