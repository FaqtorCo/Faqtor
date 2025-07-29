/* eslint-disable */

import React, { useState } from 'react';
import { TrendingUp, Upload, Zap, Bot, Loader2, CheckCircle, AlertCircle, Sparkles, Target, Palette, MessageSquare } from 'lucide-react';

const MarketingAgentDemo = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [imageCompressing, setImageCompressing] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    websiteUrl: '',
    productType: '',
    targetAudience: '',
    campaignGoal: '',
    keyMessage: '',
    visualStyle: '',
    referenceImage: null
  });

  // Image compression function
  const compressImage = (file, maxWidth = 800, maxHeight = 600, quality = 0.8) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Calculate new dimensions
        let { width, height } = img;
        
        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        
        // Draw and compress
        ctx.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob(
          (blob) => {
            // Create new file with compressed data
            const compressedFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now()
            });
            resolve(compressedFile);
          },
          'image/jpeg',
          quality
        );
      };
      
      img.src = URL.createObjectURL(file);
    });
  };

  // Validate file size and type
  const validateFile = (file) => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    
    if (!allowedTypes.includes(file.type)) {
      return 'Please upload a valid image file (JPEG, PNG, or WebP)';
    }
    
    if (file.size > maxSize) {
      return 'Image file is too large. Please choose a file smaller than 10MB';
    }
    
    return null;
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file
    const validationError = validateFile(file);
    if (validationError) {
      setMessage(validationError);
      return;
    }

    setImageCompressing(true);
    setMessage('Compressing image...');

    try {
      // Compress image if it's larger than 1MB
      let processedFile = file;
      if (file.size > 1024 * 1024) { // 1MB
        processedFile = await compressImage(file);
        console.log(`Image compressed from ${(file.size / 1024 / 1024).toFixed(2)}MB to ${(processedFile.size / 1024 / 1024).toFixed(2)}MB`);
      }

      setFormData(prev => ({
        ...prev,
        referenceImage: processedFile
      }));
      
      setMessage(`Image uploaded successfully (${(processedFile.size / 1024 / 1024).toFixed(2)}MB)`);
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(''), 3000);
      
    } catch (error) {
      console.error('Error processing image:', error);
      setMessage('Error processing image. Please try again.');
    } finally {
      setImageCompressing(false);
    }
  };

  // Product Types with industry-specific attributes (keeping original data)
  const productTypes = [
    {
      value: "remodeling",
      label: "Remodeling & Home Improvement",
      lightingStyle: "Soft, even natural lighting with warm accent lights to emphasize textures and finishes",
      typographyStyle: "Bold sans-serif headlines in dark charcoal, clean light-weight supporting text",
      productPlacement: "Show craftsmen at work, before/after transformations, quality materials and finishes",
      backgroundStyle: "Modern home interiors, renovation sites, kitchen/bathroom spaces, architectural details"
    },
    {
      value: "restaurant",
      label: "Restaurant & Food Service",
      lightingStyle: "Warm, appetizing golden hour lighting with soft shadows to enhance food appeal",
      typographyStyle: "Elegant serif or script fonts for premium feel, bold sans-serif for casual dining",
      productPlacement: "Fresh ingredients, plated dishes, dining atmosphere, chef in action, happy customers",
      backgroundStyle: "Restaurant interiors, kitchen environments, rustic/modern dining settings, food prep areas"
    },
    {
      value: "ecommerce",
      label: "E-commerce & Retail",
      lightingStyle: "Clean, bright studio lighting or natural daylight to showcase product details clearly",
      typographyStyle: "Modern sans-serif, medium weight for headlines, emphasis on readability and conversion",
      productPlacement: "Products in lifestyle context, unboxing moments, product benefits demonstration",
      backgroundStyle: "Clean studio backgrounds, lifestyle settings, minimalist home/office environments"
    },
    {
      value: "saas",
      label: "SaaS & Technology",
      lightingStyle: "Cool, professional lighting with subtle blue undertones, screen-friendly illumination",
      typographyStyle: "Clean, tech-focused sans-serif fonts, high contrast for digital readability",
      productPlacement: "Software interfaces, productivity scenarios, business professionals using technology",
      backgroundStyle: "Modern offices, co-working spaces, tech environments, digital interface mockups"
    },
    {
      value: "healthcare",
      label: "Healthcare & Medical",
      lightingStyle: "Clean, clinical white lighting with soft warm accents for comfort and trust",
      typographyStyle: "Professional, trustworthy fonts with high legibility, medical-grade clarity",
      productPlacement: "Medical professionals, wellness products, health improvement transformations",
      backgroundStyle: "Medical facilities, wellness centers, natural health environments, clean clinical spaces"
    },
    {
      value: "beauty",
      label: "Beauty & Cosmetics",
      lightingStyle: "Soft, flattering lighting with subtle highlights to enhance skin and product appeal",
      typographyStyle: "Elegant, beauty-focused fonts with luxury appeal, script accents for premium brands",
      productPlacement: "Beauty transformations, product application, lifestyle beauty moments, before/after results",
      backgroundStyle: "Luxury beauty environments, bathroom/vanity settings, spa-like atmospheres, editorial backdrops"
    },
    {
      value: "fitness",
      label: "Fitness & Sports",
      lightingStyle: "Dynamic, energetic lighting with strong contrasts to emphasize movement and strength",
      typographyStyle: "Bold, athletic fonts with strong impact, motivational typography styling",
      productPlacement: "Workout scenarios, fitness transformations, athletic equipment, active lifestyle moments",
      backgroundStyle: "Gyms, outdoor workout spaces, athletic facilities, home fitness environments"
    },
    {
      value: "realestate",
      label: "Real Estate",
      lightingStyle: "Warm, inviting natural lighting to create emotional connection with spaces",
      typographyStyle: "Professional, trustworthy fonts that convey expertise and reliability",
      productPlacement: "Property showcases, real estate agents, home buying/selling scenarios, neighborhood highlights",
      backgroundStyle: "Property exteriors/interiors, neighborhood views, professional real estate settings"
    },
    {
      value: "fashion",
      label: "Fashion & Apparel",
      lightingStyle: "Editorial-style lighting with dramatic shadows and highlights for visual impact",
      typographyStyle: "Fashion-forward fonts ranging from minimalist to bold, brand-personality driven",
      productPlacement: "Fashion styling, lifestyle wear, brand personality expression, seasonal collections",
      backgroundStyle: "Fashion photography settings, urban environments, lifestyle contexts, editorial backdrops"
    },
    {
      value: "automotive",
      label: "Automotive",
      lightingStyle: "Dramatic lighting with strong reflections to emphasize vehicle design and quality",
      typographyStyle: "Bold, automotive-inspired fonts with industrial strength and modern appeal",
      productPlacement: "Vehicle showcases, driving scenarios, automotive service, lifestyle integration",
      backgroundStyle: "Showrooms, roads, garages, automotive service environments, lifestyle driving contexts"
    },
    {
      value: "education",
      label: "Education & Training",
      lightingStyle: "Bright, inspiring lighting that promotes learning and growth mindset",
      typographyStyle: "Clear, educational fonts with high readability, inspiring and motivational styling",
      productPlacement: "Learning environments, students achieving goals, educational materials, success stories",
      backgroundStyle: "Classrooms, libraries, online learning setups, graduation/achievement moments"
    },
    {
      value: "financial",
      label: "Financial Services",
      lightingStyle: "Professional, trustworthy lighting with stability and security undertones",
      typographyStyle: "Conservative, trustworthy fonts that convey financial expertise and reliability",
      productPlacement: "Financial planning scenarios, investment growth, security and stability themes",
      backgroundStyle: "Professional offices, banking environments, home financial planning, business settings"
    },
    {
      value: "travel",
      label: "Travel & Tourism",
      lightingStyle: "Natural, adventurous lighting that captures wanderlust and exploration spirit",
      typographyStyle: "Adventure-inspired fonts with wanderlust appeal, elegant travel styling",
      productPlacement: "Destination showcases, travel experiences, cultural immersion, adventure moments",
      backgroundStyle: "Tourist destinations, natural landscapes, cultural sites, travel accommodations"
    },
    {
      value: "petcare",
      label: "Pet Care & Veterinary",
      lightingStyle: "Warm, caring lighting that emphasizes love and companionship with pets",
      typographyStyle: "Friendly, approachable fonts that convey care and compassion for animals",
      productPlacement: "Happy pets with owners, veterinary care, pet products in use, health transformations",
      backgroundStyle: "Veterinary clinics, homes with pets, outdoor pet activities, pet care environments"
    },
    {
      value: "legal",
      label: "Legal Services",
      lightingStyle: "Professional, authoritative lighting that conveys expertise and trustworthiness",
      typographyStyle: "Traditional, professional fonts that establish credibility and legal authority",
      productPlacement: "Legal professionals, courtroom scenarios, client consultations, justice themes",
      backgroundStyle: "Law offices, courtrooms, professional legal environments, consultation settings"
    },
    {
      value: "insurance",
      label: "Insurance",
      lightingStyle: "Protective, secure lighting that emphasizes safety and peace of mind",
      typographyStyle: "Trustworthy, reliable fonts that convey protection and security",
      productPlacement: "Protection scenarios, family security, property protection, peace of mind moments",
      backgroundStyle: "Family homes, protected properties, secure environments, consultation offices"
    },
    {
      value: "gaming",
      label: "Gaming & Entertainment",
      lightingStyle: "Dynamic, colorful lighting with RGB gaming aesthetics and entertainment vibes",
      typographyStyle: "Gaming-inspired fonts with digital flair, entertainment industry styling",
      productPlacement: "Gaming setups, entertainment systems, streaming scenarios, competitive gaming",
      backgroundStyle: "Gaming rooms, entertainment centers, esports venues, streaming environments"
    },
    {
      value: "nonprofit",
      label: "Non-Profit & Charity",
      lightingStyle: "Hopeful, inspiring lighting that emphasizes human connection and positive impact",
      typographyStyle: "Humanitarian fonts that convey compassion, hope, and positive change",
      productPlacement: "Community impact, volunteer work, beneficiaries, positive change stories",
      backgroundStyle: "Community centers, volunteer locations, beneficiary environments, impact showcases"
    },
    {
      value: "agriculture",
      label: "Agriculture & Farming",
      lightingStyle: "Natural, earthy lighting that emphasizes connection to land and sustainable practices",
      typographyStyle: "Organic, natural fonts that convey sustainability and connection to nature",
      productPlacement: "Farm operations, crop cultivation, agricultural equipment, farm-to-table stories",
      backgroundStyle: "Farmlands, agricultural facilities, rural settings, crop fields, farm equipment"
    },
    {
      value: "construction",
      label: "Construction & Engineering",
      lightingStyle: "Industrial, professional lighting that emphasizes strength, precision, and expertise",
      typographyStyle: "Strong, industrial fonts that convey engineering precision and construction quality",
      productPlacement: "Construction sites, engineering projects, heavy machinery, completed structures",
      backgroundStyle: "Construction sites, engineering facilities, industrial environments, project showcases"
    },
    {
      value: "consulting",
      label: "Consulting & Business Services",
      lightingStyle: "Professional, strategic lighting that emphasizes expertise and business success",
      typographyStyle: "Executive, business-focused fonts that convey strategic thinking and expertise",
      productPlacement: "Business meetings, strategy sessions, professional consultations, success outcomes",
      backgroundStyle: "Corporate offices, meeting rooms, business environments, professional settings"
    },
    {
      value: "energy",
      label: "Energy & Utilities",
      lightingStyle: "Clean, sustainable lighting that emphasizes efficiency and environmental responsibility",
      typographyStyle: "Modern, efficient fonts that convey innovation and sustainability",
      productPlacement: "Solar panels, wind turbines, energy-efficient solutions, utility infrastructure",
      backgroundStyle: "Solar installations, utility facilities, green energy environments, residential energy solutions"
    },
    {
      value: "manufacturing",
      label: "Manufacturing & Industrial",
      lightingStyle: "Industrial, precise lighting that emphasizes quality control and manufacturing excellence",
      typographyStyle: "Industrial, technical fonts that convey precision and manufacturing expertise",
      productPlacement: "Manufacturing processes, quality control, industrial equipment, finished products",
      backgroundStyle: "Manufacturing facilities, industrial environments, quality control labs, production lines"
    },
    {
      value: "events",
      label: "Event Planning & Management",
      lightingStyle: "Celebratory, elegant lighting that captures special moments and joyful occasions",
      typographyStyle: "Elegant, celebratory fonts that convey sophistication and memorable experiences",
      productPlacement: "Event setups, celebrations, wedding scenes, corporate events, party atmospheres",
      backgroundStyle: "Event venues, wedding locations, corporate event spaces, celebration environments"
    },
    {
      value: "transportation",
      label: "Transportation & Logistics",
      lightingStyle: "Efficient, reliable lighting that emphasizes speed, reliability, and global reach",
      typographyStyle: "Clean, logistics-focused fonts that convey efficiency and reliability",
      productPlacement: "Delivery vehicles, shipping operations, logistics centers, global transportation",
      backgroundStyle: "Warehouses, transportation hubs, delivery routes, logistics facilities"
    }
  ];

  const campaignGoals = [
    { value: 'brand_awareness', label: 'Brand Awareness' },
    { value: 'lead_generation', label: 'Lead Generation' },
    { value: 'product_sales', label: 'Product Sales' },
    { value: 'service_bookings', label: 'Service Bookings' },
    { value: 'app_downloads', label: 'App Downloads' },
    { value: 'event_registration', label: 'Event Registration' },
    { value: 'newsletter_signups', label: 'Newsletter Signups' }
  ];

  const visualStyles = [
    {
      value: "minimalist",
      label: "Minimalist Clean",
      compositionGuidelines: "Use abundant white space, single focal point, rule of thirds placement, clean geometric layouts, minimal color palette (2-3 colors max), simple typography hierarchy, breathable spacing between elements, avoid clutter, emphasize negative space as a design element"
    },
    {
      value: "bold_dynamic",
      label: "Bold & Dynamic",
      compositionGuidelines: "Create strong diagonal compositions, use high contrast colors, implement asymmetrical balance, bold typography with varying scales, layered visual elements, dynamic angles and perspectives, energetic color combinations, movement-suggesting layouts"
    },
    {
      value: "luxury",
      label: "Luxury Premium",
      compositionGuidelines: "Employ sophisticated symmetrical layouts, rich color palettes with gold/silver accents, elegant typography with serif elements, high-quality textures and materials, refined spacing with generous margins, subtle gradients, premium material representations"
    },
    {
      value: "professional",
      label: "Modern Professional",
      compositionGuidelines: "Use clean grid systems, corporate color schemes (blues, grays, whites), sans-serif typography, balanced asymmetrical layouts, professional photography style, consistent spacing and alignment, subtle shadows and depth, trustworthy visual hierarchy"
    },
    {
      value: "friendly",
      label: "Warm & Friendly",
      compositionGuidelines: "Implement curved elements and organic shapes, warm color palette (oranges, yellows, soft reds), approachable typography, centered compositions with welcoming balance, soft shadows and rounded corners, community-focused imagery, inviting spatial arrangements"
    },
    {
      value: "tech_innovation",
      label: "Tech & Innovation",
      compositionGuidelines: "Use futuristic layouts with sharp angles, cool color schemes (blues, cyans, tech greens), modern sans-serif fonts, gradient backgrounds, digital-inspired elements, high-tech visual effects, geometric patterns, sleek and streamlined compositions"
    },
    {
      value: "creative",
      label: "Artistic & Creative",
      compositionGuidelines: "Embrace unconventional layouts, vibrant and experimental color combinations, creative typography mixing, artistic asymmetry, textured backgrounds, hand-drawn or organic elements, expressive visual hierarchy, creative negative space usage"
    },
    {
      value: "vintage",
      label: "Vintage & Retro",
      compositionGuidelines: "Apply classic composition rules, muted or saturated retro color palettes, vintage-inspired typography, nostalgic imagery placement, film grain textures, classic advertising layouts, heritage brand aesthetics, timeless geometric arrangements"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setMessage('');
  };

  const validateForm = () => {
    const required = ['brandName', 'websiteUrl', 'productType', 'targetAudience', 'campaignGoal', 'keyMessage', 'visualStyle'];
    const missing = required.filter(field => !formData[field]);
    
    if (missing.length > 0) {
      setMessage(`Please fill in all required fields: ${missing.join(', ')}`);
      return false;
    }
    
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setMessage('');

    // Get industry-specific attributes
    const selectedProductType = productTypes.find(type => type.value === formData.productType);
    const selectedVisualStyle = visualStyles.find(style => style.value === formData.visualStyle);

    // Create form data for file upload
    const submitData = new FormData();
    
    // Add all form fields
    Object.keys(formData).forEach(key => {
      if (key === 'referenceImage' && formData[key]) {
        submitData.append('referenceImage', formData[key]);
      } else if (key !== 'referenceImage') {
        submitData.append(key, formData[key]);
      }
    });

    // Add industry-specific attributes
    if (selectedProductType) {
      submitData.append('lightingStyle', selectedProductType.lightingStyle);
      submitData.append('typographyStyle', selectedProductType.typographyStyle);
      submitData.append('productPlacement', selectedProductType.productPlacement);
      submitData.append('backgroundStyle', selectedProductType.backgroundStyle);
    }

    // Add visual style composition guidelines
    if (selectedVisualStyle) {
      submitData.append('compositionGuidelines', selectedVisualStyle.compositionGuidelines);
    }

    // Add timestamp
    submitData.append('timestamp', new Date().toISOString());

    try {
      const response = await fetch('https://n8n.softtik.com/webhook/marketing-agent', {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        setShowSuccess(true);
        setMessage('Marketing campaign request submitted successfully! Our AI agent will analyze your requirements and create a custom marketing strategy.');
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            brandName: '',
            websiteUrl: '',
            productType: '',
            targetAudience: '',
            campaignGoal: '',
            keyMessage: '',
            visualStyle: '',
            referenceImage: null
          });
          setShowSuccess(false);
          setMessage('');
        }, 5000);
      } else {
        const errorText = await response.text();
        if (response.status === 413) {
          throw new Error('Image file is too large. Please try a smaller image or compress it further.');
        } else {
          throw new Error(`Server error: ${errorText}`);
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setMessage(error.message || 'Failed to submit marketing request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#cbe9a1] opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(203, 233, 161, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(203, 233, 161, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6 bg-[#cbe9a1]/10 px-6 py-3 rounded-full border border-[#cbe9a1]/20 backdrop-blur-sm">
              <TrendingUp className="w-6 h-6" style={{color: '#cbe9a1'}} />
              <span className="text-sm font-medium" style={{color: '#cbe9a1'}}>
                AI Marketing Agent
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-[#cbe9a1] bg-clip-text text-transparent">
              Create Your Marketing Campaign
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Let our AI marketing agent analyze your brand and create a custom marketing strategy 
              tailored to your industry and goals.
            </p>
          </div>

          {/* Form */}
          <div className="bg-gray-900/50 backdrop-blur-lg border border-[#cbe9a1]/20 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Brand Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-[#cbe9a1]" />
                  Brand Name *
                </label>
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:border-[#cbe9a1]/50 transition-all duration-200"
                  placeholder="Enter your brand name"
                />
              </div>

              {/* Website URL */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#cbe9a1]" />
                  Website URL *
                </label>
                <input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:border-[#cbe9a1]/50 transition-all duration-200"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              {/* Product Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#cbe9a1]" />
                  Product/Service Type *
                </label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:border-[#cbe9a1]/50 transition-all duration-200"
                >
                  <option value="">Select your industry</option>
                  {productTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              {/* Target Audience */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#cbe9a1]" />
                  Target Audience *
                </label>
                <input
                  type="text"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:border-[#cbe9a1]/50 transition-all duration-200"
                  placeholder="e.g., Young professionals aged 25-35"
                />
              </div>

              {/* Visual Style */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-[#cbe9a1]" />
                  Visual Style *
                </label>
                <select
                  name="visualStyle"
                  value={formData.visualStyle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:border-[#cbe9a1]/50 transition-all duration-200"
                >
                  <option value="">Select visual style</option>
                  {visualStyles.map(style => (
                    <option key={style.value} value={style.value}>{style.label}</option>
                  ))}
                </select>
              </div>

              {/* Key Message */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#cbe9a1]" />
                  Key Message *
                </label>
                <textarea
                  name="keyMessage"
                  value={formData.keyMessage}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:border-[#cbe9a1]/50 transition-all duration-200 resize-none"
                  placeholder="What's the main message you want to communicate?"
                />
              </div>
            </div>

            {/* Campaign Goal Radio Buttons */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#cbe9a1]" />
                Campaign Goal *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {campaignGoals.map(goal => (
                  <label key={goal.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="campaignGoal"
                      value={goal.value}
                      checked={formData.campaignGoal === goal.value}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#cbe9a1] border-gray-600 focus:ring-[#cbe9a1]/50"
                    />
                    <span className="text-sm text-gray-300">{goal.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Reference Image Upload - ENHANCED */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <Upload className="w-4 h-4 text-[#cbe9a1]" />
                Reference Image (Optional)
                <span className="text-xs text-gray-500">Max 10MB - Will be compressed automatically</span>
              </label>
              <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${
                imageCompressing 
                  ? 'border-yellow-500/50 bg-yellow-500/5' 
                  : 'border-gray-600 hover:border-[#cbe9a1]/50'
              }`}>
                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="referenceImage"
                  disabled={imageCompressing}
                />
                <label htmlFor="referenceImage" className={`cursor-pointer ${imageCompressing ? 'pointer-events-none' : ''}`}>
                  {imageCompressing ? (
                    <div className="flex flex-col items-center">
                      <Loader2 className="w-8 h-8 text-yellow-400 mx-auto mb-2 animate-spin" />
                      <p className="text-yellow-400">Compressing image...</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400">
                        {formData.referenceImage 
                          ? `Selected: ${formData.referenceImage.name} (${(formData.referenceImage.size / 1024 / 1024).toFixed(2)}MB)`
                          : 'Click to upload reference image (JPEG, PNG, WebP)'
                        }
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Images larger than 1MB will be automatically compressed
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Status Message */}
            {message && (
              <div className={`mt-6 p-4 rounded-xl border text-sm ${
                message.includes('successfully') || showSuccess
                  ? 'bg-[#cbe9a1]/10 border-[#cbe9a1]/20 text-[#cbe9a1]'
                  : message.includes('Compressing') || message.includes('uploaded successfully')
                    ? 'bg-blue-400/10 border-blue-400/20 text-blue-400'
                    : 'bg-red-400/10 border-red-400/20 text-red-400'
              }`}>
                <div className="flex items-center gap-3">
                  {message.includes('successfully') || showSuccess ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : message.includes('Compressing') ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : message.includes('uploaded successfully') ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span>{message}</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={loading || imageCompressing}
              className="w-full mt-8 py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              style={{
                backgroundColor: '#cbe9a1',
                color: '#1f2937',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="flex items-center justify-center gap-3 relative z-10">
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Creating Campaign...</span>
                  </>
                ) : imageCompressing ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Processing Image...</span>
                  </>
                ) : showSuccess ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    <span>Campaign Created!</span>
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-6 h-6" />
                    <span>Generate Marketing Campaign</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

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
      `}</style>
    </div>
  );
};

export default MarketingAgentDemo;