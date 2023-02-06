import { clientServices } from "../client-service-v5.js"

(() => {
    const form = document.querySelector("[data-form]");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const img = document.querySelector("[data-img]").value;
        const category = document.querySelector("[data-category]").value;
        const name = document.querySelector("[data-name]").value;
        const price = document.querySelector("[data-price]").value;
        const description = document.querySelector("[data-description]").value;
    
        clientServices.createProduct(
            clientServices.POST, clientServices.URL, category, img, category, name, price, description)
            .then(response => window.location.href = "../../html/successful.html")
            .catch(error => {
                console.log(error);
                window.location.href = "../../html/error.html";
            });
    });
})();