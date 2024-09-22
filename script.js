const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetSection = document.querySelector(this.getAttribute("href"));

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            navLinks.forEach((navLink) => navLink.classList.remove("active"));
            this.classList.add("active");
        });
    });
});


