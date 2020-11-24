function solve() {
  let resultHTML = document.getElementById("result");
  let input = document.getElementById("text").value.toLowerCase();
  let currentCase = document.getElementById("naming-convention").value;
  //console.log(input, currentCase);
  let wordsArray = input.split(" ");
  //console.log(wordsArray);
  if (currentCase === "Camel Case") {
    //console.log(currentCase);
    // CODE FOR CAMEL CASE GOES HERE
    camelCase(wordsArray);
  } else if (currentCase === "Pascal Case") {
    //console.log(currentCase);
    // CODE FOR PASCAL CASE GOES HERE
    pascalCase(wordsArray);
  } else {
    resultHTML.innerText = "Error!";
  }
  function camelCase(someArr) {
    //console.log("function camel case", someArr);
    let newArr = [];
    newArr.push(someArr[0]);
    for (i = 1; i < someArr.length; i++) {
      let tempArr = someArr[i].split("");
      tempArr[0] = tempArr[0].toUpperCase(); // i == I
      newArr.push(tempArr.join(""));
    }
    console.log("new array [28]", newArr.join(""));
    resultHTML.innerText = newArr.join("");
  }
  function pascalCase(someArr) {
    console.log("function pascal case", someArr);
    let newArr = [];
    for (i = 0; i < someArr.length; i++) {
      let tempArr = someArr[i].split("");
      tempArr[0] = tempArr[0].toUpperCase(); // i == I
      newArr.push(tempArr.join(""));
    }
    console.log("new array [28]", newArr.join(""));
    resultHTML.innerText = newArr.join("");
  }
}