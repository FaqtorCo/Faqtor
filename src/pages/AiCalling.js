/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Phone, Zap, Bot, Radio, Loader2, CheckCircle, AlertCircle, PhoneCall, Signal, Headphones, Mic, Volume2, Activity, Lock, ArrowLeft, X } from 'lucide-react';

const CallingAgentDemo = ({ onBack }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [callStatus, setCallStatus] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [animatedElements, setAnimatedElements] = useState([]);
  const [activeConnections, setActiveConnections] = useState([]);
  const [canUseDemo, setCanUseDemo] = useState(true);
  const [hasUsedDemo, setHasUsedDemo] = useState(false);
  const [checkingEligibility, setCheckingEligibility] = useState(true);
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  // const API_BASE_URL = 'http://localhost:5001';
  const API_BASE_URL = 'https://faqtor.onrender.com';

  const ENDPOINTS = {
    CHECK_ELIGIBILITY: '/api/calling-agent/check-eligibility',
    INITIATE_CALL: '/api/calling-agent/initiate'
  };

  // Create blinking stars background
  useEffect(() => {
    const stars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      twinkleDelay: Math.random() * 5,
      brightness: Math.random() * 0.8 + 0.2,
    }));
    setAnimatedElements(stars);

    // Create active connection points
    const connections = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: 20 + (i * 12) + Math.random() * 10,
      y: 20 + Math.random() * 60,
      delay: i * 0.8,
    }));
    setActiveConnections(connections);
  }, []);

  // Check if user can use the demo
  useEffect(() => {
    checkDemoEligibility();
  }, []);

  const checkDemoEligibility = async () => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setCallStatus('Please sign in to use the calling agent demo.');
        setCanUseDemo(false);
        setCheckingEligibility(false);
        return;
      }

      const url = `${API_BASE_URL}${ENDPOINTS.CHECK_ELIGIBILITY}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (response.ok) {
        setCanUseDemo(data.canUse);
        setHasUsedDemo(data.hasUsedDemo);
        
        if (!data.canUse) {
          setCallStatus('You have already used your free calling agent demo. Each account gets one demo call.');
        }
      } else {
        setCallStatus('Unable to verify demo eligibility. Please try again.');
        setCanUseDemo(false);
      }
    } catch (error) {
      setCallStatus('Error checking demo eligibility. Please try again.');
      setCanUseDemo(false);
    } finally {
      setCheckingEligibility(false);
    }
  };

  const formatPhoneNumber = (value) => {
    // Keep the + and digits only
    const cleaned = value.replace(/[^\d+]/g, '');
    
    // If it starts with +, keep it, otherwise don't format
    if (cleaned.startsWith('+')) {
      return cleaned;
    } else if (cleaned.length <= 3) {
      return cleaned;
    } else if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[^\d]/g, '');
    return cleaned.length >= 10; // Allow international numbers (10+ digits)
  };

  const handleStartCall = async () => {
    if (!canUseDemo) {
      setCallStatus('Demo limit reached. You can only use this demo once per account.');
      return;
    }

    if (!validatePhone(phoneNumber)) {
      setCallStatus('Please enter a valid 10-digit phone number');
      return;
    }

    setIsLoading(true);
    setCallStatus('Initiating AI call...');

    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        throw new Error('Authentication required');
      }

      const url = `${API_BASE_URL}${ENDPOINTS.INITIATE_CALL}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setCallStatus('AI agent is calling your number...');
        setShowSuccess(true);
        setCanUseDemo(false); // Disable further use
        setHasUsedDemo(true);
        
        setTimeout(() => {
          setCallStatus('Call initiated successfully! Please answer your phone. Your demo quota has been used.');
        }, 2000);

        // Show calendar modal after 5 seconds
        setTimeout(() => {
          setShowCalendarModal(true);
        }, 5000);
      } else {
        setCallStatus(data.message || 'Failed to initiate call.');
        // If response indicates demo was used, update state
        if (response.status === 403) {
          setCanUseDemo(false);
          setHasUsedDemo(true);
        }
      }
    } catch (error) {
      setCallStatus('Failed to initiate call. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Blinking Stars Background
  const BlinkingStars = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {animatedElements.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-[#cbe9a1]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.brightness,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${star.twinkleDelay}s`,
          }}
        />
      ))}
    </div>
  );

  // Advanced Calling Network Animation
  const CallNetworkAnimation = () => (
    <div className="absolute inset-0 overflow-hidden opacity-90">
      <div className="relative w-full h-full">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#cbe9a1" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#cbe9a1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#cbe9a1" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="callWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbe9a1" stopOpacity="0" />
              <stop offset="50%" stopColor="#cbe9a1" stopOpacity="1" />
              <stop offset="100%" stopColor="#cbe9a1" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Central AI Agent Hub */}
          <g transform="translate(400, 200)">
            <circle r="40" fill="url(#centerGlow)" />
            <circle r="25" fill="#cbe9a1" opacity="0.3">
              <animate attributeName="r" values="25;35;25" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle r="15" fill="#cbe9a1" opacity="0.6">
              <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle r="8" fill="#cbe9a1" />
            
            {/* AI Brain Neural Network */}
            <g opacity="0.8">
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <g key={i} transform={`rotate(${angle})`}>
                  <line x1="0" y1="0" x2="12" y2="0" stroke="#cbe9a1" strokeWidth="1">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                  </line>
                  <circle cx="12" cy="0" r="2" fill="#cbe9a1">
                    <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                  </circle>
                </g>
              ))}
            </g>
          </g>

          {/* Active Phone Connections */}
          {activeConnections.map((conn, i) => {
            const x = (conn.x / 100) * 800;
            const y = (conn.y / 100) * 400;
            return (
              <g key={conn.id}>
                {/* Phone Icon */}
                <g transform={`translate(${x}, ${y})`}>
                  <circle r="20" fill="#cbe9a1" opacity="0.1">
                    <animate attributeName="r" values="20;30;20" dur="4s" repeatCount="indefinite" begin={`${conn.delay}s`} />
                  </circle>
                  <rect x="-6" y="-8" width="12" height="16" rx="3" fill="#cbe9a1" opacity="0.8" />
                  <rect x="-4" y="-6" width="8" height="10" rx="1" fill="#000" opacity="0.3" />
                  
                  {/* Signal Strength Bars */}
                  <g transform="translate(8, -4)">
                    {[0, 1, 2].map((bar) => (
                      <rect
                        key={bar}
                        x={bar * 3}
                        y={6 - bar * 2}
                        width="2"
                        height={2 + bar * 2}
                        fill="#cbe9a1"
                        opacity="0.6"
                      >
                        <animate 
                          attributeName="opacity" 
                          values="0.6;1;0.6" 
                          dur="1.5s" 
                          repeatCount="indefinite" 
                          begin={`${conn.delay + bar * 0.2}s`} 
                        />
                      </rect>
                    ))}
                  </g>
                </g>
                
                {/* Connection Line to Center */}
                <line 
                  x1={x} 
                  y1={y} 
                  x2="400" 
                  y2="200" 
                  stroke="url(#callWave)" 
                  strokeWidth="2" 
                  strokeDasharray="5,5"
                  filter="url(#glow)"
                >
                  <animate 
                    attributeName="stroke-dashoffset" 
                    values="0;10" 
                    dur="1s" 
                    repeatCount="indefinite" 
                    begin={`${conn.delay}s`} 
                  />
                </line>
                
                {/* Data Packets Moving Along Lines */}
                <circle r="3" fill="#cbe9a1" opacity="0.8">
                  <animateMotion dur="3s" repeatCount="indefinite" begin={`${conn.delay}s`}>
                    <path d={`M${x},${y} L400,200`} />
                  </animateMotion>
                  <animate 
                    attributeName="opacity" 
                    values="0;1;0" 
                    dur="3s" 
                    repeatCount="indefinite" 
                    begin={`${conn.delay}s`} 
                  />
                </circle>
              </g>
            );
          })}

          {/* Voice Wave Patterns */}
          <g transform="translate(400, 200)">
            {[0, 1, 2, 3, 4].map((i) => (
              <circle
                key={i}
                r="0"
                fill="none"
                stroke="#cbe9a1"
                strokeWidth="2"
                opacity="0.4"
              >
                <animate
                  attributeName="r"
                  values="0;80;0"
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${i * 0.8}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0;0.6"
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${i * 0.8}s`}
                />
              </circle>
            ))}
          </g>

          {/* Call Quality Indicators */}
          <g transform="translate(50, 50)">
            <text x="0" y="0" fill="#cbe9a1" fontSize="12" opacity="0.7">Call Quality</text>
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={i}
                x={i * 8}
                y="10"
                width="6"
                height={4 + i * 2}
                fill="#cbe9a1"
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur={`${1.2 + i * 0.1}s`}
                  repeatCount="indefinite"
                />
              </rect>
            ))}
          </g>

          {/* Active Calls Counter */}
          <g transform="translate(680, 50)">
            <circle r="15" fill="#cbe9a1" opacity="0.2" />
            <text x="0" y="5" textAnchor="middle" fill="#cbe9a1" fontSize="14" fontWeight="bold">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
              {activeConnections.length}
            </text>
            <text x="0" y="-25" textAnchor="middle" fill="#cbe9a1" fontSize="10" opacity="0.7">
              Active Calls
            </text>
          </g>

          {/* Response Time Visualization */}
          <g transform="translate(400, 350)">
            <text x="0" y="0" textAnchor="middle" fill="#cbe9a1" fontSize="12" opacity="0.7">
              Avg Response Time
            </text>
            <text x="0" y="20" textAnchor="middle" fill="#cbe9a1" fontSize="18" fontWeight="bold">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
              0.3s
            </text>
            
            {/* Response time pulse */}
            <circle r="25" fill="none" stroke="#cbe9a1" strokeWidth="1" opacity="0.3">
              <animate attributeName="r" values="25;35;25" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.1;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>

        {/* Floating Call Status Indicators */}
        <div className="absolute top-4 left-4 space-y-2">
          {['Connecting...', 'Voice Recognition', 'Processing Response'].map((status, i) => (
            <div
              key={i}
              className="text-xs text-[#cbe9a1] font-mono bg-black/50 px-3 py-1 rounded-full border border-[#cbe9a1]/20"
              style={{
                animation: `statusFade 6s ease-in-out infinite`,
                animationDelay: `${i * 2}s`,
                opacity: 0,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#cbe9a1] rounded-full animate-pulse"></div>
                <span>{status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real-time Metrics */}
        <div className="absolute top-4 right-4 space-y-2">
          <div className="text-xs text-[#cbe9a1] font-mono bg-black/50 px-3 py-1 rounded-full border border-[#cbe9a1]/20">
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3" />
              <span>99.9% Uptime</span>
            </div>
          </div>
          <div className="text-xs text-[#cbe9a1] font-mono bg-black/50 px-3 py-1 rounded-full border border-[#cbe9a1]/20">
            <div className="flex items-center gap-2">
              <Volume2 className="w-3 h-3" />
              <span>HD Voice Quality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (checkingEligibility) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden flex items-center justify-center">
        <BlinkingStars />
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#cbe9a1] animate-spin mx-auto mb-4" />
          <p className="text-[#cbe9a1] text-lg">Checking demo eligibility...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Blinking Stars Background */}
      <BlinkingStars />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(203, 233, 161, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(203, 233, 161, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Back Button */}
          <div className="absolute top-6 left-6 z-20">
            <Link 
              to="/demo-agents"
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

          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 bg-[#cbe9a1]/10 px-6 py-3 rounded-full border border-[#cbe9a1]/20 backdrop-blur-sm">
              <Bot className="w-6 h-6" style={{color: '#cbe9a1'}} />
              <span className="text-sm font-medium" style={{color: '#cbe9a1'}}>
                AI Calling Agent Demo
              </span>
              <div className={`w-2 h-2 rounded-full ${canUseDemo ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {canUseDemo 
                ? "Watch our AI agent make a real phone call with human-like conversation, real-time voice processing, and intelligent responses."
                : "You have used your free demo call for this account"
              }
            </p>

            {/* Demo Status Alert */}
            {hasUsedDemo && (
              <div className="max-w-md mx-auto mb-8 p-4 bg-orange-500/10 border border-orange-400/20 rounded-xl">
                <div className="flex items-center gap-3 text-orange-400">
                  <Lock className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-semibold">Demo Used</p>
                    <p className="text-sm text-orange-300">One demo per account policy</p>
                  </div>
                </div>
              </div>
            )}

            {/* Live Demo Stats */}
            <div className="flex justify-center gap-8 mb-12">
              {[
                { label: 'Active Calls', value: '247', icon: PhoneCall },
                { label: 'Success Rate', value: '98.7%', icon: CheckCircle },
                { label: 'Avg Duration', value: '3.2min', icon: Signal },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-[#cbe9a1] mr-2" />
                    <span className="text-2xl font-bold text-[#cbe9a1]">{stat.value}</span>
                  </div>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>




          {/* Main Demo Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Network Animation */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-900/30 backdrop-blur-sm border border-[#cbe9a1]/20 rounded-3xl p-6 relative overflow-hidden">
                <CallNetworkAnimation />
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-[#cbe9a1]/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-[#cbe9a1] font-semibold mb-1">Live Network Status</h3>
                        <p className="text-gray-300 text-sm">AI agents handling concurrent calls</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm font-mono">ONLINE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Demo Interface */}
            <div className="max-w-lg mx-auto lg:mx-0">
              <div className="bg-gray-900/50 backdrop-blur-lg border border-[#cbe9a1]/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, #cbe9a1 1px, transparent 1px), radial-gradient(circle at 80% 50%, #cbe9a1 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>

                {/* Phone Icon with Advanced Animation */}
                <div className="relative mb-8 flex justify-center">
                  <div className="relative">
                    <div className={`w-24 h-24 ${canUseDemo ? 'bg-[#cbe9a1]/20' : 'bg-gray-600/20'} rounded-full flex items-center justify-center relative`}>
                      {canUseDemo ? (
                        <Phone className="w-12 h-12" style={{color: '#cbe9a1'}} />
                      ) : (
                        <Lock className="w-12 h-12 text-gray-400" />
                      )}
                      
                      {/* Multiple Pulse Rings - only show if can use demo */}
                      {canUseDemo && [0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="absolute inset-0 rounded-full border-2 border-[#cbe9a1]/30"
                          style={{
                            animation: `advancedPulse 3s ease-out infinite`,
                            animationDelay: `${i * 1}s`,
                          }}
                        />
                      ))}
                      
                      {/* Rotating Elements - only show if can use demo */}
                      {canUseDemo && (
                        <div className="absolute inset-0 animate-spin-slow">
                          {[0, 90, 180, 270].map((angle) => (
                            <div
                              key={angle}
                              className="absolute w-2 h-2 bg-[#cbe9a1]/60 rounded-full"
                              style={{
                                top: '10%',
                                left: '50%',
                                transformOrigin: '0 100px',
                                transform: `rotate(${angle}deg)`,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Voice Waves - only show if can use demo */}
                    {canUseDemo && (
                      <div className="absolute -left-6 -right-6 -top-6 -bottom-6">
                        {[0, 1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="absolute inset-0 border border-[#cbe9a1]/20 rounded-full"
                            style={{
                              animation: `voiceWave 4s ease-out infinite`,
                              animationDelay: `${i * 1}s`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Phone Number Input */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                      <Headphones className="w-4 h-4 text-[#cbe9a1]" />
                      Enter Your Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        placeholder="+123 348138139"
                        maxLength={14}
                        disabled={!canUseDemo}
                        className={`w-full px-6 py-4 ${canUseDemo ? 'bg-gray-800/50' : 'bg-gray-700/30'} border border-gray-600 rounded-xl text-white text-lg text-center focus:ring-2 focus:border-[#cbe9a1]/50 transition-all duration-200 backdrop-blur-sm disabled:cursor-not-allowed disabled:opacity-50`}
                        onFocus={(e) => {
                          if (canUseDemo) {
                            e.target.style.boxShadow = '0 0 0 2px rgba(203, 233, 161, 0.3)';
                            e.target.style.borderColor = '#cbe9a1';
                          }
                        }}
                        onBlur={(e) => {
                          e.target.style.boxShadow = 'none';
                          e.target.style.borderColor = '#4b5563';
                        }}
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        {canUseDemo ? (
                          <Mic className="w-5 h-5 text-gray-400" />
                        ) : (
                          <Lock className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                      
                      {/* Input Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#cbe9a1]/10 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none"
                           style={{
                             opacity: (validatePhone(phoneNumber) && canUseDemo) ? 1 : 0,
                           }}
                      />
                    </div>
                  </div>

                  {/* Enhanced Call Button */}
                  <button
                    onClick={handleStartCall}
                    disabled={isLoading || !validatePhone(phoneNumber) || !canUseDemo}
                    className="w-full relative overflow-hidden py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                    style={{
                      background: (validatePhone(phoneNumber) && canUseDemo)
                        ? 'linear-gradient(135deg, #cbe9a1 0%, #a8d3a0 100%)' 
                        : '#6b7280',
                      color: '#1f2937',
                      boxShadow: (validatePhone(phoneNumber) && canUseDemo)
                        ? '0 0 30px rgba(203, 233, 161, 0.4)' 
                        : 'none',
                    }}
                  >
                    {/* Button Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="flex items-center justify-center gap-3 relative z-10">
                      {isLoading ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          <span>Connecting...</span>
                        </>
                      ) : showSuccess ? (
                        <>
                          <CheckCircle className="w-6 h-6" />
                          <span>Call Initiated!</span>
                        </>
                      ) : !canUseDemo ? (
                        <>
                          <Lock className="w-6 h-6" />
                          <span>Demo Used</span>
                        </>
                      ) : (
                        <>
                          <Zap className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                          <span>Start AI Call</span>
                        </>
                      )}
                    </div>
                  </button>

                  {/* Status Message */}
                  {callStatus && (
                    <div className={`p-4 rounded-xl border text-sm transition-all duration-300 ${
                      callStatus.includes('Failed') || callStatus.includes('valid') || callStatus.includes('sign in') || callStatus.includes('already used')
                        ? 'bg-red-500/10 border-red-400/20 text-red-400'
                        : callStatus.includes('quota has been used') || callStatus.includes('limit reached')
                        ? 'bg-orange-500/10 border-orange-400/20 text-orange-400'
                        : 'bg-[#cbe9a1]/10 border-[#cbe9a1]/20'
                    }`}
                    style={!callStatus.includes('Failed') && !callStatus.includes('valid') && !callStatus.includes('sign in') && !callStatus.includes('already used') && !callStatus.includes('quota') && !callStatus.includes('limit') ? {color: '#cbe9a1'} : {}}>
                      <div className="flex items-center gap-3">
                        {callStatus.includes('Failed') || callStatus.includes('valid') || callStatus.includes('sign in') ? (
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        ) : callStatus.includes('already used') || callStatus.includes('quota') || callStatus.includes('limit') ? (
                          <Lock className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <div className="flex items-center gap-2">
                            <Bot className="w-5 h-5 flex-shrink-0" />
                            <div className="flex space-x-1">
                              {[0, 1, 2].map((i) => (
                                <div
                                  key={i}
                                  className="w-1 h-4 bg-[#cbe9a1] rounded-full"
                                  style={{
                                    animation: `loadingBar 1.4s ease-in-out infinite`,
                                    animationDelay: `${i * 0.2}s`,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                        <span className="flex-1">{callStatus}</span>
                      </div>
                    </div>
                  )}
                </div>

{/* Features List or Upgrade Notice */}
{/* Features List or Upgrade Notice */}
<div className="mt-8 pt-6 border-t border-gray-700/50 relative z-50">
  {!canUseDemo ? (
    <div className="text-center relative z-50">
      <p className="text-gray-400 text-sm mb-3">
        How was our Calling Agent ?
      </p>
      <button 
        onClick={() => {
          setShowCalendarModal(true);
        }}
        className="relative z-50 text-[#cbe9a1] text-sm font-medium hover:underline transition-colors duration-200 hover:text-[#a8d3a0] cursor-pointer  px-2 py-1 rounded"
        style={{ 
          position: 'relative',
          zIndex: 9999,
          pointerEvents: 'auto'
        }}
      >
        Schedule a meeting with us to discuss further
      </button>
    </div>
  ) : (
    <div className="text-center">
      <p className="text-gray-400 text-sm">
         You can only avail a single demo per account
      </p>
    </div>
  )}
</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendarModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-[#cbe9a1]/20 rounded-3xl w-full max-w-4xl h-[600px] relative overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#cbe9a1]/10 to-transparent p-6 border-b border-[#cbe9a1]/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#cbe9a1]/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" style={{color: '#cbe9a1'}} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Loved the Demo?</h3>
                    <p className="text-gray-300">Schedule a meeting to discuss your AI solution</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowCalendarModal(false)}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-[#cbe9a1]/30 rounded-full flex items-center justify-center transition-all duration-200 group"
                >
                  <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* Calendar Container */}
            <div className="p-6 h-[calc(600px-120px)]">
              <div className="bg-white rounded-2xl h-full border border-[#cbe9a1]/20 overflow-hidden shadow-inner">
                <iframe
                  src="https://cal.com/faqtor?theme=light"
                  className="w-full h-full"
                  frameBorder="0"
                  title="Schedule a meeting"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#cbe9a1] rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#cbe9a1]/60 rounded-full"></div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#cbe9a1]/5 to-transparent pointer-events-none"></div>
          </div>
        </div>
      )}

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes advancedPulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        @keyframes voiceWave {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes statusFade {
          0%, 80%, 100% { 
            opacity: 0;
            transform: translateY(10px);
          }
          10%, 70% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes loadingBar {
          0%, 80%, 100% { 
            height: 1rem;
            opacity: 0.4;
          }
          40% { 
            height: 1.5rem;
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          33% { 
            transform: translateY(-10px) rotate(120deg);
          }
          66% { 
            transform: translateY(5px) rotate(240deg);
          }
        }
        
        @keyframes orbit {
          0% { 
            transform: rotate(0deg) translateX(30px) rotate(0deg);
          }
          100% { 
            transform: rotate(360deg) translateX(30px) rotate(-360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CallingAgentDemo;