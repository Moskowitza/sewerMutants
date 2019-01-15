// const getUsers = require('./users').getUsers;
import getUsers from './users.js';

function addUserToDom(name) {
  const node = document.createElement('li');
  const text = document.createTextNode(name);
  node.appendChild(text);
  document.getElementById('users').appendChild(node);
}
document.getElementById('submit').addEventListener('click', () => {
  const input = document.getElementById('input');
  addUserToDom(input.value);
  input.value = '';
});
const users = getUsers();
for (let i = 0; i < users.length; i += 1) {
  addUserToDom(users[i]);
}
