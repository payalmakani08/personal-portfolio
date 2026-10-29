
// Display the current year in the footer

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Close the mobile navigation menu after clicking a link

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const navbarMenu = document.getElementById("navbarMenu");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarMenu.classList.contains("show")) {

            const collapseMenu =
                bootstrap.Collapse.getOrCreateInstance(navbarMenu);

            collapseMenu.hide();

        }

    });

});
