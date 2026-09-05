function showCategory(category) {

    const products = document.querySelectorAll(".product");

    const buttons = document.querySelectorAll(".categories button");


    // Affichage des produits

    products.forEach(product => {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });


    // Bouton actif

    buttons.forEach(button => {

        button.classList.remove("active");

    });

    event.target.classList.add("active");
}