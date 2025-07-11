/* eslint-disable  */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

import heroPortfolio from "assets/images/hero/portfolioHero.png";

export default function HeroPortfolio() {
  return (
    <div>
      {/* Centered About Us Heading */}
      <div className="w-full flex justify-center items-center">
        <h1
          className="text-4xl md:text-5xl font-bold mb-8 mt-4 text-center"
          style={{ color: "#daf7a7", textShadow: "none" }}
        >
          Projects
        </h1>
      </div>
      <section className="hero sm:items-center lg:items-start sm:flex-row">
        <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
          <Fade direction="up" triggerOnce>
            <h1 className="text-6xl  font-bold leading-tight mb-5">
              Portfolio
            </h1>
          </Fade>
          <Fade direction="up" triggerOnce delay={400}>
            <p className="font-light text-xl  leading-relaxed">
            As Services provider that creates immersive web experiences, intelligent data visualizations, custom AI solutions, and automated business processes, we've been trusted by clients from all around the world to deliver results that transform how they operate and engage with customers.            </p>
          </Fade>
        </div>
        <div className="w-full sm:w-1/2 sm:pr-12">
          <Fade direction="up" triggerOnce>
            <img src={heroPortfolio} alt="Hero" />
          </Fade>
        </div>
      </section>
    </div>
  );
}
