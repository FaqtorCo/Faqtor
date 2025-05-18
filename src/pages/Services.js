import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Header from 'parts/Header';
import Footer from 'parts/Footer';

export default function Services() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null); // collapse if already expanded
    } else {
      setExpandedCard(id); // expand the clicked card, collapsing any other
    }
  };
  
  const servicesData = [
    {
      id: "immersive-web",
      title: "Immersive Web Experiences",
      subheader: "Forget templates. We build boundary-pushing interfaces that turn visitors into obsessed customers.",
      imageUrl: "/images/services/web-experiences.jpg",
      type: "Web",
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

  // Generate unique IDs for list items to avoid using array indices directly
  const generateUniqueId = (prefix, text) => {
    return `${prefix}-${text.substring(0, 15).replace(/\s+/g, '-').toLowerCase()}`;
  };

  return (
    <>
      <Header />
      <Fade bottom>
        <section className="container mx-auto">
          <div className="text-center mb-12 pt-12">
            <h1 className="text-4xl font-bold text-theme-blue mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Innovative solutions designed to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 mb-16 max-w-6xl mx-auto">
            {servicesData.map((service) => (
              <Fade triggerOnce direction="up" delay={300} key={service.id}>
                <div 
                  className="group rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:shadow-2xl h-full flex flex-col"
                  data-id={service.id}
                >
                  {/* Card Header - Reduced height from h-32 to h-24 */}
                  <div className="relative h-24 bg-gray-700">
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                      <h2 className="text-white text-lg font-bold mb-1">{service.title}</h2>
                      <p className="text-gray-200 text-xs line-clamp-2">{service.subheader}</p>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4 bg-white flex-grow flex flex-col">
                    {/* Preview Content - Always Visible */}
                    <div className="flex-grow">
                      {/* Render offerings preview */}
                      {service.offerings && service.offerings.length > 0 && (
                        <div className="mb-3">
                          <h3 className="text-theme-blue text-base font-semibold mb-2">
                            {service.id === "immersive-web" && "What We Deliver"}
                            {service.id === "data-analytics" && "Core Offerings"}
                            {service.id !== "immersive-web" && service.id !== "data-analytics" && "What We Offer"}
                          </h3>
                          {/* Always show first offering */}
                          <div className="mb-2">
                            <h4 className="text-theme-purple font-semibold text-sm">{service.offerings[0].title}</h4>
                            <p className="text-gray-600 text-xs line-clamp-2">{service.offerings[0].description}</p>
                          </div>
                        </div>
                      )}

                      {/* Render bullet points preview */}
                      {service.bulletPoints && service.bulletPoints.length > 0 && (
                        <div className="mb-3">
                          <h3 className="text-theme-blue text-base font-semibold mb-2">Key Capabilities</h3>
                          <ul>
                            <li className="flex items-start mb-1">
                              <svg className="w-3 h-3 text-theme-purple mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600 text-xs">{service.bulletPoints[0]}</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {/* Render approaches preview */}
                      {service.approaches && service.approaches.length > 0 && (
                        <div className="mb-3">
                          <h3 className="text-theme-blue text-base font-semibold mb-2">Dual Approach</h3>
                          <div className="mb-2">
                            <h4 className="text-theme-purple font-semibold text-sm">{service.approaches[0].title}</h4>
                            <p className="text-gray-600 text-xs line-clamp-2">{service.approaches[0].description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* View More Button */}
                    <div className="mt-3 text-center">
                      <button 
                        type="button"
                        onClick={() => toggleCard(service.id)}
                        className="inline-block font-normal px-4 py-1 text-theme-purple text-xs border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none"
                      >
                        {expandedCard === service.id ? 'View Less' : 'View More'}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Content - Only show for the current expanded card */}
                  {expandedCard === service.id && (
                    <div className="bg-gray-50 p-4 border-t border-gray-200">
                      {/* Expanded Offerings */}
                      {service.offerings && service.offerings.length > 1 && (
                        <div className="mb-4">
                          <h3 className="text-theme-blue text-sm font-semibold mb-2">All Services</h3>
                          {service.offerings.slice(1).map((item) => (
                            <div key={`${service.id}-offering-${item.title}`} className="mb-3">
                              <h4 className="text-theme-purple font-semibold text-sm">{item.title}</h4>
                              <p className="text-gray-600 text-xs">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Expanded Bullet Points */}
                      {service.bulletPoints && service.bulletPoints.length > 1 && (
                        <div className="mb-4">
                          <h3 className="text-theme-blue text-sm font-semibold mb-2">All Capabilities</h3>
                          <ul className="space-y-1">
                            {service.bulletPoints.slice(1).map((item) => (
                              <li 
                                key={generateUniqueId(`${service.id}-bullet`, item)} 
                                className="flex items-start"
                              >
                                <svg className="w-3 h-3 text-theme-purple mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600 text-xs">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Expanded Approaches */}
                      {service.approaches && service.approaches.length > 1 && (
                        <div className="mb-4">
                          <h3 className="text-theme-blue text-sm font-semibold mb-2">More Approaches</h3>
                          {service.approaches.slice(1).map((approach) => (
                            <div key={`${service.id}-approach-${approach.title}`} className="mb-3">
                              <h4 className="text-theme-purple font-semibold text-sm">{approach.title}</h4>
                              <p className="text-gray-600 text-xs">{approach.description}</p>
                              {approach.examples && approach.examples.length > 0 && (
                                <div className="mt-1">
                                  <p className="text-gray-500 text-xs font-medium">Examples:</p>
                                  <ul className="pl-3 mt-1">
                                    {approach.examples.map((example) => (
                                      <li 
                                        key={generateUniqueId(`${service.id}-approach-${approach.title}-example`, example)}
                                        className="text-gray-500 text-xs list-disc ml-2 mb-1"
                                      >
                                        {example}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                          {service.synergy && (
                            <div className="mt-2 p-2 bg-white rounded-lg">
                              <p className="text-gray-600 text-xs italic">{service.synergy}</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Why Faqtor section */}
                      {service.whyUs && (
                        <div className="mb-2">
                          <h3 className="text-theme-blue text-sm font-semibold mb-2">Why Faqtor?</h3>
                          <ul className="space-y-1">
                            {service.whyUs.map((item) => (
                              <li 
                                key={generateUniqueId(`${service.id}-whyus`, item)}
                                className="flex items-start"
                              >
                                <svg className="w-3 h-3 text-theme-purple mr-1 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600 text-xs">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Fade>
            ))}
          </div>
        </section>
      </Fade>
      <Footer />
    </>
  );
}
