/* eslint-disable */

// src/components/ChatbotWidget.jsx
import React, { useState, useEffect, useRef } from "react";
import { createChat } from "@n8n/chat";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatInstanceRef = useRef(null);
  const chatContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const sessionIdRef = useRef(
    localStorage.getItem("faqtor-chat-session") || crypto.randomUUID()
  );

  // Generate and store a session ID if not present
  useEffect(() => {
    if (!localStorage.getItem("faqtor-chat-session")) {
      localStorage.setItem("faqtor-chat-session", sessionIdRef.current);
    }
  }, []);

  // This effect will completely remove any n8n chat elements
  useEffect(() => {
    // Function to remove ALL n8n chat elements that might appear
    const removeN8nElements = () => {
      // Target all potential n8n elements including buttons, chat windows, etc.
      const n8nSelectors = [
        ".n8n-chat-bubble",
        ".n8n-chat",
        ".n8n-chat-window",
        ".chat-popup",
        '[id^="n8n-chat"]', // Any ID starting with n8n-chat
        '[class^="n8n-"]', // Any class starting with n8n-
      ];

      const selector = n8nSelectors.join(", ");
      const n8nElements = document.querySelectorAll(selector);

      n8nElements.forEach((element) => {
        if (element.id !== "hidden-n8n-container") {
          element.style.display = "none";
          // Try to remove if possible
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }
      });

      // Also add CSS to prevent any new n8n elements from showing
      if (!document.getElementById("n8n-blocker-style")) {
        const style = document.createElement("style");
        style.id = "n8n-blocker-style";
        style.innerHTML = `
          .n8n-chat-bubble, .n8n-chat-popup, .n8n-chat-window, [class^="n8n-"]:not(#hidden-n8n-container) {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Run initially and set up an observer to detect when new elements are added
    removeN8nElements();

    // Set up a MutationObserver with stronger detection
    const observer = new MutationObserver((mutations) => {
      let shouldCheck = false;

      for (const mutation of mutations) {
        if (
          mutation.addedNodes.length ||
          (mutation.type === "attributes" &&
            mutation.target.classList &&
            Array.from(mutation.target.classList).some((c) =>
              c.includes("n8n")
            ))
        ) {
          shouldCheck = true;
          break;
        }
      }

      if (shouldCheck) {
        removeN8nElements();
      }
    });

    // Start observing the document body for changes with comprehensive options
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style", "id"],
    });

    // Clean up the observer when component unmounts
    return () => {
      observer.disconnect();
      const style = document.getElementById("n8n-blocker-style");
      if (style) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Create a direct communication method with n8n instead of relying on their UI
  useEffect(() => {
    // Create a global handler to intercept any n8n attempts to modify the DOM
    const originalCreateElement = document.createElement.bind(document);
    document.createElement = function (tagName) {
      const element = originalCreateElement(tagName);

      // Add a hook to detect if this element will be used by n8n
      element.addEventListener(
        "DOMNodeInserted",
        function (e) {
          if (
            this.className &&
            typeof this.className === "string" &&
            (this.className.includes("n8n") ||
              (this.id && this.id.includes("n8n")))
          ) {
            if (this.id !== "hidden-n8n-container") {
              // Hide n8n-related elements immediately
              this.style.display = "none";
              this.style.visibility = "hidden";
              this.style.opacity = "0";
              this.style.pointerEvents = "none";
            }
          }
        },
        { once: true }
      );

      return element;
    };

    // Clean up
    return () => {
      // Restore original document.createElement
      document.createElement = originalCreateElement;
    };
  }, []);

  // Initialize the chat when the component mounts or when isOpen changes
  useEffect(() => {
    if (isOpen && !chatInstanceRef.current) {
      initializeChat();
    }

    // Cleanup when component unmounts or closes
    return () => {
      if (
        !isOpen &&
        chatInstanceRef.current &&
        typeof chatInstanceRef.current.destroy === "function"
      ) {
        try {
          chatInstanceRef.current.destroy();
        } catch (e) {
          console.error("Error destroying chat instance:", e);
        }
        chatInstanceRef.current = null;
      }
    };
  }, [isOpen]);

  // Add initial welcome messages when chat opens for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { type: "bot", content: "Welcome to Faqtor!" },
        { type: "bot", content: "This is Max. How can I assist you today?" },
      ]);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const initializeChat = () => {
    try {
      // First, ensure any existing n8n chat instances are properly removed
      const existingChats = document.querySelectorAll(
        '.n8n-chat, [id^="n8n-chat"]'
      );
      existingChats.forEach((chat) => {
        if (chat.id !== "hidden-n8n-container") {
          if (chat.parentNode) {
            chat.parentNode.removeChild(chat);
          }
        }
      });

      // Create a specific hidden container if it doesn't exist
      let hiddenContainer = document.getElementById("hidden-n8n-container");
      if (!hiddenContainer) {
        hiddenContainer = document.createElement("div");
        hiddenContainer.id = "hidden-n8n-container";
        hiddenContainer.style.position = "absolute";
        hiddenContainer.style.visibility = "hidden";
        hiddenContainer.style.opacity = "0";
        hiddenContainer.style.height = "0";
        hiddenContainer.style.width = "0";
        hiddenContainer.style.overflow = "hidden";
        hiddenContainer.style.pointerEvents = "none";
        document.body.appendChild(hiddenContainer);
      }

      // Create the n8n chat with hidden elements that we'll use as a backend
      const chat = createChat({
        metadata: {},
        mode: "inline", // Critical: This prevents the floating button
        target: "#hidden-n8n-container", // Target a hidden container
        defaultLanguage: "en",
        showWelcomeScreen: false,
        chatInputKey: "chatInput",
        chatSessionKey: "sessionId",
        webhookConfig: { headers: {}, method: "POST" },
        webhookUrl:
          "https://n8n.softtik.com/webhook/9c494346-6972-4f49-a50f-3631792000ac/chat",
        // Disable any auto-popup behavior
        autoPopup: false,
        // Prevent the chat from creating its own button
        showChatButton: false,
        // Disable all UI elements
        styles: {
          chatWindow:
            "display: none !important; visibility: hidden !important;",
          iframe: "display: none !important; visibility: hidden !important;",
          container: "display: none !important; visibility: hidden !important;",
          button: "display: none !important; visibility: hidden !important;",
        },
        // Event listeners to capture messages and responses
        onMessage: (message) => {
          console.log("Message sent:", message);
          // Make sure user messages appear in the UI
          if (message && message.text) {
            // Only add if not already in messages array (to avoid duplicates)
            const messageExists = messages.some(
              (m) => m.type === "user" && m.content === message.text
            );

            if (!messageExists) {
              setMessages((prev) => [
                ...prev,
                { type: "user", content: message.text },
              ]);
            }
          }
        },
        onResponse: (response) => {
          console.log("Response received:", response);
          setIsLoading(false);
          if (response) {
            // Handle different response formats
            if (response.text) {
              setMessages((prev) => [
                ...prev,
                { type: "bot", content: response.text },
              ]);
            } else if (response.output) {
              setMessages((prev) => [
                ...prev,
                { type: "bot", content: response.output },
              ]);
            } else if (typeof response === "string") {
              setMessages((prev) => [
                ...prev,
                { type: "bot", content: response },
              ]);
            }
          }
        },

        // Override methods that might create UI elements
        overrideCreateElements: true,
      });

      chatInstanceRef.current = chat;

      // Add an extra measure to hide any elements that might still appear
      setTimeout(() => {
        const n8nElements = document.querySelectorAll(
          ".n8n-chat-bubble, .n8n-chat, .n8n-chat-window"
        );
        n8nElements.forEach((element) => {
          if (element.id !== "hidden-n8n-container") {
            element.style.display = "none";
          }
        });
      }, 100);
    } catch (error) {
      console.error("Error initializing chat:", error);
    }
  };

  // Direct webhook integration as backup in case n8n instance isn't working properly
  // Modify your sendMessageDirectly function to better handle responses
  const sendMessageDirectly = async (text) => {
    try {
      setIsLoading(true);

      // Try to use n8n instance first if available
      if (
        chatInstanceRef.current &&
        typeof chatInstanceRef.current.sendMessage === "function"
      ) {
        chatInstanceRef.current.sendMessage(text);
        return;
      }

      // Fallback to direct webhook call with the COMPLETE payload structure
      const response = await fetch(
        "https://n8n.softtik.com/webhook/9c494346-6972-4f49-a50f-3631792000ac/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "sendMessage", // Added action field
            chatInput: text,
            sessionId: sessionIdRef.current,
            metadata: {}, // Added empty metadata object
          }),
        }
      );

      const data = await response.json();
      console.log("Direct webhook response:", data); // Log full response structure

      setIsLoading(false);

      // Handle different possible response formats
      if (data) {
        if (data.text) {
          setMessages((prev) => [...prev, { type: "bot", content: data.text }]);
        } else if (data.output) {
          setMessages((prev) => [
            ...prev,
            { type: "bot", content: data.output },
          ]);
        } else if (data.message) {
          setMessages((prev) => [
            ...prev,
            { type: "bot", content: data.message },
          ]);
        } else if (typeof data === "string") {
          setMessages((prev) => [...prev, { type: "bot", content: data }]);
        } else {
          // If we can't interpret the response, show it as JSON
          setMessages((prev) => [
            ...prev,
            {
              type: "bot",
              content: "Received response: " + JSON.stringify(data),
            },
          ]);
        }
      }
    } catch (error) {
      console.error("Error sending message directly:", error);
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content:
            "I'm sorry, I'm having trouble connecting. Please try again later.",
        },
      ]);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // Add user message to our UI
    setMessages((prev) => [...prev, { type: "user", content: inputValue }]);
    setIsLoading(true);

    // Send message through n8n or direct webhook
    if (
      chatInstanceRef.current &&
      typeof chatInstanceRef.current.sendMessage === "function"
    ) {
      try {
        chatInstanceRef.current.sendMessage(inputValue);
      } catch (error) {
        console.error("Error using n8n sendMessage:", error);
        sendMessageDirectly(inputValue);
      }
    } else {
      sendMessageDirectly(inputValue);
    }

    setInputValue("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div
          className="chat-window bg-white rounded-lg shadow-xl w-80 md:w-96 h-96 flex flex-col overflow-hidden border-2"
          style={{
            borderColor: "#DAF7A6",
          }}
        >
          {/* Chat Header */}
          <div
            className="p-3 text-white flex justify-between items-center neon-header"
            style={{
              background: `linear-gradient(135deg, #DAF7A6, #a8e666)`,
              color: "#000",
              textShadow: "0 0 10px #DAF7A6",
            }}
          >
            <div className="flex items-center">
              <div
                className="rounded-full p-1 mr-2"
                style={{
                  backgroundColor: "#000",
                  boxShadow: "0 0 10px #DAF7A6",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  style={{ color: "#DAF7A6" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="font-bold neon-text" style={{ color: "#000" }}>
                Chat with Max
              </h3>
            </div>
            <button
              onClick={toggleChat}
              className="hover:bg-black hover:bg-opacity-20 rounded-full p-1"
              style={{ color: "#000" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div
            className="flex-1 overflow-y-auto p-4"
            style={{ backgroundColor: "#f8fdf0" }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 message-animation ${
                  message.type === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-3/4 ${
                    message.type === "user"
                      ? "rounded-br-none"
                      : "rounded-bl-none"
                  }`}
                  style={{
                    backgroundColor:
                      message.type === "user" ? "#DAF7A6" : "#e8f5d0",
                    color: "#000",
                    border: `1px solid #DAF7A6`,
                  }}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div
                  className="px-4 py-2 rounded-lg rounded-bl-none flex items-center"
                  style={{
                    backgroundColor: "#e8f5d0",
                    border: `1px solid #DAF7A6`,
                  }}
                >
                  <div className="dot-typing"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t-2 p-3 flex"
            style={{ borderColor: "#DAF7A6" }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your question..."
              className="flex-1 border-2 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2"
              style={{
                borderColor: "#DAF7A6",
                backgroundColor: "#f8fdf0",
                color: "#000",
                focusRingColor: "#DAF7A6",
              }}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-r-lg focus:outline-none hover:opacity-80 transition-all duration-200"
              style={{
                backgroundColor: "#DAF7A6",
                color: "#000",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      ) : (
        <div className="relative">
          {/* Animated "Any Questions?" cloud */}
          <div
            className="question-cloud absolute -top-16 -left-8 bg-white px-2 py-4 rounded-full shadow-lg border-2"
            style={{
              borderColor: "#DAF7A6",
              backgroundColor: "#f8fdf0",
            }}
          >
            <span
              style={{ color: "#000", fontSize: "14px", fontWeight: "bold" }}
            >
              Ask Me
            </span>
            {/* Speech bubble tail */}
            <div
              className="cloud-tail absolute top-full left-1/2 transform -translate-x-1/2"
              style={{
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid #DAF7A6",
              }}
            >
              <div
                className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: "6px solid #f8fdf0",
                }}
              ></div>
            </div>
          </div>

          <button
            onClick={toggleChat}
            className="chat-button p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
            style={{
              backgroundColor: "#DAF7A6",
              color: "#000",
              boxShadow: "0 0 20px #DAF7A6, 0 0 40px #DAF7A6",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </button>
        </div>
      )}

      {/* CSS for animations and styling */}
      <style jsx>{`
        .chat-button {
          animation: vibrate 2s infinite;
        }

        .chat-button:hover {
          animation: pulse 1s infinite;
        }

        .chat-window {
          animation: slideIn 0.3s ease-out;
        }

        .message-animation {
          animation: messageSlide 0.3s ease-out;
        }

        .question-cloud {
          animation: float 3s ease-in-out infinite,
            fadeInOut 4s ease-in-out infinite;
        }

        .neon-text {
          text-shadow: 0 0 5px #daf7a6, 0 0 10px #daf7a6, 0 0 15px #daf7a6;
        }

        .neon-header {
          box-shadow: inset 0 0 10px rgba(218, 247, 166, 0.3),
            0 0 20px rgba(218, 247, 166, 0.5);
        }

        @keyframes vibrate {
          0%,
          100% {
            transform: translateX(0);
          }
          10% {
            transform: translateX(-2px) rotate(-1deg);
          }
          20% {
            transform: translateX(2px) rotate(1deg);
          }
          30% {
            transform: translateX(-2px) rotate(-1deg);
          }
          40% {
            transform: translateX(2px) rotate(1deg);
          }
          50% {
            transform: translateX(-1px) rotate(-0.5deg);
          }
          60% {
            transform: translateX(1px) rotate(0.5deg);
          }
          70% {
            transform: translateX(-1px) rotate(-0.5deg);
          }
          80% {
            transform: translateX(1px) rotate(0.5deg);
          }
          90% {
            transform: translateX(0) rotate(0deg);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 20px #daf7a6, 0 0 40px #daf7a6;
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 30px #daf7a6, 0 0 60px #daf7a6, 0 0 80px #daf7a6;
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 20px #daf7a6, 0 0 40px #daf7a6;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(20px) scale(0.9);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes messageSlide {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .dot-typing {
          position: relative;
          left: -9999px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #daf7a6;
          color: #daf7a6;
          box-shadow: 9984px 0 0 0 #daf7a6, 9999px 0 0 0 #daf7a6,
            10014px 0 0 0 #daf7a6;
          animation: dot-typing 1.5s infinite linear;
        }

        @keyframes dot-typing {
          0% {
            box-shadow: 9984px 0 0 0 #daf7a6, 9999px 0 0 0 #daf7a6,
              10014px 0 0 0 #daf7a6;
          }
          16.667% {
            box-shadow: 9984px -5px 0 0 #daf7a6, 9999px 0 0 0 #daf7a6,
              10014px 0 0 0 #daf7a6;
          }
          33.333% {
            box-shadow: 9984px 0 0 0 #daf7a6, 9999px 0 0 0 #daf7a6,
              10014px 0 0 0 #daf7a6;
          }
          50% {
            box-shadow: 9984px 0 0 0 #daf7a6, 9999px -5px 0 0 #daf7a6,
              10014px 0 0 0 #daf7a6;
          }
          66.667% {
            box-shadow: 9984px 0 0 0 #daf7a6, 9999px 0 0 0 #daf7a6,
              10014px 0 0 0 #daf7a6;
          }
          83.333% {
            box-shadow: 9984px 0 0 0 #daf7a6, 9999px 0 0 0 #daf7a6,
              10014px -5px 0 0 #daf7a6;
          }
          100% {
            box-shadow: 9984px 0 0 0 #daf7a6, 9999px 0 0 0 #daf7a6,
              10014px 0 0 0 #daf7a6;
          }
        }
      `}</style>

      {/* Hidden container for n8n chat to operate in the background */}
      <div
        id="hidden-n8n-container"
        ref={chatContainerRef}
        className="hidden"
        style={{
          display: "none",
          position: "absolute",
          visibility: "hidden",
          opacity: 0,
          height: 0,
          width: 0,
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default ChatbotWidget;
