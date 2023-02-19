import { clientServices } from "../client-service-v5.js";

(() => {
       /**
     * Creates HTML elements for the product.
     * @param {*} id The product id.
     * @param {*} img The image path or URL.
     * @param {*} name The product name.
     * @param {*} price The product price.
     * @param {*} link The link to the product view.
     */
       const createProduct = (id, category, img, name, price) => {
        const div = document.createElement("div");
        div.classList.add("products__product");

        const content =
        `
        <div class="img-container">
            <img class="product__img" src="${img}" alt="Producto">
            <div class="product__remove-edit">
                <button id="${id}" class="icon-btn remove-btn"><i class="fa-solid fa-trash no-decor remove-icon"></i></button>
                <a class="" href="../../html/edit-product.html?id=${id}&category=${category}"><i class="fa-solid fa-pen no-decor edit-icon"></i></a>
            </div>
        </div>
        <p class="product__description">${name}</p>
        <p class="product__price">$ ${price}</p>
        <a class="no-decor product__link" href="./product.html?id=${id}&category=${category}">Ver producto</a>
        `;

        div.innerHTML = content;
        const removeButton = div.querySelector("button");
        removeButton.addEventListener("click", () => {
            clientServices.deleteProduct(clientServices.URL, category, id)
            .then(response => console.log(response))
            .catch(error => {
                console.log(error);
                window.location.href = "../../html/error.html";
            });
        });

        return div;
    }


    // Gest params from url.    
    const url = new URL(window.location.href);
    const paramId = url.searchParams.get("id");
    const paramCategory = url.searchParams.get("category");

    // Gest the product.
    clientServices.getProduct(clientServices.URL, paramCategory, paramId)
    .then((product) => {
        console.log(product);

        // Sets html fields
        document.querySelector("[data-img]").src = product.img;
        document.querySelector("[data-name]").innerHTML = product.name;
        document.querySelector("[data-price]").innerHTML = "$ " + product.price;
        document.querySelector("[data-description]").innerHTML = product.description;

    }).catch(error => {
        console.log(error);
        window.location.href = "../../html/error.html";
    });

    /**
     * Gets related products.
     */
    const getRelatedProducts = () => {
        const produtsContainer = document.querySelector("[data-products]");
        clientServices.productList(clientServices.GET, clientServices.URL, paramCategory).then((data) => {
            data.forEach(product => {
                const productHTML = createProduct(product.id, product.category, product.img, product.name, product.price);
                produtsContainer.appendChild(productHTML);
            });
        }).catch(error => {
            console.log(error);
            window.location.href = "../../html/error.html"
        });
    }
    getRelatedProducts();
})();