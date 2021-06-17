
function addItem() {
  let newText = document.querySelector("#newItemText" ).value;
  let newValue = document.querySelector("#newItemValue").value;
  let option = document.createElement("option");
  option.value = newValue;
  option.text = newText;
  document.querySelector("#menu").add(option);
  newText.value = "";
  newValue.value = "";
}