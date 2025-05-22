// // src/parts/N8nChatInit.js
// /* eslint-disable */

// // src/parts/N8nChatInit.js
// import '@n8n/chat/style.css';
// import { createChat } from '@n8n/chat';

// // Create and export a function to initialize the chat
// export function initializeN8nChat() {
//   try {
//     // Create the n8n chat with default window mode and theme options
//     const chat = createChat({
//       metadata: {},
//       mode: 'window', // Use the default window mode for the floating button
//       defaultLanguage: 'en',
//       showWelcomeScreen: false,
//       chatInputKey: 'chatInput',
//       chatSessionKey: 'sessionId',
//       webhookConfig: { 
//         headers: {}, 
//         method: 'POST'
//       },
//       webhookUrl: 'https://n8n.softtik.com/webhook/9c494346-6972-4f49-a50f-3631792000ac/chat',
//       initialMessages: [
//         'Welcome to Faqtor! ',
//         'This is Max. How can I assist you today?'
//       ],
//       i18n: {
//         en: {
//           footer: '',
//           title: 'Max from Faqtor',
//           icon: 'avatar-svgrepo-com.svg',
//           getStarted: 'Start Conversation',
//           inputPlaceholder: 'Type your question..',
//           subtitle: "Welcome to Faqtor. We're here to help you 24/7"
//         }
//       },
//       // Theme customization - another way to customize the appearance
//       theme: {
//         chatBubble: {
//           backgroundColor: '#3b82f6', // Blue background for chat button
//           color: '#ffffff',           // White text/icon color
//         },
//         header: {
//           backgroundColor: '#3b82f6', // Blue header
//           color: '#ffffff',           // White text
//         },
//         messages: {
//           bot: {
//             backgroundColor: '#e0e7ff', // Light indigo background for bot messages
//             color: '#1e3a8a',           // Dark blue text for bot messages
//           },
//           user: {
//             backgroundColor: '#dbeafe', // Light blue background for user messages
//             color: '#1e40af',           // Blue text for user messages
//           },
//         },
//         input: {
//           backgroundColor: '#ffffff',  // White input background
//           borderColor: '#d1d5db',      // Gray border
//           color: '#111827',            // Dark text
//         },
//         sendButton: {
//           backgroundColor: '#3b82f6',  // Blue send button
//           color: '#ffffff',            // White icon
//         }
//       }
//     });
    
//     return chat;
//   } catch (error) {
//     console.error('Error initializing n8n chat:', error);
//     return null;
//   }
// }

// // Initialize the chat right away if this file is imported
// let chatInstance = null;
// export function getChatInstance() {
//   if (!chatInstance) {
//     chatInstance = initializeN8nChat();
//   }
//   return chatInstance;
// }