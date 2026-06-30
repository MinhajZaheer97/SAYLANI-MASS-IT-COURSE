  var container = document.querySelector(".todo-container");

function addtodo() {

  var input = document.querySelector(".todo-input");
  var inputValue = input.value;

  if (input.value == ""){
    alert("enter something")
    return;
  } 

  var todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todo-div")

  var todotext = document.createElement("p");
  todotext.setAttribute("class" , "text")
  todotext.innerText = inputValue;

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "DELETE TODO";
  deleteButton.setAttribute("class", "delete-button");
  deleteButton.setAttribute("onclick" , "deletetodo(this)")

  var editButton = document.createElement("button");
  editButton.innerText = "EDIT TODO";
  editButton.setAttribute("class", "edit-button");
  editButton.setAttribute("onclick" , "edittodo(this)") 

  todoDiv.appendChild(todotext);
  todoDiv.appendChild(deleteButton);
  todoDiv.appendChild(editButton);
  container.appendChild(todoDiv);

  input.value = "";
}

function deletetodo(e) {
  var todoitem = e.parentNode
  container.removeChild(todoitem);

}

function edittodo(e){
    var input = document.querySelector(".todo-input");
    var inputValue = input.value;

    var edititem = e.parentNode
    var edittext = edititem.querySelector(".text")

    if (inputValue === ""){
      alert("enter something")
      return
    }
    edittext.innerText = inputValue

    input.value = "";
}



