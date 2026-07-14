// ===============================
// Light / Dark Mode Toggle
// ===============================

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeBtn.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.textContent = "🌙";
        }

    });

}

// ===============================
// Fade-in Animation on Scroll
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});

// ===============================
// Active Navigation Link
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    if (link.href === window.location.href) {
        link.style.color = "#4F46E5";
        link.style.fontWeight = "700";
    }

});

// ===============================
// Smooth Scroll (for same-page links)
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});