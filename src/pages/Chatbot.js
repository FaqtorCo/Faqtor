/* eslint-disable */

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Bot, Send, Loader2, CheckCircle, AlertCircle, Sparkles, Settings, User, Zap, MessageSquare, Brain, Activity } from 'lucide-react';

const ChatbotDemo = () => {
  const [chatbotPrompt, setChatbotPrompt] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [animatedElements, setAnimatedElements] = useState([]);
  const [sessionId, setSessionId] = useState('');
  const [chatMetrics, setChatMetrics] = useState({
    responseTime: '0.8s',
    accuracy: '96.7%',
    satisfaction: '4.8/5'
  });
  const messagesEndRef = useRef(null);

  // Generate a unique session ID when component mounts
  useEffect(() => {
    const generateSessionId = () => {
      return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    };
    setSessionId(generateSessionId());
  }, []);

  // Create animated background elements
  useEffect(() => {
    const elements = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      brightness: Math.random() * 0.8 + 0.2,
    }));
    setAnimatedElements(elements);
  }, []);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Sample prompts for different business types
  const samplePrompts = [
    {
      type: 'Bakery',
      prompt: `You are a friendly customer service bot for "Sweet Dreams Bakery". We specialize in fresh baked goods, custom cakes, and artisanal breads. Our popular items include chocolate croissants ($4.50), custom birthday cakes (starting at $25), sourdough bread ($6), and seasonal pastries. We're open Monday-Saturday 6AM-7PM, Sunday 7AM-5PM. We offer cake decorating classes on weekends and take custom orders with 48-hour notice. Our address is 123 Baker Street. Always be helpful, warm, and knowledgeable about our products and services.`
    },
    {
      type: 'Tech Support',
      prompt: `You are a technical support chatbot for "TechFlow Solutions", a software company. Help users with account issues, software installation, troubleshooting, and feature questions. Our main products are ProjectManager Pro ($29/month), DataSync Enterprise ($99/month), and CloudBackup Basic (free). Common issues include login problems, sync errors, and billing questions. Always ask clarifying questions, provide step-by-step solutions, and escalate complex issues to human support. Be professional, patient, and technically accurate.`
    },
    {
      type: 'Restaurant',
      prompt: `You are the virtual assistant for "Garden Bistro", an upscale restaurant specializing in farm-to-table cuisine. Our menu changes seasonally, but signature dishes include grass-fed steak ($32), wild salmon ($28), and vegetarian pasta ($18). We're open Tuesday-Sunday 5PM-10PM, closed Mondays. Reservations recommended, especially weekends. We offer private dining for events, wine pairings, and a Sunday brunch menu. Located at 456 Culinary Lane. Be sophisticated yet approachable, and always mention our commitment to local, organic ingredients.`
    }
  ];

  const handlePromptChange = (e) => {
    setChatbotPrompt(e.target.value);
  };

  const configureChatbot = () => {
    if (!chatbotPrompt.trim()) {
      return;
    }
    
    setIsConfigured(true);
    setShowSuccess(true);
    setMessages([
      {
        id: 1,
        type: 'bot',
        content: 'Hello! I\'m your AI assistant. How can I help you today?',
        timestamp: new Date()
      }
    ]);
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const sendMessage = async () => {
    if (!currentMessage.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: currentMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const messageToSend = currentMessage;
    setCurrentMessage('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      // Updated request body with the required fields
      const requestBody = {
        action: "sendMessage",
        chatInput: messageToSend,
        metadata: {
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          conversationLength: messages.length + 1,
          prompt: chatbotPrompt
        },
        sessionId: sessionId,
        prompt: chatbotPrompt // Keep this for backward compatibility if needed
      };

      const response = await fetch('https://n8n.softtik.com/webhook/e4a1d330-231b-4199-8f47-c7bb79ed3a94/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      // Handle different response types like the working widget
      let data;
      const contentType = response.headers.get("content-type");
      
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      console.log("Response received:", data);

      // Simulate typing delay for better UX
      setTimeout(() => {
        let botContent = 'I understand your question. Let me help you with that!';
        
        // Handle different possible response formats like the widget
        if (data) {
          if (typeof data === "string") {
            botContent = data;
          } else if (data.text) {
            botContent = data.text;
          } else if (data.output) {
            botContent = data.output;
          } else if (data.message) {
            botContent = data.message;
          } else {
            botContent = "Received response: " + JSON.stringify(data);
          }
        }
        
        const botMessage = {
          id: messages.length + 2,
          type: 'bot',
          content: botContent,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
        
        // Update metrics randomly for demo effect
        setChatMetrics({
          responseTime: `${(Math.random() * 2 + 0.3).toFixed(1)}s`,
          accuracy: `${(Math.random() * 5 + 95).toFixed(1)}%`,
          satisfaction: `${(Math.random() * 0.4 + 4.6).toFixed(1)}/5`
        });
      }, 1500);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: 'I apologize, but I\'m having trouble connecting right now. Please try again in a moment.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const useSamplePrompt = (prompt) => {
    setChatbotPrompt(prompt);
  };

  // Animated background particles
  const AnimatedParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {animatedElements.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-[#cbe9a1]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.brightness * 0.6,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );

  // Chat network visualization
  const ChatNetworkAnimation = () => (
    <div className="absolute inset-0 overflow-hidden opacity-80">
      <div className="relative w-full h-full">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400">
          <defs>
            <radialGradient id="chatGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#cbe9a1" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#cbe9a1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#cbe9a1" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="messageFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbe9a1" stopOpacity="0" />
              <stop offset="50%" stopColor="#cbe9a1" stopOpacity="1" />
              <stop offset="100%" stopColor="#cbe9a1" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Central AI Brain */}
          <g transform="translate(300, 200)">
            <circle r="35" fill="url(#chatGlow)" />
            <circle r="20" fill="#cbe9a1" opacity="0.3">
              <animate attributeName="r" values="20;30;20" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle r="12" fill="#cbe9a1" opacity="0.6">
              <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle r="6" fill="#cbe9a1" />
            
            {/* Neural connections */}
            <g opacity="0.7">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <g key={i} transform={`rotate(${angle})`}>
                  <line x1="0" y1="0" x2="15" y2="0" stroke="#cbe9a1" strokeWidth="1">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin={`${i * 0.25}s`} />
                  </line>
                  <circle cx="15" cy="0" r="2" fill="#cbe9a1">
                    <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" begin={`${i * 0.25}s`} />
                  </circle>
                </g>
              ))}
            </g>
          </g>

          {/* User conversation nodes */}
          {[
            { x: 100, y: 100, label: 'User A' },
            { x: 500, y: 120, label: 'User B' },
            { x: 80, y: 300, label: 'User C' },
            { x: 520, y: 280, label: 'User D' }
          ].map((user, i) => (
            <g key={i}>
              {/* User node */}
              <g transform={`translate(${user.x}, ${user.y})`}>
                <circle r="15" fill="#cbe9a1" opacity="0.2">
                  <animate attributeName="r" values="15;20;15" dur="4s" repeatCount="indefinite" begin={`${i * 1}s`} />
                </circle>
                <circle r="8" fill="#cbe9a1" opacity="0.6" />
                <circle r="4" fill="#cbe9a1" />
              </g>
              
              {/* Message flow line to center */}
              <line 
                x1={user.x} 
                y1={user.y} 
                x2="300" 
                y2="200" 
                stroke="url(#messageFlow)" 
                strokeWidth="2" 
                strokeDasharray="6,4"
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="0;10" 
                  dur="1.5s" 
                  repeatCount="indefinite" 
                  begin={`${i * 0.5}s`} 
                />
              </line>
              
              {/* Message bubbles flowing */}
              <circle r="2" fill="#cbe9a1" opacity="0.8">
                <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 0.7}s`}>
                  <path d={`M${user.x},${user.y} L300,200`} />
                </animateMotion>
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="3s" 
                  repeatCount="indefinite" 
                  begin={`${i * 0.7}s`} 
                />
              </circle>
            </g>
          ))}

          {/* Conversation bubbles */}
          <g transform="translate(300, 200)">
            {[0, 1, 2, 3, 4].map((i) => (
              <circle
                key={i}
                r="0"
                fill="none"
                stroke="#cbe9a1"
                strokeWidth="1"
                opacity="0.3"
              >
                <animate
                  attributeName="r"
                  values="0;60;0"
                  dur="5s"
                  repeatCount="indefinite"
                  begin={`${i * 1}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.5;0;0.5"
                  dur="5s"
                  repeatCount="indefinite"
                  begin={`${i * 1}s`}
                />
              </circle>
            ))}
          </g>

          {/* Knowledge base indicators */}
          <g transform="translate(450, 50)">
            <text x="0" y="0" fill="#cbe9a1" fontSize="10" opacity="0.7">Knowledge Base</text>
            <rect x="-10" y="10" width="80" height="40" rx="4" fill="#cbe9a1" opacity="0.1" />
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={i}
                x={-5 + i * 18}
                y="15"
                width="15"
                height="30"
                rx="2"
                fill="#cbe9a1"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur={`${1.5 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </rect>
            ))}
          </g>
        </svg>

        {/* Floating status indicators */}
        <div className="absolute top-4 left-4 space-y-2">
          <div className="text-xs text-[#cbe9a1] font-mono bg-black/50 px-3 py-1 rounded-full border border-[#cbe9a1]/20">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span>Active Chats: 4</span>
            </div>
          </div>
          <div className="text-xs text-[#cbe9a1] font-mono bg-black/50 px-3 py-1 rounded-full border border-[#cbe9a1]/20">
            <div className="flex items-center gap-2">
              <Brain className="w-3 h-3" />
              <span>Processing</span>
            </div>
          </div>
          <div className="text-xs text-[#cbe9a1] font-mono bg-black/50 px-3 py-1 rounded-full border border-[#cbe9a1]/20">
            <div className="flex items-center gap-2">
              <span>Session: {sessionId.slice(-8)}</span>
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4 space-y-2">
          <div className="text-xs text-[#cbe9a1] font-mono bg-black/50 px-3 py-1 rounded-full border border-[#cbe9a1]/20">
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3" />
              <span>Response: {chatMetrics.responseTime}</span>
            </div>
          </div>
          <div className="text-xs text-[#cbe9a1] font-mono bg-black/50 px-3 py-1 rounded-full border border-[#cbe9a1]/20">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3" />
              <span>Accuracy: {chatMetrics.accuracy}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedParticles />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(203, 233, 161, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(203, 233, 161, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 bg-[#cbe9a1]/10 px-6 py-3 rounded-full border border-[#cbe9a1]/20 backdrop-blur-sm">
              <MessageCircle className="w-6 h-6" style={{color: '#cbe9a1'}} />
              <span className="text-sm font-medium" style={{color: '#cbe9a1'}}>
                AI Chatbot Demo
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-[#cbe9a1] bg-clip-text text-transparent">
              Build Your Smart Chatbot
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Configure your AI chatbot with your business information and watch it handle customer inquiries 
              with intelligent, contextual responses.
            </p>

            {/* Live Demo Stats */}
            <div className="flex justify-center gap-8 mt-12">
              {[
                { label: 'Response Time', value: chatMetrics.responseTime, icon: Zap },
                { label: 'Accuracy Rate', value: chatMetrics.accuracy, icon: CheckCircle },
                { label: 'User Rating', value: chatMetrics.satisfaction, icon: Sparkles },
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Configuration Panel */}
            <div className="space-y-8">
              {/* Network Animation */}
              <div className="aspect-[4/3] bg-gray-900/30 backdrop-blur-sm border border-[#cbe9a1]/20 rounded-3xl p-6 relative overflow-hidden">
                <ChatNetworkAnimation />
                
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-[#cbe9a1]/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-[#cbe9a1] font-semibold mb-1">Live Chat Network</h3>
                        <p className="text-gray-300 text-sm">AI processing multiple conversations</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm font-mono">ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Configuration Panel */}
              {!isConfigured && (
                <div className="bg-gray-900/50 backdrop-blur-lg border border-[#cbe9a1]/20 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-[#cbe9a1]" />
                    <h2 className="text-2xl font-bold text-white">Configure Your Chatbot</h2>
                  </div>

                  {/* Sample Prompts */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-300 mb-3">Quick Start Templates:</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {samplePrompts.map((sample, i) => (
                        <button
                          key={i}
                          onClick={() => useSamplePrompt(sample.prompt)}
                          className="text-left p-3 bg-gray-800/50 border border-gray-600 rounded-lg hover:border-[#cbe9a1]/50 transition-all duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[#cbe9a1] font-medium">{sample.type}</span>
                            <Sparkles className="w-4 h-4 text-gray-400 group-hover:text-[#cbe9a1] transition-colors" />
                          </div>
                          <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                            {sample.prompt.substring(0, 100)}...
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Prompt Input */}
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-300">
                      Business Information & Instructions
                    </label>
                    <textarea
                      value={chatbotPrompt}
                      onChange={handlePromptChange}
                      rows={8}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:border-[#cbe9a1]/50 transition-all duration-200 resize-none"
                      placeholder="Describe your business, products/services, hours, policies, and how you want the chatbot to respond to customers..."
                    />
                    
                    <button
                      onClick={configureChatbot}
                      disabled={!chatbotPrompt.trim()}
                      className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                      style={{
                        background: chatbotPrompt.trim() 
                          ? 'linear-gradient(135deg, #cbe9a1 0%, #a8d3a0 100%)' 
                          : '#6b7280',
                        color: '#1f2937',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div className="flex items-center justify-center gap-3 relative z-10">
                        {showSuccess ? (
                          <>
                            <CheckCircle className="w-5 h-5" />
                            <span>Chatbot Configured!</span>
                          </>
                        ) : (
                          <>
                            <Bot className="w-5 h-5" />
                            <span>Configure Chatbot</span>
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side - Chat Interface */}
            <div className="max-w-lg mx-auto lg:mx-0">
              <div className="bg-gray-900/50 backdrop-blur-lg border border-[#cbe9a1]/20 rounded-3xl shadow-2xl h-[600px] flex flex-col overflow-hidden">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-[#cbe9a1]/10 to-transparent p-6 border-b border-gray-700/50">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-[#cbe9a1]/20 rounded-full flex items-center justify-center">
                        <Bot className="w-6 h-6" style={{color: '#cbe9a1'}} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">AI Assistant</h3>
                      <p className="text-gray-400 text-sm">
                        {isConfigured ? 'Online • Ready to help' : 'Configure to start chatting'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {!isConfigured ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-400">Configure your chatbot to start the conversation</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[80%] ${
                            message.type === 'user'
                              ? 'bg-[#cbe9a1] text-gray-900 rounded-2xl rounded-tr-md'
                              : 'bg-gray-800 text-white rounded-2xl rounded-tl-md'
                          } px-4 py-3 shadow-lg`}>
                            <div className="flex items-start gap-2">
                              {message.type === 'bot' && (
                                <Bot className="w-4 h-4 mt-0.5 text-[#cbe9a1] flex-shrink-0" />
                              )}
                              {message.type === 'user' && (
                                <User className="w-4 h-4 mt-0.5 text-gray-700 flex-shrink-0" />
                              )}
                              <p className="text-sm leading-relaxed">{message.content}</p>
                            </div>
                            <p className={`text-xs mt-2 ${
                              message.type === 'user' ? 'text-gray-600' : 'text-gray-400'
                            }`}>
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                      ))}
                      
                      {/* Typing Indicator */}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-gray-800 text-white rounded-2xl rounded-tl-md px-4 py-3 shadow-lg">
                            <div className="flex items-center gap-2">
                              <Bot className="w-4 h-4 text-[#cbe9a1]" />
                              <div className="flex space-x-1">
                                {[0, 1, 2].map((i) => (
                                  <div
                                    key={i}
                                    className="w-2 h-2 bg-[#cbe9a1] rounded-full"
                                    style={{
                                      animation: `bounce 1.4s ease-in-out infinite`,
                                      animationDelay: `${i * 0.2}s`,
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </>
                  )}
                </div>

                {/* Input Area */}
                {isConfigured && (
                  <div className="p-4 border-t border-gray-700/50">
                    <div className="flex gap-3">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={currentMessage}
                          onChange={(e) => setCurrentMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Type your message..."
                          disabled={isLoading}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:border-[#cbe9a1]/50 transition-all duration-200 placeholder-gray-400"
                        />
                      </div>
                      <button
                        onClick={sendMessage}
                        disabled={!currentMessage.trim() || isLoading}
                        className="px-4 py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                        style={{
                          background: currentMessage.trim() && !isLoading
                            ? 'linear-gradient(135deg, #cbe9a1 0%, #a8d3a0 100%)'
                            : '#6b7280',
                          color: '#1f2937',
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <div className="relative z-10">
                          {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <Send className="w-5 h-5" />
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Brain,
                  title: 'Smart Context Understanding',
                  description: 'AI understands your business context and provides relevant responses'
                },
                {
                  icon: Zap,
                  title: 'Instant Responses',
                  description: 'Sub-second response times with natural conversation flow'
                },
                {
                  icon: Settings,
                  title: 'Easy Configuration',
                  description: 'Simply describe your business and the AI handles the rest'
                }
              ].map((feature, i) => (
                <div key={i} className="bg-gray-900/30 backdrop-blur-sm border border-[#cbe9a1]/20 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-[#cbe9a1]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-[#cbe9a1]" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
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
        
        @keyframes bounce {
          0%, 80%, 100% { 
            transform: translateY(0);
            opacity: 0.5;
          }
          40% { 
            transform: translateY(-8px);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 1;
          }
          50% { 
            opacity: 0.5;
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Custom scrollbar for chat */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(75, 85, 99, 0.3);
          border-radius: 2px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(203, 233, 161, 0.3);
          border-radius: 2px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(203, 233, 161, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ChatbotDemo;