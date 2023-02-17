/**
 * This hides the header buttons when the user is not logged in.
 */
const loginBtn = document.querySelector(".login-btn");
const adminMenu = document.querySelector(".menu-admin");
const logoutBtn = document.querySelector("[data-logout]");
const newProductBtn = document.querySelector("[data-new]");


const user = localStorage.getItem("user"); // I retrieve user from localStorage.
if(user) {
    console.log(`user<${user}>`);
    adminMenu.classList.add("show");
    loginBtn.classList.add("hide");
    logoutBtn.classList.add("show");
    if(newProductBtn) {
        newProductBtn.classList.add("show");
    }
} else {
    console.log("There is no logged user.");
    adminMenu.classList.add("hide");
    loginBtn.classList.add("show");
    logoutBtn.classList.add("hide");
    if(newProductBtn) {
        newProductBtn.classList.add("hide");
    }
}

/**
 * This checks if there is a logged user.
 * @returns true if there is a logged user.
 */
export const isLogged = () => {
    const user = localStorage.getItem("user");
    if (user) {
        return true;
    }
    return false;
}