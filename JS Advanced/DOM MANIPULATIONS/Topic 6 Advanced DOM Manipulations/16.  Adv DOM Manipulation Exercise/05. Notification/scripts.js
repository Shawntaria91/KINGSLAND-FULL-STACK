function notify(message) {
    let newDiv = document.querySelector("#notification");
    newDiv.style.display = "block";
    newDiv.textContent = message;
    setTimeout(function() {
        newDiv.style.display = "none";
    }, 2000);
}