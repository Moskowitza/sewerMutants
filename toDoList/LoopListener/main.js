// add a new list item
const addForm = document.forms[0];
// our list
const ToDos = document.forms['to-dos'];

addForm.addEventListener('submit', e => {
  e.preventDefault();
  //   Here we grab value using the id Selector, not by looking down the DOM Tree
  const toDoItem = document.querySelector('#to-do').value.toString();
  if (toDoItem.length > 0) {
    const blockContainer = document.createElement('div');
    blockContainer.setAttribute('class', 'to-do-item');
    blockContainer.style.display = 'block';
    const input = document.createElement('input');
    const label = document.createElement('label');
    // Now set some attributes for the input to be a checkbox
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', toDoItem);
    label.setAttribute('for', toDoItem);
    label.innerText = toDoItem;
    // Append to dom

    blockContainer.appendChild(input);
    blockContainer.appendChild(label);
    ToDos.appendChild(blockContainer);
  }
  // remove the text from addForm
  addForm.querySelector("input[type='text']").value = null;
});

// remove when checked

ToDos.addEventListener('submit', e => {
  // prevent the page from reloading, redirecting
  e.preventDefault();
  //   get an array of our to-do divs
  const listArray = Array.from(ToDos.querySelectorAll('.to-do-item'));
  listArray.forEach(item => {
    const checkbox = item.querySelector("input[type='checkbox']");
    const thisDiv = checkbox.parentNode;
    if (checkbox.checked == true) {
      ToDos.removeChild(thisDiv);
    }
  });
});
