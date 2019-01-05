const list = document.querySelector("#book-list ul");

//Delete an item without using a loop
list.addEventListener("click", function(e) {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

const addForm = document.forms["add-book"];

addForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  //create elements
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");
  //add content
  //textContent uses straight text, does not parse HTML, and is faster.
  bookName.textContent = value;
  deleteBtn.textContent = "delete";
  //append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});
