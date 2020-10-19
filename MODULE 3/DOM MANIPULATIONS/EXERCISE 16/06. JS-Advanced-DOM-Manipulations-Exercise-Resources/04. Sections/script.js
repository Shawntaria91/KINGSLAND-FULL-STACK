// You will receive an array of strings. 
// For each string, create a div with a paragraph with the string in it.
// Each paragraph is initially hidden (display:none). 
// Add a click event listener to each div that displays the hidden paragraph. 
// Finally, you should append all divs to the element with an id "content".

function create(words) {
   let initialDiv = document.getElementById("content");
   for (let i = 0; i < words.length; i++) {
       let word = words[i];
       let newDiv = document.createElement("div");
       let paragraph = document.createElement("p");
       paragraph.style.display = "none";
       newDiv.addEventListener("click", handler);

      function handler(event) {
           paragraph.style.display = "block";
      }
      paragraph.textContent = word;
      newDiv.appendChild(paragraph);
      initialDiv.appendChild(newDiv);
      console.log(newDiv.value);
   }
}