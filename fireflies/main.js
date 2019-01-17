const dots = document.querySelectorAll('.dot');
let lastDot;
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function randomDot(doots) {
  const index = Math.floor(Math.random() * doots.length);
  const dot = doots[index];
  console.log(lastDot);
  if (dot === lastDot) {
    console.log('same hole, run again');
    return randomDot(dots);
  }
  lastDot = dot;
  return dot;
}
function moveDot(dot, time, distance) {
  dot.style.transitionDuration = `${time / 2000}s`;
  dot.style.transform = `translate(${distance}px,${distance / 3}px )`;
}
function glow() {
  const time = randomTime(200, 1000);
  const distance = randomTime(-1000, 1000);
  const dot = randomDot(dots);
  dot.classList.add('glow');
  setTimeout(() => {
    dot.classList.remove('glow');
    moveDot(dot, time, distance);
  }, time);
}
setInterval(glow, 1000);
