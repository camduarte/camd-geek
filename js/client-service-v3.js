(() => {
    const produtsContainer = document.querySelector("[data-starwars]");
    const consolesContainer = document.querySelector("[data-consoles]");
    const variousContainer = document.querySelector("[data-various]");

    const POST = "POST";
    const GET = "GET";
    const PUT = "PUT";
    const PATCH = "PATCH";
    const DELETE = "DELETE";

    const URL = "http://localhost:3000/";

    const TB_USER = "user";
    const TB_STARWARS = "starwars";
    const TB_CONSOLE = "console";
    const TB_VARIOUS = "various";

    const MSG_ERROR = "Ocurrió un error.";
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
        </div>
        <p class="product__description">${name}</p>
        <p class="product__price">$ ${price}</p>
        <a class="no-decor product__link" href="${link}">Ver producto</a>
        `;
        div.innerHTML = content;
        return div;
    }

    /**
     * Gest data from json-server.
     * @param {*} method The HTTP method.
     * @param {*} url The URL to json-server.
     * @param {*} table The table name.
     * @returns The promise with the data.
     */
    const productList = (method, url, table) => {
        return fetch(url + table).then(response => {
            return response.json();
        });
    }

    productList(GET, URL, TB_STARWARS).then((data) => {
        console.log(data);
        data.forEach(product => {
            const productHTML = createProduct(product.img, product.name, product.price, product.link);
            produtsContainer.appendChild(productHTML);
        });
    }).catch(error => alert(MSG_ERROR));

    productList(GET, URL, TB_CONSOLE).then((data) => {
        console.log(data);
        data.forEach(product => {
            const productHTML = createProduct(product.img, product.name, product.price, product.link);
            consolesContainer.appendChild(productHTML);
        });
    }).catch(error => alert(MSG_ERROR));

    productList(GET, URL, TB_VARIOUS).then((data) => {
        console.log(data);
        data.forEach(product => {
            const productHTML = createProduct(product.img, product.name, product.price, product.link);
            variousContainer.appendChild(productHTML);
        });
    }).catch(error => alert(MSG_ERROR));
})();