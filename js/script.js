// check off specific todos by clicking

const toDoList = document.getElementById("todo-list");

toDoList.addEventListener("click", function (e) {
  let target = e.target;
  target.classList.toggle("completed");
});

//click to remove all to do

const deleteAllBtn = document.getElementById("delete-all-btn");

deleteAllBtn.addEventListener("click", function () {
  let listItems = document.querySelectorAll("li");
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].remove();
  }
});

//add new todo

const addToDoInput = document.querySelector("#add-todo-input");

addToDoInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    //dinamically add items li and icon
    let newLi = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = '<ion-icon name="trash"></ion-icon>';

    //remove items from link by clicking on icon
    span.addEventListener("click", function () {
      newLi.remove();
    });

    // append item to ul

    newLi.appendChild(document.createTextNode(addToDoInput.value));
    newLi.style.textTransform = "capitalize";

    toDoList.appendChild(newLi);
    newLi.appendChild(span);

    addToDoInput.value = document.querySelector("placeholder");
  }
});

// show and hide input

const plus = document.querySelector(".plus");

plus.addEventListener("click", function () {
  addToDoInput.classList.toggle("fade");
});
