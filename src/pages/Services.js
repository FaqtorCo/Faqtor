/* eslint-disable */

import React, { useState, useEffect, useRef } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import Lottie from "lottie-react";
import webAnim from "../json/web.json";
import Analytics from "../json/analytics.json";
import Ai from "../json/Ai.json";
import Automation from "../json/automation.json";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const modalRef = useRef(null);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add scroll animation for modal
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      const animateItems = modalRef.current.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      animateItems.forEach(item => {
        observer.observe(item);
      });
      
      return () => {
        animateItems.forEach(item => {
          observer.unobserve(item);
        });
      };
    }
  }, [isModalOpen, selectedService]);

  // Handle opening modal with service details
  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Handle closing modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  // Close modal when clicking outside of it
  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Custom SVG icons for each service with animation
  const getServiceIcon = (serviceId, isHovered = false) => {
    const iconClasses = `w-6 h-6 ${isHovered ? 'text-white transition-all duration-300 transform scale-110' : 'text-theme-purple transition-all duration-300'}`;
    
    switch(serviceId) {
      case "immersive-web":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
          </svg>
        );
      case "data-analytics":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        );
      case "agentic-ai":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        );
      case "intelligent-automation":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        );
      default:
        return null;
    }
  };
  
  const servicesData = [
    {
      id: "immersive-web",
      title: "Immersive Web Experiences",
      subheader: "Forget templates. We build boundary-pushing interfaces that turn visitors into obsessed customers.",
      type: "Web",
      color: "from-indigo-500 to-purple-600",
      bgPatternLight: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
      // animation: webAnimation,
      offerings: [
        {
          title: "Interactive Storytelling",
          description: "Gamified user journeys, 3D product configurators, and scroll-triggered animations that feel like cinema.",
        },
        {
          title: "Conversion-First Design",
          description: "Websites engineered to guide users to checkout with intuitive, addictive flows.",
        },
        {
          title: "Unique Brand Identity",
          description: "Logos, color schemes, and micro-interactions that make your brand unforgettable.",
        },
      ],
      whyUs: [
        "Just Artistry: Human-crafted designs that prioritize creativity over algorithms.",
        "Results-Driven: A fintech client saw 200% longer session times and 45% higher conversions after our redesign.",
      ],
    },
    {
      id: "data-analytics",
      title: "Data Analytics & Visualization",
      subheader: "Transform raw numbers into intuitive visuals—so you see opportunities before others even sense them.",
      imageUrl: "/images/services/data-analytics.jpg",
      type: "Data",
      color: "from-blue-500 to-cyan-400",
      bgPatternLight: "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.06' fill-rule='evenodd'/%3E%3C/svg%3E",
      // animation: dataAnimation,
      offerings: [
        {
          title: "Advanced Visualization",
          description: "Interactive dashboards, heatmaps, and 3D data models that make trends impossible to ignore. A logistics client reduced delivery delays by 30% using real-time route optimization dashboards.",
        },
        {
          title: "Predictive Enhancement",
          description: "ML models to forecast trends, but only after we've made your data crystal clear. Go beyond static reports with self-updating analytics powered by machine learning. Forecast future outcomes with 90%+ accuracy.",
        },
      ],
    },
    {
      id: "agentic-ai",
      title: "Agentic AI Solutions",
      subheader: "If you can imagine it, we can build it—AI that thinks, creates, and executes beyond scripts.",
      imageUrl: "/images/services/ai-solutions.jpg",
      type: "AI",
      color: "from-purple-600 to-pink-500",
      bgPatternLight: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%239C92AC' fill-opacity='0.07'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
      // animation: aiAnimation,
      offerings: [
        {
          title: "What We Build",
          description: "Voice Agents, Avatar Agents, Chatbots, Social Media Agents, Creative Agents, Operational Agents, and Analytical Agents that transform how your business operates.",
        },
      ],
      bulletPoints: [
        "Voice Agents: Handle calls, resolve complaints, qualify leads, book appointments, do cold calls, and upsell – with human-like empathy.",
        "Avatar Agents: Engage users in an interactive way for better user experience.",
        "Chatbots: Detects frustration, boredom, or excitement – adapts tone in real time.",
        "Social Media Agents: Auto-generate posts, respond to trends, and optimize engagement.",
        "Creative Agents: Design logos, write ad copy, or generate product images.",
        "Operational Agents: Automate inventory audits, ad spend optimization, or financial reporting.",
        "Analytical Agents: Scrape market trends, analyze sentiment, or forecast risks.",
      ],
    },
    {
      id: "intelligent-automation",
      title: "Intelligent Automation",
      subheader: "From mindless tasks to adaptive workflows—we eliminate inefficiencies, with or without AI.",
      imageUrl: "/images/services/automation.jpg",
      type: "Automation",
      color: "from-blue-600 to-indigo-500",
      bgPatternLight: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%239C92AC' fill-opacity='0.06'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
      // animation: automationAnimation,
      approaches: [
        {
          title: "AI/LLM-Driven Automation",
          description: "Self-learning workflows that adapt to chaos (e.g., dynamic pricing during supply chain crises).",
          examples: [
            "A SaaS company auto-updates software documentation using LLMs trained on user feedback.",
            "Auto-fire underperforming ad campaigns and reallocate budgets.",
          ],
        },
        {
          title: "Rule-Based Precision",
          description: "Flawless execution of repetitive tasks (e.g., invoice processing, inventory alerts).",
          examples: [
            "A hospital reduced admin costs by 50% with automated patient record sorting.",
            "Auto-generate 10,000 personalized PDFs.",
            "Sync 50+ SaaS tools with one click.",
            "Social Media: Schedule posts, respond to DMs, and track trends across 20+ platforms.",
          ],
        },
      ],
      synergy: "Combine both to handle today's tasks and tomorrow's unknowns.",
    },
  ];

  // Each service has a unique animation pattern
  const getAnimationPattern = (serviceId) => {
    switch(serviceId) {
      case "immersive-web":
        return (
          <div className="w-full h-64 flex justify-center items-center">
            <Lottie 
              animationData={webAnim} 
              loop={true}
              style={{ width: '400px', height: '400px' }}
              className="overflow-visible" // This helps with any clipping issues
            />
          </div>
        );
      case "data-analytics":
        return (
          <div className="w-full h-64 flex justify-center items-center">
            <Lottie 
              animationData={Analytics} 
              loop={true}
              style={{ width: '400px', height: '400px' }}
              className="overflow-visible" // This helps with any clipping issues
            />
          </div>
        );
      case "agentic-ai":
        return (
          <div className="w-full h-64 flex justify-center items-center">
            <Lottie 
              animationData={Ai} 
              loop={true}
              style={{ width: '400px', height: '400px' }}
              className="overflow-visible" // This helps with any clipping issues
            />
          </div>
        );
      case "intelligent-automation":
        return (
          <div className="w-full h-64 flex justify-center items-center">
            <Lottie 
              animationData={Automation} 
              loop={true}
              style={{ width: '400px', height: '400px' }}
              className="overflow-visible" // This helps with any clipping issues
            />
          </div>
        );
      default:
        return null;
    }
  };

  // Get modal illustration based on service
  const getModalIllustration = (serviceId) => {
    switch(serviceId) {
      case "immersive-web":
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
            </defs>
            <path fill="url(#webGradient)" opacity="0.2" d="M42.8,-65.5C54.9,-58.4,63.7,-45.6,68.9,-31.5C74.2,-17.5,75.9,-2.3,71.8,10.8C67.7,23.9,57.9,34.9,46.8,43.8C35.7,52.7,23.4,59.5,9.6,63.3C-4.2,67.1,-19.6,67.9,-32.3,62.2C-45,56.5,-55,44.3,-61.5,30.6C-68,16.9,-71,-0.4,-67.3,-15.2C-63.6,-30,-53.3,-43.3,-40.8,-50.3C-28.3,-57.4,-14.1,-58.2,0.9,-59.6C15.9,-61,31.8,-63,42.8,-65.5Z" transform="translate(100 100)" />
          </svg>
        );
      case "data-analytics":
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <path fill="url(#dataGradient)" opacity="0.2" d="M45.3,-51.2C60.9,-40.7,77.3,-28.5,81.5,-13.1C85.8,2.3,78,20.9,67.8,37.9C57.6,54.9,44.9,70.2,28.8,77.8C12.7,85.5,-6.7,85.5,-24.9,79.2C-43.1,72.9,-60,60.2,-68.6,44C-77.3,27.7,-77.6,7.9,-75.3,-11.7C-73,-31.3,-68.1,-50.6,-55.6,-61.7C-43.2,-72.8,-23.2,-75.8,-5.5,-70C12.2,-64.2,29.8,-61.7,45.3,-51.2Z" transform="translate(100 100)" />
          </svg>
        );
      case "agentic-ai":
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333EA" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <path fill="url(#aiGradient)" opacity="0.2" d="M44.3,-69.8C58.3,-60.5,71.2,-49.3,75.9,-35.1C80.6,-20.9,77.2,-3.6,73.2,12.6C69.2,28.9,64.7,44.2,54.4,55.5C44.2,66.8,28.2,74.1,11.8,75.9C-4.7,77.7,-21.5,73.8,-35.1,65.5C-48.7,57.1,-59.1,44.2,-65.9,29.7C-72.8,15.2,-76,-0.9,-73.1,-16.2C-70.1,-31.5,-60.9,-45.9,-48.3,-55.6C-35.6,-65.4,-19.5,-70.5,-1.9,-67.7C15.7,-65,30.3,-79.1,44.3,-69.8Z" transform="translate(100 100)" />
          </svg>
        );
      case "intelligent-automation":
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="autoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
            </defs>
            <path fill="url(#autoGradient)" opacity="0.2" d="M46.3,-74.3C59.7,-66.5,70,-53.1,75.9,-38.2C81.8,-23.3,83.3,-6.9,80.4,8.4C77.5,23.7,70.2,37.8,60.3,49.9C50.3,62,37.7,72,22.9,77.3C8.1,82.6,-8.9,83.3,-23.8,78.1C-38.7,73,-51.5,62.1,-63.4,49.2C-75.3,36.3,-86.3,21.5,-87.1,5.9C-87.9,-9.8,-78.5,-26.2,-67.4,-39.5C-56.4,-52.8,-43.6,-62.9,-29.8,-70.3C-16,-77.6,-1.1,-82.1,13.4,-81.4C27.9,-80.7,42.6,-75,56.3,-69.4Z" transform="translate(100 100)" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Generate unique IDs for list items to avoid using array indices directly
  const generateUniqueId = (prefix, text) => {
    return `${prefix}-${text.substring(0, 15).replace(/\s+/g, '-').toLowerCase()}`;
  };

  return (
    <>
      <section className=" py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 h-40 "></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 "></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold  bg-clip-text  mb-6">Our Services</h1>
            <p className=" max-w-2xl mx-auto text-lg">
              Innovative solutions designed to transform your business
            </p>
            </div>

          <div className="max-w-7xl mx-auto">
            {servicesData.map((service, index) => (
              <Fade direction={index % 2 === 0 ? "left" : "right"} triggerOnce key={service.id}>
                <div className="mb-24 flex flex-col lg:flex-row items-stretch gap-8">
                  {/* Animation Container - Placed on left side for even indices, right side for odd indices */}
                  {index % 2 === 0 ? (
                    <div className="w-full lg:w-2/5 bg-transparent flex justify-center items-center p-6 overflow-hidden">
                      {getAnimationPattern(service.id)}
                    </div>
                  ) : null}

                  {/* Enhanced Card Content with hover effects */}
                  <div 
                    className="w-full lg:w-3/5 bg-white rounded-3xl shadow-xl overflow-hidden relative z-10 transition-all duration-500 group hover:translate-y-[-8px]"
                    onClick={() => openServiceModal(service)}
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Decorative background pattern */}
                    <div 
                      className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-30" 
                      style={{
                        backgroundImage: `url(${service.bgPatternLight})`,
                        backgroundSize: 'cover',
                      }}
                    ></div>
                    
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-90 pointer-events-none`}></div>
                    
                    {/* Card Content with overlay hover effect */}
                    <div className="relative z-10 p-8">
                      {/* Service title with icon */}
                      <div className="flex items-center mb-4">
                        <div className={`mr-3 p-2 rounded-full ${hoveredCard === service.id ? 'bg-white/20' : 'bg-gradient-to-r from-theme-blue/10 to-theme-purple/10'} transition-all duration-300`}>
                          {getServiceIcon(service.id, hoveredCard === service.id)}
                        </div>
                        <h2 className={`text-2xl font-bold ${hoveredCard === service.id ? 'text-white' : 'text-gray-800'} transition-colors duration-300`}>
                          {service.title}
                        </h2>
                        <div className="ml-auto">
                          <span className={`${hoveredCard === service.id ? 'bg-white/20 text-white' : 'bg-gradient-to-r from-theme-blue/10 to-theme-purple/10 text-theme-purple'} text-xs font-bold px-3 py-1 rounded-full transition-all duration-300`}>
                            {service.type}
                          </span>
                        </div>
                      </div>
                      
                      <p className={`${hoveredCard === service.id ? 'text-white/90' : 'text-gray-600'} mb-6 transition-colors duration-300`}>
                        {service.subheader}
                      </p>
                      
                      {/* Offerings Preview Section */}
                      {service.offerings && service.offerings.length > 0 && (
                        <div className="mb-6">
                          <h3 className={`${hoveredCard === service.id ? 'text-white border-white/20' : 'text-gray-800 border-gray-100'} text-lg font-semibold mb-4 pb-2 border-b transition-colors duration-300`}>
                            {service.id === "immersive-web" && "What We Deliver"}
                            {service.id === "data-analytics" && "Core Offerings"}
                            {service.id !== "immersive-web" && service.id !== "data-analytics" && "What We Offer"}
                          </h3>
                          {/* Always show first offering */}
                          <div className={`p-4 rounded-xl ${hoveredCard === service.id ? 'bg-white/10 border-white/5' : 'border border-gray-100 bg-gradient-to-br from-white to-gray-50'} shadow-sm mb-3 transition-all duration-300`}>
                            <h4 className={`${hoveredCard === service.id ? 'text-white' : 'text-theme-purple'} font-semibold text-base mb-2 flex items-center transition-colors duration-300`}>
                              <svg className={`w-5 h-5 mr-2 ${hoveredCard === service.id ? 'text-white' : 'text-theme-purple'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                              </svg>
                              {service.offerings[0].title}
                            </h4>
                            <p className={`${hoveredCard === service.id ? 'text-white/80' : 'text-gray-600'} transition-colors duration-300`}>
                              {service.offerings[0].description}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Render bullet points preview - only one bullet */}
                      {service.bulletPoints && service.bulletPoints.length > 0 && (
                        <div className="mb-6">
                          <h3 className={`${hoveredCard === service.id ? 'text-white border-white/20' : 'text-gray-800 border-gray-100'} text-lg font-semibold mb-4 pb-2 border-b transition-colors duration-300`}>
                            Key Capabilities
                          </h3>
                          <div className={`p-4 rounded-xl ${hoveredCard === service.id ? 'bg-white/10 border-white/5' : 'border border-gray-100 bg-gradient-to-br from-white to-gray-50'} shadow-sm transition-all duration-300`}>
                            <div className="flex items-start">
                              <div className={`flex-shrink-0 w-6 h-6 rounded-full ${hoveredCard === service.id ? 'bg-white/20' : 'bg-theme-purple/10'} flex items-center justify-center mr-3 mt-0.5 transition-colors duration-300`}>
                                <svg className={`w-4 h-4 ${hoveredCard === service.id ? 'text-white' : 'text-theme-purple'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className={`${hoveredCard === service.id ? 'text-white/80' : 'text-gray-600'} transition-colors duration-300`}>
                                {service.bulletPoints[0]}
                              </span>
                            </div>
                          </div>
                          {/* Visual indicator of more items */}
                          <div className={`text-center ${hoveredCard === service.id ? 'text-white/70' : 'text-indigo-400'} text-sm mt-3 font-medium transition-colors duration-300`}>
                            + {service.bulletPoints.length - 1} more capabilities
                          </div>
                        </div>
                      )}

                      {/* Render approaches preview */}
                      {service.approaches && service.approaches.length > 0 && (
                        <div className="mb-6">
                          <h3 className={`${hoveredCard === service.id ? 'text-white border-white/20' : 'text-gray-800 border-gray-100'} text-lg font-semibold mb-4 pb-2 border-b transition-colors duration-300`}>
                            Dual Approach
                          </h3>
                          <div className={`p-4 rounded-xl ${hoveredCard === service.id ? 'bg-white/10 border-white/5' : 'border border-gray-100 bg-gradient-to-br from-white to-gray-50'} shadow-sm transition-all duration-300`}>
                            <h4 className={`${hoveredCard === service.id ? 'text-white' : 'text-theme-purple'} font-semibold flex items-center text-base mb-2 transition-colors duration-300`}>
                              <svg className={`w-5 h-5 mr-2 ${hoveredCard === service.id ? 'text-white' : 'text-theme-purple'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                              </svg>
                              {service.approaches[0].title}
                            </h4>
                            <p className={`${hoveredCard === service.id ? 'text-white/80' : 'text-gray-600'} transition-colors duration-300`}>
                              {service.approaches[0].description}
                            </p>
                          </div>
                        </div>
                      )}
                      
                      {/* Click to view more text */}
                      <div className="mt-6 text-center">
                        <p className={`${hoveredCard === service.id ? 'text-white' : 'text-theme-purple'} flex items-center justify-center font-medium transition-colors duration-300`}>
                          Learn More
                          <svg 
                            className={`ml-2 w-4 h-4 ${hoveredCard === service.id ? 'animate-bounce' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animation Container - Placed on right side for odd indices */}
                  {index % 2 !== 0 ? (
                    <div className="w-full lg:w-2/5 bg-transparent flex justify-center items-center p-6 overflow-hidden">
                      {getAnimationPattern(service.id)}
                    </div>
                  ) : null}
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Modal for service details */}
      {isModalOpen && selectedService && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity"
          onClick={handleModalBackdropClick}
        >
          <Zoom duration={300}>
            <div 
              ref={modalRef}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* SVG Background Pattern for modal */}
              <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-3xl">
                {getModalIllustration(selectedService.id)}
              </div>
              
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/80 backdrop-blur-sm z-10 border-b border-gray-100 shadow-sm px-8 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 p-2 rounded-full bg-gradient-to-r from-theme-blue/10 to-theme-purple/10">
                    {getServiceIcon(selectedService.id)}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedService.title}</h2>
                </div>
                <button 
                  className="rounded-full p-2 hover:bg-gray-100 transition-colors duration-300"
                  onClick={closeModal}
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8 relative">
                {/* Service Animation - Top Center */}
                <div className="absolute top-[-100px] right-[-100px] w-64 h-64 opacity-20 pointer-events-none">
                  {getModalIllustration(selectedService.id)}
                </div>
                
                <p className="text-gray-600 text-lg mb-12 max-w-3xl">{selectedService.subheader}</p>

                {/* Expanded Offerings */}
                {selectedService.offerings && selectedService.offerings.length > 0 && (
                  <div className="mb-12 animate-on-scroll">
                    <h3 className="text-gray-800 text-xl font-semibold mb-6 pb-2 border-b border-gray-200 flex items-center">
                      <span className="bg-gradient-to-r from-theme-blue to-theme-purple w-10 h-10 rounded-full flex items-center justify-center mr-3 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </span>
                      All Services
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedService.offerings.map((item, i) => (
                        <Fade direction="up" delay={i * 100} cascade triggerOnce key={`${selectedService.id}-offering-${item.title}`}>
                          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                            {/* Decorative corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-theme-blue/5 to-theme-purple/5 rounded-bl-3xl"></div>
                            
                            <div className="flex items-start">
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-theme-blue to-theme-purple flex items-center justify-center mr-4 text-white font-bold">
                                {i + 1}
                              </div>
                              <div>
                                <h4 className="text-theme-purple font-semibold text-lg mb-3">{item.title}</h4>
                                <p className="text-gray-600">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </Fade>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expanded Bullet Points */}
                {selectedService.bulletPoints && selectedService.bulletPoints.length > 0 && (
                  <div className="mb-12 animate-on-scroll">
                    <h3 className="text-gray-800 text-xl font-semibold mb-6 pb-2 border-b border-gray-200 flex items-center">
                      <span className="bg-gradient-to-r from-theme-blue to-theme-purple w-10 h-10 rounded-full flex items-center justify-center mr-3 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      All Capabilities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedService.bulletPoints.map((item, i) => (
                        <Fade direction="up" delay={i * 100} cascade triggerOnce key={generateUniqueId(`${selectedService.id}-bullet`, item)}>
                          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
                            {/* Decorative corner accent that animates on hover */}
                            <div className="absolute top-0 right-0 w-0 h-0 bg-gradient-to-bl from-theme-blue/10 to-theme-purple/10 rounded-bl-3xl transition-all duration-300 group-hover:w-24 group-hover:h-24"></div>
                            
                            <div className="flex items-start relative z-10">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-theme-blue/20 to-theme-purple/20 flex items-center justify-center mr-3 mt-0.5 text-theme-purple group-hover:from-theme-blue group-hover:to-theme-purple group-hover:text-white transition-all duration-300">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-700">{item}</span>
                            </div>
                          </div>
                        </Fade>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expanded Approaches */}
                {selectedService.approaches && selectedService.approaches.length > 0 && (
                  <div className="mb-12 animate-on-scroll">
                    <h3 className="text-gray-800 text-xl font-semibold mb-6 pb-2 border-b border-gray-200 flex items-center">
                      <span className="bg-gradient-to-r from-theme-blue to-theme-purple w-10 h-10 rounded-full flex items-center justify-center mr-3 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                      </span>
                      All Approaches
                    </h3>
                    {selectedService.approaches.map((approach, i) => (
                      <Fade direction="up" delay={i * 150} triggerOnce key={`${selectedService.id}-approach-${approach.title}`}>
                        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-6 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                          {/* Decorative accent */}
                          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-theme-blue to-theme-purple opacity-70"></div>
                          <div className="pl-5">
                            <h4 className="text-theme-purple font-semibold flex items-center text-lg mb-4">
                              <span className="w-10 h-10 rounded-full bg-gradient-to-r from-theme-blue/10 to-theme-purple/10 flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                </svg>
                              </span>
                              {approach.title}
                            </h4>
                            <p className="text-gray-700 mb-5">{approach.description}</p>
                            {approach.examples && approach.examples.length > 0 && (
                              <div className="mt-4 p-5 bg-gray-50 rounded-lg border border-gray-100">
                                <p className="text-gray-700 font-medium mb-4 flex items-center">
                                  <svg className="w-5 h-5 mr-2 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                  </svg>
                                  Real-world Examples:
                                </p>
                                <ul className="space-y-3">
                                  {approach.examples.map((example, j) => (
                                    <li 
                                      key={generateUniqueId(`${selectedService.id}-approach-${approach.title}-example`, example)}
                                      className="text-gray-600 flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                      <span className="text-theme-purple mr-2 mt-1 flex-shrink-0">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                      </span>
                                      {example}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </Fade>
                    ))}
                    {selectedService.synergy && (
                      <Fade direction="up" delay={200} triggerOnce>
                        <div className="p-6 rounded-xl bg-gradient-to-r from-theme-blue/10 to-theme-purple/10 border-l-4 border-theme-purple shadow-md relative overflow-hidden">
                          {/* Decorative elements */}
                          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-theme-purple/5"></div>
                          <div className="absolute right-20 bottom-10 w-16 h-16 rounded-full bg-theme-blue/5"></div>
                          
                          <div className="flex items-center">
                            <svg className="w-8 h-8 text-theme-purple mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <p className="text-gray-700 font-medium text-lg relative z-10">{selectedService.synergy}</p>
                          </div>
                        </div>
                      </Fade>
                    )}
                  </div>
                )}

                {/* Why Choose Us section */}
                {selectedService.whyUs && (
                  <div className="mb-12 animate-on-scroll">
                    <h3 className="text-gray-800 text-xl font-semibold mb-6 pb-2 border-b border-gray-200 flex items-center">
                      <span className="bg-gradient-to-r from-theme-blue to-theme-purple w-10 h-10 rounded-full flex items-center justify-center mr-3 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Why Choose Us
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedService.whyUs.map((item, i) => (
                        <Fade direction="up" delay={i * 150} triggerOnce key={generateUniqueId(`${selectedService.id}-whyus`, item)}>
                          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                            {/* Decorative corner accent */}
                            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-500/5 to-green-600/5 rounded-br-full"></div>
                            
                            <div className="flex items-start relative z-10">
                              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div>
                                <span className="text-gray-800 font-medium text-lg">{item.split(':')[0]}:</span>
                                <span className="text-gray-700"> {item.split(':')[1] || item}</span>
                              </div>
                            </div>
                          </div>
                        </Fade>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* CTA Section */}
                <Fade direction="up" delay={300} triggerOnce>
                  <div className="rounded-xl overflow-hidden shadow-xl relative">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 -ml-10 -mb-10"></div>
                    
                    <div className="relative bg-gradient-to-r from-theme-blue to-theme-purple p-10 text-center">
                      <h3 className="text-white font-bold text-3xl mb-4 relative z-10">Ready to transform your business?</h3>
                      <p className="text-white/90 text-lg mb-8 relative z-10 max-w-2xl mx-auto">
                       Our team is ready to implement {selectedService.title.toLowerCase()} for your organization. Let's create something incredible together.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                       <button className="bg-white text-theme-purple font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl relative z-10 flex items-center">
                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                         </svg>
                         Book a Consultation
                       </button>
                       <button className="bg-transparent text-white border border-white/30 font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 shadow-md hover:shadow-lg relative z-10 flex items-center">
                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                         </svg>
                         View Case Studies
                       </button>
                     </div>
                   </div>
                 </div>
               </Fade>
             </div>
           </div>
         </Zoom>
       </div>
     )}

   </>
 );
}