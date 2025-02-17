import React from "react";
import { NavLink } from "react-router-dom";
import mark from "../img/modevaLog.png";
import "../css/common.css";
import "../css/header1.css";
function Header1() {
  return (
    <main>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="head-left col-2">
              <div className="logo">
                <figure>
                  <img src={mark} alt="" />
                </figure>
              </div>
            </div>
            <div className="head-right col-10">
              <ul className="row">
                <li>
                  <a className="navi" href="#">
                    <figure>
                      <img src="" alt="" />
                    </figure>
                  </a>
                </li>
                <li>
                  <NavLink to="/adm/logout" className="navi">
                    <span className="log-out">
                      <i className="fa fa-sign-out"></i> Logout
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
export default Header1;
