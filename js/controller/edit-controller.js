import { clientServices } from "../client-service-v5.js";

(() => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    const category = url.searchParams.get("category");

    const imgField = document.querySelector("[data-img]");
    const categoryField = document.querySelector("[data-category]");
    const nameField = document.querySelector("[data-name]");
    const priceField = document.querySelector("[data-price]");
    const descriptionField = document.querySelector("[data-description]");

    clientServices.getProduct(clientServices.URL, category, id)
    .then((product) => {
        imgField.value = product.img;
        categoryField.value = product.category;
        nameField.value = product.name;
        priceField.value = product.price;
        descriptionField.value = product.description;
    })
    .catch((error) => {
        console.log(error);
        window.location.href = "../../html/error.html"
    });
})();