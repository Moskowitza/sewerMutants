const root = document.getElementById('root');
const circle = document.createElement('DIV');
circle.classList.add('circle');
let circleText = 'resize for info';
circle.textContent = circleText;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
root.innerHTML = `
  <p> Window Width${windowWidth}</p> 
  <p>Window Height${windowHeight}</p>
  `;
const addCircle = function() {
  root.appendChild(circle);
};
addCircle();
const setCircleText = function(pageWidth) {
  if (pageWidth < 600) {
    circleText = 'small';
  } else if (pageWidth < 922) {
    circleText = 'medium';
  } else if (pageWidth > 922) {
    circleText = 'Large';
  } else {
    circleText = 'No value found';
  }
  return circleText;
};

const displaySize = function() {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
  console.log(windowWidth);
  root.textContent = `
    Window Width${newWidth} 
    Window Height${newHeight}
    `;
  addCircle();
  setCircleText(newWidth);
  circle.textContent = circleText;
};
// Javascript to Display size
window.addEventListener('resize', displaySize);
