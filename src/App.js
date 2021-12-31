import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Particles from "react-particles-js";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
function App() {
  const [lang, setLang] = useState(true);
  return (
    <div className="App">
      {/* <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              }
            },
            shape :{
              type:"circle",
              stroke: {
                width:6,
                color: "#f9ab00"
              }
            }
          }
        }}
      /> */}
      <NavBar setLang={setLang} lang={lang} />
      <Header lang={lang} />
      <AboutMe lang={lang} />
      <Services lang={lang} />
    </div>
  );
}

export default App;
