import { validate } from "../service/validation-service.js";

(() => {
    // This adds blur events to the inputs and checks for valid data.
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
        input.addEventListener("blur", (event) => {
            console.log(event.target.validity);
            validate(event.target);
        });
    });
})();