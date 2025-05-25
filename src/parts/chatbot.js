// /* eslint-disable */
// // src/components/ChatBot.jsx
// // Update your existing ChatBot component to work within the widget
// // src/parts/chatbot.js
// import React, { useEffect, useRef } from 'react';
// import '@n8n/chat/style.css';
// import { createChat } from '@n8n/chat';

// const ChatBot = () => {
//   const chatInstanceRef = useRef(null);
//   const chatContainerRef = useRef(null);
  
//   useEffect(() => {
//     // Only initialize chat if it hasn't been initialized yet
//     if (!chatInstanceRef.current && chatContainerRef.current) {
//       // Initialize chat immediately with the ref
//       initializeChat();
//     }
    
//     // Cleanup when component unmounts
//     return () => {
//       if (chatInstanceRef.current && typeof chatInstanceRef.current.destroy === 'function') {
//         chatInstanceRef.current.destroy();
//       }
//       chatInstanceRef.current = null;
//     };
//   }, []);
  
//   const initializeChat = () => {
//     try {
//       // Ensure any existing n8n chat instances are removed first
//       const existingChats = document.querySelectorAll('.n8n-chat');
//       existingChats.forEach(chat => {
//         if (chat.id !== 'n8n-chat-container') {
//           chat.remove();
//         }
//       });
      
//       // Create the n8n chat with these critical settings:
//       const chat = createChat({
//         metadata: {},
//         mode: 'inline', // Critical: This prevents the floating button
//         target: '#n8n-chat-container', // Target our specific container
//         defaultLanguage: 'en',
//         showWelcomeScreen: false,
//         chatInputKey: 'chatInput',
//         chatSessionKey: 'sessionId',
//         webhookConfig: { headers: {}, method: 'POST' },
//         webhookUrl: 'https://n8n.softtik.com/webhook/c44683cb-30c3-489d-9d94-c4f750d5948f/chat',
//         initialMessages: [
//           'Welcome to Faqtor! ',
//           'This is Ava. How can I assist you today?'
//         ],
//         i18n: {
//           en: {
//             footer: '',
//             title: 'Ava from Faqtor.co',
//             icon: 'avatar-svgrepo-com.svg',
//             getStarted: 'Start Conversation',
//             inputPlaceholder: 'Type your question..',
//             subtitle: "Welcome to Faqtor. We're here to help you 24/7"
//           }
//         },
//         // Disable any auto-popup behavior
//         autoPopup: false,
//         // Prevent the chat from creating its own button
//         showChatButton: false
//       });
      
//       chatInstanceRef.current = chat;
//     } catch (error) {
//       console.error('Error initializing chat:', error);
//     }
//   };
  
//   return (
//     <div id="n8n-chat-container" ref={chatContainerRef} className="h-full w-full">
//       {/* The n8n chat will be mounted here */}
//     </div>
//   );
// };

// export default ChatBot;