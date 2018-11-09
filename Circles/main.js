var setup = function () {
    var radius = 100;
    var main = document.getElementById('main');
    var mainHeight = parseInt(window.getComputedStyle(main).height.slice(0, -2));
    var theta = [0, Math.PI / 6, Math.PI / 4, Math.PI / 3, Math.PI / 2, 2 * (Math.PI / 3), 3 * (Math.PI / 4), 5 * (Math.PI / 6), Math.PI, 7 * (Math.PI / 6), 5 * (Math.PI / 4), 4 * (Math.PI / 3), 3 * (Math.PI / 2), 5 * (Math.PI / 3), 7 * (Math.PI / 4), 11 * (Math.PI / 6)];
    var circleArray = [];
    var colors = ['red', 'green', 'purple', 'black', 'orange', 'yellow', 'maroon', 'grey', 'lightblue', 'tomato', 'pink', 'maroon', 'cyan', 'magenta', 'blue', 'chocolate', 'DarkSlateBlue'];
    for (var i = 0; i < 16; i++) {
        //create a circle
        var circle = document.createElement('div');
        //give it custom class name
        circle.className = 'circle number'+i;
        // put each circle div into an array
        circleArray.push(circle);
        circleArray[i].posx = Math.round(radius * (Math.cos(theta[i]))) + 'px';
        circleArray[i].posy = Math.round(radius * (Math.sin(theta[i]))) + 'px';
        circleArray[i].style.position = "absolute";
        circleArray[i].style.backgroundColor = colors[i];
        circleArray[i].style.top = ((mainHeight / 2) - parseInt(circleArray[i].posy.slice(0, -2))) + 'px';
        circleArray[i].style.left = ((mainHeight/ 2 ) + parseInt(circleArray[i].posx.slice(0, -2))) + 'px';
        main.appendChild(circleArray[i]);
    }
};
setup();