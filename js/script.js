document.addEventListener("DOMContentLoaded", function () {
    let menuButton = document.querySelector(".img_menu");
    let menuList = document.querySelector(".nav_hide");

    menuButton.addEventListener("click", function (event) {
        event.preventDefault();
        menuList.classList.toggle("active");
    });
    document.addEventListener("click", function (event) {
        if (!menuButton.contains(event.target) && !menuList.contains(event.target)) {
            menuList.classList.remove("active");
        }
    });
});