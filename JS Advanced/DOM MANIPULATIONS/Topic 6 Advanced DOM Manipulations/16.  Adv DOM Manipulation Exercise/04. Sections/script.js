function create(words) {
    let mainDiv = document.querySelector("#content");
    
    for (let word of words){
        let newDiv = document.createElement("div");
        let paragraph = document.createElement("p");
        paragraph.style.display = "none";
        newDiv.addEventListener("click", (event) => {
            paragraph.style.display = "block";
        });
        paragraph.textContent = word;
        newDiv.appendChild(paragraph);
        mainDiv.appendChild(newDiv);
        console.log(newDiv.value);
    }
}