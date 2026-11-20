(() => {
  'use strict';
  const cfg = window.INDITEES_CONFIG;
  const productsEl = document.getElementById('products');
  const modal = document.getElementById('order-modal');
  const orderForm = document.getElementById('order-form');
  const toastEl = document.getElementById('toast');
  let selectedProduct = null;
  let lastFocus = null;
  let toastTimer;

  function toast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 5000);
  }
  function whatsappUrl(message) {
    const phone = String(cfg.whatsappNumber || '').replace(/\D/g, '');
    if (!/^\d{10,15}$/.test(phone)) {
      toast('Owner setup needed: add your WhatsApp number to config.js before publishing.');
      return null;
    }
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
  function openWhatsapp(message) {
    const url = whatsappUrl(message);
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  }
  function formatPrice(price) {
    return typeof price === 'number' && price >= 0 ? `₹${price.toLocaleString('en-IN')}` : 'Ask for price';
  }
  function renderProducts(filter = 'all') {
    const visible = cfg.products.filter(p => filter === 'all' || p.category === filter);
    productsEl.replaceChildren();
    visible.forEach(p => {
      const card = document.createElement('article');
      card.className = 'product-card';
      const visual = document.createElement('div');
      visual.className = 'product-image';
      const img = document.createElement('img');
      img.src = p.image; img.alt = `Illustrative mockup of ${p.name}`; img.loading = 'lazy';
      const tag = document.createElement('span'); tag.className = 'product-tag'; tag.textContent = p.tag;
      const quick = document.createElement('button'); quick.type = 'button'; quick.textContent = '↗'; quick.setAttribute('aria-label', `Enquire about ${p.name}`); quick.addEventListener('click', () => openModal(p));
      visual.append(img, tag, quick);
      const meta = document.createElement('div'); meta.className = 'product-meta';
      const h3 = document.createElement('h3'); h3.textContent = p.name;
      const fabric = document.createElement('p'); fabric.textContent = p.fabric;
      const bottom = document.createElement('div'); bottom.className = 'product-bottom';
      const price = document.createElement('strong'); price.textContent = formatPrice(p.price);
      const action = document.createElement('button'); action.type = 'button'; action.textContent = 'ENQUIRE ↗'; action.addEventListener('click', () => openModal(p));
      bottom.append(price, action); meta.append(h3, fabric, bottom); card.append(visual, meta); productsEl.append(card);
    });
  }
  function fillSelect(select, values) {
    select.replaceChildren();
    values.forEach(value => { const option = document.createElement('option'); option.value = value; option.textContent = value; select.append(option); });
  }
  function openModal(p) {
    selectedProduct = p; lastFocus = document.activeElement;
    document.getElementById('modal-product-name').textContent = p.name;
    document.getElementById('modal-product-fabric').textContent = p.fabric;
    document.getElementById('modal-product-image').src = p.image;
    fillSelect(document.getElementById('size'), p.sizes);
    fillSelect(document.getElementById('color'), p.colors);
    document.getElementById('quantity').value = 1;
    document.getElementById('notes').value = '';
    document.getElementById('customer-name').value = '';
    modal.hidden = false; document.body.style.overflow = 'hidden';
    document.getElementById('modal-close').focus();
  }
  function closeModal() {
    modal.hidden = true; document.body.style.overflow = '';
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }
  document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
    renderProducts(btn.dataset.filter);
  }));
  document.querySelectorAll('.whatsapp-trigger').forEach(el => el.addEventListener('click', e => {
    e.preventDefault(); openWhatsapp(el.dataset.message || 'Hi INDITEES! I have an enquiry.');
  }));
  orderForm.addEventListener('submit', e => {
    e.preventDefault();
    if (!selectedProduct || !orderForm.reportValidity()) return;
    const name = document.getElementById('customer-name').value.trim();
    const qty = Number(document.getElementById('quantity').value);
    if (!Number.isInteger(qty) || qty < 1 || qty > 10000) { toast('Please enter a valid quantity.'); return; }
    const message = [
      'Hi INDITEES! I would like to enquire about an order:',
      '',
      `Product: ${selectedProduct.name}`,
      `Size: ${document.getElementById('size').value}`,
      `Colour: ${document.getElementById('color').value}`,
      `Quantity: ${qty}`,
      name ? `Name: ${name}` : null,
      document.getElementById('notes').value.trim() ? `Design/Notes: ${document.getElementById('notes').value.trim()}` : null,
      '',
      'Please confirm availability, final price, payment and delivery details.'
    ].filter(v => v !== null).join('\n');
    const url = whatsappUrl(message);
    if (url) { window.open(url, '_blank', 'noopener,noreferrer'); closeModal(); }
  });
  document.getElementById('modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
    if (e.key === 'Tab' && !modal.hidden) {
      const focusables = [...modal.querySelectorAll('button, input, select, textarea')].filter(el => !el.disabled);
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  const menuBtn = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.hidden = expanded;
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.hidden = true; menuBtn.setAttribute('aria-expanded', 'false');
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
  const instagramLink = document.getElementById('instagram-link');
  if (cfg.instagramUrl) instagramLink.href = cfg.instagramUrl;
  renderProducts();
})();
