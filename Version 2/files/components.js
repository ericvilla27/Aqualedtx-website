/* ============================================================
   AquaLED, LLC — Shared Components v2
   Phone: (512) 657-2152
   Email: info@aqualedllc.com
============================================================ */

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
            <a href="contact.html" class="btn btn-gold nav-cta">Free Estimate</a>
          </div>
          <button class="hamburger" id="hamburger" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="mobile-nav" id="mobileNav">
        ${mobileLinksHTML}
        <a href="contact.html" style="color:var(--gold);font-weight:800;margin-top:0.5rem;">→ Request Free Estimate</a>
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
    const target = document.getElementById('footer-placeholder');
    if (!target) return;

    target.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="logo-name">Aqua<span>LED</span>, LLC</div>
              <p>Central Texas' trusted outdoor contractor for irrigation, landscape lighting, hardscape, excavation, and concrete work. Serving residential and commercial clients across the Austin metro and surrounding communities.</p>
              <div style="margin-top:1.25rem;display:flex;gap:0.75rem;flex-wrap:wrap;">
                <span style="background:rgba(201,168,76,0.12);border:1px solid rgba(201,168,76,0.25);color:rgba(255,255,255,0.65);font-size:0.75rem;font-weight:600;padding:0.3rem 0.8rem;border-radius:20px;letter-spacing:0.05em;">LI #22379</span>
                <span style="background:rgba(201,168,76,0.12);border:1px solid rgba(201,168,76,0.25);color:rgba(255,255,255,0.65);font-size:0.75rem;font-weight:600;padding:0.3rem 0.8rem;border-radius:20px;letter-spacing:0.05em;">$2M General Liability</span>
                <span style="background:rgba(201,168,76,0.12);border:1px solid rgba(201,168,76,0.25);color:rgba(255,255,255,0.65);font-size:0.75rem;font-weight:600;padding:0.3rem 0.8rem;border-radius:20px;letter-spacing:0.05em;">5 Years in Business</span>
              </div>
            </div>
            <div class="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="gallery.html">Projects</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Free Estimate</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Contact</h4>
              <div class="footer-contact-item">
                <span class="ico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></span>
                <div>
                  <a href="sms:+15126572152">(512) 657-2152</a>
                  <span style="display:block;font-size:0.78rem;color:rgba(255,255,255,0.35);margin-top:0.1rem;">Text preferred</span>
                </div>
              </div>
              <div class="footer-contact-item">
                <span class="ico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
                <a href="mailto:info@aqualedllc.com">info@aqualedllc.com</a>
              </div>
              <div class="footer-contact-item">
                <span class="ico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
                <span>Based in Central Texas</span>
              </div>
              <div class="footer-contact-item">
                <span class="ico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
                <span>Mon–Fri 7am–6pm · Sat 8am–2pm</span>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2025 AquaLED, LLC. All rights reserved. Licensed Irrigator LI #22379.</span>
            <span>Buda · Kyle · Austin · San Marcos · Lockhart · All of Central Texas</span>
          </div>
        </div>
      </footer>
    `;
  });
})();
