// Write a function that has the functionality of a quiz. 
// There are three sections that contain one question and 2 possible answers.
// The right answer is only one! 
// When one of the list elements is clicked, the next section must appear (if any…). 
// After all three questions have been answered, the result div must appear. 
// (Use 'none' and 'block' to hide and show the question sections)
// If all questions are answered correctly, you should print the following message: 
// "You are recognized as top JavaScript fan!"
// Otherwise, just print "You have {rightAnswers} right answers".
// The right answers are (onclick, JSON.stringify() and A programming API for HTML and XML documents). 

function solve() {
  let AnswerKey = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let numOfAnsCorrect = 0;
  let idx = 0;
  Array
      .from(document.querySelectorAll(".answer-text"))
      .map((x) => x.addEventListener("click", function nextSection(e) {
          if (AnswerKey.includes(e.target.textContent)) {
              numOfAnsCorrect++;
          }
          let currSection = document.querySelectorAll("section")[idx];
          currSection.style.display = "none";
          if (document.querySelectorAll("section")[idx + 1] !== undefined) {
              let nextSection = document.querySelectorAll("section")[idx + 1];
              nextSection.style.display = "block";
              idx++;
          } else {
              document.querySelector("#results").style.display = "block";
              if (numOfAnsCorrect !== 3) {
                  document.querySelector("#results h1").textContent = `You have ${numOfAnsCorrect} right answers`;
              } else {
                  document.querySelector("#results h1").textContent = "You are recognized as top JavaScript fan!";
              }
          }
      }));
}
