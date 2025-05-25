/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import Button from "../elements/Button";
import BrandIcon from "./BrandIcon";

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);

  const handleSmoothScroll = (targetId) => {
    return (e) => {
      if (e && e.preventDefault) {
        e.preventDefault();
      }
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      // Close mobile menu after clicking
      setIsCollapse(false);
    };
  };

  return (
    <header className="header">
      <div className="flex justify-between px-4 lg:px-0">
        <BrandIcon />

        <button
          className="block text-theme-blue lg:hidden focus:outline-none"
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <svg
            className="w-8 h-8"
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

      <ul className="hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0">
        <li>
          <Button
            as="a"
            href="#home"
            onClick={handleSmoothScroll('home')}
            className="font-medium text-lg px-5 no-underline hover:underline cursor-pointer"
            type="link"
          >
            Home
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            as="a"
            href="#services"
            onClick={handleSmoothScroll('services')}
            className="font-medium text-lg px-5 no-underline hover:underline cursor-pointer"
            type="link"
          >
            Services
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            as="a"
            href="#aboutus"
            onClick={handleSmoothScroll('aboutus')}
            className="font-medium text-lg px-5 no-underline hover:underline cursor-pointer"
            type="link"
          >
            About us
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            as="a"
            href="#projects"
            onClick={handleSmoothScroll('projects')}
            className="font-medium text-lg px-5 no-underline hover:underline cursor-pointer"
            type="link"
          >
            Projects
          </Button>
        </li>
        <li>
          <Button
            as="a"
            href="#discuss-project"
            onClick={handleSmoothScroll('discuss-project')}
            className="font-medium text-lg mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 cursor-pointer"
            type="link"
          >
            Discuss Project
          </Button>
        </li>
      </ul>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="transition duration-300 ease-in data-[closed]:opacity-0 ">
          <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
            <li className="py-2 ">
              <Button
                as="a"
                href="#home"
                onClick={handleSmoothScroll('home')}
                className="font-medium px-10 no-underline hover:underline cursor-pointer"
                type="link"
              >
                Home
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                as="a"
                href="#services"
                onClick={handleSmoothScroll('services')}
                className="font-medium px-10 no-underline hover:underline cursor-pointer"
                type="link"
              >
                Services
              </Button>
            </li>
            <li className="py-2 bg-white ">
              <Button
                as="a"
                href="#aboutus"
                onClick={handleSmoothScroll('aboutus')}
                className="font-medium px-10 no-underline hover:underline cursor-pointer"
                type="link"
              >
                About us
              </Button>
            </li>
            <li className="py-2 bg-white ">
              <Button
                as="a"
                href="#projects"
                onClick={handleSmoothScroll('projects')}
                className="font-medium px-10 no-underline hover:underline cursor-pointer"
                type="link"
              >
                Projects
              </Button>
            </li>
            <li className="mx-auto my-9 bg-white">
              <Button
                as="a"
                href="#discuss-project"
                onClick={handleSmoothScroll('discuss-project')}
                className="font-bold mx-auto px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 cursor-pointer"
                type="link"
              >
                Discuss Project
              </Button>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
}
