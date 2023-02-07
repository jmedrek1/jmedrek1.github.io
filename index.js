const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const themeStylesheet = document.getElementById("theme");
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        themeStylesheet.href = storedTheme;
    }

    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if (themeStylesheet.href.includes('light')) {
        themeStylesheet.href = 'style/dark-theme.css';
        themeToggle.innerText = 'Switch to light mode';
        } else {
        // if it's dark -> go light
        themeStylesheet.href = 'style/light-theme.css';
        themeToggle.innerText = 'Switch to dark mode';
        }

        localStorage.setItem("theme", themeStylesheet.href);
    })
})