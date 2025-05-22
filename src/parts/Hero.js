/* eslint-disable */

import React, { useRef, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";
import Button from "../elements/Button";
import Side from "../json/side.json";
import Background from '../assets/videos/background.mp4'
export default function Hero() {

  const videoRef = useRef(null);

  useEffect(() => {
    // Force video to play on component mount
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);


  return (
    <section className="hero relative ">
      {/* Background Video */}
      {/* <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={Background} type="video/mp4" />
          <source src="/path/to/your/video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      {/* Content - now with relative positioning and z-index to appear above video */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center container mx-auto px-4 py-16">
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
          <h2 className="text-5xl sm:text-5xl font-bold leading-tight mb-5" >
            The AI-Powered Ecosystem For <br />
            Your Business
          </h2>

          <p className="font-light text-xl leading-relaxed mb-16" style={{color:'white'}}>
            Faqtor's AI doesn't just support your team—it evolves your business model
            into something competitors can't replicate.
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
              animationData={Side} 
              loop={true}
              style={{ width: '400px', height: '400px' }}
              className="overflow-visible" // This helps with any clipping issues
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}