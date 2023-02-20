import { loginService } from "../service/login-service.js";

(() => {
    const form = document.querySelector("[data-login]");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // It gets the fields value.
        const email = document.querySelector("[data-email]").value;
        const password = document.querySelector("[data-password]").value;

        // It gets the user from json-server.
        loginService.getUser(email)
        .then((response => {
            const user = response[0];
            if (checkCredentials(user, email, password)) {
                localStorage.setItem("user", JSON.stringify(user)); // I save the login user.
                window.location.href = "./products.html";
            } else {
                window.location.href = "./login-error.html";
            }
        }))
        .catch(error => {
            console.log(error);
            window.location.href = "./error.html";
        });
    });

    /**
     * This checks the user credentials.
     * 
     * @param {*} user The user. 
     * @param {*} pEmail The e-mail from login form.
     * @param {*} pPassword The password from login form.
     * @returns true if the user is authenticated.
     */
    const checkCredentials = (user, pEmail, pPassword ) => {
        if (user.email === pEmail && user.password === pPassword) {
            return true
        }
        return false;
    }
})();