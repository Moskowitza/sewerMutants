// function domWrapper() {
//   function addUserToDom(name) {
//     const node = document.createElement("li");
//     const text = document.createTextNode(name);
//     node.appendChild(text);
//     document.getElementById("users").appendChild(node);
//   }
//   document.getElementById("submit").addEventListener("click", () => {
//     const input = document.getElementById("input");
//     addUserToDom(input.value);
//     input.value = "";
//   });
//   var users = APP.getUsers();
//   for (let i = 0; i < users.length; i += 1) {
//     addUserToDom(users[i]);
//   }
// }
// domWrapper();

// (function() {
//   function addUserToDom(name) {
//     const node = document.createElement("li");
//     const text = document.createTextNode(name);
//     node.appendChild(text);
//     document.getElementById("users").appendChild(node);
//   }
//   document.getElementById("submit").addEventListener("click", () => {
//     const input = document.getElementById("input");
//     addUserToDom(input.value);
//     input.value = "";
//   });
//   var users = APP.getUsers();
//   for (let i = 0; i < users.length; i += 1) {
//     addUserToDom(users[i]);
//   }
// })();

var getUsers = require("./users").getUsers;
function addUserToDom(name) {
  const node = document.createElement("li");
  const text = document.createTextNode(name);
  node.appendChild(text);
  document.getElementById("users").appendChild(node);
}
document.getElementById("submit").addEventListener("click", () => {
  const input = document.getElementById("input");
  addUserToDom(input.value);
  input.value = "";
});
var users = getUsers();
for (let i = 0; i < users.length; i += 1) {
  addUserToDom(users[i]);
}
