function deleteByEmail() {
  let emailInputBox = document.getElementsByName("email")[0];
  let emailToDelete = emailInputBox.value;
  let resultsDiv = document. getElementById("result");
  let theTable = document.getElementById("customers");
  let theRows = theTable.getElementsByTagName("tr");

  for (i=0; i< theRows.length; i++){
    let anEmail = theRows[i].cells[1].innerText;
    if (anEmail == emailToDelete){
      document.getElementById("customers").deleteRow(i);
      resultsDiv.innerText= "Deleted!";
      break;
    } else {
      console.log("no match")
      resultsDiv.innerText = "Not found";
    }
  }
}