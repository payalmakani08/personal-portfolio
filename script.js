
/* Display the current year in the footer */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* Close mobile navbar after clicking a menu link */

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const navbarMenu = document.getElementById("navbarMenu");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarMenu.classList.contains("show")) {

            const navbarCollapse =
                bootstrap.Collapse.getOrCreateInstance(navbarMenu);

            navbarCollapse.hide();

        }

    });

});
