// Write a program that performs different operations on an array of elements. Implement the following

// operations:

// Sum(ai) - calculates the sum all elements from the input array

// Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array

// Concat(ai) - concatenates the string representations of all elements from the array

// The input comes as an array of number elements.

// The output should be printed on the console on a new line for each of the operations.

function main(elems) {

    aggrElements(elems);
}

function aggrElements(elems) {

        aggr(elems, 0, (a, b) => a + b);

        aggr(elems, 0, (a, b) => a + 1 / b);

        aggr(elems, '', (a, b) => a + b);

    function aggr(arr, startValue, func) {
        let result = startValue;
        for (let i = 0; i < arr.length; i++) {
            result = func(result, arr[i]);
        }

        if (typeof result == "string") {
            console.log(result);
        } else {
            
            if (Number.isInteger(result)) {
                console.log(result);
            } else {
                console.log(result.toFixed(4));
            }
        }
    }
}
main([1, 2, 3]);
main([2, 4, 8, 16]);