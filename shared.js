// shared.js — TSBOX™ navigation + footer + interactions

const NAV_HTML = `
<nav id="tsbox-nav">
  <a href="index.html" class="logo">TS<span>BOX</span>™</a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="solution.html">Solution</a></li>
    <li><a href="financials.html">Financials</a></li>
    <li><a href="invest.html">Invest</a></li>
    <li><a href="about.html">About</a></li>
  </ul>
  <div style="display:flex;align-items:center;gap:1rem;">
    <a href="mailto:1000pacific@gmail.com" class="nav-btn">Invest Now</a>
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
      <h4>Explore</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="solution.html">The Solution</a></li>
        <li><a href="financials.html">Financials</a></li>
        <li><a href="invest.html">Invest</a></li>
        <li><a href="about.html">About Us</a></li>
      </ul>
    </div>
    <div class="f-col">
      <h4>Company</h4>
      <ul>
        <li><a href="about.html#vision">Our Vision</a></li>
        <li><a href="about.html#team">Leadership</a></li>
        <li><a href="about.html#values">Core Values</a></li>
        <li><a href="about.html#marketing">Go-To-Market</a></li>
      </ul>
    </div>
    <div class="f-col">
      <h4>Investors</h4>
      <ul>
        <li><a href="invest.html#funding">The Ask</a></li>
        <li><a href="invest.html#alliances">Alliances</a></li>
        <li><a href="financials.html#projections">Projections</a></li>
        <li><a href="mailto:1000pacific@gmail.com">Contact IR</a></li>
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
  // Inject nav + footer
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Mobile hamburger
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('tsbox-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('mobile-nav-open');
    });
    document.addEventListener('click', e => {
      if (!nav.contains(e.target)) {
        document.body.classList.remove('mobile-nav-open');
      }
    });
  }

  // Scroll-reveal: fade up elements with .reveal class
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity .6s ease ${i * 0.07}s, transform .6s cubic-bezier(.16,1,.3,1) ${i * 0.07}s`;
    revealObserver.observe(el);
  });

  document.addEventListener('scroll', () => {}, { passive: true });
});

// Utility for revealed elements
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `.revealed { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);
});