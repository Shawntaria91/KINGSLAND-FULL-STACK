function subtract() {
    let ipTextNum1 = document.querySelector('#firstNumber');
    let ipTextNum2 = document.querySelector('#secondNumber');
    ipTextNum1.disabled = false;
    ipTextNum2.disabled = false;
        let num1 = Number(document.querySelector('#firstNumber').value); 
        let num2 = Number(document.querySelector('#secondNumber').value);
        document.querySelector('#result').textContent = num1 - num2;
    ipTextNum1.addEventListener('change', function(){
        let num1 = Number(document.querySelector('#firstNumber').value); 
        let num2 = Number(document.querySelector('#secondNumber').value);
        document.querySelector('result').textContent = num1 - num2;
    });
    ipTextNum2.addEventListener('change', function(){
        let num1 = Number(document.querySelector('#firstNumber').value); 
        let num2 = Number(document.querySelector('#secondNumber').value);
        document.querySelector('#result').textContent = num1 - num2;
    });
}