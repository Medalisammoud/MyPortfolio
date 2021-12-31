import React from "react";
import Typed from "react-typed";

const Header = ({ lang }) => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>
          {lang
            ? "Web development and Mobile development"
            : "Développement Web et Développement Mobile"}
        </h1>
        <Typed
          className="typedText"
          strings={["Web Design", "Web Development", "Mobile Development"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          {lang ? "Contact Me" : "Contactez moi"}
        </a>
      </div>
    </div>
  );
};

export default Header;
