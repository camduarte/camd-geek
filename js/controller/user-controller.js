(() => {
    const loginBtn = document.querySelector(".login-btn");
    const adminMenu = document.querySelector(".menu-admin");

    const user = localStorage.getItem("user");
    if(user) {
        console.log(user);
        loginBtn.classList.add("hide");
        adminMenu.classList.add("show");
    } else {
        console.log("There is no user loged.");
        loginBtn.classList.add("show");
        adminMenu.classList.add("hide");
    }
})();