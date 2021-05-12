import React, { Component } from "react";
import LanguageToggler from "../LanguageToggler";
import SocialMediaIcons from "../../common-component/SocialMediaIcons";
import Navigation from "../Navigation";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <LanguageToggler />
        <SocialMediaIcons SocialMediaIconsLandscape="social-media-icons-landscape" />
        <Navigation />
      </div>
    );
  }
}
