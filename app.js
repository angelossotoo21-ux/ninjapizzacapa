
const menuData = {
    pizzas: [
        { id: "p1", nombre: "Pizza Jamón y Queso", desc: "", img: "img/pizza-jamon-queso.jpg", precios: { pequena: 10000, mediana: 22000, grande: 33000 } },
        { id: "p2", nombre: "Pizza Napolitana", desc: "Anchoas y Queso", img: "img/pizza-napolitana.jpg", precios: { pequena: 10000, mediana: 22000, grande: 33000 } },
        { id: "p5", nombre: "Pizza Jamón, Queso y Pimentón", desc: "", img: "img/pizza-jamon-queso-pimenton.jpg", precios: { pequena: 10000, mediana: 22000, grande: 33000 } },
        { id: "p7", nombre: "Pizza Jamón, Queso y Chorizo", desc: "", img: "img/pizza-jamon-queso-chorizo.jpg", precios: { pequena: 10000, mediana: 22000, grande: 33000 } },
        { id: "p8", nombre: "Pizza Hawaiana", desc: "Jamón, Queso y Piña", img: "img/pizza-hawaiana.jpg", precios: { pequena: 10000, mediana: 22000, grande: 33000 } },
        { id: "p9", nombre: "Pizza Vegetariana", desc: "Queso, Pimentón, Maíz y Piña", img: "img/pizza-vegetariana.jpg", precios: { pequena: 10000, mediana: 22000, grande: 33000 } },
        { id: "p11", nombre: "Pizza Jamón, Queso y Maíz", desc: "", img: "img/pizza-jamon-queso-maiz.jpg", precios: { pequena: 10000, mediana: 22000, grande: 33000 } },
        { id: "p12", nombre: "Pizza Jamón, Queso y Champiñones", desc: "", img: "img/pizza-jamon-queso-champinones.jpg", precios: { pequena: 14000, mediana: 26000, grande: 40000 } },
        { id: "p13", nombre: "Pizza Jamón, Queso y Aceitunas Negras", desc: "", img: "img/pizza-jamon-queso-aceitunas-negras.jpg", precios: { pequena: 14000, mediana: 26000, grande: 40000 } },
        { id: "p14", nombre: "Pizza Jamón, Queso y Pollo", desc: "", img: "img/pizza-jamon-queso-pollo.jpg", precios: { pequena: 14000, mediana: 26000, grande: 40000 } },
        { id: "p15", nombre: "Pizza Jamón, Queso y Tocineta", desc: "", img: "img/pizza-jamon-queso-tocineta.jpg", precios: { pequena: 14000, mediana: 26000, grande: 40000 } },
        { id: "p16", nombre: "Pizza Jamón, Queso y Carne Mechada", desc: "", img: "img/pizza-carne-mechada.jpg", precios: { pequena: 14000, mediana: 26000, grande: 40000 } },
        { id: "p17", nombre: "Pizza Campesina", desc: "Queso, Maíz, Pimentón, Champiñones, Aceitunas Negras y Cebolla", img: "img/pizza-campesina.jpg", precios: { pequena: 20000, mediana: 31000, grande: 50000 } },
        { id: "p18", nombre: "Pizza Ternerita", desc: "Jamón, Queso, Chorizo, Tocineta y Carne", img: "img/pizza-ternerita.jpg", precios: { pequena: 20000, mediana: 31000, grande: 50000 } },
        { id: "p19", nombre: "Pizza Meganinja", desc: "Jamón, Queso, Anchoas, Salami, Maíz, Pollo, Chorizo y Pimentón", img: "img/pizza-meganinja.jpg", precios: { pequena: 21000, mediana: 32000, grande: 53000 } },
        { id: "p20", nombre: "Pizza Parrillera 1", desc: "Jamón, Queso, Lomito, Chorizo, Parrillero y Pimentón", img: "img/pizza-parrillera-1.jpg", precios: { pequena: 21000, mediana: 33000, grande: 53000 } },
        { id: "p21", nombre: "Pizza Parrillera 2", desc: "Jamón, Queso, Pollo en Tiras, Chorizo, Parrillero y Pimentón", img: "img/pizza-parrillera-2.jpg", precios: { pequena: 21000, mediana: 34000, grande: 55000 } },
        { id: "p22", nombre: "Pizza Parrillera Mixta", desc: "Jamón, Pollo en Tiras, Lomito, Chorizo, Parrillera, Pimentón y Queso", img: "img/pizza-parrillera-mixta.jpg", precios: { pequena: 22000, mediana: 34000, grande: 55000 } },
        { id: "p23", nombre: "Pizza Primavera", desc: "Jamón, Queso, Maíz, Pollo en Tiras", img: "img/pizza-primavera.jpg", precios: { pequena: 22000, mediana: 34000, grande: 55000 } },
        { id: "p24", nombre: "Pizza Camarones", desc: "Jamón, Queso, Pimentón y Camarones", img: "img/pizza-camarones.jpg", precios: { pequena: 22000, mediana: 34000, grande: 55000 } }
    ],
    hamburguesas: [
        { id: "h1", nombre: "Hamburguesa Normal", desc: "Jamón, Queso, Carne, Vegetales y Papitas", img: "img/hamburguesa-normal.jpg", precio: 10000 },
        { id: "h2", nombre: "Hamburguesa Especial", desc: "Jamón, Queso, Carne, Vegetales, Papitas, Tocineta y Huevo", img: "img/hamburguesa-especial.jpg", precio: 14000 },
        { id: "h3", nombre: "Hamburguesa de Pollo", desc: "Jamón, Queso, Pollo, Vegetales, Papitas, Tocineta y Huevo", img: "img/hamburguesa-pollo.jpg", precio: 17000 },
        { id: "h4", nombre: "Hamburguesa Carne Mechada", desc: "Jamón, Queso, Vegetales, Papitas, Tocineta y Huevo", img: "img/hamburguesa-carne-mechada.jpg", precio: 17000 },
        { id: "h5", nombre: "Hamburguesa Chuleta", desc: "Jamón, Queso, Vegetales, Papitas, Tocineta y Huevo", img: "img/hamburguesa-chuleta.jpg", precio: 17000 },
        { id: "h6", nombre: "Hamburguesa Mixta", desc: "Jamón, Queso, Vegetales, Papitas, Tocineta, Huevo, Carne y Pollo", img: "img/hamburguesa-mixta.jpg", precio: 20000 }
    ],
    perrosCalientes: [
        { id: "pc1", nombre: "Perro Caliente Normal", desc: "Vegetales, Papitas y Queso", img: "img/perro.jpg", precio: 8000 },
        { id: "pc2", nombre: "Perro Caliente Kosaca", desc: "Vegetales, Papitas y Queso", img: "img/perro-kosaca.jpg", precio: 13000 },
        { id: "pc3", nombre: "Perro Caliente Polaca", desc: "Vegetales, Papitas y Queso", img: "img/perro-polaca.jpg", precio: 16000 },
        { id: "pc4", nombre: "Perro de Pollo", desc: "Vegetales, Papitas y Queso", img: "img/perro-pollo.jpg", precio: 16000 },
        { id: "pc5", nombre: "Perro de Carne", desc: "Vegetales, Papitas y Queso", img: "img/perro-carne.jpg", precio: 16000 }
    ],
    salchipapas: [
        { id: "s1", nombre: "Salchipapa Normal", desc: "", img: "img/salchipapa.jpg", precio: 10000 },
        { id: "s2", nombre: "Salchipapa Kosaca", desc: "", img: "img/salchipapa-kosaca.jpg", precio: 13000 },
        { id: "s3", nombre: "Salchipapa Polaca", desc: "", img: "img/salchipapa-polaca.jpg", precio: 16000 },
        { id: "s4", nombre: "Choripapas", desc: "", img: "img/choripapas.jpg", precio: 16000 }
    ],
    polloBroaster: [
        { id: "pb1", nombre: "2 Piezas + Papas Fritas", desc: "", img: "img/pollo-2-piezas.jpg", precio: 18000 },
        { id: "pb2", nombre: "4 Piezas + Papas Fritas", desc: "", img: "img/pollo-4-piezas.jpg", precio: 33000 },
        { id: "pb3", nombre: "6 Piezas + Papas Fritas", desc: "", img: "img/pollo.jpg", precio: 47000 },
        { id: "pb4", nombre: "8 Piezas + Papas Fritas", desc: "", img: "img/pollo-8-piezas.jpg", precio: 60000 }
    ]
};

let cart = JSON.parse(localStorage.getItem('ninjaCart')) || [];
let currentUser = JSON.parse(localStorage.getItem('ninjaUser')) || null;

function formatPrice(precio) {
    return '$' + precio.toLocaleString('es-CO') + ' COP';
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-message').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

function saveCart() {
    localStorage.setItem('ninjaCart', JSON.stringify(cart));
}

function renderPizzaCard(pizza) {
    const imgHtml = pizza.img
        ? `<img src="${pizza.img}" alt="${pizza.nombre}">`
        : `<div class="product-img-placeholder">
                <span>Imagen próximamente</span>
           </div>`;

    return `
        <div class="product-card" data-id="${pizza.id}">
            <div class="product-img-container">${imgHtml}</div>
            <div class="product-info">
                <h3>${pizza.nombre}</h3>
                ${pizza.desc ? `<p class="product-desc">${pizza.desc}</p>` : ''}
                <div class="size-prices">
                    <div class="size-option selected" onclick="selectSize(this, '${pizza.id}')">
                        <input type="radio" name="size-${pizza.id}" value="pequena" checked>
                        <label>Pequeña</label>
                        <span class="size-price">${formatPrice(pizza.precios.pequena)}</span>
                    </div>
                    <div class="size-option" onclick="selectSize(this, '${pizza.id}')">
                        <input type="radio" name="size-${pizza.id}" value="mediana">
                        <label>Mediana</label>
                        <span class="size-price">${formatPrice(pizza.precios.mediana)}</span>
                    </div>
                    <div class="size-option" onclick="selectSize(this, '${pizza.id}')">
                        <input type="radio" name="size-${pizza.id}" value="grande">
                        <label>Grande</label>
                        <span class="size-price">${formatPrice(pizza.precios.grande)}</span>
                    </div>
                </div>
                <button class="btn-add-cart" onclick="addPizzaToCart('${pizza.id}')">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    `;
}

function renderProductCard(product) {
    const imgHtml = product.img
        ? `<img src="${product.img}" alt="${product.nombre}">`
        : `<div class="product-img-placeholder">
                <span>Imagen próximamente</span>
           </div>`;

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-img-container">${imgHtml}</div>
            <div class="product-info">
                <h3>${product.nombre}</h3>
                ${product.desc ? `<p class="product-desc">${product.desc}</p>` : ''}
                <p class="single-price">${formatPrice(product.precio)}</p>
                <button class="btn-add-cart" onclick="addProductToCart('${product.id}', '${product.nombre}', ${product.precio})">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    `;
}

function renderMenu() {
  
    const pizzasGrid = document.getElementById('pizzas-grid');
    if (pizzasGrid) {
        pizzasGrid.innerHTML = menuData.pizzas.map(p => renderPizzaCard(p)).join('');
    }

    const hamburguesasGrid = document.getElementById('hamburguesas-grid');
    if (hamburguesasGrid) {
        hamburguesasGrid.innerHTML = menuData.hamburguesas.map(p => renderProductCard(p)).join('');
    }


    const perrosGrid = document.getElementById('perros-grid');
    if (perrosGrid) {
        perrosGrid.innerHTML = menuData.perrosCalientes.map(p => renderProductCard(p)).join('');
    }

    const salchipapasGrid = document.getElementById('salchipapas-grid');
    if (salchipapasGrid) {
        salchipapasGrid.innerHTML = menuData.salchipapas.map(p => renderProductCard(p)).join('');
    }

  
    const polloGrid = document.getElementById('pollo-grid');
    if (polloGrid) {
        polloGrid.innerHTML = menuData.polloBroaster.map(p => renderProductCard(p)).join('');
    }
}

function selectSize(element, pizzaId) {
    const card = element.closest('.product-card');
    card.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    element.querySelector('input[type="radio"]').checked = true;
}

function addPizzaToCart(pizzaId) {
    const pizza = menuData.pizzas.find(p => p.id === pizzaId);
    if (!pizza) return;

    const card = document.querySelector(`.product-card[data-id="${pizzaId}"]`);
    const selectedSize = card.querySelector('input[type="radio"]:checked').value;

    const sizeLabels = { pequena: 'Pequeña', mediana: 'Mediana', grande: 'Grande' };
    const price = pizza.precios[selectedSize];

    const existingIndex = cart.findIndex(item => item.id === pizzaId && item.size === selectedSize);

    if (existingIndex >= 0) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            id: pizzaId,
            nombre: pizza.nombre,
            size: selectedSize,
            sizeLabel: sizeLabels[selectedSize],
            precio: price,
            qty: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${pizza.nombre} (${sizeLabels[selectedSize]}) agregada al carrito`);
}

function addProductToCart(productId, nombre, precio) {
    const existingIndex = cart.findIndex(item => item.id === productId && !item.size);

    if (existingIndex >= 0) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            id: productId,
            nombre: nombre,
            size: null,
            sizeLabel: null,
            precio: precio,
            qty: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${nombre} agregado al carrito`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
    showToast('Carrito vaciado');
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'block' : 'none';

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <p>Tu carrito está vacío</p>
            </div>
        `;
        cartTotal.textContent = formatPrice(0);
        return;
    }

    let total = 0;
    cartItems.innerHTML = cart.map((item, index) => {
        const subtotal = item.precio * item.qty;
        total += subtotal;
        const sizeInfo = item.sizeLabel ? `<span class="cart-item-size">${item.sizeLabel}</span>` : '';

        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.nombre}</h4>
                    ${sizeInfo}
                    <p class="cart-item-price">${formatPrice(item.precio)} c/u</p>
                </div>
                <div class="cart-item-qty">
                    <button onclick="changeQty(${index}, -1)">−</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${index}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Eliminar">✕</button>
            </div>
        `;
    }).join('');

    cartTotal.textContent = formatPrice(total);
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('open');
}


const WHATSAPP_NUMERO = "584141759772";

function checkout() {
    if (cart.length === 0) {
        showToast('El carrito está vacío');
        return;
    }
    if (!currentUser) {
        showToast('Inicia sesión para realizar tu pedido');
        toggleCart();
        openLogin();
        return;
    }

    let total = 0;
    let itemsTexto = '';

    cart.forEach(item => {
        const subtotal = item.precio * item.qty;
        total += subtotal;
        const tamano = item.sizeLabel ? ` (${item.sizeLabel})` : '';
        itemsTexto += `• ${item.qty}x *${item.nombre}*${tamano} — ${formatPrice(subtotal)}\n`;
    });

    const mensaje = 
`*HOLA NINJA PIZZA!*
Quiero realizar el siguiente pedido:
*Cliente:* ${currentUser.nombre}
*Correo:* ${currentUser.email}
*DETALLE DEL PEDIDO:*
${itemsTexto}
*TOTAL A PAGAR:* ${formatPrice(total)}`;

    const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(urlWhatsApp, '_blank');

    showToast('Abriendo WhatsApp con tu pedido...');
    
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
}

let registeredUsers = JSON.parse(localStorage.getItem('ninjaUsers')) || [
    { nombre: 'Admin', email: 'admin@ninjapizza.com', password: 'admin123' }
];

function saveUsers() {
    localStorage.setItem('ninjaUsers', JSON.stringify(registeredUsers));
}

function openLogin() {
    document.getElementById('login-modal').classList.add('active');
    showLoginForm();
}

function closeLogin() {
    document.getElementById('login-modal').classList.remove('active');
    clearLoginErrors();
}

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function clearLoginErrors() {
    document.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));
}

function handleLogin(event) {
    event.preventDefault();
    clearLoginErrors();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    let hasError = false;

    if (!email) {
        document.getElementById('login-email-error').textContent = 'Ingresa tu correo electrónico';
        document.getElementById('login-email-error').classList.add('visible');
        hasError = true;
    }

    if (!password) {
        document.getElementById('login-password-error').textContent = 'Ingresa tu contraseña';
        document.getElementById('login-password-error').classList.add('visible');
        hasError = true;
    }

    if (hasError) return;

    const user = registeredUsers.find(u => u.email === email && u.password === password);

    if (!user) {
        document.getElementById('login-password-error').textContent = 'Correo o contraseña incorrectos';
        document.getElementById('login-password-error').classList.add('visible');
        return;
    }

    currentUser = { nombre: user.nombre, email: user.email };
    localStorage.setItem('ninjaUser', JSON.stringify(currentUser));
    updateAuthUI();
    closeLogin();
    showToast(`¡Bienvenido, ${currentUser.nombre}!`);
}

function handleRegister(event) {
    event.preventDefault();
    clearLoginErrors();

    const nombre = document.getElementById('reg-nombre').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const password2 = document.getElementById('reg-password2').value;

    let hasError = false;

    if (!nombre) {
        document.getElementById('reg-nombre-error').textContent = 'Ingresa tu nombre';
        document.getElementById('reg-nombre-error').classList.add('visible');
        hasError = true;
    }

    if (!email) {
        document.getElementById('reg-email-error').textContent = 'Ingresa tu correo';
        document.getElementById('reg-email-error').classList.add('visible');
        hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('reg-email-error').textContent = 'Correo no válido';
        document.getElementById('reg-email-error').classList.add('visible');
        hasError = true;
    }

    if (!password || password.length < 6) {
        document.getElementById('reg-password-error').textContent = 'La contraseña debe tener al menos 6 caracteres';
        document.getElementById('reg-password-error').classList.add('visible');
        hasError = true;
    }

    if (password !== password2) {
        document.getElementById('reg-password2-error').textContent = 'Las contraseñas no coinciden';
        document.getElementById('reg-password2-error').classList.add('visible');
        hasError = true;
    }

    if (hasError) return;

    if (registeredUsers.find(u => u.email === email)) {
        document.getElementById('reg-email-error').textContent = 'Este correo ya está registrado';
        document.getElementById('reg-email-error').classList.add('visible');
        return;
    }

    registeredUsers.push({ nombre, email, password });
    saveUsers();

    currentUser = { nombre, email };
    localStorage.setItem('ninjaUser', JSON.stringify(currentUser));
    updateAuthUI();
    closeLogin();
    showToast(`¡Cuenta creada! Bienvenido, ${nombre}`);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('ninjaUser');
    updateAuthUI();
    showToast('Sesión cerrada');
}

function updateAuthUI() {
    const loginBtn = document.getElementById('btn-login');
    const logoutBtn = document.getElementById('btn-logout');
    const greeting = document.getElementById('user-greeting');

    if (currentUser) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'flex';
        greeting.style.display = 'block';
        greeting.textContent = `Hola, ${currentUser.nombre}`;
    } else {
        loginBtn.style.display = 'flex';
        logoutBtn.style.display = 'none';
        greeting.style.display = 'none';
    }
}

function goToCategory(catId) {
    window.location.hash = '#' + catId;
    window.location.reload();
}

function showCategory(catId, shouldScroll = false) {
    const allSections = ['categorias-home', 'pizzas', 'hamburguesas', 'perros', 'salchipapas', 'pollo'];

    if (catId === 'todo') {
        const homeSec = document.getElementById('categorias-home');
        if (homeSec) homeSec.style.display = 'none';

        ['pizzas', 'hamburguesas', 'perros', 'salchipapas', 'pollo'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'block';
        });
    } else if (catId === 'inicio') {
        const homeSec = document.getElementById('categorias-home');
        if (homeSec) homeSec.style.display = 'block';

        ['pizzas', 'hamburguesas', 'perros', 'salchipapas', 'pollo'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
    } else {
        allSections.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.display = (id === catId) ? 'block' : 'none';
            }
        });
    }

    document.querySelectorAll('.cat-btn').forEach(btn => {
        if (btn.getAttribute('data-cat') === catId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (shouldScroll) {
        const nav = document.getElementById('category-nav');
        if (nav) {
            nav.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

function handleHashRoute() {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const hash = window.location.hash.replace('#', '') || 'inicio';
    const validCategories = ['inicio', 'pizzas', 'hamburguesas', 'perros', 'salchipapas', 'pollo', 'todo'];
    if (validCategories.includes(hash)) {
        showCategory(hash, false);
    } else {
        showCategory('inicio', false);
    }
}

function toggleMobileMenu() {
    document.getElementById('navbar-links').classList.toggle('mobile-open');
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    updateCartUI();
    updateAuthUI();
    handleHashRoute();

    window.addEventListener('hashchange', () => {
        handleHashRoute();
    });

    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navbar-links').classList.remove('mobile-open');
        });
    });

    document.getElementById('login-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('login-modal')) {
            closeLogin();
        }
    });

    document.getElementById('cart-overlay').addEventListener('click', toggleCart);
});
