import React, { useState } from "react";

const logo = require("../assets/logo/logo512.png");

const Navbar = () => {
  const [showButtons, setShowButton] = useState(true);

  const onClickNavbarToggler = () => {
    setShowButton(!showButtons);
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-black p-0">
      <div className="container-fluid d-flex ">
        <button
          className="navbar-toggler d-lg-none p-0 me-2 border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={onClickNavbarToggler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand " href="/#">
          <img src={logo} alt="logo512" />
        </a>
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
        <div
          className={
            showButtons
              ? "navbar-button-wrapper d-flex gap-2  justify-content-end flex-fill"
              : "navbar-button-wrapper d-none"
          }
        >
          <button className="logInBtn btn btn-sm border-0 py-1 text-white">
            LOG IN
          </button>
          <button className="signUpBtn btn btn-sm border-0 py-1 btn-primary ">
            SIGN UP
          </button>
          <button className="myBetBtn btn btn-sm border-0 py-1 btn-dark d-none d-md-flex flex-column align-items-center justify-content-center">
            <span>MY BETS</span>
            <i className="fa-solid fa-circle-plus text-primary"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
