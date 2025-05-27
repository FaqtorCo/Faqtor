/* eslint-disable  */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import {
   Advantages, Testimonials,
} from 'json/landingPageData';
import Hero from 'parts/Hero';
import Advantage from 'parts/Advantage';
import Testimonial from 'parts/Testimonial';
import Services from './Services';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <Advantage data={Advantages} />
        {/* <Testimonial data={Testimonials} /> */}

      </>
    );
  }
}
