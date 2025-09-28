# Yeesha Bags E-Commerce Design Guidelines

## Design Approach
**Reference-Based Approach**: Following the elegant Aisha template design while incorporating Yeesha's brand identity. The design emphasizes modest fashion aesthetics with Islamic cultural elements and sophisticated e-commerce functionality.

## Brand Integration
- **Logo**: Use the provided Yeesha Bags logo prominently in the header and footer
- **Brand Colors**: Primary burgundy red (#B71C1C) from the logo, complemented by cream/ivory whites and soft neutrals
- **Brand Voice**: Elegant, modest, culturally respectful, and premium handcrafted quality

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Burgundy Red: 0 85% 37% (from logo)
- Cream White: 45 20% 96%
- Pure White: 0 0% 100%

**Supporting Colors:**
- Warm Gray: 30 5% 25%
- Light Gray: 30 5% 95%
- Gold Accent: 45 85% 75% (used sparingly for premium touches)

### B. Typography
- **Primary Font**: Google Fonts - Poppins (modern, clean, excellent readability)
- **Secondary Font**: Playfair Display (elegant serif for headings and brand elements)
- **Hierarchy**: 
  - H1: 2.5rem Playfair Display (hero titles)
  - H2: 2rem Poppins Medium (section headers)
  - H3: 1.5rem Poppins Medium (product titles)
  - Body: 1rem Poppins Regular
  - Small: 0.875rem Poppins Light

### C. Layout System
**Tailwind Spacing Primitives**: Use units of 2, 4, 8, 12, and 16 for consistent spacing
- Small gaps: p-2, m-2
- Medium spacing: p-4, m-4, gap-4
- Large sections: p-8, m-8
- Container spacing: p-12, m-12
- Hero sections: p-16, m-16

### D. Component Library
**Navigation:**
- Clean header with logo, main navigation, search, cart icon
- Sticky navigation on scroll
- Mobile hamburger menu with slide-out drawer

**Product Cards:**
- Square product images with hover overlay
- Star ratings, price, quick add-to-cart button
- Wishlist heart icon in top-right corner

**Forms:**
- Rounded input fields with subtle borders
- Focus states with burgundy accent
- Clear error and success states

**Buttons:**
- Primary: Burgundy background with white text
- Secondary: Outline burgundy with burgundy text
- Rounded corners (rounded-md)

**Data Displays:**
- Clean product grids (3-4 columns on desktop, 2 on tablet, 1 on mobile)
- Card-based layouts with subtle shadows
- Clear typography hierarchy

### E. Islamic & Cultural Design Elements
- Subtle geometric patterns as background elements
- Crescent moon and star motifs (used sparingly)
- Respectful imagery focusing on products rather than models
- Arabic-inspired decorative borders for special sections
- Elegant calligraphy-style fonts for special headings

## Images
**Hero Section**: Large hero image showcasing featured Yeesha bags with elegant styling, overlaid with brand messaging and CTA buttons (use variant="outline" buttons with blurred backgrounds)

**Product Images**: High-quality product photography on clean white/cream backgrounds, lifestyle shots showing bags in use while maintaining modesty

**Category Banners**: Elegant banner images for each category (bags, modest wear, Islamic items) with subtle overlay text

**About Section**: Artisan/craftsmanship images showing the handmade process, cultural elements

**Gallery Section**: Customer photos showcasing products in real-life modest fashion contexts

## Mobile Responsiveness
- Mobile-first approach with progressive enhancement
- Touch-friendly button sizes (minimum 44px)
- Collapsible navigation and filters for mobile
- Optimized product grid layouts for small screens
- Thumb-friendly cart and wishlist interactions

## E-Commerce Specific Elements
- **Trust Indicators**: Security badges, return policy, customer reviews
- **Product Variations**: Color/size selectors with visual swatches
- **Shopping Cart**: Slide-out cart drawer with quick view and edit
- **Checkout**: Multi-step process with clear progress indicators
- **Social Proof**: Customer reviews, ratings, testimonials

## Data Comments
```
// HARDCODED DATA - Replace with API calls in production
// Product data, user profiles, order history, reviews, etc.
```