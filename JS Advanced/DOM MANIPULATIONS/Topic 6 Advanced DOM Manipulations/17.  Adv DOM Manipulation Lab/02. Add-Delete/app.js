function addItem() {
  const itemsList = document.querySelector("#items");
  const newText = document.querySelector("#newText").value;
  let newListItem = document.createElement("li");
  newListItem.innerText = newText + " ";
  let deleteLink = document.createElement("a");
  deleteLink.innerText = `[Delete]`;
  deleteLink.href = "#";
  deleteLink.addEventListener("click", function(e) {
      e.preventDefault();
      this.parentNode.parentNode.removeChild(this.parentNode);
  });
  newListItem.appendChild(deleteLink);
  itemsList.appendChild(newListItem);
  document.querySelector("#newText").value = "";
}
