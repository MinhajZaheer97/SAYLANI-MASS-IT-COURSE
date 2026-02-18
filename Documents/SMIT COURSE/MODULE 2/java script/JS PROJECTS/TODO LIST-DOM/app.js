function addtodo() {
  var container = document.querySelector(".todo-container");
  var input = document.querySelector(".todo-input");
  var inputValue = input.value;

  if (input.value == ""){
    alert("enter something")
    return;
  } 

  var todoDiv = document.createElement("div");
  todoDiv.className = "todo-div";

  var todotext = document.createElement("h1");
  todotext.textContent = inputValue;

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "DELETE TODO";
  deleteButton.onclick = function () {
    deletetodo(this);
  };

  todoDiv.appendChild(todotext);
  todoDiv.appendChild(deleteButton);
  container.appendChild(todoDiv);

  input.value = "";
}

function deletetodo(parent) {
  parent.parentElement.remove();
}
