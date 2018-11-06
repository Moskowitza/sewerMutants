// debounce puts a speedlimit on our event listener
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const panels = document.querySelectorAll(".panel");

function checkSlide(e) {
  panels.forEach(panel => {
    console.log(panel.dataset.color);
    if (
      panel.offsetTop <= window.scrollY &&
      panel.offsetTop + panel.clientHeight > window.scrollY * 0.33
    ) {
      document.body.removeAttribute("style");

      document.body.setAttribute(
        "style",
        "background-color:" + panel.dataset.color + ";"
      );
    }
  });
}
window.addEventListener("scroll", debounce(checkSlide));
