// shared.js — TSBOX™ navigation + footer

const NAV_HTML = `
<nav id="tsbox-nav">
  <a href="index.html" class="logo">TS<span>BOX</span>™</a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="solution.html">Box Types</a></li>
    <li><a href="about.html">How It Works</a></li>
    <li><a href="financials.html">Pricing</a></li>
    <li><a href="invest.html">Investors</a></li>
  </ul>
  <div style="display:flex;align-items:center;gap:.8rem;">
    <a href="tel:3109995015" style="font-size:.85rem;font-weight:700;color:var(--green);display:none;" class="nav-phone">310-999-5015</a>
    <a href="index.html#order" class="nav-cta">Reserve Boxes →</a>
    <button class="nav-hamburger" id="nav-toggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="f-brand">
      <div class="f-logo">TS<span>BOX</span>™</div>
      <div class="f-tagline">Rent Box · Save Trees · Save Bucks</div>
      <div class="f-addr">
        Concord Pacific Corp<br>
        Roman Alexander, CEO &amp; Founder<br>
        8665 Wilshire Blvd, Suite 302<br>
        Beverly Hills, CA 90211<br><br>
        Tel: <a href="tel:3109995015">310-999-5015</a><br>
        <a href="mailto:1000pacific@gmail.com">1000pacific@gmail.com</a>
      </div>
    </div>
    <div class="f-col">
      <h4>Rent Boxes</h4>
      <ul>
        <li><a href="index.html#packages">View Packages</a></li>
        <li><a href="solution.html">Box Types</a></li>
        <li><a href="index.html#how-it-works">How It Works</a></li>
        <li><a href="financials.html">Pricing</a></li>
        <li><a href="index.html#faq">FAQ</a></li>
      </ul>
    </div>
    <div class="f-col">
      <h4>Company</h4>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="about.html#values">Our Values</a></li>
        <li><a href="about.html#team">Leadership</a></li>
        <li><a href="about.html#marketing">Partnerships</a></li>
      </ul>
    </div>
    <div class="f-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="tel:3109995015">Call Us</a></li>
        <li><a href="mailto:1000pacific@gmail.com">Email Us</a></li>
        <li><a href="invest.html">Investors</a></li>
        <li><a href="mailto:1000pacific@gmail.com">Get a Quote</a></li>
      </ul>
    </div>
  </div>
  <div class="f-bottom">
    <div class="f-copy">© 2025 TSBOX™ / Concord Pacific Corp. All rights reserved.</div>
    <div class="f-legal">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Use</a>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path || a.getAttribute('href').startsWith(path.split('#')[0])) {
      a.classList.add('active');
    }
  });

  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('tsbox-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => document.body.classList.toggle('mobile-nav-open'));
    document.addEventListener('click', e => {
      if (!nav.contains(e.target)) document.body.classList.remove('mobile-nav-open');
    });
  }

  // Scroll-reveal
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.06}s`;
    revealObserver.observe(el);
  });
});