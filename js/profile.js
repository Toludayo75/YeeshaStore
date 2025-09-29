// Auth-aware profile UI for YeeshaStore
document.addEventListener('DOMContentLoaded', function () {
  function getUser() {
    try {
      const raw = localStorage.getItem('user') || sessionStorage.getItem('user');
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  const user = getUser();
  const accountLayout = document.querySelector('.account-layout');
  if (!accountLayout) return;

  if (!user) {
    // Show a simple sign-in prompt when not authenticated
    accountLayout.innerHTML = `
      <div style="padding:48px 16px;text-align:center;">
        <h2 style="margin-bottom:8px;">Welcome to your account</h2>
        <p style="color:#444;margin-bottom:18px;">You are not signed in. Sign in to view and manage your profile, orders, and wishlist.</p>
        <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
          <a href="login.html?next=profile.html" class="btn btn-primary">Sign in</a>
          <a href="signup.html?next=profile.html" class="btn btn-ghost">Create account</a>
          <a href="index.html" class="btn btn-outline">Continue browsing</a>
        </div>
      </div>
    `;
    return; // nothing else to do
  }

  // If user exists, populate UI fields where present
  try {
    const displayName = user.name || (user.email ? user.email.split('@')[0] : 'Customer');
    const nameParts = String(displayName).split(' ');

    const userNameEl = document.getElementById('userName');
    const userEmailEl = document.getElementById('userEmail');
    if (userNameEl) userNameEl.textContent = displayName;
    if (userEmailEl) userEmailEl.textContent = user.email || '';

    // Basic form population
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const memberSince = document.getElementById('memberSince');

    if (firstNameInput) firstNameInput.value = nameParts[0] || '';
    if (lastNameInput) lastNameInput.value = nameParts.slice(1).join(' ') || '';
    if (emailInput) emailInput.value = user.email || '';
    if (phoneInput && user.phone) phoneInput.value = user.phone;
    if (memberSince) memberSince.textContent = (user.memberSince || new Date().getFullYear());

    // Update avatar if user.avatar present
    const avatarImage = document.getElementById('avatarImage');
    const avatarIcon = document.getElementById('avatarIcon');
    if (avatarImage && user.avatar) {
      avatarImage.src = user.avatar;
      if (avatarIcon) avatarIcon.style.display = 'none';
    }

    // Update some quick stats from localStorage where available
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const totalOrdersEl = document.getElementById('totalOrders');
    const wishlistItemsEl = document.getElementById('wishlistItems');
    if (totalOrdersEl) totalOrdersEl.textContent = String((orders && orders.length) || 0);
    if (wishlistItemsEl) wishlistItemsEl.textContent = String((wishlist && wishlist.length) || 0);

    // Wire logout: link in the sidebar has data-testid nav-logout
    const logoutLink = document.querySelector('[data-testid="nav-logout"]');
    if (logoutLink) {
      logoutLink.setAttribute('href', '#');
      logoutLink.addEventListener('click', function (e) {
        e.preventDefault();
        try { localStorage.removeItem('user'); sessionStorage.removeItem('user'); } catch (err) {}
        // also clear cart/wishlist as desired in demo
        // location to homepage after logout
        location.href = 'index.html';
      });
    }

    // Handle profile form save - persist demo changes to localStorage
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
      profileForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const updated = Object.assign({}, user);
        const fn = document.getElementById('firstName') && document.getElementById('firstName').value.trim();
        const ln = document.getElementById('lastName') && document.getElementById('lastName').value.trim();
        const em = document.getElementById('email') && document.getElementById('email').value.trim();
        const ph = document.getElementById('phone') && document.getElementById('phone').value.trim();
        updated.name = [fn, ln].filter(Boolean).join(' ') || updated.name;
        updated.email = em || updated.email;
        if (ph) updated.phone = ph;
        try { localStorage.setItem('user', JSON.stringify(updated)); } catch (err) {}
        // quick visual feedback
        const saveBtn = profileForm.querySelector('[data-testid="save-profile"]');
        if (saveBtn) {
          const old = saveBtn.textContent;
          saveBtn.textContent = 'Saved';
          setTimeout(() => saveBtn.textContent = old, 1200);
        }
      });
    }
  } catch (err) {
    console.error('Profile script error', err);
  }
});
