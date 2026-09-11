/**
 * Boscoffee - Menu Digital Officiel
 * Style d'affichage inspiré de Starbucks avec la charte graphique exacte du menu papier Boscoffee
 */

const MENU_DATA = [
    {
        id: "matin",
        title: "Nos Plaisirs du Matin",
        icon: "🥐",
        group: "sucre",
        badge: "Pâtisseries & Délices",
        items: [
            { id: "matin-1", name: "Viennoiserie", price: 3.0, desc: "Croissant, pain au chocolat ou brioche dorée au beurre", icon: "🥐", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80" },
            { id: "matin-2", name: "Cake", price: 4.0, desc: "Tranche moelleuse aux saveurs du jour", icon: "🍰", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80" },
            { id: "matin-3", name: "Brownies", price: 4.0, desc: "Chocolat fondant intense et éclats de noix", icon: "🍫", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=300&q=80" },
            { id: "matin-4", name: "Gâteaux", price: 12.0, desc: "Pâtisserie fine du chef selon arrivage", icon: "🎂", img: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=300&q=80" },
            { id: "matin-5", name: "Fondant chocolat", price: 12.0, desc: "Cœur coulant au chocolat noir servi tiède", icon: "🍮", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=300&q=80" },
            { id: "matin-6", name: "Cheesecake", price: 14.0, desc: "Recette onctueuse avec coulis gourmand au choix", icon: "🍰", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "thes",
        title: "Nos Thés & Infusions",
        icon: "🫖",
        group: "chaud",
        badge: "Tradition & Infusion",
        items: [
            { id: "the-1", name: "Thé à la menthe", price: 3.0, desc: "Thé vert traditionnel infusé aux feuilles de menthe fraîche", icon: "🌱", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=300&q=80" },
            { id: "the-2", name: "Thé aux amandes", price: 7.0, desc: "Thé tunisien parfumé servi avec amandes grillées croquantes", icon: "🫖", img: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=300&q=80" },
            { id: "the-3", name: "Thé aux pignons", price: 9.0, desc: "Prestige et tradition tunisienne aux pignons dorés", icon: "🫖", img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=300&q=80" },
            { id: "the-4", name: "Thé infusion", price: 5.0, desc: "Sélection d'infusions bien-être et verveine", icon: "🌿", img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=300&q=80" },
            { id: "the-5", name: "Thé Glacé Aromatisé", price: 6.0, desc: "Thé glacé rafraîchissant fait maison aux agrumes", icon: "🧊", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "cafes",
        title: "Nos Cafés",
        icon: "☕",
        group: "chaud",
        badge: "Grains Sélectionnés",
        items: [
            { id: "cafe-1", name: "Express", price: 3.5, desc: "Espresso serré riche en crema veloutée", icon: "☕", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80" },
            { id: "cafe-2", name: "Américain", price: 4.0, desc: "Espresso allongé à l'eau pure, doux et équilibré", icon: "☕", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80" },
            { id: "cafe-3", name: "Capucin", price: 4.0, desc: "Espresso surmonté d'une larme délicate de lait chaud", icon: "☕", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=300&q=80" },
            { id: "cafe-4", name: "Café Crème", price: 4.5, desc: "Espresso riche et généreux lait chaud mousseux", icon: "☕", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=300&q=80" },
            { id: "cafe-5", name: "Nescafé au lait", price: 5.0, desc: "Café soluble velouté au bon lait chaud", icon: "☕", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=300&q=80" },
            { id: "cafe-6", name: "Café Turc", price: 6.0, desc: "Café de tradition préparé au cezve aux arômes intenses", icon: "☕", img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "boissons",
        title: "Nos Boissons",
        icon: "🥤",
        group: "frais",
        badge: "Fraîcheurs & Sodas",
        items: [
            { id: "bois-1", name: "Boisson Gazeuse", price: 4.5, desc: "Canette fraîche au choix (Coca-Cola, Fanta, Sprite...)", icon: "🥤", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80" },
            { id: "bois-2", name: "Schweppes", price: 5.0, desc: "Tonic, Lemon ou Agrumes très frais", icon: "🥤", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80" },
            { id: "bois-3", name: "Power Drink", price: 10.0, desc: "Boisson énergisante glacée", icon: "⚡", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80" },
            { id: "bois-4", name: "Eau Minérale 0.5L", price: 2.0, desc: "Bouteille d'eau minérale 50cl", icon: "💧", img: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=300&q=80" },
            { id: "bois-5", name: "Eau Minérale 1L", price: 3.5, desc: "Bouteille d'eau minérale 1 Litre", icon: "💧", img: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=300&q=80" },
            { id: "bois-6", name: "Eau Gazéifiée 1L", price: 4.0, desc: "Eau gazeuse pétillante fraîche 1 Litre", icon: "✨", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80" },
            { id: "bois-supp", name: "Supplément (Menthe, Grenadine)", price: 1.5, isSupplement: true, desc: "Sirop au choix pour parfumer votre boisson", icon: "➕", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "cafes-gourmands",
        title: "Nos Cafés Gourmands",
        icon: "🍨",
        group: "chaud",
        badge: "Signatures Barista",
        items: [
            { id: "cg-1", name: "Cappuccino", price: 7.0, desc: "Espresso serré, lit de lait onctueux et nuage de mousse saupoudrée", icon: "☕", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=300&q=80" },
            { id: "cg-2", name: "Frappuccino Noisette", price: 7.5, desc: "Café frappé glacé au doux arôme de noisettes torréfiées", icon: "🥤", img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=300&q=80" },
            { id: "cg-3", name: "Frappuccino Vanille", price: 7.5, desc: "Mélange glacé crémeux subtilement parfumé à la vanille", icon: "🥤", img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=300&q=80" },
            { id: "cg-4", name: "Frappuccino Caramel", price: 7.5, desc: "Frappé gourmand au coulis de caramel fondant", icon: "🥤", img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=300&q=80" },
            { id: "cg-5", name: "Frappuccino Cookies", price: 7.5, desc: "Gourmandise frappée aux éclats croquants de cookies", icon: "🥤", img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=300&q=80" },
            { id: "cg-6", name: "Mocha (chocolat noir/blanc)", price: 7.5, desc: "Espresso, lait soyeux et ganache chocolat au choix", icon: "☕", img: "https://images.unsplash.com/photo-1568651318493-a442e97992a7?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "jus",
        title: "Nos Jus Frais",
        icon: "🍊",
        group: "frais",
        badge: "100% Fruits Frais",
        items: [
            { id: "jus-1", name: "Jus d'Orange", price: 6.0, desc: "Oranges fraîches pressées à la minute", icon: "🍊", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80" },
            { id: "jus-2", name: "Citronnade", price: 6.0, desc: "Citronnade tunisienne fraîche et acidulée faite maison", icon: "🍋", img: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=300&q=80" },
            { id: "jus-3", name: "Citronnade à la Menthe", price: 6.5, desc: "Citronnade maison parfumée à la menthe verte pilée", icon: "🍋", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80" },
            { id: "jus-4", name: "Citronnade aux Amandes", price: 8.5, desc: "Spécialité crémeuse aux amandes douces finement broyées", icon: "🥜", img: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=300&q=80" },
            { id: "jus-5", name: "Jus de Fraise", price: 7.0, desc: "Fraises fraîches mixées douces et savoureuses", icon: "🍓", img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=300&q=80" },
            { id: "jus-6", name: "Jus de Kiwi", price: 8.5, desc: "Kiwi frais riche en vitamines et vivifiant", icon: "🥝", img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=300&q=80" },
            { id: "jus-7", name: "Jus de Kiwi Banane", price: 9.5, desc: "Duo onctueux et plein d'énergie", icon: "🥝", img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=300&q=80" },
            { id: "jus-8", name: "Jus de Fraise Banane", price: 9.5, desc: "Grand classique fruité et onctueux", icon: "🍓", img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=300&q=80" },
            { id: "jus-9", name: "Jus d'Orange Banane", price: 9.5, desc: "Douceur de la banane et peps de l'orange", icon: "🍊", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80" },
            { id: "jus-10", name: "Jus Nutella Banane", price: 10.5, desc: "Mix gourmand banane fraîche et pur Nutella", icon: "🍌", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" },
            { id: "jus-11", name: "Jus de Banane, Dattes, Fruits secs", price: 12.0, isSpecialty: true, desc: "Cocktail énergétique aux dattes et fruits secs nobles", icon: "⭐", img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "chocolats",
        title: "Nos Chocolats",
        icon: "🍫",
        group: "chaud",
        badge: "Chauds & Glacés",
        items: [
            { id: "choc-1", name: "Chocolat au lait", price: 4.5, desc: "Lait chaud velouté au chocolat fondu doux", icon: "🍫", img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=300&q=80" },
            { id: "choc-2", name: "Chocolat Chaud", price: 7.0, desc: "Recette traditionnelle épaisse, crémeuse et réconfortante", icon: "☕", img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=300&q=80" },
            { id: "choc-3", name: "Chocolat Glacé", price: 7.0, desc: "Chocolat fouetté frappé servi bien frais", icon: "🥤", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" },
            { id: "choc-supp", name: "Supplément (Arôme, Nestlé, Chantilly)", price: 2.0, isSupplement: true, desc: "Sirop parfumé, lait concentré ou chantilly", icon: "➕", img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "smoothies",
        title: "Nos Smoothies",
        icon: "🥑",
        group: "frais",
        badge: "Fraîcheurs Fruitées",
        items: [
            { id: "sm-1", name: "Green Smoothie", price: 12.0, desc: "Mix tonique et détox de fruits verts frais", icon: "🥑", img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=300&q=80" },
            { id: "sm-2", name: "Pina Colada", price: 12.0, desc: "Ananas juteux et crème de coco onctueuse sans alcool", icon: "🥥", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80" },
            { id: "sm-3", name: "Lovers Smoothie", price: 12.0, desc: "Recette douceur aux fruits rouges envoûtants", icon: "🍓", img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=300&q=80" },
            { id: "sm-4", name: "Red Smoothie", price: 12.0, desc: "Explosion fruitée de fraises, framboises et baies", icon: "🍒", img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "mocktails",
        title: "Nos Mocktails",
        icon: "🍹",
        group: "frais",
        badge: "Cocktails Sans Alcool",
        items: [
            { id: "mk-1", name: "Virgin", price: 7.0, desc: "Cocktail classique rafraîchissant aux agrumes et menthe", icon: "🍹", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80" },
            { id: "mk-2", name: "Blue Sky", price: 8.5, desc: "Création azurée aux notes exotiques et pétillantes", icon: "🍹", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80" },
            { id: "mk-3", name: "Red Sun", price: 8.5, desc: "Nuances ensoleillées de grenade et fines bulles", icon: "🍹", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80" },
            { id: "mk-4", name: "Strawberry", price: 8.5, desc: "Coulis de fraises fraîches, citron et bulles vives", icon: "🍓", img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=300&q=80" },
            { id: "mk-5", name: "Fruits de Passion", price: 8.5, desc: "Punch tropical acidulé aux arômes intenses", icon: "🍹", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80" },
            { id: "mk-6", name: "Pina Colada", price: 10.5, desc: "Version mocktail frappée ananas et crème de coco", icon: "🥥", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80" },
            { id: "mk-7", name: "Full Power", price: 13.0, isSpecialty: true, desc: "Cocktail signature surpuissant riche en fraîcheur", icon: "⭐", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "milkshakes",
        title: "Nos Milkshakes",
        icon: "🥤",
        group: "frais",
        badge: "Ultra Gourmands",
        items: [
            { id: "ms-1", name: "Nutella", price: 10.5, desc: "Glace vanille crémeuse, lait frais et pur Nutella", icon: "🥤", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" },
            { id: "ms-2", name: "Spéculoos", price: 11.5, desc: "Saveur biscuitée et crème de spéculoos Lotus", icon: "🥤", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" },
            { id: "ms-3", name: "Oreo", price: 11.5, desc: "Mixé aux biscuits Oreo craquants et chantilly", icon: "🍪", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" },
            { id: "ms-4", name: "Kinder Bueno", price: 11.5, desc: "Chocolat et noisettes du célèbre Kinder Bueno", icon: "🍫", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" },
            { id: "ms-5", name: "Snickers", price: 11.5, desc: "Chocolat, caramel fondant et touches de cacahuètes", icon: "🥜", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" },
            { id: "ms-6", name: "Bounty", price: 11.5, desc: "Noix de coco des îles et coulis de chocolat", icon: "🥥", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" },
            { id: "ms-7", name: "Cookies", price: 11.5, desc: "Morceaux gourmands de cookies aux pépites", icon: "🍪", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" },
            { id: "ms-8", name: "Ferrero", price: 11.5, desc: "Éclats de Ferrero Rocher et ganache noisette", icon: "🌰", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" },
            { id: "ms-9", name: "Bosco", price: 16.0, isSpecialty: true, desc: "Milkshake géant signature Boscoffee garni de délices", icon: "⭐", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" },
            { id: "ms-supp", name: "Supplément (Banane, Fruits secs)", price: 3.0, isSupplement: true, desc: "Banane fraîche ou mélange de fruits secs", icon: "➕", img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "crepes-sucrees",
        title: "Nos Crêpes Sucrées & Pancakes",
        icon: "🥞",
        group: "sucre",
        badge: "Pâte Maison & Toppings",
        items: [
            { id: "cs-1", name: "Nutella", price: 10.5, desc: "Généreusement tartinée au pur Nutella fondant", icon: "🥞", img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=300&q=80" },
            { id: "cs-2", name: "Nutella Banane", price: 13.5, desc: "Rondelles de banane fraîche enveloppées de Nutella chaud", icon: "🍌", img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=300&q=80" },
            { id: "cs-3", name: "Nutella Spéculoos", price: 13.5, desc: "Combinaison irrésistible Nutella et crumble de spéculoos", icon: "🥞", img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=300&q=80" },
            { id: "cs-4", name: "Nutella Kinder Bueno", price: 13.5, desc: "Garnie de barres Kinder Bueno et sauce chocolat", icon: "🍫", img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=300&q=80" },
            { id: "cs-5", name: "Nutella Ferrero", price: 13.5, desc: "Chocolat Nutella et morceaux de Ferrero Rocher", icon: "🌰", img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=300&q=80" },
            { id: "cs-6", name: "Farcie Bosco", price: 16.5, isSpecialty: true, desc: "Recette exclusive maison farcie de pépites et fruits", icon: "⭐", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=300&q=80" },
            { id: "cs-supp", name: "Supplément (Boule de Glace, Fruits secs, Topping)", price: 3.5, isSupplement: true, desc: "Boule de glace artisanale, fruits secs ou topping", icon: "➕", img: "https://images.unsplash.com/photo-1568651318493-a442e97992a7?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "crepes-salees",
        title: "Nos Crêpes Salées",
        icon: "🧀",
        group: "sale",
        badge: "Salé Chaud & Croustillant",
        items: [
            { id: "csl-1", name: "Fromage", price: 8.5, desc: "Mélange fondant de fromages savoureux", icon: "🧀", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=300&q=80" },
            { id: "csl-2", name: "Thon Fromage", price: 11.5, desc: "Thon de premier choix et fromage râpé fondant", icon: "🐟", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=300&q=80" },
            { id: "csl-3", name: "Jambon Fumé Fromage", price: 10.5, desc: "Fines tranches de jambon fumé et fromage coulant", icon: "🥓", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=300&q=80" },
            { id: "csl-4", name: "Bosco", price: 16.0, isSpecialty: true, desc: "Thon, Fromage, Jambon, Oeuf - La crêpe complète signature", icon: "⭐", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=300&q=80" },
            { id: "csl-5", name: "Farcie Bosco", price: 16.5, isSpecialty: true, desc: "Crêpe salée géante farcie façon Bosco richement garnie", icon: "⭐", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=300&q=80" },
            { id: "csl-supp", name: "Supplément", price: 5.0, isSupplement: true, desc: "Garniture salée supplémentaire au choix", icon: "➕", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "omelettes",
        title: "Nos Omelettes",
        icon: "🍳",
        group: "sale",
        badge: "Cuisinées Minute",
        items: [
            { id: "om-1", name: "Nature", price: 6.5, desc: "Omelette baveuse aux œufs frais dorée au beurre fin", icon: "🍳", img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=300&q=80" },
            { id: "om-2", name: "Fromage", price: 8.5, desc: "Cœur coulant au fromage fondant", icon: "🧀", img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=300&q=80" },
            { id: "om-3", name: "Thon Fromage", price: 10.5, desc: "Garnie de thon émietté et fromage râpé", icon: "🐟", img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=300&q=80" },
            { id: "om-4", name: "Jambon Fumé Fromage", price: 10.5, desc: "Jambon fumé sélectionné et fromage savoureux", icon: "🥓", img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=300&q=80" },
            { id: "om-5", name: "Bosco", price: 16.5, isSpecialty: true, desc: "Thon, Fromage, Jambon Fumé, Salade fraîche", icon: "⭐", img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=300&q=80" },
            { id: "om-supp", name: "Supplément (Champignons, Jambon)", price: 3.0, isSupplement: true, desc: "Champignons poêlés ou jambon supplémentaire", icon: "➕", img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "formules",
        title: "Nos Formules Petit-Déjeuner",
        icon: "☀️",
        group: "sale",
        badge: "Complets & Équilibrés",
        items: [
            {
                id: "form-1",
                name: "Rapido",
                price: 10.0,
                desc: "Viennoiserie, café, jus, eau. La formule matinale essentielle pour démarrer la journée.",
                icon: "☀️",
                img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=300&q=80"
            },
            {
                id: "form-2",
                name: "Continental",
                price: 15.0,
                desc: "Viennoiserie, café, jus, chocolat, confiture, beurre, ricotta, pain de mie, crêpe.",
                icon: "🥞",
                img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=300&q=80"
            },
            {
                id: "form-3",
                name: "Bosco (2 personnes)",
                price: 25.0,
                isSpecialty: true,
                desc: "Viennoiserie, café, jus, eau, omelette, crêpe, ojja, charcuterie, fromage. Le festin royal !",
                icon: "👑",
                img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=300&q=80"
            }
        ]
    }
];

// État de navigation, Thème & Vue
let activeCategoryId = "all";
let activeGroup = "all";
let searchQuery = "";
let isTerrasseMode = localStorage.getItem("boscoffee_terrasse_mode") === "true";
let currentViewMode = localStorage.getItem("boscoffee_view_mode") || "list";

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initViewMode();
    renderCategoriesBar();
    renderMenu();
    setupEventListeners();
    setupModalEventListeners();
    setupLightboxListeners();
    setupCartEventListeners();
    loadSelection();
});

// Gestion du Mode d'Affichage (Liste Starbucks vs Grille Gourmande)
function initViewMode() {
    setViewMode(currentViewMode, false);
}

function setViewMode(mode, save = true) {
    currentViewMode = mode;
    if (save) {
        localStorage.setItem("boscoffee_view_mode", mode);
    }

    const menuContainer = document.getElementById("menu-container");
    if (menuContainer) {
        menuContainer.classList.toggle("view-grid", mode === "grid");
        menuContainer.classList.toggle("view-list", mode === "list");
    }

    const listBtn = document.getElementById("view-list-btn");
    const gridBtn = document.getElementById("view-grid-btn");
    if (listBtn) listBtn.classList.toggle("active", mode === "list");
    if (gridBtn) gridBtn.classList.toggle("active", mode === "grid");
}

// Gestion du Thème Terrasse / Plein Soleil vs Lounge Sombre
function initTheme() {
    applyTheme(isTerrasseMode);
}

function toggleTheme() {
    isTerrasseMode = !isTerrasseMode;
    localStorage.setItem("boscoffee_terrasse_mode", isTerrasseMode);
    applyTheme(isTerrasseMode);
}

function applyTheme(isTerrasse) {
    const btn = document.getElementById("theme-toggle-btn");
    const icon = btn ? btn.querySelector(".theme-icon") : null;
    const badge = btn ? btn.querySelector(".theme-label-badge") : null;

    if (isTerrasse) {
        document.body.classList.add("terrasse-mode");
        if (icon) icon.textContent = "🌙";
        if (badge) badge.textContent = "Lounge";
        if (btn) {
            btn.setAttribute("title", "Passer en Mode Lounge (Sombre)");
            btn.setAttribute("aria-label", "Basculer en Mode Lounge (Sombre)");
        }
    } else {
        document.body.classList.remove("terrasse-mode");
        if (icon) icon.textContent = "☀️";
        if (badge) badge.textContent = "Terrasse";
        if (btn) {
            btn.setAttribute("title", "Passer en Mode Terrasse (Plein Soleil)");
            btn.setAttribute("aria-label", "Basculer en Mode Terrasse (Plein Soleil)");
        }
    }
}

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
    let totalMatched = 0;

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
            totalMatched += matchingItems.length;
            sectionsHtml += renderCategorySection(cat, matchingItems);
        }
    });

    // Mettre à jour le compteur dynamique de la barre d'outils
    const countEl = document.getElementById("toolbar-count-text");
    if (countEl) {
        if (query) {
            countEl.textContent = `${totalMatched} résultat${totalMatched > 1 ? 's' : ''} trouvé${totalMatched > 1 ? 's' : ''}`;
        } else if (activeCategoryId !== "all") {
            const currentCat = MENU_DATA.find(c => c.id === activeCategoryId);
            countEl.textContent = `${totalMatched} choix dans ${currentCat ? currentCat.title : ''}`;
        } else if (activeGroup !== "all") {
            countEl.textContent = `${totalMatched} choix sélectionnés`;
        } else {
            countEl.textContent = `${totalMatched} délices au menu`;
        }
    }

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
        // Mode Victor Hugo : afficher la grille des catégories si 'Tout le Menu' est sélectionné et sans recherche
        let overviewHtml = "";
        if (activeCategoryId === "all" && activeGroup === "all" && !query) {
            overviewHtml = renderCategoryGridOverview();
        }
        container.innerHTML = overviewHtml + sectionsHtml;
    }
}

// Rendu de la grille des aperçus de catégories (Inspiré par Café Victor Hugo / digitalmenu.tn)
function renderCategoryGridOverview() {
    let cardsHtml = MENU_DATA.map(cat => {
        const sampleItem = cat.items.find(i => i.img) || cat.items[0];
        const imgUrl = sampleItem ? sampleItem.img : "";
        return `
            <div class="cat-overview-card" onclick="selectCategory('${cat.id}')" role="button" tabindex="0" aria-label="Voir la catégorie ${escapeHtml(cat.title)}">
                <div class="cat-overview-img-wrapper">
                    ${imgUrl ? `<img class="cat-overview-img" src="${imgUrl}" alt="${escapeHtml(cat.title)}" loading="lazy">` : `<span class="cat-overview-emoji">${cat.icon}</span>`}
                    <span class="cat-overview-count">${cat.items.length} choix</span>
                </div>
                <div class="cat-overview-body">
                    <span class="cat-overview-icon">${cat.icon}</span>
                    <span class="cat-overview-title">${escapeHtml(cat.title)}</span>
                </div>
            </div>
        `;
    }).join("");

    return `
        <div class="categories-overview-block">
            <div class="overview-section-header">
                <div class="overview-title-wrap">
                    <span class="overview-sparkle">✨</span>
                    <h3 class="overview-main-title">Aperçu du Menu par Catégories</h3>
                </div>
                <p class="overview-subtitle">Toucher une catégorie pour y accéder rapidement</p>
            </div>
            <div class="categories-overview-grid">
                ${cardsHtml}
            </div>
        </div>
    `;
}

// Rendu d'une section de catégorie
function renderCategorySection(cat, items) {
    let itemsHtml = items.map(item => renderStarbucksStyleRow(item)).join("");

    return `
        <section class="category-section" id="section-${cat.id}" data-category="${cat.id}">
            <div class="category-header">
                <div class="category-title-box">
                    <div class="category-title-row">
                        <span class="cat-icon-lg" aria-hidden="true">${cat.icon}</span>
                        <h2 class="category-main-title">${escapeHtml(cat.title)}</h2>
                    </div>
                    <div class="category-desc-line">
                        ${cat.badge ? `<span class="category-badge-inline">${escapeHtml(cat.badge)}</span> • ` : ''}
                        <span class="category-items-count">${items.length} choix disponible${items.length > 1 ? 's' : ''}</span>
                    </div>
                </div>
                <div class="category-badge-pill">${items.length} choix</div>
            </div>

            <div class="sb-products-list">
                ${itemsHtml}
            </div>
        </section>
    `;
}

// Rendu d'un produit : Option 2 - Photos agrandies dans la liste (Style Starbucks Gourmet)
// Habillé aux couleurs et à l'élégance du menu papier Boscoffee
function renderStarbucksStyleRow(item) {
    const formattedPrice = formatPrice(item.price);
    const isSpecialty = item.isSpecialty;
    const isSupplement = item.isSupplement;
    const itemImg = item.img || "";

    return `
        <div class="sb-item-row ${isSpecialty ? 'is-specialty' : ''}" id="product-${item.id}" data-item-id="${item.id}" role="button" tabindex="0" aria-label="Voir la fiche de ${escapeHtml(item.name)}, ${formattedPrice} DT">
            <!-- Photo Agrandie Généreuse (75px-80px) -->
            <div class="sb-item-avatar ${!itemImg ? 'is-fallback' : ''}" aria-hidden="true">
                ${itemImg ? `
                    <img class="sb-avatar-img" 
                         src="${itemImg}" 
                         alt="${escapeHtml(item.name)}" 
                         loading="lazy"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <span class="sb-avatar-fallback" style="display: none;">${item.icon || '☕'}</span>
                ` : `
                    <span class="sb-avatar-icon">${item.icon || '☕'}</span>
                `}
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

            <!-- Actions Produit : Prix + Bouton Ajout Rapide (+) -->
            <div class="sb-item-actions">
                <div class="sb-item-price-wrap">
                    <span class="sb-item-price">${formattedPrice}</span>
                    <span class="sb-item-currency">DT</span>
                </div>
                <button class="sb-item-quick-add-btn" data-add-id="${item.id}" aria-label="Ajouter ${escapeHtml(item.name)} à ma note" title="Ajouter à ma note">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
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

    // Bouton de bascule de thème (Mode Terrasse / Lounge)
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            toggleTheme();
        });
    }

    // Boutons de bascule de vue (Grille / Liste)
    const listBtn = document.getElementById("view-list-btn");
    const gridBtn = document.getElementById("view-grid-btn");

    if (listBtn) {
        listBtn.addEventListener("click", () => {
            setViewMode("list");
        });
    }

    if (gridBtn) {
        gridBtn.addEventListener("click", () => {
            setViewMode("grid");
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

    // Bouton Retour en haut (Scroll to top - Inspiré Victor Hugo)
    const scrollTopBtn = document.getElementById("scroll-top-btn");
    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollTopBtn.removeAttribute("hidden");
                scrollTopBtn.classList.add("visible");
            } else {
                scrollTopBtn.setAttribute("hidden", "");
                scrollTopBtn.classList.remove("visible");
            }
        });

        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Bouton Copier le mot de passe WiFi
    const wifiBtn = document.getElementById("wifi-copy-btn");
    if (wifiBtn) {
        wifiBtn.addEventListener("click", () => {
            const codeEl = document.getElementById("wifi-code");
            const badgeEl = document.getElementById("wifi-badge");
            const codeText = codeEl ? codeEl.textContent : "Boscoffee2026";

            navigator.clipboard.writeText(codeText).then(() => {
                showWifiFeedback(wifiBtn, badgeEl);
            }).catch(() => {
                // Fallback pour anciens navigateurs / HTTPS restreint
                const tempInput = document.createElement("input");
                tempInput.value = codeText;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);
                showWifiFeedback(wifiBtn, badgeEl);
            });
        });
    }
}

function showWifiFeedback(wifiBtn, badgeEl) {
    if (wifiBtn) wifiBtn.classList.add("copied");
    if (badgeEl) badgeEl.textContent = "✓ Copié !";
    setTimeout(() => {
        if (wifiBtn) wifiBtn.classList.remove("copied");
        if (badgeEl) badgeEl.textContent = "Copier";
    }, 2200);
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

// ==========================================================================
// MODAL FICHE PRODUIT — Zoom & Détails Interactifs
// ==========================================================================

// Dictionnaire plat de tous les produits pour lookup rapide
const ALL_ITEMS_MAP = {};
MENU_DATA.forEach(cat => {
    cat.items.forEach(item => {
        ALL_ITEMS_MAP[item.id] = { ...item, _catTitle: cat.title, _catIcon: cat.icon, _catBadge: cat.badge };
    });
});

let modalOpenItemId = null;

function openProductModal(itemId) {
    const item = ALL_ITEMS_MAP[itemId];
    if (!item) return;

    modalOpenItemId = itemId;

    const overlay = document.getElementById("product-modal-overlay");
    const modalImg = document.getElementById("modal-img");
    const modalImgFallback = document.getElementById("modal-img-fallback");
    const modalImgIcon = document.getElementById("modal-img-icon");
    const modalImgBadges = document.getElementById("modal-img-badges");
    const modalName = document.getElementById("modal-product-name");
    const modalPrice = document.getElementById("modal-price");
    const modalDesc = document.getElementById("modal-product-desc");
    const modalMeta = document.getElementById("modal-meta");
    const modalAddBtn = document.getElementById("modal-add-btn");
    const modalAddLabel = document.getElementById("modal-add-label");

    if (!overlay) return;

    // Remplir le contenu
    if (modalName) modalName.textContent = item.name;
    if (modalPrice) modalPrice.textContent = formatPrice(item.price);
    if (modalDesc) modalDesc.textContent = item.desc || "";

    // Image
    if (item.img && modalImg) {
        modalImg.src = item.img.replace("w=300", "w=700");
        modalImg.alt = item.name;
        modalImg.style.display = "block";
        modalImg.onerror = () => {
            modalImg.style.display = "none";
            if (modalImgFallback) { modalImgFallback.removeAttribute("hidden"); }
            if (modalImgIcon) modalImgIcon.textContent = item.icon || "☕";
        };
        if (modalImgFallback) modalImgFallback.setAttribute("hidden", "");
    } else {
        if (modalImg) modalImg.style.display = "none";
        if (modalImgFallback) { modalImgFallback.removeAttribute("hidden"); }
        if (modalImgIcon) modalImgIcon.textContent = item.icon || "☕";
    }

    // Badges sur la photo
    if (modalImgBadges) {
        let badgesHtml = "";
        if (item.isSpecialty) badgesHtml += `<span class="modal-badge modal-badge-specialty">⭐ Signature Bosco</span>`;
        if (item.isSupplement) badgesHtml += `<span class="modal-badge modal-badge-option">➕ Option</span>`;
        modalImgBadges.innerHTML = badgesHtml;
    }

    // Meta tags (catégorie, badge)
    if (modalMeta) {
        let metaHtml = `<span class="modal-meta-tag tag-category">${item._catIcon} ${item._catTitle}</span>`;
        if (item._catBadge) metaHtml += `<span class="modal-meta-tag tag-gold">✨ ${item._catBadge}</span>`;
        if (item.price <= 7) metaHtml += `<span class="modal-meta-tag tag-gold">💚 Petit prix</span>`;
        if (item.isSpecialty) metaHtml += `<span class="modal-meta-tag tag-gold">👑 Incontournable</span>`;
        modalMeta.innerHTML = metaHtml;
    }

    // Bouton Ajouter — vérifier si déjà dans la sélection
    if (modalAddBtn && modalAddLabel) {
        const inCart = userSelection.find(i => i.id === itemId);
        modalAddBtn.classList.toggle("is-added", !!inCart);
        modalAddLabel.textContent = inCart ? `✓ Dans ma sélection (${inCart.qty})` : "Ajouter à ma sélection";
        modalAddBtn.onclick = () => {
            addToSelection(item, 1);
        };
    }

    // Afficher le modal
    overlay.removeAttribute("hidden");
    document.body.style.overflow = "hidden";

    // Focus pour accessibilité
    setTimeout(() => {
        const closeBtn = document.getElementById("modal-close-btn");
        if (closeBtn) closeBtn.focus();
    }, 50);
}

function closeProductModal() {
    const overlay = document.getElementById("product-modal-overlay");
    if (!overlay) return;
    overlay.setAttribute("hidden", "");
    document.body.style.overflow = "";
    modalOpenItemId = null;
}

function setupModalEventListeners() {
    const overlay = document.getElementById("product-modal-overlay");
    const closeBtn = document.getElementById("modal-close-btn");

    // Fermer via le bouton X
    if (closeBtn) {
        closeBtn.addEventListener("click", closeProductModal);
    }

    // Fermer en cliquant sur l'overlay (en dehors du modal)
    if (overlay) {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) closeProductModal();
        });
    }

    // Fermer avec la touche Echap
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalOpenItemId !== null) {
            closeProductModal();
        }
    });

    // Délégation de clic sur le menu-container (pour les lignes produit)
    const menuContainer = document.getElementById("menu-container");
    if (menuContainer) {
        menuContainer.addEventListener("click", (e) => {
            // Si le clic provient du bouton (+) d'ajout rapide, laisser son listener s'exécuter
            if (e.target.closest(".sb-item-quick-add-btn")) {
                return;
            }
            const row = e.target.closest("[data-item-id]");
            if (row && row.dataset.itemId) {
                openProductModal(row.dataset.itemId);
            }
        });

        // Accessibilité clavier (Enter/Space ouvre le modal)
        menuContainer.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                if (e.target.closest(".sb-item-quick-add-btn")) return;
                const row = e.target.closest("[data-item-id]");
                if (row && row.dataset.itemId) {
                    e.preventDefault();
                    openProductModal(row.dataset.itemId);
                }
            }
        });
    }
}

// ==========================================================================
// SIMULATEUR D'ADDITION / PANIER — Logique & Synchronisation
// ==========================================================================

let userSelection = [];

function loadSelection() {
    try {
        const raw = localStorage.getItem("boscoffee_selection");
        userSelection = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(userSelection)) userSelection = [];
    } catch (e) {
        userSelection = [];
    }
    updateSelectionUI();
}

function saveSelection() {
    localStorage.setItem("boscoffee_selection", JSON.stringify(userSelection));
    updateSelectionUI();
}

function addToSelection(item, qty = 1) {
    if (!item || !item.id) return;
    const existing = userSelection.find(i => i.id === item.id);
    if (existing) {
        existing.qty = (existing.qty || 1) + qty;
    } else {
        userSelection.push({
            id: item.id,
            name: item.name,
            price: Number(item.price),
            icon: item.icon || "☕",
            qty: qty
        });
    }
    saveSelection();
    triggerCartAnimation();
}

function updateSelectionQty(itemId, delta) {
    const idx = userSelection.findIndex(i => i.id === itemId);
    if (idx === -1) return;

    userSelection[idx].qty = (userSelection[idx].qty || 1) + delta;
    if (userSelection[idx].qty <= 0) {
        userSelection.splice(idx, 1);
    }
    saveSelection();
}

function removeFromSelection(itemId) {
    userSelection = userSelection.filter(i => i.id !== itemId);
    saveSelection();
}

function clearSelection() {
    userSelection = [];
    saveSelection();
}

function getSelectionTotal() {
    return userSelection.reduce((sum, item) => sum + (Number(item.price) * (item.qty || 1)), 0);
}

function getSelectionCount() {
    return userSelection.reduce((count, item) => count + (item.qty || 1), 0);
}

function getSelectionIds() {
    return userSelection.map(i => i.id);
}

function triggerCartAnimation() {
    const bubble = document.getElementById("cart-bubble");
    if (bubble) {
        bubble.classList.remove("pop");
        void bubble.offsetWidth; // déclenche un reflow pour relancer l'animation
        bubble.classList.add("pop");
    }
}

function updateSelectionUI() {
    const total = getSelectionTotal();
    const count = getSelectionCount();
    const formattedTotal = formatPrice(total) + " DT";

    // 1. Bulle flottante
    const bubble = document.getElementById("cart-bubble");
    const bubbleTotal = document.getElementById("cart-bubble-total");
    const bubbleCount = document.getElementById("cart-bubble-count");

    if (bubble) {
        if (count > 0) {
            bubble.removeAttribute("hidden");
            if (bubbleTotal) bubbleTotal.textContent = formattedTotal;
            if (bubbleCount) bubbleCount.textContent = count;
        } else {
            bubble.setAttribute("hidden", "");
        }
    }

    // 2. Tiroir Ma Sélection
    const drawerTotal = document.getElementById("drawer-total-value");
    if (drawerTotal) drawerTotal.textContent = formattedTotal;

    const drawerItems = document.getElementById("drawer-items");
    if (drawerItems) {
        if (userSelection.length === 0) {
            drawerItems.innerHTML = `
                <div class="drawer-empty-state">
                    <span class="drawer-empty-icon">🛒</span>
                    <p class="drawer-empty-msg">Votre sélection est vide</p>
                    <p class="drawer-empty-sub">Touchez le bouton (+) sur un article pour l'ajouter à votre note.</p>
                </div>
            `;
        } else {
            drawerItems.innerHTML = userSelection.map(item => `
                <div class="drawer-item-row" data-cart-id="${item.id}">
                    <span class="drawer-item-emoji">${item.icon || '☕'}</span>
                    <div class="drawer-item-name">
                        ${escapeHtml(item.name)}
                        <span class="drawer-item-unit-price">${formatPrice(item.price)} DT / unité</span>
                    </div>
                    <div class="drawer-qty-control">
                        <button class="drawer-qty-btn" data-action="dec" data-id="${item.id}" aria-label="Diminuer">−</button>
                        <span class="drawer-qty-num">${item.qty}</span>
                        <button class="drawer-qty-btn" data-action="inc" data-id="${item.id}" aria-label="Augmenter">+</button>
                    </div>
                    <span class="drawer-item-subtotal">${formatPrice(item.price * item.qty)} DT</span>
                </div>
            `).join("");
        }
    }

    // 3. Vue Serveur
    const waiterTotal = document.getElementById("waiter-total-value");
    if (waiterTotal) waiterTotal.textContent = formattedTotal;

    const waiterItems = document.getElementById("waiter-items-list");
    if (waiterItems) {
        if (userSelection.length === 0) {
            waiterItems.innerHTML = `
                <div class="drawer-empty-state">
                    <p class="drawer-empty-msg">Aucun article sélectionné</p>
                </div>
            `;
        } else {
            waiterItems.innerHTML = userSelection.map(item => `
                <div class="waiter-item-row">
                    <div class="waiter-item-left">
                        <span class="waiter-item-qty-badge">${item.qty}x</span>
                        <span class="waiter-item-name">${escapeHtml(item.name)}</span>
                    </div>
                    <span class="waiter-item-subtotal">${formatPrice(item.price * item.qty)} DT</span>
                </div>
            `).join("");
        }
    }

    // 4. Modal produit (si ouvert)
    if (modalOpenItemId) {
        const modalAddBtn = document.getElementById("modal-add-btn");
        const modalAddLabel = document.getElementById("modal-add-label");
        const inCartItem = userSelection.find(i => i.id === modalOpenItemId);
        if (modalAddBtn && modalAddLabel) {
            if (inCartItem) {
                modalAddBtn.classList.add("is-added");
                modalAddLabel.textContent = `✓ Dans ma sélection (${inCartItem.qty})`;
            } else {
                modalAddBtn.classList.remove("is-added");
                modalAddLabel.textContent = "Ajouter à ma sélection";
            }
        }
    }
}

function openSelectionDrawer() {
    const overlay = document.getElementById("selection-drawer-overlay");
    if (overlay) {
        overlay.removeAttribute("hidden");
        document.body.style.overflow = "hidden";
        updateSelectionUI();
    }
}

function closeSelectionDrawer() {
    const overlay = document.getElementById("selection-drawer-overlay");
    if (overlay) {
        overlay.setAttribute("hidden", "");
        const waiter = document.getElementById("waiter-view");
        if (!waiter || waiter.hasAttribute("hidden")) {
            document.body.style.overflow = "";
        }
    }
}

function openWaiterView() {
    closeSelectionDrawer();
    const waiterView = document.getElementById("waiter-view");
    if (waiterView) {
        waiterView.removeAttribute("hidden");
        document.body.style.overflow = "hidden";
        updateSelectionUI();
    }
}

function closeWaiterView() {
    const waiterView = document.getElementById("waiter-view");
    if (waiterView) {
        waiterView.setAttribute("hidden", "");
        document.body.style.overflow = "";
    }
}

function setupCartEventListeners() {
    // Clic sur la bulle flottante → ouvre le tiroir
    const bubbleBtn = document.getElementById("cart-bubble-btn");
    if (bubbleBtn) {
        bubbleBtn.addEventListener("click", openSelectionDrawer);
    }

    // Fermeture du tiroir
    const drawerCloseBtn = document.getElementById("drawer-close-btn");
    if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener("click", closeSelectionDrawer);
    }

    const drawerOverlay = document.getElementById("selection-drawer-overlay");
    if (drawerOverlay) {
        drawerOverlay.addEventListener("click", (e) => {
            if (e.target === drawerOverlay) closeSelectionDrawer();
        });
    }

    // Actions +/- dans le tiroir (délégation d'événements)
    const drawerItems = document.getElementById("drawer-items");
    if (drawerItems) {
        drawerItems.addEventListener("click", (e) => {
            const btn = e.target.closest(".drawer-qty-btn");
            if (!btn) return;
            const action = btn.dataset.action;
            const id = btn.dataset.id;
            if (action === "inc") {
                updateSelectionQty(id, 1);
            } else if (action === "dec") {
                updateSelectionQty(id, -1);
            }
        });
    }

    // Vider la sélection
    const clearBtn = document.getElementById("drawer-clear-btn");
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            if (userSelection.length > 0 && confirm("Voulez-vous vider toute votre sélection ?")) {
                clearSelection();
            }
        });
    }

    // Présenter au serveur
    const presentBtn = document.getElementById("drawer-present-btn");
    if (presentBtn) {
        presentBtn.addEventListener("click", openWaiterView);
    }

    // Retour depuis la vue serveur
    const waiterBackBtn = document.getElementById("waiter-back-btn");
    if (waiterBackBtn) {
        waiterBackBtn.addEventListener("click", () => {
            closeWaiterView();
            openSelectionDrawer();
        });
    }

    // Touche Échap pour fermer vue serveur ou tiroir
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            const waiter = document.getElementById("waiter-view");
            if (waiter && !waiter.hasAttribute("hidden")) {
                closeWaiterView();
                return;
            }
            const drawer = document.getElementById("selection-drawer-overlay");
            if (drawer && !drawer.hasAttribute("hidden")) {
                closeSelectionDrawer();
            }
        }
    });

    // Délégation de clic pour le bouton d'ajout rapide (+) sur les cartes du menu
    const menuContainer = document.getElementById("menu-container");
    if (menuContainer) {
        menuContainer.addEventListener("click", (e) => {
            const addBtn = e.target.closest(".sb-item-quick-add-btn");
            if (addBtn && addBtn.dataset.addId) {
                e.stopPropagation();
                const item = ALL_ITEMS_MAP[addBtn.dataset.addId];
                if (item) {
                    addToSelection(item, 1);
                }
            }
        });
    }
}

// ==========================================================================
// LIGHTBOX — Agrandissement Photo Plein Écran
// ==========================================================================

function openLightbox(src, alt) {
    const lightbox = document.getElementById("photo-lightbox");
    const img = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");

    if (!lightbox || !src) return;

    if (img) {
        img.src = src.replace("w=700", "w=1400").replace("w=300", "w=1400");
        img.alt = alt || "";
    }
    if (caption) caption.textContent = alt || "";

    lightbox.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const lightbox = document.getElementById("photo-lightbox");
    if (!lightbox) return;
    lightbox.setAttribute("hidden", "");
    // Ne pas restaurer overflow ici — le modal produit le gère lui-même
    // Vérifier si le modal est encore ouvert
    const overlay = document.getElementById("product-modal-overlay");
    if (!overlay || overlay.hasAttribute("hidden")) {
        document.body.style.overflow = "";
    }
}

function setupLightboxListeners() {
    const lightbox = document.getElementById("photo-lightbox");
    const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
    const lightboxImg = document.getElementById("lightbox-img");
    const modalZoomBtn = document.getElementById("modal-zoom-btn");
    const modalImg = document.getElementById("modal-img");

    // Bouton zoom dans le modal → ouvre lightbox
    if (modalZoomBtn) {
        modalZoomBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const src = modalImg ? modalImg.src : "";
            const alt = modalImg ? modalImg.alt : "";
            if (src) openLightbox(src, alt);
        });
    }

    // Clic sur la photo dans le modal → ouvre aussi la lightbox
    if (modalImg) {
        modalImg.addEventListener("click", () => {
            if (modalImg.src) openLightbox(modalImg.src, modalImg.alt);
        });
    }

    // Fermer lightbox avec le bouton ✕
    if (lightboxCloseBtn) {
        lightboxCloseBtn.addEventListener("click", closeLightbox);
    }

    // Clic sur la photo en lightbox → ferme (zoom-out)
    if (lightboxImg) {
        lightboxImg.addEventListener("click", closeLightbox);
    }

    // Clic sur le fond noir → ferme
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    // Touche Échap → ferme la lightbox en priorité
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            const lb = document.getElementById("photo-lightbox");
            if (lb && !lb.hasAttribute("hidden")) {
                e.stopImmediatePropagation();
                closeLightbox();
            }
        }
    }, true); // capture phase pour intercepter avant le handler du modal
}