(() => {
/**
 * Logout the user.
 */
    const logout = () => {
        const logoutBtn = document.querySelector("[data-logout]");
        logoutBtn.addEventListener("click", () => {
            console.log("logout");
            localStorage.removeItem("user");
            
            const currentURL = window.location.href; 
            if (currentURL.endsWith("index.html") || currentURL.endsWith("camd-geek/")) {
                window.location.href = "./index.html";
            } else {
                window.location.href = "../index.html";
            }
        });
    }
    logout();
})();