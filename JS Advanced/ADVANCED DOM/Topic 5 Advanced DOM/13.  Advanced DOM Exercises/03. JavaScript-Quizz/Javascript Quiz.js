function solve() {
    let correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
    let rightAnswered = 0;
    let index = 0;
    Array.from(document.querySelectorAll(".answer-text"))
        .map((x) => x.addEventListener("click", function nextSection(e) {
            if (correctAnswers.includes(e.target.textContent)) {
                rightAnswered++;
            }
            let currSection = document.querySelectorAll("section")[index];
            currSection.style.display = "none";
            if (document.querySelectorAll("section")[index + 1] !== undefined) {
                let nextSection = document.querySelectorAll("section")[index + 1];
                nextSection.style.display = "block";
                index++;
            } else {
                document.querySelector("#results").style.display = "block";
                if (rightAnswered !== 3) {
                    document.querySelector("#results h1").textContent = `You have ${rightAnswered} right answers`;
                } else {
                    document.querySelector("#results h1").textContent = "You are recognized as top JavaScript fan!";
                }
            }
        }));
}

// function solve() {
//     let correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
//     let rightAnswerCounter = 0;
//     let index = 0;
//     Array
//         .from(document.querySelectorAll(".answer-text"))//turns HTML collection into an array (to use array methods)
//         .map((answer) => answer.addEventListener("click", function nextSection(event) {
//             let selectedAnswer = event.target.textContent;
//             correctAnswers.includes(selectedAnswer) ? rightAnswerCounter++ : 0;

//             let currSection = document.querySelectorAll("section")[index];
//             currSection.style.display = "none";

//             let nextSection = document.querySelectorAll("section")[index + 1];

//             if(nextSection != undefined){
//                 nextSection.style.display = "block";
//                 index++;
//             }else{
//                 document.querySelector("#results").style.display = "block" 
//             rightAnswerCounter == 3 ? results = "You are recognized as top JavaScript fan!" :
//             results  = `You have ${rightAnswerCounter} right answers`;
            
  
//         }));

        
// }