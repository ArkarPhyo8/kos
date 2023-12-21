const openNavMenu = document.querySelector(".open-nav-menu");
const closeNavMenu = document.querySelector(".close-nav-menu");
const navMenu = document.querySelector(".nav-menu");

const menuOverlay = document.querySelector(".menu-overlay");
const mediaSize = 768;

openNavMenu.addEventListener("click", toggleNav);
closeNavMenu.addEventListener("click", toggleNav);
menuOverlay.addEventListener("click", toggleNav);

function toggleNav() {
  navMenu.classList.toggle("open");
  menuOverlay.classList.toggle("active");
  closeNavMenu.classList.toggle("close");
  document.body.classList.toggle("hidden-scrolling");
}

navMenu.addEventListener("click", (event) => {
  if (
    event.target.hasAttribute("data-toggle") &&
    window.innerWidth <= mediaSize
  ) {
    event.preventDefault();
    const menuItemHasChildren = event.target.parentElement;

    if (menuItemHasChildren.classList.contains("active")) {
      collapseSubMenu();
    } else {
      if (navMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
      }
      menuItemHasChildren.classList.add("active");
      const subMenu = menuItemHasChildren.querySelector(".sub-menu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  }
});

function collapseSubMenu() {
  navMenu
    .querySelector(".menu-item-has-children.active .sub-menu")
    .removeAttribute("style");

  navMenu
    .querySelector(".menu-item-has-children.active")
    .classList.remove("active");
}

function resizeFix() {
  // if navMenu is open ,close it
  if (navMenu.classList.contains("open")) {
    console.log("hello");
    toggleNav();
  }
  // if menuItemHasChildren is expanded , collapse it
  if (navMenu.querySelector(".menu-item-has-children.active")) {
    console.log("child");
    collapseSubMenu();
  }
}

window.addEventListener("resize", function () {
  if (this.innerWidth > mediaSize) {
    resizeFix();
  }
});
