const setup = function() {
  const radius = 100;
  const main = document.getElementById('main');
  const mainHeight = parseInt(
    window.getComputedStyle(main).height.slice(0, -2)
  );
  const theta = [
    0,
    Math.PI / 6,
    Math.PI / 4,
    Math.PI / 3,
    Math.PI / 2,
    2 * (Math.PI / 3),
    3 * (Math.PI / 4),
    5 * (Math.PI / 6),
    Math.PI,
    7 * (Math.PI / 6),
    5 * (Math.PI / 4),
    4 * (Math.PI / 3),
    3 * (Math.PI / 2),
    5 * (Math.PI / 3),
    7 * (Math.PI / 4),
    11 * (Math.PI / 6),
  ];
  const circleArray = [];
  const colors = [
    'red',
    'green',
    'purple',
    'black',
    'orange',
    'yellow',
    'maroon',
    'grey',
    'lightblue',
    'tomato',
    'pink',
    'maroon',
    'cyan',
    'magenta',
    'blue',
    'chocolate',
    'DarkSlateBlue',
  ];
  for (let i = 0; i < 16; i++) {
    // create a circle
    const circle = document.createElement('div');
    // give it custom class name
    circle.className = 'circle number' + i;
    // put each circle div into an array
    circleArray.push(circle);
    // Style positioning
    // for each circle in the array, give it a posx,posy attribute based on circumference equation
    circleArray[i].posx = `${Math.round(radius * Math.cos(theta[i]))}px`;
    circleArray[i].posy = `${Math.round(radius * Math.sin(theta[i]))}px`;

    circleArray[i].style.position = 'absolute';
    circleArray[i].style.backgroundColor = colors[i];
    circleArray[i].style.top = `${mainHeight / 2 -
      parseInt(circleArray[i].posy.slice(0, -2))}px`;
    circleArray[i].style.left = `${mainHeight / 2 +
      parseInt(circleArray[i].posx.slice(0, -2))}px`;
    main.appendChild(circleArray[i]);
  }
};
setup();
