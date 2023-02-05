/**
 * It is responsible for receiving the data and generating the HTML structure.
 */

import { clientServices } from "../client-service-v5.js"
(() => {
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

    clientServices.productList(clientServices.GET, clientServices.URL, clientServices.TB_STARWARS).then((data) => {
        console.log(data);
        data.forEach(product => {
            const productHTML = createProduct(product.img, product.name, product.price, product.link);
            produtsContainer.appendChild(productHTML);
        });
    }).catch(error => alert(MSG_ERROR));

    clientServices.productList(clientServices.GET, clientServices.URL, clientServices.TB_CONSOLE).then((data) => {
        console.log(data);
        data.forEach(product => {
            const productHTML = createProduct(product.img, product.name, product.price, product.link);
            consolesContainer.appendChild(productHTML);
        });
    }).catch(error => alert(MSG_ERROR));

    clientServices.productList(clientServices.GET, clientServices.URL, clientServices.TB_VARIOUS).then((data) => {
        console.log(data);
        data.forEach(product => {
            const productHTML = createProduct(product.img, product.name, product.price, product.link);
            variousContainer.appendChild(productHTML);
        });
    }).catch(error => alert(MSG_ERROR));
})();