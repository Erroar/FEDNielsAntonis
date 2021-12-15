var deButton = document.querySelector("header nav button:nth-child(2)");

deButton.addEventListener("click", toonMenu);

function toonMenu() {
    var deNav = document.querySelector("header nav:nth-child(1)");
    var deMenu = document.querySelector("header nav:nth-child(2)");
    var deMain = document.querySelector("main");
    deNav.classList.toggle("menuOpen");
    deMenu.classList.toggle("menOpen");
    deMain.classList.toggle("plekje");
}