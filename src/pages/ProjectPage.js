/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import HeroPortfolio from 'parts/HeroPortfolio';

import AllPortfolio from 'parts/AllPortfolio';

import { Portfolios } from 'json/landingPageData';

export default class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <HeroPortfolio />
        <AllPortfolio data={Portfolios} />

      </>
    );
  }
}
