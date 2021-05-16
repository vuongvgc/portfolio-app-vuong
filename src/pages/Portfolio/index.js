import React, { Component } from "react";
import PortfolioTilesContainer from "../../components/portfolio-components/PortfolioTilesContainer";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-section">
        <PortfolioTilesContainer />
      </div>
    );
  }
}
