// Display current year in footer

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// Close mobile menu after clicking a navigation link

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const menu = document.getElementById("menu");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (menu.classList.contains("show")) {

            const navbarButton = document.querySelector(".navbar-toggler");

            navbarButton.click();

        }

    });

});
