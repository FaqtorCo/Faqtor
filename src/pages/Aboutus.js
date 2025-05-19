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
import { Lightbulb, CheckCircle, Users, Zap } from "lucide-react";
import firstCaseStudyImage from "../assets/images/Aboutus/1st.jpg";
import secondCaseStudyImage from "../assets/images/Aboutus/2nd.jpg";
import thirdCaseStudyImage from "../assets/images/Aboutus/3rd.jpg";
export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for animated count-up values for stats
  const [stats, setStats] = useState({
    revenue: 0,
    customers: 0,
    completed: 0,
    satisfaction: 0,
  });

  // State for animated cards
  const [animatedCard, setAnimatedCard] = useState(null);

  // Animate stats on scroll
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          const interval = setInterval(() => {
            setStats((prevStats) => {
              const newRevenue =
                prevStats.revenue >= 8 ? 8 : prevStats.revenue + 0.1;
              const newCustomers =
                prevStats.customers >= 70 ? 70 : prevStats.customers + 1;
              const newCompleted =
                prevStats.completed >= 50 ? 50 : prevStats.completed + 1;
              const newSatisfaction =
                prevStats.satisfaction >= 97 ? 97 : prevStats.satisfaction + 1;

              if (
                newRevenue === 8 &&
                newCustomers === 70 &&
                newCompleted === 50 &&
                newSatisfaction === 97
              ) {
                clearInterval(interval);
              }

              return {
                revenue: newRevenue,
                customers: newCustomers,
                completed: newCompleted,
                satisfaction: newSatisfaction,
              };
            });
          }, 30);

          return () => clearInterval(interval);
        }
      }
      return undefined;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      category: "Healthcare",
      timeline: "2024",
      imageUrl: firstCaseStudyImage,
      additionalStats: "600,000 calls automated",
    },
    {
      id: "case-study-2",
      client: "Customer Service AI Implementation",
      challenge: "Long wait times and inconsistent customer service quality.",
      solution:
        "24/7 AI agents with contextual memory that analyze caller intent, history, and sentiment in real time.",
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
      solution:
        "Comprehensive brand identity system with intuitive user interface design.",
      resultRevenue: "3.2x",
      resultCustomers: "89%",
      category: "Retail",
      timeline: "5 months",
      imageUrl: thirdCaseStudyImage,
      additionalStats: "62% reduction in bounce rates",
    },
  ];

  // State for active case study
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

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

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="mb-2 relative py-16 md:py-20 flex items-center justify-center bg-white overflow-hidden">
        {/* Simplified container for better responsiveness */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <Fade direction="down" triggerOnce>
            <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-4">
              We don&apos;t chase trends.
            </h1>
            <h1 className="text-3xl sm:text-4xl font-bold text-black leading-tight mb-6">
              We build the systems that define them.
            </h1>
          </Fade>

          <Fade direction="up" triggerOnce delay={300}>
            <div className="flex justify-center">
              <Button
                type="link"
                href="/services"
                className="bg-blue-800 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-900 transition-colors duration-300 flex items-center"
              >
                Discover Solutions
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
      </section>

      {/* Mission Section */}
      <section id="mission" className="mb-2 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 pt-2 pb-12">
          <Fade direction="up" triggerOnce>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                  Our Mission
                </h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto" />
              </div>
              <div className="relative">
                <div className="relative bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg mr-6">
                      <svg
                        className="w-8 h-8 text-white"
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="flex-1">
                      <p className="text-xl leading-relaxed text-gray-700">
                        At{" "}
                        <span className="font-bold text-blue-900">Faqtor</span>,
                        we empower businesses to eradicate inefficiency through
                        creativity and precision with systems so intuitive, they
                        simplify the complex. By merging human creativity with
                        machine precision, we turn inefficiencies into
                        opportunities and questions into breakthroughs
                        guaranteeing growth that's not just sustained, but
                        inevitable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Core Beliefs Section - Enhanced cards with interactions */}
      <section className="mb-2 py-4 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Core Beliefs
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Limitless Innovation Card */}
            <div className="group bg-white rounded-lg shadow-md p-8 text-center h-64 flex flex-col items-center transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] overflow-hidden relative">
              {/* Subtle background animation on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon with animation */}
              <div className="relative z-10 bg-blue-500 rounded-lg p-3 mb-4 text-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                <Lightbulb size={28} className="group-hover:animate-pulse" />
              </div>

              {/* Text content */}
              <h3 className="relative z-10 text-xl font-bold text-slate-800 mb-3 transition-colors duration-300 group-hover:text-blue-700">
                Limitless Innovation
              </h3>
              <p className="relative z-10 text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                We push boundaries and reimagine possibilities
              </p>
            </div>

            {/* Proven Impact Card */}
            <div className="group bg-white rounded-lg shadow-md p-8 text-center h-64 flex flex-col items-center transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] overflow-hidden relative">
              {/* Subtle background animation on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon with animation */}
              <div className="relative z-10 bg-green-500 rounded-lg p-3 mb-4 text-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                <CheckCircle
                  size={28}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text content */}
              <h3 className="relative z-10 text-xl font-bold text-slate-800 mb-3 transition-colors duration-300 group-hover:text-green-700">
                Proven Impact
              </h3>
              <p className="relative z-10 text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                Measurable results, not promises
              </p>
            </div>

            {/* Human-Centric Design Card */}
            <div className="group bg-white rounded-lg shadow-md p-8 text-center h-64 flex flex-col items-center transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] overflow-hidden relative">
              {/* Subtle background animation on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon with animation */}
              <div className="relative z-10 bg-purple-500 rounded-lg p-3 mb-4 text-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                <Users
                  size={28}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text content */}
              <h3 className="relative z-10 text-xl font-bold text-slate-800 mb-3 transition-colors duration-300 group-hover:text-purple-700">
                Human-Centric Design
              </h3>
              <p className="relative z-10 text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                Intuitive systems that enhance
              </p>
            </div>

            {/* Speed as Standard Card */}
            <div className="group bg-white rounded-lg shadow-md p-8 text-center h-64 flex flex-col items-center transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] overflow-hidden relative">
              {/* Subtle background animation on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon with animation */}
              <div className="relative z-10 bg-orange-500 rounded-lg p-3 mb-4 text-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                <Zap
                  size={28}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text content */}
              <h3 className="relative z-10 text-xl font-bold text-slate-800 mb-3 transition-colors duration-300 group-hover:text-orange-700">
                Speed as Standard
              </h3>
              <p className="relative z-10 text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                Rapid delivery without compromise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Interactive and modern */}
      <section
        id="stats-section"
        className="mb-2 py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-10 -top-20 -left-20 animate-pulse" />
          <div className="absolute w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10 -bottom-20 -right-20 animate-pulse" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Impact By Numbers
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" />
              <p className="text-blue-200 mt-4 text-lg">
                Measurable results that speak for themselves
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Fade direction="up" triggerOnce>
              <div className="group relative bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 border border-white/20 hover:border-white/30 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    ${stats.revenue.toFixed(1)}M
                  </h3>
                  <p className="text-blue-200 text-sm font-medium">
                    Average Revenue Generated
                  </p>
                  <div className="mt-3 h-1 bg-blue-400/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-400 rounded-full"
                      style={{ width: `${(stats.revenue / 8) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </Fade>

            <Fade direction="up" delay={200} triggerOnce>
              <div className="group relative bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 border border-white/20 hover:border-white/30 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {Math.round(stats.customers)}%
                  </h3>
                  <p className="text-blue-200 text-sm font-medium">
                    Client Retention Rate
                  </p>
                  <div className="mt-3 h-1 bg-green-400/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-400 rounded-full"
                      style={{ width: `${stats.customers}%` }}
                    />
                  </div>
                </div>
              </div>
            </Fade>

            <Fade direction="up" delay={400} triggerOnce>
              <div className="group relative bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 border border-white/20 hover:border-white/30 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {Math.round(stats.completed)}+
                  </h3>
                  <p className="text-blue-200 text-sm font-medium">
                    Projects Completed
                  </p>
                  <div className="mt-3 h-1 bg-purple-400/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-400 rounded-full"
                      style={{ width: `${(stats.completed / 50) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </Fade>

            <Fade direction="up" delay={600} triggerOnce>
              <div className="group relative bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 border border-white/20 hover:border-white/30 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a2 2 0 002 2h2a2 2 0 002-2v-4M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1"
                      />
                    </svg>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {Math.round(stats.satisfaction)}%
                  </h3>
                  <p className="text-blue-200 text-sm font-medium">
                    Client Satisfaction
                  </p>
                  <div className="mt-3 h-1 bg-yellow-400/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${stats.satisfaction}%` }}
                    />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Enhanced UI */}
      <section className="mb-2 py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-3">
                Case Studies
              </h2>
              <h3 className="text-xl text-blue-600 mb-3 font-light">
                Faqss don't lie.
              </h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto" />
            </div>
          </Fade>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Case Study List */}
            <div className="lg:w-1/3">
              <Fade direction="left" triggerOnce>
                {caseStudies.map((study, index) => (
                  <div
                    key={study.id}
                    className={`mb-4 p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                      index === activeCaseStudy
                        ? "bg-blue-900 text-white"
                        : "bg-white hover:bg-blue-50 text-gray-800 shadow-md"
                    }`}
                    onClick={() => setActiveCaseStudy(index)}
                  >
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        index === activeCaseStudy
                          ? "text-white"
                          : "text-blue-900"
                      }`}
                    >
                      {study.client}
                    </h3>
                    <p
                      className={
                        index === activeCaseStudy
                          ? "text-blue-100"
                          : "text-gray-600"
                      }
                    >
                      {study.challenge}
                    </p>
                  </div>
                ))}
              </Fade>
            </div>

            {/* Right side - Case Study Details */}
            <div className="lg:w-2/3">
              <Fade direction="right" triggerOnce>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                  {/* Case study details */}
                  {caseStudies[activeCaseStudy] && (
                    <>
                      {/* Top image with overlay */}
                      <div className="h-64 relative overflow-hidden">
                        <img
                          src={caseStudies[activeCaseStudy].imageUrl}
                          alt={caseStudies[activeCaseStudy].client}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                          <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                            {caseStudies[activeCaseStudy].client}
                          </h3>
                          <div className="flex items-center text-blue-200">
                            <svg
                              className="w-5 h-5 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>
                              {caseStudies[activeCaseStudy].timeline} timeline
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        {/* The Challenge */}
                        <div className="mb-6">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                              <svg
                                className="w-5 h-5 text-red-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                              </svg>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900">
                              The Challenge
                            </h4>
                          </div>
                          <p className="text-gray-700 ml-13">
                            {caseStudies[activeCaseStudy].challenge}
                          </p>
                        </div>

                        {/* The Solution */}
                        <div className="mb-6">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg
                                className="w-5 h-5 text-blue-600"
                                xmlns="http://www.w3.org/2000/svg"
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
                            <h4 className="text-lg font-semibold text-gray-900">
                              Our Solution
                            </h4>
                          </div>
                          <p className="text-gray-700 ml-13">
                            {caseStudies[activeCaseStudy].solution}
                          </p>
                        </div>

                        {/* Results */}
                        <div className="pt-6 border-t border-gray-100">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Results
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl">
                              <p className="text-xs uppercase tracking-wider text-blue-700 font-semibold mb-1">
                                Revenue Generated
                              </p>
                              <div className="flex items-end">
                                <p className="text-3xl font-bold text-blue-900">
                                  {caseStudies[activeCaseStudy].resultRevenue}
                                </p>
                                <p className="text-blue-700 ml-2 pb-1">
                                  in {caseStudies[activeCaseStudy].timeline}
                                </p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl">
                              <p className="text-xs uppercase tracking-wider text-green-700 font-semibold mb-1">
                                Efficiency Increase
                              </p>
                              <div className="flex items-end">
                                <p className="text-3xl font-bold text-green-900">
                                  {caseStudies[activeCaseStudy].resultCustomers}
                                </p>
                              </div>
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

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Fade direction="up" triggerOnce>
              <button
                type="button"
                className="relative inline-flex overflow-hidden group px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Schedule a Consultation
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
              </button>
            </Fade>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced UI */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-blue-100/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full opacity-70 blur-3xl" />
        <div className="absolute top-1/4 right-0 w-1/4 h-1/4 bg-indigo-50 rounded-full opacity-70 blur-3xl" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-3">
                Why Clients Choose Faqtor
              </h2>
              <h3 className="text-xl text-blue-600 mb-3 font-light">
                Benefits that deliver real value
              </h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-500 mx-auto" />
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Results-Driven */}
            <Fade direction="up" triggerOnce cascade damping={0.1}>
              {/* Card 1 - Results-Driven Approach */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-70 transition duration-500" />

                <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-500 p-8 border border-gray-200 h-full overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mr-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <svg
                          className="w-8 h-8 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                          Key Benefit
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                          Results-Driven Approach
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 flex-grow">
                      We focus on delivering measurable outcomes that directly
                      impact your bottom line, with clear metrics and tangible
                      improvements.
                    </p>

                    <div className="mt-auto">
                      <div className="py-2 px-4 bg-blue-50 rounded-lg inline-flex items-center">
                        <span className="text-2xl font-bold text-blue-800 mr-2">
                          300%
                        </span>
                        <span className="text-blue-700 text-sm">
                          ROI Average
                        </span>
                      </div>

                      <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-1000" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Scalable Solutions */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-70 transition duration-500" />

                <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-500 p-8 border border-gray-200 h-full overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mr-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <svg
                          className="w-8 h-8 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 11l5-5m0 0l5 5m-5-5v12"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                          Key Benefit
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                          Scalable Solutions
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 flex-grow">
                      Our systems grow with your business, eliminating the need
                      for constant redevelopment and ensuring long-term value.
                    </p>

                    <div className="mt-auto">
                      <div className="py-2 px-4 bg-blue-50 rounded-lg inline-flex items-center">
                        <span className="text-2xl font-bold text-blue-800 mr-2">
                          99.9%
                        </span>
                        <span className="text-blue-700 text-sm">Uptime</span>
                      </div>

                      <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-1000" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Rapid Implementation */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-70 transition duration-500" />

                <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-500 p-8 border border-gray-200 h-full overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mr-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <svg
                          className="w-8 h-8 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                          Key Benefit
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                          Rapid Implementation
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 flex-grow">
                      We deliver solutions in weeks, not months, accelerating
                      your time to market and providing immediate competitive
                      advantages.
                    </p>

                    <div className="mt-auto">
                      <div className="py-2 px-4 bg-blue-50 rounded-lg inline-flex items-center">
                        <span className="text-2xl font-bold text-blue-800 mr-2">
                          4x
                        </span>
                        <span className="text-blue-700 text-sm">Faster</span>
                      </div>

                      <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-1000" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Transparent Communication */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-70 transition duration-500" />

                <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-500 p-8 border border-gray-200 h-full overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mr-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <svg
                          className="w-8 h-8 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                          Key Benefit
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                          Transparent Communication
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 flex-grow">
                      We maintain clear, jargon-free communication throughout
                      the entire process, ensuring alignment at every stage.
                    </p>

                    <div className="mt-auto">
                      <div className="py-2 px-4 bg-blue-50 rounded-lg inline-flex items-center">
                        <span className="text-2xl font-bold text-blue-800 mr-2">
                          24/7
                        </span>
                        <span className="text-blue-700 text-sm">Support</span>
                      </div>

                      <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-1000" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5 - Custom Approach */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-70 transition duration-500" />

                <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-500 p-8 border border-gray-200 h-full overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mr-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <svg
                          className="w-8 h-8 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                          Key Benefit
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                          Custom Approach
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 flex-grow">
                      Every solution is tailored to your specific business needs
                      and challenges, ensuring perfect alignment with your
                      strategic goals.
                    </p>

                    <div className="mt-auto">
                      <div className="py-2 px-4 bg-blue-50 rounded-lg inline-flex items-center">
                        <span className="text-2xl font-bold text-blue-800 mr-2">
                          100%
                        </span>
                        <span className="text-blue-700 text-sm">
                          Customized
                        </span>
                      </div>

                      <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-1000" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 6 - Future-Proof Technology */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-70 transition duration-500" />

                <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-500 p-8 border border-gray-200 h-full overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-32 h-32 bg-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg mr-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <svg
                          className="w-8 h-8 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider block mb-1">
                          Key Benefit
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-800 transition-colors duration-300">
                          Future-Proof Technology
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 flex-grow">
                      We use cutting-edge technologies that stand the test of
                      time, giving your business a sustainable competitive
                      advantage for years to come.
                    </p>

                    <div className="mt-auto">
                      <div className="py-2 px-4 bg-indigo-50 rounded-lg inline-flex items-center">
                        <span className="text-2xl font-bold text-indigo-800 mr-2">
                          5+
                        </span>
                        <span className="text-indigo-700 text-sm">
                          Years Tech Stack
                        </span>
                      </div>

                      <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-1000" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <Discuss />
      <Footer />
    </>
  );
}
