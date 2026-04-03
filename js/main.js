/* ============================================================
   OneTree Pakistan — Main JavaScript
   File: js/main.js
   ============================================================ */

// ── NAVBAR SCROLL ──────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── MOBILE MENU ────────────────────────────────────────────
function openMobile()  { document.getElementById('mobileMenu').classList.add('open');    document.body.style.overflow = 'hidden'; }
function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); document.body.style.overflow = ''; }

// ── SCROLL REVEAL ──────────────────────────────────────────
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
setTimeout(() => {
  document.querySelectorAll('#hero .reveal').forEach(el => el.classList.add('revealed'));
}, 80);

// ── SPONSOR ESTIMATOR ──────────────────────────────────────
let treeCount    = (typeof SITE !== 'undefined' && SITE.sponsorTree) ? SITE.sponsorTree.defaultTrees : 25;
const pricePerTree = (typeof SITE !== 'undefined' && SITE.sponsorTree) ? SITE.sponsorTree.pricePerTree : 350;
const co2PerTree   = (typeof SITE !== 'undefined' && SITE.sponsorTree) ? SITE.sponsorTree.co2PerTree   : 5;

function updateEstimator() {
  const el = id => document.getElementById(id);
  if (el('treeCount')) el('treeCount').textContent = treeCount.toLocaleString();
  if (el('costTrees')) el('costTrees').textContent = treeCount.toLocaleString();
  if (el('co2Est'))    el('co2Est').textContent    = (treeCount * co2PerTree).toLocaleString() + ' kg/yr';
  if (el('totalCost')) el('totalCost').textContent = 'PKR ' + (treeCount * pricePerTree).toLocaleString();
  renderTreeBars();
}

function changeCount(delta) { treeCount = Math.max(1, treeCount + delta); updateEstimator(); }
function setCount(n)         { treeCount = n; updateEstimator(); }

function renderTreeBars() {
  const row = document.getElementById('treeVisualRow');
  if (!row) return;
  const stages  = ['M1','M3','M6','M9','M12','M18','Now'];
  const heights = [18, 28, 40, 54, 66, 78, 92];
  const pcts    = [0.30, 0.42, 0.55, 0.67, 0.78, 0.90, 1.00];
  row.innerHTML = stages.map((s, i) => {
    const cnt = Math.min(treeCount, Math.round(treeCount * pcts[i]));
    return `<div class="tree-bar-item">
      <div class="tree-bar-val">${cnt.toLocaleString()}</div>
      <div class="tree-bar-fill" style="height:${heights[i]}px;${i===6?'background:linear-gradient(180deg,#4CAF50,#1a3d1f)':''}"></div>
      <div class="tree-bar-label">${s}</div>
    </div>`;
  }).join('');
}

function selectType(el, type) {
  document.querySelectorAll('.stype-btn').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
  const labels = { individual:'Your Name', company:'Company Name', ngo:'NGO / Foundation', govt:'Govt. Initiative' };
  const loc = (document.querySelector('.loc-chip.sel')||{}).textContent || 'Punjab';
  const tagEl = document.getElementById('tagName');
  if (tagEl) tagEl.textContent = (labels[type]||'Your Name') + ' · ' + loc.trim() + ' Forest';
}

function selectLoc(el) {
  document.querySelectorAll('.loc-chip').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  const type = (document.querySelector('.stype-btn.sel .stype-label')||{}).textContent || 'Individual';
  const map  = {Individual:'Your Name', Company:'Company Name', 'NGO / Org':'NGO / Foundation', Government:'Govt. Initiative'};
  const tagEl = document.getElementById('tagName');
  if (tagEl) tagEl.textContent = (map[type]||'Your Name') + ' · ' + el.textContent.trim() + ' Forest';
}

// Sponsor step scroll-highlight
const spSteps = document.querySelectorAll('.sp-step');
if (spSteps.length) {
  const sObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { spSteps.forEach(s => s.classList.remove('active')); e.target.classList.add('active'); }
    });
  }, { threshold: 0.55, rootMargin: '-10% 0px -35% 0px' });
  spSteps.forEach(s => sObs.observe(s));
}

renderTreeBars();

// ── VOLUNTEER PANEL ────────────────────────────────────────
function selectDrive(el, city, location, date, spotsLeft) {
  document.querySelectorAll('.drive-item:not(.full)').forEach(d => { d.style.borderColor=''; d.style.boxShadow=''; });
  el.style.borderColor = 'var(--g-mid)';
  el.style.boxShadow   = '0 0 0 3px rgba(76,175,80,0.15)';
  const label = document.getElementById('selectedDriveLabel');
  if (label) label.textContent = city + ' — ' + date + ' (' + spotsLeft + ' spots left)';
  const cs = document.getElementById('volCity');
  if (cs) for (let i=0; i<cs.options.length; i++) if (cs.options[i].text===city) { cs.selectedIndex=i; break; }
}

function selectRole(el, role) {
  document.querySelectorAll('.vol-role-card').forEach(c => { c.style.borderColor=''; c.style.boxShadow=''; });
  el.style.borderColor = 'var(--g-primary)';
  el.style.boxShadow   = '0 0 0 3px rgba(46,125,50,0.12)';
  const sel = document.getElementById('volRole');
  if (sel) for (let i=0; i<sel.options.length; i++) if (sel.options[i].text===role) { sel.selectedIndex=i; break; }
}

function submitVolApp() {
  const vals = ['volName','volPhone','volRole','volCity'].map(id => ({id, el: document.getElementById(id)}));
  const empty = vals.filter(v => v.el && !v.el.value.trim());
  if (empty.length) {
    empty.forEach(({el}) => { el.style.borderColor='#ef5350'; setTimeout(()=>{ el.style.borderColor=''; }, 1800); });
    return;
  }
  const success = document.getElementById('volSuccess');
  if (success) success.classList.add('show');
  ['volName','volPhone'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
}
