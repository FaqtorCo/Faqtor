/* eslint-disable */
/* esl
int-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Discuss from "parts/Discuss";
import Button from "elements/Button";
import firstCaseStudyImage from "../assets/images/Aboutus/1st.jpg";
import secondCaseStudyImage from "../assets/images/Aboutus/2nd.jpg";
import thirdCaseStudyImage from "../assets/images/Aboutus/3rd.jpg";
import aboutImage from "../assets/images/Aboutus/aboutus.jpeg";
import aboutAnim from "../json/aboutAnim.json";
import Lottie from "lottie-react";
import { 
  Clock, 
  AlertTriangle, 
  Zap, 
  BarChart2, 
  Layers, 
  Users, 
  CheckCircle, 
  Smile,
  Lightbulb,
  Shield,
  Rocket,
  Target,
  DollarSign,
  TrendingUp,
  Award,
  Star
} from "lucide-react";

// Case Studies data
const caseStudies = [
  {
    id: "case-study-1",
    client: "GHS Medicare Advantage Organization",
    challenge: "High cost of lead qualification and appointment setting for sales agents.",
    solution: "AI outbound calling to transfer interested leads to live sales agents or schedule onsite appointments.",
    resultRevenue: "$2.1M",
    resultCustomers: "45%",
    category: "Healthcare",
    timeline: "2024",
    imageUrl: firstCaseStudyImage,
    additionalStats: "600,000 calls automated",
  },
  {
    id: "case-study-2",
    client: "Customer Service AI Implementation",
    challenge: "Long wait times and inconsistent customer service quality.",
    solution: "24/7 AI agents with contextual memory that analyze caller intent, history, and sentiment in real time.",
    resultRevenue: "28%",
    resultCustomers: "89%",
    category: "Enterprise",
    timeline: "6 months",
    imageUrl: secondCaseStudyImage,
    additionalStats: "99% reduction in wait time",
  },
  {
    id: "case-study-3",
    client: "Brand Identity System",
    challenge: "Poor market recognition and high website bounce rates.",
    solution: "Comprehensive brand identity system with intuitive user interface design.",
    resultRevenue: "3.2x",
    resultCustomers: "89%",
    category: "Retail",
    timeline: "5 months",
    imageUrl: thirdCaseStudyImage,
    additionalStats: "62% reduction in bounce rates",
  },
];

// Stats data
const initialStats = {
  revenue: 5.2,
  customers: 92,
  completed: 48,
  satisfaction: 98,
};

export default function AboutUs() {
  const [stats, setStats] = useState(initialStats);
  const [animated, setAnimated] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setAnimated(true);
  }, []);

  // Animate stats on scroll
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          const interval = setInterval(() => {
            setStats((prevStats) => {
              const newStats = {
                revenue: Math.min(prevStats.revenue + 0.1, 8),
                customers: Math.min(prevStats.customers + 1, 70),
                completed: Math.min(prevStats.completed + 1, 50),
                satisfaction: Math.min(prevStats.satisfaction + 1, 97),
              };

              if (
                newStats.revenue === 8 &&
                newStats.customers === 70 &&
                newStats.completed === 50 &&
                newStats.satisfaction === 97
              ) {
                clearInterval(interval);
              }

              return newStats;
            });
          }, 30);

          return () => clearInterval(interval);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate case studies
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleCaseStudyChange = (index) => {
    if (index === activeCaseStudy || isAnimating) return;
    setIsAnimating(true);
    setActiveCaseStudy(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Why choose us data
  const whyChooseUs = [
    {
      title: "Results-Driven",
      description: "Direct bottom-line impact",
      icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      metric: "300%",
      metricLabel: "ROI Average",
    },
    {
      title: "Scalable Solutions",
      description: "Grows with your business",
      icon: "M7 11l5-5m0 0l5 5m-5-5v12",
      metric: "99.9%",
      metricLabel: "Uptime",
    },
    {
      title: "Rapid Implementation",
      description: "Weeks, not months",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      metric: "4x",
      metricLabel: "Faster",
    },
    {
      title: "Future-Proof",
      description: "Cutting-edge technology",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      metric: "5+",
      metricLabel: "Years Tech Stack",
    },
  ];

  const themeColor = "#374e00";

  const coreBeliefs = [
    {
      title: "Limitless Innovation",
      description: "We push boundaries and reimagine possibilities",
      icon: (
        <Lightbulb
          size={28}
          className="transition-transform duration-300 group-hover:animate-pulse group-hover:rotate-12"
        />
      ),
    },
    {
      title: "Proven Impact",
      description: "Measurable results, not promises",
      icon: (
        <CheckCircle
          size={28}
          className="transition-transform duration-300 group-hover:scale-125"
        />
      ),
    },
    {
      title: "Human-Centric Design",
      description: "Intuitive systems that enhance",
      icon: (
        <Users
          size={28}
          className="transition-transform duration-300 group-hover:rotate-6"
        />
      ),
    },
    {
      title: "Speed as Standard",
      description: "Rapid delivery without compromise",
      icon: (
        <Zap
          size={28}
          className="transition-transform duration-300 group-hover:skew-y-6"
        />
      ),
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section - Updated to Match Reference */}
      <section className="mb-10 hero flex flex-col md:flex-row min-h-[450px] md:min-h-[520px] h-full items-center justify-between">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
            <Fade direction="down" triggerOnce>
              <h1 className="text-5xl sm:text-5xl font-bold text-black leading-tight mb-5">
                We don&apos;t chase trends.
              </h1>
              <h1 className="text-4xl sm:text-4xl font-bold text-black leading-tight mb-6">
                We build the systems that define them.
              </h1>
            </Fade>
            <Fade direction="up" triggerOnce delay={300}>
              <div className="mb-16">
                <Button
                  type="link"
                  href="/services"
                  className="flex w-64 h-14 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200"
                >
                  Services
                  <svg
                    className="ml-2 w-5 h-5 animate-bounce-x"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Button>
              </div>
            </Fade>
          </div>
          {/* Right side - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center h-full mt-8 md:mt-0">
            <img
              src={aboutImage}
              alt="About us"
              className="w-full max-w-[500px] h-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 cursor-pointer select-none"
              style={{ boxShadow: 'none', border: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* Mission Section - Enhanced */}
      <section id="mission" className="mb-16 bg-white">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{backgroundColor: '#384d00'}} />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            {/* Left accent/icon */}
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#384d00] mr-0 md:mr-8 mb-6 md:mb-0">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            {/* Mission statement */}
            <Fade direction="up" triggerOnce>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-2xl md:max-w-3xl px-4 md:px-0 text-center md:text-left mx-auto">
                At <span className="font-bold text-[#384d00]">Faqtor</span>, we empower businesses to eradicate inefficiency through creativity and precision with systems so intuitive, they simplify the complex. By merging human creativity with machine precision, we turn inefficiencies into opportunities and questions into breakthroughs guaranteeing growth that's not just sustained, but inevitable.
              </p>
            </Fade>
          </div>
        </div>
      </section>

      {/* Core Beliefs Section - Enhanced cards with interactions */}
      <section className="mb-16 overflow-x-auto">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Core Beliefs</h2>
            <div className="w-24 h-1 bg-opacity-90" style={{ backgroundColor: themeColor, margin: "0 auto" }} />
          </div>
          {/* Cards grid - responsive grid for perfect alignment */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {coreBeliefs.map((belief, index) => (
              <div
                key={index}
                className="group w-64 transition-all duration-500"
              >
                <div
                  className="h-64 bg-white rounded-xl shadow-md p-6 text-center flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer overflow-hidden relative border border-transparent hover:border-opacity-30"
                  style={{ borderColor: themeColor }}
                >
                  {/* Interactive background effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: themeColor }}
                  ></div>

                  {/* Animated accent line */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                    style={{ backgroundColor: themeColor }}
                  ></div>

                  {/* Interactive icon container */}
                  <div
                    className="relative z-10 rounded-full p-4 mb-5 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: themeColor }}
                  >
                    {belief.icon}
                  </div>

                  {/* Interactive text content */}
                  <h3
                    className="relative z-10 text-xl font-bold mb-3 transition-all duration-300 group-hover:transform group-hover:translate-y-1"
                    style={{ color: themeColor }}
                  >
                    {belief.title}
                  </h3>
                  <p className="relative z-10 text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-800">
                    {belief.description}
                  </p>

                  {/* Interactive shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Impact By Numbers */}
      <section id="stats-section" className="mb-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Impact By Numbers</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#384d00'}} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <DollarSign className="w-8 h-8" />, value: stats.revenue.toFixed(1), label: "Revenue Generated", suffix: "M", prefix: "$", max: 8
              },
              {
                icon: <TrendingUp className="w-8 h-8" />, value: Math.round(stats.customers), label: "Client Retention", suffix: "%", max: 100
              },
              {
                icon: <Award className="w-8 h-8" />, value: Math.round(stats.completed), label: "Projects Completed", suffix: "+", max: 50
              },
              {
                icon: <Star className="w-8 h-8" />, value: Math.round(stats.satisfaction), label: "Client Satisfaction", suffix: "%", max: 100
              },
            ].map((stat, index) => {
              // Calculate progress width
              let progress = 0;
              if (stat.suffix === "%") {
                progress = Number(stat.value);
              } else {
                progress = (Number(stat.value) / stat.max) * 100;
              }
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#384d00] flex flex-col items-center py-10 px-4 relative"
                  style={{height: '100%'}}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Icon with brand color background */}
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl" style={{backgroundColor: '#384d00'}}>
                    {React.cloneElement(stat.icon, { className: 'w-8 h-8 text-white' })}
                  </div>
                  {/* Number */}
                  <div className="relative">
                    <span className="block text-4xl font-extrabold text-gray-900 mb-2" style={{letterSpacing: '-0.03em'}}>
                      {stat.prefix || ''}{stat.value}{stat.suffix || ''}
                    </span>
                  </div>
                  {/* Label */}
                  <p className="text-gray-700 text-base font-medium mb-6 text-center">{stat.label}</p>
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: hoveredCard === index ? `${progress}%` : '0%',
                        backgroundColor: '#384d00',
                      }}
                    />
                  </div>
                  {/* Hover overlay for accent effect */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 group-hover:shadow-[0_8px_32px_0_rgba(56,77,0,0.10)] group-hover:ring-2 group-hover:ring-[#384d00]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Enhanced UI */}
      <section className="mb-16 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent opacity-5"></div>
          <div
            className="absolute -right-12 -top-12 w-64 h-64 rounded-full"
            style={{ backgroundColor: "#384d00", opacity: 0.05 }}
          ></div>
          <div
            className="absolute -left-12 bottom-0 w-96 h-96 rounded-full"
            style={{ backgroundColor: "#384d00", opacity: 0.05 }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-16">
              <h2
                className="text-4xl font-bold mb-3"
                style={{ color: "#384d00" }}
              >
                Success Stories
              </h2>
              <p className="text-lg mb-3" style={{ color: "#5a7800" }}>
                Real solutions, real results
              </p>
              <div
                className="w-24 h-1.5 mx-auto"
                style={{
                  background:
                    "linear-gradient(90deg, #384d00 0%, #5a7800 100%)",
                }}
              />
            </div>
          </Fade>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Case Study Navigation */}
            <div className="lg:w-1/3">
              <Fade direction="left" triggerOnce>
                <div
                  className="rounded-xl overflow-hidden shadow-lg"
                  style={{ background: "rgba(255, 255, 255, 0.8)" }}
                >
                  {caseStudies.map((study, index) => (
                    <div
                      key={study.id}
                      className={`p-5 cursor-pointer transition-all duration-300 border-l-4 ${
                        index === activeCaseStudy
                          ? "border-l-4 bg-white"
                          : "border-transparent hover:bg-white/60"
                      }`}
                      style={{
                        borderLeftColor:
                          index === activeCaseStudy ? "#384d00" : "transparent",
                      }}
                      onClick={() => handleCaseStudyChange(index)}
                    >
                      <div className="flex justify-between items-center">
                        <h3
                          className={`text-lg font-bold ${
                            index === activeCaseStudy ? "" : "text-gray-700"
                          }`}
                          style={{
                            color: index === activeCaseStudy ? "#384d00" : "",
                          }}
                        >
                          {study.client}
                        </h3>

                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor:
                              index === activeCaseStudy ? "#384d00" : "#ccd5ae",
                          }}
                        />
                      </div>

                      <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                        {study.challenge}
                      </p>

                      <div
                        className="flex items-center mt-3 text-xs font-medium"
                        style={{ color: "#5a7800" }}
                      >
                        <Clock size={14} className="mr-1" />
                        <span>{study.timeline}</span>
                        <span className="mx-2">•</span>
                        <span>{study.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>

            {/* Case Study Details */}
            <div className="lg:w-2/3">
              <Fade direction="right" triggerOnce>
                <div
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden h-full transition-all duration-500 ${
                    isAnimating ? "opacity-50" : "opacity-100"
                  }`}
                >
                  {caseStudies[activeCaseStudy] && (
                    <>
                      {/* Top image with overlay */}
                      <div className="h-64 relative overflow-hidden">
                        <img
                          src={caseStudies[activeCaseStudy].imageUrl}
                          alt={caseStudies[activeCaseStudy].client}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(56, 77, 0, 0.9), rgba(56, 77, 0, 0.3) 60%, transparent)",
                          }}
                        />
                        <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                          <h3 className="text-2xl font-bold mb-2">
                            {caseStudies[activeCaseStudy].client}
                          </h3>
                          <div className="flex items-center text-green-100">
                            <Layers size={16} className="mr-2" />
                            <span>{caseStudies[activeCaseStudy].category}</span>
                            <span className="mx-2">•</span>
                            <Clock size={16} className="mr-2" />
                            <span>{caseStudies[activeCaseStudy].timeline}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        {/* Challenge */}
                        <div className="mb-6">
                          <div className="flex items-center mb-3">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                              style={{
                                backgroundColor: "rgba(56, 77, 0, 0.1)",
                              }}
                            >
                              <AlertTriangle
                                size={18}
                                style={{ color: "#384d00" }}
                              />
                            </div>
                            <h4
                              className="text-lg font-semibold"
                              style={{ color: "#384d00" }}
                            >
                              The Challenge
                            </h4>
                          </div>
                          <p className="text-gray-700 ml-12">
                            {caseStudies[activeCaseStudy].challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div className="mb-6">
                          <div className="flex items-center mb-3">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                              style={{
                                backgroundColor: "rgba(56, 77, 0, 0.1)",
                              }}
                            >
                              <Zap size={18} style={{ color: "#384d00" }} />
                            </div>
                            <h4
                              className="text-lg font-semibold"
                              style={{ color: "#384d00" }}
                            >
                              Our Solution
                            </h4>
                          </div>
                          <p className="text-gray-700 ml-12">
                            {caseStudies[activeCaseStudy].solution}
                          </p>
                        </div>

                        {/* Results */}
                        <div className="pt-6 border-t border-gray-100">
                          <h4
                            className="text-lg font-semibold mb-4"
                            style={{ color: "#384d00" }}
                          >
                            Impact & Results
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div
                              className="p-5 rounded-xl text-white flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
                              style={{
                                background:
                                  "linear-gradient(135deg, #384d00 0%, #5a7800 100%)",
                              }}
                            >
                              <BarChart2 size={28} className="mb-2" />
                              <p className="text-xs uppercase tracking-wider font-semibold mb-1 opacity-80">
                                Revenue Generated
                              </p>
                              <p className="text-2xl font-bold">
                                {caseStudies[activeCaseStudy].resultRevenue}
                              </p>
                            </div>

                            <div
                              className="p-5 rounded-xl text-white flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
                              style={{
                                background:
                                  "linear-gradient(135deg, #5a7800 0%, #6c8f00 100%)",
                              }}
                            >
                              <Zap size={28} className="mb-2" />
                              <p className="text-xs uppercase tracking-wider font-semibold mb-1 opacity-80">
                                Efficiency Increase
                              </p>
                              <p className="text-2xl font-bold">
                                {caseStudies[activeCaseStudy].resultCustomers}
                              </p>
                            </div>

                            <div
                              className="p-5 rounded-xl text-white flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
                              style={{
                                background:
                                  "linear-gradient(135deg, #6c8f00 0%, #384d00 100%)",
                              }}
                            >
                              <Layers size={28} className="mb-2" />
                              <p className="text-xs uppercase tracking-wider font-semibold mb-1 opacity-80">
                                Key Metric
                              </p>
                              <p className="text-lg font-bold">
                                {caseStudies[activeCaseStudy].additionalStats}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced UI */}
      <section className="mb-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">Why Clients Choose Faqtor</h2>
              <h3 className="text-xl text-gray-600 mb-3 font-light">Benefits that deliver real value</h3>
              <div className="w-24 h-1.5 mx-auto rounded-full" style={{backgroundColor: '#384d00'}} />
            </div>
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-10 h-10" />, title: "Results-Driven Approach", desc: "We focus on delivering measurable outcomes that directly impact your bottom line, with clear metrics and tangible improvements.", stat: "300% ROI Average"
              },
              {
                icon: <TrendingUp className="w-10 h-10" />, title: "Scalable Solutions", desc: "Our systems grow with your business, eliminating the need for constant redevelopment and ensuring long-term value.", stat: "99.9% Uptime"
              },
              {
                icon: <Award className="w-10 h-10" />, title: "Rapid Implementation", desc: "We deliver solutions in weeks, not months, accelerating your time to market and providing immediate competitive advantages.", stat: "4x Faster"
              },
              {
                icon: <Shield className="w-10 h-10" />, title: "Transparent Communication", desc: "We maintain clear, jargon-free communication throughout the entire process, ensuring alignment at every stage.", stat: "24/7 Support"
              },
              {
                icon: <Target className="w-10 h-10" />, title: "Custom Approach", desc: "Every solution is tailored to your specific business needs and challenges, ensuring perfect alignment with your strategic goals.", stat: "100% Customized"
              },
              {
                icon: <Star className="w-10 h-10" />, title: "Future-Proof Technology", desc: "We use cutting-edge technologies that stand the test of time, giving your business a sustainable competitive advantage for years to come.", stat: "5+ Years Tech Stack"
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-200 rounded-2xl shadow-md min-h-[400px] h-full flex flex-col items-center p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#384d00]"
                style={{height: '100%'}}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full border-2 border-gray-200 transition-all duration-300 group-hover:border-[#384d00] bg-white"
                  style={{}}
                >
                  {React.cloneElement(card.icon, {
                    className: 'w-10 h-10 transition-all duration-300 group-hover:text-[#384d00] text-gray-400 group-hover:scale-110 group-hover:rotate-6',
                  })}
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center transition-all duration-300 group-hover:text-[#384d00]">{card.title}</h3>
                {/* Description */}
                <p className="text-gray-600 text-base text-center flex-grow mb-6 transition-all duration-300 group-hover:text-[#384d00]">{card.desc}</p>
                {/* Stat */}
                <div className="mt-auto py-2 px-4 bg-white border border-[#384d00] rounded-lg inline-flex items-center text-[#384d00] font-semibold text-base transition-all duration-300 group-hover:bg-[#384d00] group-hover:text-white">{card.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Discuss />
      <Footer />
    </>
  );
}
