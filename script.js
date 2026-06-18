const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        currentSection = sections[sections.length - 1].getAttribute("id");
    }

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

const menuToggle = document.querySelector(".menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinksContainer.classList.remove("open");
    });
});