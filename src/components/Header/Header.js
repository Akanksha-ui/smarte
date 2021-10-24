import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav class="my_bg_color navbar navbar-expand-lg navbar-dark ">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <NavLink activeClassName="my_navbar" class="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
              // style="--bs-scroll-height: 100px;"
            >
              <li class="nav-item">
                <NavLink
                  activeClassName="my_navbar"
                  class=""
                  aria-current="page"
                  to="/Products"
                >
                  Products
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <NavLink
                  activeClassName="my_navbar"
                  class=" dropdown-toggle"
                  to="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </NavLink>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <NavLink
                      activeClassName="my_navbar"
                      class="dropdown-item"
                      to="#"
                    >
                      Service 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="my_navbar"
                      class="dropdown-item"
                      to="#"
                    >
                      Service 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="my_navbar"
                      class="dropdown-item"
                      to="#"
                    >
                      Service 3
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NavLink activeClassName="my_navbar" class="" to="#">
                  Stories
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink activeClassName="my_navbar" class="" to="/About">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
