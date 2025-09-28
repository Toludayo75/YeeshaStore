// ===== YEESHA BAGS E-COMMERCE DATA =====
// HARDCODED DATA - Replace with API calls in production
// This file contains all mock data for products, categories, users, etc.

/* ===== PRODUCT DATA ===== */
// HARDCODED PRODUCT DATA - Replace with database/API calls in production
const products = [
    {
        id: '1',
        name: 'Premium Leather Handbag',
        price: 89,
        originalPrice: 120,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
        category: 'bags',
        rating: 5.0,
        reviewCount: 24,
        description: 'Handcrafted premium leather handbag with elegant design perfect for daily use. Made from genuine leather with careful attention to detail.',
        inStock: true,
        featured: true,
        isNew: false,
        onSale: true,
        colors: ['Black', 'Brown', 'Burgundy'],
        sizes: ['Small', 'Medium', 'Large']
    },
    {
        id: '2',
        name: 'Modest Prayer Dress',
        price: 65,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
        category: 'modest-wear',
        rating: 5.0,
        reviewCount: 18,
        description: 'Beautiful flowing prayer dress made from comfortable breathable fabric. Perfect for daily prayers and special occasions.',
        inStock: true,
        featured: true,
        isNew: true,
        onSale: false,
        colors: ['Navy', 'Black', 'Burgundy', 'Cream'],
        sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
        id: '3',
        name: 'Islamic Wall Art Set',
        price: 45,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        category: 'islamic-items',
        rating: 4.8,
        reviewCount: 32,
        description: 'Set of 3 beautiful Islamic calligraphy wall art pieces for home decoration. High-quality prints with elegant Islamic designs.',
        inStock: true,
        featured: true,
        isNew: false,
        onSale: false,
        colors: ['Gold', 'Black', 'White'],
        sizes: ['Small', 'Large']
    },
    {
        id: '4',
        name: 'Crossbody Bag - Black',
        price: 42,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&q=80',
        category: 'bags',
        rating: 4.9,
        reviewCount: 15,
        description: 'Compact crossbody bag perfect for everyday essentials. Stylish and practical with adjustable strap.',
        inStock: true,
        featured: false,
        isNew: false,
        onSale: false,
        colors: ['Black', 'Brown', 'Navy'],
        sizes: ['One Size']
    },
    {
        id: '5',
        name: 'Hijab Collection Pack',
        price: 35,
        originalPrice: 50,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&q=80',
        category: 'modest-wear',
        rating: 5.0,
        reviewCount: 28,
        description: 'Pack of 5 premium hijabs in various colors and fabrics. Soft, comfortable, and perfect for daily wear.',
        inStock: true,
        featured: false,
        isNew: false,
        onSale: true,
        colors: ['Mixed Colors'],
        sizes: ['One Size']
    },
    {
        id: '6',
        name: 'Prayer Mat - Luxury',
        price: 78,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&q=80',
        category: 'islamic-items',
        rating: 4.9,
        reviewCount: 21,
        description: 'Luxurious prayer mat with intricate patterns and superior comfort. Made from high-quality materials.',
        inStock: true,
        featured: false,
        isNew: true,
        onSale: false,
        colors: ['Burgundy', 'Navy', 'Green'],
        sizes: ['Standard']
    },
    {
        id: '7',
        name: 'Elegant Abaya',
        price: 95,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&q=80',
        category: 'modest-wear',
        rating: 4.7,
        reviewCount: 12,
        description: 'Elegant abaya with beautiful embroidery details. Perfect for special occasions and everyday modest wear.',
        inStock: true,
        featured: false,
        isNew: true,
        onSale: false,
        colors: ['Black', 'Navy', 'Burgundy'],
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: '8',
        name: 'Tote Bag - Canvas',
        price: 32,
        originalPrice: 45,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&q=80',
        category: 'bags',
        rating: 4.6,
        reviewCount: 9,
        description: 'Durable canvas tote bag perfect for shopping and daily use. Eco-friendly and spacious.',
        inStock: true,
        featured: false,
        isNew: false,
        onSale: true,
        colors: ['Natural', 'Black', 'Navy'],
        sizes: ['Large']
    }
];

/* ===== CATEGORY DATA ===== */
// HARDCODED CATEGORY DATA - Replace with database/API calls in production
const categories = [
    {
        id: 'bags',
        name: 'Handmade Bags',
        slug: 'bags',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop',
        description: 'Premium handcrafted bags for every occasion',
        productCount: 3
    },
    {
        id: 'modest-wear',
        name: 'Modest Wear',
        slug: 'modest-wear',
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=400&fit=crop',
        description: 'Elegant and comfortable modest clothing',
        productCount: 4
    },
    {
        id: 'islamic-items',
        name: 'Islamic Items',
        slug: 'islamic-items',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        description: 'Beautiful Islamic art and decorative items',
        productCount: 2
    }
];

/* ===== REVIEWS DATA ===== */
// HARDCODED REVIEWS DATA - Replace with database/API calls in production
const reviews = [
    {
        id: '1',
        productId: '1',
        userName: 'Aisha Rahman',
        userAvatar: 'AR',
        rating: 5,
        comment: 'Beautiful bag! The quality is amazing and it goes with everything. Highly recommend.',
        date: '2024-01-15',
        verified: true
    },
    {
        id: '2',
        productId: '2',
        userName: 'Fatima Al-Zahra',
        userAvatar: 'FA',
        rating: 5,
        comment: 'Perfect for prayer time. Very comfortable and elegant. The fabric is so soft.',
        date: '2024-01-10',
        verified: true
    },
    {
        id: '3',
        productId: '3',
        userName: 'Mariam Hassan',
        userAvatar: 'MH',
        rating: 5,
        comment: 'These wall art pieces transformed my living room. Beautiful Islamic calligraphy.',
        date: '2024-01-08',
        verified: true
    },
    {
        id: '4',
        productId: '1',
        userName: 'Sarah Ahmed',
        userAvatar: 'SA',
        rating: 4,
        comment: 'Good quality bag, arrived quickly. The color is exactly as shown in photos.',
        date: '2024-01-05',
        verified: true
    }
];

/* ===== USER DATA ===== */
// HARDCODED USER DATA - Replace with authentication system in production
const currentUser = {
    id: 'user1',
    name: 'Amina Johnson',
    email: 'amina.johnson@email.com',
    avatar: 'AJ',
    addresses: [
        {
            id: 'addr1',
            type: 'home',
            name: 'Home Address',
            street: '123 Islamic District',
            city: 'Modest City',
            state: 'MC',
            zipCode: '12345',
            country: 'USA',
            isDefault: true
        }
    ],
    paymentMethods: [
        {
            id: 'pm1',
            type: 'card',
            last4: '4242',
            brand: 'visa',
            expiryMonth: 12,
            expiryYear: 2025,
            isDefault: true
        }
    ]
};

/* ===== CART & WISHLIST DATA ===== */
// HARDCODED CART DATA - Replace with proper state management in production
let cartItems = [
    // Example cart item structure:
    // {
    //     productId: '1',
    //     quantity: 2,
    //     selectedColor: 'Black',
    //     selectedSize: 'Medium',
    //     addedAt: '2024-01-20'
    // }
];

// HARDCODED WISHLIST DATA - Replace with proper state management in production
let wishlistItems = [
    // Example wishlist item structure:
    // {
    //     productId: '2',
    //     addedAt: '2024-01-19'
    // }
];

/* ===== ORDER HISTORY DATA ===== */
// HARDCODED ORDER HISTORY - Replace with database/API calls in production
const orderHistory = [
    {
        id: 'ORD-001',
        date: '2024-01-10',
        status: 'delivered',
        total: 154.00,
        items: [
            {
                productId: '1',
                productName: 'Premium Leather Handbag',
                productImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop',
                quantity: 1,
                price: 89,
                selectedColor: 'Black',
                selectedSize: 'Medium'
            },
            {
                productId: '2',
                productName: 'Modest Prayer Dress',
                productImage: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&h=100&fit=crop',
                quantity: 1,
                price: 65,
                selectedColor: 'Navy',
                selectedSize: 'M'
            }
        ],
        shipping: {
            method: 'Standard',
            cost: 0, // Free shipping
            address: '123 Islamic District, Modest City, MC 12345'
        }
    }
];

/* ===== NEWSLETTER & CONTACT DATA ===== */
// HARDCODED NEWSLETTER SUBSCRIBERS - Replace with email service integration
let newsletterSubscribers = [];

/* ===== UTILITY FUNCTIONS ===== */
// HARDCODED UTILITY FUNCTIONS - Replace with proper API integration

// Get product by ID
function getProductById(productId) {
    return products.find(product => product.id === productId);
}

// Get products by category
function getProductsByCategory(categoryId) {
    return products.filter(product => product.category === categoryId);
}

// Get featured products
function getFeaturedProducts() {
    return products.filter(product => product.featured);
}

// Get new products
function getNewProducts() {
    return products.filter(product => product.isNew);
}

// Get sale products
function getSaleProducts() {
    return products.filter(product => product.onSale);
}

// Get reviews for a product
function getProductReviews(productId) {
    return reviews.filter(review => review.productId === productId);
}

// Search products
function searchProducts(query) {
    const lowercaseQuery = query.toLowerCase();
    return products.filter(product =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.category.toLowerCase().includes(lowercaseQuery)
    );
}

// Filter products
function filterProducts(filters) {
    let filteredProducts = [...products];

    if (filters.category && filters.category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === filters.category);
    }

    if (filters.priceRange) {
        switch (filters.priceRange) {
            case 'under-50':
                filteredProducts = filteredProducts.filter(product => product.price < 50);
                break;
            case '50-100':
                filteredProducts = filteredProducts.filter(product => product.price >= 50 && product.price <= 100);
                break;
            case 'over-100':
                filteredProducts = filteredProducts.filter(product => product.price > 100);
                break;
        }
    }

    if (filters.inStockOnly) {
        filteredProducts = filteredProducts.filter(product => product.inStock);
    }

    return filteredProducts;
}

// Sort products
function sortProducts(products, sortBy) {
    const sortedProducts = [...products];

    switch (sortBy) {
        case 'price-low':
            return sortedProducts.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sortedProducts.sort((a, b) => b.price - a.price);
        case 'rating':
            return sortedProducts.sort((a, b) => b.rating - a.rating);
        case 'newest':
            return sortedProducts.sort((a, b) => b.isNew - a.isNew);
        case 'name':
            return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        default:
            // Default: featured first, then by name
            return sortedProducts.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return a.name.localeCompare(b.name);
            });
    }
}

/* ===== CART MANAGEMENT FUNCTIONS ===== */
// HARDCODED CART FUNCTIONS - Replace with proper state management in production

// Add item to cart
function addToCart(productId, quantity = 1, selectedColor = null, selectedSize = null) {
    const existingItem = cartItems.find(item =>
        item.productId === productId &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({
            productId,
            quantity,
            selectedColor,
            selectedSize,
            addedAt: new Date().toISOString()
        });
    }

    updateCartBadge();
    showNotification('Product added to cart!', 'success');
}

// Remove item from cart
function removeFromCart(productId, selectedColor = null, selectedSize = null) {
    cartItems = cartItems.filter(item =>
        !(item.productId === productId &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize)
    );

    updateCartBadge();
    showNotification('Product removed from cart!', 'info');
}

// Update cart item quantity
function updateCartItemQuantity(productId, newQuantity, selectedColor = null, selectedSize = null) {
    const item = cartItems.find(item =>
        item.productId === productId &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
    );

    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId, selectedColor, selectedSize);
        } else {
            item.quantity = newQuantity;
            updateCartBadge();
        }
    }
}

// Get cart total
function getCartTotal() {
    return cartItems.reduce((total, item) => {
        const product = getProductById(item.productId);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);
}

// Get cart item count
function getCartItemCount() {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
}

/* ===== WISHLIST MANAGEMENT FUNCTIONS ===== */
// HARDCODED WISHLIST FUNCTIONS - Replace with proper state management in production

// Add/remove item from wishlist (toggle)
function toggleWishlist(productId) {
    const existingItem = wishlistItems.find(item => item.productId === productId);

    if (existingItem) {
        wishlistItems = wishlistItems.filter(item => item.productId !== productId);
        showNotification('Product removed from wishlist!', 'info');
        return false; // removed
    } else {
        wishlistItems.push({
            productId,
            addedAt: new Date().toISOString()
        });
        showNotification('Product added to wishlist!', 'success');
        return true; // added
    }
}

// Check if product is in wishlist
function isInWishlist(productId) {
    return wishlistItems.some(item => item.productId === productId);
}

// Get wishlist item count
function getWishlistItemCount() {
    return wishlistItems.length;
}

/* ===== BADGE UPDATE FUNCTIONS ===== */
// Update cart badge in header
function updateCartBadge() {
    const cartBadge = document.getElementById('cartCount');
    if (cartBadge) {
        const count = getCartItemCount();
        cartBadge.textContent = count;
        cartBadge.style.display = count > 0 ? 'flex' : 'none';
    }
}

// Update wishlist badge in header
function updateWishlistBadge() {
    const wishlistBadge = document.getElementById('wishlistCount');
    if (wishlistBadge) {
        const count = getWishlistItemCount();
        wishlistBadge.textContent = count;
        wishlistBadge.style.display = count > 0 ? 'flex' : 'none';
    }
}

/* ===== NOTIFICATION SYSTEM ===== */
// HARDCODED NOTIFICATION SYSTEM - Replace with proper toast/notification library
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--primary-burgundy)' : type === 'error' ? '#dc2626' : '#6b7280'};
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

/* ===== MOCK API SIMULATION ===== */
// HARDCODED API SIMULATION - Replace with real API calls in production

// Simulate API delay
function simulateApiDelay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Mock API responses
const mockApi = {
    // Get all products
    async getProducts() {
        await simulateApiDelay();
        return { success: true, data: products };
    },

    // Get product by ID
    async getProduct(id) {
        await simulateApiDelay();
        const product = getProductById(id);
        return product ? { success: true, data: product } : { success: false, error: 'Product not found' };
    },

    // Submit newsletter subscription
    async subscribeNewsletter(email) {
        await simulateApiDelay();
        newsletterSubscribers.push({ email, subscribedAt: new Date().toISOString() });
        return { success: true, message: 'Successfully subscribed to newsletter' };
    },

    // Submit contact form
    async submitContactForm(formData) {
        await simulateApiDelay();
        return { success: true, message: 'Your message has been sent successfully' };
    }
};

// Export data and functions for use in other files
// Note: In production, these would be imported from API modules
window.YeeshaData = {
    products,
    categories,
    reviews,
    currentUser,
    cartItems,
    wishlistItems,
    orderHistory,
    
    // Utility functions
    getProductById,
    getProductsByCategory,
    getFeaturedProducts,
    getNewProducts,
    getSaleProducts,
    getProductReviews,
    searchProducts,
    filterProducts,
    sortProducts,
    
    // Cart functions
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    getCartTotal,
    getCartItemCount,
    
    // Wishlist functions
    toggleWishlist,
    isInWishlist,
    getWishlistItemCount,
    
    // Badge updates
    updateCartBadge,
    updateWishlistBadge,
    
    // Notifications
    showNotification,
    
    // Mock API
    mockApi
};