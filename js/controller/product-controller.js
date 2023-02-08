import { clientServices } from "../client-service-v5.js";

(() => {
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
        document.querySelector("[data-price]").innerHTML = product.price;
        document.querySelector("[data-description]").innerHTML = product.description;

    }).catch(error => {
        console.log(error);
        window.location.href = "../../html/error.html";
    });
})();