/* eslint-disable import/extensions */
/* eslint-disable */

// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Analytic from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";

// Portfolio Img Imports (reusing existing images for AI projects)
import Recruiting from "../assets/images/Portfolio/calling.jpg";
import Stream from "../assets/images/Portfolio/calling2.jpg";
import chatbot from "../assets/images/Portfolio/chatbot.jpg";
import Freelance from "../assets/images/Portfolio/calling3.jpg";
import BrianKarshAutomation from "../assets/images/Portfolio/BrianAutomation.jpg";
import BrianKarshMain from "../assets/images/Portfolio/BrianKarshMain.jpg";
import ArkFoods from "../assets/images/Portfolio/ArkFoodMain.jpg";
import ArkFoodAnalytics from "../assets/images/Portfolio/ArkFoodsAnalytics.jpg";
import Aura from "../assets/images/Portfolio/Aura.png";
import marketingagent from "../assets/images/Portfolio/marketingagent.png";
import socialmedia from "../assets/images/Portfolio/social.jpg";
// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// Testimonials
import Sasha from "../assets/images/Testimonials/Sasha.jpg";
import Reiner from "../assets/images/Testimonials/Reiner.jpg";
import Kruger from "../assets/images/Testimonials/Kruger.jpg";

// TeamMembers
import CEO from "../assets/images/TeamMembers/CEO.jpg";
import HRD from "../assets/images/TeamMembers/HRD.jpg";
import Finance from "../assets/images/TeamMembers/Finance.jpg";

export const Services = [
  {
    title: 'Immersive Web Experience',
    imageUrl: Web,
    animation: "left",
  },
  {
    title: 'Data Analytics and Visualization',
    imageUrl: Analytic,
    animation: "up",
  },
  {
    title: 'Agentic AI Solutions',
    imageUrl: UIUX,
    animation: 'right',
  },
  {
    title: 'Intelligent Automation',
    imageUrl: UIUX,
    animation: 'right',
  }
];

export const Portfolios = [
  // AI Agent Projects (First 3 - Main Display)
  {
    id: "ai-calling-agent-001",
    title: "AI Calling Agent",
    imageUrl: Recruiting, // Main image for card display
    type: "AI Agent",
    status: "Production Ready",
    responsibility: [
      "Intelligent Call Routing",
      "Voice Recognition & Processing",
      "Automated Response System",
      "Real-time Analytics Dashboard",
    ],
    technologies: [
      "Python",
      "Speech Recognition",
      "NLP",
      "Twilio API",
      "FastAPI",
    ],
    description:
      "Advanced AI-powered calling system that handles customer inquiries with natural language processing, intelligent call routing, and automated responses. Features real-time analytics and seamless integration with existing business systems.",
    longDescription:
      "Our AI Calling Agent revolutionizes customer service by providing 24/7 intelligent call handling capabilities. The system uses advanced speech recognition and natural language processing to understand customer queries, provide accurate responses, and route calls to appropriate departments when needed. With machine learning algorithms, it continuously improves its responses based on interaction patterns and customer feedback.",
    features: [
      "24/7 Automated Call Handling",
      "Multi-language Support",
      "Sentiment Analysis",
      "Call Recording & Transcription",
      "CRM Integration",
      "Real-time Performance Metrics",
    ],
  },
  {
    id: "ai-chatbot-002",
    title: "Intelligent Chatbot",
    imageUrl: chatbot, // Main image for card display
    type: "AI Agent",
    status: "Demo Available",
    responsibility: [
      "Natural Language Understanding",
      "Context-Aware Conversations",
      "Multi-Platform Integration",
      "Custom Knowledge Base",
    ],
    technologies: ["Node.js", "OpenAI API", "React", "WebSocket", "MongoDB"],
    description:
      "Sophisticated chatbot with advanced NLP capabilities, context awareness, and seamless integration across multiple platforms including websites, social media, and messaging apps.",
    longDescription:
      "Our Intelligent Chatbot solution provides businesses with a powerful conversational AI that understands context, maintains conversation history, and delivers personalized responses. Built with cutting-edge NLP technology, it can handle complex queries, learn from interactions, and integrate with existing business workflows.",
    features: [
      "Context-Aware Conversations",
      "Multi-Platform Deployment",
      "Custom Knowledge Training",
      "Conversation Analytics",
      "Human Handoff Capability",
      "Multilingual Support",
    ],
  },
  {
    id: "web-apps-003",
    title: "Brian Karsh ",
    imageUrl: BrianKarshMain, // Main image for card display
    images: [BrianKarshMain, BrianKarshAutomation], // Multiple images for carousel
    type: "Web App",
    status: "Production Ready",
    responsibility: [
      "Communities Automation",
      "Real-time Data Processing",
      "Interactive User Interface",
      "Realtor Portfolio",
    ],
    technologies: ["React", "Python", "Google Console Storage", "Selenium"],
    description:
      "Collection of web applications enhanced with AI capabilities including predictive analytics, recommendation engines, and automated decision-making systems.",
    longDescription:
      "Our AI-Powered Web Applications combine traditional web development with cutting-edge artificial intelligence to create intelligent, responsive, and predictive user experiences. These applications learn from user behavior, provide personalized recommendations, and automate complex business processes.",
    features: [
      "Predictive Analytics",
      "Recommendation Systems",
      "Automated Workflows",
      "Real-time Decision Making",
      "User Behavior Analysis",
      "Custom AI Model Integration",
    ],
  },
  {
    id: "ark-foods-007",
    title: "Ark Foods",
    imageUrl: ArkFoods, // Main image for card display
    images: [ArkFoods, ArkFoodAnalytics], // Multiple images for carousel
    type: "Web App",
    status: "Production Ready",
    responsibility: [
      "Full-Stack Development",
      "UI/UX Design",
      "Payment Integration",
      "Real-time Order Tracking",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Socket.io"],
    description:
      "Modern food delivery platform with real-time order tracking, multiple payment options, and an intuitive user interface for seamless food ordering experience.",
    longDescription:
      "Ark Foods is a comprehensive food delivery platform that connects hungry customers with their favorite restaurants. Built with modern web technologies, it features real-time order tracking, secure payment processing, restaurant management tools, and an admin dashboard for complete platform oversight. The application ensures a smooth experience from order placement to delivery.",
    features: [
      "Real-time Order Tracking",
      "Multiple Payment Gateways",
      "Restaurant Management Portal",
      "Push Notifications",
      "Rating & Review System",
      "Admin Analytics Dashboard",
      "Mobile-Responsive Design",
      "Order History & Reordering",
    ],
  },


  

  // AI Agent Projects (Remaining 3 - Show More)
  {
    id: "ai-avatar-agent-004",
    title: "Avatar Agent System",
    imageUrl: Aura, // Main image for card display
    type: "AI Agent",
    status: "Demo Available",
    responsibility: [
      "3D Avatar Generation",
      "Personality Customization",
      "Voice Synthesis",
      "Emotional Intelligence",
    ],
    technologies: [
      "Three.js",
      "WebGL",
      "AI Voice Synthesis",
      "Machine Learning",
      "WebRTC",
    ],
    description:
      "Interactive AI avatars with customizable personalities, realistic animations, and voice synthesis for virtual customer service and digital assistance.",
    longDescription:
      "Our Avatar Agent System creates lifelike digital representatives that can interact with users through voice, text, and visual cues. These avatars are powered by advanced AI algorithms that enable them to understand emotions, respond appropriately, and maintain consistent personalities across interactions.",
    features: [
      "Realistic 3D Avatars",
      "Custom Personality Profiles",
      "Voice & Text Interaction",
      "Emotion Recognition",
      "Multi-language Support",
      "Brand Customization",
    ],
  },
  {
    id: "marketing-agent-005",
    title: "AI Marketing Agent",
    imageUrl: marketingagent, // Main image for card display
    type: "AI Agent",
    status: "Production Ready",
    responsibility: [
      "Campaign Optimization",
      "Audience Targeting",
      "Content Generation",
      "Performance Analytics",
    ],
    technologies: [
      "Python",
      "Google Ads API",
      "Facebook API",
      "Data Analytics",
      "Machine Learning",
    ],
    description:
      "Automated marketing system that optimizes campaigns, generates content, analyzes performance, and provides actionable insights for maximum ROI.",
    longDescription:
      "Our AI Marketing Agent automates and optimizes digital marketing campaigns across multiple platforms. It uses machine learning to analyze audience behavior, generate targeted content, optimize ad spending, and provide detailed performance insights to maximize marketing ROI.",
    features: [
      "Multi-Platform Campaign Management",
      "Automated Content Generation",
      "Audience Segmentation",
      "Budget Optimization",
      "Performance Tracking",
      "ROI Analysis",
    ],
  },
  {
    id: "social-media-posting-006",
    title: "Social Media Automation",
    imageUrl: socialmedia, // Main image for card display
    type: "Automation",
    status: "Production Ready",
    responsibility: [
      "Content Scheduling",
      "Multi-Platform Publishing",
      "Engagement Analytics",
      "Hashtag Optimization",
    ],
    technologies: [
      "Node.js",
      "Social Media APIs",
      "AI Content Generation",
      "MongoDB",
      "Redis",
    ],
    description:
      "Comprehensive social media management system with AI-powered content creation, optimal posting times, and engagement analytics across all major platforms.",
    longDescription:
      "Our Social Media Automation platform leverages AI to create, schedule, and optimize social media content across multiple platforms. It analyzes engagement patterns, suggests optimal posting times, generates relevant hashtags, and provides comprehensive analytics to improve social media presence.",
    features: [
      "AI Content Creation",
      "Multi-Platform Scheduling",
      "Optimal Timing Analysis",
      "Hashtag Generation",
      "Engagement Tracking",
      "Competitor Analysis",
    ],
  },

  // // Original Mobile Apps
  // {
  //   id: "asd1293uasdads1",
  //   title: "Recruiting App",
  //   imageUrl: Recruiting,
  //   type: "Mobile Apps",
  //   responsibility: ["Mobile Development", "UI/UX Design"],
  //   credit: "https://dribbble.com/shots/15164950-Recruiting-app",
  //   description:
  //     "Modern recruiting application with advanced filtering and matching capabilities.",
  // },
  // {
  //   id: "asd1293uhjkhkjh2",
  //   title: "Stream+",
  //   imageUrl: Stream,
  //   type: "Mobile Apps",
  //   responsibility: ["Mobile Development", "UI/UX Design"],
  //   credit: "https://dribbble.com/shots/15276430-Stream",
  //   description:
  //     "Streaming platform with personalized content recommendations.",
  // },
  // {
  //   id: "asd1293uvbvcbbd3",
  //   title: "Freelance",
  //   imageUrl: Freelance,
  //   type: "Mobile Apps",
  //   responsibility: ["Mobile Development", "UI/UX Design"],
  //   credit: "https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept",
  //   description:
  //     "Freelance marketplace application connecting clients with talented professionals.",
  // },

  // // Original Website Projects
  // {
  //   id: "asd1293ufgdfgs4",
  //   title: "Aura",
  //   imageUrl: Aura,
  //   type: "Website",
  //   responsibility: ["Web Development", "UI/UX Design"],
  //   credit: "https://dribbble.com/shots/15176338-Aura-Website-Main-Page",
  //   description:
  //     "Modern business website with elegant design and smooth animations.",
  // },
  // {
  //   id: "asd1293ulkmnbj6",
  //   title: "Courses Management",
  //   imageUrl: ManagementApp,
  //   type: "Website",
  //   responsibility: ["Web Development", "UI/UX Design"],
  //   credit:
  //     "https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App",
  //   description:
  //     "Comprehensive learning management system for educational institutions.",
  // },
];

export const Advantages = [
  [
    {
      title: "Communicative",
      description:
        "We communicate our project ideas and progress to make it clear.",
      imageUrl: Communicative,
    },
    {
      title: "Management",
      description:
        "We manage our project properly to make our project done well.",
      imageUrl: Management,
    },
  ],
  [
    {
      title: "Collaborative​",
      description:
        "Our team are very collaborative to make our project done well.",
      imageUrl: Collaborative,
    },
    {
      title: "Favorite",
      description: "We've did so many project and all of our client love it.",
      imageUrl: Favorite,
    },
  ],
];

export const Testimonials = [
  {
    id: 1,
    name: "Sasha Rose",
    company: "Owner, Surveyor Corps",
    testimoni:
      "Thanks for Faqtor, you guys are the best! Keep up the great work!",
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: "Kruger Khan",
    company: "Director, Shultan Oil",
    testimoni:
      "I just wanted to let you know that it's been great working with Faqtor.",
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: "Reiner John",
    company: "CEO, Marley CO",
    testimoni: "Faqtor is so great. Thank you so much for a job well done.",
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: "Asad ullah",
    position: "Full Stack Web developer",
    experience: "2 Years",
    imageUrl: CEO,
  },
  {
    name: "Sufian Kamran",
    position: "Full Stack Web developer",
    experience: "3 Years",
    imageUrl: HRD,
  },
  {
    name: "Ali Raza",
    position: "Full Stack Web developer",
    experience: "1.5 Years",
    imageUrl: Finance,
  },
];
