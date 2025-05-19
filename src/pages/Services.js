/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Lottie from "lottie-react";
import webAnim from "../json/web.json";
import Analytics from "../json/analytics.json";
import Ai from "../json/Ai.json";
import Automation from "../json/automation.json";


export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Custom SVG icons for each service
  const getServiceIcon = (serviceId) => {
    switch(serviceId) {
      case "immersive-web":
        return (
          <svg className="w-6 h-6 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
          </svg>
        );
      case "data-analytics":
        return (
          <svg className="w-6 h-6 text-theme-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        );
      case "agentic-ai":
        return (
          <svg className="w-6 h-6 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        );
      case "intelligent-automation":
        return (
          <svg className="w-6 h-6 text-theme-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              style={{ width: '600px', height: '600px' }}
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
              style={{ width: '600px', height: '600px' }}
              className="overflow-visible" // This helps with any clipping issues
            />
          </div>
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
      <Header />
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r bg-clip-text  mb-4 ">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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

                  {/* Card Content */}
                  <div 
                    className="w-full lg:w-3/5 bg-white rounded-3xl shadow-xl overflow-hidden relative z-10 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                    onClick={() => openServiceModal(service)}
                  >
                    {/* Card Content without the dark header */}
                    <div className="p-8">
                      {/* Service title with icon */}
                      <div className="flex items-center mb-4">
                        <div className="mr-3 p-2 rounded-full bg-gradient-to-r from-theme-blue/10 to-theme-purple/10">
                          {getServiceIcon(service.id)}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                        <div className="ml-auto">
                          <span className="bg-gradient-to-r from-theme-blue/10 to-theme-purple/10 text-theme-purple text-xs font-bold px-3 py-1 rounded-full">
                            {service.type}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{service.subheader}</p>
                      
                      {/* Offerings Preview Section */}
                      {service.offerings && service.offerings.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-gray-800 text-lg font-semibold mb-4 pb-2 border-b border-gray-100">
                            {service.id === "immersive-web" && "What We Deliver"}
                            {service.id === "data-analytics" && "Core Offerings"}
                            {service.id !== "immersive-web" && service.id !== "data-analytics" && "What We Offer"}
                          </h3>
                          {/* Always show first offering */}
                          <div className="p-4 rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-sm mb-3">
                            <h4 className="text-theme-purple font-semibold text-base mb-2 flex items-center">
                              <svg className="w-5 h-5 mr-2 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                              </svg>
                              {service.offerings[0].title}
                            </h4>
                            <p className="text-gray-600">{service.offerings[0].description}</p>
                          </div>
                        </div>
                      )}

                      {/* Render bullet points preview - only one bullet */}
                      {service.bulletPoints && service.bulletPoints.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-gray-800 text-lg font-semibold mb-4 pb-2 border-b border-gray-100">Key Capabilities</h3>
                          <div className="p-4 rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-sm">
                            <div className="flex items-start">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-theme-purple/10 flex items-center justify-center mr-3 mt-0.5">
                                <svg className="w-4 h-4 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-600">{service.bulletPoints[0]}</span>
                            </div>
                          </div>
                          {/* Visual indicator of more items */}
                          <div className="text-center text-indigo-400 text-sm mt-3 font-medium">
                            + {service.bulletPoints.length - 1} more capabilities
                          </div>
                        </div>
                      )}

                      {/* Render approaches preview */}
                      {service.approaches && service.approaches.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-gray-800 text-lg font-semibold mb-4 pb-2 border-b border-gray-100">Dual Approach</h3>
                          <div className="p-4 rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-sm">
                            <h4 className="text-theme-purple font-semibold flex items-center text-base mb-2">
                              <svg className="w-5 h-5 mr-2 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                              </svg>
                              {service.approaches[0].title}
                            </h4>
                            <p className="text-gray-600">{service.approaches[0].description}</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Click to view more text */}
                      <div className="mt-6 text-center">
                        <p className="text-theme-purple flex items-center justify-center font-medium">
                          <svg 
                            className="ml-2 w-4 h-4" 
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

      {/* Modal for service details */}
      {isModalOpen && selectedService && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity"
          onClick={handleModalBackdropClick}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white z-10 border-b border-gray-100 shadow-sm px-8 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-3 p-2 rounded-full bg-gradient-to-r from-theme-blue/10 to-theme-purple/10">
                  {getServiceIcon(selectedService.id)}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedService.title}</h2>
              </div>
              <button 
                className="rounded-full p-2 hover:bg-gray-100"
                onClick={closeModal}
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <p className="text-gray-600 text-lg mb-8">{selectedService.subheader}</p>

              {/* Expanded Offerings */}
              {selectedService.offerings && selectedService.offerings.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-gray-800 text-lg font-semibold mb-6 pb-1 border-b border-gray-200">All Services</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedService.offerings.map((item, i) => (
                      <div 
                        key={`${selectedService.id}-offering-${item.title}`} 
                        className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                            <span className="text-theme-purple font-semibold text-sm">{i + 1}</span>
                          </div>
                          <div>
                            <h4 className="text-theme-purple font-semibold text-base mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Expanded Bullet Points */}
              {selectedService.bulletPoints && selectedService.bulletPoints.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-gray-800 text-lg font-semibold mb-6 pb-1 border-b border-gray-200">All Capabilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.bulletPoints.map((item) => (
                      <div 
                        key={generateUniqueId(`${selectedService.id}-bullet`, item)} 
                        className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-theme-purple/10 flex items-center justify-center mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-600">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Expanded Approaches */}
              {selectedService.approaches && selectedService.approaches.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-gray-800 text-lg font-semibold mb-6 pb-1 border-b border-gray-200">All Approaches</h3>
                  {selectedService.approaches.map((approach) => (
                    <div 
                      key={`${selectedService.id}-approach-${approach.title}`} 
                      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-4 hover:shadow-md transition-shadow duration-300"
                      >
                      <h4 className="text-theme-purple font-semibold flex items-center text-base mb-3">
                        <svg className="w-5 h-5 mr-2 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                        {approach.title}
                      </h4>
                      <p className="text-gray-600">{approach.description}</p>
                      {approach.examples && approach.examples.length > 0 && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <p className="text-gray-700 font-medium mb-3">Examples:</p>
                          <ul className="space-y-2">
                            {approach.examples.map((example) => (
                              <li 
                                key={generateUniqueId(`${selectedService.id}-approach-${approach.title}-example`, example)}
                                className="text-gray-600 flex items-start"
                              >
                                <span className="text-theme-purple mr-2">•</span>
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                  {selectedService.synergy && (
                    <div className="p-5 rounded-xl bg-gradient-to-r from-theme-blue/5 to-theme-purple/5 border-l-4 border-theme-purple">
                      <p className="text-gray-700 font-medium">{selectedService.synergy}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Why Choose Us section */}
              {selectedService.whyUs && (
                <div className="mb-8">
                  <h3 className="text-gray-800 text-lg font-semibold mb-6 pb-1 border-b border-gray-200">Why Choose Us</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedService.whyUs.map((item) => (
                      <div 
                        key={generateUniqueId(`${selectedService.id}-whyus`, item)}
                        className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* CTA Section */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="relative bg-gradient-to-r from-theme-blue to-theme-purple p-8 text-center">
                  <div className="absolute top-0 right-0 opacity-10">
                    <svg className="w-40 h-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#FFFFFF" d="M42.8,-65.5C54.9,-58.4,63.7,-45.6,68.9,-31.5C74.2,-17.5,75.9,-2.3,71.8,10.8C67.7,23.9,57.9,34.9,46.8,43.8C35.7,52.7,23.4,59.5,9.6,63.3C-4.2,67.1,-19.6,67.9,-32.3,62.2C-45,56.5,-55,44.3,-61.5,30.6C-68,16.9,-71,-0.4,-67.3,-15.2C-63.6,-30,-53.3,-43.3,-40.8,-50.3C-28.3,-57.4,-14.1,-58.2,0.9,-59.6C15.9,-61,31.8,-63,42.8,-65.5Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-3 relative z-10">Ready to transform your business?</h3>
                  <p className="text-white/80 mb-6 relative z-10">Our team is ready to implement {selectedService.title.toLowerCase()} for your organization.</p>
                  <button className="bg-white text-theme-purple font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg relative z-10">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}