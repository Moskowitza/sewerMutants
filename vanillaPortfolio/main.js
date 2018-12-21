// Fill screen with splash header
var h = window.innerHeight;
var splash = document.querySelector("#hero");
splash.setAttribute("style", `height: ${h}px;`);

const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;
function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
    splash.setAttribute("style", `height: ${h / 2}px;`);
    console.log(window.scrollY);
  }
}
window.addEventListener("scroll", fixNav);
