document.addEventListener("DOMContentLoaded", function() {
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
    if (value.length > 0) {
      //create elements
      const li = document.createElement("li");
      const bookName = document.createElement("span");
      const deleteBtn = document.createElement("span");
      //add content
      //textContent uses straight text, does not parse HTML, and is faster.
      bookName.textContent = value;
      deleteBtn.textContent = "delete";

      //Add Classes
      bookName.classList.add("name");
      deleteBtn.classList.add("delete");
      //append to document
      li.appendChild(bookName);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    } else {
      return;
    }
  });
  const hide = document.querySelector("#hide");
  hide.addEventListener("change", function(e) {
    if (hide.checked) {
      console.log("checked");
      list.style.display = "none";
    } else {
      console.log("not checked");
      list.style.display = "initial";
    }
  });
  //Search form
  const search = document.forms["search-books"];
  search.addEventListener("keyup", function(e) {
    e.preventDefault();
    searchValue = e.target.value.toLowerCase();
    console.log(searchValue);
    const books = document.getElementsByTagName("li");
    Array.from(books).forEach(function(book) {
      const title = book.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(searchValue) != -1) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  });
  //Tabs
  const tabs = document.querySelector(".tabs");
  const panels = document.querySelectorAll(".panel");
  tabs.addEventListener("click", function(e) {
    if (e.target.tagName == "LI") {
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach(function(panel) {
        if (panel == targetPanel) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    }
  });
});
