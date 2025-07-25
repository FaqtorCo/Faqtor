/* eslint-disable  */

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation

import Button from "../elements/Button";
import BrandIcon from "./BrandIcon";

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const location = useLocation(); // Get current location
  const isHomePage = location.pathname === "/";

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
    <header className="header relative z-50">
      {" "}
      {/* Added relative z-50 to ensure header is above all content */}
      {/* Main header container with responsive padding */}
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-0">
        <BrandIcon />

        {/* Mobile menu button with better touch target */}
        <button
          className="block lg:hidden focus:outline-none text-[#DAF7A6] p-2 -mr-2 relative z-50" // Added z-50 to button
          onClick={() => setIsCollapse(!isCollapse)}
          aria-label="Toggle menu"
          aria-expanded={isCollapse}
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className={`${isCollapse ? "hidden" : "block"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            <path
              className={`${!isCollapse ? "hidden" : "block"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {/* Desktop Navigation */}
      <ul className="hidden tracking-widest items-center lg:flex flex-row mt-0 whitespace-nowrap">
        <li>
          <Button
            as="a"
            href="#home"
            onClick={handleSmoothScroll("home")}
            className="font-medium text-lg px-3 py-1 no-underline cursor-pointer text-[#DAF7A6] transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-white hover:bg-clip-text hover:text-transparent"
            type="link"
          >
            Home
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            as="a"
            href="#services"
            onClick={handleSmoothScroll("services")}
            className="font-medium text-lg px-3 py-1 no-underline cursor-pointer text-[#DAF7A6] transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-white hover:bg-clip-text hover:text-transparent"
            type="link"
          >
            Services
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            as="a"
            href="#projects"
            onClick={handleSmoothScroll("projects")}
            className="font-medium text-lg px-3 py-1 no-underline cursor-pointer text-[#DAF7A6] transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-white hover:bg-clip-text hover:text-transparent"
            type="link"
          >
            Our Projects
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          {/* Changed from scroll to Router Link for blogs */}
          <Button
            as={Link}
            to="/blogs"
            className="font-medium text-lg px-3 py-1 no-underline cursor-pointer text-[#DAF7A6] transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-white hover:bg-clip-text hover:text-transparent whitespace-nowrap"
            type="link"
          >
            Blogs
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            as="a"
            href="#aboutus"
            onClick={handleSmoothScroll("aboutus")}
            className="font-medium text-lg px-3 py-1 no-underline cursor-pointer text-[#DAF7A6] transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-white hover:bg-clip-text hover:text-transparent whitespace-nowrap"
            type="link"
          >
            About us
          </Button>
        </li>

        <li>
          <Button
            as="a"
            href="#discuss-project"
            onClick={handleSmoothScroll("discuss-project")}
            className="font-medium text-base ml-3 px-4 py-2 bg-[#f2ffd9] text-black rounded-full border-2 border-[#DAF7A6] hover:bg-[#C8E6A0] hover:border-[#C8E6A0] transition-all duration-200 cursor-pointer transform hover:scale-105 whitespace-nowrap"
            type="link"
          >
            Book a Call
          </Button>
        </li>
      </ul>
      {/* Mobile Navigation Menu */}
      <Transition
        show={isCollapse}
        enter="transition-all duration-300"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div className="lg:hidden absolute top-full left-0 right-0 z-40">
          {" "}
          {/* Changed z-50 to z-40 and added positioning */}
          <ul className="flex flex-col tracking-widest my-4 sm:my-6 mx-4 sm:mx-6 bg-white border-b-2 border-gray-300 shadow-xl rounded-b-lg">
            {" "}
            {/* Added shadow-xl for better visibility */}
            <li className="py-3 px-4 border-b border-gray-100 last:border-b-0">
              <Button
                as="a"
                href="#home"
                onClick={handleSmoothScroll("home")}
                className="font-medium text-base sm:text-lg w-full text-left px-4 sm:px-6 py-2 no-underline cursor-pointer text-gray-800 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-white hover:bg-clip-text hover:text-transparent block rounded-md hover:bg-gray-50"
                type="link"
              >
                Home
              </Button>
            </li>
            <li className="py-3 px-4 border-b border-gray-100 last:border-b-0">
              <Button
                as="a"
                href="#services"
                onClick={handleSmoothScroll("services")}
                className="font-medium text-base sm:text-lg w-full text-left px-4 sm:px-6 py-2 no-underline cursor-pointer text-gray-800 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-white hover:bg-clip-text hover:text-transparent block rounded-md hover:bg-gray-50"
                type="link"
              >
                Services
              </Button>
            </li>
            <li className="py-3 px-4 border-b border-gray-100 last:border-b-0">
              <Button
                as="a"
                href="#aboutus"
                onClick={handleSmoothScroll("aboutus")}
                className="font-medium text-base sm:text-lg w-full text-left px-4 sm:px-6 py-2 no-underline cursor-pointer text-gray-800 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-white hover:bg-clip-text hover:text-transparent block rounded-md hover:bg-gray-50"
                type="link"
              >
                About us
              </Button>
            </li>
            <li className="py-3 px-4 border-b border-gray-100 last:border-b-0">
              {/* Changed from scroll to Router Link for blogs in mobile menu */}
              <Button
                as={Link}
                to="/blogs"
                className="font-medium text-base sm:text-lg w-full text-left px-4 sm:px-6 py-2 no-underline cursor-pointer text-gray-800 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-white hover:bg-clip-text hover:text-transparent block rounded-md hover:bg-gray-50"
                type="link"
              >
                Blogs
              </Button>
            </li>
            <li className="py-3 px-4 border-b border-gray-100 last:border-b-0">
              <Button
                as="a"
                href="#projects"
                onClick={handleSmoothScroll("projects")}
                className="font-medium text-base sm:text-lg w-full text-left px-4 sm:px-6 py-2 no-underline cursor-pointer text-gray-800 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-white hover:bg-clip-text hover:text-transparent block rounded-md hover:bg-gray-50"
                type="link"
              >
                Our Projects
              </Button>
            </li>
            <li className="py-4 sm:py-6 px-4 flex justify-center">
              <Button
                as="a"
                href="#discuss-project"
                onClick={handleSmoothScroll("discuss-project")}
                className="font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 bg-[#f2ffd9] text-black rounded-full border-2 border-[#DAF7A6] hover:bg-[#C8E6A0] hover:border-[#C8E6A0] transition-all duration-200 cursor-pointer transform hover:scale-105 shadow-md min-w-[160px] text-center"
                type="link"
              >
                Book a Call
              </Button>
            </li>
          </ul>
        </div>
      </Transition>
      {/* Overlay for mobile menu */}
      {isCollapse && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30 lg:hidden" // Changed z-40 to z-30
          onClick={() => setIsCollapse(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}