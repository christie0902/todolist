function newItem(event) {
  event.preventDefault();
  const inputField = document.querySelector("#task");

  const checklist = document.querySelector(".checklist");

  const listItem = document.createElement("div");
  listItem.setAttribute("class", "listItem");

  const checkBoxContainer = document.createElement("div");
  checkBoxContainer.setAttribute("class", "checkBoxContainer");

  const taskLabel = document.createElement("label");
  taskLabel.setAttribute("for", "label");

  const checkInput = document.createElement("input");
  checkInput.setAttribute("type", "checkbox");
  checkInput.setAttribute("id", "task");
  checkInput.setAttribute("name", "task");

  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", "btn-delete");

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  buttonContainer.appendChild(deleteButton);
  checkBoxContainer.appendChild(checkInput);
  checkBoxContainer.appendChild(taskLabel);

  listItem.appendChild(checkBoxContainer);
  listItem.appendChild(buttonContainer);

  checklist.appendChild(listItem);

  taskLabel.innerText = inputField.value;

  //console.log(inputField.value);

  deleteButton.addEventListener("click", (event) => deleteItem(event));
}

function deleteItem(event) {
  event.preventDefault();
  event.target.closest(".listItem").remove();
}
