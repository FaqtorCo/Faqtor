/* eslint-disable  */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import SEO from "../parts/SEO";
import LandingPage from "./LandingPage";
import Aboutus from "./Aboutus";
import ProjectPage from "./ProjectPage";
import { DiscussProjectPage } from "./DiscussProjectPage";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

export default function MainLandingPage() {
  return (
    <div>
      <SEO
        title="Faqtor - Your Trusted Digital Partner"
        description="Faqtor's AI doesn't just support your team—it evolves your business model into something competitors can't replicate."
        keywords="ai chatbot, calling agent, automation, web development, artificial intelligence, digital solutions, faqtor"
        url="/"
      />

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

      <Footer />
    </div>
  );
}
