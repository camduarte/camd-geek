import { clientServices } from "./client-service-v5.js"

(() => {
    const sURL = window.document.location.href; // Gets the url.
    const oURL = new URL(sURL);
    const searchTerm = oURL.searchParams.get("searchTerm"); // Gets the search term.
    console.log(`searchTerm<${searchTerm}>`);

    /**
     * Creates HTML elements for the product.
     * @param {*} img The image path or URL.
     * @param {*} name The product name.
     * @param {*} price The product price.
     * @param {*} link The link to the product view.
     */
    const createProduct = (img, name, price, link) => {
        const div = document.createElement("div");
        div.classList.add("products__product");
        const content =
        `
        <div class="img-container">
            <img class="product__img" src="${img}" alt="Producto">
            <div class="product__remove-edit">
                <pre><a href="#"><i class="fa-solid fa-trash no-decor remove-icon"></i></a>    <a href="#"><i class="fa-solid fa-pen no-decor edit-icon"></i></a></pre>
            </div>
        </div>  
        <p class="product__description">${name}</p>
        <p class="product__price">$ ${price}</p>
        <a class="no-decor product__link" href="${link}">Ver producto</a>
        `;
        div.innerHTML = content;
        return div;
    }

    const produtsContainer = document.querySelector("[data-starwars]");
    const consolesContainer = document.querySelector("[data-consoles]");
    const variousContainer = document.querySelector("[data-various]");

    const PARAM_KEY = "name";

    // This goes to search products.
    clientServices.searchProducts(clientServices.GET, clientServices.URL, clientServices.TB_STARWARS, PARAM_KEY,searchTerm).then((data) => {
        console.log(data);
        data.forEach(product => {
            const productHTML = createProduct(product.img, product.name, product.price, product.link);
            produtsContainer.appendChild(productHTML);
        });
    }).catch(error => alert(MSG_ERROR));

    clientServices.searchProducts(clientServices.GET, clientServices.URL, clientServices.TB_CONSOLE, PARAM_KEY,searchTerm).then((data) => {
        console.log(data);
        data.forEach(product => {
            const productHTML = createProduct(product.img, product.name, product.price, product.link);
            consolesContainer.appendChild(productHTML);
        });
    }).catch(error => alert(MSG_ERROR));

    clientServices.searchProducts(clientServices.GET, clientServices.URL, clientServices.TB_VARIOUS, PARAM_KEY,searchTerm).then((data) => {
        console.log(data);
        data.forEach(product => {
            const productHTML = createProduct(product.img, product.name, product.price, product.link);
            variousContainer.appendChild(productHTML);
        });
    }).catch(error => alert(MSG_ERROR));
})();