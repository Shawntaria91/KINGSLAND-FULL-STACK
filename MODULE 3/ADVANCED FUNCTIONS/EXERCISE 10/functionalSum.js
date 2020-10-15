// Write a function that adds a number passed to it to an internal sum and 
// returns itself with its internal sum set to the new value, so it can be chained in a functional manner.

// Input
// Your function needs to take one numeric argument.

// Output
// Your function needs to return itself with an updated context.



function main(input) {

    let solve = (function() {

        let sum = 0;
        return function add(num) {
            sum += num;
            console.log(sum);
            return add;
        }
    })();
    return solve(input);
}
main(add(1));