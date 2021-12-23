import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
function App() {
  const [lang, setLang] = useState(true);
  return (
    <div className="App">
      <NavBar setLang={setLang} lang={lang} />
    </div>
  );
}

export default App;
