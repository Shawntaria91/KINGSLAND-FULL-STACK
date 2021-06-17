function main(input){

let solve = (function () {
    let sum = 0;
 
    return function add(number) {
        sum += number;
        console.log(sum);
        return add;
    }
})();
    return solve(input);
}

//}
//}
// main(1);
main(1)(6)(-3);
// main(0)(-5);
// main(1)(1)(1)(1)(1);
// main(-10)(-7)(-20);
