
var container = document.querySelector(".todo-container");

function addtodo() {
  var input = document.querySelector(".todo-input");
  var inputValue = input.value;

  if (input.value == "") {

    alertBox.querySelector("p").innerHTML = "Please enter something";
    alertBox.style.display = "flex";
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
  deleteButton.setAttribute("class", "delete-button");
  deleteButton.setAttribute("onclick", "deletetodo(this)");

  // delete imogi

  var deleteimg = document.createElement("img");
  deleteimg.src = "cross image.jpg"; 
  deleteimg.setAttribute("class", "delete-img");
  deleteimg.setAttribute("alt", "Delete");
  deleteButton.appendChild(deleteimg);

  var todo3rdtd = document.createElement("td");
  todo3rdtd.setAttribute("class", "todo-edit");

  var editButton = document.createElement("button");
  editButton.setAttribute("class", "edit-button");
  editButton.setAttribute("onclick", "edittodo(this)");

  // edit imogi

  var editimg = document.createElement("img");
  editimg.src = "edit.png"; 
  editimg.setAttribute("class", "edit-img");
  editimg.setAttribute("alt", "Edit");
  editButton.appendChild(editimg);

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

    alertBox.querySelector("p").innerHTML = "Please enter something";
    alertBox.style.display = "flex";
    return;
  }
  edittext.innerText = inputValue;



  input.value = "";
}

function clearall(){
  var container = document.querySelector(".todo-container");
  container.innerHTML = "";
}
