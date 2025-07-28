# SS Benchmark Events 🎉

A premium event management website built with React, featuring stunning animations, interactive galleries, and professional contact forms with email integration.

![Event Management](https://img.shields.io/badge/Event-Management-gold?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.6-purple?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-cyan?style=for-the-badge&logo=tailwindcss)

## 🌟 Live Demo

Experience the website at: **[SS Benchmark Events](https://ssbenchmarkevents.vercel.app)**

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Contact Form Integration](#contact-form-integration)
- [Gallery System](#gallery-system)
- [Services & Features](#services--features)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

SS Benchmark Events is a comprehensive event management platform specializing in weddings, corporate events, themed parties, venue booking, tours & travels, and honeymoon packages. The website showcases professional event planning services with an elegant, modern design and seamless user experience.

### Company Information
- **Founded**: 2021
- **Services**: 7+ Event Categories
- **Experience**: 5+ Years
- **Events Completed**: 500+
- **Client Satisfaction**: 98%

## ✨ Features

### 🎨 Design & User Experience
- **Responsive Design**: Mobile-first approach with elegant desktop experience
- **Smooth Animations**: Powered by Framer Motion with staggered reveals and interactive elements
- **Professional Theme**: Dark gradients with gold accents for luxury feel
- **Interactive Navigation**: Smooth transitions between pages with consistent hero sections

### 📧 Contact & Communication
- **Real Email Integration**: Formspree-powered contact forms with professional email delivery
- **Multiple Contact Methods**: Contact forms, direct email, and Google Maps integration
- **Quote Request System**: Service-specific quote forms with detailed requirements
- **Multi-fallback Email Handling**: Ensures reliable contact delivery

### 🖼️ Gallery & Portfolio
- **Interactive Gallery**: Category-based photo organization with advanced filtering
- **Multiple View Modes**: Grid and masonry layouts for optimal image display
- **Smart Sorting**: Sort by date, guests, or title with responsive controls
- **Detailed Event Information**: Venue details, guest count, dates, and event tags
- **Image Modal System**: Full-screen image viewing with event details

### 🛠️ Services Management
- **Dynamic Service Cards**: Expandable cards with detailed feature lists
- **Professional Icons**: Custom SVG icons for each service category
- **Quote Integration**: Direct quote requests from service cards
- **Category-based Organization**: Business, Creative, and Travel service groupings

### 📊 Analytics & Statistics
- **Real-time Stats**: Dynamic counters for company achievements
- **Service-specific Metrics**: Detailed statistics for each service category
- **Interactive Testimonials**: Infinite scroll testimonials with client feedback

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.1.0**: Latest React with modern hooks and concurrent features
- **React Router DOM 7.7.1**: Client-side routing with page transitions
- **Vite 7.0.4**: Fast build tool with hot module replacement

### Styling & Animation
- **Tailwind CSS 3.4.1**: Utility-first CSS framework with custom color palette
- **Framer Motion 12.23.6**: Production-ready motion library for React
- **PostCSS 8.5.6**: CSS processing with autoprefixer support

### Development Tools
- **ESLint**: Code linting with React-specific rules
- **PropTypes**: Runtime type checking for React props
- **React Icons 5.5.0**: Comprehensive icon library

### Deployment & Integration
- **Vercel**: Serverless deployment with SPA routing
- **Formspree**: Email form handling service (endpoint: f/xnnzvqqo)
- **Google Maps**: Interactive location embedding

## 📁 Project Structure

```
ssbenchmarkevents/
├── public/
│   └── assets/
│       └── images/
│           ├── corporate/          # Corporate event photos
│           ├── weddings/           # Wedding event photos
│           ├── themedparty/        # Themed party photos
│           ├── venubookiing/       # Venue booking photos
│           ├── tourtravels/        # Tour & travel photos
│           ├── honeymoonpackages/  # Honeymoon package photos
│           ├── educatioinialtrips/ # Educational trip photos
│           └── logo/               # Company branding
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          # Main navigation component
│   │   │   └── Footer.jsx          # Site footer with links
│   │   └── sections/
│   │       ├── Hero.jsx            # Homepage hero section
│   │       ├── About.jsx           # Company information
│   │       ├── Services.jsx        # Service cards with quotes
│   │       ├── Contact.jsx         # Contact forms & info
│   │       ├── Gallery.jsx         # Gallery components
│   │       ├── InteractiveGallery.jsx # Advanced gallery features
│   │       ├── FeaturedEvents.jsx  # Event showcases
│   │       ├── Statistics.jsx      # Company statistics
│   │       ├── Testimonials.jsx    # Client testimonials
│   │       └── InfiniteScrollTestimonials.jsx # Animated testimonials
│   ├── routes/
│   │   ├── HomeRoute.jsx           # Homepage route
│   │   ├── AboutRoute.jsx          # About page route
│   │   ├── ServicesRoute.jsx       # Services page route
│   │   ├── GalleryRoute.jsx        # Gallery overview page
│   │   ├── GalleryCategoryRoute.jsx # Category-specific galleries
│   │   ├── TestimonialsRoute.jsx   # Testimonials page
│   │   └── ContactRoute.jsx        # Contact page route
│   ├── data/
│   │   ├── enhancedServices.json   # Service definitions & features
│   │   ├── enhancedGallery.json    # Gallery data with metadata
│   │   ├── featuredEvents.json     # Featured event information
│   │   ├── testimonials.json       # Client testimonials
│   │   ├── stats.json              # Company statistics
│   │   └── heroSlides.json         # Homepage slider content
│   ├── hooks/                      # Custom React hooks
│   ├── App.jsx                     # Main application component
│   ├── main.jsx                    # Application entry point
│   ├── framer.js                   # Animation configurations
│   └── index.css                   # Global styles
├── eslint.config.js                # ESLint configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── vite.config.js                  # Vite build configuration
├── vercel.json                     # Vercel deployment settings
├── FORMSPREE_SETUP.md              # Email integration guide
└── package.json                    # Project dependencies
```

## 🚀 Installation

### Prerequisites
- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher
- **Git**: For version control

### Clone the Repository
```bash
git clone https://github.com/kanojia2003/EventManagementWeb.git
cd ssbenchmarkevents
```

### Install Dependencies
```bash
npm install
```

### Environment Setup
No environment variables required for basic functionality. For email integration, see [Contact Form Integration](#contact-form-integration).

## 🔧 Development

### Start Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Production files will be generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

### Code Linting
```bash
npm run lint
```

## 🌐 Deployment

### Vercel Deployment (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Node.js Version**: 18.x
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
# Upload contents of dist/ to your hosting provider
```

### SPA Configuration
The `vercel.json` file ensures proper Single Page Application routing:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 📧 Contact Form Integration

### Current Status
✅ **FULLY FUNCTIONAL** - Both contact and quote forms send real emails

### Formspree Integration Details
- **Service**: Formspree (https://formspree.io)
- **Endpoint**: `f/xnnzvqqo`
- **Forms**: Contact form and service quote requests
- **Features**: 
  - Real email delivery to company
  - Professional email formatting
  - Hidden fields for tracking
  - Success/error handling
  - Loading states with spinners

### Email Features
- **Contact Form**: Full contact details with message
- **Quote Forms**: Service-specific requests with requirements
- **Fallback Methods**: Direct mailto links with clipboard copy
- **Google Maps**: Interactive location display

### Setup for Custom Email
If you need to change the email address:
1. Create account at [Formspree.io](https://formspree.io)
2. Create new form with your email
3. Replace form ID in `Contact.jsx` and `Services.jsx`
4. Update email references in contact cards

## 🖼️ Gallery System

### Gallery Features
- **Categories**: 7 main service categories with dedicated galleries
- **Image Metadata**: Each image includes venue, date, guest count, tags
- **Smart Filtering**: Category, search, and sort functionality
- **View Modes**: Grid and masonry layouts
- **Interactive Modal**: Full-screen viewing with detailed information

### Gallery Data Structure
```json
{
  "category": "Wedding",
  "description": "Elegant wedding celebrations",
  "featured": true,
  "images": [
    {
      "src": "/assets/images/weddings/1.jpg",
      "title": "Royal Palace Wedding",
      "description": "Elegant palace wedding ceremony",
      "venue": "Grand Palace",
      "date": "2024-03-15",
      "guests": 250,
      "tags": ["luxury", "traditional", "palace"],
      "type": "ceremony"
    }
  ],
  "stats": {
    "totalEvents": 45,
    "averageGuests": 180,
    "satisfactionRate": 98
  }
}
```

### Adding New Images
1. Add images to appropriate folder in `public/assets/images/`
2. Update corresponding category in `src/data/enhancedGallery.json`
3. Include all metadata fields for best functionality

## 🛠️ Services & Features

### Service Categories

#### 1. Wedding Events
- **Features**: Complete wedding planning, venue decoration, catering coordination
- **Specialties**: Traditional ceremonies, destination weddings, reception planning
- **Base Price**: ₹50,000+

#### 2. Corporate Events
- **Features**: Conference organization, product launches, team building
- **Specialties**: Professional networking, awards ceremonies, exhibitions
- **Base Price**: ₹25,000+

#### 3. Themed Parties
- **Features**: Custom theme development, decoration, entertainment
- **Specialties**: Birthday parties, anniversary celebrations, creative themes
- **Base Price**: ₹15,000+

#### 4. Venue Booking
- **Features**: Location scouting, space planning, vendor coordination
- **Specialties**: Premium venues, layout design, booking management
- **Base Price**: ₹20,000+

#### 5. Tour & Travel
- **Features**: Adventure tours, cultural experiences, travel packages
- **Specialties**: Group tours, destination events, travel coordination
- **Base Price**: ₹30,000+

#### 6. Honeymoon Packages
- **Features**: Romantic destinations, luxury accommodations, special experiences
- **Specialties**: Exotic locations, couple activities, memorable experiences
- **Base Price**: ₹40,000+

#### 7. Educational Trips
- **Features**: Educational tours, institutional trips, learning experiences
- **Specialties**: Student groups, educational institutions, cultural learning
- **Base Price**: ₹12,000+

### Quote System
Each service includes:
- **Expandable Details**: Feature lists and descriptions
- **Direct Quote Requests**: Service-specific quote forms
- **Professional Pricing**: Base price guidelines
- **Gallery Integration**: Related portfolio images

## 🎨 Customization

### Color Scheme
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      gold: '#D4AF37',      // Primary accent color
      black: '#0D0D0D',     // Deep black for contrast
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],  // Elegant headings
      sans: ['Inter', 'sans-serif'],     // Clean body text
    },
  },
}
```

### Animation Variants
```javascript
// framer.js
export const fadeInUp = {
  hidden: { y: 60, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};
```

## 🔍 SEO & Performance

### SEO Features
- **Meta Tags**: Comprehensive meta descriptions and titles
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter previews
- **Semantic HTML**: Proper heading structure and landmarks

### Performance Optimizations
- **Lazy Loading**: Images load as needed
- **Code Splitting**: Route-based code splitting
- **Optimized Images**: Compressed and properly sized images
- **Efficient Animations**: Hardware-accelerated transitions

## 🤝 Contributing

### Development Guidelines
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Standards
- **React Hooks**: Functional components with hooks
- **PropTypes**: Type checking for all components
- **ESLint**: Follow configured linting rules
- **File Naming**: PascalCase for components, camelCase for utilities

### Project Maintenance
- **Dependencies**: Keep dependencies updated
- **Images**: Optimize new images before adding
- **Data Files**: Validate JSON structure
- **Testing**: Test all forms and interactive elements

## 📞 Support & Contact

### Technical Support
- **GitHub Issues**: For bug reports and feature requests
- **Documentation**: Comprehensive inline code comments
- **Email Integration**: Formspree support for email issues

### Business Contact
- **Website**: [SS Benchmark Events](https://ssbenchmarkevents.vercel.app)
- **Email**: Contact form on website
- **Response Time**: 2 hours average response
- **Consultation**: Free initial consultation available

## 📄 License

This project is proprietary software developed for SS Benchmark Events. All rights reserved.

### Usage Rights
- ✅ **Viewing**: Public viewing of deployed website
- ✅ **Learning**: Educational purposes and learning from code structure
- ❌ **Commercial Use**: No commercial use without permission
- ❌ **Redistribution**: No redistribution of source code

### Development Team
- **Frontend Development**: React specialist with event industry experience
- **Design**: Professional UI/UX with luxury event focus
- **Integration**: Email and deployment optimization

---

**Built with ❤️ for SS Benchmark Events** | **Creating Extraordinary Experiences Since 2021**

*For business inquiries and event planning services, visit our website and explore our comprehensive portfolio of successful events.*