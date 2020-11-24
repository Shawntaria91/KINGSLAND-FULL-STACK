// All unique pairs that equal "equalToSum"

function main(array, equalToSum) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == equalToSum) {
                console.log(`${array[i]} ${array[j]}`);
            }
        }
    }
}
main([1, 7, 6, 2, 19, 23], 8);



