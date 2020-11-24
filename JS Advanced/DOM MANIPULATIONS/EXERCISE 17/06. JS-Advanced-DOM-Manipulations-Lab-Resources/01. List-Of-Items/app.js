// Write a function that reads the text inside an input and appends the specified text to a list
// inside an HTML page. 
// Submit only the addItem() function. 
// Input/Output
//There will be no input/output. Your program should instead modify the DOM of the given HTML document. 

function addItem() {
  let textInput = document.getElementById('newItemText').value;
  let list = document.createElement('li');

  list.appendChild(document.createTextNode(textInput));
  document.getElementById('items').appendChild(list);
  document.getElementById('newItemText').value = '';
}
