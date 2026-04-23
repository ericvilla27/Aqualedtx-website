/* ============================================================
   AquaLED — Shared Components (nav, footer, mobile menu)
   Injected via <script src="components.js"></script>
============================================================ */

/* ---------- NAV ---------- */
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navLinks = [
    { href: 'index.html',    label: 'Home' },
    { href: 'services.html', label: 'Services' },
    { href: 'gallery.html',  label: 'Projects' },
    { href: 'about.html',    label: 'About' },
    { href: 'contact.html',  label: 'Contact' },
  ];

  const linksHTML = navLinks.map(l =>
    `<a href="${l.href}" class="${currentPage === l.href ? 'active' : ''}">${l.label}</a>`
  ).join('');

  const mobileLinksHTML = navLinks.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <nav id="navbar">
      <div class="container">
        <div class="nav-inner">
          <a href="index.html" class="nav-logo">
            <span class="logo-name">Aqua<span>LED</span>, LLC</span>
            <span class="logo-tag">Central Texas Outdoor Contractor</span>
          </a>
          <div class="nav-links">
            ${linksHTML}
            <a href="tel:+15126572152" class="btn btn-primary nav-cta">Call Now</a>
          </div>
          <button class="hamburger" id="hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="mobile-nav" id="mobileNav">
        ${mobileLinksHTML}
        <a href="tel:+15126572152" style="color:#2eb86a;font-weight:800;">(512) 657-2152 — Call Now</a>
      </div>
    </nav>
  `);

  document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('mobileNav').classList.toggle('open');
  });
})();

/* ---------- FOOTER ---------- */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const footerTarget = document.getElementById('footer-placeholder');
    if (!footerTarget) return;

    footerTarget.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="logo-name">Aqua<span>LED</span>, LLC</div>
              <p>Central Texas outdoor contractor specializing in irrigation, landscape lighting, hardscape, and concrete. Fast turnaround. Direct communication. Built right.</p>
            </div>
            <div class="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="gallery.html">Projects</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Contact</h4>
              <div class="footer-contact-item">
                <span class="ico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></span>
                <a href="tel:+15126572152">(512) 657-2152</a>
              </div>
              <div class="footer-contact-item">
                <span class="ico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
                <a href="mailto:info@aqualedllc.com">info@aqualedllc.com</a>
              </div>
              <div class="footer-contact-item">
                <span class="ico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
                <span>Buda, TX — Serving Central Texas</span>
              </div>
              <div class="footer-contact-item">
                <span class="ico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
                <span>Mon–Fri 7am–6pm · Sat 8am–2pm</span>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2025 AquaLED, LLC. All rights reserved.</span>
            <span>Serving Buda · Kyle · Austin · San Marcos · Lockhart · Central Texas</span>
          </div>
        </div>
      </footer>
    `;
  });
})();
