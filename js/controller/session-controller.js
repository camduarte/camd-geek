(() => {
/**
 * Logout the user.
 */
    const logout = () => {
        const logoutBtn = document.querySelector("[data-logout]");
        logoutBtn.addEventListener("click", () => {
            console.log("logout");
            localStorage.removeItem("user");
            window.location.href = "/index.html"
        });
    }
    logout();
})();