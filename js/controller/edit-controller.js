import { clientServices } from "../client-service-v5.js";

(() => {
    const url = new URL(window.location.href);
    const paramId = url.searchParams.get("id");
    const paramCategory = url.searchParams.get("category");

    const imgField = document.querySelector("[data-img]");
    const categoryField = document.querySelector("[data-category]");
    const nameField = document.querySelector("[data-name]");
    const priceField = document.querySelector("[data-price]");
    const descriptionField = document.querySelector("[data-description]");

    clientServices.getProduct(clientServices.URL, paramCategory, paramId)
    .then((product) => {
        imgField.value = product.img;
        categoryField.value = product.category;
        nameField.value = product.name;
        priceField.value = product.price;
        descriptionField.value = product.description;
    })
    .catch((error) => {
        console.log(error);
        window.location.href = "./error.html"
    });

    /**
     * Edit product functionality.
     */
    const form = document.querySelector("[data-form]");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const img = document.querySelector("[data-img]").value;
        const category = document.querySelector("[data-category]").value;
        const name = document.querySelector("[data-name]").value;
        const price = document.querySelector("[data-price]").value;
        const description = document.querySelector("[data-description]").value;

        clientServices.editProduct(
            clientServices.URL,
            paramCategory,
            paramId,
            img,
            category,
            name,
            price,
            description
        ).then((response) => {
            console.log(response);
            window.location.href = "./successful.html"            
        })
        .catch((error) => {
            console.log(error);
            window.location.href = "./error.html"
        });
    })
})();