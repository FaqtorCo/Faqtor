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

// RetainIQ Img Imports
import RetainIQLanding from "../assets/images/Portfolio/RetainIQLanding.png";
import RetainIQDashboard from "../assets/images/Portfolio/RetainIQDashboard.png";
import RetainIQRecover from "../assets/images/Portfolio/RetainIQRecover.png";
import RetainIQRetain from "../assets/images/Portfolio/RetainIQRetain.png";
import RetainIQCampaigns from "../assets/images/Portfolio/RetainIQCampaigns.png";

// Cloudax Img Imports
import CloudaxLanding from "../assets/images/Portfolio/CloudaxLanding.png";
import CloudaxDashboard from "../assets/images/Portfolio/CloudaxDashboard.png";
import CloudaxChatbot from "../assets/images/Portfolio/CloudaxChatbot.png";
import CloudaxCallingAgent from "../assets/images/Portfolio/CloudaxCallingAgent.png";
import CloudaxKnowledgeBase from "../assets/images/Portfolio/CloudaxKnowledgeBase.png";

// Visa123 Img Imports
import Visa123Main from "../assets/images/Portfolio/VISA123.png";
import Visa123Application from "../assets/images/Portfolio/visa123-1.png";
import Visa123Checkout from "../assets/images/Portfolio/visa123-2.png";
import Visa123Products from "../assets/images/Portfolio/visa123-3.png";
import Visa123Nationalities from "../assets/images/Portfolio/visa123-4.png";
import Visa123SalesBoard from "../assets/images/Portfolio/visa123-5.png";

// Accez Img Imports
import AccezDashboard from "../assets/images/Portfolio/accez-1.png";
import AccezProperties from "../assets/images/Portfolio/accez-2.png";
import AccezCalendar from "../assets/images/Portfolio/accez-3.png";
import AccezChannels from "../assets/images/Portfolio/accez-4.png";
import AccezEmailTemplates from "../assets/images/Portfolio/accez-5.png";
import AccezServices from "../assets/images/Portfolio/accez-6.png";
import AccezPayouts from "../assets/images/Portfolio/accez-7.png";
import AccezResidentHome from "../assets/images/Portfolio/accez-8.png";
import AccezResidentBooking from "../assets/images/Portfolio/accez-9.png";
import AccezMyBookings from "../assets/images/Portfolio/accez-10.png";
import AccezServiceBooking from "../assets/images/Portfolio/accez-13.png";

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
    title: "Immersive Web Experience",
    imageUrl: Web,
    animation: "left",
  },
  {
    title: "Data Analytics and Visualization",
    imageUrl: Analytic,
    animation: "up",
  },
  {
    title: "Agentic AI Solutions",
    imageUrl: UIUX,
    animation: "right",
  },
  {
    title: "Intelligent Automation",
    imageUrl: UIUX,
    animation: "right",
  },
];

export const Portfolios = [
  // Featured Projects (First 3 - Main Display)
  // SaaS Platforms
  {
    id: "retainiq-008",
    title: "RetainIQ",
    imageUrl: RetainIQLanding,
    images: [RetainIQLanding, RetainIQDashboard, RetainIQRecover, RetainIQRetain, RetainIQCampaigns],
    type: "Web App",
    status: "Production Ready",
    responsibility: [
      "AI-Powered Churn Prediction",
      "Automated Payment Recovery",
      "Customer Reactivation Workflows",
      "GPT-Driven Campaign Engine",
    ],
    technologies: [
      "React",
      "Python",
      "Stripe",
      "Pipedream",
      "LightGBM",
      "GPT",
      "Zapier",
    ],
    description:
      "A complete AI-powered customer retention suite with four integrated modules  Recover, Reactivate, Retain, and Campaigns  that work together to reduce churn, recover failed payments, and boost lifetime value through ML predictions and automated outreach.",
    longDescription:
      "RetainIQ is an end-to-end retention platform built around a LightGBM churn prediction model. The Recover module integrates with Stripe to automatically detect failed payments and email recovery links via Pipedream workflows. Reactivate identifies dormant customers through activity scoring and queues targeted re-engagement emails. Retain provides cohort analysis, risk distribution, engagement scoring, and GPT-generated business insights. Campaigns ties it all together with AI-suggested, segment-targeted campaigns deployable through Mailchimp, Gmail, or WhatsApp via Zapier.",
    modules: [
      {
        title: "Landing",
        description: "Landing page of RetainIQ contains all the information about what to expect once inside the web application. It contains 4 modules: Recover, Reactivate, Retain and Campaigns.",
      },
      {
        title: "Dashboard",
        description: "Dynamic dashboard that summarises all the modules working in proper sync. Shows the Machine Learning model (LightGBM) with all the predictions made. You can see the recent recoveries and reactivations, with a comparison of all the modules. Includes a smart action suggestion system powered by GPT, which observes the dashboard and suggests based on it.",
      },
      {
        title: "Recover Module",
        description: "A highly technical module that works with Stripe + Pipedream (automation). Uses Stripe Express with connected accounts for a platform fee. Failed payments are routed via the web application  if a failed payment is detected, it will show up and automatically a fee link will be emailed to the customer. Once they pay, it will be recovered and a confirmation email is sent. Stripe is handled by Stripe itself, and no sensitive information is saved in the database.",
      },
      {
        title: "Retain Module",
        description: "The heart of RetainIQ  uses a prediction system as well as a churn prediction system where we use the Machine Learning model (LightGBM) trained on the Telcom IBM dataset, and predict customer trends based on it. Users can use the KPIs to make suggestions. Includes a variety of metrics: cohort analysis, GPT-based insights (technical + business). You can also choose each file individually to check analysis separately and see which feature dominates the most.",
      },
      {
        title: "Campaigns",
        description: "Once the churn test and prediction is made, Campaigns is the final step. You can choose campaigns generated by GPT, which are targeted specifically for each customer type, or create your own and send them to customers via a Zapier workflow for Mailchimp or Gmail directly. WhatsApp is also an option  a very powerful tool for churn retention.",
      },
    ],
    features: [
      "ML Churn Prediction (LightGBM)",
      "Stripe Payment Recovery Automation",
      "Dormant Customer Reactivation",
      "Cohort Retention Analysis",
      "GPT Business & Technical Insights",
      "AI-Generated Targeted Campaigns",
      "Multi-Channel Outreach (Email, WhatsApp)",
      "Real-time KPI Dashboard",
    ],
  },
  {
    id: "cloudax-009",
    title: "Cloudax",
    imageUrl: CloudaxLanding,
    images: [CloudaxLanding, CloudaxDashboard, CloudaxChatbot, CloudaxCallingAgent, CloudaxKnowledgeBase],
    type: "Web App",
    status: "Production Ready",
    responsibility: [
      "AI Chatbot with RAG",
      "Intelligent Calling Agent",
      "Knowledge Base Management",
      "Real-time Analytics Dashboard",
    ],
    technologies: [
      "React",
      "Node.js",
      "OpenAI",
      "ElevenLabs",
      "Deepgram",
      "RAG",
      "WebSocket",
    ],
    description:
      "An enterprise contact center platform featuring an AI chatbot with RAG capabilities, an intelligent 24/7 calling agent, and a knowledge base system  all managed from a unified dark-themed dashboard with real-time analytics.",
    longDescription:
      "Cloudax is a full-stack AI-powered contact center solution. It provides businesses with a RAG-based chatbot that stays grounded in their uploaded knowledge base, an intelligent calling agent configurable across 15+ industries with custom voice and personality settings, and embeddable chat widgets for seamless website integration. The platform includes usage analytics, training assistant management, and a 10-step calling agent setup wizard covering industry selection, templates, business profiles, integrations, and more.",
    modules: [
      {
        title: "Landing",
        description: "The Cloudax landing page showcases the enterprise contact centre solutions  automated outbound campaigns and intelligent inbound solutions. Handles thousands of calls daily with 99.99% uptime and 24/7 support.",
      },
      {
        title: "Dashboard",
        description: "Dynamic Dashboard with analytics for each separate bucket of users and the AI bots. Includes overview and analytics tabs, usage metrics tracking OpenAI 4o-mini, ElevenLabs Voice, and Deepgram usage, along with active assistant counts, user stats, agent events, and monthly cost tracking.",
      },
      {
        title: "Chatbot + iFrame",
        description: "Chatbot with RAG capabilities that can be designed and deployed according to your need. Smart use of RAG with your Business Knowledge Base that will work inside that boundary. Deployable as an embeddable iFrame widget on any website with suggested questions and multi-mode support (Chat, Voice, Files).",
      },
      {
        title: "Calling Agent",
        description: "Simple yet highly intelligent Calling Agent that is available 24/7 and will book any query accordingly. Easy to set up with a 10-step wizard covering industry selection (15+ industries), templates, business profile, industry questions, knowledge base, integrations, call settings, personality, and review. Fully configurable with custom AI instructions, voice selection, and authentication settings.",
      },
      {
        title: "RAG Knowledge Base",
        description: "Add any PDF of your business niche and use that inside your chatbot OR calling agent. It will work accordingly and will not deviate from the said Knowledge Base. Supports document upload, status tracking, and seamless integration with all AI assistants on the platform.",
      },
    ],
    features: [
      "RAG-Powered Chatbot",
      "24/7 AI Calling Agent",
      "Embeddable Chat Widget (iFrame)",
      "PDF Knowledge Base Upload",
      "15+ Industry Templates",
      "Voice Selection & Personality Config",
      "Training Assistant Management",
      "Usage Metrics & Analytics Dashboard",
    ],
  },

  {
    id: "visa123-010",
    title: "Visa123",
    imageUrl: Visa123Main,
    images: [Visa123Application, Visa123Checkout, Visa123Products, Visa123Nationalities, Visa123SalesBoard],
    type: "Web App",
    status: "Production Ready",
    responsibility: [
      "Customer Visa Application Portal",
      "Admin Product & Nationality Management",
      "Sales Kanban & Lead Recovery",
      "Payment Processing & Analytics",
    ],
    technologies: [
      "Nuxt",
      "Nest",
      "Stripe",
      "PostgreSQL",
      "WhatsApp API",
      "Email Automation",
    ],
    description:
      "A full scale visa processing platform with two interconnected applications a customer facing portal for nationality based visa discovery, multi-step applications, and secure checkout, paired with a comprehensive admin panel for managing visa products, nationalities, sales pipelines, abandoned application recovery, and financial analytics.",
    longDescription:
      "Visa123 is an end-to-end visa processing ecosystem designed to streamline the entire journey from visa discovery to issuance. The customer application guides users through nationality selection, dynamically displays eligible visa products with pricing (government fee + service fee), and walks them through a 4-step checkout flow. The admin panel provides full control over visa products across 15+ countries, nationality-to-product pairing with custom pricing and validity rules, a Kanban style sales board for tracking leads from first contact to conversion, automated follow-up emails for abandoned applications, and a finance dashboard for revenue and payment analytics.",
    modules: [
      {
        title: "Visa Application Portal",
        description: "The customer facing application where users begin their visa journey. Users select their nationality and the platform dynamically displays all eligible visa products for their destination  including visa type, validity period, number of entries, and max stay duration. The form captures applicant count and email for real-time application updates. Supports multi-currency pricing (PKR, USD) and WhatsApp live chat for instant support.",
      },
      {
        title: "Checkout & Payments",
        description: "A guided 4-step checkout flow (Trip Info → Your Info → Checkout → Review) that presents a transparent pricing breakdown with government fees and service fees calculated per traveler. Includes coupon code support for promotional discounts, secure payment processing via Stripe, and order confirmation with visa details including validity, max stay, and entry type. All sensitive payment data is handled by Stripe  no card information touches the application servers.",
      },
      {
        title: "Admin  Visa Products",
        description: "The central product management hub where administrators control the entire visa catalog. Products are organized by country with at-a-glance product counts (e.g., China: 22, Turkey: 11, India: 11). The sidebar provides access to Countries, Visa Products, Nationalities, Embassies, Coupons, Additional Info, Form Builder, Guides, Customer Management, Applications, Sales Board, Finances, Settings, and User roles  making it a complete back-office for visa operations.",
      },
      {
        title: "Nationality & Product Pairing",
        description: "A granular configuration system that maps nationality-to-destination pairs with specific visa products. For example, 'Afghanistan to Canada' shows all available visa options (ETA Multiple Entry, 10-Year Multiple Entry, Visit Visa Single Entry) each with its own duration, validity period, and USD pricing. Administrators can edit individual product rules, add new pairings, and manage pricing  ensuring customers always see accurate, up-to-date visa options for their specific nationality.",
      },
      {
        title: "Sales Board & Lead Recovery",
        description: "A Kanban style pipeline that tracks every visa application from initial contact to conversion across four stages: New Leads, Contacted, Follow-up, and Converted. Each card shows the application number, applicant email, form completion progress (step tracker), origin-to-destination route, visa type, pricing, and submission date. Agents can email or contact applicants directly from the board. Automated follow-up emails are triggered for clients who abandoned the application mid-form  recovering lost revenue and improving conversion rates.",
      },
    ],
    features: [
      "Nationality Based Visa Discovery",
      "Dynamic Pricing (Gov Fee + Service Fee)",
      "4-Step Guided Checkout Flow",
      "Stripe Payment Processing",
      "15+ Country Visa Catalog",
      "Kanban Sales Pipeline",
      "Abandoned Application Email Recovery",
      "Multi-Currency Support (PKR, USD)",
      "Coupon & Discount System",
      "WhatsApp Live Chat Integration",
      "Role-Based Admin Access",
      "Payment & Revenue Analytics",
    ],
  },

  {
    id: "accez-011",
    title: "Accez",
    imageUrl: AccezDashboard,
    images: [AccezDashboard, AccezProperties, AccezCalendar, AccezChannels, AccezEmailTemplates, AccezServices, AccezPayouts, AccezResidentHome, AccezResidentBooking, AccezMyBookings, AccezServiceBooking],
    type: "Web App",
    status: "Production Ready",
    responsibility: [
      "Property & Unit Management System",
      "Channel Manager Integration (Airbnb, Booking.com)",
      "Resident Portal & Self-Service App",
      "Payout & Owner Revenue Distribution",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Channel API",
      "WebSockets",
    ],
    description:
      "A full-scale property management system with an integrated resident app. Managers create properties, units, and services, sync availability across channels like Airbnb and Booking.com, manage reservations and check-ins, and distribute payouts to property owners with custom percentage splits.",
    longDescription:
      "Accez is a comprehensive property management ecosystem built for hospitality operators and property managers. The platform consists of two interconnected applications: a manager dashboard for end-to-end property operations, and a resident-facing portal for self-service bookings, check-ins, and service requests. Managers onboard by creating their company account, then build out their portfolio with properties, units, and configurable services like laundry or maintenance. The channel manager syncs unit availability in real-time with OTAs including Airbnb, Booking.com, Agoda, and Expedia — ensuring calendars stay synchronized and double-bookings are eliminated. Reservations flow through a unified calendar with per-unit pricing visibility. The payout system supports multi-currency withdrawals with owner percentage splits, so revenue is automatically distributed according to pre-configured ownership agreements. On the resident side, guests can browse available units, book rooms with transparent per-night pricing, reserve time-based services, complete self-service check-in, submit maintenance requests, and manage all their bookings from a single portal. The platform also includes a fully customizable email template engine for automated communications across reservation confirmations, payment reminders, check-in notifications, and service updates.",
    modules: [
      {
        title: "Dashboard Overview",
        description: "The central command center for property managers, presenting a real-time snapshot of the entire portfolio. Displays key performance indicators including total properties, occupied units, cumulative revenue, monthly check-ins, and active services — each with trend percentages. Below the KPIs, two live feeds show upcoming room reservations with guest details, unit assignments, dates, and pricing alongside recent service reservations with confirmation statuses, giving managers instant visibility into daily operations.",
      },
      {
        title: "Property Management",
        description: "A visual property portfolio where managers create and organize their properties. Each property is displayed as a card with its cover image, location, resident count, and unit count. Properties can be filtered by status — All, Published, or Draft — allowing managers to stage new listings before going live. Adding a new property kicks off the onboarding flow where managers configure the property details, upload images, and set up the resident-facing portal link.",
      },
      {
        title: "Unit Calendar & Reservations",
        description: "A powerful monthly calendar view that provides per-unit availability and pricing at a glance. Managers can view individual units or all units simultaneously, with daily rate overlays showing pricing for each date. The calendar integrates directly with the channel sync system — color-coded entries indicate reservation sources. Action buttons for Sync Channels, Bulk Update, Export, and Import sit above the calendar, enabling efficient multi-unit operations. Reservations can be created directly from the calendar by selecting date ranges.",
      },
      {
        title: "Channel Manager",
        description: "A centralized hub for managing connections to major online travel agencies. The configuration panel displays all supported channels — Airbnb, Booking.com, Agoda, and Expedia — with real-time connection status indicators. Key metrics track total channels, active connections, mapped units, and overall coverage percentage. Each channel card provides Configure, Map Units, and Disconnect controls, allowing managers to pair specific units with their OTA listings and maintain synchronized availability across all platforms.",
      },
      {
        title: "Email Templates",
        description: "A comprehensive communication engine with pre-built and customizable email templates for every stage of the guest journey. Templates are organized by category — Reservation Confirmation, Check-in Reminders, Cancellation Notices, Payment Notifications, Service Payments, Error Alerts, and Ticket Updates. Each template uses dynamic variables like guest name, property name, and booking details to personalize automated communications. Managers can create new templates, edit existing ones, and toggle them between active and inactive states.",
      },
      {
        title: "Services Management",
        description: "A flexible service configuration system where managers define and manage amenities offered to residents. Each service is set up with pricing models (per-unit, time-based, or flat rate), availability schedules with specific days and hours, and capacity limits per time slot. The services panel shows real-time usage statistics including total users and confirmed bookings. Services like laundry, cleaning, or maintenance can be toggled between Available and Unavailable, with reservations tracked separately from room bookings.",
      },
      {
        title: "Payouts & Finance",
        description: "A multi-currency financial management system that handles revenue distribution between managers and property owners. The balance overview shows funds available for payout and amounts pending or in transit, with real-time currency conversion. Managers request payouts by selecting a currency, entering an amount or using quick-select percentages (25%, 50%, 75%, 100%), and adding optional descriptions. The payout system supports custom owner percentage splits — when a property owner is added with a configured share, revenue from their units is automatically calculated and distributed according to the agreed split.",
      },
      {
        title: "Resident Portal",
        description: "The guest-facing application where residents access everything related to their stay. The home screen displays the property with its cover image and location, a quick-access maintenance request button, available services for booking, and a local places discovery section. The sidebar navigation provides access to room booking, services, booking history, guest resources, work orders, a marketplace, property feeds, chat messages, and property information. Multi-language support including Arabic ensures accessibility for international guests.",
      },
      {
        title: "Room Booking",
        description: "An intuitive calendar-based booking interface where residents browse unit availability and make reservations. The calendar displays per-night pricing on each date with a clear color-coded legend distinguishing Reserved, Selected, In Range, and Available dates. Residents select check-in and check-out dates, specify guest count, and see a transparent price breakdown with per-night rate, number of nights, and total cost calculated in real-time. The Reserve button completes the booking, which then appears in the manager's calendar and reservation pipeline.",
      },
      {
        title: "My Bookings & Check-in",
        description: "A unified booking management hub where residents track and manage all their reservations — both room stays and service bookings. Each reservation card displays the unit or service name, dates, guest count, pricing, and current status (Pending, Confirmed, Upcoming, or Past). Residents can filter between All, Upcoming, and Past bookings, and search by name or booking ID. The self-service Check In button allows guests to complete their check-in process digitally, while View Details provides full reservation information including cancellation options.",
      },
      {
        title: "Service Booking Flow",
        description: "A guided multi-step booking process for property services. Residents select between Single Day or Multi-Day booking types, then choose from available dates displayed on a calendar that highlights permitted days. The next step presents available time slots in hourly blocks with real-time capacity indicators showing spots remaining per slot. After selecting a time, residents specify quantity, review the pricing breakdown (per-unit rate, quantity, and total), and proceed to payment — completing the entire service reservation without needing to contact management.",
      },
    ],
    features: [
      "Multi-Property Portfolio Management",
      "Per-Unit Calendar with Daily Pricing",
      "Channel Sync (Airbnb, Booking.com, Agoda, Expedia)",
      "Self-Service Resident Portal",
      "Digital Check-in Process",
      "Time-Based Service Booking",
      "Multi-Currency Payout System",
      "Owner Percentage-Based Revenue Splits",
      "Customizable Email Template Engine",
      "Work Order & Maintenance Requests",
      "Real-Time Availability Synchronization",
      "Multi-Language Support (English, Arabic)",
    ],
  },


  // Other Projects
  // Featured Projects (First 3 - Main Display)
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
      "A portfolio for realtor for portraying his achievements and client relationship through past records, integrated with automations to fetch the latest communities of Los Vegas!",
    longDescription:
      "",
    features: [
      "Ai automated Blogs Writer",
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
      "Real time data analytics",
      "Future forecasts from previous data",
      "Spice crops plantation forecaster",
      "Analytics dashboard for spice merchants",
      "Price Data presented in Correlation, Scattered, Empirical, Pearson correlation and numerous other charts",
      "Alert system for price hikes and drops"
    ],
    technologies: ["React", "Python", "Google console", "USDA Api", "ProduceIQ API", "MeteoMatics Api"],
    description:
      "Ark Foods is a comprehensive Spices Price Analytics platform that connects Merchants with their profitable markets across the globe. Built with modern web technologies, it features real-time data analytics, Efficient Alert System, Historical and forecasted data, and an admin dashboard for complete platform oversight.",
    longDescription:
      "Ark Foods is a comprehensive Spices Price Analytics platform that connects Merchants with their profitable markets across the globe. Built with modern web technologies, it features real-time data analytics, Efficient Alert System, Historical and forecasted data, and an admin dashboard for complete platform oversight.",
 
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
      "n8n",
      "LiveKit",
      "Go High Level",
      "cal.com",
      "Twilio (Voice & SMS)",
    ],
    description:
      "Advanced AI-powered outbound calling system developed for San Jose Clean Energy to handle customer outreach, enrollment campaigns, and service notifications. The system automates customer contact for renewable energy program promotions, billing notifications, and service updates while maintaining natural conversation flow and regulatory compliance for utility communications.",
    longDescription:
      "Our Avatar Agent System creates lifelike digital representatives that can interact with users through voice, text, and visual cues. These avatars are powered by advanced AI algorithms that enable them to understand emotions, respond appropriately, and maintain consistent personalities across interactions.",
    features: [
      "Automated Outbound Campaign Management",
      "Regulatory Compliance Monitoring",
      "Real-time Call Analytics",
      "CRM Integration ",
      "Scheduled Campaign Deployment",
      "Multi-language Support (English/Spanish)",
      "Callback Scheduling System",
      "Lead Qualification & Scoring",
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
