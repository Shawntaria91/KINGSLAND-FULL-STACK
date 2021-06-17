//4. Last K Numbers Sequence
// You are given two integers n and k. Write a JS function that generates and prints the following sequence:
//  The first element is 1
//  Every following element equals the sum of the previous k elements
//  The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second –
// the number k.
// The output is printed on the console on a single line, separated by space.
function main(n,k){
    sumBySliceReduce(n, k);
}

function sumBySliceReduce(n, k) {//n = total number of elements to be created in array, k = number of elements to sum
    let result = [1];
    for (let i = 1; i < n; i++) {
        let current = result.slice(k * -1).reduce((a, b) => a + b);
        //(k * -1) = number of elements to slice to the left of the current number
        result[i] = current;//set value of "current" to index[i]
    }
    console.log(result.join(' '));
}
main(6, 3);
// 1 1 2 4 7 13
main(8, 2);               
// 1 1 2 3 5 8 13 21

// Explanation
// The 2nd element (1) is the sum of the 3 elements before it, but there is only 1, so we take that. The third
// element is the sum of the first 2 (1 and 1) and the 4th – the sum of 1, 1 and 2. The 5th element is the sum of
// the 2nd, 3rd and 4th (1, 2 and 4) and so on.