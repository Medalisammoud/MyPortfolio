import React from "react";
import logo from "../Assets/Logo.png";

const NavBar = ({ setLang, lang }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSubpportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" style={{ marginLeft: "auto" }}>
            <li className="nav-item active">
              <a className="nav-link" href="#">
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
        </div>
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
    </nav>
  );
};

export default NavBar;
