//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//eventlisteners
document.addEventListener("DOMContentLoaded", getTodo);
todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//functions
function addtodo(event) {
  event.preventDefault(); //preventt form reloading
  console.log("added");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  saveLocalTodo(todoInput.value);
  //check mark button
  const iscompleted = document.createElement("button");
  iscompleted.innerHTML = '<i class="fas fa-check"></i>';
  iscompleted.classList.add("complete-btn");
  todoDiv.appendChild(iscompleted);

  const trash = document.createElement("button");
  trash.innerHTML = '<i class="fas fa-trash"></i>';
  trash.classList.add("trash-btn");
  todoDiv.appendChild(trash);

  //apend to list
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(event) {
  console.log(event.target);
  const item = event.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    removeLocalTodo(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //Adding checkmark to completed task
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  console.log(e.target.value);
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        console.log(todo);
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          console.log(todos.e);
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          console.log(todos.e);
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodo(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function getTodo() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    
    //check mark button
    const iscompleted = document.createElement("button");
    iscompleted.innerHTML = '<i class="fas fa-check"></i>';
    iscompleted.classList.add("complete-btn");
    todoDiv.appendChild(iscompleted);

    const trash = document.createElement("button");
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    trash.classList.add("trash-btn");
    todoDiv.appendChild(trash);

    //apend to list
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodo(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoindex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoindex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
