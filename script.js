/**
 * Boscoffee - Menu Digital Officiel
 * Style d'affichage inspiré de Starbucks avec la charte graphique exacte du menu papier Boscoffee
 */

const MENU_DATA = [
    {
        id: "matin",
        title: "Plaisir du Matin",
        icon: "🥐",
        group: "sucre",
        badge: "Pâtisseries & Délices",
        items: [
            { id: "matin-1", name: "Viennoiserie", price: 3.0, desc: "Croissant, pain au chocolat ou brioche dorée au beurre", icon: "🥐" },
            { id: "matin-2", name: "Cake", price: 4.0, desc: "Tranche moelleuse aux saveurs du jour", icon: "🍰" },
            { id: "matin-3", name: "Brownies", price: 4.0, desc: "Chocolat fondant intense et éclats de noix", icon: "🍫" },
            { id: "matin-4", name: "Gâteaux", price: 12.0, desc: "Pâtisserie fine du chef selon arrivage", icon: "🎂" },
            { id: "matin-5", name: "Fondant chocolat", price: 12.0, desc: "Cœur coulant au chocolat noir servi tiède", icon: "🍮" },
            { id: "matin-6", name: "Cheesecake", price: 14.0, desc: "Recette onctueuse avec coulis gourmand au choix", icon: "🍰" }
        ]
    },
    {
        id: "thes",
        title: "Thés",
        icon: "🫖",
        group: "chaud",
        badge: "Tradition & Infusion",
        items: [
            { id: "the-1", name: "Thé à la menthe", price: 3.0, desc: "Thé vert traditionnel infusé aux feuilles de menthe fraîche", icon: "🌱" },
            { id: "the-2", name: "Thé aux amandes", price: 7.0, desc: "Thé tunisien parfumé servi avec amandes grillées croquantes", icon: "🫖" },
            { id: "the-3", name: "Thé aux pignons", price: 9.0, desc: "Prestige et tradition tunisienne aux pignons dorés", icon: "🫖" },
            { id: "the-4", name: "Thé infusion", price: 5.0, desc: "Sélection d'infusions bien-être et verveine", icon: "🌿" },
            { id: "the-5", name: "Thé Glacé Aromatisé", price: 6.0, desc: "Thé glacé rafraîchissant fait maison aux agrumes", icon: "🧊" }
        ]
    },
    {
        id: "cafes",
        title: "Cafés",
        icon: "☕",
        group: "chaud",
        badge: "Grains Sélectionnés",
        items: [
            { id: "cafe-1", name: "Express", price: 3.5, desc: "Espresso serré riche en crema veloutée", icon: "☕" },
            { id: "cafe-2", name: "Américain", price: 4.0, desc: "Espresso allongé à l'eau pure, doux et équilibré", icon: "☕" },
            { id: "cafe-3", name: "Capucin", price: 4.0, desc: "Espresso surmonté d'une larme délicate de lait chaud", icon: "☕" },
            { id: "cafe-4", name: "Café Crème", price: 4.5, desc: "Espresso riche et généreux lait chaud mousseux", icon: "☕" },
            { id: "cafe-5", name: "Nescafé au lait", price: 5.0, desc: "Café soluble velouté au bon lait chaud", icon: "☕" },
            { id: "cafe-6", name: "Café Turc", price: 6.0, desc: "Café de tradition préparé au cezve aux arômes intenses", icon: "☕" }
        ]
    },
    {
        id: "boissons",
        title: "Boissons",
        icon: "🥤",
        group: "frais",
        badge: "Fraîcheurs & Sodas",
        items: [
            { id: "bois-1", name: "Boisson Gazeuse", price: 4.5, desc: "Canette fraîche au choix (Coca-Cola, Fanta, Sprite...)", icon: "🥤" },
            { id: "bois-2", name: "Schweppes", price: 5.0, desc: "Tonic, Lemon ou Agrumes très frais", icon: "🥤" },
            { id: "bois-3", name: "Power Drink", price: 10.0, desc: "Boisson énergisante glacée", icon: "⚡" },
            { id: "bois-4", name: "Eau Minérale 0.5L", price: 2.0, desc: "Bouteille d'eau minérale 50cl", icon: "💧" },
            { id: "bois-5", name: "Eau Minérale 1L", price: 3.5, desc: "Bouteille d'eau minérale 1 Litre", icon: "💧" },
            { id: "bois-6", name: "Eau Gazéifiée 1L", price: 4.0, desc: "Eau gazeuse pétillante fraîche 1 Litre", icon: "✨" },
            { id: "bois-supp", name: "Supplément (Menthe, Grenadine)", price: 1.5, isSupplement: true, desc: "Sirop au choix pour parfumer votre boisson", icon: "➕" }
        ]
    },
    {
        id: "cafes-gourmands",
        title: "Cafés Gourmands",
        icon: "🍨",
        group: "chaud",
        badge: "Signatures Barista",
        items: [
            { id: "cg-1", name: "Cappuccino", price: 7.0, desc: "Espresso serré, lit de lait onctueux et nuage de mousse de lait saupoudrée", icon: "☕" },
            { id: "cg-2", name: "Frappuccino Noisette", price: 7.5, desc: "Café frappé glacé au doux arôme de noisettes torréfiées", icon: "🥤" },
            { id: "cg-3", name: "Frappuccino Vanille", price: 7.5, desc: "Mélange glacé crémeux subtilement parfumé à la vanille bourbon", icon: "🥤" },
            { id: "cg-4", name: "Frappuccino Caramel", price: 7.5, desc: "Frappé gourmand au coulis de caramel fondant", icon: "🥤" },
            { id: "cg-5", name: "Frappuccino Cookies", price: 7.5, desc: "Gourmandise frappée aux éclats croquants de cookies", icon: "🥤" },
            { id: "cg-6", name: "Mocha (chocolat noir/blanc)", price: 7.5, desc: "Espresso, lait soyeux et ganache chocolat au choix", icon: "☕" }
        ]
    },
    {
        id: "jus",
        title: "Jus",
        icon: "🍊",
        group: "frais",
        badge: "100% Fruits Frais",
        items: [
            { id: "jus-1", name: "Jus d'Orange", price: 6.0, desc: "Oranges fraîches pressées à la minute", icon: "🍊" },
            { id: "jus-2", name: "Citronnade", price: 6.0, desc: "Citronnade tunisienne fraîche et acidulée faite maison", icon: "🍋" },
            { id: "jus-3", name: "Citronnade à la Menthe", price: 6.5, desc: "Citronnade maison parfumée à la menthe verte pilée", icon: "🍋" },
            { id: "jus-4", name: "Citronnade aux Amandes", price: 8.5, desc: "Spécialité crémeuse aux amandes douces finement broyées", icon: "🥜" },
            { id: "jus-5", name: "Jus de Fraise", price: 7.0, desc: "Fraises fraîches mixées douces et savoureuses", icon: "🍓" },
            { id: "jus-6", name: "Jus de Kiwi", price: 8.5, desc: "Kiwi frais riche en vitamines et vivifiant", icon: "🥝" },
            { id: "jus-7", name: "Jus de Kiwi Banane", price: 9.5, desc: "Duo onctueux et plein d'énergie", icon: "🥝" },
            { id: "jus-8", name: "Jus de Fraise Banane", price: 9.5, desc: "Grand classique fruité et onctueux", icon: "🍓" },
            { id: "jus-9", name: "Jus d'Orange Banane", price: 9.5, desc: "Douceur de la banane et peps de l'orange", icon: "🍊" },
            { id: "jus-10", name: "Jus Nutella Banane", price: 10.5, desc: "Mix gourmand banane fraîche et pur Nutella", icon: "🍌" },
            { id: "jus-11", name: "Jus de Banane, Dattes, Fruits secs", price: 12.0, isSpecialty: true, desc: "Cocktail énergétique aux dattes et fruits secs nobles", icon: "⭐" }
        ]
    },
    {
        id: "chocolats",
        title: "Chocolats",
        icon: "🍫",
        group: "chaud",
        badge: "Chauds & Glacés",
        items: [
            { id: "choc-1", name: "Chocolat au lait", price: 4.5, desc: "Lait chaud velouté au chocolat fondu doux", icon: "🍫" },
            { id: "choc-2", name: "Chocolat Chaud", price: 7.0, desc: "Recette traditionnelle épaisse, crémeuse et réconfortante", icon: "☕" },
            { id: "choc-3", name: "Chocolat Glacé", price: 7.0, desc: "Chocolat fouetté frappé servi bien frais", icon: "🥤" },
            { id: "choc-supp", name: "Supplément (Arôme, Nestlé, Chantilly)", price: 2.0, isSupplement: true, desc: "Sirop parfumé, lait concentré ou généreuse chantilly", icon: "➕" }
        ]
    },
    {
        id: "smoothies",
        title: "Smoothies",
        icon: "🥑",
        group: "frais",
        badge: "Fraîcheurs Fruitées",
        items: [
            { id: "sm-1", name: "Green Smoothie", price: 12.0, desc: "Mix tonique et détox de fruits verts frais", icon: "🥑" },
            { id: "sm-2", name: "Pina Colada", price: 12.0, desc: "Ananas juteux et crème de coco onctueuse sans alcool", icon: "🥥" },
            { id: "sm-3", name: "Lovers Smoothie", price: 12.0, desc: "Recette douceur aux fruits rouges envoûtants", icon: "🍓" },
            { id: "sm-4", name: "Red Smoothie", price: 12.0, desc: "Explosion fruitée de fraises, framboises et baies fraîches", icon: "🍒" }
        ]
    },
    {
        id: "mocktails",
        title: "Mocktails",
        icon: "🍹",
        group: "frais",
        badge: "Cocktails Sans Alcool",
        items: [
            { id: "mk-1", name: "Virgin", price: 7.0, desc: "Cocktail classique rafraîchissant aux agrumes et menthe", icon: "🍹" },
            { id: "mk-2", name: "Blue Sky", price: 8.5, desc: "Création azurée aux notes exotiques et pétillantes", icon: "🍹" },
            { id: "mk-3", name: "Red Sun", price: 8.5, desc: "Nuances ensoleillées de grenade, fruits rouges et fines bulles", icon: "🍹" },
            { id: "mk-4", name: "Strawberry", price: 8.5, desc: "Coulis de fraises fraîches, jus de citron et bulles vives", icon: "🍓" },
            { id: "mk-5", name: "Fruits de Passion", price: 8.5, desc: "Punch tropical acidulé et arômes intenses de maracuja", icon: "🍹" },
            { id: "mk-6", name: "Pina Colada", price: 10.5, desc: "Version mocktail frappée ananas et lait de coco", icon: "🥥" },
            { id: "mk-7", name: "Full Power", price: 13.0, isSpecialty: true, desc: "Cocktail signature surpuissant riche en saveurs et fraîcheur", icon: "⭐" }
        ]
    },
    {
        id: "milkshakes",
        title: "Milkshakes",
        icon: "🥤",
        group: "frais",
        badge: "Ultra Gourmands",
        items: [
            { id: "ms-1", name: "Nutella", price: 10.5, desc: "Glace vanille crémeuse, lait frais et pur Nutella", icon: "🥤" },
            { id: "ms-2", name: "Spéculoos", price: 11.5, desc: "Saveur biscuitée authentique et crème de spéculoos Lotus", icon: "🥤" },
            { id: "ms-3", name: "Oreo", price: 11.5, desc: "Mixé aux biscuits Oreo craquants et chantilly", icon: "🍪" },
            { id: "ms-4", name: "Kinder Bueno", price: 11.5, desc: "Chocolat et noisettes fondantes du célèbre Kinder Bueno", icon: "🍫" },
            { id: "ms-5", name: "Snickers", price: 11.5, desc: "Chocolat, caramel fondant et touches de cacahuètes grillées", icon: "🥜" },
            { id: "ms-6", name: "Bounty", price: 11.5, desc: "Noix de coco des îles et coulis de chocolat velouté", icon: "🥥" },
            { id: "ms-7", name: "Cookies", price: 11.5, desc: "Morceaux gourmands de cookies aux pépites de chocolat", icon: "🍪" },
            { id: "ms-8", name: "Ferrero", price: 11.5, desc: "Éclats de Ferrero Rocher et ganache noisette raffinée", icon: "🌰" },
            { id: "ms-9", name: "Bosco", price: 16.0, isSpecialty: true, desc: "Milkshake géant signature Boscoffee garni de délices", icon: "⭐" },
            { id: "ms-supp", name: "Supplément (Banane, Fruits secs)", price: 3.0, isSupplement: true, desc: "Banane fraîche ou mélange de fruits secs croquants", icon: "➕" }
        ]
    },
    {
        id: "crepes-sucrees",
        title: "Crêpes Sucrées / Pancake",
        icon: "🥞",
        group: "sucre",
        badge: "Pâte Maison & Toppings",
        items: [
            { id: "cs-1", name: "Nutella", price: 10.5, desc: "Généreusement tartinée au pur Nutella fondant", icon: "🥞" },
            { id: "cs-2", name: "Nutella Banane", price: 13.5, desc: "Rondelles de banane fraîche enveloppées de Nutella chaud", icon: "🍌" },
            { id: "cs-3", name: "Nutella Spéculoos", price: 13.5, desc: "Combinaison irrésistible Nutella et crumble de spéculoos", icon: "🥞" },
            { id: "cs-4", name: "Nutella Kinder Bueno", price: 13.5, desc: "Garnie de barres Kinder Bueno et sauce chocolat", icon: "🍫" },
            { id: "cs-5", name: "Nutella Ferrero", price: 13.5, desc: "Chocolat Nutella et morceaux de Ferrero Rocher", icon: "🌰" },
            { id: "cs-6", name: "Farcie Bosco", price: 16.5, isSpecialty: true, desc: "Recette exclusive maison farcie de pépites et fruits", icon: "⭐" },
            { id: "cs-supp", name: "Supplément (Boule de Glace, Fruits secs, Topping)", price: 3.5, isSupplement: true, desc: "Boule de glace artisanale, fruits secs ou topping au choix", icon: "➕" }
        ]
    },
    {
        id: "crepes-salees",
        title: "Crêpes Salées",
        icon: "🧀",
        group: "sale",
        badge: "Salé Chaud & Croustillant",
        items: [
            { id: "csl-1", name: "Fromage", price: 8.5, desc: "Mélange fondant de fromages savoureux", icon: "🧀" },
            { id: "csl-2", name: "Thon Fromage", price: 11.5, desc: "Thon de premier choix et fromage râpé fondant", icon: "🐟" },
            { id: "csl-3", name: "Jambon Fumé Fromage", price: 10.5, desc: "Fines tranches de jambon fumé et fromage coulant", icon: "🥓" },
            { id: "csl-4", name: "Bosco", price: 16.0, isSpecialty: true, desc: "Thon, Fromage, Jambon, Oeuf - La crêpe complète signature", icon: "⭐" },
            { id: "csl-5", name: "Farcie Bosco", price: 16.5, isSpecialty: true, desc: "Crêpe salée géante farcie façon Bosco richement garnie", icon: "⭐" },
            { id: "csl-supp", name: "Supplément", price: 5.0, isSupplement: true, desc: "Garniture salée supplémentaire au choix", icon: "➕" }
        ]
    },
    {
        id: "omelettes",
        title: "Omelettes",
        icon: "🍳",
        group: "sale",
        badge: "Cuisinées Minute",
        items: [
            { id: "om-1", name: "Nature", price: 6.5, desc: "Omelette baveuse aux œufs frais dorée au beurre fin", icon: "🍳" },
            { id: "om-2", name: "Fromage", price: 8.5, desc: "Cœur coulant au fromage fondant", icon: "🧀" },
            { id: "om-3", name: "Thon Fromage", price: 10.5, desc: "Garnie de thon émietté et fromage râpé", icon: "🐟" },
            { id: "om-4", name: "Jambon Fumé Fromage", price: 10.5, desc: "Jambon fumé sélectionné et fromage savoureux", icon: "🥓" },
            { id: "om-5", name: "Bosco", price: 16.5, isSpecialty: true, desc: "Thon, Fromage, Jambon Fumé, Salade fraîche d'accompagnement", icon: "⭐" },
            { id: "om-supp", name: "Supplément (Champignons, Jambon)", price: 3.0, isSupplement: true, desc: "Champignons poêlés ou jambon fumé supplémentaire", icon: "➕" }
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
                desc: "Viennoiserie, café, jus, eau. La formule matinale essentielle pour démarrer la journée du bon pied.",
                icon: "☀️"
            },
            {
                id: "form-2",
                name: "Continental",
                price: 15.0,
                desc: "Viennoiserie, café, jus, chocolat, confiture, beurre, ricotta, pain de mie, crêpe. Le réveil gourmand par excellence.",
                icon: "🥞"
            },
            {
                id: "form-3",
                name: "Bosco (2 personnes)",
                price: 25.0,
                isSpecialty: true,
                desc: "Viennoiserie, café, jus, eau, omelette, crêpe, ojja, charcuterie, fromage. Le festin royal complet pour deux personnes !",
                icon: "👑"
            }
        ]
    }
];

// État de navigation
let activeCategoryId = "all";
let activeGroup = "all";
let searchQuery = "";

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    renderCategoriesBar();
    renderMenu();
    setupEventListeners();
});

// Rendu des boutons de catégories (Barre défilante horizontale)
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

    // Événements de clic sur les pastilles
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

    // Mise à jour visuelle des boutons
    document.querySelectorAll(".cat-pill").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.catId === catId);
    });

    // Centrer le bouton sélectionné dans la barre de défilement
    const activeBtn = document.querySelector(`.cat-pill[data-cat-id="${catId}"]`);
    if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    renderMenu();

    // Défilement automatique vers la section choisie
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

    activeCategoryId = "all";
    document.querySelectorAll(".cat-pill").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.catId === "all");
    });

    renderMenu();
}

// Rendu principal des rubriques et produits
function renderMenu() {
    const container = document.getElementById("menu-container");
    if (!container) return;

    let filteredCategories = MENU_DATA;

    if (activeGroup !== "all") {
        filteredCategories = filteredCategories.filter(cat => cat.group === activeGroup);
    }

    if (activeCategoryId !== "all") {
        filteredCategories = filteredCategories.filter(cat => cat.id === activeCategoryId);
    }

    const query = searchQuery.trim().toLowerCase();
    let sectionsHtml = "";

    filteredCategories.forEach(cat => {
        const matchingItems = cat.items.filter(item => {
            if (!query) return true;
            return (
                item.name.toLowerCase().includes(query) ||
                (item.desc && item.desc.toLowerCase().includes(query)) ||
                cat.title.toLowerCase().includes(query)
            );
        });

        if (matchingItems.length > 0) {
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
    }
}

// Rendu d'une section de catégorie
function renderCategorySection(cat, items) {
    let itemsHtml = items.map(item => renderStarbucksStyleRow(item)).join("");

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

            <div class="sb-products-list">
                ${itemsHtml}
            </div>
        </section>
    `;
}

// Rendu d'un produit : Style d'affichage Starbucks (Pastille ronde + Nom & Description + Prix aligné)
// Habillé aux couleurs et à l'élégance du menu papier Boscoffee
function renderStarbucksStyleRow(item) {
    const formattedPrice = formatPrice(item.price);
    const isSpecialty = item.isSpecialty;
    const isSupplement = item.isSupplement;

    return `
        <div class="sb-item-row ${isSpecialty ? 'is-specialty' : ''}" id="product-${item.id}">
            <!-- Pastille Circulaire Iconique style Starbucks -->
            <div class="sb-item-avatar" aria-hidden="true">
                <span class="sb-avatar-icon">${item.icon || '☕'}</span>
            </div>

            <!-- Informations Produit : Nom et Description -->
            <div class="sb-item-details">
                <div class="sb-item-name-wrap">
                    <span class="sb-item-name">${escapeHtml(item.name)}</span>
                    ${isSpecialty ? '<span class="sb-badge-specialty">Bosco</span>' : ''}
                    ${isSupplement ? '<span class="sb-badge-option">Option</span>' : ''}
                </div>
                ${item.desc ? `<p class="sb-item-desc">${escapeHtml(item.desc)}</p>` : ''}
            </div>

            <!-- Prix en Dinars Tunisiens (DT) aligné à droite -->
            <div class="sb-item-price-wrap">
                <span class="sb-item-price">${formattedPrice}</span>
                <span class="sb-item-currency">DT</span>
            </div>
        </div>
    `;
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

    // Bouton de recherche au header
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
}

function clearSearch() {
    searchQuery = "";
    const searchInput = document.getElementById("search-input");
    const clearBtn = document.getElementById("clear-search-btn");
    if (searchInput) searchInput.value = "";
    if (clearBtn) clearBtn.style.display = "none";
    renderMenu();
}

// Utilitaires de formatage
function formatPrice(num) {
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