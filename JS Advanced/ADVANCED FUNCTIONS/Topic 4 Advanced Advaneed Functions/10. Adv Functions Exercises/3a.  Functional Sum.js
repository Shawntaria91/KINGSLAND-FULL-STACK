function main(func,parameter){
}

function add(num) {
    let sum = num;
    
    function calc(num2) {
        sum += num2;
        return calc;
    }
    calc.toString = function() {
        return sum;
    };
    return calc;
}

main(add(1)(2)(4)(3));