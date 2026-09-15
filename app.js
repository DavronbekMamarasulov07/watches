/**
 * AURA HOROLOGY — Modern Minimalist Watch Store
 * Core JavaScript Application
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. DATA: WATCH PRODUCTS CATALOG
  // =========================================================================
  const products = [
    {
      id: 1,
      name: "AURA Stellar Matte",
      category: "minimalist",
      price: 2850000,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      badge: "Cheklangan",
      badgeType: "limited",
      diameter: "40 mm",
      movement: "Miyota 9015 Avtomatik",
      glass: "Ikkita aksil-porlash sapfir",
      waterResistance: "5 ATM (50m)",
      caseMaterial: "316L Mat qora po'lat",
      strap: "Haqiqiy Italyan nubuk charmi",
      description: "Monoxrom minimalizmning eng yorqin namunasi. Siferblatdagi har bir element mukammal simmetriya va tinchlik baxsh etadi."
    },
    {
      id: 2,
      name: "AURA Pure Obsidian",
      category: "minimalist",
      price: 2450000,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      badge: "Bestseller",
      badgeType: "bestseller",
      diameter: "38 mm",
      movement: "Shveytsariya Ronda Kvars",
      glass: "Qavariq sapfir kristal",
      waterResistance: "3 ATM (30m)",
      caseMaterial: "Jilolangan 316L po'lat",
      strap: "Silliq qora buzoq charmi",
      description: "Klassik kostyum va har kungi garderob uchun yengil, ingichka (faqat 7mm) va nafis korpusli soat."
    },
    {
      id: 3,
      name: "AURA Grand Heritage",
      category: "automatic",
      price: 4600000,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      badge: "Yangi",
      badgeType: "new",
      diameter: "41 mm",
      movement: "Sellita SW200-1 Avtomatik",
      glass: "Sapfir kristal (orqa qopqoq ham)",
      waterResistance: "10 ATM (100m)",
      caseMaterial: "Satin 316L po'lat",
      strap: "Qo'lda tikilgan qahvarang charm",
      description: "Haqiqiy mexanika ixlosmandlari uchun. 38 soatlik quvvat zaxirasiga ega Shveytsariya avtomatik mexanizmi shaffof orqa qopqoqdan ko'rinadi."
    },
    {
      id: 4,
      name: "AURA Chrono Slate",
      category: "chronograph",
      price: 3650000,
      image: "https://images.unsplash.com/photo-1533139502658-0198f923d8e8?auto=format&fit=crop&w=800&q=80",
      badge: "Bestseller",
      badgeType: "bestseller",
      diameter: "42 mm",
      movement: "Seiko VK64 Meca-Quartz",
      glass: "Sapfir kristal",
      waterResistance: "5 ATM (50m)",
      caseMaterial: "316L Qora PVD po'lat",
      strap: "Perforatsiyalangan sport charm",
      description: "Minimalistik uslubda yaratilgan sport xronografi. Sekundomer va 24 soatlik kichik qo'shimcha siferblatlar."
    },
    {
      id: 5,
      name: "AURA Solstice White",
      category: "classic",
      price: 2600000,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      badge: null,
      badgeType: null,
      diameter: "39 mm",
      movement: "Shveytsariya Ronda 715",
      glass: "Aksil-porlash sapfir",
      waterResistance: "5 ATM (50m)",
      caseMaterial: "Kumushrang 316L po'lat",
      strap: "Klassik qora charm",
      description: "Oppoq siferblat va ingichka metall strelkalar uyg'unligi. Asrlar davomida o'zgarmas go'zallik namunasi."
    },
    {
      id: 6,
      name: "AURA Emerald Minimalist",
      category: "minimalist",
      price: 3100000,
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80",
      badge: "Yangi",
      badgeType: "new",
      diameter: "40 mm",
      movement: "Miyota 9039 No-Date",
      glass: "Sapfir kristal",
      waterResistance: "5 ATM (50m)",
      caseMaterial: "Cho'tkalangan zanglamas po'lat",
      strap: "To'q yashil nubuk charmi",
      description: "Noyob zumrad-yashil quyosh nurlari effekti bilan jilolanuvchi siferblat. Qora va oltin aksentlar uyg'unligi."
    },
    {
      id: 7,
      name: "AURA Rose Milano",
      category: "classic",
      price: 2950000,
      image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80",
      badge: "Bestseller",
      badgeType: "bestseller",
      diameter: "36 mm",
      movement: "Shveytsariya Kvars Harakati",
      glass: "Sapfir kristal",
      waterResistance: "3 ATM (30m)",
      caseMaterial: "Atirgul oltin (Rose Gold) qoplama",
      strap: "Milanese mayin metall to'r",
      description: "Har qanday nozik bilakka mukammal mos keluvchi, atirgul oltin tusidagi hashamatli va qulay soat."
    },
    {
      id: 8,
      name: "AURA Titanium Aero",
      category: "automatic",
      price: 4900000,
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
      badge: "Cheklangan",
      badgeType: "limited",
      diameter: "42 mm",
      movement: "ETA 2824-2 Avtomatik",
      glass: "Ikkita aksil-porlash sapfir",
      waterResistance: "10 ATM (100m)",
      caseMaterial: "Grade 2 Titan (ultra-yengil)",
      strap: "Titanium bo'g'inli zanjir",
      description: "Po'latdan 45% yengilroq bo'lgan kosmik titan korpus. Ekstremal chidamlilik va minimalistik qat'iyat."
    }
  ];

  // =========================================================================
  // 2. STATE MANAGEMENT
  // =========================================================================
  let cart = JSON.parse(localStorage.getItem('aura_cart') || '[]');
  let wishlist = JSON.parse(localStorage.getItem('aura_wishlist') || '[]');
  let activeCategory = 'all';
  let searchQuery = '';
  let sortBy = 'popular';

  // Customizer State
  let customizerState = {
    dialColor: '#141416',
    dialName: 'Obsidian Qora',
    strapId: 'leather-black',
    strapName: 'Qora Italyan Charm',
    strapColor: '#1c1b18',
    caseSize: '40mm',
    basePrice: 3200000
  };

  // =========================================================================
  // 3. DOM ELEMENTS
  // =========================================================================
  const productsGrid = document.getElementById('productsGrid');
  const categoryFilters = document.getElementById('categoryFilters');
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  
  // Theme & Nav
  const themeToggle = document.getElementById('themeToggle');
  const header = document.getElementById('header');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  
  // Cart elements
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartOpenBtn = document.getElementById('cartOpenBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartCount = document.getElementById('cartCount');
  const wishlistCount = document.getElementById('wishlistCount');
  const cartItemsTotal = document.getElementById('cartItemsTotal');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartTotal = document.getElementById('cartTotal');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');

  // Modals
  const quickViewModal = document.getElementById('quickViewModal');
  const quickViewContent = document.getElementById('quickViewContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
  const checkoutForm = document.getElementById('checkoutForm');
  const modalSummaryCount = document.getElementById('modalSummaryCount');
  const modalSummaryTotal = document.getElementById('modalSummaryTotal');

  // Customizer Elements
  const watchFace = document.getElementById('watchFace');
  const strapTop = document.getElementById('strapTop');
  const strapBottom = document.getElementById('strapBottom');
  const selectedDialName = document.getElementById('selectedDialName');
  const selectedStrapName = document.getElementById('selectedStrapName');
  const customPriceVal = document.getElementById('customPriceVal');
  const addCustomWatchBtn = document.getElementById('addCustomWatchBtn');
  const dialColorOptions = document.getElementById('dialColorOptions');
  const strapOptions = document.getElementById('strapOptions');
  const sizeOptions = document.getElementById('sizeOptions');

  const toastContainer = document.getElementById('toastContainer');
  const newsletterForm = document.getElementById('newsletterForm');

  // =========================================================================
  // 4. UTILITY FUNCTIONS
  // =========================================================================
  function formatPrice(amount) {
    return new Intl.NumberFormat('uz-UZ').format(amount) + ' UZS';
  }

  function showToast(message, icon = '✓') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-text">${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hiding');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  function saveCart() {
    localStorage.setItem('aura_cart', JSON.stringify(cart));
    updateCartBadges();
    renderCart();
  }

  function saveWishlist() {
    localStorage.setItem('aura_wishlist', JSON.stringify(wishlist));
    wishlistCount.textContent = wishlist.length;
  }

  function updateCartBadges() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalCount;
    cartItemsTotal.textContent = `(${totalCount})`;
  }

  // =========================================================================
  // 5. CATALOG RENDERING & FILTERING
  // =========================================================================
  function renderProducts() {
    // 1. Filter
    let filtered = products.filter(item => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    // 2. Sort
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // 3. Empty state check
    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <p style="font-size: 1.2rem; margin-bottom: 8px;">So'rovingiz bo'yicha soatlar topilmadi</p>
          <span style="font-size: 0.85rem;">Iltimos, boshqa qidiruv kalit so'zi yoki kategoriyani tanlab ko'ring.</span>
        </div>
      `;
      return;
    }

    // 4. Render Cards
    productsGrid.innerHTML = filtered.map(watch => {
      const isWishlisted = wishlist.includes(watch.id);
      const badgeHtml = watch.badge 
        ? `<span class="product-badge ${watch.badgeType || ''}">${watch.badge}</span>` 
        : '';

      return `
        <article class="product-card" data-id="${watch.id}">
          ${badgeHtml}
          <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="window.toggleWishlist(${watch.id})" 
                  title="Sevimlilarga qo'shish" 
                  aria-label="Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <div class="product-img-wrap" onclick="window.openQuickView(${watch.id})">
            <img src="${watch.image}" alt="${watch.name}" class="product-img" loading="lazy">
          </div>

          <div class="product-meta">
            <span>${watch.category}</span>
            <span>${watch.diameter}</span>
          </div>

          <h3 class="product-title" onclick="window.openQuickView(${watch.id})">${watch.name}</h3>

          <div class="product-specs-summary">
            <span class="spec-chip">${watch.movement.split(' ')[0]}</span>
            <span class="spec-chip">${watch.glass.split(' ')[0]}</span>
            <span class="spec-chip">${watch.waterResistance}</span>
          </div>

          <div class="product-footer">
            <div class="product-price">${formatPrice(watch.price)}</div>
            <div class="product-actions">
              <button class="btn-icon-action" onclick="window.openQuickView(${watch.id})" title="Tezkor ko'rish">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
              <button class="btn-icon-action primary" onclick="window.addToCart(${watch.id})" title="Savatga qo'shish">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Category filter clicks
  categoryFilters.addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter-btn')) return;
    
    categoryFilters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    activeCategory = e.target.dataset.category;
    renderProducts();
  });

  // Global helper for footer links
  window.filterCatalog = function(cat) {
    activeCategory = cat;
    categoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === cat);
    });
    renderProducts();
  };

  // Search input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderProducts();
  });

  // Sort select
  sortSelect.addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderProducts();
  });

  // =========================================================================
  // 6. WISHLIST MANAGEMENT
  // =========================================================================
  window.toggleWishlist = function(id) {
    const idx = wishlist.indexOf(id);
    const watch = products.find(p => p.id === id);
    if (idx === -1) {
      wishlist.push(id);
      showToast(`${watch.name} sevimlilarga qo'shildi!`, '♥');
    } else {
      wishlist.splice(idx, 1);
      showToast(`${watch.name} sevimlilardan olib tashlandi.`, '♡');
    }
    saveWishlist();
    renderProducts();
  };

  document.getElementById('wishlistHeaderBtn').addEventListener('click', () => {
    if (wishlist.length === 0) {
      showToast("Hozircha sevimlilar ro'yxati bo'sh.", 'ℹ');
      return;
    }
    // Filter by wishlisted items
    const wishlistedProducts = products.filter(p => wishlist.includes(p.id));
    showToast(`${wishlist.length} ta sevimli mahsulot ko'rsatilmoqda.`);
    activeCategory = 'all';
    categoryFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    
    productsGrid.innerHTML = wishlistedProducts.map(watch => `
      <article class="product-card" data-id="${watch.id}">
        <button class="product-wishlist-btn active" onclick="window.toggleWishlist(${watch.id})" title="O'chirish">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <div class="product-img-wrap" onclick="window.openQuickView(${watch.id})">
          <img src="${watch.image}" alt="${watch.name}" class="product-img" loading="lazy">
        </div>
        <div class="product-meta">
          <span>${watch.category}</span>
          <span>${watch.diameter}</span>
        </div>
        <h3 class="product-title" onclick="window.openQuickView(${watch.id})">${watch.name}</h3>
        <div class="product-footer">
          <div class="product-price">${formatPrice(watch.price)}</div>
          <div class="product-actions">
            <button class="btn-icon-action primary" onclick="window.addToCart(${watch.id})">Savatga</button>
          </div>
        </div>
      </article>
    `).join('');
    
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
  });

  // =========================================================================
  // 7. CART FUNCTIONALITY
  // =========================================================================
  window.addToCart = function(productId, qty = 1, customConfig = null) {
    let item;
    
    if (customConfig) {
      // Custom watch item from customizer
      const customId = `custom_${Date.now()}`;
      item = {
        cartId: customId,
        id: customId,
        name: `AURA Custom Studio (${customConfig.dialName})`,
        price: customConfig.basePrice,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
        qty: qty,
        details: `${customConfig.dialName} • ${customConfig.strapName} • ${customConfig.caseSize}`
      };
      cart.push(item);
      showToast("Maxsus konfiguratsiyadagi soat savatga qo'shildi!");
    } else {
      const watch = products.find(p => p.id === productId);
      if (!watch) return;
      
      const existing = cart.find(item => item.id === productId && !item.cartId);
      if (existing) {
        existing.qty += qty;
      } else {
        cart.push({
          id: watch.id,
          name: watch.name,
          price: watch.price,
          image: watch.image,
          qty: qty,
          details: `${watch.diameter} • ${watch.movement.split(' ')[0]}`
        });
      }
      showToast(`${watch.name} savatga qo'shildi!`);
    }

    saveCart();
    openCartDrawer();
  };

  window.quickAddToCart = function(id) {
    window.addToCart(id, 1);
  };

  window.updateCartQty = function(index, delta) {
    if (!cart[index]) return;
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
  };

  window.removeCartItem = function(index) {
    if (!cart[index]) return;
    const removedName = cart[index].name;
    cart.splice(index, 1);
    saveCart();
    showToast(`${removedName} savatdan o'chirildi.`, '🗑');
  };

  function renderCart() {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <svg class="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <h4>Savatchangiz hozircha bo'sh</h4>
          <p>Kolleksiyamizdan o'zingizga ma'qul soatni tanlang va savatga qo'shing.</p>
          <button class="btn btn-secondary btn-xs" onclick="document.getElementById('cartCloseBtn').click(); location.href='#catalog';">
            Kolleksiyaga o'tish
          </button>
        </div>
      `;
      cartSubtotal.textContent = '0 UZS';
      cartTotal.textContent = '0 UZS';
      checkoutBtn.disabled = true;
      checkoutBtn.style.opacity = '0.5';
      checkoutBtn.style.cursor = 'not-allowed';
      return;
    }

    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = '1';
    checkoutBtn.style.cursor = 'pointer';

    let total = 0;

    cartItemsContainer.innerHTML = cart.map((item, idx) => {
      const itemSubtotal = item.price * item.qty;
      total += itemSubtotal;

      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <div>
              <h4 class="cart-item-title">${item.name}</h4>
              <span class="cart-item-detail">${item.details || ''}</span>
            </div>
            <div class="cart-item-price">${formatPrice(itemSubtotal)}</div>
            <div class="cart-item-controls">
              <div class="qty-control">
                <button class="qty-btn" onclick="window.updateCartQty(${idx}, -1)">−</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" onclick="window.updateCartQty(${idx}, 1)">+</button>
              </div>
              <button class="cart-item-remove" onclick="window.removeCartItem(${idx})">O'chirish</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    cartSubtotal.textContent = formatPrice(total);
    cartTotal.textContent = formatPrice(total);
  }

  function openCartDrawer() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  cartOpenBtn.addEventListener('click', openCartDrawer);
  cartCloseBtn.addEventListener('click', closeCartDrawer);
  cartOverlay.addEventListener('click', closeCartDrawer);

  clearCartBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    if (confirm("Rostdan ham savatdagi barcha mahsulotlarni tozalashni xohlaysizmi?")) {
      cart = [];
      saveCart();
      showToast("Savatcha tozalandi.");
    }
  });

  // =========================================================================
  // 8. QUICK VIEW MODAL
  // =========================================================================
  window.openQuickView = function(productId) {
    const watch = products.find(p => p.id === productId);
    if (!watch) return;

    quickViewContent.innerHTML = `
      <div class="quickview-gallery">
        <img src="${watch.image}" alt="${watch.name}" class="quickview-main-img">
      </div>
      <div class="quickview-details">
        <div class="quickview-category">${watch.category} • SERIYA 2026</div>
        <h2 class="quickview-title">${watch.name}</h2>
        <div class="quickview-price">${formatPrice(watch.price)}</div>
        <p class="quickview-desc">${watch.description}</p>
        
        <table class="quickview-specs-table">
          <tbody>
            <tr>
              <td>Korpus diametri:</td>
              <td>${watch.diameter}</td>
            </tr>
            <tr>
              <td>Harakat mexanizmi:</td>
              <td>${watch.movement}</td>
            </tr>
            <tr>
              <td>Himoya oynasi:</td>
              <td>${watch.glass}</td>
            </tr>
            <tr>
              <td>Suvga chidamlilik:</td>
              <td>${watch.waterResistance}</td>
            </tr>
            <tr>
              <td>Korpus materiali:</td>
              <td>${watch.caseMaterial}</td>
            </tr>
            <tr>
              <td>Tasma turi:</td>
              <td>${watch.strap}</td>
            </tr>
            <tr>
              <td>Rasmiy kafolat:</td>
              <td>2 Yil to'liq xalqaro kafolat</td>
            </tr>
          </tbody>
        </table>

        <div class="quickview-actions">
          <div class="qty-control" style="height: 44px; padding: 0 4px;">
            <button class="qty-btn" id="modalQtyMinus" style="width: 32px; height: 36px;">−</button>
            <span class="qty-val" id="modalQtyVal" style="width: 36px; font-size: 0.95rem;">1</span>
            <button class="qty-btn" id="modalQtyPlus" style="width: 32px; height: 36px;">+</button>
          </div>
          <button class="btn btn-primary" id="modalAddToCartBtn" style="flex: 1;">
            <span>Savatga qo'shish</span>
          </button>
        </div>
      </div>
    `;

    // Modal Qty logic
    let qty = 1;
    const qtyVal = document.getElementById('modalQtyVal');
    document.getElementById('modalQtyMinus').addEventListener('click', () => {
      if (qty > 1) {
        qty--;
        qtyVal.textContent = qty;
      }
    });
    document.getElementById('modalQtyPlus').addEventListener('click', () => {
      qty++;
      qtyVal.textContent = qty;
    });

    document.getElementById('modalAddToCartBtn').addEventListener('click', () => {
      window.addToCart(watch.id, qty);
      closeQuickViewModal();
    });

    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeQuickViewModal() {
    quickViewModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeQuickViewModal);
  quickViewModal.addEventListener('click', (e) => {
    if (e.target === quickViewModal) closeQuickViewModal();
  });

  // =========================================================================
  // 9. CHECKOUT SYSTEM
  // =========================================================================
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    closeCartDrawer();
    
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    modalSummaryCount.textContent = `${totalCount} ta mahsulot`;
    modalSummaryTotal.textContent = formatPrice(totalPrice);
    
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  checkoutCloseBtn.addEventListener('click', closeCheckoutModal);
  checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) closeCheckoutModal();
  });

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const city = document.getElementById('orderCity').value;
    const address = document.getElementById('orderAddress').value.trim();
    const payment = document.querySelector('input[name="paymentMethod"]:checked').value;

    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    closeCheckoutModal();
    
    // Clear cart
    cart = [];
    saveCart();

    // Show Confirmation Alert
    alert(`🎉 Tabriklaymiz, ${name}!\n\nSizning #${orderNumber} raqamli buyurtmangiz muvaffaqiyatli qabul qilindi.\n\nYetkazish manzili: ${city}, ${address}\nTo'lov turi: ${payment === 'payme' ? 'Payme / Click' : 'Qabul qilinganda'}\n\nOperatorimiz tez orada siz bilan bog'lanadi!`);

    showToast(`Buyurtma #${orderNumber} qabul qilindi!`, '★');
    checkoutForm.reset();
  });

  // =========================================================================
  // 10. INTERACTIVE WATCH CUSTOMIZER
  // =========================================================================
  dialColorOptions.addEventListener('click', (e) => {
    const btn = e.target.closest('.color-btn');
    if (!btn) return;

    dialColorOptions.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const color = btn.dataset.color;
    const name = btn.dataset.name;

    customizerState.dialColor = color;
    customizerState.dialName = name;
    selectedDialName.textContent = name;

    // Apply color to watch face
    watchFace.style.backgroundColor = color;
    
    // Adjust mark colors for light backgrounds
    const dialMarks = watchFace.querySelectorAll('.dial-marks .mark');
    if (color === '#e8e9eb') {
      dialMarks.forEach(m => m.style.color = '#18181b');
      watchFace.querySelector('.watch-brand-inner').style.color = '#18181b';
    } else {
      dialMarks.forEach(m => m.style.color = '#c5a880');
      watchFace.querySelector('.watch-brand-inner').style.color = 'rgba(255,255,255,0.75)';
    }
  });

  strapOptions.addEventListener('click', (e) => {
    const btn = e.target.closest('.strap-pill');
    if (!btn) return;

    strapOptions.querySelectorAll('.strap-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const strapId = btn.dataset.strap;
    const name = btn.dataset.name;
    const color = btn.dataset.color;

    customizerState.strapId = strapId;
    customizerState.strapName = name;
    customizerState.strapColor = color;
    selectedStrapName.textContent = name;

    // Update Strap visual
    strapTop.style.backgroundColor = color;
    strapBottom.style.backgroundColor = color;

    // Mesh or steel texture tweak
    if (strapId === 'mesh-silver') {
      strapTop.style.backgroundImage = 'repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 4px)';
      strapBottom.style.backgroundImage = 'repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 4px)';
    } else {
      strapTop.style.backgroundImage = 'none';
      strapBottom.style.backgroundImage = 'none';
    }
  });

  sizeOptions.addEventListener('click', (e) => {
    const btn = e.target.closest('.size-pill');
    if (!btn) return;

    sizeOptions.querySelectorAll('.size-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const size = btn.dataset.size;
    customizerState.caseSize = size;

    // Price modifier for size
    let price = 3200000;
    if (size === '38mm') price = 2950000;
    if (size === '42mm') price = 3450000;

    customizerState.basePrice = price;
    customPriceVal.textContent = formatPrice(price);
  });

  addCustomWatchBtn.addEventListener('click', () => {
    window.addToCart(null, 1, customizerState);
  });

  // =========================================================================
  // 11. THEME TOGGLE (DARK / LIGHT)
  // =========================================================================
  const savedTheme = localStorage.getItem('aura_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('aura_theme', next);
    showToast(`${next === 'dark' ? 'Tungi' : 'Kunduzgi'} rejimga o'tildi`);
  });

  // =========================================================================
  // 12. NAVIGATION, MOBILE MENU & SCROLL EFFECTS
  // =========================================================================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  hamburgerBtn.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
    hamburgerBtn.setAttribute('aria-expanded', isActive);
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Newsletter Form
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value.trim();
    if (email) {
      showToast("Tabriklaymiz! AURA VIP klubiga muvaffaqiyatli a'zo bo'ldingiz.", '★');
      newsletterForm.reset();
    }
  });

  // Keybindings: Escape to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeQuickViewModal();
      closeCheckoutModal();
    }
  });

  // =========================================================================
  // 13. INITIAL LOAD
  // =========================================================================
  renderProducts();
  renderCart();
  updateCartBadges();
  saveWishlist();
});

