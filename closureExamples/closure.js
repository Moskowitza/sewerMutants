function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
console.log(myFunc);

function init() {
  var name = "Potato"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // displayName() uses variable declared in the parent function
  }
  displayName();
}
init();
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
console.log(add5());

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" }
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function() {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function() {
        showHelp(item.help);
      };
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
  }
}
