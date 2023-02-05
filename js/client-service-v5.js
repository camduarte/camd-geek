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

    export const clientServices = {
        productList,
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