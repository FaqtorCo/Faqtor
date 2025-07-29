/* eslint-disable */


import React, { useState, useEffect } from 'react';
import { Phone, Zap, Bot, Radio, Loader2, CheckCircle, AlertCircle, PhoneCall, Signal, Headphones, Mic, Volume2, Activity } from 'lucide-react';

const CallingAgentDemo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [callStatus, setCallStatus] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [animatedElements, setAnimatedElements] = useState([]);
  const [activeConnections, setActiveConnections] = useState([]);

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
    if (!validatePhone(phoneNumber)) {
      setCallStatus('Please enter a valid 10-digit phone number');
      return;
    }

    setIsLoading(true);
    setCallStatus('Initiating AI call...');

    try {
      const response = await fetch(process.env.REACT_APP_N8N_WEBHOOK_URL || 'https://n8n.softtik.com/webhook/calling-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phoneNumber: phoneNumber, // Send the full number with country code
            timestamp: new Date().toISOString(),
            name: 'Asad'
          }),
      });

      if (response.ok) {
        setCallStatus('AI agent is calling your number...');
        setShowSuccess(true);
        setTimeout(() => {
          setCallStatus('Call initiated successfully! Please answer your phone.');
        }, 2000);
      } else {
        throw new Error('Failed to initiate call');
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
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 bg-[#cbe9a1]/10 px-6 py-3 rounded-full border border-[#cbe9a1]/20 backdrop-blur-sm">
              <Bot className="w-6 h-6" style={{color: '#cbe9a1'}} />
              <span className="text-sm font-medium" style={{color: '#cbe9a1'}}>
                AI Calling Agent Demo
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* <h1 className="text-6l md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-[#cbe9a1] bg-clip-text text-transparent leading-tight">
              Experience the Future of AI Phone Calls
            </h1>
            
            <h1 className="text-6l md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#cbe9a1] to-[#a8d3a0] bg-clip-text text-transparent">
          
            </h1> */}
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Watch our AI agent make a real phone call with human-like conversation, 
              real-time voice processing, and intelligent responses.
            </p>

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
                    <div className="w-24 h-24 bg-[#cbe9a1]/20 rounded-full flex items-center justify-center relative">
                      <Phone className="w-12 h-12" style={{color: '#cbe9a1'}} />
                      
                      {/* Multiple Pulse Rings */}
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="absolute inset-0 rounded-full border-2 border-[#cbe9a1]/30"
                          style={{
                            animation: `advancedPulse 3s ease-out infinite`,
                            animationDelay: `${i * 1}s`,
                          }}
                        />
                      ))}
                      
                      {/* Rotating Elements */}
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
                    </div>
                    
                    {/* Voice Waves */}
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
                        className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white text-lg text-center focus:ring-2 focus:border-[#cbe9a1]/50 transition-all duration-200 backdrop-blur-sm"
                        onFocus={(e) => {
                          e.target.style.boxShadow = '0 0 0 2px rgba(203, 233, 161, 0.3)';
                          e.target.style.borderColor = '#cbe9a1';
                        }}
                        onBlur={(e) => {
                          e.target.style.boxShadow = 'none';
                          e.target.style.borderColor = '#4b5563';
                        }}
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <Mic className="w-5 h-5 text-gray-400" />
                      </div>
                      
                      {/* Input Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#cbe9a1]/10 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none"
                           style={{
                             opacity: validatePhone(phoneNumber) ? 1 : 0,
                           }}
                      />
                    </div>
                  </div>

                  {/* Enhanced Call Button */}
                  <button
                    onClick={handleStartCall}
                    disabled={isLoading || !validatePhone(phoneNumber)}
                    className="w-full relative overflow-hidden py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                    style={{
                      background: validatePhone(phoneNumber) 
                        ? 'linear-gradient(135deg, #cbe9a1 0%, #a8d3a0 100%)' 
                        : '#6b7280',
                      color: '#1f2937',
                      boxShadow: validatePhone(phoneNumber) 
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
                      callStatus.includes('Failed') || callStatus.includes('valid')
                        ? 'bg-red-500/10 border-red-400/20 text-red-400'
                        : 'bg-[#cbe9a1]/10 border-[#cbe9a1]/20'
                    }`}
                    style={!callStatus.includes('Failed') && !callStatus.includes('valid') ? {color: '#cbe9a1'} : {}}>
                      <div className="flex items-center gap-3">
                        {callStatus.includes('Failed') || callStatus.includes('valid') ? (
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
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

                {/* Features List */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  {/* <div className="grid grid-cols-2 gap-4 text-sm">
                    {[
                      { icon: Radio, text: 'Real-time conversation' },
                      { icon: Bot, text: 'Human-like responses' },
                      { icon: Volume2, text: 'Natural voice synthesis' },
                      { icon: Signal, text: 'Instant connection' },
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-400 hover:text-[#cbe9a1] transition-colors duration-200">
                        <feature.icon className="w-4 h-4" />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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