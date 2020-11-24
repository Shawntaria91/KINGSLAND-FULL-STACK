function solve() {
  //  '<br />74 111 104 110<br />65 100 97 109 115<br />82 111 103 101 114<br />Kingsland '
  let resultHTML = document.getElementById('result');
  let input = document.getElementById('text').value;
  let numbersToLettersArray = [];
  let lettersArr = [];
  let inputArr = input.split(' ');

  for (i = 0; i < inputArr.length; i++) {
    let tempItem = inputArr[i];
    console.log('temp item is ', tempItem);

    if (!Number(tempItem)) {
      lettersArr.push(inputArr[i]);
    } else {
      numbersToLettersArray.push(String.fromCharCode(inputArr[i]));
    }
  }
  
  for (word of lettersArr) {
    let tempArr = [];

    for (letter of word) {
      tempArr.push(letter.charCodeAt(letter));
    }
    console.log(tempArr.join(' '));
    let newP = document.createElement('p');
    newP.innerText = tempArr.join(' ');
    resultHTML.appendChild(newP);
  }
  console.log('make me text', numbersToLettersArray);
  let numNewP = document.createElement('p');
  numNewP.innerText = numbersToLettersArray.join('');
  resultHTML.appendChild(numNewP); 
}

// 75 105 John Adams 110 103 115 Roger 108 97 110 100
