const iconMenu = document.querySelector(".icon__menu");
const menu = document.querySelector(".menu");

iconMenu.addEventListener("click", function () {
    menu.classList.toggle("menu__show");
});
