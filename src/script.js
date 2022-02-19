const toggleButton = document.querySelector(".mobile-nav-toggle");
const navBar = document.querySelector(".nav-bar");
const fade = document.querySelectorAll(".fade");
const projectImg = document.querySelector(".img-wrap");
const options = {
  threshold: 0.3,
};

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
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    } else {
      return;
      //entry.target.classList.remove("appear");
    }
  });
}, options);
observer.observe(projectImg);
