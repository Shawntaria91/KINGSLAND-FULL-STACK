function toggle() {
    let button = document.querySelector(".button");
    let extraDiv = document.querySelector("#extra");
    if (button.textContent == "More") {
        extraDiv.style.display = "block";
        button.textContent = "Less";
    } else {
        extraDiv.style.display = "none";
        button.textContent = "More";
    }
}