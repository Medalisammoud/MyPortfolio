import React from "react";
import logo from "../Assets/Logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ setLang, lang }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ marginLeft: "auto" }}
          >
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#">
                {lang ? "Home" : "Accueil"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {lang ? "About me" : "À Propos"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {lang ? "Skills" : "COMPÉTENCES"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="language">
            <ul>
              <li className="nav-item" onClick={() => setLang(false)}>
                FR
              </li>
              <li className="nav-item" onClick={() => setLang(true)}>
                ANG
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
