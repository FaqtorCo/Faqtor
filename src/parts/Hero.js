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
  const [animatedElements, setAnimatedElements] = useState([]);

  // Create floating particles for button animation
  useEffect(() => {
    const particles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
      brightness: Math.random() * 0.8 + 0.2,
    }));
    setAnimatedElements(particles);
  }, []);

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

  // Enhanced Button Component
  const EnhancedButton = ({ href, onClick, children, variant = "primary", className = "" }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const baseClasses = "group relative flex items-center justify-center px-8 py-4 text-xl rounded-lg transition-all duration-500 whitespace-nowrap min-w-max overflow-hidden font-bold backdrop-blur-sm";
    
    const variantClasses = {
      primary: "text-black bg-[#f2ffd9] border-2 border-[#DAF7A6] hover:bg-[#C8E6A0] hover:border-[#C8E6A0] shadow-2xl",
      demo: "text-white bg-transparent border-2 border-[#DAF7A6]/40 hover:border-[#DAF7A6] hover:shadow-[0_0_40px_rgba(218,247,166,0.3)]"
    };

    return (
      <div className="relative">
        {/* Floating particles for demo button */}
        {variant === "demo" && (
          <div className="absolute inset-0 pointer-events-none">
            {animatedElements.slice(0, 8).map((particle) => (
              <div
                key={particle.id}
                className="absolute rounded-full bg-[#DAF7A6]"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  opacity: isHovered ? particle.brightness * 0.8 : particle.brightness * 0.3,
                  animation: `float ${2 + particle.delay}s ease-in-out infinite, twinkle ${1.5 + particle.delay}s ease-in-out infinite`,
                  animationDelay: `${particle.delay}s`,
                  transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        )}

        <a
          href={href}
          onClick={onClick}
          className={`${baseClasses} ${variantClasses[variant]} ${className}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transform: isHovered && variant === "demo" ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
            boxShadow: isHovered && variant === "demo" 
              ? '0 20px 40px rgba(218, 247, 166, 0.4), 0 0 60px rgba(218, 247, 166, 0.3)' 
              : '0 10px 20px rgba(0, 0, 0, 0.2)'
          }}
        >
          {/* Glow effect background */}
          {variant === "demo" && (
            <>
              {/* Outer glow - always playing */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#DAF7A6]/10 via-[#C8E6A0]/10 to-[#DAF7A6]/10 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500"
                   style={{
                     animation: 'glow-pulse 2s ease-in-out infinite'
                   }}></div>
              
              {/* Matrix-style background - always playing */}
              <div className="absolute inset-0 rounded-lg opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                   style={{
                     background: `
                       radial-gradient(circle at 20% 20%, #DAF7A6 0.5px, transparent 0.5px),
                       radial-gradient(circle at 80% 80%, #C8E6A0 0.5px, transparent 0.5px),
                       radial-gradient(circle at 40% 60%, #DAF7A6 0.3px, transparent 0.3px)
                     `,
                     backgroundSize: '25px 25px, 30px 30px, 20px 20px',
                     animation: 'matrix-scroll 4s linear infinite'
                   }}>
              </div>
              
              {/* Animated border - always playing */}
              <div className="absolute inset-0 rounded-lg opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-[#DAF7A6]/30 via-[#C8E6A0]/30 to-[#DAF7A6]/30"
                     style={{
                       backgroundSize: '300% 300%',
                       animation: 'gradient-border 3s ease infinite'
                     }}>
                </div>
              </div>

              {/* Pulse rings - always playing */}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-lg border border-[#DAF7A6]/20 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    animation: `pulse-ring 4s ease-out infinite`,
                    animationDelay: `${i * 1}s`,
                  }}
                />
              ))}

              {/* Energy waves - always playing */}
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, transparent 40%, rgba(218, 247, 166, 0.15) 50%, transparent 60%)',
                    animation: `energy-wave 2s ease-in-out infinite`,
                    animationDelay: `${i * 1}s`,
                  }}
                />
              ))}

              {/* Shimmer effect - always playing */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DAF7A6]/30 to-transparent skew-x-12 opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                   style={{
                     animation: 'shimmer-continuous 3s ease-in-out infinite'
                   }}></div>
            </>
          )}

          {/* Content */}
          <div className="relative z-10 flex items-center gap-3">
            {variant === "demo" && (
              <div className="relative">
                {/* Holographic AI Icon */}
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-[#DAF7A6]/20 to-[#C8E6A0]/20 border border-[#DAF7A6]/50 flex items-center justify-center transition-all duration-500 ${isHovered ? 'animate-spin-slow scale-110' : ''}`}>
                  {/* Central core */}
                  <div className="w-4 h-4 rounded-full bg-[#DAF7A6]/80 relative animate-pulse">
                    {/* Neural connections */}
                    <div className="absolute inset-0 rounded-full">
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                        <div
                          key={i}
                          className="absolute w-0.5 h-2 bg-[#DAF7A6]"
                          style={{
                            transform: `rotate(${angle}deg)`,
                            transformOrigin: '50% 100%',
                            top: '-4px',
                            left: '50%',
                            marginLeft: '-0.125rem',
                            opacity: isHovered ? 0.8 : 0.4,
                            transition: 'opacity 0.5s ease',
                            animation: isHovered ? `neural-flash 1s ease-in-out infinite ${i * 0.1}s` : 'none'
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Orbiting particles */}
                    {isHovered && [0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#DAF7A6] rounded-full"
                        style={{
                          animation: `orbit 2s linear infinite`,
                          animationDelay: `${i * 0.6}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Energy field - always playing */}
                <div className="absolute -inset-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute inset-0 rounded-full border border-[#DAF7A6]/30"
                      style={{
                        animation: `energy-field 2s ease-out infinite`,
                        animationDelay: `${i * 0.4}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Animated Text */}
            <span className={`font-bold transition-all duration-500 ${
              variant === "demo" 
                ? `text-white ${isHovered ? 'text-[#DAF7A6]' : ''}` 
                : 'text-black'
            }`}
                  style={{
                    filter: variant === "demo" && isHovered ? 'drop-shadow(0 0 12px rgba(218, 247, 166, 1))' : 'none',
                    textShadow: variant === "demo" ? '0 0 8px rgba(255, 255, 255, 0.8)' : 'none'
                  }}>
              {children}
            </span>
            
            {/* Animated Arrow */}
            <div className="relative">
              <svg
                className={`w-7 h-7 transition-all duration-500 ${
                  variant === "demo" 
                    ? `text-white ${isHovered ? 'text-[#DAF7A6] animate-arrow-glow scale-110 translate-x-1' : 'animate-bounce-x'}` 
                    : 'text-black animate-bounce-x'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{
                  filter: variant === "demo" && isHovered ? 'drop-shadow(0 0 10px currentColor)' : 'none'
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              
              {/* Arrow trail effect */}
              {variant === "demo" && isHovered && (
                <div className="absolute inset-0">
                  {[0, 1, 2].map((i) => (
                    <svg
                      key={i}
                      className="w-7 h-7 text-[#DAF7A6] absolute inset-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{
                        opacity: 0.4 - i * 0.1,
                        transform: `translateX(${-8 - i * 4}px)`,
                        animation: `arrow-trail 0.8s ease-out infinite ${i * 0.1}s`
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Status indicator for demo button */}
          {variant === "demo" && (
            <>
              {/* Live indicator */}
              <div className="absolute -top-2 -right-2 flex items-center gap-1">
                <div className="w-3 h-3 bg-green-400 rounded-full border border-white relative">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-xs text-[#DAF7A6] font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  LIVE
                </span>
              </div>
              
              {/* Power level indicator */}
              <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-1 bg-[#DAF7A6] rounded-full"
                      style={{
                        height: `${4 + i * 2}px`,
                        animation: isHovered ? `power-bar 1.5s ease-in-out infinite ${i * 0.1}s` : 'none'
                      }}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </a>
      </div>
    );
  };

  return (
    <section className="hero relative">
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
                <EnhancedButton
                  href="#projects"
                  onClick={handleSmoothScroll("projects")}
                  variant="primary"
                >
                  See Our Work
                </EnhancedButton>
              </div>
              <div>
                <EnhancedButton
                  href="/demo-agents"
                  variant="demo"
                >
                  Demo our Agents
                </EnhancedButton>
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

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
          }
          25% { 
            transform: translateY(-8px) translateX(4px);
          }
          50% { 
            transform: translateY(0px) translateX(8px);
          }
          75% { 
            transform: translateY(8px) translateX(4px);
          }
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.3);
          }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes neural-pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% { 
            opacity: 0.5;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.05);
          }
        }
        
        @keyframes matrix-scroll {
          0% { 
            background-position: 0% 0%;
          }
          100% { 
            background-position: 100% 100%;
          }
        }
        
        @keyframes gradient-border {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes energy-wave {
          0% {
            transform: translateX(-100%) skewX(-15deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) skewX(-15deg);
            opacity: 0;
          }
        }
        
        @keyframes energy-field {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes neural-flash {
          0%, 100% { 
            opacity: 0.4;
            transform: scaleY(1);
          }
          50% { 
            opacity: 1;
            transform: scaleY(1.5);
          }
        }
        
        @keyframes orbit {
          0% { 
            transform: rotate(0deg) translateX(12px) rotate(0deg);
          }
          100% { 
            transform: rotate(360deg) translateX(12px) rotate(-360deg);
          }
        }
        
        @keyframes animate-text-shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        @keyframes arrow-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 5px currentColor);
          }
          50% { 
            filter: drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px currentColor);
          }
        }
        
        @keyframes arrow-trail {
          0% {
            opacity: 0.5;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(20px);
          }
        }
        
        @keyframes shimmer-continuous {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          50% {
            transform: translateX(0%) skewX(-15deg);
          }
          100% {
            transform: translateX(100%) skewX(-15deg);
          }
        }
        
        @keyframes bounce-x {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(0);
          }
          40% {
            transform: translateX(4px);
          }
          60% {
            transform: translateX(2px);
          }
        }
        
        .animate-bounce-x {
          animation: bounce-x 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        .animate-text-shimmer {
          animation: animate-text-shimmer 2s ease-in-out infinite;
        }
        
        .animate-arrow-glow {
          animation: arrow-glow 2s ease-in-out infinite;
        }
        
        @keyframes power-bar {
          0%, 100% { 
            opacity: 0.4;
            transform: scaleY(1);
          }
          50% { 
            opacity: 1;
            transform: scaleY(1.5);
          }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Glow effects */
        .glow-green {
          box-shadow: 0 0 20px rgba(218, 247, 166, 0.3);
        }
        
        .glow-green:hover {
          box-shadow: 0 0 40px rgba(218, 247, 166, 0.5), 0 0 60px rgba(218, 247, 166, 0.3);
        }
        
        /* Enhanced button hover states */
        .group:hover .animate-bounce-x {
          animation-duration: 0.8s;
        }
        
        /* Particle trail effect */
        @keyframes particle-trail {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-20px) scale(0);
            opacity: 0;
          }
        }
        
        /* Background mesh gradient */
        @keyframes mesh-gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}