import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

import Navbar from "./components/navbar-components/Navbar";
import Footer from "./components/footer-components/Footer";

import englishText from "./data/EnglishText";
import vietnamText from "./data/VietnamText";
import Context from "./context";

import "./helpers/fontAwesome";
import "./styles/main.scss";

export default function App() {
  const DEFAULT_TEXT_CONTENT = englishText;
  const DEFAULT_LANGUAGE_TOGGLE = false;
  const [textContent, setTextContent] = useState(DEFAULT_TEXT_CONTENT);
  const [languageToggle, setLanguageToggle] = useState(DEFAULT_LANGUAGE_TOGGLE);
  function handleSwitch() {
    languageToggle === false
      ? setTextContent(vietnamText)
      : setTextContent(englishText);
    setLanguageToggle(!languageToggle);
  }
  return (
    <BrowserRouter>
      <Context.Provider value={{ textContent, FontAwesomeIcon, handleSwitch }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Resume} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </Context.Provider>
    </BrowserRouter>
  );
}
