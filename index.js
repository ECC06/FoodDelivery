const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
	navMenu.classList.toggle("active");
});

const hamburgerIcon = document.getElementById("hamburger-icon");

hamburgerIcon.addEventListener("click", () => {
	hamburgerIcon.classList.toggle("is-active");
});
