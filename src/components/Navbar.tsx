import React from "react";

const logo = require("../assets/logo/logo512.png");

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container">
        <a className="navbar-brand " href="/#">
          <img src={logo} alt="logo512" />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#" aria-current="page">
                Home <span className="visually-hidden"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div
                className="dropdown-menu text-bg-dark"
                aria-labelledby="dropdownId"
              >
                <a className="dropdown-item text-white" href="/#">
                  Action 1
                </a>
                <a className="dropdown-item text-white" href="/#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
