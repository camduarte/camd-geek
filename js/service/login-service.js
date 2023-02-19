/**
 * Login service.
 */

const POST = "POST";
const GET = "GET";
const PUT = "PUT";
const PATCH = "PATCH";
const DELETE = "DELETE";

const URL = "https://json-mock-80h7.onrender.com/";

const TB_USER = "user";

const MSG_ERROR = "Ocurrió un error.";

/**
 * This gets the user by e-mail.
 * @param {*} email The user e-mail.
 * @returns The user. 
 */
const getUser = (email) => {
    return fetch(`${URL}${TB_USER}?email=${email}`)
    .then(response => {
        return response.json();
    });
}

export const loginService = {
    getUser
}