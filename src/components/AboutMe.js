import React from "react";
import imgProfile from "../Assets/profile.png";
import myCv from "../Assets/Mohamed Ali Sammoud CV.pdf";

const AboutMe = ({ lang }) => {
  return (
    <div className="about">
      <div className="profile">
        <img src={imgProfile} alt="profile" />
      </div>

      {lang ? (
        <div className="aboutText">
          <h2>About Me</h2>
          <p>
            I'm Mohamed Ali, Full stack developer, with a diploma in information
            systems development (2016) and 1st year engineering cycle (2021).
            Computer buff, I learned to code from an early age in various
            computer languages (Javascript, PHP, ReactJS ...) and created
            personal projects. Versatile, I master the different technical
            stages of creating a site or an application (web or mobile), from
            understanding user needs, to frontend and backend development,
            including maintenance.
          </p>
          <a
            href={myCv}
            className="btn-dow"
            download="Mohamed Ali Sammoud CV.pdf"
          >
            {lang ? "Download" : "Télécharger"}
          </a>
        </div>
      ) : (
        <div className="aboutText">
          <h2>À Propos</h2>
          <p>
            Je suis Mohamed Ali, Développeur full stack , avec un diplôme en
            développement des systèmes d'information (2016) et 1ére année cycle
            ingénieur (2021) . Mordu d’informatique, j’ai appris à coder dès mon
            plus jeune âge dans divers langages informatiques (Javascript, PHP,
            ReactJS…) et ai créé des projets personnels. Polyvalent, je maîtrise
            les différentes étapes techniques de la création d’un site ou d’une
            application (web ou Mobile) de la compréhension des besoins
            utilisateurs, au développement frontend et backend en passant par la
            maintenance.
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
