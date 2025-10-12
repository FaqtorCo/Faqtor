/* eslint-disable  */

import React, { useState, useEffect, useRef } from 'react';
import Header from 'parts/Header';

const EnhancedEventsGallery = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeParticles, setActiveParticles] = useState([]);
  const [modalImage, setModalImage] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Intersection Observer for card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-card-id]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const particles = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.2,
        direction: Math.random() * 360,
      }));
      setActiveParticles(particles);
    };

    generateParticles();
  }, []);

  const events = [
    {
      id: 1,
      title: "The Graph Workshop",
      date: "June 19, 2023",
      location: "Collabs Coworking, Lahore",
      description: "The Graph Tech Workshop was hosted by our CTO himself where he talked about the ecosystem roles and substreams and in the tech session deployed a subgraph on the hosted service👨‍💻",
      images: [
        "/4-1.jpg",
        "/4-2.jpeg"
      ],
            twitterUrl: "https://www.linkedin.com/posts/asad-ullah-_wasnt-able-to-publish-pictures-with-video-activity-7076441100802039809-XNbp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACcqE44BF5acRtxLEpF4vj4O4oiKeutWo5I",
      attendees: 250,
      color: "#96CEB4",
    },
    {
      id: 2,
      title: "The Graph Seminar",
      date: "March 15, 2024",
      location: "Punjab University, Lahore",
      description: "Hosted The Graph Seminar, a web3 indexing solution at Punjab University today ! Where 20 lucky students from the QnA session were given cash prizes and graph t-shirts 🎉 !",
      images: [
        "/1-1.jpeg",
        "/1-2.jpeg"
      ],
    
      twitterUrl: "https://www.linkedin.com/posts/asad-ullah-_web3-blockchaintechnology-grt-activity-7029642409919598592-OAps?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACcqE44BF5acRtxLEpF4vj4O4oiKeutWo5I",
      attendees: 150,
      color: "#FF6B6B",
    },
    {
      id: 3,
      title: "Faqtor GiG X The Graph",
      date: "March 06, 2023",
      location: "Chaye Gossip, Lahore",
      description: "An interactive evening gig where data meets creativity. Where a lot of young minds joined together to master the art of creating powerful graph presentations that transform complex information into compelling visual stories.",
      images: [
        "/2-1.jpeg",
        "/2-2.jpeg"
      ],
            twitterUrl: "https://www.linkedin.com/posts/asad-ullah-_so-we-organised-an-amazing-event-on-march-activity-7038484515106791424-2d3L?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACcqE44BF5acRtxLEpF4vj4O4oiKeutWo5I",
      attendees: 200,
      color: "#4ECDC4",
    },
    {
      id: 4,
      title: "The GraphVersary",
      date: "December 18, 2023",
      location: "Islamabad, Pakistan",
      description: "A little sneak peek into The GraphVersary 2023 which was organised in celebration of Graph's 3rd birthday with a short presentation related to substreams and the new data services, was a great experience!",
      images: [
        "/3-1.jpeg",
        "/3-2.jpeg"
      ],
            twitterUrl: "https://www.linkedin.com/posts/asad-ullah-_a-little-sneak-peek-into-the-graphversary-activity-7142418766071586816-pq1S?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACcqE44BF5acRtxLEpF4vj4O4oiKeutWo5I",
      attendees: 300,
      color: "#45B7D1",
    },
  
    {
      id: 5,
      title: "Faqtor X The Graph",
      date: "March 28, 2024",
      location: "Islamabad, Pakistan",
      description: "This event focused mainly on fun activity with the introduction of the Graph's advocate program and brining new minds together to grow the ecosystem and giving a chance to developers to score grants for their new ideas!",
      images: [
        "/5-1.jpg",
        "/5-2.png"
      ],
            twitterUrl: "",
      attendees: 500,
      color: "#FECA57",
    },
   
  ];

  // Advanced Background Components
  const StaticParticles = () => (
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
            animationDelay: `${particle.id * 0.1}s`
          }}
        />
      ))}
    </div>
  );

  const NetworkGrid = () => (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(218, 247, 166, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(218, 247, 166, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        backgroundPosition: `${mousePosition.x * 0.01}px ${mousePosition.y * 0.01}px`
      }}></div>
    </div>
  );

  const FloatingOrbs = () => (
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
            animationDelay: `${i * 1.5}s`
          }}
        />
      ))}
    </div>
  );

  const DataStreams = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="w-full h-full" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DAF7A6" stopOpacity="0" />
            <stop offset="50%" stopColor="#DAF7A6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#DAF7A6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {[...Array(8)].map((_, i) => (
          <g key={i}>
            <path
              d={`M0,${100 + i * 80} Q${200 + i * 50},${50 + i * 90} ${400 + i * 100},${120 + i * 70} T${800 + i * 50},${80 + i * 85}`}
              stroke="url(#dataFlow)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,20"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;30"
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden" ref={containerRef}>
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#DAF7A6]/5 to-transparent"></div>
        <StaticParticles />
        <NetworkGrid />
        <FloatingOrbs />
        <DataStreams />
      </div>

      {/* Interactive cursor glow */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(218, 247, 166, 0.03) 0%, transparent 70%)',
        }}
      />

<Header/>
      {/* Hero Section with Enhanced Animations */}
      <section className="relative min-h-screen flex items-start justify-center text-white overflow-hidden pt-8">
      <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute w-96 h-96 bg-[#DAF7A6] rounded-full filter blur-3xl"
            style={{
              top: '25%',
              left: '25%',
              animation: 'heroOrb1 12s ease-in-out infinite',
            }}
          ></div>
          <div 
            className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"
            style={{
              bottom: '25%',
              right: '25%',
              animation: 'heroOrb2 15s ease-in-out infinite',
              animationDelay: '2s'
            }}
          ></div>
          <div 
            className="absolute w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"
            style={{
              top: '60%',
              left: '60%',
              animation: 'heroOrb3 10s ease-in-out infinite',
              animationDelay: '4s'
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div 
            className="mb-8 inline-block"
            style={{
              opacity: Math.max(0, 1 - scrollY / 300),
              transform: `translateY(${scrollY * 0.3}px) scale(${Math.max(0.8, 1 - scrollY / 1000)})`
            }}
          >
            <span className=" text-4xl relative text-[#DAF7A6] font-semibold tracking-wider uppercase">
              Empowering the Youth
              <div className="absolute -inset-2 bg-[#DAF7A6]/10 blur-xl rounded-full"></div>
            </span>
          </div>
          
          <h1 
            className="text-2xl md:text-2xl font-bold mb-8 leading-tight"
            style={{
              opacity: Math.max(0, 1 - scrollY / 300),
              transform: `translateY(${scrollY * 0.2}px)`
            }}
          >
            {/* <span className="inline-block animate-text-reveal" style={{ animationDelay: '0.2s' }}>
              Transforming Ideas Into
            </span>
            <span className="block bg-gradient-to-r from-[#DAF7A6] to-[#a8d96f] bg-clip-text text-transparent animate-text-reveal" style={{ animationDelay: '0.5s' }}>
              Extraordinary Events
            </span> */}
          </h1>

          <p 
            className="text-2xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 animate-text-reveal"
            style={{
              opacity: Math.max(0, 1 - scrollY / 400),
              transform: `translateY(${scrollY * 0.15}px)`,
              animationDelay: '0.8s'
            }}
          >
            We curate world-class educational experiences that bring together innovators, creators, and visionaries. From intimate workshops to large-scale conferences, each event is meticulously designed to inspire growth, foster collaboration, and drive meaningful change in the tech community.
          </p>

          <div 
className="flex flex-wrap justify-center gap-3 text-sm animate-stats-reveal"
            style={{
              opacity: Math.max(0, 1 - scrollY / 400),
              transform: `translateY(${scrollY * 0.1}px)`,
              animationDelay: '1.1s'
            }}
          >
            {[
              { value: events.length, label: 'Events Hosted', delay: '0s' },
              { value: events.reduce((sum, e) => sum + e.attendees, 0), label: 'Attendees', delay: '0.2s' },
              { value: 3, label: 'Cities', delay: '0.4s' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#DAF7A6]/50 transition-all duration-300"
                style={{ animationDelay: stat.delay }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <span className="relative text-3xl font-bold text-[#DAF7A6] counter-animation">
                  {stat.value}+
                </span>
                <span className="relative text-gray-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#DAF7A6]/20 rounded-full blur-lg animate-pulse"></div>
            <svg className="relative w-6 h-6 text-[#DAF7A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Enhanced Events Sections */}
      {events.map((event, index) => {
        const isEven = index % 2 === 0;
        const isVisible = visibleCards.includes(event.id);
        
        return (
          <section 
            key={event.id} 
            data-card-id={event.id}
            className="relative py-24 md:py-32 overflow-hidden"
            style={{
              backgroundColor: index % 3 === 0 ? '#0a0a0a' : index % 3 === 1 ? '#000000' : '#0f0f0f'
            }}
          >
            {/* Section background effects */}
            <div className="absolute inset-0">
              <div 
                className="absolute w-full h-full opacity-5"
                style={{
                  background: `radial-gradient(circle at ${isEven ? '20%' : '80%'} 50%, ${event.color}40 0%, transparent 50%)`
                }}
              ></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Enhanced Image Section */}
                <div 
                  className={`relative ${isEven ? 'md:order-1' : 'md:order-2'} ${
                    isVisible ? 'animate-slide-in-left' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
<div className="relative">
                        {/* Main image with advanced hover effects */}
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      
                      <div className="grid grid-cols-2 gap-2">
  {event.images.map((image, imgIndex) => (
    <div key={imgIndex} className="relative group/img overflow-hidden rounded-lg">
  {/* Overlay gradient on individual image hover */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
  
  <img 
    src={image} 
    alt={`${event.title} - Image ${imgIndex + 1}`}
    className="w-full h-[200px] md:h-[250px] object-cover transform transition-all duration-700 group-hover/img:scale-110 group-hover/img:brightness-110 cursor-pointer"
    onClick={() => {
      setModalImage(image);
      setIsModalOpen(true);
    }}
  />
    </div>
  ))}
</div>
                
                 
                    </div>

                    {/* Enhanced decorative elements */}
                    <div 
                      className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20 blur-2xl animate-pulse-slow"
                      style={{ backgroundColor: event.color }}
                    ></div>
                    <div 
                      className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-20 blur-2xl animate-pulse-slow"
                      style={{ 
                        backgroundColor: event.color,
                        animationDelay: '1s'
                      }}
                    ></div>

                    {/* Enhanced floating badge */}
                    <div className="absolute top-6 left-6 group/badge">
                      <div className="relative px-4 py-2 bg-black/80 backdrop-blur-sm shadow-xl rounded-full border border-[#DAF7A6]/30 hover:border-[#DAF7A6] transition-all duration-300">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] rounded-full blur opacity-0 group-hover/badge:opacity-50 transition-opacity duration-300"></div>
                        <div className="relative flex items-center gap-2">
                          <div 
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: event.color }}
                          ></div>
                          <span className="text-sm font-semibold text-white">{event.attendees}+ Attendees</span>
                        </div>
                      </div>
                    </div>

          

                  </div>
                </div>

                {/* Enhanced Content Section */}
                <div 
                  className={`${isEven ? 'md:order-2' : 'md:order-1'} ${
                    isVisible ? 'animate-slide-in-right' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 0.2 + 0.3}s`
                  }}
                >
                  <div className="space-y-6">
                    {/* Enhanced meta info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      {[
                        { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', text: event.date },
                        { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', text: event.location }
                      ].map((item, i) => (
                        <div key={i} className="group flex items-center gap-2 px-3 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-[#DAF7A6]/50 transition-all duration-300">
                          <div className="relative">
                            <svg className="w-4 h-4 text-[#DAF7A6] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                            </svg>
                            <div className="absolute -inset-1 bg-[#DAF7A6]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <span className="group-hover:text-white transition-colors duration-300">{item.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced title with animation */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight relative group">
                      <span className="relative z-10">{event.title}</span>
                      <div 
                        className="absolute -inset-2 opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity duration-500"
                        style={{ backgroundColor: event.color }}
                      ></div>
                    </h2>

                    {/* Enhanced description */}
                    <div className="relative">
                      <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                        {event.description}
                      </p>
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#DAF7A6] to-transparent opacity-30"></div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <div className="pt-4">
                      <a
                        href={event.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredButton(event.id)}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-[#DAF7A6] hover:to-[#C8E6A0] text-white hover:text-black rounded-full font-semibold transition-all duration-500 transform hover:scale-105 overflow-hidden"
                      >
                        {/* Button background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Animated border */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#DAF7A6] via-[#C8E6A0] to-[#DAF7A6] rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-500 animate-spin-slow"></div>
                        
                        {/* Button content */}
                        <span className="relative z-10 group-hover:font-bold transition-all duration-300">Visit Event Details</span>
                        <svg 
                          className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        
                        {/* Ripple effect */}
                        {hoveredButton === event.id && (
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced section divider */}
            {index < events.length - 1 && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-px h-12 bg-gradient-to-b from-[#DAF7A6] to-transparent opacity-50 animate-pulse"></div>
                <div className="w-2 h-2 bg-[#DAF7A6] rounded-full -mt-1 -ml-0.5 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            )}
          </section>
        );
      })}

      {/* Enhanced Footer CTA */}
      <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DAF7A6] rounded-full filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-text-reveal">
          Partner with Us to Shape the Future!
          </h2>
          <p className="text-xl text-gray-300 mb-10 animate-text-reveal" style={{ animationDelay: '0.3s' }}>
          We’re inviting organizations, communities, and innovators to collaborate on our next big event, from workshops to bootcamps and conferences. Schedule a meeting with us to discuss further.          </p>
          
          <button
  onClick={() => window.open('https://cal.com/faqtor', '_blank')}
  className="group relative px-10 py-5 bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] hover:from-[#C8E6A0] hover:to-[#DAF7A6] text-black rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 overflow-hidden animate-text-reveal"
  style={{ animationDelay: '0.6s' }}
>
  {/* Enhanced button effects */}
  <div className="absolute -inset-2 bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] rounded-full blur opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-spin-slow"></div>
  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <span className="relative z-10">Open Calendar</span>

  {/* Particle burst effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full animate-particle-burst"
        style={{
          left: '50%',
          top: '50%',
          animationDelay: `${i * 0.1}s`,
          transform: `rotate(${i * 45}deg)`
        }}
      />
    ))}
  </div>
</button>

          {/* Image Modal */}

        </div>
      </section>


      {isModalOpen && (
  <div 
  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99999] flex items-center justify-center p-4"
        onClick={() => setIsModalOpen(false)}
  >
    <div className="relative max-w-4xl max-h-full">
      <img 
        src={modalImage} 
        alt="Event Image" 
        className="max-w-full max-h-full object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      <button 
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
      >
        ×
      </button>
    </div>
  </div>
)}


      {/* Enhanced CSS Animations */}
      <style jsx>{`
      
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.6; }
        }
        
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        
        @keyframes heroOrb1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.9); }
        }
        
        @keyframes heroOrb2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-40px, 20px) scale(0.8); }
          66% { transform: translate(20px, -30px) scale(1.2); }
        }
        
        @keyframes heroOrb3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(25px, -25px) scale(1.1); }
        }
        
        @keyframes text-reveal {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0px) scale(1); 
          }
        }
        
        @keyframes stats-reveal {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0px); 
          }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
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
        
        @keyframes float-particle {
          0% { 
            opacity: 0; 
            transform: translateY(0px) scale(0); 
          }
          50% { 
            opacity: 1; 
            transform: translateY(-30px) scale(1); 
          }
          100% { 
            opacity: 0; 
            transform: translateY(-60px) scale(0); 
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.3; 
            transform: scale(1.1); 
          }
        }
        
        @keyframes dash-flow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 20; }
        }
        
        @keyframes particle-burst {
          0% { 
            opacity: 0; 
            transform: rotate(var(--rotation, 0deg)) translateX(0px) scale(0); 
          }
          50% { 
            opacity: 1; 
            transform: rotate(var(--rotation, 0deg)) translateX(20px) scale(1); 
          }
          100% { 
            opacity: 0; 
            transform: rotate(var(--rotation, 0deg)) translateX(40px) scale(0); 
          }
        }
        
        @keyframes counter-animation {
          from { transform: scale(0.8); }
          to { transform: scale(1); }
        }
        
        .animate-text-reveal { 
          animation: text-reveal 0.8s ease-out forwards; 
          opacity: 0; 
        }
        
        .animate-stats-reveal { 
          animation: stats-reveal 1s ease-out forwards; 
          opacity: 0; 
        }
        
        .animate-bounce-gentle { 
          animation: bounce-gentle 2s ease-in-out infinite; 
        }
        
        .animate-slide-in-left { 
          animation: slide-in-left 0.8s ease-out forwards; 
        }
        
        .animate-slide-in-right { 
          animation: slide-in-right 0.8s ease-out forwards; 
        }
        
        .animate-float-particle { 
          animation: float-particle 3s ease-out infinite; 
        }
        
        .animate-pulse-slow { 
          animation: pulse-slow 4s ease-in-out infinite; 
        }
        
        .animate-dash-flow { 
          animation: dash-flow 2s linear infinite; 
        }
        
        .animate-particle-burst { 
          animation: particle-burst 1s ease-out; 
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .counter-animation {
          animation: counter-animation 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: orbFloat 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EnhancedEventsGallery;