function solve() {
    const inputBox = document.querySelector("input");
    const button = document.querySelector("button");
    const listItemsArr = Array.from(document.querySelectorAll("li"));

    button.addEventListener("click", displayName);
    inputBox.addEventListener('keyup', enterFunc);
    function enterFunc(event){
        if (event.key == "Enter" ){
            return displayName();
        }
    }
    function displayName(){
    let firstLetter = inputBox.value.charAt(0).toLowerCase(); // define first letter of the input name, set to lower case
    let firstLetterAsciiValue = firstLetter.charCodeAt(0);// convert the first letter to its Ascii value number
    let indexNum = firstLetterAsciiValue - 97; // define index number of each letter(Ascii number - 97) 
    // Ascii of 'a' = 97.  97-97 = 0 so indexNum of 'a' = 0, 'b' = 1, ..... this logic was from Andy Keh, rest of the code is from Ryan Garner
    let indexLocation = listItemsArr[indexNum]; // indexNum takes first letter of input and returns a number to use as the index for the array of list items.
    //indexLocation defines where the input will go in the array of list items based on the index number defined by indexNum
    let inputName = inputBox.value;

    function capitalize(inputName) {
        return inputName.charAt(0).toUpperCase() + inputName.slice(1);
    }
        let cappedName = capitalize(inputName);  //define the capitalized name
        let currentArray = [];// define empty array
            if (indexLocation.textContent !== ''){//if the index location has a name/names in it already,
                let tempString = indexLocation.textContent; // set all the names already in the list item to 'tempString'
                tempStringArr = tempString.split(', '); // split the names in 'tempString' - return an array of names
                tempStringArr.map(element =>currentArray.push(element)); //push each name to currentArray
                indexLocation.textContent = ''; // clear the index location
            }
        currentArray.push(cappedName); // push current name (which has been capitalized) to currentArray
        currentArray.sort(); // sort the array in ascending order
        let newString = currentArray.join(', ');// join currentArray to return a string
        indexLocation.textContent = `${newString}`; // set the new string of sorted names to location index
        inputBox.value = ''; // clear input box
    }
}
