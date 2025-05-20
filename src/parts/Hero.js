/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from "react";
import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";
import Button from "../elements/Button";
import homeAnim from "../json/homeAnim.json";

export default function Hero() {
  return (
    <section className="hero">
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
        <h2 className="text-5xl sm:text-5xl text-theme-blue font-bold leading-tight mb-5">
          The AI-Powered Ecosystem For <br />
          Your Business
        </h2>

        <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
          Faqtor’s AI doesn’t just support your team—it evolves your business
          model into something competitors can’t replicate.
        </p>

        <Fade direction="up" delay={500} triggerOnce>
          <Button
            href="/project"
            type="link"
            className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200"
          >
            See Our Work
            <svg
              className="ml-2 w-7 h-7 text-white animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </Fade>
      </div>

      <div className="flex pt-5 md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/2">
        <Fade direction="up" triggerOnce>
          <Lottie
            animationData={homeAnim}
            loop
            autoplay
            style={{ width: 500, height: 500 }}
          />
        </Fade>
      </div>
    </section>
  );
}
