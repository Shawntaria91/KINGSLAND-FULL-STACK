// add' enter' key functionality to add item 
let textInputBox = document.querySelector('#newItemText');
textInputBox.addEventListener('keyup', enterFunc);

function enterFunc(event){
  event.key == "Enter" ? addItem() : 0;
}

function addItem() {
  let textInput = document.querySelector('#newItemText').value; //text from input box
  let newListItem = document.createElement("li"); // create new <li> tag
  newListItem.textContent = textInput; //fill <li> tags with text from the input box
  document.querySelector("#items").appendChild(newListItem); //append new <li> tag to items list
  document.querySelector('#newItemText').value = ''; //clear the input box
}



