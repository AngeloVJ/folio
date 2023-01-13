const iconMenu = document.querySelector(".icon__menu");
const menu = document.querySelector(".menu");

iconMenu.addEventListener("click", function () {
    menu.classList.toggle("menu__show");
})

//moon turn on off
const moon__dark = document.querySelector(".bx-moon");
const moon__light = document.querySelector(".bxs-moon")

moon__dark.addEventListener('click', function(){
    moon__dark.classList.toggle('moon__none')
    moon__light.classList.toggle('moon__block')
    document.body.classList.toggle('darkmode')
})
moon__light.addEventListener('click', function(){
    moon__light.classList.toggle('moon__block')
    moon__dark.classList.toggle('moon__none')
    document.body.classList.toggle('darkmode')
})