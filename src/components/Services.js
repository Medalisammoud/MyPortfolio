import React from "react";
import design from "../Assets/design.png";
import web from "../Assets/web.png";
import mobile from "../Assets/mobile.png";
const Services = ({ lang }) => {
  return (
    <div className="service">
      <h2>{lang ? "My Services" : "Mon Services"}</h2>
      <div className="contCards">
        {/* Card Web Design */}
        <div className="card">
          <div className="image">
            <img src={design} className="card-img-top" alt="design" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Web design</h5>
            <p className="card-text">
              {lang
                ? "I approach each project individually and always focus on the result."
                : "je m'approche chaque projet individuellement et me concentre toujours sur le résultat."}
            </p>
          </div>
        </div>

        {/* Card Web Developement */}

        <div className="card">
          <div className="image">
            <img src={web} className="card-img-top" alt="web" />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {lang ? "Web Development" : "Développement web"}
            </h5>
            <p className="card-text">
              {lang
                ? "Your website will be built with new proven technologies."
                : "Votre site Web sera construit avec de nouvelles technologies éprouvées."}
            </p>
          </div>
        </div>

        {/* Card Mobile Developement */}

        <div className="card">
          <div className="image">
            <img src={mobile} className="card-img-top" alt="mobile" />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {lang ? "Mobile Development" : "Développement Mobile"}
            </h5>
            <p className="card-text">
              {lang
                ? "Your website will be built with new proven technologies."
                : "Votre site Web sera construit avec de nouvelles technologies éprouvées."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
