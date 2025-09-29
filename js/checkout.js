// Simple checkout auth check + simulated payment modal
document.addEventListener('DOMContentLoaded', function () {
  function isLoggedIn() {
    try {
      return !!localStorage.getItem('user') || !!sessionStorage.getItem('user');
    } catch (e) { return false; }
  }

  function redirectToLogin() {
    const next = 'checkout.html';
    window.location.href = `login.html?next=${encodeURIComponent(next)}`;
  }

  // If not logged in, redirect
  if (!isLoggedIn()) {
    redirectToLogin();
    return;
  }

  // Create modal if missing
  let modal = document.getElementById('paymentModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'paymentModal';
    modal.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);align-items:center;justify-content:center;z-index:9999;';
    modal.innerHTML = `
      <div style="background:#fff;border-radius:8px;padding:20px;max-width:480px;width:100%;">
        <h3>Secure Payment (Demo)</h3>
        <p style="color:hsl(220,10%,50%);">Enter dummy card details to simulate a payment.</p>
        <form id="paymentForm" style="display:grid;gap:8px;">
          <label>Card number<input type="text" id="cardNumber" placeholder="4242 4242 4242 4242" required></label>
          <div style="display:flex;gap:8px;"><label style="flex:1">MM/YY<input type="text" id="exp" placeholder="12/34" required></label><label style="flex:.8">CVC<input type="text" id="cvc" placeholder="123" required></label></div>
          <div style="display:flex;gap:.5rem;justify-content:flex-end;margin-top:8px;"><button type="button" id="pmCancel" class="btn btn-ghost">Cancel</button><button type="submit" class="btn btn-primary">Pay Now</button></div>
        </form>
        <div id="pmStatus" style="display:none;margin-top:12px;text-align:center;"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const paymentForm = document.getElementById('paymentForm');
  const pmCancel = document.getElementById('pmCancel');
  const pmStatus = document.getElementById('pmStatus');

  function openModal() {
    modal.style.display = 'flex';
    pmStatus.style.display = 'none';
    if (paymentForm) paymentForm.style.display = 'grid';
  }
  function closeModal() { modal.style.display = 'none'; }

  // Attach to pay triggers
  const payTriggers = Array.from(document.querySelectorAll('#payNow, .checkout-pay, [data-action="pay"]'));
  payTriggers.forEach(t => t && t.addEventListener('click', function (e) { e.preventDefault(); openModal(); }));

  pmCancel && pmCancel.addEventListener('click', closeModal);

  if (paymentForm) {
    paymentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (paymentForm) paymentForm.style.display = 'none';
      pmStatus.style.display = 'block';
      pmStatus.innerHTML = '<p>Processing payment…</p>';
      setTimeout(function () {
        pmStatus.innerHTML = '<p style="color:green;font-weight:600;">Payment successful — thank you!</p>';
        try { localStorage.removeItem('cart'); sessionStorage.removeItem('cart'); } catch (err) {}
        setTimeout(function () { window.location.href = 'order-success.html'; }, 1400);
      }, 1500);
    });
  }
});
