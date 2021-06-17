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

function main(argument){
    solve();
}
let solve = (function () {
    let sum = 0;

    return function add(number) {
        sum += number;
        add.toString = function () {
            return sum;
        };
        return add;
    }
})();
console.log(solve(1)(6)(-3).toString());
//4
console.log(solve(-10)(-7)(-20).toString());
//-37
console.log(solve(1)(1)(1)(1)(1).toString());
//5