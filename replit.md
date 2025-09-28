# Yeesha Bags E-commerce Website

## Overview

Yeesha Bags is a front-end e-commerce website specializing in handmade bags, modest wear, and Islamic items. The project is a static HTML/CSS/JavaScript website with a focus on elegant, culturally-sensitive design that emphasizes premium handcrafted quality. The website features a burgundy color scheme with Islamic geometric aesthetics and provides a complete shopping experience including product browsing, cart management, checkout flow, and user account features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a traditional multi-page architecture using vanilla HTML, CSS, and JavaScript without any modern frameworks. Each page is a separate HTML file with shared CSS and JavaScript resources.

**Page Structure:**
- `index.html` - Homepage with featured products and hero sections
- `categories.html` - Product category browsing
- `product-detail.html` - Individual product information pages
- `cart.html` - Shopping cart management
- `checkout.html` - Secure checkout process
- `profile.html` - User account management
- `order-history.html` - Order tracking and history
- `wishlist.html` - Saved products functionality

**CSS Architecture:**
- `style.css` - Main stylesheet with CSS variables and component styles
- `responsive.css` - Mobile-first responsive design rules
- CSS follows BEM-like naming conventions and uses CSS custom properties for theming

**JavaScript Architecture:**
- `main.js` - Core interactive functionality including mobile menu, search, cart operations
- `data.js` - Mock data layer with hardcoded product information
- Vanilla JavaScript with event-driven programming model
- No external JavaScript frameworks or libraries

### Design System
The website implements a comprehensive design system documented in `design_guidelines.md` featuring:
- Burgundy-based color palette with Islamic geometric influences
- Typography hierarchy using Playfair Display and Poppins fonts
- Consistent spacing system and component library
- Premium craftsmanship presentation approach

### Data Management
Currently uses static mock data stored in JavaScript files. The data structure includes:
- Product catalog with categories (bags, modest-wear, islamic-items)
- User account information
- Shopping cart and wishlist data
- Order history and tracking information

All data is client-side only with no persistent storage mechanism implemented.

### User Interface Components
- Responsive navigation with mobile hamburger menu
- Product grid layouts with filtering capabilities
- Shopping cart modal and checkout flow
- User account management interface
- Search functionality
- Wishlist management system

## External Dependencies

**CDN Resources:**
- Google Fonts API - Poppins and Playfair Display typography
- Font Awesome 6.4.0 - Icon library for UI elements
- No external JavaScript libraries or frameworks

**Asset Dependencies:**
- Product images sourced from Unsplash via HTTPS URLs
- Local logo image stored in `attached_assets/` directory
- All other styling and functionality is self-contained

**Third-party Integrations:**
- Currently no external payment processors, APIs, or backend services
- No analytics or tracking implementations
- No external authentication systems

The website is designed as a static prototype that demonstrates the complete user experience flow but requires backend integration for production deployment including payment processing, user authentication, inventory management, and order fulfillment systems.