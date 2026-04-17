// shared.js — TSBOX™ navigation + footer (all pages)

const NAV_HTML = `
<nav id="tsbox-nav">
  <a href="index.html" class="nav-logo-wrap">
    <span class="nav-logo-name">TS<span>BOX</span>™</span>
    <span class="nav-logo-sub">Tree Saving Box</span>
  </a>

  <ul class="nav-links" id="nav-links">
    <li><a href="index.html">Home</a></li>

    <li class="has-dropdown">
      <button class="nav-drop-btn">Boxes <span class="chevron">▼</span></button>
      <div class="dropdown-menu">
        <a href="solution.html">All Box Types</a>
        <a href="solution.html#box-types">Dish Box</a>
        <a href="solution.html#box-types">Wardrobe Box</a>
        <a href="solution.html#box-types">Shoe Box</a>
        <a href="solution.html#box-types">Book Box</a>
        <a href="solution.html#box-types">Glassware Box</a>
        <a href="solution.html#box-types">Standard Box</a>
      </div>
    </li>

    <li class="has-dropdown">
      <button class="nav-drop-btn">Packages <span class="chevron">▼</span></button>
      <div class="dropdown-menu">
        <a href="index.html#packages">Studio Move — $49/wk</a>
        <a href="index.html#packages">2-Bedroom — $89/wk</a>
        <a href="index.html#packages">Family Move — $149/wk</a>
       </div>
    </li>
    <li><a href="about.html">Company</a></li> 
    <li><a href="index.html#faq">FAQ</a></li>
  </ul>

  <div class="nav-right">
    <a href="index.html#order" class="nav-cta">Reserve Boxes →</a>
    <button class="nav-hamburger" id="nav-toggle" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>

  <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
    <a href="index.html">🏠 Home</a>
    <div class="mob-group-label">Boxes</div>
    <a href="solution.html">All Box Types</a>
    <a href="solution.html#box-types">Dish / Wardrobe / Shoe / Book Box</a>
    <div class="mob-group-label">Packages</div>
    <a href="index.html#packages">Studio — $49/wk</a>
    <a href="index.html#packages">2-Bedroom — $89/wk</a>
    <a href="index.html#packages">Family — $149/wk</a>
        <a href="about.html#faq">Company</a> 
     <a href="index.html#faq">FAQ</a>
    <a href="index.html#order" class="mob-cta">Reserve Boxes →</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="f-brand">
      <div class="f-logo">TS<span>BOX</span>™</div>
      <div class="f-tagline">Rent Box · Save Trees · Save Bucks</div>
      <div class="f-addr">
        Concord Pacific, Corp.,<br>  
       Beverly Hills, California.<br><br> 
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
      </ul>
    </div>
    <div class="f-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="tel:3109995015">Call Us</a></li>
        <li><a href="mailto:1000pacific@gmail.com">Email Us</a></li>
        <li><a href="index.html#order">Reserve Boxes</a></li>
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

  // Active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('#')[0];
    if (href === path) a.classList.add('active');
  });

  // Hamburger
  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = drawer.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
      drawer.setAttribute('aria-hidden', !open);
      document.body.classList.toggle('drawer-open', open);
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#tsbox-nav')) {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
        drawer.setAttribute('aria-hidden', true);
        document.body.classList.remove('drawer-open');
      }
    });
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        document.body.classList.remove('drawer-open');
      });
    });
  }

  // Desktop dropdowns (click-based, works on touch)
  document.querySelectorAll('.has-dropdown').forEach(li => {
    li.querySelector('.nav-drop-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = li.classList.contains('drop-open');
      document.querySelectorAll('.has-dropdown').forEach(x => x.classList.remove('drop-open'));
      if (!isOpen) li.classList.add('drop-open');
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.has-dropdown').forEach(x => x.classList.remove('drop-open'));
  });

  // Scroll-reveal
  const ro = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('revealed'); ro.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = Math.min(i * 0.05, 0.4) + 's';
    ro.observe(el);
  });
});