/* eslint-disable  */

import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";

import Button from "../elements/Button";
import BrandIcon from "./BrandIcon";

// Enhanced Events Button Component
const EventsButton = ({ to, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [confettiParticles, setConfettiParticles] = useState([]);

  useEffect(() => {
    const particles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      color: ['#DAF7A6', '#C8E6A0', '#FFD700', '#FF69B4', '#87CEEB'][Math.floor(Math.random() * 5)],
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }));
    setConfettiParticles(particles);
  }, []);

  return (
    <div className="relative">
      {/* Confetti particles */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {confettiParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 rounded-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: particle.color,
              opacity: isHovered ? 0.8 : 0,
              transform: `rotate(${particle.rotation}deg) ${isHovered ? 'translateY(-20px) scale(1)' : 'translateY(0) scale(0)'}`,
              transition: `all ${particle.duration}s ease-out ${particle.delay}s`,
              animation: isHovered ? `confetti-float ${particle.duration}s ease-out infinite ${particle.delay}s` : 'none',
            }}
          />
        ))}
      </div>

      <Link
        to={to}
        className="group relative inline-flex items-center justify-center px-6 py-2 text-lg rounded-lg transition-all duration-500 whitespace-nowrap overflow-hidden font-medium backdrop-blur-sm text-[#DAF7A6] bg-transparent border-2 border-[#DAF7A6]/30 hover:bg-[#DAF7A6]/10 hover:border-[#DAF7A6] hover:shadow-[0_0_30px_rgba(218,247,166,0.4)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        {/* Sparkle effects */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animation: `sparkle ${1.5 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`,
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}

        {/* Calendar icon animation */}
        <div className="relative mr-2">
          <div className={`w-6 h-6 border-2 border-current rounded transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
            {/* Calendar grid */}
            <div className="absolute inset-0 p-0.5">
              <div className="grid grid-cols-3 gap-0.5 h-full">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-current rounded-sm opacity-0 group-hover:opacity-100"
                    style={{
                      animation: isHovered ? `calendar-fill 0.8s ease-out forwards ${i * 0.1}s` : 'none',
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Calendar header */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 flex gap-1">
              <div className="w-0.5 h-2 bg-current rounded-full"></div>
              <div className="w-0.5 h-2 bg-current rounded-full"></div>
            </div>
          </div>

          {/* Rotating event badges */}
          {isHovered && [0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#DAF7A6] rounded-full"
              style={{
                animation: `orbit-event 2s linear infinite ${i * 0.6}s`,
              }}
            />
          ))}
        </div>

        {/* Text with shimmer */}
        <span className="relative z-10 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
          <span className="relative">
            {children}
            {/* Animated underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DAF7A6] via-[#FFD700] to-[#DAF7A6] group-hover:w-full transition-all duration-500"></span>
          </span>

          {/* Animated ticket icon */}
          <svg 
            className="w-5 h-5 transform transition-all duration-500 group-hover:translate-x-1 group-hover:rotate-12"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" 
            />
          </svg>
        </span>

        {/* Celebration burst effect */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-1 h-8 bg-gradient-to-t from-[#DAF7A6] to-transparent"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-50%)`,
                  transformOrigin: '50% 100%',
                  animation: `burst-lines 0.6s ease-out forwards ${i * 0.05}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="absolute inset-0 rounded-lg border-2 border-[#DAF7A6]/50 animate-ping"
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: '1.5s',
              }}
            />
          ))}
        </span>

        {/* Live badge */}
        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-1 bg-gradient-to-r from-[#FF69B4] to-[#FFD700] px-2 py-0.5 rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs text-white font-bold tracking-wider">NEW</span>
          </div>
        </div>
      </Link>

      {/* CSS Animations */}
      <style jsx="true">{`
        @keyframes confetti-float {
          0% { 
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 1;
          }
          100% { 
            transform: translateY(-60px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0%, 100% { 
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% { 
            transform: scale(1.5) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes calendar-fill {
          0% { 
            opacity: 0;
            transform: scale(0);
          }
          100% { 
            opacity: 0.7;
            transform: scale(1);
          }
        }

        @keyframes orbit-event {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) translateX(16px) rotate(0deg);
          }
          100% { 
            transform: translate(-50%, -50%) rotate(360deg) translateX(16px) rotate(-360deg);
          }
        }

        @keyframes burst-lines {
          0% { 
            transform: rotate(var(--rotation)) translateY(0) scaleY(0);
            opacity: 1;
          }
          100% { 
            transform: rotate(var(--rotation)) translateY(-20px) scaleY(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleSmoothScroll = (targetId) => {
    return (e) => {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      if (!isHomePage) {
        window.location.href = `/#${targetId}`;
        return;
      }

      window.location.hash = targetId;
      
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setIsCollapse(false);
    };
  };

  return (
    <header className="header relative z-50">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-0">
        <BrandIcon />

        <button
          className="block lg:hidden focus:outline-none text-[#DAF7A6] p-2 -mr-2 relative z-50"
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
        
        {/* Enhanced Events Button */}
        <li className="py-2 lg:py-0">
          <EventsButton to="/events">
            Events
          </EventsButton>
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
          <ul className="flex flex-col tracking-widest my-4 sm:my-6 mx-4 sm:mx-6 bg-white border-b-2 border-gray-300 shadow-xl rounded-b-lg">
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
              <Button
                as={Link}
                to="/events"
                className="font-medium text-base sm:text-lg w-full text-left px-4 sm:px-6 py-2 no-underline cursor-pointer text-gray-800 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-white hover:bg-clip-text hover:text-transparent block rounded-md hover:bg-gray-50"
                type="link"
              >
                Events
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
          className="fixed inset-0 bg-black bg-opacity-25 z-30 lg:hidden"
          onClick={() => setIsCollapse(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}