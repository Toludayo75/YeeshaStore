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

## Firebase Integration (Auth, Firestore, Storage)

This section documents how to integrate Firebase Authentication, Firestore, and Storage with the static YeeshaStore site. Follow these steps for a safe, incremental migration from the demo localStorage auth to a real Firebase-backed solution.

1) Create a Firebase project and enable services
- Go to https://console.firebase.google.com and create a new project (e.g. `YeeshaStore-demo`).
- In the Firebase console enable Authentication (Email/Password), Firestore Database, and Storage.
- From Project settings -> Your apps -> Add a web app and copy the Firebase config keys (apiKey, authDomain, projectId, storageBucket, appId).

2) Add the Firebase SDK and init file
- Create `js/firebase-init.js` (ESM module recommended) and paste your config. Initialize `auth`, `db`, and `storage` exports.
	Example (modular SDK):

	```javascript
	// js/firebase-init.js
	import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
	import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
	import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
	import { getStorage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

	const firebaseConfig = { apiKey: "...", authDomain: "...", projectId: "...", storageBucket: "...", appId: "..." };
	const app = initializeApp(firebaseConfig);
	export const auth = getAuth(app);
	export const db = getFirestore(app);
	export const storage = getStorage(app);
	```

3) Migrate signup/login to Firebase Auth
- Replace the demo `signup.html` and `login.html` handlers to call `createUserWithEmailAndPassword` and `signInWithEmailAndPassword` respectively. Store user profile documents under `users/{uid}` in Firestore on signup.
- Use `onAuthStateChanged(auth, user => { ... })` to drive the UI (profile page, header logout, checkout guard).

4) Persist orders to Firestore
- On simulated payment success, write an order document to Firestore with the `uid` field. Example schema: `orders` collection documents: `{ uid, items: [...], total, shipping, status, createdAt }`.
- Update `order-history.html` to query Firestore for orders where `uid == auth.currentUser.uid` and render them.

5) Optional: Use Firebase Storage for images and avatars
- Upload user avatars to `avatars/{uid}/...` and store the download URL in `users/{uid}.avatarUrl`.
- Optionally migrate product images to Storage and update product image URLs.

6) Security rules (starter examples)
- Firestore rules to allow users to read/write only their own `users/{uid}` doc and to create/read orders where `uid` equals the authenticated user.

	```rules
	rules_version = '2';
	service cloud.firestore {
		match /databases/{database}/documents {
			match /users/{userId} {
				allow read, write: if request.auth != null && request.auth.uid == userId;
			}
			match /orders/{orderId} {
				allow create: if request.auth != null && request.resource.data.uid == request.auth.uid;
				allow read, update, delete: if request.auth != null && resource.data.uid == request.auth.uid;
			}
		}
	}
	```

7) Development and migration notes
- Use a separate Firebase project for development (do not expose production keys during testing).
- The Spark (free) tier is appropriate for small demos, but monitor reads/writes as the site usage grows.
- If migrating demo localStorage users, prompt users to sign up or implement a server-side import using the Admin SDK (not recommended from client-side).

8) Quick smoke tests
- Signup a new user via the site and verify a `users/{uid}` doc exists in Firestore.
- Sign in and confirm `onAuthStateChanged` updates the UI.
- Place an order (simulate payment) and confirm an `orders` document was created with `uid`.

If you want, we can add a template `js/firebase-init.js` (no secrets) and example edits for `login.html`, `signup.html`, `js/profile.js` and `js/checkout.js` to demonstrate the integration.