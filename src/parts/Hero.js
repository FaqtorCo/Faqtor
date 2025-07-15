/* eslint-disable */

import React, { useRef, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";
import Button from "../elements/Button";
import Side from "../json/side.json";

export default function Hero() {
  const videoRef = useRef(null);
  const isHomePage = location.pathname === "/";
  const [isCollapse, setIsCollapse] = useState(false);

  useEffect(() => {
    // Force video to play on component mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video play failed:", error);
      });
    }
  }, []);


  const handleSmoothScroll = (targetId) => {
    return (e) => {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      // If we're not on the homepage, navigate to homepage first then scroll
      if (!isHomePage) {
        window.location.href = `/#${targetId}`;
        return;
      }
      
      // Update the hash in the URL
      window.location.hash = targetId;
      
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      // Close mobile menu after clicking
      setIsCollapse(false);
    };
  };

  return (
    <section className="hero relative">
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

      {/* Content - now with relative positioning and z-index to appear above video but below header */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center container mx-auto px-4 py-16">
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
          <h2 className="text-5xl sm:text-5xl font-bold leading-tight mb-5">
            The AI-Powered Ecosystem For <br />
            Your Business
          </h2>

          <p
            className="font-light text-xl leading-relaxed mb-16"
            style={{ color: "white" }}
          >
            Faqtor's AI doesn't just support your team—it evolves your business
            model into something competitors can't replicate.
          </p>

          <Fade direction="up" delay={500} triggerOnce>
            <div className="flex flex-col sm:flex-row gap-5">
              <div>
                <Button
                  href="#projects"
                  onClick={handleSmoothScroll("projects")}
                  type="link"
                  className="flex items-center justify-center px-8 py-4 text-black text-xl bg-[#f2ffd9] border-2 border-[#DAF7A6] rounded-lg shadow-2xl hover:bg-[#C8E6A0] hover:border-[#C8E6A0] transition duration-200 whitespace-nowrap min-w-max"
                >
                  See Our Work
                  <svg
                    className="ml-2 w-7 h-7 text-black animate-bounce-x"
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
              </div>
              <div>
                <Button
                  href="/demo-agents"
                  type="link"
                  className="flex items-center justify-center px-8 py-4 text-black text-xl bg-[#f2ffd9] border-2 border-[#DAF7A6] rounded-lg shadow-2xl hover:bg-[#C8E6A0] hover:border-[#C8E6A0] transition duration-200 whitespace-nowrap min-w-max"
                >
                  Demo our Agents
                  <svg
                    className="ml-2 w-7 h-7 text-black animate-bounce-x"
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
              </div>
            </div>
          </Fade>
        </div>

        {/* Lottie animation container with lower z-index */}
        <div className="flex pt-5 md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/2 relative z-0">
          {" "}
          {/* Added z-0 to ensure it's below header */}
          <Fade direction="up" triggerOnce>
            <Lottie
              animationData={Side}
              loop={true}
              style={{ width: "400px", height: "400px" }}
              className="overflow-visible relative z-0" // Added z-0 and ensured it's below header
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}