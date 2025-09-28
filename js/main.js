// ===== YEESHA BAGS E-COMMERCE MAIN JAVASCRIPT =====
// Main interactive functionality for the Yeesha Bags website
// Handles: mobile menu, search, cart/wishlist, product rendering, forms

/* ===== INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Yeesha Bags website loaded');
    
    // Initialize all components
    initializeMobileMenu();
    initializeSearch();
    initializeCartModal();
    initializeProductGrids();
    initializeWishlistButtons();
    initializeNewsletterForm();
    initializeBadges();
    initializeScrollEffects();
    
    // Load initial data
    loadFeaturedProducts();
    loadNewArrivals();
    loadSaleProducts();
    loadCategories();
});

/* ===== MOBILE MENU FUNCTIONALITY ===== */
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('active');
            
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close menu on window resize to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
    }
}

function openMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const toggle = document.getElementById('mobileMenuToggle');
    
    mobileMenu.classList.add('active');
    toggle.innerHTML = '<i class="fas fa-times"></i>';
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const toggle = document.getElementById('mobileMenuToggle');
    
    mobileMenu.classList.remove('active');
    toggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.style.overflow = ''; // Restore scroll
}

/* ===== SEARCH FUNCTIONALITY ===== */
function initializeSearch() {
    const searchForms = document.querySelectorAll('.search-form');
    
    searchForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = form.querySelector('input[type="search"]');
            const query = input.value.trim();
            
            if (query) {
                performSearch(query);
            }
        });
    });
    
    // Real-time search suggestions (debounced)
    const searchInputs = document.querySelectorAll('input[type="search"]');
    searchInputs.forEach(input => {
        let debounceTimer;
        input.addEventListener('input', function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const query = this.value.trim();
                if (query.length >= 2) {
                    showSearchSuggestions(query, this);
                } else {
                    hideSearchSuggestions();
                }
            }, 300);
        });
    });
}

function performSearch(query) {
    console.log('Searching for:', query);
    
    // In a real app, this would redirect to search results page
    // For now, we'll simulate the search
    const results = window.YeeshaData.searchProducts(query);
    
    if (results.length > 0) {
        window.YeeshaData.showNotification(`Found ${results.length} products for "${query}"`, 'success');
        // Redirect to search results page (to be created)
        // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    } else {
        window.YeeshaData.showNotification(`No products found for "${query}"`, 'info');
    }
}

function showSearchSuggestions(query, inputElement) {
    // Remove existing suggestions
    hideSearchSuggestions();
    
    const results = window.YeeshaData.searchProducts(query).slice(0, 5);
    
    if (results.length === 0) return;
    
    const suggestions = document.createElement('div');
    suggestions.className = 'search-suggestions';
    suggestions.innerHTML = `
        <div class="suggestions-list">
            ${results.map(product => `
                <div class="suggestion-item" onclick="selectProduct('${product.id}')">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="suggestion-text">
                        <div class="suggestion-name">${product.name}</div>
                        <div class="suggestion-price">$${product.price}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Style the suggestions
    suggestions.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid var(--light-gray);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        z-index: 1000;
        max-height: 300px;
        overflow-y: auto;
    `;
    
    inputElement.parentNode.style.position = 'relative';
    inputElement.parentNode.appendChild(suggestions);
}

function hideSearchSuggestions() {
    const suggestions = document.querySelectorAll('.search-suggestions');
    suggestions.forEach(suggestion => suggestion.remove());
}

function selectProduct(productId) {
    hideSearchSuggestions();
    // In a real app, redirect to product detail page
    console.log('Selected product:', productId);
    window.YeeshaData.showNotification('Product selected!', 'success');
}

/* ===== CART MODAL FUNCTIONALITY ===== */
function initializeCartModal() {
    const cartModal = document.getElementById('cartModal');
    const cartLinks = document.querySelectorAll('[data-testid="cart-link"]');
    const closeCartModal = document.getElementById('closeCartModal');
    
    // Open cart modal
    cartLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openCartModal();
        });
    });
    
    // Close cart modal
    if (closeCartModal) {
        closeCartModal.addEventListener('click', closeCartModalHandler);
    }
    
    // Close on outside click
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === cartModal) {
                closeCartModalHandler();
            }
        });
    }
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && cartModal && cartModal.classList.contains('active')) {
            closeCartModalHandler();
        }
    });
}

function openCartModal() {
    const cartModal = document.getElementById('cartModal');
    const cartModalBody = document.getElementById('cartModalBody');
    
    if (cartModal && cartModalBody) {
        cartModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Load cart content
        loadCartContent();
    }
}

function closeCartModalHandler() {
    const cartModal = document.getElementById('cartModal');
    
    if (cartModal) {
        cartModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function loadCartContent() {
    const cartModalBody = document.getElementById('cartModalBody');
    const cartItems = window.YeeshaData.cartItems;
    
    if (cartItems.length === 0) {
        cartModalBody.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    <i class="fas fa-shopping-bag"></i>
                </div>
                <h4>Your cart is empty</h4>
                <p>Add some beautiful products to your cart to get started!</p>
                <button class="btn btn-primary" onclick="closeCartModalHandler()">
                    <i class="fas fa-shopping-bag"></i>
                    Continue Shopping
                </button>
            </div>
        `;
        return;
    }
    
    let cartHtml = '<div class="cart-items">';
    let total = 0;
    
    cartItems.forEach(item => {
        const product = window.YeeshaData.getProductById(item.productId);
        if (product) {
            const itemTotal = product.price * item.quantity;
            total += itemTotal;
            
            cartHtml += `
                <div class="cart-item" data-product-id="${item.productId}">
                    <div class="cart-item-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4>${product.name}</h4>
                        ${item.selectedColor ? `<p>Color: ${item.selectedColor}</p>` : ''}
                        ${item.selectedSize ? `<p>Size: ${item.selectedSize}</p>` : ''}
                        <div class="cart-item-price">$${product.price.toFixed(2)}</div>
                    </div>
                    <div class="cart-item-controls">
                        <div class="quantity-controls">
                            <button onclick="updateQuantity('${item.productId}', ${item.quantity - 1}, '${item.selectedColor}', '${item.selectedSize}')" 
                                    class="quantity-btn">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button onclick="updateQuantity('${item.productId}', ${item.quantity + 1}, '${item.selectedColor}', '${item.selectedSize}')" 
                                    class="quantity-btn">+</button>
                        </div>
                        <button onclick="removeFromCart('${item.productId}', '${item.selectedColor}', '${item.selectedSize}')" 
                                class="remove-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        }
    });
    
    cartHtml += `
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <h3>Total: $${total.toFixed(2)}</h3>
            </div>
            <div class="cart-actions">
                <button class="btn btn-outline" onclick="closeCartModalHandler()">Continue Shopping</button>
                <button class="btn btn-primary" onclick="goToCheckout()">
                    <i class="fas fa-credit-card"></i>
                    Checkout
                </button>
            </div>
        </div>
    `;
    
    cartModalBody.innerHTML = cartHtml;
}

function updateQuantity(productId, newQuantity, selectedColor, selectedSize) {
    window.YeeshaData.updateCartItemQuantity(productId, newQuantity, selectedColor, selectedSize);
    loadCartContent(); // Refresh cart display
}

function removeFromCart(productId, selectedColor, selectedSize) {
    window.YeeshaData.removeFromCart(productId, selectedColor, selectedSize);
    loadCartContent(); // Refresh cart display
}

function goToCheckout() {
    // In a real app, redirect to checkout page
    closeCartModalHandler();
    window.YeeshaData.showNotification('Redirecting to checkout...', 'info');
    // window.location.href = 'checkout.html';
}

/* ===== PRODUCT GRID RENDERING ===== */
function initializeProductGrids() {
    // This will be called when products are loaded
    console.log('Product grids initialized');
}

function renderProductCard(product) {
    const isInWishlist = window.YeeshaData.isInWishlist(product.id);
    
    return `
        <div class="product-card" data-product-id="${product.id}" data-testid="product-card-${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                
                ${product.onSale || product.isNew ? `
                    <div class="product-badges">
                        ${product.onSale ? '<span class="product-badge badge-sale">Sale</span>' : ''}
                        ${product.isNew ? '<span class="product-badge badge-new">New</span>' : ''}
                    </div>
                ` : ''}
                
                <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" 
                        onclick="toggleWishlist('${product.id}')"
                        data-testid="wishlist-${product.id}">
                    <i class="fas fa-heart"></i>
                </button>
                
                <button class="btn btn-primary quick-add" 
                        onclick="quickAddToCart('${product.id}')"
                        data-testid="quick-add-${product.id}">
                    <i class="fas fa-shopping-bag"></i>
                    Quick Add
                </button>
            </div>
            
            <div class="product-info">
                <div class="product-rating">
                    <div class="stars">
                        ${generateStarRating(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviewCount})</span>
                </div>
                
                <h3 class="product-name" data-testid="product-name-${product.id}">${product.name}</h3>
                
                <div class="product-price">
                    <span class="current-price" data-testid="product-price-${product.id}">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                
                <div class="stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
            </div>
        </div>
    `;
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHtml = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt star"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star star empty"></i>';
    }
    
    return starsHtml;
}

function renderCategoryCard(category) {
    return `
        <div class="category-card" data-category-id="${category.id}" data-testid="category-card-${category.id}">
            <img src="${category.image}" alt="${category.name}" loading="lazy">
            <div class="category-overlay">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <div class="category-cta">
                    <span>${category.productCount} Products</span>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    `;
}

/* ===== DATA LOADING FUNCTIONS ===== */
function loadFeaturedProducts() {
    const grid = document.getElementById('featuredProductsGrid');
    if (!grid) return;
    
    const featuredProducts = window.YeeshaData.getFeaturedProducts();
    
    if (featuredProducts.length === 0) {
        grid.innerHTML = '<div class="loading">No featured products available</div>';
        return;
    }
    
    grid.innerHTML = featuredProducts.map(product => renderProductCard(product)).join('');
    
    // Add click handlers for product cards
    addProductCardClickHandlers();
}

function loadNewArrivals() {
    const grid = document.getElementById('newArrivalsGrid');
    if (!grid) return;
    
    const newProducts = window.YeeshaData.getNewProducts();
    
    if (newProducts.length === 0) {
        grid.innerHTML = '<div class="loading">No new arrivals available</div>';
        return;
    }
    
    grid.innerHTML = newProducts.map(product => renderProductCard(product)).join('');
    
    // Add click handlers for product cards
    addProductCardClickHandlers();
}

function loadSaleProducts() {
    const grid = document.getElementById('saleProductsGrid');
    if (!grid) return;
    
    const saleProducts = window.YeeshaData.getSaleProducts();
    
    if (saleProducts.length === 0) {
        grid.innerHTML = '<div class="loading">No sale products available</div>';
        return;
    }
    
    grid.innerHTML = saleProducts.map(product => renderProductCard(product)).join('');
    
    // Add click handlers for product cards
    addProductCardClickHandlers();
}

function loadCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    
    const categories = window.YeeshaData.categories;
    
    if (categories.length === 0) {
        grid.innerHTML = '<div class="loading">No categories available</div>';
        return;
    }
    
    grid.innerHTML = categories.map(category => renderCategoryCard(category)).join('');
    
    // Add click handlers for category cards
    addCategoryCardClickHandlers();
}

/* ===== CLICK HANDLERS ===== */
function addProductCardClickHandlers() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on buttons
            if (e.target.closest('button')) return;
            
            const productId = this.dataset.productId;
            // In a real app, redirect to product detail page
            console.log('Viewing product:', productId);
            window.YeeshaData.showNotification('Product details coming soon!', 'info');
            // window.location.href = `product-detail.html?id=${productId}`;
        });
    });
}

function addCategoryCardClickHandlers() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryId = this.dataset.categoryId;
            // In a real app, redirect to category page
            console.log('Viewing category:', categoryId);
            window.YeeshaData.showNotification('Category page coming soon!', 'info');
            // window.location.href = `categories.html?category=${categoryId}`;
        });
    });
}

/* ===== WISHLIST FUNCTIONALITY ===== */
function initializeWishlistButtons() {
    // This will be called when products are loaded
    window.YeeshaData.updateWishlistBadge();
}

function toggleWishlist(productId) {
    const isAdded = window.YeeshaData.toggleWishlist(productId);
    
    // Update all wishlist buttons for this product
    const wishlistBtns = document.querySelectorAll(`[data-testid="wishlist-${productId}"]`);
    wishlistBtns.forEach(btn => {
        if (isAdded) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    window.YeeshaData.updateWishlistBadge();
}

/* ===== QUICK ADD TO CART ===== */
function quickAddToCart(productId) {
    const product = window.YeeshaData.getProductById(productId);
    
    if (!product) {
        window.YeeshaData.showNotification('Product not found!', 'error');
        return;
    }
    
    if (!product.inStock) {
        window.YeeshaData.showNotification('Product is out of stock!', 'error');
        return;
    }
    
    // For products with options, this would open a selection modal
    // For now, add with default options
    window.YeeshaData.addToCart(productId, 1);
}

/* ===== NEWSLETTER FORM ===== */
function initializeNewsletterForm() {
    const newsletterForms = document.querySelectorAll('#newsletterForm');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const submitBtn = form.querySelector('button[type="submit"]');
            const email = emailInput.value.trim();
            
            if (!email) {
                window.YeeshaData.showNotification('Please enter your email address', 'error');
                return;
            }
            
            // Disable button during submission
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
            submitBtn.disabled = true;
            
            try {
                const response = await window.YeeshaData.mockApi.subscribeNewsletter(email);
                
                if (response.success) {
                    window.YeeshaData.showNotification('Successfully subscribed to newsletter!', 'success');
                    emailInput.value = '';
                } else {
                    window.YeeshaData.showNotification('Subscription failed. Please try again.', 'error');
                }
            } catch (error) {
                window.YeeshaData.showNotification('Subscription failed. Please try again.', 'error');
            } finally {
                // Restore button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    });
}

/* ===== BADGE INITIALIZATION ===== */
function initializeBadges() {
    window.YeeshaData.updateCartBadge();
    window.YeeshaData.updateWishlistBadge();
}

/* ===== SCROLL EFFECTS ===== */
function initializeScrollEffects() {
    // Add scroll-to-top functionality
    const scrollBtn = createScrollToTopButton();
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
        
        // Add parallax effect to hero section
        addParallaxEffect();
    });
}

function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-burgundy);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: var(--shadow-md);
        transition: all var(--transition-fast);
    `;
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = 'var(--shadow-lg)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'var(--shadow-md)';
    });
    
    document.body.appendChild(scrollBtn);
    return scrollBtn;
}

function addParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    hero.style.transform = `translateY(${rate}px)`;
}

/* ===== BUTTON EVENT HANDLERS ===== */
// Hero buttons
document.addEventListener('DOMContentLoaded', function() {
    // Shop Now button
    const shopNowBtn = document.querySelector('[data-testid="hero-shop-now"]');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', function() {
            const featuredSection = document.querySelector('.featured-products');
            if (featuredSection) {
                featuredSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Explore Categories button
    const exploreCategoriesBtn = document.querySelector('[data-testid="hero-explore-categories"]');
    if (exploreCategoriesBtn) {
        exploreCategoriesBtn.addEventListener('click', function() {
            const categoriesSection = document.querySelector('.categories');
            if (categoriesSection) {
                categoriesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // View All buttons
    const viewAllCategoriesBtn = document.querySelector('[data-testid="view-all-categories"]');
    if (viewAllCategoriesBtn) {
        viewAllCategoriesBtn.addEventListener('click', function() {
            window.YeeshaData.showNotification('Categories page coming soon!', 'info');
            // window.location.href = 'categories.html';
        });
    }
    
    const viewAllProductsBtn = document.querySelector('[data-testid="view-all-products"]');
    if (viewAllProductsBtn) {
        viewAllProductsBtn.addEventListener('click', function() {
            window.YeeshaData.showNotification('All products page coming soon!', 'info');
            // window.location.href = 'products.html';
        });
    }
});

/* ===== UTILITY FUNCTIONS ===== */
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ===== ERROR HANDLING ===== */
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, send error to logging service
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // In production, send error to logging service
});

/* ===== ACCESSIBILITY HELPERS ===== */
// Keyboard navigation for modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        trapFocusInModal(e);
    }
});

function trapFocusInModal(e) {
    const cartModal = document.getElementById('cartModal');
    if (!cartModal || !cartModal.classList.contains('active')) return;
    
    const focusableElements = cartModal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
    }
}

// Announce dynamic content changes to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

/* ===== DEVELOPMENT HELPERS ===== */
// Console logging for development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('Yeesha Bags Development Mode');
    console.log('Available data:', window.YeeshaData);
    
    // Add some development helpers to window
    window.dev = {
        addToCart: (productId, quantity = 1) => window.YeeshaData.addToCart(productId, quantity),
        clearCart: () => {
            window.YeeshaData.cartItems.length = 0;
            window.YeeshaData.updateCartBadge();
        },
        showAllProducts: () => console.table(window.YeeshaData.products),
        simulateError: () => { throw new Error('Test error for development'); }
    };
}

console.log('Yeesha Bags main.js loaded successfully!');