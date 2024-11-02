document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".navbar a");
    const currentUrl = window.location.href;

    navbarLinks.forEach(link => {
        // Remove 'active' class from all links
        link.classList.remove("active");

        // Add 'active' class to the current link
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });
});    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('show'); // Toggles the 'show' class on the navbar
    });

