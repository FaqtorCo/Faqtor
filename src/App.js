/* eslint-disable */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import LandingPage from 'pages/LandingPage';
import ProjectPage from 'pages/ProjectPage';
import NotFoundPage from 'pages/NotFoundPage';
import TeamPage from 'pages/TeamPage';

import { ProjectDetailPage } from 'pages/ProjectDetailPage';
import { DiscussProjectPage } from 'pages/DiscussProjectPage';

import './assets/css/styles.css';
import Services from 'pages/Services';
import ChatbotWidget from './parts/ChatbotWidget'; // Import the custom ChatbotWidget

function App() {
  // Add this useEffect to remove any n8n elements that might appear
  useEffect(() => {
    // Function to remove any existing n8n elements
    const removeN8nElements = () => {
      const n8nElements = document.querySelectorAll('.n8n-chat-bubble, .n8n-chat, .n8n-chat-window');
      n8nElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };

    // Initially remove any existing elements
    removeN8nElements();

    // Set up a small delay to ensure we catch elements that might be added after initial load
    const cleanupTimer = setTimeout(removeN8nElements, 1000);

    return () => {
      clearTimeout(cleanupTimer);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/services" element={<Services />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/discuss-project" element={<DiscussProjectPage />} />
        <Route path="**" element={<NotFoundPage />} />
      </Routes>
      
      {/* Add the custom ChatbotWidget */}
      <ChatbotWidget />
    </>
  );
}

export default App;