const root = document.getElementById('root');
const circle = document.createElement('DIV');
let text = '';
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
root.innerHTML = `
  <p> Window Width${windowWidth}</p> 
  <p>Window Height${windowHeight}</p>
  `;
const addCircle = function() {
  circle.classList.add('circle');
  root.appendChild(circle);
};

const setCircleText = function() {
  switch (windowWidth) {
    case windowWidth < 600:
      text = 'small';
      circle.textContent = text;
      break;
    case windowWidth < 922:
      text = 'medium';
      circle.textContent = text;
      break;
    case windowWidth < 1200:
      text = 'Large';
      circle.textContent = text;
      break;
    default:
      text = 'No value found';
      circle.textContent = text;
  }
};
addCircle();

const displaySize = function() {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
  console.log(windowWidth);
  root.textContent = `
    Window Width${newWidth} 
    Window Height${newHeight}
    `;
  addCircle();
  setCircleText();
};
// Javascript to Display size
window.addEventListener('resize', displaySize);
