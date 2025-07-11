/* eslint-disable */
/* esl
int-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";
import aboutus from "../json/aboutus.json";
import {
  Clock,
  AlertTriangle,
  Zap,
  BarChart2,
  Layers,
  Users,
  CheckCircle,
  Lightbulb,
  DollarSign,
  TrendingUp,
  Award,
  Star,
} from "lucide-react";
import Lottie from "lottie-react";
// Case Studies data
const caseStudies = [
  {
    id: "case-study-1",
    client: "GHS Medicare Advantage Organization",
    challenge:
      "High cost of lead qualification and appointment setting for sales agents.",
    solution:
      "AI outbound calling to transfer interested leads to live sales agents or schedule onsite appointments.",
    resultRevenue: "$2.1M",
    resultCustomers: "45%",
    keyMetric: "1200+ Appointments",
    category: "Healthcare",
    timeline: "2024",
  },
  {
    id: "case-study-2",
    client: "Customer Service AI Implementation",
    challenge: "Long wait times and inconsistent customer service quality.",
    solution:
      "24/7 AI agents with contextual memory that analyze caller intent, history, and sentiment in real time.",
    resultRevenue: "28%",
    resultCustomers: "89%",
    keyMetric: "Avg. Wait Time: 12s",
    category: "Enterprise",
    timeline: "6 months",
  },
  {
    id: "case-study-3",
    client: "Brand Identity System",
    challenge: "Poor market recognition and high website bounce rates.",
    solution:
      "Comprehensive brand identity system with intuitive user interface design.",
    resultRevenue: "3.2x",
    resultCustomers: "89%",
    keyMetric: "Bounce Rate ↓ 54%",
    category: "Retail",
    timeline: "5 months",
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
      {/* Centered About Us Heading */}
      <div className="w-full flex justify-center items-center mt-0 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">
          About Us
        </h1>
      </div>

      {/* Hero Section - Matching Hero Component Style */}
      <section className="mb-0 relative bg-black">
        <div className="relative flex flex-col lg:flex-row items-center container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-2">
            <Fade direction="down" triggerOnce duration={600}>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-5"
                style={{ textShadow: "none", color: "#daf7a7" }}
              >
                We don&apos;t chase trends.
              </h2>
              <p
                className="font-light text-lg sm:text-xl leading-relaxed mb-8 sm:mb-12"
                style={{ textShadow: "none", color: "#fff" }}
              >
                We build the systems that define them.
              </p>
            </Fade>
            <Fade direction="up" delay={500} triggerOnce>
              <Button
                type="link"
                href="#services"
                onClick={(e) => {
                  if (e) {
                    e.preventDefault();
                  }
                  const element = document.getElementById("services");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="flex w-full sm:w-auto h-auto items-center justify-center px-8 sm:px-14 py-4 sm:py-5 text-lg sm:text-xl text-black bg-[#daf7a7] rounded-lg shadow-2xl hover:bg-dark-theme-[#daf7a7] transition duration-200"
              >
                Services
                <svg
                  className="ml-2 w-6 h-6 sm:w-7 sm:h-7 text-black animate-bounce-x"
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
            </Fade>
          </div>

          {/* Right side - Animation */}
          <div className="flex pt-5 md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/2">
            <Fade direction="up" triggerOnce>
              <Lottie
                animationData={aboutus}
                loop={true}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "550px",
                  minWidth: "280px",
                }}
                className="overflow-visible transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 cursor-pointer select-none"
              />
            </Fade>
          </div>
        </div>
      </section>

      {/* Mission Section - Minimal Spacing */}
      <section id="mission" className="-mt-4 bg-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="text-center mt-3 relative z-20">
            <h2
              className="font-bold text-2xl sm:text-3xl md:text-4xl mb-1"
              style={{ textShadow: "none", color: "#daf7a7" }}
            >
              Our Mission
            </h2>
            <div
              className="w-20 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#374f00" }}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full relative z-10 mt-4 sm:mt-6">
            {/* Left accent/icon */}
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#374f00] mr-0 md:mr-6 mb-4 md:mb-0">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            {/* Mission statement */}
            <Fade direction="up" triggerOnce>
              <p
                className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl md:max-w-3xl px-4 md:px-0 text-center md:text-left mx-auto"
                style={{ textShadow: "none", color: "#fff" }}
              >
                At
                <span
                  className="font-extrabold underline underline-offset-4 decoration-2"
                  style={{
                    textShadow: "none",
                    fontSize: "1em",
                    padding: "0 0.3em",
                    color: "#daf7a7",
                  }}
                >
                  Faqtor
                </span>
                , we empower businesses to eradicate inefficiency through
                creativity and precision with systems so intuitive, they
                simplify the complex. By merging human creativity with machine
                precision, we turn inefficiencies into opportunities and
                questions into breakthroughs guaranteeing growth that's not just
                sustained, but inevitable.
              </p>
            </Fade>
          </div>
        </div>
      </section>

      {/* Core Beliefs Section - Minimal Spacing */}
      <section className="py-6 sm:py-8 overflow-x-auto bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-7">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1"
              style={{ textShadow: "none", color: "#daf7a7" }}
            >
              Core Beliefs
            </h2>
            <div
              className="w-24 h-1 bg-opacity-90"
              style={{ backgroundColor: "#374f00", margin: "0 auto" }}
            />
          </div>
          {/* Cards grid - responsive grid for perfect alignment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {coreBeliefs.map((belief, index) => (
              <div
                key={index}
                className="group w-full max-w-xs mx-auto transition-all duration-500"
              >
                <div
                  className="h-48 sm:h-56 bg-[#181c16] rounded-xl shadow-lg p-4 sm:p-5 text-center flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden relative border border-[#daf7a7]/30 hover:border-[#daf7a7]"
                  style={{ borderColor: "#daf7a7" }}
                >
                  {/* Interactive background effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: "#daf7a7" }}
                  ></div>

                  {/* Animated accent line */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                    style={{ backgroundColor: "#daf7a7" }}
                  ></div>

                  {/* Interactive icon container */}
                  <div
                    className="relative z-10 rounded-full p-2 sm:p-3 mb-3 sm:mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: "#daf7a7", color: "#181c16" }}
                  >
                    {React.cloneElement(belief.icon, {
                      color: "#181c16",
                      style: { color: "#181c16" },
                      className: "w-5 h-5 sm:w-6 sm:h-6",
                    })}
                  </div>

                  {/* Interactive text content */}
                  <h3
                    className="relative z-10 text-base sm:text-lg font-bold mb-2 transition-all duration-300 group-hover:transform group-hover:translate-y-1"
                    style={{ color: "#daf7a7", textShadow: "none" }}
                  >
                    {belief.title}
                  </h3>
                  <p
                    className="relative z-10 text-xs transition-colors duration-300 group-hover:text-gray-100 leading-relaxed"
                    style={{ textShadow: "none", color: "#fff" }}
                  >
                    {belief.description}
                  </p>

                  {/* Interactive shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Impact By Numbers - Minimal Spacing */}
      <section
        id="stats-section"
        className="py-6 sm:py-8 relative overflow-hidden bg-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-7">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1"
              style={{ textShadow: "none", color: "#daf7a7" }}
            >
              Impact By Numbers
            </h2>
            <div
              className="w-24 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#374f00" }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />,
                value: stats.revenue.toFixed(1),
                label: "Revenue Generated",
                suffix: "M",
                prefix: "$",
                max: 8,
              },
              {
                icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
                value: Math.round(stats.customers),
                label: "Client Retention",
                suffix: "%",
                max: 100,
              },
              {
                icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
                value: Math.round(stats.completed),
                label: "Projects Completed",
                suffix: "+",
                max: 50,
              },
              {
                icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
                value: Math.round(stats.satisfaction),
                label: "Client Satisfaction",
                suffix: "%",
                max: 100,
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
                  className="group w-full max-w-xs mx-auto bg-[#181c16] border border-[#daf7a7]/30 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#daf7a7] flex flex-col items-center py-6 sm:py-8 px-4 relative overflow-hidden"
                  style={{ height: "100%" }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Icon with brand color background */}
                  <div
                    className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#23281c]"
                    style={{ backgroundColor: "#daf7a7" }}
                  >
                    {React.cloneElement(stat.icon, {
                      className:
                        "w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 group-hover:scale-125",
                      style: { color: "#181c16" },
                    })}
                  </div>
                  {/* Number */}
                  <div className="relative">
                    <span
                      className="block text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2"
                      style={{
                        letterSpacing: "-0.03em",
                        textShadow: "none",
                        color: "#daf7a7",
                      }}
                    >
                      {stat.prefix || ""}
                      {stat.value}
                      {stat.suffix || ""}
                    </span>
                  </div>
                  {/* Label */}
                  <p
                    className="text-sm sm:text-base font-medium mb-3 sm:mb-4 text-center"
                    style={{ textShadow: "none", color: "#fff" }}
                  >
                    {stat.label}
                  </p>
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: hoveredCard === index ? `${progress}%` : "0%",
                        backgroundColor: "#daf7a7",
                      }}
                    />
                  </div>
                  {/* Interactive background effect (overlay) */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: "#daf7a7" }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Minimal Spacing */}
      <section className="py-6 sm:py-8 relative overflow-hidden bg-black">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#daf7a7] to-transparent opacity-5"></div>
          <div
            className="absolute -right-8 -top-8 w-40 h-40 rounded-full"
            style={{ backgroundColor: "#daf7a7", opacity: 0.05 }}
          ></div>
          <div
            className="absolute -left-8 bottom-0 w-64 h-64 rounded-full"
            style={{ backgroundColor: "#daf7a7", opacity: 0.05 }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-4 sm:mb-6">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "#daf7a7", textShadow: "none" }}
              >
                Case Studies
              </h2>
              <p
                className="text-base sm:text-lg mb-1"
                style={{ color: "#fff", textShadow: "none" }}
              >
                Real solutions, real results
              </p>
              <div
                className="w-24 h-1 mx-auto"
                style={{
                  background:
                    "linear-gradient(90deg, #daf7a7 0%, #daf7a7 100%)",
                }}
              />
            </div>
          </Fade>

          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch min-h-[500px]">
            {/* Case Study Navigation */}
            <div className="lg:w-1/3 h-full flex flex-col">
              <Fade direction="left" triggerOnce>
                <div className="rounded-xl overflow-hidden shadow-lg bg-[#181c16] h-full flex flex-col min-h-[400px] lg:min-h-[562px]">
                  {caseStudies.map((study, index) => (
                    <div
                      key={study.id}
                      className={`flex-1 p-4 sm:p-6 cursor-pointer transition-all duration-300 border-l-4 min-h-[120px] sm:min-h-[150px] lg:min-h-[192px] ${
                        index === activeCaseStudy
                          ? "border-l-4 bg-[#23281c]"
                          : "border-transparent hover:bg-[#23281c]/60"
                      }`}
                      style={{
                        borderLeftColor:
                          index === activeCaseStudy ? "#daf7a7" : "transparent",
                      }}
                      onClick={() => handleCaseStudyChange(index)}
                    >
                      <div className="flex justify-between items-center">
                        <h3
                          className={`text-base sm:text-lg font-bold ${
                            index === activeCaseStudy ? "" : "text-gray-400"
                          }`}
                          style={{
                            color:
                              index === activeCaseStudy ? "#daf7a7" : "#bfc8b2",
                            textShadow: "none",
                          }}
                        >
                          {study.client}
                        </h3>
                        <div
                          className="w-3 h-3 rounded-full border border-[#daf7a7]"
                          style={{
                            backgroundColor:
                              index === activeCaseStudy
                                ? "#daf7a7"
                                : "transparent",
                          }}
                        />
                      </div>
                      <p
                        className="mt-2 text-xs sm:text-sm line-clamp-2"
                        style={{
                          textShadow: "none",
                          color: index === activeCaseStudy ? "#fff" : "#bfc8b2",
                        }}
                      >
                        {study.challenge}
                      </p>
                      <div
                        className="flex items-center mt-2 sm:mt-3 text-xs font-medium"
                        style={{
                          color:
                            index === activeCaseStudy ? "#daf7a7" : "#bfc8b2",
                          textShadow: "none",
                        }}
                      >
                        <Clock size={12} className="mr-1" />
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
            <div className="lg:w-2/3 h-full flex flex-col">
              <Fade direction="right" triggerOnce>
                <div
                  className={`bg-[#181c16] rounded-2xl shadow-xl overflow-hidden h-full min-h-[400px] lg:min-h-[250px] transition-all duration-500 ${
                    isAnimating ? "opacity-50" : "opacity-100"
                  }`}
                >
                  {caseStudies[activeCaseStudy] && (
                    <>
                      {/* Top image with overlay */}
                      <div className="h-48 sm:h-56 lg:h-64 relative overflow-hidden">
                        {activeCaseStudy === 0 && (
                          <img
                            src="/assets/images/1case.jpg"
                            alt="GHS Medicare Advantage Organization Case Study"
                            className="w-full h-full object-cover rounded-lg bg-black"
                          />
                        )}
                        {activeCaseStudy === 1 && (
                          <img
                            src="/assets/images/3case.jpg"
                            alt="Customer Service AI Implementation Case Study"
                            className="w-full h-full object-cover rounded-lg bg-black"
                          />
                        )}
                        {activeCaseStudy === 2 && (
                          <img
                            src="/assets/images/2case.jpg"
                            alt="Brand Identity System Case Study"
                            className="w-full h-full object-cover rounded-lg bg-black"
                          />
                        )}
                        <div className="absolute bottom-0 left-0 p-3 sm:p-5 z-10">
                          <h3
                            className="text-lg sm:text-xl font-bold mb-1"
                            style={{ textShadow: "none", color: "#daf7a7" }}
                          >
                            {caseStudies[activeCaseStudy].client}
                          </h3>
                          <div
                            className="flex items-center text-xs font-medium"
                            style={{ color: "#daf7a7" }}
                          >
                            <Layers
                              size={14}
                              className="mr-2"
                              style={{ color: "#daf7a7" }}
                            />
                            <span>{caseStudies[activeCaseStudy].category}</span>
                            <span className="mx-2">•</span>
                            <Clock
                              size={14}
                              className="mr-2"
                              style={{ color: "#daf7a7" }}
                            />
                            <span>{caseStudies[activeCaseStudy].timeline}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 sm:p-4 lg:p-3">
                        {/* Challenge */}
                        <div className="mb-3 sm:mb-4 lg:mb-2">
                          <div className="flex items-center mb-2">
                            <div
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-2 sm:mr-3"
                              style={{
                                backgroundColor: "rgba(218, 247, 167, 0.1)",
                              }}
                            >
                              <AlertTriangle
                                size={16}
                                style={{ color: "#daf7a7" }}
                              />
                            </div>
                            <h4
                              className="text-sm sm:text-base font-semibold"
                              style={{ color: "#daf7a7", textShadow: "none" }}
                            >
                              The Challenge
                            </h4>
                          </div>
                          <p
                            className="ml-10 sm:ml-12 text-xs sm:text-sm"
                            style={{ textShadow: "none", color: "#fff" }}
                          >
                            {caseStudies[activeCaseStudy].challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div className="mb-3 sm:mb-4 lg:mb-2">
                          <div className="flex items-center mb-2">
                            <div
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-2 sm:mr-3"
                              style={{
                                backgroundColor: "rgba(218, 247, 167, 0.1)",
                              }}
                            >
                              <Zap size={16} style={{ color: "#daf7a7" }} />
                            </div>
                            <h4
                              className="text-sm sm:text-base font-semibold"
                              style={{ color: "#daf7a7", textShadow: "none" }}
                            >
                              Our Solution
                            </h4>
                          </div>
                          <p
                            className="ml-10 sm:ml-12 text-xs sm:text-sm"
                            style={{ textShadow: "none", color: "#fff" }}
                          >
                            {caseStudies[activeCaseStudy].solution}
                          </p>
                        </div>

                        {/* Results */}
                        <div className="pt-3 border-t border-gray-100">
                          <h4
                            className="text-sm sm:text-base font-semibold mb-2"
                            style={{ color: "#daf7a7", textShadow: "none" }}
                          >
                            Impact & Results
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            <div className="p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center text-center transition-transform hover:scale-105 border border-[#daf7a7]/30 bg-[#181c16] w-full min-h-[96px] sm:min-h-[104px] lg:min-h-[96px]">
                              <BarChart2
                                size={18}
                                className="mb-1 sm:mb-2"
                                style={{ color: "#daf7a7" }}
                              />
                              <p
                                className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1 opacity-80 leading-tight"
                                style={{ textShadow: "none", color: "#daf7a7" }}
                              >
                                Revenue Generated
                              </p>
                              <p
                                className="text-sm sm:text-base lg:text-base font-bold"
                                style={{ textShadow: "none", color: "#fff" }}
                              >
                                {caseStudies[activeCaseStudy].resultRevenue}
                              </p>
                            </div>

                            <div className="p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center text-center transition-transform hover:scale-105 border border-[#daf7a7]/30 bg-[#181c16] w-full min-h-[96px] sm:min-h-[104px] lg:min-h-[96px]">
                              <Zap
                                size={18}
                                className="mb-1 sm:mb-2"
                                style={{ color: "#daf7a7" }}
                              />
                              <p
                                className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1 opacity-80 leading-tight"
                                style={{ textShadow: "none", color: "#daf7a7" }}
                              >
                                Efficiency Increase
                              </p>
                              <p
                                className="text-sm sm:text-base lg:text-base font-bold"
                                style={{ textShadow: "none", color: "#fff" }}
                              >
                                {caseStudies[activeCaseStudy].resultCustomers}
                              </p>
                            </div>

                            <div className="p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center text-center transition-transform hover:scale-105 border border-[#daf7a7]/30 bg-[#181c16] w-full min-h-[96px] sm:min-h-[104px] lg:min-h-[96px] sm:col-span-2 lg:col-span-1">
                              <Layers
                                size={18}
                                className="mb-1 sm:mb-2"
                                style={{ color: "#daf7a7" }}
                              />
                              <p
                                className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1 opacity-80 leading-tight"
                                style={{ textShadow: "none", color: "#daf7a7" }}
                              >
                                Key Metric
                              </p>
                              <p
                                className="text-xs sm:text-sm lg:text-xs font-bold"
                                style={{ textShadow: "none", color: "#fff" }}
                              >
                                {caseStudies[activeCaseStudy].keyMetric}
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
    </>
  );
}
