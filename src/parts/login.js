/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, Eye, EyeOff, X } from 'lucide-react';

const AuthComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Check for existing token on component mount
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const name = localStorage.getItem('user_name');
    if (token && name) {
      setIsLoggedIn(true);
      setUserName(name);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setMessage('');
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('');

    // Validation for signup
    if (!isLogin) {
      if (!validatePassword(formData.password)) {
        setMessage('Password must be at least 8 characters long');
        setLoading(false);
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setMessage('Passwords do not match');
        setLoading(false);
        return;
      }
      if (!formData.name.trim()) {
        setMessage('Name is required');
        setLoading(false);
        return;
      }
    }

    const endpoint = isLogin ? '/api/signin' : '/api/signup';
    // const url = `http://localhost:5001${endpoint}`;
    const url = `https://faqtor.onrender.com${endpoint}`;

    // Prepare data based on login/signup
    const submitData = isLogin 
      ? { email: formData.email, password: formData.password }
      : { name: formData.name, email: formData.email, password: formData.password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          // Store JWT token and user data
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('user_name', data.name);
          setIsLoggedIn(true);
          setUserName(data.name);
          
          // Show welcome toast
          setShowToast(true);
          setTimeout(() => setShowToast(false), 4000);
          
          setTimeout(() => {
            setShowModal(false);
            setMessage('');
          }, 1500);
        } else {
          setMessage('Account created successfully! You can now login.');
          setIsLogin(true);
        }
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      } else {
        setMessage(data.message || 'Something went wrong');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const confirmLogout = () => {
    console.log('Logout button clicked'); // Debug log
    console.log('Current showLogoutConfirm state:', showLogoutConfirm); // Debug current state
    setShowLogoutConfirm(true);
    console.log('Set showLogoutConfirm to true'); // Debug state change
  };

  const handleLogout = () => {
    // Remove token and user data
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_name');
    setIsLoggedIn(false);
    setUserName('');
    setMessage('');
    setShowLogoutConfirm(false);
  };

  const openModal = (loginMode) => {
    setIsLogin(loginMode);
    setShowModal(true);
    setMessage('');
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  if (isLoggedIn) {
    return (
      <>
        {/* Welcome Toast */}
        {showToast && (
          <div className="fixed top-4 right-4 bg-gray-900 border border-[#cbe9a1]/20 rounded-lg p-4 z-50 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#cbe9a1]/20 rounded-full flex items-center justify-center">
                <User className="w-4 h-4" style={{color: '#cbe9a1'}} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{color: '#cbe9a1'}}>
                  Welcome to Faqtor!
                </p>
                <p className="text-xs text-gray-400">Hello, {userName}</p>
              </div>
            </div>
          </div>
        )}

        {/* Logout Confirmation Modal */}
        {showLogoutConfirm && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
            <div className="bg-gray-900 border border-red-400/20 rounded-xl p-6 w-full max-w-sm relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Confirm Logout</h3>
                <p className="text-gray-400 mb-6">Are you sure you want to logout?</p>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowLogoutConfirm(false)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-3 ml-auto">
          <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-[#cbe9a1]/20 rounded-lg px-4 py-2">
            <div className="w-8 h-8 bg-[#cbe9a1]/20 rounded-full flex items-center justify-center">
              <User className="w-4 h-4" style={{color: '#cbe9a1'}} />
            </div>
            <span className="text-sm font-medium" style={{color: '#cbe9a1'}}>{userName}</span>
          </div>
          <button
            onClick={confirmLogout}
            className="bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 text-red-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Debug info */}
      {console.log('Rendering component, showLogoutConfirm:', showLogoutConfirm)}
      
      {/* Compact Login/Signup Buttons */}
      <div className="flex items-center gap-3 ml-auto">
        <button
          onClick={() => openModal(true)}
          className="bg-[#cbe9a1]/10 hover:bg-[#cbe9a1]/20 border border-[#cbe9a1]/30 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm"
          style={{color: '#cbe9a1'}}
        >
          Login
        </button>
        <button
          onClick={() => openModal(false)}
          className="hover:opacity-90 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          style={{backgroundColor: '#cbe9a1'}}
        >
          Sign Up
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="bg-gray-900 border border-red-400/20 rounded-xl p-6 w-full max-w-sm relative">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Confirm Logout</h3>
              <p className="text-gray-400 mb-6">Are you sure you want to logout?</p>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-[#cbe9a1]/20 rounded-xl p-6 w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 transition-colors"
              onMouseEnter={(e) => e.target.style.color = '#cbe9a1'}
              onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2" style={{color: '#cbe9a1'}}>
                {isLogin ? 'Sign In' : 'Sign Up'}
              </h2>
              <p className="text-gray-400">
                {isLogin ? 'Welcome back!' : 'Create your account'}
              </p>
            </div>

            {/* Message */}
            {message && (
              <div className={`mb-4 p-3 rounded-lg text-sm border ${
                message.includes('successfully') || message.includes('Welcome')
                  ? 'bg-[#cbe9a1]/10 border-[#cbe9a1]/20'
                  : 'bg-red-400/10 text-red-400 border-red-400/20'
              }`}
              style={message.includes('successfully') || message.includes('Welcome') ? {color: '#cbe9a1'} : {}}
              >
                {message}
              </div>
            )}

            {/* Form */}
            <div className="space-y-4">
              {/* Name field - only for signup */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:border-[#cbe9a1]/50 text-white placeholder-gray-500"
                      onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px rgba(203, 233, 161, 0.5)'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:border-[#cbe9a1]/50 text-white placeholder-gray-500"
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px rgba(203, 233, 161, 0.5)'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                  {!isLogin && <span className="text-xs text-gray-400 ml-2">(min. 8 characters)</span>}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-10 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:border-[#cbe9a1]/50 text-white placeholder-gray-500"
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px rgba(203, 233, 161, 0.5)'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-colors"
                    onMouseEnter={(e) => e.target.style.color = '#cbe9a1'}
                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password field - only for signup */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-10 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:border-[#cbe9a1]/50 text-white placeholder-gray-500"
                      onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px rgba(203, 233, 161, 0.5)'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-colors"
                      onMouseEnter={(e) => e.target.style.color = '#cbe9a1'}
                      onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full hover:opacity-90 text-gray-900 py-3 px-4 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{backgroundColor: '#cbe9a1'}}
              >
                {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Sign Up')}
              </button>
            </div>

            {/* Toggle */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setMessage('');
                    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                  }}
                  className="ml-1 font-medium transition-colors"
                  style={{color: '#cbe9a1'}}
                  onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthComponent;