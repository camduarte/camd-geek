(() => {

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

    const produtsContainer = document.querySelector("[data-starwars]");
    const consolesContainer = document.querySelector("[data-consoles]");
    const variousContainer = document.querySelector("[data-various]");

    const http = new XMLHttpRequest();

    http.open("GET", "http://localhost:3000/starwars");
    http.send(); // envio la peticion

    // espero la respuesta
    http.onload = () => {
        // transformo de texto a objeto json.
        const data = JSON.parse(http.response);
        console.log(data);

        data.forEach(product => {
            const HTMLProduct = createProduct(product.img, product.name, product.price, product.link);
            produtsContainer.appendChild(HTMLProduct);
        });
    }

    const http2 = new XMLHttpRequest();
    http2.open("GET", "http://localhost:3000/console");
    http2.send(); // envio la peticion

    // espero la respuesta
    http2.onload = () => {
        // transformo de texto a objeto json.
        const data = JSON.parse(http2.response);
        console.log(data);

        data.forEach(product => {
            const HTMLProduct = createProduct(product.img, product.name, product.price, product.link);
            consolesContainer.appendChild(HTMLProduct);
        });
    }

    const http3 = new XMLHttpRequest();
    http3.open("GET", "http://localhost:3000/various");
    http3.send(); // envio la peticion

    // espero la respuesta
    http3.onload = () => {
        // transformo de texto a objeto json.
        const data = JSON.parse(http3.response);
        console.log(data);

        data.forEach(product => {
            const HTMLProduct = createProduct(product.img, product.name, product.price, product.link);
            variousContainer.appendChild(HTMLProduct);
        });
    }

    /**
     * Gest data from json-server.
     * @param {*} method The HTTP method.
     * @param {*} url The URL to json-server.
     * @param {*} table The table name.
     */
    const getData = (method, url, table) => {
        const http = new XMLHttpRequest();

        /**
         * CRUD   - Métodos HTTP
         * CREATE - POST
         * READ   - GET
         * UPDATE - PUT/PATH
         * DELETE - DELETE
         */
        http.open(method, url + table);
        http.send(); // envio la peticion
    
        // espero la respuesta
        http.onload = () => {
            // transformo de texto a objeto json.
            const data = JSON.parse(http.response);
            console.log(data);
            return data;
        }   
    }

    // I get the consoles from json-server.
    // const data = getData(GET, URL, TB_STARWARS);
    // data.forEach(product => {
        // const productHTML = createProduct(product.img, product.name, product.price, product.link);
        // console.log(productHTML);
    //     consolesContainer.appendChild(productHTML);
    // });
})();