/**
 * Boscoffee - Menu Digital & Système de Sélection Interactif
 * Données complètes et fidèles au menu officiel
 */

const MENU_DATA = [
    {
        id: "matin",
        title: "Plaisir du Matin",
        icon: "🥐",
        group: "sucre",
        badge: "Pâtisserie & Délices",
        items: [
            { id: "matin-1", name: "Viennoiserie", price: 3.0, desc: "Croissant, pain au chocolat ou brioche fraîchement dorée" },
            { id: "matin-2", name: "Cake", price: 4.0, desc: "Tranche moelleuse aux saveurs du jour" },
            { id: "matin-3", name: "Brownies", price: 4.0, desc: "Brownie gourmand au chocolat fondant et noix" },
            { id: "matin-4", name: "Gâteaux", price: 12.0, desc: "Sélection de pâtisseries fines de la vitrine" },
            { id: "matin-5", name: "Fondant chocolat", price: 12.0, desc: "Cœur coulant au chocolat noir intense servi tiède" },
            { id: "matin-6", name: "Cheesecake", price: 14.0, desc: "Onctueux cheesecake avec coulis de fruits rouges ou caramel" }
        ]
    },
    {
        id: "thes",
        title: "Thés",
        icon: "🫖",
        group: "chaud",
        badge: "Tradition & Infusion",
        items: [
            { id: "the-1", name: "Thé à la menthe", price: 3.0, desc: "Thé vert traditionnel infusé à la menthe fraîche" },
            { id: "the-2", name: "Thé aux amandes", price: 7.0, desc: "Thé tunisien servi avec amandes croquantes grillées" },
            { id: "the-3", name: "Thé aux pignons", price: 9.0, desc: "Grand classique raffiné aux pignons dorés" },
            { id: "the-4", name: "Thé infusion", price: 5.0, desc: "Sélection d'infusions parfumées bien-être" },
            { id: "the-5", name: "Thé Glacé Aromatisé", price: 6.0, desc: "Thé glacé rafraîchissant préparé maison" }
        ]
    },
    {
        id: "cafes",
        title: "Cafés",
        icon: "☕",
        group: "chaud",
        badge: "Grains Sélectionnés",
        items: [
            { id: "cafe-1", name: "Express", price: 3.5, desc: "Espresso intense riche en arômes et crema veloutée" },
            { id: "cafe-2", name: "Américain", price: 4.0, desc: "Espresso allongé à l'eau chaude, doux et équilibré" },
            { id: "cafe-3", name: "Capucin", price: 4.0, desc: "Le traditionnel espresso surmonté d'une larme de lait chaud" },
            { id: "cafe-4", name: "Café Crème", price: 4.5, desc: "Espresso riche et généreux lait chaud mousseux" },
            { id: "cafe-5", name: "Nescafé au lait", price: 5.0, desc: "Café soluble velouté au bon lait chaud" },
            { id: "cafe-6", name: "Café Turc", price: 6.0, desc: "Café de tradition préparé au cezve avec ses épices subtiles" }
        ]
    },
    {
        id: "boissons",
        title: "Boissons",
        icon: "🥤",
        group: "frais",
        badge: "Fraîcheurs & Sodas",
        items: [
            { id: "bois-1", name: "Boisson Gazeuse", price: 4.5, desc: "Canette de soda au choix (Coca, Fanta, Sprite...)" },
            { id: "bois-2", name: "Schweppes", price: 5.0, desc: "Schweppes Tonic, Lemon ou Agrumes" },
            { id: "bois-3", name: "Power Drink", price: 10.0, desc: "Boisson énergisante fraîche" },
            { id: "bois-4", name: "Eau Minérale 0.5L", price: 2.0, desc: "Bouteille d'eau minérale fraîche 50cl" },
            { id: "bois-5", name: "Eau Minérale 1L", price: 3.5, desc: "Bouteille d'eau minérale 1 Litre" },
            { id: "bois-6", name: "Eau Gazéifiée 1L", price: 4.0, desc: "Bouteille d'eau gazéifiée pétillante 1 Litre" },
            { id: "bois-supp", name: "Supplément (Menthe, Grenadine)", price: 1.5, isSupplement: true, desc: "Sirop au choix pour parfumer votre eau ou soda" }
        ]
    },
    {
        id: "cafes-gourmands",
        title: "Cafés Gourmands",
        icon: "✨",
        group: "chaud",
        badge: "Signatures Barista",
        items: [
            { id: "cg-1", name: "Cappuccino", price: 7.0, desc: "Espresso serré, lit de lait onctueux et nuage de mousse de lait saupoudrée" },
            { id: "cg-2", name: "Frappuccino Noisette", price: 7.5, desc: "Café frappé glacé au doux arôme de noisettes grillées" },
            { id: "cg-3", name: "Frappuccino Vanille", price: 7.5, desc: "Mélange glacé crémeux subtilement parfumé à la vanille bourbon" },
            { id: "cg-4", name: "Frappuccino Caramel", price: 7.5, desc: "Frappé gourmand au coulis de caramel fondant" },
            { id: "cg-5", name: "Frappuccino Cookies", price: 7.5, desc: "Gourmandise frappée aux éclats croquants de cookies" },
            { id: "cg-6", name: "Mocha (chocolat noir/blanc)", price: 7.5, desc: "Alliance exquise d'espresso, lait texturé et chocolat au choix" }
        ]
    },
    {
        id: "jus",
        title: "Jus",
        icon: "🍊",
        group: "frais",
        badge: "100% Fruits Pressés",
        items: [
            { id: "jus-1", name: "Jus d'Orange", price: 6.0, desc: "Oranges fraîches pressées à la commande" },
            { id: "jus-2", name: "Citronnade", price: 6.0, desc: "Citronnade tunisienne fraîche et acidulée faite maison" },
            { id: "jus-3", name: "Citronnade à la Menthe", price: 6.5, desc: "Citronnade maison parfumée à la menthe verte pilée" },
            { id: "jus-4", name: "Citronnade aux Amandes", price: 8.5, desc: "Spécialité onctueuse aux amandes douces finement broyées" },
            { id: "jus-5", name: "Jus de Fraise", price: 7.0, desc: "Fraises fraîches mixées savoureuses et douces" },
            { id: "jus-6", name: "Jus de Kiwi", price: 8.5, desc: "Kiwi frais riche en vitamines et vivifiant" },
            { id: "jus-7", name: "Jus de Kiwi Banane", price: 9.5, desc: "Duo onctueux et plein d'énergie" },
            { id: "jus-8", name: "Jus de Fraise Banane", price: 9.5, desc: "Un grand classique fruité et gourmand" },
            { id: "jus-9", name: "Jus d'Orange Banane", price: 9.5, desc: "Douceur de la banane et peps de l'orange" },
            { id: "jus-10", name: "Jus Nutella Banane", price: 10.5, desc: "Mix irrésistible de banane fraîche et chocolat Nutella" },
            { id: "jus-11", name: "Jus de Banane, Dattes, Fruits secs", price: 12.0, isSpecialty: true, desc: "Cocktail d'énergie vitaminé aux fruits secs de choix et dattes" }
        ]
    },
    {
        id: "chocolats",
        title: "Chocolats",
        icon: "🍫",
        group: "chaud",
        badge: "Chocolats Chauds & Douceurs",
        items: [
            { id: "choc-1", name: "Chocolat au lait", price: 4.5, desc: "Lait velouté au chocolat fondu doux" },
            { id: "choc-2", name: "Chocolat Chaud", price: 7.0, desc: "Recette traditionnelle épaisse, crémeuse et réconfortante" },
            { id: "choc-3", name: "Chocolat Glacé", price: 7.0, desc: "Chocolat fouetté glacé pour une pause gourmande rafraîchissante" },
            { id: "choc-supp", name: "Supplément (Arôme, Nestlé, Chantilly)", price: 2.0, isSupplement: true, desc: "Personnalisez votre chocolat avec sirop, lait concentré Nestlé ou généreuse chantilly" }
        ]
    },
    {
        id: "smoothies",
        title: "Smoothies",
        icon: "🥑",
        group: "frais",
        badge: "Fraîcheurs Fruitées",
        items: [
            { id: "sm-1", name: "Green Smoothie", price: 12.0, desc: "Mix tonique et détox de fruits verts frais" },
            { id: "sm-2", name: "Pina Colada", price: 12.0, desc: "Ananas juteux et crème de coco onctueuse sans alcool" },
            { id: "sm-3", name: "Lovers Smoothie", price: 12.0, desc: "Recette douceur aux fruits rouges et saveurs envoûtantes" },
            { id: "sm-4", name: "Red Smoothie", price: 12.0, desc: "Explosion fruitée de fraises, framboises et baies fraîches" }
        ]
    },
    {
        id: "mocktails",
        title: "Mocktails",
        icon: "🍹",
        group: "frais",
        badge: "Cocktails Sans Alcool",
        items: [
            { id: "mk-1", name: "Virgin", price: 7.0, desc: "Mocktail classique rafraîchissant aux agrumes et menthe" },
            { id: "mk-2", name: "Blue Sky", price: 8.5, desc: "Création azurée aux notes exotiques et pétillantes" },
            { id: "mk-3", name: "Red Sun", price: 8.5, desc: "Nuances ensoleillées de grenade, fruits rouges et bulles" },
            { id: "mk-4", name: "Strawberry", price: 8.5, desc: "Coulis de fraises fraîches, jus de citron et fines bulles" },
            { id: "mk-5", name: "Fruits de Passion", price: 8.5, desc: "Punch tropical acidulé et arômes intenses de maracuja" },
            { id: "mk-6", name: "Pina Colada", price: 10.5, desc: "Version mocktail frappée à la pulpe d'ananas et lait de coco" },
            { id: "mk-7", name: "Full Power", price: 13.0, isSpecialty: true, desc: "Cocktail signature surpuissant riche en saveurs et fraîcheur" }
        ]
    },
    {
        id: "milkshakes",
        title: "Milkshakes",
        icon: "🥤",
        group: "frais",
        badge: "Ultra Gourmands",
        items: [
            { id: "ms-1", name: "Nutella", price: 10.5, desc: "Glace vanille crémeuse, lait frais et pur Nutella" },
            { id: "ms-2", name: "Spéculoos", price: 11.5, desc: "Saveur biscuitée authentique et crème de spéculoos Lotus" },
            { id: "ms-3", name: "Oreo", price: 11.5, desc: "Mixé aux biscuits Oreo craquants et chantilly" },
            { id: "ms-4", name: "Kinder Bueno", price: 11.5, desc: "Chocolat et noisettes fondantes du célèbre Kinder Bueno" },
            { id: "ms-5", name: "Snickers", price: 11.5, desc: "Chocolat, caramel fondant et touches de cacahuètes grillées" },
            { id: "ms-6", name: "Bounty", price: 11.5, desc: "Noix de coco des îles et coulis de chocolat velouté" },
            { id: "ms-7", name: "Cookies", price: 11.5, desc: "Morceaux gourmands de cookies américains aux pépites de chocolat" },
            { id: "ms-8", name: "Ferrero", price: 11.5, desc: "Éclats de Ferrero Rocher et ganache noisette raffinée" },
            { id: "ms-9", name: "Bosco", price: 16.0, isSpecialty: true, desc: "Milkshake géant signature Boscoffee d'exception surchargé de délices" },
            { id: "ms-supp", name: "Supplément (Banane, Fruits secs)", price: 3.0, isSupplement: true, desc: "Ajout de banane fraîche ou mélange de fruits secs croquants" }
        ]
    },
    {
        id: "crepes-sucrees",
        title: "Crêpes Sucrées / Pancake",
        icon: "🥞",
        group: "sucre",
        badge: "Pâte Maison & Toppings",
        items: [
            { id: "cs-1", name: "Nutella", price: 10.5, desc: "Généreusement tartinée au pur Nutella fondant" },
            { id: "cs-2", name: "Nutella Banane", price: 13.5, desc: "Rondelles de banane fraîche enveloppées de Nutella chaud" },
            { id: "cs-3", name: "Nutella Spéculoos", price: 13.5, desc: "Combinaison irrésistible Nutella et crumble de spéculoos" },
            { id: "cs-4", name: "Nutella Kinder Bueno", price: 13.5, desc: "Garnie de barres Kinder Bueno et sauce chocolat" },
            { id: "cs-5", name: "Nutella Ferrero", price: 13.5, desc: "Chocolat Nutella et morceaux de Ferrero Rocher" },
            { id: "cs-6", name: "Farcie Bosco", price: 16.5, isSpecialty: true, desc: "La recette exclusive maison ultra gourmande farcie de pépites et fruits" },
            { id: "cs-supp", name: "Supplément (Boule de Glace, Fruits secs, Topping)", price: 3.5, isSupplement: true, desc: "Boule de crème glacée artisanale, fruits secs ou topping au choix" }
        ]
    },
    {
        id: "crepes-salees",
        title: "Crêpes Salées",
        icon: "🧀",
        group: "sale",
        badge: "Salé Chaud & Croustillant",
        items: [
            { id: "csl-1", name: "Fromage", price: 8.5, desc: "Mélange fondant de fromages savoureux" },
            { id: "csl-2", name: "Thon Fromage", price: 11.5, desc: "Thon de premier choix et fromage râpé fondant" },
            { id: "csl-3", name: "Jambon Fumé Fromage", price: 10.5, desc: "Fines tranches de jambon fumé et fromage coulant" },
            { id: "csl-4", name: "Bosco", price: 16.0, isSpecialty: true, desc: "Thon, Fromage, Jambon, Oeuf - La crêpe complète signature" },
            { id: "csl-5", name: "Farcie Bosco", price: 16.5, isSpecialty: true, desc: "Crêpe salée géante farcie façon Bosco richement garnie" },
            { id: "csl-supp", name: "Supplément", price: 5.0, isSupplement: true, desc: "Supplément garniture salée au choix" }
        ]
    },
    {
        id: "omelettes",
        title: "Omelettes",
        icon: "🍳",
        group: "sale",
        badge: "Cuisinées Minute",
        items: [
            { id: "om-1", name: "Nature", price: 6.5, desc: "Omelette baveuse aux œufs frais dorée au beurre fin" },
            { id: "om-2", name: "Fromage", price: 8.5, desc: "Cœur coulant au fromage fondant" },
            { id: "om-3", name: "Thon Fromage", price: 10.5, desc: "Garnie de thon émietté et fromage râpé" },
            { id: "om-4", name: "Jambon Fumé Fromage", price: 10.5, desc: "Jambon fumé sélectionné et fromage savoureux" },
            { id: "om-5", name: "Bosco", price: 16.5, isSpecialty: true, desc: "Thon, Fromage, Jambon Fumé, Salade d'accompagnement" },
            { id: "om-supp", name: "Supplément (Champignons, Jambon)", price: 3.0, isSupplement: true, desc: "Champignons poêlés ou jambon fumé supplémentaire" }
        ]
    },
    {
        id: "formules",
        title: "Les Formules Petit-Déj",
        icon: "☀️",
        group: "sale",
        badge: "Complets & Équilibrés",
        items: [
            {
                id: "form-1",
                name: "Rapido",
                price: 10.0,
                desc: "Viennoiserie, café, jus, eau. La formule matinale essentielle pour démarrer la journée du bon pied."
            },
            {
                id: "form-2",
                name: "Continental",
                price: 15.0,
                desc: "Viennoiserie, café, jus, chocolat, confiture, beurre, ricotta, pain de mie, crêpe. Le réveil gourmand par excellence."
            },
            {
                id: "form-3",
                name: "Bosco (2 personnes)",
                price: 25.0,
                isSpecialty: true,
                desc: "Viennoiserie, café, jus, eau, omelette, crêpe, ojja, charcuterie, fromage. Le festin royal complet à partager à deux !"
            }
        ]
    }
];

// État de l'application (Sélection / Panier à table)
let orderState = {};
let activeCategoryId = "all";
let activeGroup = "all";
let searchQuery = "";

// Sauvegarde dans sessionStorage pour conserver la sélection pendant la visite
function loadSavedOrder() {
    try {
        const saved = sessionStorage.getItem("boscoffee_order");
        if (saved) {
            orderState = JSON.parse(saved);
        }
    } catch (e) {
        orderState = {};
    }
}

function saveOrder() {
    try {
        sessionStorage.setItem("boscoffee_order", JSON.stringify(orderState));
    } catch (e) {}
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    loadSavedOrder();
    renderCategoriesBar();
    renderMenu();
    updateOrderSummary();
    setupEventListeners();
});

// Rendu des boutons de catégories (Navigation défilante)
function renderCategoriesBar() {
    const container = document.getElementById("categories-container");
    if (!container) return;

    let html = `
        <button class="cat-pill ${activeCategoryId === 'all' ? 'active' : ''}" data-cat-id="all">
            <span class="cat-icon">📋</span>
            <span class="cat-title">Tous (${getTotalProductsCount()})</span>
        </button>
    `;

    MENU_DATA.forEach(cat => {
        html += `
            <button class="cat-pill ${activeCategoryId === cat.id ? 'active' : ''}" data-cat-id="${cat.id}">
                <span class="cat-icon">${cat.icon}</span>
                <span class="cat-title">${cat.title}</span>
            </button>
        `;
    });

    container.innerHTML = html;

    // Attachement des clics
    container.querySelectorAll(".cat-pill").forEach(btn => {
        btn.addEventListener("click", () => {
            const catId = btn.dataset.catId;
            selectCategory(catId);
        });
    });
}

function getTotalProductsCount() {
    return MENU_DATA.reduce((acc, cat) => acc + cat.items.length, 0);
}

// Sélection d'une catégorie
function selectCategory(catId) {
    activeCategoryId = catId;

    // Mise à jour de la classe active sur les boutons
    document.querySelectorAll(".cat-pill").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.catId === catId);
    });

    // Centrer le bouton actif dans le défilement horizontal
    const activeBtn = document.querySelector(`.cat-pill[data-cat-id="${catId}"]`);
    if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    renderMenu();

    // Si une catégorie spécifique est cliquée et qu'on affiche tout, scroller doucement jusqu'à elle
    if (catId !== "all") {
        const sectionEl = document.getElementById(`section-${catId}`);
        if (sectionEl) {
            sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
}

// Filtrage par macro-groupe (Tous, Chaud, Frais, Sucré, Salé)
function setMacroGroup(group) {
    activeGroup = group;
    document.querySelectorAll(".macro-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.group === group);
    });

    // Si on filtre par groupe, on réinitialise la sous-catégorie sur "all"
    activeCategoryId = "all";
    document.querySelectorAll(".cat-pill").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.catId === "all");
    });

    renderMenu();
}

// Rendu principal des catégories et produits
function renderMenu() {
    const container = document.getElementById("menu-container");
    if (!container) return;

    let filteredCategories = MENU_DATA;

    // Filtre par macro groupe
    if (activeGroup !== "all") {
        filteredCategories = filteredCategories.filter(cat => cat.group === activeGroup);
    }

    // Filtre par catégorie spécifique si sélectionnée (autre que "all")
    if (activeCategoryId !== "all") {
        filteredCategories = filteredCategories.filter(cat => cat.id === activeCategoryId);
    }

    // Traitement de la recherche
    const query = searchQuery.trim().toLowerCase();
    let sectionsHtml = "";
    let matchCount = 0;

    filteredCategories.forEach(cat => {
        // Filtrer les articles si recherche active
        const matchingItems = cat.items.filter(item => {
            if (!query) return true;
            return (
                item.name.toLowerCase().includes(query) ||
                (item.desc && item.desc.toLowerCase().includes(query)) ||
                cat.title.toLowerCase().includes(query)
            );
        });

        if (matchingItems.length > 0) {
            matchCount += matchingItems.length;
            sectionsHtml += renderCategorySection(cat, matchingItems);
        }
    });

    if (sectionsHtml === "") {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">☕🔍</div>
                <h3>Aucun résultat trouvé</h3>
                <p>Aucun article ne correspond à votre recherche "${escapeHtml(searchQuery)}".</p>
                <button class="reset-search-btn" onclick="clearSearch()">Réinitialiser la recherche</button>
            </div>
        `;
    } else {
        container.innerHTML = sectionsHtml;
        attachProductEventListeners();
    }
}

// Rendu d'une section de catégorie
function renderCategorySection(cat, items) {
    let itemsHtml = items.map(item => renderProductCard(item, cat.id)).join("");

    return `
        <section class="category-section" id="section-${cat.id}" data-category="${cat.id}">
            <div class="category-header">
                <div class="category-title-box">
                    <span class="category-script">${cat.title}</span>
                    <h2 class="category-main-title">
                        <span class="cat-icon-lg">${cat.icon}</span> ${cat.title}
                    </h2>
                </div>
                ${cat.badge ? `<span class="category-badge">${cat.badge}</span>` : ""}
            </div>

            <div class="products-grid">
                ${itemsHtml}
            </div>
        </section>
    `;
}

// Rendu d'une carte produit
function renderProductCard(item, catId) {
    const qty = orderState[item.id] ? orderState[item.id].qty : 0;
    const formattedPrice = formatPrice(item.price);
    const isSpecialty = item.isSpecialty;
    const isSupplement = item.isSupplement;

    return `
        <article class="product-card ${qty > 0 ? 'selected' : ''} ${isSpecialty ? 'specialty-card' : ''}" 
                 id="product-card-${item.id}"
                 data-item-id="${item.id}">
            <div class="product-content">
                <div class="product-header-row">
                    <h3 class="product-name">
                        ${escapeHtml(item.name)}
                        ${isSpecialty ? '<span class="signature-tag">Signature Bosco</span>' : ''}
                        ${isSupplement ? '<span class="supplement-tag">Option</span>' : ''}
                    </h3>
                    <div class="product-price">
                        <span class="price-val">${formattedPrice}</span>
                        <span class="price-curr">DT</span>
                    </div>
                </div>

                ${item.desc ? `<p class="product-desc">${escapeHtml(item.desc)}</p>` : ''}

                <div class="product-actions">
                    <div class="quantity-controller ${qty > 0 ? 'active' : ''}">
                        <button class="qty-btn minus-btn" data-id="${item.id}" aria-label="Diminuer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <span class="qty-display" id="qty-${item.id}">${qty}</span>
                        <button class="qty-btn plus-btn" data-id="${item.id}" aria-label="Ajouter">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>

                    <button class="quick-add-btn ${qty > 0 ? 'has-qty' : ''}" data-id="${item.id}">
                        ${qty > 0 ? `Ajouté (${qty})` : `+ Choisir`}
                    </button>
                </div>
            </div>
        </article>
    `;
}

// Attacher les écouteurs sur les boutons produits
function attachProductEventListeners() {
    // Boutons rapides "Ajouter"
    document.querySelectorAll(".quick-add-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            changeItemQty(id, 1);
        });
    });

    // Boutons +
    document.querySelectorAll(".qty-btn.plus-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            changeItemQty(id, 1);
        });
    });

    // Boutons -
    document.querySelectorAll(".qty-btn.minus-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            changeItemQty(id, -1);
        });
    });
}

// Gestion de la quantité d'un article
function changeItemQty(itemId, delta) {
    const itemData = findItemById(itemId);
    if (!itemData) return;

    if (!orderState[itemId]) {
        if (delta > 0) {
            orderState[itemId] = {
                ...itemData,
                qty: delta
            };
            showToast(`"${itemData.name}" ajouté à votre sélection`);
        }
    } else {
        orderState[itemId].qty += delta;
        if (orderState[itemId].qty <= 0) {
            delete orderState[itemId];
            showToast(`"${itemData.name}" retiré de la sélection`);
        }
    }

    saveOrder();
    updateItemUi(itemId);
    updateOrderSummary();
}

function findItemById(itemId) {
    for (const cat of MENU_DATA) {
        for (const item of cat.items) {
            if (item.id === itemId) return item;
        }
    }
    return null;
}

// Mise à jour de l'affichage d'un produit sans tout redessiner
function updateItemUi(itemId) {
    const card = document.getElementById(`product-card-${itemId}`);
    const qtySpan = document.getElementById(`qty-${itemId}`);
    const qty = orderState[itemId] ? orderState[itemId].qty : 0;

    if (card) {
        card.classList.toggle("selected", qty > 0);
        const controller = card.querySelector(".quantity-controller");
        if (controller) {
            controller.classList.toggle("active", qty > 0);
        }
        const quickBtn = card.querySelector(".quick-add-btn");
        if (quickBtn) {
            quickBtn.classList.toggle("has-qty", qty > 0);
            quickBtn.textContent = qty > 0 ? `Ajouté (${qty})` : `+ Choisir`;
        }
    }

    if (qtySpan) {
        qtySpan.textContent = qty;
    }
}

// Mise à jour des barres et badges de sélection
function updateOrderSummary() {
    let totalItems = 0;
    let totalPrice = 0;

    Object.values(orderState).forEach(item => {
        totalItems += item.qty;
        totalPrice += item.qty * item.price;
    });

    const formattedTotal = formatPrice(totalPrice);

    // Header badge
    const badge = document.getElementById("order-count-badge");
    if (badge) {
        badge.textContent = totalItems;
        badge.classList.toggle("has-items", totalItems > 0);
    }

    // Floating bar
    const floatingBar = document.getElementById("floating-order-bar");
    const barQty = document.getElementById("bar-items-qty");
    const barPrice = document.getElementById("bar-total-price");

    if (floatingBar && barQty && barPrice) {
        barQty.textContent = totalItems;
        barPrice.textContent = formattedTotal;
        floatingBar.classList.toggle("visible", totalItems > 0);
    }

    // Modal total
    const modalTotal = document.getElementById("modal-total-price");
    if (modalTotal) {
        modalTotal.textContent = formattedTotal;
    }

    // Waiter total
    const waiterTotal = document.getElementById("waiter-total-val");
    if (waiterTotal) {
        waiterTotal.textContent = formattedTotal;
    }

    renderOrderModalItems();
}

// Rendu des articles dans le modal "Ma Sélection"
function renderOrderModalItems() {
    const container = document.getElementById("order-modal-items");
    if (!container) return;

    const items = Object.values(orderState);

    if (items.length === 0) {
        container.innerHTML = `
            <div class="modal-empty-state">
                <div class="empty-cup">☕</div>
                <h4>Votre sélection est vide</h4>
                <p>Cliquez sur "+ Choisir" sur les produits du menu pour composer votre commande.</p>
            </div>
        `;
        return;
    }

    let html = "";
    items.forEach(item => {
        const itemTotal = formatPrice(item.price * item.qty);
        html += `
            <div class="order-modal-row">
                <div class="modal-row-info">
                    <span class="modal-item-name">${escapeHtml(item.name)}</span>
                    <span class="modal-item-unit">${formatPrice(item.price)} DT / unité</span>
                </div>
                <div class="modal-row-actions">
                    <div class="modal-qty-ctrl">
                        <button class="modal-qty-btn" onclick="changeItemQty('${item.id}', -1)">-</button>
                        <span class="modal-qty-val">${item.qty}</span>
                        <button class="modal-qty-btn" onclick="changeItemQty('${item.id}', 1)">+</button>
                    </div>
                    <span class="modal-row-subtotal">${itemTotal} DT</span>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Rendu pour le mode Serveur (Grand format ultra lisible)
function renderWaiterView() {
    const listEl = document.getElementById("waiter-view-list");
    if (!listEl) return;

    const items = Object.values(orderState);
    if (items.length === 0) {
        listEl.innerHTML = `<p class="waiter-empty">Aucun produit sélectionné pour le moment.</p>`;
        return;
    }

    let html = "";
    items.forEach(item => {
        html += `
            <div class="waiter-card-item">
                <div class="waiter-item-qty">${item.qty}x</div>
                <div class="waiter-item-details">
                    <div class="waiter-name">${escapeHtml(item.name)}</div>
                    ${item.desc ? `<div class="waiter-sub">${escapeHtml(item.desc)}</div>` : ''}
                </div>
                <div class="waiter-price">${formatPrice(item.price * item.qty)} DT</div>
            </div>
        `;
    });

    listEl.innerHTML = html;
}

// Configuration des événements généraux
function setupEventListeners() {
    // Boutons Macro-groupes
    document.querySelectorAll(".macro-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            setMacroGroup(btn.dataset.group);
        });
    });

    // Barre de recherche
    const searchInput = document.getElementById("search-input");
    const clearBtn = document.getElementById("clear-search-btn");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            if (clearBtn) clearBtn.style.display = searchQuery ? "block" : "none";
            renderMenu();
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            clearSearch();
        });
    }

    // Toggle recherche au header
    const searchToggleBtn = document.getElementById("search-toggle-btn");
    if (searchToggleBtn) {
        searchToggleBtn.addEventListener("click", () => {
            const sec = document.getElementById("search-section");
            if (sec) {
                sec.scrollIntoView({ behavior: "smooth" });
                const inp = document.getElementById("search-input");
                if (inp) inp.focus();
            }
        });
    }

    // Ouvrir / Fermer Modal de commande
    const openBtn = document.getElementById("open-selection-btn");
    const orderHeaderBtn = document.getElementById("order-drawer-btn");
    const closeBtn = document.getElementById("close-modal-btn");
    const backdrop = document.getElementById("order-modal-backdrop");

    if (openBtn) openBtn.addEventListener("click", openOrderModal);
    if (orderHeaderBtn) orderHeaderBtn.addEventListener("click", openOrderModal);
    if (closeBtn) closeBtn.addEventListener("click", closeOrderModal);

    if (backdrop) {
        backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) closeOrderModal();
        });
    }

    // Vider la sélection
    const clearAllBtn = document.getElementById("clear-all-order-btn");
    if (clearAllBtn) {
        clearAllBtn.addEventListener("click", () => {
            if (confirm("Voulez-vous vraiment effacer votre sélection ?")) {
                orderState = {};
                saveOrder();
                renderMenu();
                updateOrderSummary();
                closeOrderModal();
                showToast("Votre sélection a été réinitialisée");
            }
        });
    }

    // Mode Plein Écran Serveur
    const waiterBtn = document.getElementById("waiter-view-btn");
    const closeWaiterBtn = document.getElementById("close-waiter-view-btn");
    const waiterView = document.getElementById("waiter-fullscreen-view");

    if (waiterBtn && waiterView) {
        waiterBtn.addEventListener("click", () => {
            renderWaiterView();
            waiterView.classList.add("active");
            closeOrderModal();
        });
    }

    if (closeWaiterBtn && waiterView) {
        closeWaiterBtn.addEventListener("click", () => {
            waiterView.classList.remove("active");
        });
    }
}

function openOrderModal() {
    const backdrop = document.getElementById("order-modal-backdrop");
    if (backdrop) backdrop.classList.add("open");
    renderOrderModalItems();
}

function closeOrderModal() {
    const backdrop = document.getElementById("order-modal-backdrop");
    if (backdrop) backdrop.classList.remove("open");
}

function clearSearch() {
    searchQuery = "";
    const searchInput = document.getElementById("search-input");
    const clearBtn = document.getElementById("clear-search-btn");
    if (searchInput) searchInput.value = "";
    if (clearBtn) clearBtn.style.display = "none";
    renderMenu();
}

// Toast notification
let toastTimer = null;
function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2400);
}

// Utilitaires de formatage
function formatPrice(num) {
    // Affiche 3.5 en "3.500" ou "3.5" (en Tunisie les millimes s'écrivent souvent 3.500 DT ou 3.5 DT)
    // Ici on affiche 3.500 DT ou 3.000 DT pour une précision monétaire parfaite
    return Number(num).toFixed(3);
}

function escapeHtml(str) {
    if (!str) return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}