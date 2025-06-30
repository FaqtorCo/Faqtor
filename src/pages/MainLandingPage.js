/* eslint-disable  */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import LandingPage from './LandingPage';
import Aboutus from './Aboutus';
import ProjectPage from './ProjectPage';
import { DiscussProjectPage } from './DiscussProjectPage';
import Header from '../parts/Header';
import Footer from '../parts/Footer'; // Add Footer import

export default function MainLandingPage() {
  return (
    <div>
      <Header />

      <section id="home">
        <LandingPage />
      </section>
      <section id="aboutus">
        <Aboutus />
      </section>
      <section id="projects">
        <ProjectPage />
      </section>
      <section id="discuss-project">
        <DiscussProjectPage />
      </section>
      
      <Footer /> {/* Add Footer component */}
    </div>
  );
}