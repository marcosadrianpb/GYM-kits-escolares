// Lógica de Catálogo Interactivo y Carrito de Presupuesto - G&M Librería

document.addEventListener('DOMContentLoaded', () => {
  // Estado de la aplicación
  let cart = {}; // { [productId]: quantity }
  let currentCategory = 'all';

  // Elementos del DOM
  const catalogGrid = document.getElementById('catalogGrid');
  const categoryFilters = document.getElementById('categoryFilters');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartEmptyMessage = document.getElementById('cartEmptyMessage');
  const drawerFooter = document.getElementById('drawerFooter');
  const clientDetailsSection = document.getElementById('clientDetailsSection');
  const drawerTotalAmount = document.getElementById('drawerTotalAmount');
  const cartCountBadge = document.getElementById('cartCountBadge');
  const cartTotalBadge = document.getElementById('cartTotalBadge');
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const clientNameInput = document.getElementById('clientNameInput');
  const clientNotesInput = document.getElementById('clientNotesInput');
  const mobileFloatingBar = document.getElementById('mobileFloatingBar');
  const mobileBarQty = document.getElementById('mobileBarQty');
  const mobileBarTotal = document.getElementById('mobileBarTotal');
  const mobileBarBtn = document.getElementById('mobileBarBtn');

  // Formateador de moneda argentina
  const formatMoney = (amount) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // 1. Renderizar catálogo de productos
  const renderCatalog = () => {
    catalogGrid.innerHTML = '';

    const filteredProducts = currentCategory === 'all'
      ? CATALOG_DATA
      : CATALOG_DATA.filter(p => p.category === currentCategory);

    if (filteredProducts.length === 0) {
      catalogGrid.innerHTML = `<p class="no-products-msg">No hay productos en esta categoría.</p>`;
      return;
    }

    filteredProducts.forEach(product => {
      const isSelected = !!cart[product.id];
      const qty = cart[product.id] || 1;

      const card = document.createElement('article');
      card.className = `product-card ${isSelected ? 'selected' : ''}`;
      card.dataset.id = product.id;

      card.innerHTML = `
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60';">
          <span class="product-badge">${product.badge || product.category}</span>
        </div>
        <div class="product-body">
          <span class="product-category">${product.category}</span>
          <h3 class="product-title">${product.title}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-price-tag">${formatMoney(product.price)}</div>
        </div>
        <div class="product-actions">
          <label class="checkbox-label" title="Seleccionar para la lista">
            <input type="checkbox" class="product-checkbox" data-id="${product.id}" ${isSelected ? 'checked' : ''}>
            <span class="checkbox-custom"></span>
            <span class="checkbox-text">${isSelected ? 'En la lista' : 'Sumar a lista'}</span>
          </label>
          <div class="qty-control ${isSelected ? 'active' : ''}">
            <button class="qty-btn minus" data-id="${product.id}" aria-label="Restar cantidad">-</button>
            <input type="number" class="qty-input" data-id="${product.id}" value="${qty}" min="1" max="99" aria-label="Cantidad">
            <button class="qty-btn plus" data-id="${product.id}" aria-label="Sumar cantidad">+</button>
          </div>
        </div>
      `;

      catalogGrid.appendChild(card);
    });

    attachCardEventListeners();
  };

  // 2. Event listeners para controles de productos
  const attachCardEventListeners = () => {
    // Checkboxes
    document.querySelectorAll('.product-checkbox').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const id = parseInt(e.target.dataset.id, 10);
        const card = document.querySelector(`.product-card[data-id="${id}"]`);
        const qtyInput = card.querySelector('.qty-input');
        const qty = parseInt(qtyInput.value, 10) || 1;

        if (e.target.checked) {
          cart[id] = qty;
        } else {
          delete cart[id];
        }
        updateCartState();
        renderCatalog();
      });
    });

    // Botones + y -
    document.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.dataset.id, 10);
        const isPlus = e.currentTarget.classList.contains('plus');
        const currentQty = cart[id] || 1;
        let newQty = isPlus ? currentQty + 1 : currentQty - 1;
        if (newQty < 1) newQty = 1;

        if (cart[id] || isPlus) {
          cart[id] = newQty;
        }
        updateCartState();
        renderCatalog();
      });
    });

    // Inputs numéricos directos
    document.querySelectorAll('.qty-input').forEach(inp => {
      inp.addEventListener('change', (e) => {
        const id = parseInt(e.target.dataset.id, 10);
        let val = parseInt(e.target.value, 10);
        if (isNaN(val) || val < 1) val = 1;
        e.target.value = val;

        if (cart[id]) {
          cart[id] = val;
          updateCartState();
        }
      });
    });
  };

  // 3. Actualizar estado del carrito e interfaces
  const updateCartState = () => {
    const itemIds = Object.keys(cart);
    let totalCount = 0;
    let totalMoney = 0;

    itemIds.forEach(idStr => {
      const id = parseInt(idStr, 10);
      const qty = cart[id];
      const product = CATALOG_DATA.find(p => p.id === id);
      if (product) {
        totalCount += qty;
        totalMoney += product.price * qty;
      }
    });

    // Actualizar Badges
    const itemsLabel = totalCount === 1 ? '1 producto' : `${totalCount} productos`;
    cartCountBadge.textContent = itemsLabel;
    cartTotalBadge.textContent = formatMoney(totalMoney);
    mobileBarQty.textContent = itemsLabel;
    mobileBarTotal.textContent = formatMoney(totalMoney);

    // Mostrar/ocultar barra flotante móvil
    if (totalCount > 0) {
      mobileFloatingBar.classList.add('visible');
    } else {
      mobileFloatingBar.classList.remove('visible');
    }

    // Actualizar contenido del Drawer
    renderDrawerItems(totalCount, totalMoney);
  };

  // 4. Renderizar contenido del Drawer/Modal
  const renderDrawerItems = (totalCount, totalMoney) => {
    cartItemsList.innerHTML = '';
    const itemIds = Object.keys(cart);

    if (itemIds.length === 0) {
      cartEmptyMessage.style.display = 'block';
      clientDetailsSection.style.display = 'none';
      drawerFooter.style.display = 'none';
      return;
    }

    cartEmptyMessage.style.display = 'none';
    clientDetailsSection.style.display = 'block';
    drawerFooter.style.display = 'block';
    drawerTotalAmount.textContent = formatMoney(totalMoney);

    itemIds.forEach(idStr => {
      const id = parseInt(idStr, 10);
      const qty = cart[id];
      const product = CATALOG_DATA.find(p => p.id === id);
      if (!product) return;

      const li = document.createElement('li');
      li.className = 'drawer-item';
      li.innerHTML = `
        <div class="drawer-item-img">
          <img src="${product.image}" alt="${product.title}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100&auto=format&fit=crop&q=60';">
        </div>
        <div class="drawer-item-info">
          <h4>${product.title}</h4>
          <span class="drawer-item-unit">${formatMoney(product.price)} c/u</span>
          <div class="drawer-item-controls">
            <button class="drawer-qty-btn minus" data-id="${product.id}">-</button>
            <span class="drawer-qty-val">${qty}</span>
            <button class="drawer-qty-btn plus" data-id="${product.id}">+</button>
            <button class="drawer-remove-btn" data-id="${product.id}" title="Quitar">🗑️</button>
          </div>
        </div>
        <div class="drawer-item-subtotal">
          ${formatMoney(product.price * qty)}
        </div>
      `;
      cartItemsList.appendChild(li);
    });

    // Eventos dentro del Drawer
    document.querySelectorAll('.drawer-qty-btn').forEach(b => {
      b.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.dataset.id, 10);
        const isPlus = e.currentTarget.classList.contains('plus');
        let newQty = isPlus ? cart[id] + 1 : cart[id] - 1;
        if (newQty <= 0) {
          delete cart[id];
        } else {
          cart[id] = newQty;
        }
        updateCartState();
        renderCatalog();
      });
    });

    document.querySelectorAll('.drawer-remove-btn').forEach(b => {
      b.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.dataset.id, 10);
        delete cart[id];
        updateCartState();
        renderCatalog();
      });
    });
  };

  // 5. Enviar mensaje formateado a WhatsApp
  const sendOrderToWhatsApp = () => {
    const itemIds = Object.keys(cart);
    if (itemIds.length === 0) {
      alert('Por favor selecciona al menos un producto para armar tu lista.');
      return;
    }

    let clientName = clientNameInput.value.trim();
    let clientNotes = clientNotesInput.value.trim();

    let totalMoney = 0;
    let itemsText = '';

    itemIds.forEach((idStr, idx) => {
      const id = parseInt(idStr, 10);
      const qty = cart[id];
      const product = CATALOG_DATA.find(p => p.id === id);
      if (product) {
        const subtotal = product.price * qty;
        totalMoney += subtotal;
        itemsText += `${idx + 1}. *${qty}x* ${product.title} (${formatMoney(subtotal)})\n`;
      }
    });

    let message = `¡Hola *${STORE_CONFIG.storeName}*! 👋\n`;
    message += `Quiero consultar disponibilidad para el siguiente pedido del *${STORE_CONFIG.campaignTitle}*:\n\n`;
    
    if (clientName) {
      message += `👤 *Cliente/Curso:* ${clientName}\n\n`;
    }

    message += `📋 *PRODUCTOS SELECCIONADOS:*\n${itemsText}\n`;
    message += `💰 *TOTAL ESTIMADO:* ${formatMoney(totalMoney)}\n\n`;

    if (clientNotes) {
      message += `📝 *Aclaraciones / Preferencias:* ${clientNotes}\n\n`;
    }

    message += `¿Tienen stock disponible para coordinar formas de pago y retiro/envío en Córdoba? ¡Muchas gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  // 6. Event listeners globales
  const openDrawer = () => {
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  openCartBtn.addEventListener('click', openDrawer);
  mobileBarBtn.addEventListener('click', openDrawer);
  closeCartBtn.addEventListener('click', closeDrawer);
  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) closeDrawer();
  });

  clearCartBtn.addEventListener('click', () => {
    if (confirm('¿Deseas vaciar toda la lista seleccionada?')) {
      cart = {};
      clientNameInput.value = '';
      clientNotesInput.value = '';
      updateCartState();
      renderCatalog();
    }
  });

  sendWhatsAppBtn.addEventListener('click', sendOrderToWhatsApp);

  // Filtros de categoría
  categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.dataset.category;
      renderCatalog();
    }
  });

  // Inicialización
  renderCatalog();
  updateCartState();
});
