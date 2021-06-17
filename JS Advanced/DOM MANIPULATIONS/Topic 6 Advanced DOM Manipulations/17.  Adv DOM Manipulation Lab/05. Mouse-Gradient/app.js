function attachGradientEvents() {
    
    let theGradient = document.getElementById("gradient");
    let theResult = document.getElementById('result');
    theGradient.addEventListener("click", function(event) {
        var x = event.clientX; 
        theResult.innerText = `${Math.floor(((x / 300 * 100) - 3).toFixed(0))} %`;
        console.log(x);
    });
    
}