/**
 * It is responsible for receiving the data and generating the HTML structure.
 */

import { clientServices } from "../client-service-v5.js";
import { isLogged } from "./user-controller.js";
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
                <a class="" href="./edit-product.html?id=${id}&category=${category}"><i class="fa-solid fa-pen no-decor edit-icon"></i></a>
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
            .then(response => {
                console.log(response);
                window.location.href = "./successful.html";
            }).catch(error => {
                console.log(error);
                window.location.href = "./error.html";
            });
        });

        // if the admin user logged, I show the edit and remove buttons.
        const editRemoveBtn = div.querySelectorAll(".product__remove-edit");
        if(!isLogged()) {
            editRemoveBtn.forEach((buttons) => {
                buttons.classList.remove("show");
                buttons.classList.add("hide");
            });
        } else {
            editRemoveBtn.forEach((buttons) => {
                buttons.classList.remove("hide");
                buttons.classList.add("show");
            });
        }

        return div;
    }

    const produtsContainer = document.querySelector("[data-starwars]");
    const consolesContainer = document.querySelector("[data-consoles]");
    const variousContainer = document.querySelector("[data-various]");

    clientServices.productList(clientServices.GET, clientServices.URL, clientServices.TB_STARWARS).then((data) => {
        data.forEach(product => {
            const productHTML = createProduct(product.id, product.category, product.img, product.name, product.price);
            produtsContainer.appendChild(productHTML);
        });
    }).catch((error) => {
        console.log(error);
        window.location.href = "./error.html"
    });

    clientServices.productList(clientServices.GET, clientServices.URL, clientServices.TB_CONSOLE).then((data) => {
        data.forEach(product => {
            const productHTML = createProduct(product.id, product.category, product.img, product.name, product.price);
            consolesContainer.appendChild(productHTML);
        });
    }).catch((error) => {
        console.log(error);
        window.location.href = "./error.html"
    });

    clientServices.productList(clientServices.GET, clientServices.URL, clientServices.TB_VARIOUS).then((data) => {
        data.forEach(product => {
            const productHTML = createProduct(product.id, product.category, product.img, product.name, product.price);
            variousContainer.appendChild(productHTML);
        });
    }).catch((error) => {
        console.log(error);
        window.location.href = "./error.html"
    });
})();