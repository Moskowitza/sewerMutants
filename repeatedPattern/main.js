const root = document.getElementById('root');
const windowWidth = window.innerWidth;
const count = windowWidth / 10;
console.log(windowWidth, count);
for (let i = 0; i < 10; i += 1) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `${count}px`;
  square.style.height = `${count}px`;
  root.appendChild(square);
}
