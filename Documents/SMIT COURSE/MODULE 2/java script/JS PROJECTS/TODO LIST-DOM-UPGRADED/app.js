
var container = document.querySelector(".todo-container");

function addtodo() {
  var input = document.querySelector(".todo-input");
  var inputValue = input.value;

  if (input.value == "") {
    alert("enter something");
    return;
  }

  var todo1sttd = document.createElement("td");
  todo1sttd.setAttribute("class", "todo-para");

  var todotext = document.createElement("p");
  todotext.setAttribute("class", "text");
  todotext.innerText = inputValue;

  var todo2ndtd = document.createElement("td");
  todo2ndtd.setAttribute("class", "todo-delete");

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "DELETE";
  deleteButton.setAttribute("class", "delete-button");
  deleteButton.setAttribute("onclick", "deletetodo(this)");

  var todo3rdtd = document.createElement("td");
  todo3rdtd.setAttribute("class", "todo-edit");

  var editButton = document.createElement("button");
  editButton.innerText = "EDIT";
  editButton.setAttribute("class", "edit-button");
  editButton.setAttribute("onclick", "edittodo(this)");

  todo1sttd.appendChild(todotext);
  todo2ndtd.appendChild(deleteButton);
  todo3rdtd.appendChild(editButton);
  
  var todoRow = document.createElement("tr");
  todoRow.setAttribute("class", "todo-row");

  todoRow.appendChild(todo1sttd);
  todoRow.appendChild(todo2ndtd);
  todoRow.appendChild(todo3rdtd);
  container.appendChild(todoRow);

  input.value = "";
}

function deletetodo(e) {
  var todoitem = e.parentNode;
  var row = todoitem.parentNode;
  container.removeChild(row);
}

function edittodo(e) {
  var input = document.querySelector(".todo-input");
  var inputValue = input.value;

  var edititem = e.parentNode;
  var row = edititem.parentNode;
  var edittext = row.querySelector(".text");

  if (inputValue === "") {
    alert("enter something");
    return;
  }
  edittext.innerText = inputValue;



  input.value = "";
}

function clearall(){
  var container = document.querySelector(".todo-container");
  container.innerHTML = "";
}
