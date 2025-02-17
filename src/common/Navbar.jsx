import React, { useState } from "react";
import "../css/common.css";
import { Link } from "react-router-dom";
import modeva1 from "../img/anna1.png";
import "../css/nav.css";
function Navbar() {
  const [isProductOpen, setIsProductOpen] = useState(false);

  const toggleProducts = () => {
    setIsProductOpen(!isProductOpen);
  };

  return (
    <nav className="markup-nav">
      <div className="markup-logo">
        <img src={modeva1} alt="" />
      </div>
      <ul className="marknav">
        <li onClick={toggleProducts}>
          <Link to="/dashboard">
            {" "}
            <i className="fa-solid fa-list"></i>Dashboard
          </Link>
        </li>
        <li onClick={toggleProducts}>
          <i className="fa-solid fa-shirt"></i>Products
          {isProductOpen && (
            <ul className="product-dropdown">
              <li>
                <Link to="/Add">Add Product</Link>
              </li>
              <li>
                <Link to="/edit-product">Edit Product</Link>
              </li>
              <li>
                <Link to="/List">View Products</Link>
              </li>
            </ul>
          )}
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
