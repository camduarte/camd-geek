/**
 * It is responsible for communicating with the server.
 */

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
 * Gest data from json-server.
 * @param {*} method The HTTP method.
 * @param {*} url The URL to json-server.
 * @param {*} table The table name.
 * @returns The promise with the data.
 */
const productList = (method, url, table) => fetch(url + table).then(response => response.json());

/**
 * Gest data from json-server.
 * @param {*} method The HTTP method.
 * @param {*} url The URL to json-server.
 * @param {*} table The table name.
 * @param {*} key The key param.
 * @param {*} value The value param.
 * @returns The promise with the data.
 */
const searchProducts = (method, url, table, key, value) => fetch(`${url}${table}?${key}_like=${value}`).then(response => response.json());

/**
 * Creates the product.
 * @param {*} method The HTTP method.
 * @param {*} url The URL to json-server.
 * @param {*} table The table name.
 * @param {*} img The image url of the product.
 * @param {*} category The category product
 * @param {*} name The product name.
 * @param {*} price The product price.
 * @param {*} description The product description.
 */
const createProduct = (method, url, table, img, category, name, price, description) => {
    return fetch(`${url}${table}`,{
        method: method,
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({id : uuid.v4(), img, category, name, price, description})
    }).then(response => response.json());
}

export const clientServices = {
    productList,
    searchProducts,
    createProduct,
    POST,
    GET,
    PUT,
    PATCH,
    DELETE,
    URL,
    TB_USER,
    TB_STARWARS,
    TB_CONSOLE,
    TB_VARIOUS,
    MSG_ERROR
}