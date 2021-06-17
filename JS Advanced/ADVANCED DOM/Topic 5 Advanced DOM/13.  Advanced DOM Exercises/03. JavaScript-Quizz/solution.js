// 3. JavaScript Quiz
// Write a function that has the functionality of a quiz. 
// There are three sections that contain one question and 2 possible answers.
// The right answer is only one! When one of the list elements is clicked, the next section must appear (if any…). After all three questions have been answered, the result div must appear. (Use 'none' and 'block' to hide
// and show the question sections)
// If all questions are answered correctly, you should print the following message: "You are recognized as top JavaScript fan!"
// Otherwise, just print "You have {rightAnswers} right answers".
// The right answers are (onclick, JSON.stringify() and A programming API for HTML and XML
// documents). 
function solve() {
    let correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
    let rightAnswered = 0;
    let index = 0;
    Array
        .from(document.querySelectorAll(".answer-text")) //convert HTML collection of all answer-text elements to a proper Array
        .map((answer) => answer.addEventListener("click", function nextPage(event) { //add event listener to all elements in the array (once you click, hide current page and show next page)
            if (correctAnswers.includes(event.target.textContent)) {
                rightAnswered++; //increment the counter for correct answers if the selection matches any of the correct answers defined earlier
            }
            let currSection = document.querySelectorAll("section")[index];// currSection is the index number of the current 'section' 
            currSection.style.display = "none";//hides current section 
            if (document.querySelectorAll("section")[index + 1] !== undefined) {// if you are not on the last section of the quiz, 
                let nextSection = document.querySelectorAll("section")[index + 1];// define next section  (currSection[index + 1])
                nextSection.style.display = "block"; //show the next section
                index++; // increment the index number
            } else { // you are on the last section of the quiz,
                document.querySelector("#results").style.display = "block"; // show 1 of 2 'results' sections
                if (rightAnswered == 3) { // if all 3 answers are correct, show this:
                    document.querySelector("#results h1").textContent = "You are recognized as top JavaScript fan!";
                } else { // otherwise, show this:
                    document.querySelector("#results h1").textContent = `You have ${rightAnswered} right answers`;
                }
            }
        }));
}

