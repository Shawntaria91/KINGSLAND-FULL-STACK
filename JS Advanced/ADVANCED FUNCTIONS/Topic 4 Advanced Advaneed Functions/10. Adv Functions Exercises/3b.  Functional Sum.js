// 3. Functional Sum
// Write a function that adds a number passed to it to an internal sum and returns itself with its internal sum set to
// the new value, so it can be chained in a functional manner.
// Input
// Your function needs to take one numeric argument.
// Output
// Your function needs to return itself with an updated context.
// function main() {
// }
// main(add(1));
// main(add(1)(6)(-3));

// Example
// Input                            Output
// add(1)                             1
// add(1)(6)(-3)                      4

function main(num) {
    return function(secondNum) {
        return secondNum + num;
    };
}
function main() {
    let sum = 0;
    return main(add(num)){
        sum += num;
    } 
    }
    const f = (function () {
        return function main() {
        console.log();
        }
       })();
       
    let str = '';
    return {
    append: (s) => str += s,
    removeStart: (n) => str = str.substring(n),
    removeEnd: (n) => str = str.substring(0, str.length - n),
    print: () => console.log(str)
    };
}


