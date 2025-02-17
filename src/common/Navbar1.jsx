import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/nav1.css";

function Navbar1() {
  const [isActive, setIsActive] = useState(""); // Active parent menu
  const [echronType, setEchronType] = useState(""); // Active submenu

  const evIsActive = (section) => {
    setIsActive(section === isActive ? "" : section); // Toggle active menu
  };

  const evSetEchronType = (type) => {
    setEchronType(type); // Update submenu state
  };

  return (
    <>
      <div className="echron-navbar">
        <div className="nav-bg">
          <span>
          <i className="fa fa-bars"></i>
            Online Shopping App
          </span>
        </div>
        <ul className="echronEvSidebar">
          {/* Dashboard */}
          <li
            className={isActive === "adm" ? "active" : ""}
            onClick={() => evIsActive("adm")}
          >
            <a href="#">
              <span>
                <i className="fa-solid fa-border-none" aria-hidden="true"></i>
                Dashboard
              </span>
              <span>
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
            <ul className="ul-menu">
              <li> <NavLink to="/adm">Home</NavLink></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Password</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </li>

          {/* Product */}
          <li className={isActive === "product" ? "active" : ""}onClick={() => evIsActive("product")}>
            <a href="#">
              <span>
                <i className="fa-solid fa-bath" aria-hidden="true"></i>
                Product
              </span>
              <span>
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
            <ul className="ul-menu">
              <li className={echronType === "add" ? "active" : ""} onClick={() => evSetEchronType("add")} >
                <NavLink to="/adm/add?type=add">Add</NavLink>
              </li>
              <li className={echronType === "edit" ? "active" : ""} onClick={() => evSetEchronType("edit")}>
                <NavLink to="/adm/customer?type=vip">Edit</NavLink>
              </li>
              <li className={echronType === "list" ? "active" : ""} onClick={() => evSetEchronType("list")}>
                <NavLink to="/adm/product?type=list">List</NavLink>
              </li>
              <li className={echronType === "detail" ? "active" : ""} onClick={() => evSetEchronType("detail")}>
                <NavLink to="/adm/customer?type=detail">Detail</NavLink>
              </li>
            </ul>
          </li>
          {/* Product end */}

          {/*  Category  Cato */}
          <li
            className={isActive === "category" ? "active" : ""}
            onClick={() => evIsActive("category")}
          >
            <a href="#">
              <span>
                <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                Category
              </span>
              <span>
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
            <ul className="ul-menu">
              <li className={echronType === "list" ? "active" : ""} onClick={() => evSetEchronType("list")}>
                <NavLink to="/adm/customer?type=list">List</NavLink>
              </li>
              <li className={echronType === "edit" ? "active" : ""} onClick={() => evSetEchronType("edit")}>
                <NavLink to="/adm/customer?type=vip">Edit</NavLink>
              </li>

              <li className={echronType === "create" ? "active" : ""} onClick={() => evSetEchronType("create")} >
                <NavLink to="/adm/customer?type=create">Create</NavLink>
              </li>
            </ul>
          </li>
          {/*  Category  end  cato*/}

          {/* Customer */}
          <li className={isActive === "customer" ? "active" : ""} onClick={() => evIsActive("customer")}>
            <a href="#">
              <span>
                <i className="fa-solid fa-users" aria-hidden="true"></i>
                Customer
              </span>
              <span>
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
            <ul className="ul-menu">
              <li className={echronType === "all" ? "active" : ""} onClick={() => evSetEchronType("all")} >
                <NavLink to="/adm/customer?type=all">All</NavLink>
              </li>
              <li className={echronType === "vip" ? "active" : ""} onClick={() => evSetEchronType("vip")} >
                <NavLink to="/adm/customer?type=vip">VIP</NavLink>
              </li>
              <li className={echronType === "prime" ? "active" : ""} onClick={() => evSetEchronType("prime")}>
                <NavLink to="/adm/customer?type=prime">Prime</NavLink>
              </li>
              <li className={echronType === "normal" ? "active" : ""} onClick={() => evSetEchronType("normal")} >
                <NavLink to="/adm/customer?type=normal">Normal</NavLink>
              </li>
            </ul>
          </li>

          {/*  Perched Cato */}
          <li className={isActive === "purchases" ? "active" : ""} onClick={() => evIsActive("purchases")} >
            <a href="#">
              <span>
                <i className="fa-solid fa-credit-card" aria-hidden="true"></i>
                Purchases
              </span>
              <span>
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
            <ul className="ul-menu">
              <li className={echronType === "list" ? "active" : ""} onClick={() => evSetEchronType("list")}>
                <NavLink to="/adm/customer?type=list">List</NavLink>
              </li>
              <li className={echronType === "order" ? "active" : ""} onClick={() => evSetEchronType("order")} >
                <NavLink to="/adm/customer?type=order">Order</NavLink>
              </li>
              <li className={echronType === "return" ? "active" : ""} onClick={() => evSetEchronType("return")} >
                <NavLink to="/adm/customer?type=return">Return</NavLink>
              </li>
            </ul>
          </li>
          {/* Perched end  cato*/}

          {/* Order */}
         <li className={isActive === "order" ? "active" : ""} onClick={() => evIsActive("order")} >
            <a href="#">
              <span>
                <i
                  className="fa-solid fa-cart-flatbed-suitcase"
                  aria-hidden="true"
                ></i>
                Order
              </span>
              <span>
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
            <ul className="ul-menu">
              <li>
                <NavLink to="/adm/order">List</NavLink>
              </li>
              <li>
                <NavLink to="/adm/order">Details</NavLink>
              </li>
              <li>
                <NavLink to="/adm/order">Cart</NavLink>
              </li>
              <li>
                <NavLink to="/adm/order">Check Out</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar1;
