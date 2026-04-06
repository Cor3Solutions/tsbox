// shared.js — inject nav + footer
const NAV_HTML = `
<nav>
  <a href="index.html" class="logo">TS<span>BOX</span>™</a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="solution.html">Solution</a></li>
    <li><a href="financials.html">Financials</a></li>
    <li><a href="invest.html">Invest</a></li>
    <li><a href="about.html">About</a></li>
  </ul>
  <a href="mailto:1000pacific@gmail.com" class="nav-btn">Invest Now</a>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="f-logo">TSBOX™</div>
  <div class="f-tag">Rent Box · Save Trees · Save Bucks</div>
  <div class="f-links">
    <a href="index.html">Home</a>
    <a href="solution.html">Solution</a>
    <a href="financials.html">Financials</a>
    <a href="invest.html">Invest</a>
    <a href="about.html">About</a>
  </div>
  <div class="f-contact">
    Concord Pacific Corp · Roman Alexander, CEO<br>
    8665 Wilshire Blvd, Suite 302, Beverly Hills, CA 90211<br>
    Tel: 310-999-5015 · <a href="mailto:1000pacific@gmail.com">1000pacific@gmail.com</a>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Mark active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});