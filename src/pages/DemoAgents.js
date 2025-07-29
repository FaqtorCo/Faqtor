/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Image, Zap, Brain, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthComponent from 'parts/login'; 

const FuturisticServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [typingText, setTypingText] = useState('');
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: "AI Calling Agent",
      description: "Experience our AI agent making real phone calls with human-like conversation.",
      icon: Phone,
      features: ["Live Call Simulation", "Voice Quality Test"],
      animationType: "flowing",
      demoLink: "/demo-agents/ai-calling"
    }, 
    
    {
      id: 2,
      title: "Marketing Agent",
      description: "Experience our marketing agent guiding you how to grow your band",
      icon: Image,
      features: ["Increase Reach", "More Impressions and Engagement, Elevated ROI"],
      animationType: "marketing",
      demoLink: "/demo-agents/marketing-agent"
    },

    {
      id: 3,
      title: "AI Image Generation",
      description: "Create custom images instantly with our AI in seconds.",
      icon: Image,
      features: ["Text-to-Image Creator", "Style Customization"],
      animationType: "illuminating",
      demoLink: "/demo/image-generation"
    }
    ,
    {
      id: 4,
      title: "Smart Chatbot",
      description: "Interact directly with our intelligent chatbot and test its understanding.",
      icon: MessageCircle,
      features: ["Live Chat Interface", "Context Testing"],
      animationType: "typing",
      demoLink: "/demo/chatbot"
    },
  ];

  const StaticParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#DAF7A6] rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `staticFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );


  // Marketing Agent Animation (funnel with leads conversion)
  const MarketingAnimation = () => (
    <div className="absolute inset-0 overflow-hidden opacity-90">
      <div className="relative w-full h-full">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 120">
          <defs>
            <linearGradient id="socialGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DAF7A6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#DAF7A6" stopOpacity="1" />
              <stop offset="100%" stopColor="#DAF7A6" stopOpacity="0.2" />
            </linearGradient>
            <radialGradient id="engagement" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#DAF7A6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#DAF7A6" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Central Brand Hub */}
          <g transform="translate(120, 60)">
            <circle r="25" fill="url(#engagement)" opacity="0.3">
              <animate attributeName="r" values="25;35;25" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle r="15" fill="#DAF7A6" opacity="0.7">
              <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="0" y="3" textAnchor="middle" fill="#000" fontSize="8" fontWeight="bold">BRAND</text>
          </g>
  
          {/* Social Media Platforms Orbiting */}
          {[
            { name: 'Facebook', angle: 0, radius: 50, color: '#1877F2', delay: '0s' },
            { name: 'Insta', angle: 72, radius: 45, color: '#E4405F', delay: '0.8s' },
            { name: 'Twitter', angle: 144, radius: 55, color: '#1DA1F2', delay: '1.6s' },
            { name: 'LinkedIn', angle: 216, radius: 48, color: '#0077B5', delay: '2.4s' },
            { name: 'Youtube', angle: 288, radius: 52, color: '#FF0000', delay: '3.2s' }
          ].map((platform, i) => (
            <g key={i} transform="translate(120, 60)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values={`${platform.angle};${platform.angle + 360}`}
                  dur="12s"
                  repeatCount="indefinite"
                  begin={platform.delay}
                />
                <circle
                  cx={platform.radius}
                  cy="0"
                  r="8"
                  fill={platform.color}
                  opacity="0.8"
                >
                  <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" begin={platform.delay} />
                </circle>
                <text
                  x={platform.radius}
                  y="3"
                  textAnchor="middle"
                  fill="white"
                  fontSize="6"
                  fontWeight="bold"
                >
                  {platform.name}
                </text>
                
                {/* Engagement Particles */}
                <circle cx={platform.radius + 15} cy="0" r="2" fill="#DAF7A6" opacity="0.6">
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin={platform.delay} />
                  <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" begin={platform.delay} />
                </circle>
              </g>
            </g>
          ))}
  
          {/* Viral Content Bursts */}
          {[...Array(6)].map((_, i) => (
            <g key={i} transform="translate(120, 60)">
              <circle r="3" fill="#DAF7A6" opacity="0">
                <animate attributeName="r" values="0;20;0" dur="4s" repeatCount="indefinite" begin={`${i * 0.7}s`} />
                <animate attributeName="opacity" values="0;0.6;0" dur="4s" repeatCount="indefinite" begin={`${i * 0.7}s`} />
              </circle>
            </g>
          ))}
  
          {/* Trending Arrows */}
          {/* {[...Array(2)].map((_, i) => (
            <g key={i}>
              <path
                d={`M${30 + i * 40},100 L${40 + i * 40},85 L${50 + i * 40},100`}
                stroke="#DAF7A6"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0;0,-10;0,0"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.7;1;0.7"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                />
              </path>
            </g>
          ))} */}
  
          {/* Analytics Lines */}
          {/* <g transform="translate(20, 20)">
            <path
              d="M0,20 Q10,10 20,15 T40,10 T60,5"
              stroke="url(#socialGlow)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4,2"
            >
              <animate attributeName="stroke-dashoffset" values="0;6" dur="1s" repeatCount="indefinite" />
            </path>
            
            {[0, 20, 40, 60].map((x, i) => (
              <circle key={i} cx={x} cy={20 - i * 3} r="2" fill="#DAF7A6">
                <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
              </circle>
            ))}
          </g>
   */}
          {/* Engagement Waves */}
          {[...Array(5)].map((_, i) => (
            <circle
              key={i}
              cx="120"
              cy="60"
              r="30"
              fill="none"
              stroke="#DAF7A6"
              strokeWidth="1"
              opacity="0.4"
            >
              <animate
                attributeName="r"
                values="30;60;30"
                dur="5s"
                repeatCount="indefinite"
                begin={`${i * 1.7}s`}
              />
              <animate
                attributeName="opacity"
                values="0.4;0;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin={`${i * 1.7}s`}
              />
            </circle>
          ))}
  
          {/* Floating Hashtags */}
          {['#VIRAL', '#TREND', '#BOOST'].map((tag, i) => (
            <text
              key={i}
              x={40 + i * 60}
              y={30 + Math.sin(i) * 10}
              fill="#DAF7A6"
              fontSize="8"
              opacity="0.6"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;0,-5;0,0"
                dur="3s"
                repeatCount="indefinite"
                begin={`${i * 1}s`}
              />
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur="3s"
                repeatCount="indefinite"
                begin={`${i * 1}s`}
              />
              {tag}
            </text>
          ))}
        </svg>
  
        {/* Dynamic Floating Metrics */}
        {/* <div className="absolute top-2 left-2">
          <div className="text-xs text-[#DAF7A6] font-mono bg-black/60 px-2 py-1 rounded-full border border-[#DAF7A6]/30">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
              <span className="animate-pulse">VIRAL</span>
            </div>
          </div>
        </div> */}
  
        {/* <div className="absolute top-2 right-2">
          <div className="text-xs text-[#C8E6A0] font-mono bg-black/60 px-2 py-1 rounded-full border border-[#C8E6A0]/30">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Reach: 2.4M</span>
            </div>
          </div>
        </div>
  
        <div className="absolute bottom-2 left-2">
          <div className="text-xs text-[#DAF7A6] font-mono bg-black/60 px-2 py-1 rounded-full border border-[#DAF7A6]/30">
            <span>Engagement: </span>
            <span className="text-green-400 font-bold animate-pulse">↗ 340%</span>
          </div>
        </div>
  
        <div className="absolute bottom-2 right-2">
          <div className="text-xs text-[#A8D3A0] font-mono bg-black/60 px-2 py-1 rounded-full border border-[#A8D3A0]/30">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce"></div>
              <span>ROI: 450%</span>
            </div>
          </div>
        </div> */}
  
        {/* Floating Social Icons */}
        <div className="absolute inset-0">
          {['💡', '🚀', '📈', '🎯', '⚡'].map((emoji, i) => (
            <div
              key={i}
              className="absolute text-lg opacity-60"
              style={{
                left: `${20 + i * 35}%`,
                top: `${30 + Math.sin(i) * 20}%`,
                animation: `socialFloat 4s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Enhanced Flowing Animation (AI Calling Agent serving 3 users simultaneously)
  const FlowingAnimation = () => (
    <div className="absolute inset-0 overflow-hidden opacity-80">
      <div className="relative w-full h-full">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 120">
          <defs>
            <linearGradient id="callFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DAF7A6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#DAF7A6" stopOpacity="1" />
              <stop offset="100%" stopColor="#DAF7A6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C8E6A0" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#C8E6A0" stopOpacity="1" />
              <stop offset="100%" stopColor="#C8E6A0" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Central AI Agent */}
          <g transform="translate(120, 60)">
            <circle r="20" fill="#DAF7A6" opacity="0.2" />
            <circle r="12" fill="#DAF7A6" opacity="0.6">
              <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle r="6" fill="#DAF7A6" opacity="1" />
            
            {/* AI Brain representation */}
            <path d="M-8,-4 Q0,-8 8,-4 Q4,0 8,4 Q0,8 -8,4 Q-4,0 -8,-4 Z" 
                  fill="none" stroke="#DAF7A6" strokeWidth="1" opacity="0.8">
              <animate attributeName="stroke-dasharray" values="0,20;10,10;0,20" dur="3s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Three Users */}
          {[
            { x: 30, y: 25, name: "User 1", delay: "0s" },
            { x: 30, y: 60, name: "User 2", delay: "0.8s" },
            { x: 30, y: 95, name: "User 3", delay: "1.6s" }
          ].map((user, i) => (
            <g key={i} transform={`translate(${user.x}, ${user.y})`}>
              {/* User Avatar */}
              <circle r="8" fill="#DAF7A6" opacity="0.3" />
              <circle r="5" fill="#DAF7A6" opacity="0.6" />
              <path d="M-3,-2 L3,-2 M-2,1 L2,1" stroke="#000" strokeWidth="1" opacity="0.8" />
              
              {/* Call Connection Line */}
              <line x1="8" y1="0" x2="82" y2={60 - user.y} 
                    stroke="url(#callFlow)" strokeWidth="2" opacity="0.6"
                    strokeDasharray="4,4">
                <animate attributeName="stroke-dashoffset" values="0;8" dur="1s" repeatCount="indefinite" begin={user.delay} />
              </line>
              
              {/* Call Status Indicator */}
              <circle cx="12" cy="-3" r="2" fill="#10B981" opacity="0">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin={user.delay} />
              </circle>
            </g>
          ))}

          {/* CRM Database */}
          <g transform="translate(210, 60)">
            <rect x="-15" y="-20" width="30" height="40" rx="4" fill="#DAF7A6" opacity="0.2" />
            <rect x="-12" y="-15" width="24" height="30" rx="2" fill="#DAF7A6" opacity="0.4" />
            
            {/* Database bars */}
            <rect x="-10" y="-12" width="20" height="3" fill="#DAF7A6" opacity="0.8" />
            <rect x="-10" y="-6" width="20" height="3" fill="#DAF7A6" opacity="0.8" />
            <rect x="-10" y="0" width="20" height="3" fill="#DAF7A6" opacity="0.8" />
            <rect x="-10" y="6" width="20" height="3" fill="#DAF7A6" opacity="0.8" />
            <rect x="-10" y="12" width="20" height="3" fill="#DAF7A6" opacity="0.8" />
            
            {/* Data flowing into CRM */}
            <line x1="-25" y1="0" x2="-15" y2="0" 
                  stroke="url(#dataFlow)" strokeWidth="3" opacity="0.8"
                  strokeDasharray="6,6">
              <animate attributeName="stroke-dashoffset" values="0;12" dur="1.5s" repeatCount="indefinite" />
            </line>
          </g>

          {/* Data Flow from AI to CRM */}
          <line x1="140" y1="60" x2="195" y2="60" 
                stroke="url(#dataFlow)" strokeWidth="2" opacity="0.6"
                strokeDasharray="8,4">
            <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite" />
          </line>

          {/* Floating Data Packets */}
          {[...Array(5)].map((_, i) => (
            <g key={i}>
              <circle cx="0" cy="0" r="2" fill="#C8E6A0" opacity="0.8">
                <animateMotion dur="4s" repeatCount="indefinite" begin={`${i * 0.8}s`}>
                  <path d="M140,60 Q170,50 195,60" />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin={`${i * 0.8}s`} />
              </circle>
            </g>
          ))}
        </svg>

        {/* Floating Service Indicators */}
        <div className="absolute top-2 left-2">
          <div className="text-xs text-[#DAF7A6] font-mono bg-black/50 px-2 py-1 rounded">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              <span>3 Active Calls</span>
            </div>
          </div>
        </div>

        <div className="absolute top-2 right-2">
          <div className="text-xs text-[#C8E6A0] font-mono bg-black/50 px-2 py-1 rounded">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
              <span>CRM Sync</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 left-2">
          <div className="text-xs text-[#DAF7A6] font-mono bg-black/50 px-2 py-1 rounded">
            <span>Response Time: </span>
            <span className="text-green-400">
              <span style={{ animation: 'countUp 2s ease-in-out infinite' }}>0.3s</span>
            </span>
          </div>
        </div>

        {/* Call Quality Indicators */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute left-8 w-2 h-1 bg-[#DAF7A6] rounded opacity-60"
            style={{
              top: `${20 + i * 30}%`,
              animation: `callQuality ${1.5 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>
    </div>
  );

  // Enhanced Typing Animation (code writing itself)
  const TypingAnimation = () => {
    const codeLines = [
      'class ChatBot {',
      '  constructor() {',
      '    this.ai = new AIEngine();',
      '  }',
      '  ',
      '  async respond(message) {',
      '    const context = this.analyze(message);',
      '    return await this.ai.generate(context);',
      '  }',
      '}'
    ];

    const [visibleLines, setVisibleLines] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (currentLine < codeLines.length) {
          const line = codeLines[currentLine];
          if (currentChar < line.length) {
            setCurrentChar(prev => prev + 1);
          } else {
            setVisibleLines(prev => [...prev, line]);
            setCurrentLine(prev => prev + 1);
            setCurrentChar(0);
          }
        } else {
          // Reset animation
          setTimeout(() => {
            setVisibleLines([]);
            setCurrentLine(0);
            setCurrentChar(0);
          }, 2000);
        }
      }, 100);

      return () => clearInterval(interval);
    }, [currentLine, currentChar]);

    return (
      <div className="absolute inset-2 overflow-hidden opacity-80">
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-3 font-mono text-xs h-full">
          {/* Terminal Header */}
          <div className="flex items-center mb-2 pb-2 border-b border-[#DAF7A6]/20">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <span className="text-[#DAF7A6]/60 ml-3 text-xs">ChatBot.js</span>
          </div>

          {/* Code Content */}
          <div className="text-[#DAF7A6] leading-relaxed">
            {visibleLines.map((line, i) => (
              <div key={i} className="whitespace-pre">
                <span className="text-[#DAF7A6]/40 mr-2">{i + 1}</span>
                {line}
              </div>
            ))}
            {currentLine < codeLines.length && (
              <div className="whitespace-pre">
                <span className="text-[#DAF7A6]/40 mr-2">{visibleLines.length + 1}</span>
                {codeLines[currentLine].substring(0, currentChar)}
                <span className="animate-pulse bg-[#DAF7A6] text-black">|</span>
              </div>
            )}
          </div>

          {/* Floating Code Elements */}
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 border border-[#DAF7A6]/30 rounded rotate-45 animate-spin-slow"></div>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-4 bg-[#DAF7A6]/40 rounded"
                  style={{
                    animation: `codeBar 1.5s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Illuminating Animation (borders lighting up sequentially)
  const IlluminatingAnimation = () => (
    <div className="absolute inset-0 overflow-hidden opacity-70">
      <div className="grid grid-cols-3 gap-2 h-full p-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="relative">
            {/* Main Card */}
            <div
              className="w-full h-full rounded-lg border-2 border-gray-600 bg-gray-800/20 relative overflow-hidden"
              style={{
                animation: `illuminate 4s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`
              }}
            >
              {/* Inner Content */}
              <div className="absolute inset-2 border border-gray-500/30 rounded">
                <div className="w-full h-1/3 bg-[#DAF7A6]/10 rounded-t"></div>
                <div className="p-2 space-y-1">
                  <div className="w-3/4 h-1 bg-[#DAF7A6]/20 rounded"></div>
                  <div className="w-1/2 h-1 bg-[#DAF7A6]/20 rounded"></div>
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-lg opacity-0"
                style={{
                  boxShadow: '0 0 20px #DAF7A6',
                  animation: `glowPulse 4s ease-in-out infinite`,
                  animationDelay: `${i * 0.8}s`
                }}
              />

              {/* Corner Indicators */}
              <div
                className="absolute top-1 right-1 w-2 h-2 bg-[#DAF7A6] rounded-full opacity-0"
                style={{
                  animation: `cornerBlink 4s ease-in-out infinite`,
                  animationDelay: `${i * 0.8}s`
                }}
              />
            </div>

            {/* Image Generation Elements */}
            {i === 1 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <Image className="w-6 h-6 text-[#DAF7A6] animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#DAF7A6] rounded-full animate-ping"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating Generation Elements */}
      <div className="absolute top-4 left-4">
        <div className="flex space-x-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-6 bg-[#DAF7A6]/40 rounded"
              style={{
                animation: `generationBar 2s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-2 left-2 right-2">
        <div className="h-1 bg-gray-600/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#DAF7A6] rounded-full"
            style={{
              animation: `progressBar 6s ease-in-out infinite`
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DAF7A6]/5 to-transparent"></div>
        <StaticParticles />
      </div>

      {/* Simple Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(218, 247, 166, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(218, 247, 166, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <Link 
            to="/"
            className="group relative flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#DAF7A6]/20 hover:border-[#DAF7A6]/30"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            
            {/* Button Content */}
            <div className="relative flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-2px] transition-transform duration-300" />
              <span className="text-sm font-medium">Back</span>
            </div>
            
            {/* Corner Accent */}
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#DAF7A6] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          </Link>
        </div>

        <div className="flex justify-end">
  <AuthComponent />
</div>

        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-4xl font-bold bg-gradient-to-r from-white via-[#DAF7A6] to-[#C8E6A0] bg-clip-text text-transparent mb-6 leading-tight">
            Future-Ready
            <br />
            <span className="bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h1>
          
          <p className="text-l text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your business with cutting-edge AI agents that work 24/7, 
            learn continuously, and deliver exceptional results.
          </p>
        </div>

        {/* Services Cards - Professional Grid Layout */}
        <div className="relative max-w-7xl mx-auto mb-8" style={{ minHeight: '600px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredCard === service.id;
              const isSelected = selectedCard === service.id;
              
              return (
                <div
                  key={service.id}
                  className={`relative transition-all duration-700 cursor-pointer ${
                    isSelected 
                      ? 'scale-110 z-50' 
                      : isHovered 
                        ? 'scale-105 z-30' 
                        : 'scale-100 z-10 hover:scale-105'
                  }`}
                  style={{
                    width: '100%',
                    maxWidth: '380px',
                    height: '500px',
                    margin: '0 auto',
                    animation: `slideUpFade 0.8s ease-out forwards`,
                    animationDelay: `${index * 200}ms`,
                    opacity: 0,
                    transform: 'translateY(30px)'
                  }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setSelectedCard(selectedCard === service.id ? null : service.id)}
                >
                  {/* Enhanced Card Glow Effect */}
                  <div className={`absolute -inset-3 bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] rounded-xl blur-xl transition-all duration-700 ${
                    isSelected ? 'opacity-80 scale-110' : isHovered ? 'opacity-50' : 'opacity-0'
                  }`}></div>
                  
                  {/* Rotating Border Effect */}
                  <div className={`absolute -inset-1 rounded-xl transition-all duration-500 ${
                    isSelected || isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#DAF7A6] via-[#C8E6A0] to-[#DAF7A6] animate-spin-slow opacity-40"></div>
                  </div>
                  
                  {/* Main Card */}
                  <div className={`relative backdrop-blur-sm border rounded-xl p-6 h-full transition-all duration-700 ${
                    isSelected 
                      ? 'shadow-2xl shadow-[#DAF7A6]/60 border-[#DAF7A6] bg-gray-800/95' 
                      : isHovered
                        ? 'shadow-xl shadow-[#DAF7A6]/30 border-[#DAF7A6]/50 bg-gray-900/90'
                        : 'border-gray-700/50 bg-gray-900/80 hover:shadow-lg hover:shadow-[#DAF7A6]/20'
                  }`}>
                    
                    {/* Selection Indicator */}
                    {isSelected && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#DAF7A6] rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                      </div>
                    )}

                    {/* Floating Elements Animation */}
                    <div className="absolute top-3 right-3 opacity-30">
                      <div 
                        className="w-2 h-2 bg-[#DAF7A6] rounded-full"
                        style={{
                          animation: `orbit 8s linear infinite`,
                          animationDelay: `${index * 0.5}s`
                        }}
                      ></div>
                    </div>
                    <div className="absolute top-6 right-8 opacity-20">
                      <div 
                        className="w-1 h-1 bg-[#C8E6A0] rounded-full"
                        style={{
                          animation: `orbit 12s linear infinite reverse`,
                          animationDelay: `${index * 0.8}s`
                        }}
                      ></div>
                    </div>

                    {/* Animation Section */}
                    <div className={`mb-6 relative overflow-hidden rounded-lg transition-all duration-500 ${
                      isSelected ? 'h-40 bg-gray-800/50 shadow-inner' : 'h-32 bg-gray-800/30'
                    }`}>
                      {service.animationType === 'flowing' && <FlowingAnimation />}
                      {service.animationType === 'typing' && <TypingAnimation />}
                      {service.animationType === 'illuminating' && <IlluminatingAnimation />}
                      {service.animationType === 'marketing' && <MarketingAnimation />}

                      
                      {/* Animation Overlay Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent transition-opacity duration-500 ${
                        isSelected ? 'opacity-0' : 'opacity-60'
                      }`}></div>
                    </div>

                    {/* Icon Section with Enhanced Animation */}
                    <div className="mb-4 relative">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] transition-all duration-500 ${
                        isSelected 
                          ? 'scale-125 shadow-lg shadow-[#DAF7A6]/50 rotate-3' 
                          : isHovered
                            ? 'scale-110 shadow-md shadow-[#DAF7A6]/30'
                            : 'hover:scale-105'
                      }`}>
                        <Icon className={`text-black transition-all duration-300 ${
                          isSelected ? 'w-8 h-8' : 'w-6 h-6'
                        }`} />
                      </div>
                      
                      {/* Icon Glow Effect */}
                      {(isSelected || isHovered) && (
                        <div className="absolute inset-0 bg-[#DAF7A6]/20 rounded-xl blur-md animate-pulse"></div>
                      )}
                    </div>

                    {/* Content with Enhanced Transitions */}
                    <div className="space-y-3">
                      <h3 className={`font-bold transition-all duration-500 ${
                        isSelected 
                          ? 'text-[#DAF7A6] text-2xl' 
                          : isHovered
                            ? 'text-[#DAF7A6] text-xl'
                            : 'text-white text-lg hover:text-[#DAF7A6]'
                      }`}>
                        {service.title}
                      </h3>
                      
                      <p className={`leading-relaxed transition-all duration-500 ${
                        isSelected 
                          ? 'text-gray-200 text-base' 
                          : isHovered
                            ? 'text-gray-300 text-sm'
                            : 'text-gray-400 text-sm'
                      }`}>
                        {service.description}
                      </p>

                      {/* Features with Enhanced Animation */}
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div 
                            key={idx} 
                            className={`flex items-center gap-2 transition-all duration-300 ${
                              isSelected ? 'transform translate-x-1' : ''
                            }`}
                            style={{
                              transitionDelay: isSelected ? `${idx * 100}ms` : '0ms'
                            }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] transition-all duration-300 ${
                              isSelected ? 'scale-150 shadow-sm shadow-[#DAF7A6]' : ''
                            }`}></div>
                            <span className={`transition-colors duration-300 ${
                              isSelected ? 'text-gray-200 text-sm' : isHovered ? 'text-gray-300 text-xs' : 'text-gray-400 text-xs'
                            }`}>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button with Enhanced Effects */}
                      <div className="pt-4">
                        <Link 
                          to={service.demoLink}
                          className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-500 ${
                            isSelected 
                              ? 'bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] text-black scale-105 shadow-lg shadow-[#DAF7A6]/40 text-base' 
                              : 'bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] text-black hover:scale-105 hover:shadow-lg hover:shadow-[#DAF7A6]/20 text-sm'
                          }`}
                        >
                          <span>Try Demo Now</span>
                          <ArrowRight className={`transition-transform duration-300 ${
                            isSelected ? 'w-5 h-5 translate-x-2' : 'w-4 h-4 hover:translate-x-1'
                          }`} />
                        </Link>
                      </div>
                    </div>

                    {/* Enhanced Corner Accent */}
                    <div className={`absolute top-4 right-4 bg-[#DAF7A6] rounded-full transition-all duration-500 ${
                      isSelected 
                        ? 'w-3 h-3 opacity-100 scale-150 shadow-lg shadow-[#DAF7A6]/50' 
                        : isHovered
                          ? 'w-2 h-2 opacity-100 scale-125'
                          : 'w-2 h-2 opacity-40 hover:opacity-100'
                    }`}></div>

                    {/* Hover/Selection Particle Effect */}
                    {(isSelected || isHovered) && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(isSelected ? 10 : 6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-[#DAF7A6] rounded-full opacity-60"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              top: `${20 + Math.random() * 60}%`,
                              animation: `particleFloat 2s ease-out infinite`,
                              animationDelay: `${i * 0.3}s`
                            }}
                          />
                        ))}
                      </div>
                    )}

                  
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Connection Lines Between Cards */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1200 600">
              {/* Animated Network Lines */}
              <defs>
                <linearGradient id="networkGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DAF7A6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#DAF7A6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#DAF7A6" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Data Flow Lines */}
              <line x1="400" y1="250" x2="800" y2="250" 
                    stroke="url(#networkGlow)" strokeWidth="2" opacity="0.4"
                    strokeDasharray="10,5">
                <animate attributeName="stroke-dashoffset" values="0;15" dur="2s" repeatCount="indefinite" />
              </line>
              
              <line x1="200" y1="400" x2="600" y2="250" 
                    stroke="url(#networkGlow)" strokeWidth="1.5" opacity="0.3"
                    strokeDasharray="8,4">
                <animate attributeName="stroke-dashoffset" values="0;12" dur="2.5s" repeatCount="indefinite" />
              </line>
              
              <line x1="600" y1="250" x2="1000" y2="400" 
                    stroke="url(#networkGlow)" strokeWidth="1.5" opacity="0.3"
                    strokeDasharray="8,4">
                <animate attributeName="stroke-dashoffset" values="0;12" dur="2.8s" repeatCount="indefinite" />
              </line>
              
              {/* Floating Data Nodes */}
              {[...Array(6)].map((_, i) => (
                <circle key={i} r="3" fill="#DAF7A6" opacity="0.6">
                  <animateMotion dur={`${4 + i}s`} repeatCount="indefinite">
                    <path d={`M${200 + i * 150},${300 + Math.sin(i) * 100} Q${400 + i * 100},${200} ${600 + i * 150},${350 + Math.cos(i) * 80}`} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.8;0" dur={`${4 + i}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </svg>
          </div>
        </div>

        {/* Technology Stack Indicator */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-xl bg-gray-900/50 border border-[#DAF7A6]/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#DAF7A6] rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Real-time Processing</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#C8E6A0] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-sm text-gray-300">Cloud Integration</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#A8D3A0] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-sm text-gray-300">24/7 Availability</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#DAF7A6]/10 border border-[#DAF7A6]/20">
            <Brain className="w-5 h-5 text-[#DAF7A6]" />
            <span className="text-white font-medium text-sm">Want to see these demos for your business?</span>
            <Link 
              to="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#DAF7A6] to-[#C8E6A0] text-black font-medium hover:scale-105 transition-transform duration-200 text-sm"
            >
              <span>Schedule Demo Call</span>
              <Zap className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes staticFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(-8px); opacity: 0.4; }
        }
        
        @keyframes dataFlow {
          0% { 
            transform: translateX(-100px);
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(100px);
            opacity: 0;
          }
        }
        
        @keyframes illuminate {
          0%, 80%, 100% { 
            border-color: rgba(156, 163, 175, 0.5);
            box-shadow: none;
          }
          10%, 70% { 
            border-color: #DAF7A6;
            box-shadow: 0 0 20px rgba(218, 247, 166, 0.4);
          }
        }
        
        @keyframes glowPulse {
          0%, 80%, 100% { 
            opacity: 0;
          }
          10%, 70% { 
            opacity: 0.6;
          }
        }
        
        @keyframes cornerBlink {
          0%, 80%, 100% { 
            opacity: 0;
          }
          10%, 70% { 
            opacity: 1;
          }
        }
        
        @keyframes codeBar {
          0%, 100% { 
            height: 1rem;
            opacity: 0.4;
          }
          50% { 
            height: 1.5rem;
            opacity: 1;
          }
        }
        
        @keyframes generationBar {
          0%, 100% { 
            height: 1.5rem;
            opacity: 0.3;
          }
          50% { 
            height: 2rem;
            opacity: 0.9;
          }
        }
        
        @keyframes progressBar {
          0% { 
            width: 0%;
          }
          50% { 
            width: 100%;
          }
          100% { 
            width: 0%;
          }
        }
        
        @keyframes callQuality {
          0%, 100% { 
            height: 0.25rem;
            opacity: 0.4;
          }
          50% { 
            height: 0.75rem;
            opacity: 1;
          }
        }
        
        @keyframes orbit {
          0% { 
            transform: translateX(0px) translateY(0px);
          }
          25% { 
            transform: translateX(8px) translateY(-4px);
          }
          50% { 
            transform: translateX(4px) translateY(-8px);
          }
          75% { 
            transform: translateX(-4px) translateY(-4px);
          }
          100% { 
            transform: translateX(0px) translateY(0px);
          }
        }
        
        @keyframes particleFloat {
          0% { 
            opacity: 0;
            transform: translateY(0px) scale(0.5);
          }
          50% { 
            opacity: 1;
            transform: translateY(-20px) scale(1);
          }
          100% { 
            opacity: 0;
            transform: translateY(-40px) scale(0.5);
          }
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes socialFloat {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg);
    opacity: 0.6;
  }
  50% { 
    transform: translateY(-15px) rotate(180deg);
    opacity: 1;
  }
}
      `}</style>
    </div>
  );
};

export default FuturisticServices;