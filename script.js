const hamburgerMenu = document.querySelector("#ham-menu")
const hamburgerClose = document.querySelector("#ham-close")
const dropdownMenu = document.querySelector("#dropdown")
const navbar = document.querySelector("#navbar")

hamburgerMenu.addEventListener("click", function() {
    hamburgerMenu.classList.toggle("hidden")
    hamburgerClose.classList.toggle("hidden")
    dropdownMenu.classList.toggle("max-h-250")
});

hamburgerClose.addEventListener("click", function() {
    hamburgerMenu.classList.toggle("hidden")
    hamburgerClose.classList.toggle("hidden")
    dropdownMenu.classList.toggle("max-h-250")
});

