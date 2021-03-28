const links = document.querySelectorAll("a");
const navButton = document.querySelector("[data-nav-button]");
const mobileNav = document.querySelector("[data-nav-collapse]");

links.forEach((link) => {
  link.addEventListener("click", clickSectionHandler);
});
function clickSectionHandler(e) {
  e.preventDefault();
  links.forEach((link) => {
    link.classList.remove("nav__link--active");
  });
  const activeLink = e.target;
  activeLink.classList.add("nav__link--active");
  const href = this.getAttribute("href");
  mobileNav.classList.remove("active");

  if (href !== "") {
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
      top: offsetTop - 50,
      behavior: "smooth",
    });
  }
}

navButton.addEventListener("click", showMobileMenu);
function showMobileMenu() {
  mobileNav.classList.toggle("active");
}
