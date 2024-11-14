const menuButton = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobileNav");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});