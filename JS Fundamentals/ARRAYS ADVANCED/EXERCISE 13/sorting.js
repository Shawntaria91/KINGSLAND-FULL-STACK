/**
 * write a function that sorts an array of numbers
 * first element is the biggest
 * second element is the smallest
 * third element is second biggest
 * fourth element is second smallest
 * pattern keeps going like this
 * print elements on one row separated by a single space
 * 
 */

 // points.sort(function(a, b){return a-b});

 function main(numList) {
    
    let output = "";
    let biggest = -Infinity;
    let smallest = Infinity;
    let counter = 0;

    for (i = 0; i < numList.length; i++) {
        if (counter % 2 == 0) {
            for (j = 0; j < numList.length; j++) {
                if (numList[j] > biggest && numList[j] != undefined) {
                    biggest = numList[j];
                } else if (numList[j] ==  undefined) {
                    output += biggest + " ";
                    numList.splice(j, 1);
                    counter++;
                    i++;
                }
            }
            
        } else {
            for (j = 0; j < numList.length; j++) {
                if (numList[j] < smallest) {
                    smallest = numList[j];
                    
                    j++;
                }
            }
            numList.shift();
            counter++;
            i++;

            }
        }
    console.log(output.trim());
 }
 main([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

 //Answer: 94 1 69 2 63 3 52 18 31 21