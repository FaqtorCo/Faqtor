/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "parts/Header";
import { Portfolios } from "json/landingPageData";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeParticles, setActiveParticles] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);

  const project = Portfolios.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards((prev) => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll("[data-card-id]");
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [project]);

  // Generate floating particles
  useEffect(() => {
    const particles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setActiveParticles(particles);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/project")}
            className="px-6 py-3 bg-[#DAF7A6] text-black rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const images = Array.isArray(project.images)
    ? project.images
    : [project.imageUrl];
  const modules = project.modules || [];
  const accentColor = "#DAF7A6";

  // For projects without modules, create a fallback section
  const sections =
    modules.length > 0
      ? modules
      : [
          {
            title: "Overview",
            description:
              project.longDescription || project.description || "",
          },
        ];

  return (
    <div
      className="min-h-screen bg-black relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#DAF7A6]/5 to-transparent"></div>
        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {activeParticles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-[#DAF7A6]"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                animation: `particleFloat ${3 + particle.speed * 4}s ease-in-out infinite`,
                animationDelay: `${particle.id * 0.1}s`,
              }}
            />
          ))}
        </div>
        {/* Network Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(218, 247, 166, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(218, 247, 166, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              backgroundPosition: `${mousePosition.x * 0.01}px ${mousePosition.y * 0.01}px`,
            }}
          ></div>
        </div>
        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 rounded-full opacity-10 blur-xl"
              style={{
                background: `radial-gradient(circle, #DAF7A6 0%, transparent 70%)`,
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 2) * 40}%`,
                animation: `orbFloat ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Cursor glow */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            "radial-gradient(circle, rgba(218, 247, 166, 0.03) 0%, transparent 70%)",
        }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate("/project")}
            className="group inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#DAF7A6]/50 text-gray-300 hover:text-white transition-all duration-300"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Projects
          </button>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-[#DAF7A6]/20 text-[#DAF7A6] border border-[#DAF7A6]/30">
              {project.type}
            </span>
            {project.status && (
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                {project.status}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed mb-10">
            {project.description}
          </p>

          {/* Tech Stack */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:border-[#DAF7A6]/50 hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Module Sections — Alternating Layout */}
      {sections.map((mod, index) => {
        const isEven = index % 2 === 0;
        const isVisible = visibleCards.includes(index);
        const image = images[index] || images[0];

        return (
          <section
            key={index}
            data-card-id={index}
            className="relative py-20 md:py-28 overflow-hidden"
            style={{
              backgroundColor:
                index % 3 === 0
                  ? "#0a0a0a"
                  : index % 3 === 1
                    ? "#000000"
                    : "#0f0f0f",
            }}
          >
            {/* Section background effect */}
            <div className="absolute inset-0">
              <div
                className="absolute w-full h-full opacity-5"
                style={{
                  background: `radial-gradient(circle at ${isEven ? "20%" : "80%"} 50%, ${accentColor}40 0%, transparent 50%)`,
                }}
              ></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Image Section */}
                <div
                  className={`relative ${isEven ? "md:order-1" : "md:order-2"} ${
                    isVisible ? "animate-slide-in-left" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={image}
                        alt={`${project.title} - ${mod.title}`}
                        className="w-full h-[300px] md:h-[400px] object-cover transform transition-all duration-700 hover:scale-105 hover:brightness-110 cursor-pointer"
                        onClick={() => {
                          setModalImage(image);
                          setIsModalOpen(true);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>

                    {/* Decorative elements */}
                    <div
                      className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20 blur-2xl animate-pulse-slow"
                      style={{ backgroundColor: accentColor }}
                    ></div>
                    <div
                      className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-20 blur-2xl animate-pulse-slow"
                      style={{
                        backgroundColor: accentColor,
                        animationDelay: "1s",
                      }}
                    ></div>

                    {/* Module number badge */}
                    <div className="absolute top-4 left-4">
                      <div className="px-4 py-2 bg-black/80 backdrop-blur-sm shadow-xl rounded-full border border-[#DAF7A6]/30">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: accentColor }}
                          ></div>
                          <span className="text-sm font-semibold text-white">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`${isEven ? "md:order-2" : "md:order-1"} ${
                    isVisible ? "animate-slide-in-right" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight relative group">
                      <span className="relative z-10">{mod.title}</span>
                      <div
                        className="absolute -inset-2 opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity duration-500"
                        style={{ backgroundColor: accentColor }}
                      ></div>
                    </h2>

                    <div className="relative">
                      <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                        {mod.description}
                      </p>
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#DAF7A6] to-transparent opacity-30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section divider */}
            {index < sections.length - 1 && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-px h-12 bg-gradient-to-b from-[#DAF7A6] to-transparent opacity-50 animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-[#DAF7A6] rounded-full -mt-1 -ml-0.5 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            )}
          </section>
        );
      })}

      {/* Key Features Section */}
      {project.features && project.features.length > 0 && (
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Key Features
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">
              What makes {project.title} stand out
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#DAF7A6]/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#DAF7A6]/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#DAF7A6]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-200 text-lg font-medium">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Responsibilities Section */}
      {project.responsibility && project.responsibility.length > 0 && (
        <section className="relative py-16 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-wrap justify-center gap-4">
              {project.responsibility.map((resp, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/20 text-gray-300 hover:border-[#DAF7A6]/50 hover:text-white transition-all duration-300"
                >
                  {resp}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DAF7A6] rounded-full filter blur-3xl opacity-10 animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interested in a Similar Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's discuss how we can build something great for your business.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => window.open("https://cal.com/faqtor", "_blank")}
              className="group relative px-10 py-5 bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] hover:from-[#C8E6A0] hover:to-[#DAF7A6] text-black rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 overflow-hidden"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] rounded-full blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              <span className="relative z-10">Book a Meeting</span>
            </button>

            <button
              onClick={() => navigate("/project")}
              className="group relative px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#DAF7A6]/50 text-white rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110"
            >
              <span className="relative z-10">View All Projects</span>
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99999] flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-5xl max-h-full">
            <img
              src={modalImage}
              alt="Project Screenshot"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
          }
        }

        @keyframes orbFloat {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: translateX(0px) rotate(0deg);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0px) scale(1);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-float {
          animation: orbFloat 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailPage;
