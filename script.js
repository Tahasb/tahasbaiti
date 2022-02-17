const toggleButton = document.querySelector(".mobile-nav-toggle");
const navBar = document.querySelector(".nav-bar");
const fade = document.querySelectorAll(".fade");

fade.forEach((e) => {
  e.addEventListener("click", eventHandler);
});
toggleButton.addEventListener("click", eventHandler);

function eventHandler() {
  const visibility = navBar.getAttribute("data-visible");
  if (visibility === "false") {
    navBar.setAttribute("data-visible", true);
    toggleButton.setAttribute("aria-expanded", true);
  } else {
    navBar.setAttribute("data-visible", false);
    toggleButton.setAttribute("aria-expanded", false);
  }
}
