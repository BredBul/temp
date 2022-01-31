$(document).ready(function() {
    let iconMenu = document.querySelector(".icon-menu");
    let body = document.querySelector("body");
    //let menuBody = document.querySelector(".menu__body");
    let menu = document.querySelector(".nav");
    console.log(menu);
    if (iconMenu) {
        iconMenu.addEventListener("click", function () {
            iconMenu.classList.toggle("active");
            body.classList.toggle("lock");
            //menuBody.classList.toggle("active");
            menu.classList.toggle('active');
        });
    }
});